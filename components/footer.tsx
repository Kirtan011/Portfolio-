"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="max-w-7xl mx-auto border-x border-border bg-background mb-20 md:mb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-border">
        {/* Column 1: Info */}
        <div className="px-6 py-8 md:px-12 md:py-10 border-b md:border-b-0 md:border-r border-border space-y-3">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Branding</p>
          <p className="text-sm font-semibold tracking-tight">Kirtan Suthar</p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} — Software Engineer
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="px-6 py-8 md:px-12 md:py-10 border-b md:border-b-0 md:border-r border-border space-y-3">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Sitemap</p>
          <div className="flex flex-col gap-2 text-xs font-medium text-muted-foreground">
            <Link href="#hero" className="hover:text-primary transition-colors w-fit">
              Home
            </Link>
            <Link href="#experience" className="hover:text-primary transition-colors w-fit">
              Experience
            </Link>
            <Link href="#projects" className="hover:text-primary transition-colors w-fit">
              Projects
            </Link>
            <Link href="#education" className="hover:text-primary transition-colors w-fit">
              Education
            </Link>
          </div>
        </div>

        {/* Column 3: Connect & Actions */}
        <div className="px-6 py-8 md:px-12 md:py-10 space-y-3 relative group">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Connect</p>
          <div className="flex flex-col gap-2 text-xs font-medium text-muted-foreground">
            <a
              href="https://github.com/Kirtan011"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors w-fit inline-flex items-center gap-1"
            >
              GitHub <ArrowUpRight className="h-3 w-3" />
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors w-fit inline-flex items-center gap-1"
            >
              LinkedIn <ArrowUpRight className="h-3 w-3" />
            </a>
            <a
              href="mailto:kirtansuthar100@gmail.com"
              className="hover:text-primary transition-colors w-fit inline-flex items-center gap-1"
            >
              Email <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>

          {/* Floating Back to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="absolute bottom-6 right-6 md:bottom-8 md:right-12 p-2.5 border border-border bg-background hover:border-primary hover:text-primary transition-all duration-300 active:scale-95 flex items-center justify-center"
            aria-label="Back to top"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}
