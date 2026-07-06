import fs from "fs"
import path from "path"
import { BlurFade } from "@/components/ui/blur-fade"
import { ProjectCard } from "@/components/project-card"
import { ExperienceItem } from "@/components/experience-item"
import { User, ArrowUpRight, MapPin, Mail, Phone } from "lucide-react"

// Helper function to read JSON files from the /content directory
function getContent(filename: string) {
  const filePath = path.join(process.cwd(), "content", filename)
  if (!fs.existsSync(filePath)) return null
  const fileContents = fs.readFileSync(filePath, "utf8")
  return JSON.parse(fileContents)
}

function getProjects() {
  const projectsDir = path.join(process.cwd(), "content", "projects")
  if (!fs.existsSync(projectsDir)) return []
  const fileNames = fs.readdirSync(projectsDir)
  return fileNames
    .filter((name) => name.endsWith(".json"))
    .map((name) => {
      const filePath = path.join(projectsDir, name)
      const fileContents = fs.readFileSync(filePath, "utf8")
      return JSON.parse(fileContents)
    })
}

export default function Home() {
  const personal = getContent("personal.json")
  const experience = getContent("experience.json") || []
  const education = getContent("education.json") || []
  const skills = getContent("skills.json") || {}
  const projects = getProjects()
  const socials = getContent("socials.json") || []
  const certifications = getContent("certifications.json") || []
  const achievements = getContent("achievements.json") || []

  if (!personal) {
    return <div className="p-8 text-center">Missing personal.json content data.</div>
  }

  return (
    <div className="relative max-w-7xl mx-auto border-x border-border mt-16 md:mt-12">

      {/* ─── Hero Section ─── */}
      <section id="hero" className="relative overflow-hidden border-t border-b border-border">
        <div className="flex flex-col-reverse md:flex-row">
          {/* Left: Text content */}
          <div className="flex-1 md:border-r border-border flex flex-col">
            <div className="flex-1 flex flex-col gap-8 md:gap-16 px-6 py-12 md:px-12 md:py-16">
              <BlurFade delay={0.05}>
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-border/50 bg-secondary/50 text-xs font-medium text-muted-foreground">
                  <span className="w-2 h-2 bg-emerald-500 animate-pulse" />
                  Available for opportunities
                </div>
              </BlurFade>
              <BlurFade delay={0.1}>
                <h1 className="font-medium tracking-tight text-foreground text-[clamp(2.5rem,2.29vw+1.94rem,4rem)] leading-[0.96]">
                  {personal.name.split(' ')[0]}{" "}
                  <span className="text-gradient">{personal.name.split(' ').slice(1).join(' ')}</span>
                </h1>
              </BlurFade>
              <div className="space-y-6">
                <BlurFade delay={0.2}>
                  <p className="text-balance text-[clamp(1rem,.19vw+.95rem,1.12rem)] font-normal leading-[1.4] tracking-[-0.02em] text-muted-foreground">
                    {personal.about}
                  </p>
                </BlurFade>
                <BlurFade delay={0.25}>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{personal.location}</span>
                    <span className="w-1 h-1 bg-border" />
                    <span className="inline-flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" />{personal.email}</span>
                    {personal.phone && (
                      <>
                        <span className="w-1 h-1 bg-border" />
                        <span className="inline-flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" />{personal.phone}</span>
                      </>
                    )}
                  </div>
                </BlurFade>
              </div>
            </div>
            {/* Bottom CTA bar */}
            <BlurFade delay={0.3}>
              <div className="flex flex-col sm:flex-row w-full border-t border-border">
                {socials.map((social: any) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center min-h-[4rem] border-r border-border last:border-r-0 text-sm font-normal uppercase tracking-widest text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-200"
                  >
                    {social.name}
                  </a>
                ))}
                <a
                  href={`mailto:${personal.email}`}
                  className="group flex items-center justify-between min-h-[4rem] bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all duration-200"
                >
                  <span className="px-6">LET'S TALK</span>
                  <span className="h-[4rem] w-px bg-primary-foreground/20" />
                  <span className="px-5 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-foreground transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </a>
              </div>
            </BlurFade>
          </div>

          {/* Right: Photo area */}
          <div className="flex-1 hidden lg:flex items-center justify-center py-12 md:py-20 px-8 relative">
            {/* Subtle gradient orb */}
            <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-primary/5 blur-[100px] pointer-events-none" />
            <BlurFade delay={0.5}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative h-48 w-48 md:h-56 md:w-56 overflow-hidden border border-border">
                  <img
                    src="/kirtan.jpg"
                    alt={personal.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* ─── About / Title Section ─── */}
      <section id="about" className="relative overflow-hidden border-b border-border">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 md:border-r border-border px-6 py-10 md:px-12 md:py-14">
            <BlurFade delay={0.1}>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Role</p>
              <h2 className="font-medium tracking-tight text-foreground text-2xl md:text-3xl leading-tight">{personal.title}</h2>
            </BlurFade>
          </div>
          <div className="flex-1 px-6 py-10 md:px-12 md:py-14 flex items-center">
            <BlurFade delay={0.2}>
              <p className="text-sm text-muted-foreground leading-relaxed">
                📍 {personal.location} · {personal.email} · {personal.phone}
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* ─── Experience Section ─── */}
      <section id="experience" className="relative overflow-hidden border-b border-border">
        <div className="px-6 py-10 md:px-12 md:py-16 space-y-8">
          <BlurFade delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Career</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Work Experience</h2>
          </BlurFade>
          <div className="space-y-5 pt-4">
            {experience.map((item: any, index: number) => (
              <ExperienceItem key={index} {...item} delay={0.2 + index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Projects Section ─── */}
      <section id="projects" className="relative overflow-hidden border-b border-border">
        <div className="px-6 py-10 md:px-12 md:py-16">
          <BlurFade delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
          </BlurFade>
        </div>
        {/* Projects grid using border cells */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {projects.map((project: any, index: number) => (
            <div key={project.id || index} className="border-t border-border [&:nth-child(odd)]:md:border-r">
              <ProjectCard {...project} delay={0.2 + index * 0.1} />
            </div>
          ))}
        </div>
        <div className="border-t border-border flex justify-center py-8 bg-secondary/10">
          <BlurFade delay={0.3}>
            <a
              href="https://github.com/Kirtan011?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 border border-border bg-background/50 text-xs font-semibold uppercase tracking-widest hover:border-primary hover:text-primary transition-all duration-350"
            >
              More on GitHub
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </BlurFade>
        </div>
      </section>

      {/* ─── Skills Section ─── */}
      <section id="skills" className="relative overflow-hidden border-b border-border">
        <div className="px-6 py-10 md:px-12 md:py-16">
          <BlurFade delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Toolkit</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Skills & Technologies</h2>
          </BlurFade>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills as Record<string, string[]>).map(([category, items], index: number) => {
            const borderClasses = `
              border-t border-border
              ${index % 3 !== 2 ? "lg:border-r" : "lg:border-r-0"}
              ${index % 2 === 0 ? "sm:border-r lg:sm:border-r-0" : "sm:border-r-0"}
            `.replace(/\s+/g, ' ').trim();

            return (
              <BlurFade key={category} delay={0.2 + index * 0.1}>
                <div className={`group ${borderClasses} px-6 py-8 md:px-10 space-y-4 hover:bg-secondary/20 transition-all duration-300 h-full`}>
                  <h3 className="font-semibold text-sm uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill: string) => (
                      <span
                        key={skill}
                        className="inline-flex items-center bg-secondary/50 border border-border/40 px-2.5 py-1 text-xs font-medium text-secondary-foreground hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </BlurFade>
            )
          })}
          {/* Complete the grid borders dynamically */}
          <div className="hidden lg:block border-t border-border" />
          <div className="hidden sm:block lg:hidden border-t border-border" />
        </div>
      </section>

      {/* ─── Education & Achievements Section ─── */}
      <section id="education" className="relative overflow-hidden border-b border-border">
        <div className="flex flex-col md:flex-row">
          {/* Education column */}
          <div className="flex-1 md:border-r border-border">
            <div className="px-6 py-10 md:px-12 md:py-16 space-y-8">
              <BlurFade delay={0.1}>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Background</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Education</h2>
              </BlurFade>
              <div className="space-y-6 pt-4">
                {education.map((edu: any, index: number) => (
                  <BlurFade key={index} delay={0.2 + index * 0.1}>
                    <div className="p-5 border border-border/50 bg-card/50 hover:bg-card hover:border-border transition-all duration-300">
                      <h3 className="font-semibold">{edu.institution}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{edu.degree}</p>
                      <div className="flex items-center justify-between mt-3 text-sm">
                        <span className="text-muted-foreground">{edu.startDate} — {edu.endDate}</span>
                        <span className="font-semibold text-primary text-xs px-2 py-0.5 bg-primary/10">{edu.score}</span>
                      </div>
                    </div>
                  </BlurFade>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements column */}
          <div className="flex-1">
            <div className="px-6 py-10 md:px-12 md:py-16 space-y-8">
              <BlurFade delay={0.1}>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Recognition</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Achievements</h2>
              </BlurFade>
              <div className="space-y-4 pt-4">
                {achievements.map((ach: any, index: number) => (
                  <BlurFade key={`ach-${index}`} delay={0.2 + index * 0.1}>
                    <div className="group border-l-2 border-primary/20 hover:border-primary/60 pl-5 py-2 transition-all duration-300">
                      <h4 className="font-medium text-sm">{ach.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{ach.description}</p>
                    </div>
                  </BlurFade>
                ))}
                {certifications.map((cert: any, index: number) => (
                  <BlurFade key={`cert-${index}`} delay={0.2 + (achievements.length + index) * 0.1}>
                    <div className="group border-l-2 border-primary/20 hover:border-primary/60 pl-5 py-2 transition-all duration-300">
                      <h4 className="font-medium text-sm">{cert.title} <span className="text-muted-foreground font-normal">· {cert.year}</span></h4>
                      <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                    </div>
                  </BlurFade>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
