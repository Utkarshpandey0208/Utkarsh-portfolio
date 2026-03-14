"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Code2, Download, ExternalLink, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import dynamic from "next/dynamic"
import { ResumeModal } from "./resume-modal"
import { RotatingBadge } from "./rotating-badge"

const Hero3DScene = dynamic(
  () => import("./hero-3d-scene").then((mod) => mod.Hero3DScene),
  { ssr: false }
)

const socialLinks = [
  { icon: Github, href: "https://github.com/Utkarshpandey0208/", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/utkarsh-pandey-562077254", label: "LinkedIn" },
  { icon: Code2, href: "https://leetcode.com/u/UtkarshPandey47/", label: "LeetCode" },
]

export function HeroSection() {
  const [resumeOpen, setResumeOpen] = useState(false)
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Scene Background */}
      <Hero3DScene />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background/80 z-[1]" />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl z-[1]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl z-[1]" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-400/8 rounded-full blur-3xl z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <motion.p
              className="text-sm font-medium mb-4 tracking-widest uppercase"
              style={{ color: "oklch(0.78 0.14 200)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I am
            </motion.p>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
            >
              <span className="text-foreground">Utkarsh</span>
              <br />
              <span className="gradient-text">Pandey</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-3 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span className="text-violet-400">Software Developer</span>
              {" "}|{" "}
              <span className="text-blue-400">AI/ML Enthusiast</span>
              {" "}|{" "}
              <span className="text-cyan-400">Problem Solver</span>
            </motion.p>

            <motion.p
              className="text-base text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.8 }}
            >
              Exploring AI, backend systems, and data-driven technologies to build practical solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button
                size="lg"
                className="rounded-full px-8 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white border-0 shadow-lg shadow-violet-500/25 glow-sm"
                asChild
              >
                <a href="#projects">
                  View Projects
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>

              {/* Preview Resume */}
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-violet-500/40 hover:bg-violet-500/10 hover:border-violet-400"
                onClick={() => setResumeOpen(true)}
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview Resume
              </Button>

              {/* Download Resume */}
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-border/60 hover:bg-white/5 hover:border-border"
                asChild
              >
                <a href="/resume.pdf" download="Utkarsh_Pandey_Resume.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </a>
              </Button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass hover:bg-violet-500/10 hover:border-violet-500/40 transition-all group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-violet-400 transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right: Profile Image */}
          <motion.div
            className="relative order-1 lg:order-2 flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 via-blue-500 to-cyan-400 blur-xl opacity-30 animate-pulse-slow scale-110" />

            {/* Rotating gradient border */}
            <motion.div
              className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-violet-500 via-blue-500 to-cyan-400 animate-spin-slow opacity-70"
            />

            {/* Inner ring */}
            <div className="absolute -inset-0.5 rounded-full bg-background" />

            {/* Avatar container — floats up/down */}
            <motion.div
              className="relative w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-violet-500/30"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/images/profile.jpg"
                alt="Utkarsh Pandey"
                fill
                sizes="(max-width: 768px) 208px, (max-width: 1024px) 256px, 288px"
                className="object-cover object-center img-crisp scale-100"
                quality={100}
                priority
                unoptimized
              />
            </motion.div>

            {/* Static badge – top right */}
            <motion.div
              className="absolute -top-4 -right-8 glass rounded-2xl px-3 py-2 text-xs font-medium border border-violet-500/30"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-violet-400">✦</span>{" "}
              <span className="text-foreground">AI/ML Enthusiast</span>
            </motion.div>

            {/* Static badge – bottom right */}
            <motion.div
              className="absolute -bottom-4 -right-8 glass rounded-2xl px-3 py-2 text-xs font-medium border border-blue-500/30"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-blue-400">⚙</span>{" "}
              <span className="text-foreground">Backend Developer</span>
            </motion.div>

            {/* Rotating badge – left center */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 -left-28"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 }}
            >
              <RotatingBadge
                labels={["MCA Candidate", "Data Analysis", "Problem Solver"]}
                interval={3000}
                accentColor="text-cyan-400"
                borderColor="border-cyan-500/30"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs mb-2 tracking-wider">SCROLL</span>
          <ArrowDown className="w-5 h-5" />
        </motion.a>
      </motion.div>

      {/* Resume preview modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  )
}
