import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { verify } from "jsonwebtoken"
import clientPromise, { Collections } from "@/lib/mongodb"
import { ObjectId } from "mongodb"

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined")
}

export async function GET() {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get("auth-token")

    if (!token) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const decoded = verify(token.value, process.env.JWT_SECRET) as { userId: string }
    const client = await clientPromise
    const db = client.db("astcorp_db")

    const userCollections = [Collections.USER, Collections.STUDENTS]
    let user = null

    for (const collection of userCollections) {
      user = await db
        .collection(collection)
        .findOne({ _id: new ObjectId(decoded.userId) }, { projection: { name: 1, email: 1, lastLogin: 1 } })
      if (user) break
    }

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    return NextResponse.json({
      name: user.name,
      email: user.email,
      lastLogin: user.lastLogin || null,
    })
  } catch (error) {
    console.error("Error fetching user data:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

