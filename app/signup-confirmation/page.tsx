"use client"

import { Suspense } from "react"
import SignUpConfirmationContent from "./SignUpConfirmationContent"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SignUpConfirmation() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-white dark:from-gray-900 dark:via-purple-900 dark:to-gray-900 p-4">
      <Suspense fallback={<LoadingCard />}>
        <SignUpConfirmationContent />
      </Suspense>
    </div>
  )
}

function LoadingCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Loading...</CardTitle>
        <CardDescription className="text-center">Please wait while we load your confirmation page</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      </CardContent>
    </Card>
  )
}

