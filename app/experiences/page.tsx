"use client"

import React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ExternalLink } from "lucide-react"
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

const experiences = [
  {
    company: "University of Michigan Information and Technology Services",
    role: "Software Developer Intern",
    period: "Sep 2025 — Present",
    location: "Ann Arbor, MI",
    description:
      "Developing and optimizing automation scripts and integration tools to sync network data across 23,000+ devices in UofM's Network Asset Management applications. Deployed a Streamlit-based web tool leveraging Maizey (U-M GPT) to map natural language prompts to U-M APIs and generate executable code, improving API discoverability and reducing integration time for developers.",
    technologies: ["Python", "Streamlit", "REST APIs", "Postman", "CI/CD", "Automation"],
    link: "https://its.umich.edu",
  },
  {
    company: "University of Michigan Information and Technology Services",
    role: "ITS Technology Consultant",
    period: "Aug 2024 — Present",
    location: "Ann Arbor, MI",
    description:
      "Providing in-person and remote technical support, hardware troubleshooting, operating systems, and campus computing services. Assisting students, faculty, and staff with technology-related issues and ensuring smooth operation of campus computing infrastructure.",
    technologies: ["Technical Support", "Hardware Troubleshooting", "Operating Systems"],
    link: "https://its.umich.edu",
  },
  {
    company: "capoom",
    role: "Software Engineer",
    period: "Aug 2025 — Dec 2025",
    location: "Ann Arbor, MI",
    description:
      "Built and delivered an MVP 3D reconstruction and segmentation pipeline to generate editable synthetic road scenes from images for autonomous-vehicle edge-case testing. Developed a Gaussian Splatting pipeline to generate a 'digital twin' of the MCity track from a dataset of 18,000+ images via 3D Gaussian methods (Octree partitioning, CityGaussianV2) for scalable and real-time rendering. Evaluated RealityCapture & Postshot image-to-model pipeline performance using PSNR metrics.",
    technologies: ["Python", "Gaussian Splatting", "PyTorch", "NumPy", "Pandas"],
    link: "https://capoom.com",
  },
  {
    company: "Michigan Neuroprosthetics Club",
    role: "Software Division Team Member",
    period: "Sep 2023 — May 2025",
    location: "Ann Arbor, MI",
    description:
      "Developed backend software on our app to support user authentication, profiles, and Bluetooth integration with neuroprosthetic arms, delivering customizable functionality for pediatric patients. Utilized Scikit-learn, TensorFlow, and pandas to train a model on high-stress movements via EEG activation trends for different biomechanical movements to optimize prosthetic arm design.",
    technologies: ["Node.js", "Express", "Bluetooth", "Python", "TensorFlow", "Scikit-learn", "Pandas", "Machine Learning"],
    link: "https://www.umneuroprosthetics.org/",
  },
  {
    company: "Spire Investment Partners, LLC",
    role: "Technology & Cybersecurity Intern",
    period: "Jul 2024 — Aug 2024",
    location: "McLean, VA",
    description:
      "Developed secure, scalable Azure-based web systems to automate onboarding workflows and centralize 200+ employee and client records for business intelligence and analytics. Reduced approval turnaround by 30% through workflow automation while practicing effective SDLC project management practices throughout project completion.",
    technologies: ["Azure", "SQL", "REST APIs", "SDLC", "Web Development", "Database Management"],
    link: "https://spireip.com",
  },
  {
    company: "Bioastronautics and Life Support Systems (BLiSS)",
    role: "Team Member",
    period: "Jan 2023 — Dec 2023",
    location: "Ann Arbor, MI",
    description:
      "Contributed to the software development of a sensorimotor assessment tool (XHAB-SMAT) on the Tool Design and Integration team for a NASA Artemis–funded research project. Worked on developing tools for space mission preparation and astronaut assessment.",
    technologies: ["Software Development", "Tool Development", "Circuits"],
    link: "https://bliss.engin.umich.edu",
  },
  {
    company: "Skylark Drones",
    role: "Research Intern",
    period: "Jun 2023 — Aug 2023",
    location: "Bengaluru, Karnataka, India",
    description:
      "Developed a Tkinter-based GUI tool to deduplicate large-scale drone image datasets used in a 3D mapping pipeline. Contributed to a government-certified drone surveying curriculum used to train independent drone operators.",
    technologies: ["Python", "Tkinter", "GUI Development", "Image Processing", "3D Mapping"],
    link: "https://skylarkdrones.com",
  },
]

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <AnimatedSection>
          <div className="mb-16">
            <h1 className="text-5xl font-bold mb-4 text-balance">Experience</h1>
            <p className="text-xl text-muted-foreground text-pretty">My professional journey in software development</p>
          </div>
        </AnimatedSection>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <Card className="p-8 bg-card hover:bg-card/80 transition-colors group">
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
            </AnimatedSection>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
