import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import clientPromise, { Collections } from "@/lib/mongodb"
import { sign } from "jsonwebtoken"

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined")
}

export async function POST(request: Request) {
  try {
    const { email, otp } = await request.json()

    const client = await clientPromise
    const db = client.db("astcorp_db")

    // Check both collections for the user
    const userCollections = [Collections.USER, Collections.STUDENTS]
    let user = null
    let collectionName = ""

    for (const collection of userCollections) {
      user = await db.collection(collection).findOne({ email })
      if (user) {
        collectionName = collection
        break
      }
    }

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    // Verify OTP
    if (!user.loginOtp || user.loginOtp !== otp) {
      return NextResponse.json({ error: "Invalid OTP" }, { status: 400 })
    }

    // Check if OTP is expired
    if (new Date() > new Date(user.loginOtpExpiry)) {
      return NextResponse.json({ error: "OTP has expired" }, { status: 400 })
    }

    // Clear login OTP
    await db.collection(collectionName).updateOne(
      { _id: user._id },
      {
        $unset: { loginOtp: "", loginOtpExpiry: "" },
      },
    )

    // Generate JWT token
    const token = sign(
      {
        userId: user._id.toString(),
        email: user.email,
        name: user.name,
        isStudent: collectionName === Collections.STUDENTS,
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" },
    )

    // Set cookie
    cookies().set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 24 hours
    })

    return NextResponse.json({ message: "Login successful" }, { status: 200 })
  } catch (error) {
    console.error("Login verification error:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

