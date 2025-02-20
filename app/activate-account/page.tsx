import { Suspense } from "react"
import { Card } from "@/components/ui/card"
import ActivationContent from "./ActivationContent"

export default function ActivateAccount() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-white dark:from-gray-900 dark:via-purple-900 dark:to-gray-900 p-4">
      <Suspense
        fallback={
          <Card className="w-full max-w-md">
            <div className="p-6 text-center">Loading...</div>
          </Card>
        }
      >
        <ActivationContent />
      </Suspense>
    </div>
  )
}

