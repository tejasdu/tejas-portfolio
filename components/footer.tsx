import { Github, Linkedin, Mail, FileText } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center gap-6">
          <Link
            href="mailto:tejasd2022@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </Link>
          <Link
            href="https://github.com/tejasdu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="https://linkedin.com/in/tejas-dumpeta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href="https://drive.google.com/file/d/1mVePHXglaOpLtWrD1jwplrRaKacRXyAP/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Resume"
          >
            <FileText className="w-5 h-5" />
          </Link>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4" > Tejas Dumpeta </p>
      </div>
    </footer>
  )
}
