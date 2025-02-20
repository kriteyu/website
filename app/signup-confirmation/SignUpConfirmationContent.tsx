"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { CheckCircle2, Loader2 } from "lucide-react"

export default function SignUpConfirmationContent() {
  const [otp, setOtp] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)
  const [isActivated, setIsActivated] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()
  const email = searchParams.get("email")

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      toast.error("Email not found. Please try signing up again.")
      return
    }

    setIsVerifying(true)
    try {
      const response = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsActivated(true)
        toast.success(data.message)
        // Redirect to dashboard after a short delay
        setTimeout(() => {
          router.push("/dashboard")
        }, 1500)
      } else {
        toast.error(data.error)
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.")
    } finally {
      setIsVerifying(false)
    }
  }

  if (!email) {
    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-red-600">Error</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p>Invalid signup session. Please try signing up again.</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/signup">
            <Button>Back to Sign Up</Button>
          </Link>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="flex justify-center mb-4">
          {isActivated ? (
            <CheckCircle2 className="h-16 w-16 text-green-500" />
          ) : (
            <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
              <span className="text-2xl text-purple-600 dark:text-purple-300">✉️</span>
            </div>
          )}
        </div>
        <CardTitle className="text-2xl text-center text-purple-600">
          {isActivated ? "Account Activated!" : "Verify Your Email"}
        </CardTitle>
        <CardDescription className="text-center">
          {isActivated
            ? "Your account has been successfully activated. Redirecting to dashboard..."
            : "Please enter the verification code sent to your email"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!isActivated && (
          <form onSubmit={handleVerifyOTP} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Enter verification code"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="text-center text-lg tracking-wider"
                maxLength={6}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isVerifying}>
              {isVerifying ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Verifying...
                </>
              ) : (
                "Verify Code"
              )}
            </Button>
          </form>
        )}
      </CardContent>
      <CardFooter className="flex justify-center">
        {!isActivated && (
          <p className="text-sm text-gray-500">
            Didn't receive the code?{" "}
            <Link href="/signup" className="text-purple-600 hover:underline">
              Try again
            </Link>
          </p>
        )}
      </CardFooter>
      <ToastContainer position="top-right" autoClose={5000} theme="light" />
    </Card>
  )
}

