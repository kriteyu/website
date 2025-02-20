"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, LineChart, PlayCircle, Star, Trophy, Users2 } from "lucide-react"

interface UserData {
  name: string
  email: string
  lastLogin: string | null
}

export default function DashboardPage() {
  const [userData, setUserData] = useState<UserData | null>(null)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("/api/user")
        if (response.ok) {
          const data = await response.json()
          setUserData(data)
        } else {
          throw new Error("Failed to fetch user data")
        }
      } catch (error) {
        console.error("Error fetching user data:", error)
      }
    }

    fetchUserData()
  }, [])

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <section className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, {userData?.name || "Student"}!</h1>
          <p className="text-muted-foreground">Here's what's happening with your learning journey.</p>
          {userData?.lastLogin && (
            <p className="text-sm text-muted-foreground mt-2">
              Last login: {new Date(userData.lastLogin).toLocaleString()}
            </p>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Courses in Progress</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Hours Studied</CardTitle>
              <LineChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24.5</div>
              <p className="text-xs text-muted-foreground">+5.2 hours this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Achievements</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+3 new badges</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7 days</div>
              <p className="text-xs text-muted-foreground">Keep it up!</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Continue Learning Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Continue Learning</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Mathematics</CardTitle>
              <CardDescription>Advanced Algebra</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-purple-600 rounded-full" />
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Progress: 75%</span>
                <span>12/16 Lessons</span>
              </div>
              <Button className="w-full">
                <PlayCircle className="mr-2 h-4 w-4" />
                Continue Learning
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Science</CardTitle>
              <CardDescription>Physics Fundamentals</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                <div className="h-full w-1/2 bg-purple-600 rounded-full" />
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Progress: 50%</span>
                <span>6/12 Lessons</span>
              </div>
              <Button className="w-full">
                <PlayCircle className="mr-2 h-4 w-4" />
                Continue Learning
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Literature</CardTitle>
              <CardDescription>World Classics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                <div className="h-full w-1/4 bg-purple-600 rounded-full" />
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Progress: 25%</span>
                <span>2/8 Books</span>
              </div>
              <Button className="w-full">
                <PlayCircle className="mr-2 h-4 w-4" />
                Continue Learning
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Study Groups Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Your Study Groups</h2>
          <Button variant="outline">View All</Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users2 className="h-5 w-5" />
                Math Champions
              </CardTitle>
              <CardDescription>12 members</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Next meeting in 2 days</p>
              <Button variant="outline" className="w-full">
                Join Meeting
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users2 className="h-5 w-5" />
                Science Club
              </CardTitle>
              <CardDescription>8 members</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Next meeting in 5 days</p>
              <Button variant="outline" className="w-full">
                Join Meeting
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users2 className="h-5 w-5" />
                Book Club
              </CardTitle>
              <CardDescription>15 members</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Next meeting tomorrow</p>
              <Button variant="outline" className="w-full">
                Join Meeting
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

