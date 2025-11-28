"use client"

import { Star } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "EMMA WILSON",
    role: "Founder at StartupXYZ",
    content:
      "Kirtan delivered an exceptional landing page. The attention to detail, performance optimization, and glassmorphic design exceeded our expectations. Highly professional.",
    avatar: "EW",
  },
  {
    name: "JAMES PARK",
    role: "Product Lead at TechCorp",
    content:
      "Working with Kirtan was a game-changer. They understood our vision immediately and created a beautiful dashboard that impressed all stakeholders. Would hire again.",
    avatar: "JP",
  },
  {
    name: "SARAH CHEN",
    role: "CEO at DesignStudio",
    content:
      "Outstanding developer. Clean code, great communication, and they delivered 2 weeks early. Kirtan is the complete package - technical and creative.",
    avatar: "SC",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="testimonials" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-foreground mb-4">TESTIMONIALS</h2>
          <p className="text-lg font-bold text-foreground max-w-2xl mx-auto">
            What clients are saying about working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`bg-card backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-lg p-8 animate-fade-in-up transition-all group relative overflow-hidden hover:scale-105 cursor-pointer ${
                activeIndex === index ? "ring-2 ring-accent/50 shadow-xl" : ""
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-accent text-accent animate-scale-in group-hover:rotate-12 transition-transform"
                    style={{ animationDelay: `${0.5 + i * 0.1}s` }}
                  />
                ))}
              </div>

              <p className="text-foreground font-bold mb-8">"{testimonial.content}"</p>

              <div className="flex items-center gap-4 border-t border-foreground/10 pt-6">
                <div className="flex h-12 w-12 items-center justify-center bg-card backdrop-blur-xl border border-foreground/10 rounded-2xl bg-accent/20 text-accent font-black rounded-lg group-hover:scale-110 transition-transform">
                  <span className="text-xs">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="font-black text-foreground">{testimonial.name}</p>
                  <p className="text-xs font-bold text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
