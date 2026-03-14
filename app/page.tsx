import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { FeaturedProjectSection } from "@/components/featured-project-section"
import { ProjectsSection } from "@/components/projects-section"
import { AchievementsSection } from "@/components/achievements-section"
import { GitHubSection } from "@/components/github-section"
import { AIToolsSection } from "@/components/ai-tools-section"
import { LearningSection } from "@/components/learning-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <TechStackSection />
      <FeaturedProjectSection />
      <ProjectsSection />
      <AchievementsSection />
      <GitHubSection />
      <AIToolsSection />
      <LearningSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
