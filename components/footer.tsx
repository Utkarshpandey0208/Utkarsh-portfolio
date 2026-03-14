"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Code2, Heart, ArrowUp } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/Utkarshpandey0208/", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/utkarsh-pandey-562077254", label: "LinkedIn" },
  { icon: Code2, href: "https://leetcode.com/u/UtkarshPandey47/", label: "LeetCode" },
]

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo */}
          <a href="#home" className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity">
            Utkarsh Pandey
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-border/50 text-muted-foreground hover:text-violet-400 hover:border-violet-500/40 hover:bg-violet-500/10 transition-all"
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Scroll to top */}
          <motion.a
            href="#home"
            className="p-2.5 rounded-full border border-border/50 text-muted-foreground hover:text-violet-400 hover:border-violet-500/40 hover:bg-violet-500/10 transition-all"
            whileHover={{ scale: 1.1, y: -2 }}
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-8 pt-8 border-t border-border/30"
        >
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1.5">
            Built with <Heart className="w-3.5 h-3.5 text-violet-400" /> by{" "}
            <span className="text-violet-400 font-medium">Utkarsh Pandey</span>
          </p>
          <p className="text-xs text-muted-foreground/60 mt-1">
            &copy; {new Date().getFullYear()} · All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
