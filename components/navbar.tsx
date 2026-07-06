"use client"

import * as React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Home, User, Briefcase, FolderGit2, GraduationCap, Mail, Linkedin, Github } from "lucide-react"
import { motion } from "framer-motion"

export function Navbar() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { icon: <Home className="h-[18px] w-[18px]" />, href: "#hero", label: "Home" },
    { icon: <Briefcase className="h-[18px] w-[18px]" />, href: "#experience", label: "Experience" },
    { icon: <FolderGit2 className="h-[18px] w-[18px]" />, href: "#projects", label: "Projects" },
    { icon: <GraduationCap className="h-[18px] w-[18px]" />, href: "#education", label: "Education" },
  ]

  const socialItems = [
    { icon: <Mail className="h-[18px] w-[18px]" />, href: "mailto:kirtansuthar100@gmail.com", label: "Email" },
    { icon: <Linkedin className="h-[18px] w-[18px]" />, href: "#", label: "LinkedIn" },
    { icon: <Github className="h-[18px] w-[18px]" />, href: "https://github.com/Kirtan011", label: "GitHub" },
  ]

  return (
    <motion.div
      className="fixed bottom-6 left-1/2 z-50"
      initial={{ y: 100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
    >
      <nav className="flex items-center gap-1 px-3 py-2 rounded-full border border-border/90 bg-background/95 backdrop-blur-xl shadow-2xl shadow-black/30">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all duration-200 flex items-center justify-center relative group active:scale-90"
            aria-label={item.label}
          >
            {item.icon}
            <span className="absolute -top-9 scale-0 group-hover:scale-100 transition-all origin-bottom rounded-lg bg-popover border border-border/50 px-2.5 py-1 text-[11px] font-medium text-popover-foreground shadow-lg opacity-0 group-hover:opacity-100 whitespace-nowrap">
              {item.label}
            </span>
          </Link>
        ))}

        <div className="h-5 w-px bg-border/50 mx-0.5" />

        {socialItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all duration-200 flex items-center justify-center relative group active:scale-90"
            aria-label={item.label}
          >
            {item.icon}
            <span className="absolute -top-9 scale-0 group-hover:scale-100 transition-all origin-bottom rounded-lg bg-popover border border-border/50 px-2.5 py-1 text-[11px] font-medium text-popover-foreground shadow-lg opacity-0 group-hover:opacity-100 whitespace-nowrap">
              {item.label}
            </span>
          </a>
        ))}

        <div className="h-5 w-px bg-border/50 mx-0.5" />

        {mounted && (
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all duration-200 flex items-center justify-center relative group active:scale-90"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="h-[18px] w-[18px]" /> : <Sun className="h-[18px] w-[18px]" />}
            <span className="absolute -top-9 scale-0 group-hover:scale-100 transition-all origin-bottom rounded-lg bg-popover border border-border/50 px-2.5 py-1 text-[11px] font-medium text-popover-foreground shadow-lg opacity-0 group-hover:opacity-100 whitespace-nowrap">
              Theme
            </span>
          </button>
        )}
      </nav>
    </motion.div>
  )
}
