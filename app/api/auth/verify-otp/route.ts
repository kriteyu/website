import { NextResponse } from "next/server"
import clientPromise, { Collections } from "@/lib/mongodb"

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

    if (user.isActivated) {
      return NextResponse.json({ message: "Account is already activated" }, { status: 200 })
    }

    // Check if OTP is expired
    if (new Date() > new Date(user.otpExpiry)) {
      return NextResponse.json({ error: "OTP has expired" }, { status: 400 })
    }

    // Verify OTP
    if (user.otp !== otp) {
      return NextResponse.json({ error: "Invalid OTP" }, { status: 400 })
    }

    // Activate account
    await db.collection(collectionName).updateOne(
      { _id: user._id },
      {
        $set: { isActivated: true, isApproved: true },
        $unset: { otp: "", otpExpiry: "" },
      },
    )

    return NextResponse.json({ message: "Account activated successfully" }, { status: 200 })
  } catch (error) {
    console.error("OTP verification error:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

