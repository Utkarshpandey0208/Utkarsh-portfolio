"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface RotatingBadgeProps {
  labels: string[]
  interval?: number          // ms between rotations, default 3000
  className?: string
  accentColor?: string       // tailwind text color class
  borderColor?: string       // tailwind border color class
}

export function RotatingBadge({
  labels,
  interval = 7000,
  className = "",
  accentColor = "text-violet-400",
  borderColor = "border-violet-500/30",
}: RotatingBadgeProps) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Longest label drives the fixed width so layout never shifts
  const longestLabel = labels.reduce(
    (a, b) => (b.length > a.length ? b : a),
    ""
  )

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % labels.length)
    }, interval)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [paused, labels.length, interval])

  return (
    <motion.div
      onHoverStart={() => setPaused(true)}
      onHoverEnd={() => setPaused(false)}
      className={[
        "relative glass rounded-2xl px-3 py-2",
        "border backdrop-blur-sm cursor-default",
        "shadow-lg",
        borderColor,
        className,
      ].join(" ")}
      style={{
        // Subtle glow matching the border color
        boxShadow: "0 0 12px -2px var(--glow-primary)",
      }}
      whileHover={{ scale: 1.10 }}
    >
      {/*
        Invisible text from the longest label keeps the container width
        stable — no layout shift when rotating between labels of different lengths.
      */}
      <span
        aria-hidden
        className="invisible block text-xs font-medium whitespace-nowrap"
      >
        {longestLabel}
      </span>

      {/* Animated label stacked on top */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.28, ease: "easeInOut" }}
          className={[
            "absolute inset-0 flex items-center justify-center",
            "text-xs font-medium whitespace-nowrap",
            accentColor,
          ].join(" ")}
        >
          {labels[index]}
        </motion.span>
      </AnimatePresence>
    </motion.div>
  )
}
