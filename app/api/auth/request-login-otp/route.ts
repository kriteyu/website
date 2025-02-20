import { NextResponse } from "next/server"
import clientPromise, { Collections } from "@/lib/mongodb"
import { generateOTP, generateOTPExpiry } from "@/utils/authUtils"
import { sendOTPEmail } from "@/utils/emailUtils"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

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

    if (!user.isActivated) {
      return NextResponse.json({ error: "Account not activated" }, { status: 400 })
    }

    // Generate new OTP and expiry
    const otp = generateOTP()
    const otpExpiry = generateOTPExpiry()

    // Update user with new OTP
    await db.collection(collectionName).updateOne(
      { _id: user._id },
      {
        $set: {
          loginOtp: otp,
          loginOtpExpiry: otpExpiry,
        },
      },
    )

    // Send OTP email
    await sendOTPEmail(email, otp)

    return NextResponse.json({ message: "OTP sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Login OTP request error:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

