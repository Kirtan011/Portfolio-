"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation({
  isDark,
  onToggleTheme,
}: {
  isDark: boolean
  onToggleTheme: () => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [isShrunk, setIsShrunk] = useState(false)

  // Detect scroll shrink
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsShrunk(true)
      } else {
        setIsShrunk(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b border-foreground/10 bg-background/80 backdrop-blur-md transition-all duration-300 animate-fade-in-down
        ${isShrunk ? "h-14" : "h-20"}
      `}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300
            ${isShrunk ? "h-14" : "h-20"}
          `}
        >
          {/* Logo */}
          <div className="flex items-center gap-3 transition-all hover:opacity-70">
            <div
              className={`flex items-center justify-center border border-foreground/30 bg-primary rounded-lg transition-all duration-300
                ${isShrunk ? "h-8 w-8" : "h-10 w-10"}
              `}
            >
              <span
                className={`font-black text-primary-foreground transition-all duration-300
                  ${isShrunk ? "text-[10px]" : "text-xs"}
                `}
              >
                KS
              </span>
            </div>
            <span
              className={`hidden sm:inline text-foreground font-semibold transition-all duration-300
                ${isShrunk ? "text-sm" : "text-base"}
              `}
            >
              KIRTAN
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden items-center gap-12 md:flex">
            {["SKILLS", "TESTIMONIALS", "SERVICES"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Theme + Contact */}
          <div className="hidden items-center gap-6 md:flex">
            <button
              onClick={onToggleTheme}
              className="bg-background border border-foreground/20 text-foreground p-2 rounded-lg hover:bg-foreground/5 transition-all"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Button
              size="sm"
              className="border border-accent/40 bg-accent font-semibold text-accent-foreground hover:shadow-lg transition-all rounded-lg px-6 py-2"
            >
              CONTACT
            </Button>
          </div>

          {/* Hamburger */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-foreground/10 bg-card/50 backdrop-blur-md md:hidden animate-fade-in-down">
            <div className="space-y-3 px-4 py-6">
              {["SKILLS", "TESTIMONIALS", "SERVICES"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block rounded-lg border border-foreground/10 px-4 py-3 text-sm font-medium text-foreground hover:bg-foreground/5 transition-colors"
                >
                  {item}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <button
                  onClick={onToggleTheme}
                  className="w-full bg-background border border-foreground/20 text-foreground p-2 rounded-lg hover:bg-foreground/5 transition-all flex items-center justify-center"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <Button
                  size="sm"
                  className="w-full border border-accent/40 bg-accent font-semibold text-accent-foreground"
                >
                  CONTACT
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
