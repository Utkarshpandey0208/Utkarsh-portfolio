"use client"

import { motion } from "framer-motion"
import { Trophy, Award } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "Runner-Up",
    event: "Synapse Technical Event",
    description: "SwiftPass AI/ML Project — won Runner-Up among all competing teams.",
    gradient: "from-amber-500/20 to-amber-600/10",
    borderColor: "border-amber-500/25 hover:border-amber-500/50",
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-400",
    glow: "hover:shadow-amber-500/15",
  },
  {
    icon: Award,
    title: "Research Poster",
    event: "Academic Conference",
    description: "Presented Smart Traffic Signal System research at an academic conference.",
    gradient: "from-violet-500/20 to-violet-600/10",
    borderColor: "border-violet-500/25 hover:border-violet-500/50",
    iconBg: "bg-violet-500/15",
    iconColor: "text-violet-400",
    glow: "hover:shadow-violet-500/15",
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-wider uppercase mb-4 text-violet-400">
            Recognition
          </p>
          <h3 className="text-4xl md:text-5xl font-bold gradient-text">Achievements</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className={`rounded-2xl p-8 text-center border bg-gradient-to-br ${achievement.gradient} ${achievement.borderColor} ${achievement.glow} hover:shadow-xl backdrop-blur-sm relative overflow-hidden transition-all duration-300 group`}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              {/* Top highlight line */}
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-16 rounded-full ${achievement.iconBg}`} />

              <div className={`w-16 h-16 rounded-2xl ${achievement.iconBg} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <achievement.icon className={`w-8 h-8 ${achievement.iconColor}`} />
              </div>
              <h4 className="text-2xl font-bold text-foreground mb-1">{achievement.title}</h4>
              <p className={`font-medium mb-3 ${achievement.iconColor}`}>{achievement.event}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
