"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";

const services = [
  {
    name: "HOURLY",
    price: "$75",
    description: "For small tasks and consultations",
    features: [
      "Perfect for quick fixes",
      "Code reviews",
      "Consulting sessions",
      "Flexible engagement",
      "Minimum 2 hours",
    ],
    highlighted: false,
  },
  {
    name: "PROJECT",
    price: "$3K+",
    description: "For custom development",
    features: [
      "Landing pages",
      "Web applications",
      "Full responsive design",
      "SEO optimization",
      "2-4 week turnaround",
      "Revisions included",
      "Deployment support",
    ],
    highlighted: true,
  },
  {
    name: "RETAINER",
    price: "$2K/mo",
    description: "Ongoing support & maintenance",
    features: [
      "Dedicated support",
      "Priority updates",
      "Monthly features",
      "Performance monitoring",
      "Emergency fixes",
      "Strategic planning",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-3 sm:mb-4">
            SERVICES & RATES
          </h2>
          <p className="text-base sm:text-lg font-bold text-foreground max-w-2xl mx-auto px-2">
            Flexible engagement options for every project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.name}
              className={`
    animate-fade-in-up
    transition-colors duration-200
    bg-card backdrop-blur-xl rounded-2xl
    border ${hoveredIndex === index ? "border-accent" : "border-foreground/10"}
    p-6 sm:p-8 flex flex-col h-full
  `}
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {service.highlighted && (
                <div className="inline-block mb-6 px-3 sm:px-4 py-2 sm:py-3 bg-card backdrop-blur-xl border border-foreground/10 rounded-2xl bg-accent/20 text-accent font-black w-fit">
                  <span className="text-xs sm:text-sm">★ RECOMMENDED ★</span>
                </div>
              )}

              <h3 className="text-2xl sm:text-3xl font-black text-foreground mb-2">
                {service.name}
              </h3>
              <p className="font-bold text-foreground text-xs sm:text-sm mb-6 sm:mb-8">
                {service.description}
              </p>

              <div className="mb-6 sm:mb-8">
                <span className="text-5xl sm:text-6xl font-black text-foreground">
                  {service.price}
                </span>
              </div>

              <Button
                className={`w-full mb-6 sm:mb-8 font-black rounded-lg text-sm sm:text-base transition-none
                  ${
                    service.highlighted
                      ? "bg-accent/80 backdrop-blur-md border border-accent/30 text-accent-foreground hover:bg-accent"
                      : "bg-foreground/5 backdrop-blur-md border border-foreground/20 text-foreground hover:bg-foreground/10"
                  }`}
                size="lg"
              >
                GET IN TOUCH
              </Button>

              <div className="space-y-3 sm:space-y-4">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={feature}
                    className="flex items-start gap-2 sm:gap-3 animate-fade-in-up"
                    style={{ animationDelay: `${0.6 + featureIndex * 0.05}s` }}
                  >
                    <Check
                      size={20}
                      className="text-accent flex-shrink-0 mt-0.5 min-w-5"
                    />
                    <span className="text-foreground font-bold text-xs sm:text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
