"use client"

import type { ElementType } from "react"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { Github, FolderGit2, Star, Flame, ExternalLink, BookOpen } from "lucide-react"

// Import the local wrapper which guarantees a plain React function component.
// Using dynamic() with ssr:false prevents SSR issues since react-github-calendar
// fetches from the GitHub API and uses browser-only APIs at runtime.
const GitHubCalendar = dynamic(
  () => import("./github-calendar-wrapper"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-32 rounded-xl bg-background/40 animate-pulse flex items-center justify-center">
        <span className="text-xs text-muted-foreground">Loading contribution graph…</span>
      </div>
    ),
  }
)

const GITHUB_USERNAME = "Utkarshpandey0208"

// GitHub dark-theme green scale — matches github.com exactly
const GITHUB_GREEN_THEME = {
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
} as const

interface GitHubStat {
  icon: ElementType
  label: string
  value: string
  sublabel: string
  color: string
  bgColor: string
}

const githubStats: GitHubStat[] = [
  {
    icon: FolderGit2,
    label: "Repositories",
    value: "6",
    sublabel: "public repos",
    color: "text-violet-400",
    bgColor: "bg-violet-500/15 border-violet-500/25",
  },
  {
    icon: BookOpen,
    label: "Top Language",
    value: "Java",
    sublabel: "primary stack",
    color: "text-blue-400",
    bgColor: "bg-blue-500/15 border-blue-500/25",
  },
  {
    icon: Star,
    label: "Contributions",
    value: "20",
    sublabel: "Oct 2022 – present",
    color: "text-amber-400",
    bgColor: "bg-amber-500/15 border-amber-500/25",
  },
  {
    icon: Flame,
    label: "Longest Streak",
    value: "2",
    sublabel: "Jan 19 – Jan 20, 2025",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/15 border-cyan-500/25",
  },
]

export function GitHubSection() {
  return (
    <section id="github" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/4 to-transparent" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-violet-600/8 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-20 w-56 h-56 bg-blue-500/8 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium tracking-wider uppercase mb-4 text-violet-400">
            Coding Activity
          </p>
          <h3 className="text-4xl md:text-5xl font-bold gradient-text">
            GitHub Contributions
          </h3>
          <p className="text-muted-foreground mt-3 text-sm max-w-xl mx-auto">
            Most work lives in private repositories. Public stats reflect only what is visible on GitHub.
          </p>
        </motion.div>

        {/* Stat cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {githubStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.04, y: -4 }}
              className={`rounded-2xl p-5 text-center border ${stat.bgColor} backdrop-blur-sm group transition-all duration-300`}
            >
              <div className="w-12 h-12 rounded-xl bg-background/60 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <span className="text-2xl font-bold text-foreground block">{stat.value}</span>
              <span className="text-sm font-medium text-foreground/80 block">{stat.label}</span>
              <span className="text-xs text-muted-foreground">{stat.sublabel}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Contribution calendar + stats side column */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* react-github-calendar — col-span-2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-2 glass rounded-2xl p-6 hover:border-violet-500/30 transition-all"
          >
            <h5 className="text-sm font-semibold text-muted-foreground mb-5 flex items-center gap-2">
              <Github className="w-4 h-4 text-violet-400" />
              Contribution Calendar — {new Date().getFullYear()}
            </h5>

            {/*
              react-github-calendar fetches real data from the GitHub API.
              - colorScheme="dark"  → forces dark palette regardless of OS setting
              - theme              → GitHub's exact green ramp for dark mode
              - blockSize / blockMargin → tighter cells to fit the card width
              - fontSize           → month/day labels
              - hideTotalCount     → cleaner look; the stat card above shows the total
              - hideColorLegend    → we add our own legend below
            */}
            <div className="w-full overflow-x-auto">
              <div className="min-w-[560px]">
                <GitHubCalendar
                  username={GITHUB_USERNAME}
                  colorScheme="dark"
                  theme={GITHUB_GREEN_THEME}
                  blockSize={13}
                  blockMargin={4}
                  fontSize={12}
                  hideTotalCount
                  hideColorLegend
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            {/* Custom legend + live badge */}
            <div className="flex items-center justify-between mt-4 flex-wrap gap-3">
              <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#39d353] inline-block" />
                Live data via GitHub API · updates daily
              </p>
              <div className="flex items-center gap-1.5">
                <span className="text-xs text-muted-foreground">Less</span>
                {["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"].map((color) => (
                  <span
                    key={color}
                    className="w-3 h-3 rounded-sm inline-block border border-white/5"
                    style={{ backgroundColor: color }}
                  />
                ))}
                <span className="text-xs text-muted-foreground">More</span>
              </div>
            </div>
          </motion.div>

          {/* Right column: stats + languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col gap-4"
          >
            {/* GitHub readme stats — count_private for private commits */}
            <div className="glass rounded-2xl p-4 flex-1 hover:border-violet-500/30 transition-all">
              <h5 className="text-xs font-semibold text-muted-foreground mb-3">Profile Stats</h5>
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&title_color=8B5CF6&icon_color=3B82F6&text_color=94a3b8&border_color=2d1b69&hide_border=false&count_private=true&include_all_commits=true&hide=contribs`}
                alt="GitHub Stats"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Top languages — Jupyter Notebook hidden (byte-size inflation) */}
            <div className="glass rounded-2xl p-4 hover:border-violet-500/30 transition-all">
              <h5 className="text-xs font-semibold text-muted-foreground mb-1">Top Languages</h5>
              <p className="text-xs text-muted-foreground/60 mb-3 leading-snug">
                Jupyter Notebook excluded — notebook file size inflates its share.
              </p>
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=transparent&title_color=8B5CF6&text_color=94a3b8&border_color=2d1b69&hide_border=false&hide=jupyter%20notebook&langs_count=6`}
                alt="Top Languages"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </motion.div>
        </div>

        {/* Streak + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 glass rounded-2xl p-6 hover:border-violet-500/30 transition-all"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <img
              src={`https://streak-stats.demolab.com?user=${GITHUB_USERNAME}&theme=transparent&hide_border=false&border=2d1b69&ring=8B5CF6&fire=3B82F6&currStreakLabel=8B5CF6&sideLabels=94a3b8&currStreakNum=e2e8f0&sideNums=e2e8f0&background=0F172A00&dates=64748b`}
              alt="GitHub Streak Stats"
              className="w-full sm:w-auto sm:flex-1 h-auto rounded-lg max-w-lg"
            />
            <div className="flex flex-col gap-3 flex-shrink-0 items-center sm:items-end">
              <p className="text-xs text-muted-foreground text-center sm:text-right max-w-[200px] leading-relaxed">
                Active contributor — most commits are in private repos.
              </p>
              <motion.a
                href={`https://github.com/${GITHUB_USERNAME}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-violet-500/20"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <Github className="w-5 h-5" />
                View GitHub Profile
                <ExternalLink className="w-4 h-4 ml-1" />
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
