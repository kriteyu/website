export function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

export function generateOTPExpiry(): Date {
  const expiryDate = new Date()
  expiryDate.setMinutes(expiryDate.getMinutes() + 15) // OTP expires in 15 minutes
  return expiryDate
}

