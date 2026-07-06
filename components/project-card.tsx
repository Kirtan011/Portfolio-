"use client"

import { BlurFade } from "./ui/blur-fade"
import { ArrowUpRight } from "lucide-react"

interface ProjectProps {
  title: string
  description: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  delay?: number
}

export function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  delay = 0,
}: ProjectProps) {
  return (
    <BlurFade delay={delay}>
      <div className="group relative p-6 md:p-8 hover:bg-secondary/20 transition-all duration-300 h-full flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">{title}</h3>
          {(githubUrl && githubUrl !== "#") && (
            <a href={githubUrl} target="_blank" rel="noreferrer" className="p-1 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all opacity-0 group-hover:opacity-100">
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
        <p className="text-sm text-muted-foreground flex-grow leading-relaxed mb-5">{description}</p>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center bg-secondary/50 border border-border/30 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
        {liveUrl && liveUrl !== "#" && (
          <a href={liveUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4">
            Live Demo <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </BlurFade>
  )
}
