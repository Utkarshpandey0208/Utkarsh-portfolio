"use client"

import { motion } from "framer-motion"

interface Tech {
  name: string
  icon: string
  color: string
}

const technologies: Tech[] = [
  { name: "Java", icon: "☕", color: "hover:border-orange-500/40 hover:bg-orange-500/10" },
  { name: "Python", icon: "🐍", color: "hover:border-yellow-500/40 hover:bg-yellow-500/10" },
  { name: "SQL", icon: "🗃️", color: "hover:border-blue-500/40 hover:bg-blue-500/10" },
  { name: "Spring Boot", icon: "🍃", color: "hover:border-green-500/40 hover:bg-green-500/10" },
  { name: "JDBC", icon: "🔌", color: "hover:border-violet-500/40 hover:bg-violet-500/10" },
  { name: "MySQL", icon: "🐬", color: "hover:border-cyan-500/40 hover:bg-cyan-500/10" },
  { name: "Pandas", icon: "🐼", color: "hover:border-purple-500/40 hover:bg-purple-500/10" },
  { name: "NumPy", icon: "🔢", color: "hover:border-blue-400/40 hover:bg-blue-400/10" },
  { name: "OpenCV", icon: "👁️", color: "hover:border-red-500/40 hover:bg-red-500/10" },
  { name: "Power BI", icon: "📊", color: "hover:border-yellow-600/40 hover:bg-yellow-600/10" },
  { name: "Git", icon: "🔀", color: "hover:border-orange-600/40 hover:bg-orange-600/10" },
  { name: "GitHub", icon: "🐙", color: "hover:border-slate-400/40 hover:bg-slate-400/10" },
  { name: "VS Code", icon: "💻", color: "hover:border-blue-600/40 hover:bg-blue-600/10" },
  { name: "Jupyter", icon: "📓", color: "hover:border-amber-500/40 hover:bg-amber-500/10" },
  { name: "HTML", icon: "🌐", color: "hover:border-orange-500/40 hover:bg-orange-500/10" },
  { name: "CSS", icon: "🎨", color: "hover:border-indigo-500/40 hover:bg-indigo-500/10" },
]

export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-24 px-6 relative overflow-hidden">
      {/* Scroll marquee track – duplicated for seamless loop */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-wider uppercase mb-4 text-violet-400">
            Technologies
          </p>
          <h3 className="text-4xl md:text-5xl font-bold gradient-text">
            Tech Stack
          </h3>
        </motion.div>

        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03, duration: 0.4 }}
              className="group"
            >
              <motion.div
                className={`aspect-square glass rounded-2xl flex flex-col items-center justify-center p-3 cursor-pointer border border-border/40 transition-all duration-300 ${tech.color}`}
                whileHover={{ scale: 1.12, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-2xl md:text-3xl mb-2 grayscale group-hover:grayscale-0 transition-all duration-300">
                  {tech.icon}
                </span>
                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">
                  {tech.name}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
