import { NextResponse } from "next/server"
import clientPromise, { Collections } from "@/lib/mongodb"
import { generateOTP, generateOTPExpiry } from "@/utils/authUtils"
import { sendOTPEmail } from "@/utils/emailUtils"

export async function POST(request: Request) {
  try {
    const body = await request.text()
    console.log("Received request body:", body)

    let requestData
    try {
      requestData = JSON.parse(body)
    } catch (error) {
      console.error("Error parsing request JSON:", error)
      return NextResponse.json({ error: "Invalid JSON in request body" }, { status: 400 })
    }

    const { name, email, mobileNumber, isStudent, schoolName, schoolClass, city, interests } = requestData

    const client = await clientPromise
    const db = client.db("astcorp_db")

    // Check if user already exists in any collection
    const userCollections = [Collections.USER, Collections.STUDENTS]
    for (const collection of userCollections) {
      const existingUser = await db.collection(collection).findOne({ email })
      if (existingUser) {
        return NextResponse.json({ error: "User with this email already exists" }, { status: 400 })
      }
    }

    // Generate OTP and expiry
    const otp = generateOTP()
    const otpExpiry = generateOTPExpiry()

    // Prepare user data
    const userData = {
      name,
      email,
      mobileNumber,
      role: "user",
      isApproved: false,
      createdAt: new Date(),
      trialStartDate: new Date(),
      trialEndDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days trial
      isTrialActive: true,
      hasSubscription: false,
      interests,
      otp,
      otpExpiry,
      isActivated: false,
    }

    // If the user is a student, add student-specific fields
    if (isStudent) {
      Object.assign(userData, {
        isStudent,
        schoolName,
        schoolClass,
        city,
      })
    }

    // Insert user data into the appropriate collection
    const collection = isStudent ? Collections.STUDENTS : Collections.USER
    const result = await db.collection(collection).insertOne(userData)
    console.log("User inserted with ID:", result.insertedId)

    // Send OTP email
    await sendOTPEmail(email, otp)

    return NextResponse.json(
      {
        message: "Account created successfully. Please check your email for the activation code.",
        userId: result.insertedId,
        email: email, // Send back email for OTP verification
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

