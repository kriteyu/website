"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, CheckCircle2, XCircle } from "lucide-react"

export default function ActivationContent() {
  const searchParams = useSearchParams()
  const token = searchParams.get("token")
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [message, setMessage] = useState("")

  useEffect(() => {
    if (!token) {
      setStatus("error")
      setMessage("No activation token provided")
      return
    }

    activateAccount(token)
  }, [token])

  const activateAccount = async (activationToken: string) => {
    try {
      const response = await fetch("/api/auth/activate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: activationToken }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus("success")
        setMessage(data.message)
      } else {
        setStatus("error")
        setMessage(data.error)
      }
    } catch (error) {
      setStatus("error")
      setMessage("An error occurred during activation")
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="flex justify-center mb-4">
          {status === "loading" && <Loader2 className="h-12 w-12 text-purple-600 animate-spin" />}
          {status === "success" && <CheckCircle2 className="h-12 w-12 text-green-500" />}
          {status === "error" && <XCircle className="h-12 w-12 text-red-500" />}
        </div>
        <CardTitle className="text-2xl text-center">Account Activation</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center">
          {status === "loading" && <p>Processing your activation...</p>}
          {status === "success" && <p className="text-green-600">{message}</p>}
          {status === "error" && <p className="text-red-600">{message}</p>}
        </div>
      </CardContent>
    </Card>
  )
}

