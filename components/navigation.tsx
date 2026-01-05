"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-lg font-bold hover:text-primary transition-colors">
            Tejas Dumpeta
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              About
            </Link>
            <Link
              href="/experiences"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/experiences" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Experience
            </Link>
            <Link
              href="/projects"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/projects" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
