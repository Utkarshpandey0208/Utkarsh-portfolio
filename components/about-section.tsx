"use client"

import { motion } from "framer-motion"
import { Code2, Brain, Database, Sparkles } from "lucide-react"

const highlights = [
  { icon: Code2, label: "Software Development", color: "text-violet-400", bg: "bg-violet-500/15 border-violet-500/20" },
  { icon: Brain, label: "AI/ML Systems", color: "text-blue-400", bg: "bg-blue-500/15 border-blue-500/20" },
  { icon: Database, label: "Backend Development", color: "text-cyan-400", bg: "bg-cyan-500/15 border-cyan-500/20" },
  { icon: Sparkles, label: "Problem Solving", color: "text-indigo-400", bg: "bg-indigo-500/15 border-indigo-500/20" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-wider uppercase mb-4 text-violet-400">
            About Me
          </p>
          <h3 className="text-4xl md:text-5xl font-bold gradient-text">Who I Am</h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am an <span className="text-violet-300 font-medium">MCA student and software developer</span> with
              a strong foundation in programming, data structures, and backend development. I enjoy solving
              logical problems and building practical applications that combine software engineering with
              intelligent systems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My work spans{" "}
              <span className="text-blue-300 font-medium">machine learning, computer vision, backend systems,</span>{" "}
              and data analysis. I have hands-on experience with Java, Python, SQL, and modern data tools.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently exploring{" "}
              <span className="text-cyan-300 font-medium">AI/ML systems and Spring Boot backend architecture</span>{" "}
              while building scalable, system-level projects.
            </p>
          </motion.div>

          {/* Right Column – Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                className={`rounded-2xl p-6 text-center group border cursor-default ${item.bg} backdrop-blur-sm hover:scale-105 hover:shadow-lg transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index + 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-12 h-12 rounded-xl bg-background/60 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <p className="text-sm font-medium text-foreground">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
