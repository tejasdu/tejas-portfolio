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
            <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
              {/* Headshot - Left Side */}
              <div className="flex-shrink-0">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden ring-4 ring-primary/20 hover:ring-primary/40 transition-all duration-300 shadow-lg">
                  <Image
                    src="/professional-developer-headshot.jpg"
                    alt="Tejas Dumpeta"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                    quality={95}
                  />
                </div>
              </div>

              {/* Content - Right Side */}
              <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left justify-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-2 text-balance">Tejas Dumpeta</h1>
                <p className="text-xl text-muted-foreground mb-4">Computer Science @ University of Michigan</p>
                <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                  Backend Engineer & Product Developer building scalable systems, automation tools, and impactful products 
                  that solve real-world problems.
                </p>

                {/* Social Links */}
                <div className="flex items-center justify-center md:justify-start gap-4 w-full">
                  <Link
                    href="mailto:tejasd2022@gmail.com"
                    className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://github.com/tejasdu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                    aria-label="Personal GitHub link"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://linkedin.com/in/tejas-dumpeta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://drive.google.com/file/d/1mVePHXglaOpLtWrD1jwplrRaKacRXyAP/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                    aria-label="Resume"
                  >
                    <FileText className="w-5 h-5" />
                  </Link>
                </div>
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
                I’m a computer science student interested in building software products that are grounded in strong backend systems. 
                I enjoy working at the intersection of engineering and product, where I can design APIs, automate workflows, and make 
                technical tradeoffs that result in reliable, usable tools.
                </p>
                <p>
                My experience spans backend development, API integration, database systems, and product-focused engineering. I’m particularly 
                drawn to roles that blend technical depth with product thinking.
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
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-4 h-4" />
                    <span className="text-sm font-medium">C++</span>
                  </div>
                </div>
                <div className="group/badge relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-primary/20 transition-all duration-300 cursor-default hover:scale-105">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" className="w-4 h-4" />
                    <span className="text-sm font-medium">C</span>
                  </div>
                </div>
                <div className="group/badge relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-primary/20 transition-all duration-300 cursor-default hover:scale-105">
                    <Code2 className="w-4 h-4" />
                    <span className="text-sm font-medium">SQL</span>
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

              {/* Tools & Platforms */}
              <AnimatedSection delay={200}>
                <Card className="p-6 bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] group md:col-span-2 lg:col-span-2">
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
                <div className="group/badge relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-primary/20 transition-all duration-300 cursor-default hover:scale-105">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" className="w-4 h-4" />
                    <span className="text-sm font-medium">Kubernetes</span>
                  </div>
                </div>
                <div className="group/badge relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-primary/20 transition-all duration-300 cursor-default hover:scale-105">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" alt="Vercel" className="w-4 h-4" />
                    <span className="text-sm font-medium">Vercel</span>
                  </div>
                </div>
                <div className="group/badge relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-primary/20 transition-all duration-300 cursor-default hover:scale-105">
                    <Code2 className="w-4 h-4" />
                    <span className="text-sm font-medium">Railway</span>
                  </div>
                </div>
                <div className="group/badge relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-primary/20 transition-all duration-300 cursor-default hover:scale-105">
                    <Code2 className="w-4 h-4" />
                    <span className="text-sm font-medium">Postman</span>
                  </div>
                </div>
                <div className="group/badge relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-primary/20 transition-all duration-300 cursor-default hover:scale-105">
                    <Code2 className="w-4 h-4" />
                    <span className="text-sm font-medium">CI/CD</span>
                  </div>
                </div>
              </div>
                </Card>
              </AnimatedSection>

              {/* Frameworks & Libraries */}
              <AnimatedSection delay={300}>
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
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" className="w-4 h-4" />
                    <span className="text-sm font-medium">Express</span>
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
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" alt="Socket.io" className="w-4 h-4" />
                    <span className="text-sm font-medium">Socket.io</span>
                  </div>
                </div>
                <div className="group/badge relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-primary/20 transition-all duration-300 cursor-default hover:scale-105">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Pandas" className="w-4 h-4" />
                    <span className="text-sm font-medium">Pandas</span>
                  </div>
                </div>
                <div className="group/badge relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-primary/20 transition-all duration-300 cursor-default hover:scale-105">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" alt="NumPy" className="w-4 h-4" />
                    <span className="text-sm font-medium">NumPy</span>
                  </div>
                </div>
                <div className="group/badge relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-primary/20 transition-all duration-300 cursor-default hover:scale-105">
                    <Code2 className="w-4 h-4" />
                    <span className="text-sm font-medium">Supabase</span>
                  </div>
                </div>
                <div className="group/badge relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-primary/20 transition-all duration-300 cursor-default hover:scale-105">
                    <Code2 className="w-4 h-4" />
                    <span className="text-sm font-medium">Streamlit</span>
                  </div>
                </div>
              </div>
                </Card>
              </AnimatedSection>

              {/* Databases */}
              <AnimatedSection delay={400}>
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
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" className="w-4 h-4" />
                    <span className="text-sm font-medium">Redis</span>
                  </div>
                </div>
                <div className="group/badge relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-primary/20 transition-all duration-300 cursor-default hover:scale-105">
                    <Code2 className="w-4 h-4" />
                    <span className="text-sm font-medium">REST APIs</span>
                  </div>
                </div>
                <div className="group/badge relative">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-primary/20 transition-all duration-300 cursor-default hover:scale-105">
                    <Code2 className="w-4 h-4" />
                    <span className="text-sm font-medium">Supabase</span>
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
