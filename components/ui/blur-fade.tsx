"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface BlurFadeProps {
  children: React.ReactNode
  className?: string
  delay?: number
  yOffset?: number
  inViewMargin?: string
  blur?: string
}

export function BlurFade({
  children,
  className,
  delay = 0,
  yOffset = 24,
  inViewMargin = "-50px",
  blur = "6px",
}: BlurFadeProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: inViewMargin as any })

  const defaultVariants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: 0, opacity: 1, filter: `blur(0px)` },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      variants={defaultVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
