"use client"

import { useState, useRef } from "react"
import type { ElementType } from "react"
import emailjs from "@emailjs/browser"
import { motion, AnimatePresence } from "framer-motion"
import {
  Mail, Github, Linkedin, Code2,
  Send, MapPin, CheckCircle2, XCircle, Loader2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// ─── EmailJS config ────────────────────────────────────────────────────────
// Replace these three values with your real IDs from emailjs.com
// 1. Log in → Email Services → copy Service ID
// 2. Email Templates → copy Template ID
// 3. Account → API Keys → copy Public Key
const EMAILJS_SERVICE_ID  = "service_s0ewhul"
const EMAILJS_TEMPLATE_ID = "template_1ijg4hl"
const EMAILJS_PUBLIC_KEY  = "zoBeJT4CuX4Dkaz2X"
// ──────────────────────────────────────────────────────────────────────────
// Template variables expected in your EmailJS template:
//   {{from_name}}    → sender's name
//   {{from_email}}   → sender's email
//   {{message}}      → the message body
//   {{to_name}}      → "Utkarsh" (hardcoded below)
// ──────────────────────────────────────────────────────────────────────────

interface ContactLink {
  icon: ElementType
  label: string
  value: string
  href: string
  color: string
  bgColor: string
}

const contactLinks: ContactLink[] = [
  {
    icon: Mail,
    label: "Email",
    value: "utkarshpandey0208@gmail.com",
    href: "mailto:utkarshpandey0208@gmail.com",
    color: "text-violet-400 group-hover:text-violet-300",
    bgColor: "bg-violet-500/15 group-hover:bg-violet-500/25",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Utkarshpandey0208",
    href: "https://github.com/Utkarshpandey0208/",
    color: "text-slate-300 group-hover:text-white",
    bgColor: "bg-slate-500/15 group-hover:bg-slate-500/25",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/utkarsh-pandey",
    href: "https://www.linkedin.com/in/utkarsh-pandey-562077254",
    color: "text-blue-400 group-hover:text-blue-300",
    bgColor: "bg-blue-500/15 group-hover:bg-blue-500/25",
  },
  {
    icon: Code2,
    label: "LeetCode",
    value: "leetcode.com/UtkarshPandey47",
    href: "https://leetcode.com/u/UtkarshPandey47/",
    color: "text-amber-400 group-hover:text-amber-300",
    bgColor: "bg-amber-500/15 group-hover:bg-amber-500/25",
  },
]

interface FormState {
  name: string
  email: string
  message: string
}

type SubmitStatus = "idle" | "loading" | "success" | "error"

export function ContactSection() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<SubmitStatus>("idle")
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  formData.name,
          from_email: formData.email,
          message:    formData.message,
          to_name:    "Utkarsh",
        },
        EMAILJS_PUBLIC_KEY
      )

      setStatus("success")
      setFormData({ name: "", email: "", message: "" })

      // Reset back to idle after 4 seconds
      setTimeout(() => setStatus("idle"), 4000)
    } catch (err: any) {
      // EmailJS returns an object like { status: 400, text: "..." }
      // Log both so you can see exactly what went wrong
      console.error("EmailJS error status:", err?.status)
      console.error("EmailJS error text:",   err?.text)
      console.error("EmailJS full error:",   JSON.stringify(err))
      setStatus("error")
      // Reset back to idle after 4 seconds
      setTimeout(() => setStatus("idle"), 4000)
    }
  }

  const isLoading = status === "loading"

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/4 to-transparent" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-violet-600/8 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-20 w-60 h-60 bg-blue-500/8 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-wider uppercase mb-4 text-violet-400">
            Get In Touch
          </p>
          <h3 className="text-4xl md:text-5xl font-bold gradient-text">
            Contact Me
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* ── Left – Contact Links ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-2">
                {"Let's build something together"}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                I am open to full-time roles, freelance projects, and collaboration
                opportunities. Whether you have a project idea or just want to say
                hello — feel free to reach out!
              </p>
              <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-violet-400" />
                <span>India</span>
              </div>
            </div>

            <div className="space-y-3">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-border/50 bg-card/60 hover:border-violet-500/30 hover:bg-card/80 transition-all duration-300 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 + 0.3 }}
                  whileHover={{ x: 4 }}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${link.bgColor}`}>
                    <link.icon className={`w-5 h-5 transition-colors ${link.color}`} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{link.label}</p>
                    <p className="text-sm font-medium text-foreground group-hover:text-violet-300 transition-colors">
                      {link.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── Right – Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-blue-500/10 rounded-2xl" />
              <div className="absolute inset-[1px] bg-card/80 backdrop-blur-sm rounded-2xl" />

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="relative p-8 space-y-5"
              >
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background/60 border-border/60 focus:border-violet-500/60 rounded-xl"
                    required
                    disabled={isLoading}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background/60 border-border/60 focus:border-violet-500/60 rounded-xl"
                    required
                    disabled={isLoading}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background/60 border-border/60 focus:border-violet-500/60 rounded-xl min-h-[140px] resize-none"
                    required
                    disabled={isLoading}
                  />
                </div>

                {/* Status feedback — slides in above the button */}
                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: -8, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -8, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, y: -8, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -8, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
                    >
                      <XCircle className="w-4 h-4 flex-shrink-0" />
                      Failed to send message. Please try again.
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white border-0 shadow-lg shadow-violet-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending…
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
