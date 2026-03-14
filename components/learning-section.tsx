"use client"

import { motion } from "framer-motion"
import { Rocket, BookOpen, Server, Bot } from "lucide-react"

const learningItems = [
  {
    icon: Rocket,
    title: "Spring Boot",
    description: "Building robust Java backend applications with REST APIs and microservices patterns.",
    progress: 35,
    color: "text-violet-400",
    bar: "from-violet-500 to-blue-500",
  },
  {
    icon: BookOpen,
    title: "Machine Learning Systems",
    description: "Deep dive into ML architectures, model deployment, and production ML pipelines.",
    progress: 45,
    color: "text-blue-400",
    bar: "from-blue-500 to-cyan-500",
  },
  {
    icon: Server,
    title: "Backend Architecture",
    description: "Scalable system design patterns, distributed systems, and cloud-native concepts.",
    progress: 55,
    color: "text-cyan-400",
    bar: "from-cyan-500 to-emerald-500",
  },
  {
    icon: Bot,
    title: "AI-assisted Development",
    description: "Leveraging AI tools and prompt engineering for maximum development productivity.",
    progress: 85,
    color: "text-indigo-400",
    bar: "from-indigo-500 to-violet-500",
  },
]

export function LearningSection() {
  return (
    <section id="learning" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-wider uppercase mb-4 text-violet-400">
            Growth
          </p>
          <h3 className="text-4xl md:text-5xl font-bold gradient-text">Currently Exploring</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {learningItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-300 group"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center shrink-0 group-hover:bg-violet-500/15 transition-colors">
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{item.description}</p>

                  {/* Progress bar */}
                  <div className="relative">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-xs text-muted-foreground">Progress</span>
                      <span className="text-xs font-medium text-foreground">{item.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${item.bar} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.9, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
