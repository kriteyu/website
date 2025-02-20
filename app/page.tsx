"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Brain,
  BookOpen,
  Building2,
  Heart,
  MapPin,
  Users,
  Zap,
  FileCheck,
  Code,
  Coins,
  ArrowUpDown,
  Cloud,
  Award,
  Users2,
} from "lucide-react"
import { SolutionCard, USPItem } from "@/components/ui/cards"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
}

export default function Home() {
  const headingWords = ["Unlock", "Your", "Learning", "Potential", "with", "AI-Powered", "Personal", "Tutoring"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white dark:from-gray-900 dark:via-purple-900 dark:to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/placeholder.svg" alt="KymaAI Logo" width={32} height={32} className="w-8 h-8" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                KymaAI
              </span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="#solutions" className="text-gray-600 hover:text-purple-600 dark:text-gray-300">
                Solutions
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-purple-600 dark:text-gray-300">
                About
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-purple-600 dark:text-gray-300">
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/signup">
                <Button variant="outline" className="hidden md:inline-flex">
                  Sign Up
                </Button>
              </Link>
              <Link href="https://kyma-ai.in/login">
                <Button>
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Bridging Technology and Community with AI
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Transforming Northeast India through innovative AI solutions, empowering local talent, and creating
              sustainable growth opportunities.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="https://kyma-ai.in/login">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Our Credentials
                </h2>
                <p className="text-xl font-bold text-gray-600 dark:text-gray-300">Why we can Help?</p>
              </div>

              <div className="grid gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                    <Building2 className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-300">
                      KymaAI, a dynamic consulting startup fortified by a seasoned team.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                    <Cloud className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Passionately driving Cloud and AI adoption towards our vision of Autonomous IT innovations.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Experts with proven record of building and mentoring high performing teams from scratch in our
                      professional careers.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                    <Users2 className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our collective experience from reputable enterprises (Oracle, IBM, HP, Zensar, HCL, etc) fuels our
                      mission to bridge the academia-industry gap.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative bg-white rounded-xl p-6 shadow-lg"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nMMkB3YbAUHe2VkzohxxxFVUJDbFOH.png"
                alt="KymaAI Vision and Mission"
                width={700}
                height={525}
                className="w-full h-auto rounded-lg mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section
        id="solutions"
        className="py-20 px-4 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-gray-800 dark:to-purple-900"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our AI Solutions
            </h2>
            <p className="text-gray-600 dark:text-gray-300">Innovative solutions across multiple sectors</p>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div variants={child}>
              <SolutionCard
                icon={<BookOpen className="h-6 w-6" />}
                title="Education"
                description="AI-powered educational tools, cultivating entrepreneurship and nurturing talent."
                link="/education-dashboard"
              />
            </motion.div>
            <motion.div variants={child}>
              <SolutionCard
                icon={<Building2 className="h-6 w-6" />}
                title="Infrastructure"
                description="Smart infrastructure development solutions for sustainable growth."
              />
            </motion.div>
            <motion.div variants={child}>
              <SolutionCard
                icon={<Heart className="h-6 w-6" />}
                title="Healthcare"
                description="Prevention-focused AI solutions for better healthcare outcomes."
              />
            </motion.div>
            <motion.div variants={child}>
              <SolutionCard
                icon={<Zap className="h-6 w-6" />}
                title="Agriculture"
                description="Predictive analytics preparing agriculture for tomorrow."
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* AI Tutor Showcase Section */}
      <section className="py-24 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Unlock Your Learning Potential with AI-Powered Personal Tutoring
              </h2>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Personalized Learning Experience</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our AI tutor adapts to your learning style, providing a tailored educational journey.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                    <FileCheck className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Mock Tests</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Practice with AI-generated mock tests tailored to your skill level, helping you prepare for exams
                      and assess your progress.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                    <Code className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Code Generation</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Learn programming with AI-assisted code generation, providing explanations and examples to help
                      you understand complex concepts.
                    </p>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Try AI Tutor Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screnshot.jpg-38AaBm0xg6darkH3NdjGmh6hSuX9Ju.jpeg"
                alt="AI Learning Platform Interface"
                width={800}
                height={600}
                className="rounded-xl shadow-2xl w-full"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 border-2 border-white dark:border-gray-800"
                      />
                    ))}
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">1,000+ Students</p>
                    <p className="text-gray-500 dark:text-gray-400">Currently Learning</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transform Your Learning Journey with AI */}
      <section className="py-24 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative bg-white rounded-xl p-8"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/The%20Benefits%20of%20AI-Based%20Learning%20with%20RAG%20Technology%20-%20visual%20selection%20(2)-0C86aAkAdYqDWlyg97siauLyLcnxez.png"
                alt="AI-Based Learning with RAG Technology"
                width={806}
                height={458}
                className="rounded-xl w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Transform Your Learning Journey with AI
              </h2>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Personalized Learning Path</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      AI analyzes your learning style and progress to create a customized curriculum that adapts to your
                      needs.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                    <Brain className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Intelligent Document Analysis</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Upload any learning material - PDFs, DOCs, or images - and get instant explanations and summaries.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                    <Zap className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Real-time Interactive Support</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Get immediate answers, explanations with examples, and step-by-step problem-solving guidance.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Northeast India */}
      <section className="py-24 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Og4Yfquftmo6EUmJsrqQ25jSoN6gP0.png"
                alt="Map of Northeast India highlighting Agartala"
                width={300}
                height={240}
                className="rounded-xl shadow-2xl w-full max-w-[300px] mx-auto object-contain"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Why Northeast India?
              </h2>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Untapped Talent</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      A wealth of young, ambitious minds eager to contribute to technological advancements. We're
                      committed to nurturing this potential and creating opportunities for growth and innovation.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                    <Zap className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Unique Regional Challenges</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      The Northeast faces distinct geographical, cultural, and economic challenges. Our AI solutions are
                      tailored to address these specific needs, driving targeted and effective development.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Transforming the Region</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our mission is to catalyze a technological revolution in Northeast India. By leveraging AI, we aim
                      to boost economic growth, improve quality of life, and position the region as a hub for
                      innovation.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our USP Section */}
      <section className="py-24 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Unique Selling Propositions
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Our%20USP%20-%20visual%20selection%20(1)-ohacqg5bDGP4vv71sADYiePQ0mjUXS.svg"
                alt="AI Adoption Strategies diagram"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <USPItem
                icon={<ArrowRight className="h-6 w-6 text-purple-600" />}
                title="Ease of AI Adoption"
                description="Simplifying AI integration for businesses of all sizes."
              />
              <USPItem
                icon={<Coins className="h-6 w-6 text-purple-600" />}
                title="Cost-Effective Solutions"
                description="Using open-source technologies to lower costs without compromising security."
              />
              <USPItem
                icon={<Users className="h-6 w-6 text-purple-600" />}
                title="Empowering Local Talent"
                description="Utilizing affordable, skilled labor from Northeast India."
              />
              <USPItem
                icon={<ArrowUpDown className="h-6 w-6 text-purple-600" />}
                title="Scalability & Flexibility"
                description="Offering scalable solutions that adapt to businesses' unique needs."
              />
              <USPItem
                icon={<Heart className="h-6 w-6 text-purple-600" />}
                title="Social Impact"
                description="Creating job opportunities and driving innovation in local communities."
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Join us in revolutionizing Northeast India's technological landscape.
            </p>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Image src="/placeholder.svg" alt="KymaAI Logo" width={32} height={32} className="w-8 h-8" />
                <span className="text-xl font-bold">KymaAI</span>
              </Link>
              <p className="text-gray-600 dark:text-gray-300">Bridging Technology and Community with AI</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-300">
                    Education
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-300">
                    Infrastructure
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-300">
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-300">
                    Agriculture
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-300">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-300">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">engage@kyma-ai.com</p>
              <p className="text-gray-600 dark:text-gray-300">+91-9849437220</p>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-600 dark:text-gray-300">&copy; 2025 KymaAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

