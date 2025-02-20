import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { XCircle } from "lucide-react"

export default function ActivationError({ searchParams }: { searchParams: { message?: string } }) {
  const errorMessage = searchParams.message || "An error occurred during account activation."

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-white dark:from-gray-900 dark:via-purple-900 dark:to-gray-900 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <XCircle className="h-12 w-12 text-red-500" />
          </div>
          <CardTitle className="text-2xl text-center">Activation Error</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-red-600">{errorMessage}</p>
          <p className="text-center mt-4">If you continue to have issues, please contact our support team.</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/">
            <Button>Return to Homepage</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

