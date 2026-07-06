import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="max-w-7xl mx-auto border-x border-border">
      <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-8 md:px-12 border-t border-border">
        <p className="text-sm text-muted-foreground">
          Designed & built by <span className="text-foreground font-medium">Kirtan Suthar</span>
        </p>
        <Link
          href="https://github.com/Kirtan011"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mt-4 sm:mt-0"
        >
          Source <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </footer>
  )
}
