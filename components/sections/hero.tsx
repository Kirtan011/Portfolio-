"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Send } from "lucide-react";
import { useState, useEffect } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 px-4 sm:px-6 lg:px-8 overflow-hidden mb-20">
      <div className="absolute inset-0 pointer-events-none overflow-visible">
        <motion.svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1000 300"
        >
          <motion.path
            d="M -100 20 Q 200 20 500 250 T 1150 10"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="30"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 1 }}
            animate={{
              pathLength: 4, // draws the line
              opacity: [1, 0], // fades out after drawing
            }}
            transition={{
              duration: 15,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </motion.svg>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background animate-gradient-shift"
          style={{
            backgroundPosition: `${mousePosition.x / 100}px ${
              mousePosition.y / 100
            }px`,
          }}
        ></div>

        <div className="absolute top-20 -left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl backdrop-blur-3xl animate-float-up"></div>
        <div className="absolute bottom-20 -right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl backdrop-blur-3xl animate-float-up"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <div>
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mb-12 inline-flex items-center gap-3 bg-card backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-lg px-6 py-3 font-semibold text-accent"
            >
              <span className="text-xs tracking-widest">
                → FULL STACK DEVELOPER
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              custom={0.1}
              initial="hidden"
              animate="show"
              className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-8 leading-tight text-foreground"
            >
              KIRTAN
              <br />
              SUTHAR
            </motion.h1>

            {/* Sub text */}
            <motion.p
              variants={fadeUp}
              custom={0.2}
              initial="hidden"
              animate="show"
              className="text-lg font-semibold text-foreground/80 mb-6 max-w-xl leading-relaxed"
            >
              I craft elegant digital experiences with glassmorphic design and
              modern functionality. Specialized in React, Next.js, and
              contemporary web aesthetics.
            </motion.p>

            {/* Availability */}
            <motion.p
              variants={fadeUp}
              custom={0.25}
              initial="hidden"
              animate="show"
              className="text-sm font-medium text-foreground/60 mb-12"
            >
              Available for select projects and full-time opportunities
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              custom={0.3}
              initial="hidden"
              animate="show"
              className="flex flex-col sm:flex-row items-start gap-6 mb-16"
            >
              <Button
                size="lg"
                className="bg-accent/80 backdrop-blur-md border border-accent/30 text-accent-foreground font-semibold hover:bg-accent hover:shadow-lg hover:scale-110 transition-all"
              >
                HIRE ME <ArrowRight className="ml-3" size={20} />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="bg-foreground/5 border border-foreground/20 text-foreground font-semibold hover:bg-foreground/10 hover:scale-110 transition-all"
              >
                VIEW WORK
              </Button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={fadeUp}
              custom={0.35}
              initial="hidden"
              animate="show"
              className="flex items-center gap-6"
            >
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-12 w-12 items-center justify-center bg-card backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-110 transition-all"
                >
                  <Icon
                    size={20}
                    className="text-foreground/70 hover:text-accent transition-colors"
                  />
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT SIDE — IMAGE + CARD */}
          <motion.div
            variants={fadeUp}
            custom={0.4}
            initial="hidden"
            animate="show"
            className="relative h-96 md:h-full"
          >
            {/* Card */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute inset-0 bg-card backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-lg flex items-center justify-center overflow-hidden"
            >
              <div className="text-center">
                <div className="text-7xl font-black text-accent/0 mb-4">KS</div>
                <p className="text-foreground/0 font-semibold">
                  Portfolio Showcase
                </p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.img
              src="/Kirtan.png"
              alt="Hero portfolio"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full h-full object-cover absolute inset-0 rounded-lg pointer-events-none"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
