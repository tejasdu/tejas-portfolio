import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard. Built with modern web technologies for optimal performance and user experience.",
    image: "/modern-ecommerce-dashboard.png",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveLink: "https://project1.com",
    githubLink: "https://github.com/yourusername/project1",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, team workspaces, and advanced filtering. Features drag-and-drop interface and customizable workflows.",
    image: "/task-management-app.png",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redux"],
    liveLink: "https://project2.com",
    githubLink: "https://github.com/yourusername/project2",
  },
  {
    title: "Weather Dashboard",
    description:
      "Beautiful weather application with location-based forecasts, interactive maps, and detailed analytics. Integrates multiple weather APIs for accurate predictions.",
    image: "/weather-dashboard.png",
    technologies: ["Vue.js", "Express", "OpenWeather API", "Chart.js"],
    liveLink: "https://project3.com",
    githubLink: "https://github.com/yourusername/project3",
  },
  {
    title: "Portfolio CMS",
    description:
      "Content management system designed for creative professionals to showcase their work. Features customizable templates, media management, and SEO optimization.",
    image: "/portfolio-cms-interface.jpg",
    technologies: ["Next.js", "Sanity.io", "Vercel", "TypeScript"],
    liveLink: "https://project4.com",
    githubLink: "https://github.com/yourusername/project4",
  },
  {
    title: "AI Chat Application",
    description:
      "Real-time chat application with AI-powered features including message suggestions, sentiment analysis, and smart replies. Built with modern real-time technologies.",
    image: "/ai-chat-application-interface.jpg",
    technologies: ["React", "Firebase", "OpenAI API", "Material-UI"],
    liveLink: "https://project5.com",
    githubLink: "https://github.com/yourusername/project5",
  },
  {
    title: "Fitness Tracker",
    description:
      "Mobile-responsive fitness tracking application with workout planning, progress visualization, and social features. Integrates with popular fitness APIs.",
    image: "/fitness-tracker-app-dashboard.png",
    technologies: ["React Native", "Node.js", "PostgreSQL", "Chart.js"],
    liveLink: "https://project6.com",
    githubLink: "https://github.com/yourusername/project6",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-4 text-balance">Projects</h1>
          <p className="text-xl text-muted-foreground text-pretty">A collection of things I've built</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden bg-card hover:bg-card/80 transition-colors group">
              <div className="relative h-48 bg-secondary overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h2>
                  <div className="flex items-center gap-2">
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-secondary transition-colors"
                      aria-label="View live project"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-secondary transition-colors"
                      aria-label="View source code"
                    >
                      <Github className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
