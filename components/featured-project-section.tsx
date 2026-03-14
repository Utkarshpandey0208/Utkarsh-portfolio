"use client"

import type { ElementType } from "react"

import { motion } from "framer-motion"
import { Github, ExternalLink, Camera, Cpu, Brain, AlertTriangle, Settings, Lightbulb, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ArchStep {
  icon: ElementType
  label: string
  description: string
  color: string
  iconColor: string
}

const architectureSteps: ArchStep[] = [
  { icon: Camera, label: "Camera Input", description: "Real-time video feed", color: "from-violet-500/20 to-violet-600/10 border-violet-500/30", iconColor: "text-violet-400" },
  { icon: Cpu, label: "Image Processing", description: "OpenCV analysis", color: "from-blue-500/20 to-blue-600/10 border-blue-500/30", iconColor: "text-blue-400" },
  { icon: Brain, label: "ML Detection", description: "Trained classifier", color: "from-indigo-500/20 to-indigo-600/10 border-indigo-500/30", iconColor: "text-indigo-400" },
  { icon: AlertTriangle, label: "Alert System", description: "Emergency detected", color: "from-amber-500/20 to-amber-600/10 border-amber-500/30", iconColor: "text-amber-400" },
  { icon: Settings, label: "Arduino Control", description: "Signal control unit", color: "from-cyan-500/20 to-cyan-600/10 border-cyan-500/30", iconColor: "text-cyan-400" },
  { icon: Lightbulb, label: "Traffic Light", description: "Priority passage", color: "from-emerald-500/20 to-emerald-600/10 border-emerald-500/30", iconColor: "text-emerald-400" },
]

const technologies = ["Python", "OpenCV", "Machine Learning", "TensorFlow", "Arduino", "IoT", "Computer Vision"]

export function FeaturedProjectSection() {
  return (
    <section id="featured-project" className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/4 to-transparent" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-violet-600/8 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-blue-500/8 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-wider uppercase mb-4 text-violet-400">
            Spotlight
          </p>
          <h3 className="text-4xl md:text-5xl font-bold gradient-text">
            Featured Project
          </h3>
        </motion.div>

        {/* Main Featured Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Gradient border wrapper */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/30 via-blue-500/20 to-cyan-500/30 rounded-3xl" />
          <div className="absolute inset-[1px] bg-card rounded-3xl" />

          <div className="relative p-8 md:p-12">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-3 mb-4"
                >
                  <span className="px-4 py-1.5 text-sm font-semibold rounded-full bg-gradient-to-r from-violet-500/20 to-blue-500/20 border border-violet-500/30 text-violet-300">
                    AI / ML + IoT
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                    Award Winner
                  </span>
                </motion.div>

                <motion.h4
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl md:text-4xl font-bold gradient-text mb-2"
                >
                  SwiftPass
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="text-lg text-muted-foreground"
                >
                  Ambulance Detection & Smart Traffic Signal System
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex gap-3"
              >
                <Button
                  variant="outline"
                  className="rounded-full border-violet-500/30 hover:bg-violet-500/10 hover:border-violet-400"
                  asChild
                >
                  <a href="https://github.com/Utkarshpandey0208/" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
                <Button
                  className="rounded-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white border-0"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground leading-relaxed mb-10 max-w-3xl text-base"
            >
              An intelligent traffic signal system that detects ambulances using computer vision and machine learning.
              The system processes real-time camera input and applies a trained ML model combined with OpenCV-based
              image processing to identify emergency vehicles. Upon detection, it transmits signals to an
              Arduino-controlled traffic module that automatically prioritizes the ambulance by switching traffic lights.
            </motion.p>

            {/* Architecture Diagram */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mb-10"
            >
              <h5 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-500" />
                System Architecture
              </h5>

              {/* Desktop flow */}
              <div className="hidden md:flex items-start justify-between gap-1">
                {architectureSteps.map((step, index) => (
                  <div key={step.label} className="flex items-start flex-1">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={`flex flex-col items-center text-center w-full group bg-gradient-to-br ${step.color} border rounded-2xl p-4 cursor-default`}
                    >
                      <div className={`w-12 h-12 rounded-xl bg-background/50 flex items-center justify-center mb-3 transition-transform group-hover:scale-110`}>
                        <step.icon className={`w-6 h-6 ${step.iconColor}`} />
                      </div>
                      <span className="text-xs font-semibold text-foreground block">{step.label}</span>
                      <span className="text-xs text-muted-foreground mt-1">{step.description}</span>
                    </motion.div>
                    {index < architectureSteps.length - 1 && (
                      <div className="flex items-center px-1 pt-7">
                        <ArrowRight className="w-4 h-4 text-violet-500/60 flex-shrink-0" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile flow */}
              <div className="md:hidden grid grid-cols-2 gap-3">
                {architectureSteps.map((step, index) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.08 }}
                    className={`flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br ${step.color} border`}
                  >
                    <div className="w-9 h-9 rounded-lg bg-background/50 flex items-center justify-center shrink-0">
                      <step.icon className={`w-5 h-5 ${step.iconColor}`} />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-foreground block">{step.label}</span>
                      <span className="text-xs text-muted-foreground">{step.description}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <h5 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                Technologies Used
              </h5>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.85 + index * 0.04 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-1.5 text-sm bg-background/60 text-muted-foreground rounded-full border border-border/60 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-300 transition-all cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
