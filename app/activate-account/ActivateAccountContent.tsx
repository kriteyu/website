"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { CheckCircle2, XCircle, Loader2 } from "lucide-react"

export default function ActivateAccountContent() {
  const [isActivating, setIsActivating] = useState(false)
  const [activationStatus, setActivationStatus] = useState<"pending" | "success" | "error">("pending")
  const [errorMessage, setErrorMessage] = useState("")
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get("token")

  useEffect(() => {
    if (token) {
      activateAccount(token)
    } else {
      setActivationStatus("error")
      setErrorMessage("No activation token provided")
    }
  }, [token])

  const activateAccount = async (activationToken: string) => {
    setIsActivating(true)
    try {
      console.log("Sending activation request with token:", activationToken)
      const response = await fetch("/api/auth/activate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: activationToken }),
      })

      const data = await response.json()
      console.log("Activation response:", data)

      if (response.ok) {
        setActivationStatus("success")
        toast.success(data.message || "Your account has been successfully activated!")
      } else {
        setActivationStatus("error")
        setErrorMessage(data.error || "Account activation failed")
        toast.error(data.error || "Account activation failed. Please try again.")
      }
    } catch (error) {
      console.error("Activation error:", error)
      setActivationStatus("error")
      setErrorMessage("An error occurred during activation")
      toast.error("An error occurred. Please try again later.")
    } finally {
      setIsActivating(false)
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="flex justify-center mb-4">
          {activationStatus === "pending" && <Loader2 className="h-12 w-12 text-purple-600 animate-spin" />}
          {activationStatus === "success" && <CheckCircle2 className="h-12 w-12 text-green-500" />}
          {activationStatus === "error" && <XCircle className="h-12 w-12 text-red-500" />}
        </div>
        <CardTitle className="text-2xl font-bold text-center">Account Activation</CardTitle>
        <CardDescription className="text-center">
          {isActivating ? "Processing your activation..." : "KymaAI Account Activation"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {activationStatus === "pending" && <p className="text-center">Please wait while we activate your account...</p>}
        {activationStatus === "success" && (
          <div className="text-center space-y-2">
            <p className="text-green-600 font-medium">Your account has been successfully activated!</p>
            <p className="text-gray-600">You can now log in to your account.</p>
          </div>
        )}
        {activationStatus === "error" && (
          <div className="text-center space-y-2">
            <p className="text-red-600 font-medium">Activation Failed</p>
            <p className="text-gray-600">{errorMessage}</p>
            <p className="text-sm text-gray-500">If you continue to have problems, please contact our support team.</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button
          onClick={() => router.push("/")}
          disabled={isActivating}
          className="bg-purple-600 text-white hover:bg-purple-700"
        >
          {activationStatus === "success" ? "Go to Homepage" : "Back to Homepage"}
        </Button>
      </CardFooter>
      <ToastContainer position="top-right" autoClose={5000} theme="light" />
    </Card>
  )
}

