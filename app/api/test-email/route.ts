import { NextResponse } from "next/server"
import { sendOTPEmail } from "@/utils/emailUtils"

export async function GET() {
  try {
    await sendOTPEmail("test@example.com", "123456")
    return NextResponse.json({ message: "Test email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Failed to send test email", error)
    return NextResponse.json({ error: "Failed to send test email" }, { status: 500 })
  }
}

