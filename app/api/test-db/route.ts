import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function GET() {
  try {
    const client = await clientPromise
    await client.db("astcorp_db").command({ ping: 1 })
    return NextResponse.json({ message: "Connected successfully to MongoDB" }, { status: 200 })
  } catch (error) {
    console.error("Failed to connect to MongoDB", error)
    return NextResponse.json({ error: "Failed to connect to MongoDB" }, { status: 500 })
  }
}

