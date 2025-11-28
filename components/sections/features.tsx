"use client";

import {
  Code,
  Palette,
  Zap,
  Database,
  Smartphone,
  GitBranch,
} from "lucide-react";
import { useState } from "react";

const skills = [
  {
    icon: Code,
    title: "FRONTEND",
    description: "React, Next.js, TypeScript, Tailwind CSS",
  },
  {
    icon: Palette,
    title: "DESIGN",
    description: "UI/UX, Figma, Design Systems, Responsive",
  },
  {
    icon: Zap,
    title: "PERFORMANCE",
    description: "Optimization, SEO, Core Web Vitals",
  },
  {
    icon: Database,
    title: "BACKEND",
    description: "Node.js, Express, SQL, Firebase",
  },
  {
    icon: Smartphone,
    title: "MOBILE",
    description: "React Native, PWA, Cross-platform",
  },
  {
    icon: GitBranch,
    title: "DEVOPS",
    description: "Git, CI/CD, Vercel, AWS, Docker",
  },
];

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="skills"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-foreground mb-4">
            EXPERTISE
          </h2>
          <p className="text-lg font-bold text-foreground max-w-2xl mx-auto">
            Full-stack development with modern tools and glassmorphic design
            principles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className={`bg-card backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-lg p-8 animate-fade-in-up transition-all group relative overflow-hidden hover:scale-105 hover:shadow-xl ${
                  hoveredIndex === index ? "ring-2 ring-accent/50" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center bg-card backdrop-blur-xl border border-foreground/10 rounded-2xl bg-accent/20 text-accent transition-all group-hover:scale-110 group-hover:rotate-6 rounded-lg">
                  <Icon size={28} className="font-black" />
                </div>
                <h3 className="text-xl font-black text-foreground mb-3">
                  {skill.title}
                </h3>
                <p className="font-bold text-foreground">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
