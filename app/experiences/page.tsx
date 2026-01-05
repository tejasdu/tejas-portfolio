import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ExternalLink } from "lucide-react"

const experiences = [
  {
    company: "Tech Company Inc.",
    role: "Senior Full-Stack Engineer",
    period: "2023 — Present",
    location: "San Francisco, CA",
    description:
      "Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    link: "https://company.com",
  },
  {
    company: "Startup XYZ",
    role: "Full-Stack Developer",
    period: "2021 — 2023",
    location: "Remote",
    description:
      "Developed and shipped highly interactive web applications for startup clients. Collaborated with talented people to create digital products for both business and consumer use. Led frontend architecture decisions and mentored junior developers.",
    technologies: ["Vue.js", "Express", "MongoDB", "Docker"],
    link: "https://startup.com",
  },
  {
    company: "Digital Agency",
    role: "Frontend Developer",
    period: "2019 — 2021",
    location: "New York, NY",
    description:
      "Created responsive and accessible web applications for diverse clients across industries. Worked with design teams to implement pixel-perfect UIs and collaborated with backend engineers to integrate RESTful APIs.",
    technologies: ["React", "JavaScript", "Sass", "REST APIs"],
    link: "https://agency.com",
  },
  {
    company: "University Name",
    role: "Teaching Assistant",
    period: "2018 — 2019",
    location: "Boston, MA",
    description:
      "Assisted in teaching Web Development and Data Structures courses. Held office hours to help students with programming concepts, graded assignments, and provided constructive feedback.",
    technologies: ["Python", "JavaScript", "HTML/CSS"],
    link: "https://university.edu",
  },
]

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-4 text-balance">Experience</h1>
          <p className="text-xl text-muted-foreground text-pretty">My professional journey in software development</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 bg-card hover:bg-card/80 transition-colors group">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{exp.role}</h2>
                  <div className="flex items-center gap-2 text-lg font-medium text-muted-foreground mb-3">
                    {exp.company}
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
