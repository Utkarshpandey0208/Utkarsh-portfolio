"use client"

import type { ElementType } from "react"

import { motion } from "framer-motion"
import { Bot, Sparkles, Search, Code, Zap, Brain } from "lucide-react"

interface AITool {
  name: string
  icon: ElementType
  description: string
  gradient: string
  borderColor: string
  iconBg: string
  iconColor: string
  badge: string
}

const aiTools: AITool[] = [
  {
    name: "ChatGPT",
    icon: Bot,
    description: "AI-assisted debugging, code explanation, and documentation generation for faster development cycles.",
    gradient: "from-emerald-500/10 to-emerald-600/5",
    borderColor: "hover:border-emerald-500/40",
    iconBg: "bg-emerald-500/15",
    iconColor: "text-emerald-400",
    badge: "OpenAI",
  },
  {
    name: "Claude",
    icon: Brain,
    description: "Advanced AI reasoning, complex system design assistance, and nuanced problem solving.",
    gradient: "from-amber-500/10 to-amber-600/5",
    borderColor: "hover:border-amber-500/40",
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-400",
    badge: "Anthropic",
  },
  {
    name: "Google Gemini",
    icon: Sparkles,
    description: "Multimodal AI for image analysis, code generation, and Google ecosystem integration.",
    gradient: "from-blue-500/10 to-blue-600/5",
    borderColor: "hover:border-blue-500/40",
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-400",
    badge: "Google",
  },
  {
    name: "Cursor AI",
    icon: Code,
    description: "AI-powered IDE that supercharges development workflow with intelligent code completion and refactoring.",
    gradient: "from-violet-500/10 to-violet-600/5",
    borderColor: "hover:border-violet-500/40",
    iconBg: "bg-violet-500/15",
    iconColor: "text-violet-400",
    badge: "IDE",
  },
  {
    name: "GitHub Copilot",
    icon: Zap,
    description: "Real-time code suggestions and pair programming that accelerates coding speed by 2×.",
    gradient: "from-slate-500/10 to-slate-600/5",
    borderColor: "hover:border-slate-400/40",
    iconBg: "bg-slate-500/15",
    iconColor: "text-slate-300",
    badge: "GitHub",
  },
  {
    name: "Perplexity AI",
    icon: Search,
    description: "AI-powered research engine for technical documentation lookup and up-to-date answers.",
    gradient: "from-cyan-500/10 to-cyan-600/5",
    borderColor: "hover:border-cyan-500/40",
    iconBg: "bg-cyan-500/15",
    iconColor: "text-cyan-400",
    badge: "Research",
  },
]

export function AIToolsSection() {
  return (
    <section id="ai-tools" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/4 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-wider uppercase mb-4 text-violet-400">
            Productivity Stack
          </p>
          <h3 className="text-4xl md:text-5xl font-bold gradient-text">
            AI Tools I Use
          </h3>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base">
            Leveraging cutting-edge AI tools to enhance development workflow and ship better products faster.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {aiTools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.09 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="group relative"
            >
              {/* Card */}
              <div className={`relative rounded-2xl p-6 h-full border border-border/50 bg-gradient-to-br ${tool.gradient} backdrop-blur-sm transition-all duration-300 ${tool.borderColor} hover:shadow-xl hover:shadow-violet-500/8`}>
                {/* Header row */}
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className={`w-12 h-12 rounded-xl ${tool.iconBg} flex items-center justify-center`}
                  >
                    <tool.icon className={`w-6 h-6 ${tool.iconColor}`} />
                  </motion.div>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${tool.iconBg} ${tool.iconColor} border border-current/20`}>
                    {tool.badge}
                  </span>
                </div>

                {/* Content */}
                <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-violet-300 transition-colors">
                  {tool.name}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tool.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-border/30 rounded-tr-lg group-hover:border-violet-500/40 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
