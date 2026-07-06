import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AsciiFlowTrail } from "@/components/ui/ascii-flow-trail"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Kirtan Suthar - Portfolio",
  description: "Frontend Developer Portfolio - Explore my work, skills, and achievements.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${geistMono.variable} font-sans antialiased min-h-screen bg-background flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <AsciiFlowTrail />
          <main className="flex-1 pb-24">
            {children}
          </main>
          <Navbar />
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
