"use client"

import { useRef, useState } from "react"
import type { ElementType } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, ExternalLink, Film, BarChart3, GraduationCap, Car, Hotel, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type Domain = "All" | "AI / ML" | "Backend" | "Data Analysis"

interface Project {
  title: string
  subtitle: string
  domain: Exclude<Domain, "All">
  technologies: string[]
  description: string
  architecture?: string
  github: string
  demo: string
  previewImage?: string
  previewIcon: ElementType
  iconColor: string
  gradientFrom: string
  gradientTo: string
}

const filters: Domain[] = ["All", "AI / ML", "Backend", "Data Analysis"]

const projects: Project[] = [
  {
    title: "Movie Recommender System",
    subtitle: "Content-Based Recommendation Engine",
    domain: "AI / ML",
    technologies: ["Python", "Pandas", "Scikit-learn", "Cosine Similarity", "TMDB Dataset"],
    description:
      "Built a content-based movie recommendation system that suggests movies based on similarity between movie features. The system processes the TMDB dataset and performs data preprocessing including feature selection, vectorization, and similarity computation using cosine similarity to measure distances between feature vectors and return the top-N most similar movies.",
    architecture:
      "Raw TMDB dataset → Feature selection (genres, cast, crew, keywords) → Text vectorization with CountVectorizer → Cosine similarity matrix computation → Top-N similar movie retrieval → Recommendation output.",
    github: "https://github.com/Utkarshpandey0208/",
    demo: "#",
    previewIcon: Film,
    iconColor: "text-violet-400",
    gradientFrom: "from-violet-500/20",
    gradientTo: "to-violet-600/5",
  },
  {
    title: "EduTrack",
    subtitle: "Academic Management System",
    domain: "Backend",
    technologies: ["Java", "JDBC", "MySQL"],
    description:
      "Developed a backend system to manage academic records including student details, attendance tracking, and semester performance. Implemented authentication with basic password encryption and JDBC for database connectivity with MySQL. CRUD operations were designed to manage academic records efficiently with role-based access for students and administrators.",
    architecture:
      "Java Servlet layer → JDBC connection pool → MySQL database. Modules: Student Registration, Attendance Logger, Grade Manager, Authentication (hashed passwords), and Report Generator.",
    github: "https://github.com/Utkarshpandey0208/",
    demo: "#",
    previewIcon: GraduationCap,
    iconColor: "text-blue-400",
    gradientFrom: "from-blue-500/20",
    gradientTo: "to-blue-600/5",
  },
  {
    title: "Hotel Reservation System",
    subtitle: "Full-Stack Booking Platform",
    domain: "Backend",
    technologies: ["Java", "Spring Boot", "JPA/Hibernate", "MySQL", "JavaScript", "Fetch API", "HTML", "CSS", "REST API"],
    description:
      "Developed a full-stack hotel reservation platform enabling users to manage bookings with real-time interaction. Implemented RESTful APIs for seamless frontend-backend communication and utilized JPA/Hibernate for efficient database operations.",
    architecture:
      "Frontend (HTML/CSS/JS) → API Calls (Fetch) → Spring Boot Controllers → Service Layer → JPA/Hibernate → MySQL → Response Handling.",
    github: "https://github.com/Utkarshpandey0208/Grand-Hotel-Reservation-System-Springboot",
    demo: "https://grand-hotel-reservation-system-ut.vercel.app/",
    previewImage: "/images/hotel-reservation-preview.svg",
    previewIcon: Hotel,
    iconColor: "text-sky-400",
    gradientFrom: "from-sky-500/20",
    gradientTo: "to-blue-600/5",
  },
  {
    title: "Netflix Data Analysis",
    subtitle: "Content Trend Analysis",
    domain: "Data Analysis",
    technologies: ["Python", "Pandas", "NumPy"],
    description:
      "Performed exploratory data analysis on a Netflix dataset to identify content trends and distribution patterns. Data preprocessing and cleaning were conducted using Pandas and NumPy, followed by analysis of content types, release trends, genre distribution, and regional content availability. Insights were visualized through interactive Power BI dashboards.",
    architecture:
      "Raw CSV dataset → Pandas cleaning & null handling → Feature engineering (year, genre split) → Exploratory analysis (value counts, groupby) → Power BI dashboard with slicers for content type, country, and release year.",
    github: "https://github.com/Utkarshpandey0208/Netflix-Analysis",
    demo: "https://github.com/Utkarshpandey0208/Netflix-Analysis",
    previewIcon: BarChart3,
    iconColor: "text-cyan-400",
    gradientFrom: "from-cyan-500/20",
    gradientTo: "to-cyan-600/5",
  },
  {
    title: "EV Population Trend Analysis",
    subtitle: "Electric Vehicle Adoption Patterns",
    domain: "Data Analysis",
    technologies: ["Python", "Pandas", "Power BI"],
    description:
      "Analyzed electric vehicle population datasets to identify growth trends and regional adoption patterns across different states and vehicle types. Data preprocessing and analysis were performed using Pandas, and insights were visualized through Power BI dashboards to highlight adoption trends, make distribution, and geographic spread of EV registrations.",
    architecture:
      "EV registration CSV → Pandas data cleaning → Aggregation by state, make, model year → Trend analysis (YoY growth) → Power BI visual: choropleth map, bar charts, trend lines, and KPI cards.",
    github: "https://github.com/Utkarshpandey0208/",
    demo: "#",
    previewIcon: Car,
    iconColor: "text-emerald-400",
    gradientFrom: "from-emerald-500/20",
    gradientTo: "to-emerald-600/5",
  },
]

const domainBadge: Record<Exclude<Domain, "All">, string> = {
  "AI / ML": "bg-violet-500/15 text-violet-300 border-violet-500/30",
  "Backend": "bg-blue-500/15 text-blue-300 border-blue-500/30",
  "Data Analysis": "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
}

// ─── Flip Card ────────────────────────────────────────────────────────────────
function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const [flipped, setFlipped] = useState(false)
  const PreviewIcon = project.previewIcon

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92, y: -20 }}
      whileHover={{ y: -8 }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        ease: "easeOut",
        layout: { duration: 0.3 },
      }}
      // Fixed height so front & back are always the same size
      className="relative h-[480px] w-[min(88vw,35rem)] flex-shrink-0 snap-center"
      style={{ perspective: "1200px" }}
    >
      {/* Inner wrapper that flips */}
      <div
        className="relative w-full h-full transition-transform duration-700 ease-in-out cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
        onClick={() => !flipped && setFlipped(true)}
      >

        {/* ── FRONT ── */}
        <div
          className="absolute inset-0 glass rounded-2xl overflow-hidden group hover:border-violet-500/40 hover:shadow-[0_20px_54px_-34px_rgba(139,92,246,0.8)] transition-all duration-300 flex flex-col"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          {/* Preview banner */}
          <div
            className={`relative ${project.previewImage ? "h-52" : "h-36"} flex-shrink-0 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} border-b border-border/40`}
          >
            {project.previewImage ? (
              <img
                src={project.previewImage}
                alt={`${project.title} preview`}
                className="absolute inset-0 h-full w-full object-cover object-left-top"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-2xl bg-background/60 border border-border/50 flex items-center justify-center">
                  <PreviewIcon className={`w-7 h-7 ${project.iconColor}`} />
                </div>
              </div>
            )}
            {project.previewImage && (
              <div className="absolute right-4 top-4 w-11 h-11 rounded-2xl bg-background/70 border border-border/50 flex items-center justify-center backdrop-blur-sm">
                <PreviewIcon className={`w-7 h-7 ${project.iconColor}`} />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            {/* Hover hint */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-background/80 backdrop-blur-sm text-xs text-muted-foreground px-3 py-1.5 rounded-full border border-border/50">
                Click to see details
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-col flex-1 p-5 overflow-hidden">
            {/* Badge + title */}
            <div className="mb-3">
              <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border mb-2 ${domainBadge[project.domain]}`}>
                {project.domain}
              </span>
              <h4 className="text-lg font-bold text-foreground group-hover:text-violet-300 transition-colors leading-tight">
                {project.title}
              </h4>
              <p className="text-xs text-muted-foreground mt-0.5">{project.subtitle}</p>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs bg-background/60 text-muted-foreground rounded-md border border-border/40 hover:border-violet-500/30 hover:text-violet-300 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Spacer pushes buttons to bottom */}
            <div className="flex-1" />

            {/* Action buttons — stopPropagation prevents card flip */}
            <div className="flex gap-2.5">
              <Button
                size="sm"
                variant="outline"
                className="rounded-full border-border/60 hover:border-violet-500/40 hover:bg-violet-500/10 text-xs"
                asChild
                onClick={(e) => e.stopPropagation()}
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-3.5 h-3.5 mr-1.5" />
                  GitHub
                </a>
              </Button>
              <Button
                size="sm"
                className="rounded-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white border-0 text-xs"
                asChild
                onClick={(e) => e.stopPropagation()}
              >
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                  Live Demo
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          className="absolute inset-0 glass rounded-2xl flex flex-col border-violet-500/30 hover:shadow-[0_20px_54px_-34px_rgba(139,92,246,0.8)] overflow-hidden transition-shadow duration-300"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Back header */}
          <div className={`flex-shrink-0 px-5 pt-5 pb-4 border-b border-border/40 bg-gradient-to-r ${project.gradientFrom} ${project.gradientTo}`}>
            <div className="flex items-center justify-between">
              <div>
                <span className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full border mb-1.5 ${domainBadge[project.domain]}`}>
                  {project.domain}
                </span>
                <h4 className="text-base font-bold text-foreground leading-tight">{project.title}</h4>
              </div>
              <div className={`w-10 h-10 rounded-xl bg-background/50 border border-border/40 flex items-center justify-center flex-shrink-0`}>
                <PreviewIcon className={`w-5 h-5 ${project.iconColor}`} />
              </div>
            </div>
          </div>

          {/* Scrollable description */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 scrollbar-thin">
            <div>
              <p className="text-xs font-semibold text-violet-400 uppercase tracking-wider mb-1.5">Description</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
            </div>

            {project.architecture && (
              <div>
                <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1.5">Architecture</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{project.architecture}</p>
              </div>
            )}

            <div>
              <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1.5">Technologies</p>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs bg-background/60 text-muted-foreground rounded-md border border-border/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Back footer */}
          <div className="flex-shrink-0 px-5 pb-5 pt-3 border-t border-border/40 flex items-center justify-between gap-3">
            <button
              onClick={() => setFlipped(false)}
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-violet-400 transition-colors group/back"
            >
              <RotateCcw className="w-3.5 h-3.5 group-hover/back:-rotate-45 transition-transform" />
              Back to project
            </button>

            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className="rounded-full border-border/60 hover:border-violet-500/40 hover:bg-violet-500/10 text-xs h-8"
                asChild
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-3.5 h-3.5 mr-1.5" />
                  GitHub
                </a>
              </Button>
              <Button
                size="sm"
                className="rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white border-0 text-xs h-8"
                asChild
              >
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                  Live Demo
                </a>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  )
}

// ─── Section ─────────────────────────────────────────────────────────────────
export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<Domain>("All")
  const projectsScrollRef = useRef<HTMLDivElement>(null)

  const filteredProjects = projects.filter(
    (project) => activeFilter === "All" || project.domain === activeFilter
  )

  const scrollProjects = (direction: "left" | "right") => {
    const scrollContainer = projectsScrollRef.current

    if (!scrollContainer) return

    scrollContainer.scrollBy({
      left: direction === "left" ? -scrollContainer.clientWidth * 0.82 : scrollContainer.clientWidth * 0.82,
      behavior: "smooth",
    })
  }

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/3 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium tracking-wider uppercase mb-4 text-violet-400">
            My Work
          </p>
          <h3 className="text-4xl md:text-5xl font-bold gradient-text">
            Projects
          </h3>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "text-white shadow-lg shadow-violet-500/30"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeFilter === filter && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Horizontal Scroll */}
        <div className="relative">
          <button
            type="button"
            onClick={() => scrollProjects("left")}
            aria-label="Scroll projects left"
            className="absolute left-2 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-background/80 text-foreground shadow-lg shadow-black/30 backdrop-blur-md transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/15 hover:text-violet-300 md:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => scrollProjects("right")}
            aria-label="Scroll projects right"
            className="absolute right-2 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-background/80 text-foreground shadow-lg shadow-black/30 backdrop-blur-md transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/15 hover:text-violet-300 md:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <motion.div
            ref={projectsScrollRef}
            layout
            className="scrollbar-hide flex gap-6 overflow-x-auto overflow-y-hidden snap-x snap-mandatory px-[calc((100%_-_min(88vw,35rem))_/_2)] py-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
