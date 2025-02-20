// components/ui/cards.tsx
"use client"

import type React from "react"
import { Card, CardContent, CardTitle, CardDescription } from "./card"
import { motion } from "framer-motion"
import Link from "next/link"

export const SolutionCard = ({
  title,
  description,
  icon,
  link,
}: {
  title: string
  description: string
  icon: React.ReactNode
  link?: string
}) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className="h-full bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
        <CardContent className="flex flex-col items-center p-6 text-center h-full">
          <div className="rounded-full bg-purple-100 dark:bg-purple-900 p-3 mb-4">{icon}</div>
          <CardTitle className="mb-2">{title}</CardTitle>
          <CardDescription className="flex-grow">{description}</CardDescription>
          {link && (
            <Link
              href={link}
              className="mt-4 text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
            >
              Learn More →
            </Link>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

export const USPItem = ({
  icon,
  title,
  description,
}: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="flex items-center space-x-4">
      {icon}
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

