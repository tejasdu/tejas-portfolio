"use client"

import React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useScrollAnimation } from "@/lib/use-scroll-animation"

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

const projects = [
  {
    title: "Selectaurant",
    description:
      "A multiplayer web application that helps groups decide where to eat together. Users create custom lobbies with unique codes, filter restaurants using the Google Places API, and vote on their preferences. Features real-time synchronization via Socket.io, server-side vote calculation, and a mobile-responsive design with an intuitive carousel view of top restaurant choices.",
    image: "/placeholder.svg",
    technologies: ["Next.js", "Node.js", "TypeScript", "React.js", "Tailwind CSS", "Supabase", "Socket.io", "Leaflet", "Google Places API", "Railway"],
    liveLink: "https://selectaraunt.up.railway.app/",
    githubLink: "https://github.com/MishanGagnon/restaurant",
  },
  {
    title: "UMazing",
    description:
      "An AI-powered academic advisor that helps students plan their course selection using their course audit checklist. Built at MHacks 24, this tool uses OpenAI's API with multi-step tool calls to provide personalized course recommendations. Features custom streaming React components for real-time responses and web scraping integration with course audits and Atlas to deliver context-aware guidance.",
    image: "/placeholder.svg",
    technologies: ["Next.js", "Node.js", "React", "TypeScript", "Python", "PostgreSQL", "OpenAI API", "Railway", "Vercel"],
    liveLink: "https://mhack2024-production.up.railway.app/",
    githubLink: "https://github.com/MishanGagnon/mhacks2024",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <AnimatedSection>
          <div className="mb-16">
            <h1 className="text-5xl font-bold mb-4 text-balance">Projects</h1>
            <p className="text-xl text-muted-foreground text-pretty">A collection of things I've built</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <Card className="overflow-hidden bg-card hover:bg-card/80 transition-colors group">
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
            </AnimatedSection>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
