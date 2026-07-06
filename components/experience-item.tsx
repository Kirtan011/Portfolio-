"use client"

import { BlurFade } from "./ui/blur-fade"

interface ExperienceItemProps {
  role: string
  company: string
  location: string
  startDate: string
  endDate: string
  description: string[]
  delay?: number
}

export function ExperienceItem({
  role,
  company,
  location,
  startDate,
  endDate,
  description,
  delay = 0,
}: ExperienceItemProps) {
  return (
    <BlurFade delay={delay}>
      <div className="group relative p-6 border border-border/50 bg-card/50 hover:bg-card hover:border-border transition-all duration-300">
        <div className="flex flex-col gap-1 mb-4 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">
              {role}
            </h3>
            <p className="text-sm text-muted-foreground">{company} · {location}</p>
          </div>
          <span className="text-xs font-medium text-muted-foreground bg-secondary/50 px-3 py-1 border border-border/30 whitespace-nowrap mt-2 sm:mt-0">
            {startDate} — {endDate}
          </span>
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {description.map((item, index) => (
            <li key={index} className="flex gap-3 leading-relaxed">
              <span className="mt-2 h-1 w-1 bg-primary/40 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </BlurFade>
  )
}
