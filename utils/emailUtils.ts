import nodemailer from "nodemailer"

export async function sendOTPEmail(email: string, otp: string) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number.parseInt(process.env.EMAIL_PORT || "587"),
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: `KymaAI <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Your KymaAI Account Activation Code",
    text: `
      Welcome to KymaAI!
      
      Your account activation code is: ${otp}
      
      Please enter this code to activate your account.
      This code will expire in 15 minutes.
      
      If you didn't sign up for a KymaAI account, please ignore this email.
      
      Best regards,
      The KymaAI Team
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #6200EA; margin-bottom: 10px;">Welcome to KymaAI!</h1>
          <p style="color: #666; font-size: 16px;">Your account activation code is:</p>
          <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <span style="font-size: 32px; font-weight: bold; letter-spacing: 4px; color: #6200EA;">${otp}</span>
          </div>
          <p style="color: #666; font-size: 14px;">Please enter this code to activate your account.<br>This code will expire in 15 minutes.</p>
        </div>
        
        <div style="margin-top: 30px; color: #999; font-size: 12px; text-align: center;">
          <p>If you didn't sign up for a KymaAI account, please ignore this email.</p>
        </div>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log(`OTP email sent successfully to ${email}`)
  } catch (error) {
    console.error("Error sending OTP email:", error)
    throw error
  }
}

