"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Rocket, Star } from "lucide-react"

export default function SignUpPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [confirmEmail, setConfirmEmail] = useState("")
  const [mobileNumber, setMobileNumber] = useState("")
  const [isStudent, setIsStudent] = useState(false)
  const [schoolName, setSchoolName] = useState("")
  const [schoolClass, setSchoolClass] = useState("")
  const [city, setCity] = useState("")
  const [interests, setInterests] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email !== confirmEmail) {
      toast.error("Emails don't match!")
      return
    }

    setIsLoading(true)

    const userData = {
      name,
      email,
      mobileNumber,
      isStudent,
      ...(isStudent ? { schoolName, schoolClass, city } : {}),
      interests,
    }

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success(data.message)
        router.push(`/signup-confirmation?email=${encodeURIComponent(email)}`)
      } else {
        toast.error(data.error || "Sign up failed. Please try again.")
      }
    } catch (error) {
      console.error("Sign up error:", error)
      toast.error("An error occurred. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black overflow-hidden relative p-4">
      <div className="absolute inset-0 bg-[url('/images/galaxy-background.jpg')] bg-cover bg-center opacity-40"></div>
      <Rocket className="absolute text-yellow-300 animate-pulse text-5xl" style={{ top: "10%", left: "10%" }} />
      <Star className="absolute text-yellow-300 animate-pulse text-4xl" style={{ top: "20%", right: "20%" }} />
      <Star className="absolute text-yellow-300 animate-pulse text-5xl" style={{ bottom: "15%", left: "25%" }} />
      <Card className="w-full max-w-4xl bg-white/90 shadow-2xl backdrop-blur-sm relative z-10">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <div className="w-[200px] h-[60px] bg-gray-300 flex items-center justify-center text-gray-500">
              Logo Placeholder
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-center text-purple-600">Create Your Account</CardTitle>
          <CardDescription className="text-center text-purple-400">
            Sign up to start your learning journey
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSignUp}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-purple-300 bg-white/50 text-purple-900 placeholder-purple-400 focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-purple-300 bg-white/50 text-purple-900 placeholder-purple-400 focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmEmail">Confirm Email</Label>
                <Input
                  id="confirmEmail"
                  type="email"
                  required
                  value={confirmEmail}
                  onChange={(e) => setConfirmEmail(e.target.value)}
                  className="border-purple-300 bg-white/50 text-purple-900 placeholder-purple-400 focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Confirm your email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobileNumber">Mobile Number</Label>
                <Input
                  id="mobileNumber"
                  type="tel"
                  required
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="border-purple-300 bg-white/50 text-purple-900 placeholder-purple-400 focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Enter your mobile number"
                />
              </div>
            </div>
            <div className="space-y-2 mt-4">
              <Label>Interests (Select all that apply)</Label>
              <div className="grid grid-cols-2 gap-2">
                {["Mathematics", "Science", "Literature", "History", "Arts", "Technology"].map((interest) => (
                  <div key={interest} className="flex items-center space-x-2">
                    <Checkbox
                      id={interest}
                      checked={interests.includes(interest)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setInterests([...interests, interest])
                        } else {
                          setInterests(interests.filter((i) => i !== interest))
                        }
                      }}
                    />
                    <Label htmlFor={interest}>{interest}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <Checkbox
                id="isStudent"
                checked={isStudent}
                onCheckedChange={(checked) => setIsStudent(checked as boolean)}
              />
              <Label htmlFor="isStudent">Are you a student?</Label>
            </div>
            {isStudent && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="schoolName">School Name</Label>
                  <Input
                    id="schoolName"
                    type="text"
                    required
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    className="border-purple-300 bg-white/50 text-purple-900 placeholder-purple-400 focus:border-purple-500 focus:ring-purple-500"
                    placeholder="Enter your school name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="schoolClass">Class</Label>
                  <Input
                    id="schoolClass"
                    type="text"
                    required
                    value={schoolClass}
                    onChange={(e) => setSchoolClass(e.target.value)}
                    className="border-purple-300 bg-white/50 text-purple-900 placeholder-purple-400 focus:border-purple-500 focus:ring-purple-500"
                    placeholder="Enter your class"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="border-purple-300 bg-white/50 text-purple-900 placeholder-purple-400 focus:border-purple-500 focus:ring-purple-500"
                    placeholder="Enter your city"
                  />
                </div>
              </div>
            )}
            <Button
              type="submit"
              className="w-full bg-purple-600 text-white hover:bg-purple-700 transition duration-300 mt-6"
              disabled={isLoading}
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center text-purple-900">
            Already have an account?{" "}
            <Link href="/login" className="text-purple-600 hover:underline">
              Log In
            </Link>
          </div>
        </CardFooter>
      </Card>
      <ToastContainer position="top-right" autoClose={5000} theme="dark" />
    </div>
  )
}

