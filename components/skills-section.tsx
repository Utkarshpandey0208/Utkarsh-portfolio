"use client"

import { motion } from "framer-motion"

interface SkillCategory {
  title: string
  color: string
  dotColor: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    color: "from-violet-500/20 to-violet-600/10 border-violet-500/20",
    dotColor: "bg-violet-500",
    skills: ["Java", "Python", "SQL"],
  },
  {
    title: "Backend Development",
    color: "from-blue-500/20 to-blue-600/10 border-blue-500/20",
    dotColor: "bg-blue-500",
    skills: ["Core Java","Servlets", "JSP", "JDBC", "Spring","Spring Boot"],
  },
  {
    title: "Data & AI",
    color: "from-cyan-500/20 to-cyan-600/10 border-cyan-500/20",
    dotColor: "bg-cyan-400",
    skills: ["MySql","Pandas", "NumPy", "Machine Learning", "OpenCV", "Power BI", "Excel"],
  },
  {
    title: "Developer Tools",
    color: "from-indigo-500/20 to-indigo-600/10 border-indigo-500/20",
    dotColor: "bg-indigo-400",
    skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook","GitLab","Eclipse IDE"],
  },
  {
    title: "AI Tools",
    color: "from-purple-500/20 to-purple-600/10 border-purple-500/20",
    dotColor: "bg-purple-400",
    skills: ["ChatGPT", "Claude", "Google Gemini", "Cursor AI", "GitHub Copilot", "Perplexity AI"],
  },
]

const tagColors: Record<string, string> = {
  "Programming Languages": "hover:bg-violet-500/20 hover:text-violet-300 hover:border-violet-500/40",
  "Backend Development": "hover:bg-blue-500/20 hover:text-blue-300 hover:border-blue-500/40",
  "Data & AI": "hover:bg-cyan-500/20 hover:text-cyan-300 hover:border-cyan-500/40",
  "Developer Tools": "hover:bg-indigo-500/20 hover:text-indigo-300 hover:border-indigo-500/40",
  "AI Tools": "hover:bg-purple-500/20 hover:text-purple-300 hover:border-purple-500/40",
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/3 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-wider uppercase mb-4 text-violet-400">
            My Expertise
          </p>
          <h3 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Skills</span>
            <span className="text-foreground"> & Technologies</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              className={`relative rounded-2xl p-6 border bg-gradient-to-br ${category.color} backdrop-blur-sm hover:shadow-lg transition-all duration-300 group`}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              {/* Top-left accent line */}
              <div className={`absolute top-0 left-6 h-0.5 w-12 ${category.dotColor} rounded-full opacity-60`} />

              <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${category.dotColor}`} />
                {category.title}
              </h4>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className={`px-3 py-1.5 text-xs bg-background/50 text-muted-foreground rounded-lg border border-border/50 cursor-default transition-all duration-200 ${tagColors[category.title]}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.04 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
