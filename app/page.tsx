"use client"

import React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Github, Linkedin, Mail, FileText, Code2, Database, Wrench } from "lucide-react"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
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

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Full Width */}
      <section className="w-full pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02]">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full bg-primary/20 mb-6 overflow-hidden ring-4 ring-primary/20 hover:ring-primary/40 transition-all duration-300">
                <Image
                  src="/professional-developer-headshot.png"
                  alt="Tejas Dumpeta"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-4xl font-bold mb-2 text-balance">Tejas Dumpeta</h1>
              <p className="text-xl text-muted-foreground mb-6">Computer Science @ UofM </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                I build accessible, pixel-perfect user interfaces that blend thoughtful design with robust
                engineering.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <Link
                  href="mailto:your.email@example.com"
                  className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </Link>
                <Link
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </Link>
                <Link
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  aria-label="Resume"
                >
                  <FileText className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* About Me Section - Below Hero */}
        <AnimatedSection>
          <section className="mb-24">
            <Card className="p-8 bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend
                  thoughtful design with robust engineering. My favorite work lies at the intersection of design and
                  development, creating experiences that not only look great but are meticulously built for performance
                  and usability.
                </p>
                <p>
                  Currently, I'm a Full-Stack Engineer at{" "}
                  <span className="text-foreground font-medium">Company Name</span>, specializing in building scalable
                  web applications. I contribute to the creation and maintenance of critical components that power our
                  platform, ensuring best practices and delivering an inclusive user experience.
                </p>
                <p>
                  In my spare time, I'm usually coding side projects, contributing to open source, or exploring new
                  technologies and frameworks.
                </p>
              </div>
            </Card>
          </section>
        </AnimatedSection>

        {/* Tech Arsenal Section */}
        <section className="mb-24">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">Tech Arsenal</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Languages & Core */}
              <AnimatedSection delay={100}>
                <Card className="p-6 bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110">
                  <Code2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="group/badge relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-primary/20 transition-all duration-300 cursor-default hover:scale-105">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-4 h-4" />
                    <span className="text-sm font-medium">JavaScript</span>
                  </div>
                </div>
                <div className="group/badge relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-primary/20 transition-all duration-300 cursor-default hover:scale-105">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-4 h-4" />
                    <span className="text-sm font-medium">TypeScript</span>
                  </div>
                </div>
                <div className="group/badge relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-primary/20 transition-all duration-300 cursor-default hover:scale-105">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-4 h-4" />
                    <span className="text-sm font-medium">Python</span>
                  </div>
                </div>
                <div className="group/badge relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-primary/20 transition-all duration-300 cursor-default hover:scale-105">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-4 h-4" />
                    <span className="text-sm font-medium">Java</span>
                  </div>
                </div>
                <div className="group/badge relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-primary/20 transition-all duration-300 cursor-default hover:scale-105">
                    <Code2 className="w-4 h-4" />
                    <span className="text-sm font-medium">HTML/CSS</span>
                  </div>
                </div>
              </div>
                </Card>
              </AnimatedSection>

              {/* Frameworks & Libraries */}
              <AnimatedSection delay={200}>
                <Card className="p-6 bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] group md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110">
                  <Code2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Frameworks & Libraries</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="group/badge relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-primary/20 transition-all duration-300 cursor-default hover:scale-105">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-4 h-4" />
                    <span className="text-sm font-medium">React</span>
                  </div>
                </div>
                <div className="group/badge relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-primary/20 transition-all duration-300 cursor-default hover:scale-105">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-4 h-4" />
                    <span className="text-sm font-medium">Next.js</span>
                  </div>
                </div>
                <div className="group/badge relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-primary/20 transition-all duration-300 cursor-default hover:scale-105">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-4 h-4" />
                    <span className="text-sm font-medium">Node.js</span>
                  </div>
                </div>
                <div className="group/badge relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-primary/20 transition-all duration-300 cursor-default hover:scale-105">
                    <Code2 className="w-4 h-4" />
                    <span className="text-sm font-medium">Express</span>
                  </div>
                </div>
                <div className="group/badge relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-primary/20 transition-all duration-300 cursor-default hover:scale-105">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" className="w-4 h-4" />
                    <span className="text-sm font-medium">Vue.js</span>
                  </div>
                </div>
                <div className="group/badge relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-primary/20 transition-all duration-300 cursor-default hover:scale-105">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-4 h-4" />
                    <span className="text-sm font-medium">Tailwind CSS</span>
                  </div>
                </div>
                <div className="group/badge relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-primary/20 transition-all duration-300 cursor-default hover:scale-105">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux" className="w-4 h-4" />
                    <span className="text-sm font-medium">Redux</span>
                  </div>
                </div>
                <div className="group/badge relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-primary/20 transition-all duration-300 cursor-default hover:scale-105">
                    <Code2 className="w-4 h-4" />
                    <span className="text-sm font-medium">React Query</span>
                  </div>
                </div>
              </div>
                </Card>
              </AnimatedSection>

              {/* Databases */}
              <AnimatedSection delay={300}>
                <Card className="p-6 bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] group md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Databases & Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="group/badge relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-primary/20 transition-all duration-300 cursor-default hover:scale-105">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-4 h-4" />
                    <span className="text-sm font-medium">PostgreSQL</span>
                  </div>
                </div>
                <div className="group/badge relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-primary/20 transition-all duration-300 cursor-default hover:scale-105">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-4 h-4" />
                    <span className="text-sm font-medium">MongoDB</span>
                  </div>
                </div>
                <div className="group/badge relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-primary/20 transition-all duration-300 cursor-default hover:scale-105">
                    <Database className="w-4 h-4" />
                    <span className="text-sm font-medium">MySQL</span>
                  </div>
                </div>
                <div className="group/badge relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-primary/20 transition-all duration-300 cursor-default hover:scale-105">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" className="w-4 h-4" />
                    <span className="text-sm font-medium">Redis</span>
                  </div>
                </div>
                <div className="group/badge relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-primary/20 transition-all duration-300 cursor-default hover:scale-105">
                    <Database className="w-4 h-4" />
                    <span className="text-sm font-medium">Prisma</span>
                  </div>
                </div>
                <div className="group/badge relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-primary/20 transition-all duration-300 cursor-default hover:scale-105">
                    <Database className="w-4 h-4" />
                    <span className="text-sm font-medium">Supabase</span>
                  </div>
                </div>
              </div>
                </Card>
              </AnimatedSection>

              {/* Tools & Platforms */}
              <AnimatedSection delay={400}>
                <Card className="p-6 bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110">
                  <Wrench className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Tools & Platforms</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="group/badge relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-primary/20 transition-all duration-300 cursor-default hover:scale-105">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-4 h-4" />
                    <span className="text-sm font-medium">Git</span>
                  </div>
                </div>
                <div className="group/badge relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-primary/20 transition-all duration-300 cursor-default hover:scale-105">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-4 h-4" />
                    <span className="text-sm font-medium">Docker</span>
                  </div>
                </div>
              </div>
                </Card>
              </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
