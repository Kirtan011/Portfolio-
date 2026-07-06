"use client"

import { useRef, useEffect } from "react"

interface AsciiFlowTrailProps {
  glyphSet?: number
  scale?: number
  gamma?: number
  mix?: number
  invertOrder?: boolean
  monochrome?: boolean
  blendMode?: string
  radius?: number
  strength?: number
  turbulence?: number
  tint?: string
  colorMix?: number
  tailLength?: number
  drawBlendMode?: string
  trackMouse?: number
  momentum?: number
  className?: string
}

export function AsciiFlowTrail({
  glyphSet = 3, // Bayer
  scale = 32,
  gamma = 0.1,
  mix = 35, // Subtle overlay opacity
  invertOrder = true,
  monochrome = true,
  blendMode = "Normal",
  radius = 24,
  strength = 80,
  turbulence = 60,
  tint = "#ef4444", // Premium theme red
  colorMix = 100,
  tailLength = 90,
  drawBlendMode = "Screen",
  trackMouse = 100,
  momentum = 35,
  className = "",
}: AsciiFlowTrailProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePos = useRef({ x: -1000, y: -1000 })
  const smoothPos = useRef({ x: -1000, y: -1000 })
  const trail = useRef<{ x: number; y: number; life: number }[]>([])
  const time = useRef(0)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const updateSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    updateSize()
    window.addEventListener("resize", updateSize)

    const handleMouse = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
    }
    // Listen on window so we capture mouse position even with pointer-events-none on the canvas
    window.addEventListener("mousemove", handleMouse)

    let baseChars = "@%#*+=-:. "
    switch (glyphSet) {
      case 0: baseChars = "●•·. "; break;
      case 1: baseChars = "■□▪▫ "; break;
      case 2: baseChars = "█▓▒░ "; break;
      case 3: baseChars = "▣▤▥▦▧▨▩ "; break;
      case 4: baseChars = "◆◇◈○◉◊◌ "; break;
      default: baseChars = "@%#*+=-:. ";
    }
    const chars = invertOrder ? baseChars.split("").reverse().join("") : baseChars

    let tintR = 239, tintG = 68, tintB = 68 // default #ef4444
    if (tint.startsWith("#")) {
      tintR = parseInt(tint.slice(1, 3), 16)
      tintG = parseInt(tint.slice(3, 5), 16)
      tintB = parseInt(tint.slice(5, 7), 16)
    }

    const animate = () => {
      time.current += 0.016
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      let targetX = mousePos.current.x
      let targetY = mousePos.current.y

      if (trackMouse < 100) {
        const autoX = canvas.width / 2 + Math.sin(time.current) * 150
        const autoY = canvas.height / 2 + Math.cos(time.current * 0.7) * 150
        const trackFactor = trackMouse / 100
        targetX = mousePos.current.x * trackFactor + autoX * (1 - trackFactor)
        targetY = mousePos.current.y * trackFactor + autoY * (1 - trackFactor)
      }

      if (mousePos.current.x !== -1000) {
        const momentumFactor = 1 - (momentum / 100) * 0.95
        smoothPos.current.x += (targetX - smoothPos.current.x) * momentumFactor
        smoothPos.current.y += (targetY - smoothPos.current.y) * momentumFactor

        trail.current.push({ x: smoothPos.current.x, y: smoothPos.current.y, life: 1 })
      }

      const maxLength = Math.floor((tailLength / 100) * 50) + 5
      while (trail.current.length > maxLength) {
        trail.current.shift()
      }

      const decay = 0.02 * (1 - tailLength / 100) + 0.01
      trail.current.forEach((p) => (p.life -= decay))
      trail.current = trail.current.filter((p) => p.life > 0)

      const charSize = Math.max(6, Math.floor((16 * scale) / 100))
      ctx.font = `${charSize}px monospace`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      if (blendMode === "Add") ctx.globalCompositeOperation = "lighter"
      else if (blendMode === "Screen") ctx.globalCompositeOperation = "screen"
      else if (blendMode === "Multiply") ctx.globalCompositeOperation = "multiply"
      else if (blendMode === "Difference") ctx.globalCompositeOperation = "difference"
      else ctx.globalCompositeOperation = "source-over"

      const cols = Math.ceil(canvas.width / charSize)
      const rows = Math.ceil(canvas.height / charSize)

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * charSize + charSize / 2
          const y = row * charSize + charSize / 2

          let intensity = 0
          trail.current.forEach((point) => {
            const dist = Math.sqrt(Math.pow(x - point.x, 2) + Math.pow(y - point.y, 2))
            const maxDist = (radius / 100) * 150
            if (dist < maxDist) {
              const value = (1 - dist / maxDist) * point.life * (strength / 100)
              if (drawBlendMode === "Add") intensity += value
              else if (drawBlendMode === "Multiply") intensity *= value
              else if (drawBlendMode === "Difference") intensity = Math.abs(intensity - value)
              else if (drawBlendMode === "Screen") intensity = 1 - (1 - intensity) * (1 - value)
              else intensity = Math.max(intensity, value)
            }
          })

          if (turbulence > 0 && intensity > 0) {
            const turb = Math.sin(x * 0.01 + time.current) * Math.cos(y * 0.01 + time.current * 0.7) * (turbulence / 1000)
            intensity += turb
          }

          if (gamma !== 0 && intensity > 0) {
            intensity = Math.pow(intensity, 1 - gamma)
          }

          if (glyphSet > 0 && intensity > 0) {
            const ditherAmount = 0.2
            if (glyphSet === 1) {
              const phase = (Math.sin(col * 0.5) + Math.cos(row * 0.5)) * ditherAmount
              intensity += phase
            } else if (glyphSet === 2) {
              const phase = ((col % 2) + (row % 2)) * ditherAmount - ditherAmount
              intensity += phase
            } else if (glyphSet === 3) {
              const bayer = [
                [0, 8, 2, 10],
                [12, 4, 14, 6],
                [3, 11, 1, 9],
                [15, 7, 13, 5],
              ]
              const threshold = bayer[row % 4][col % 4] / 16
              intensity = intensity > threshold ? 1 : intensity * 0.5
            } else if (glyphSet === 4) {
              const noise = Math.random() * ditherAmount - ditherAmount / 2
              intensity += noise
            }
          }

          intensity = Math.max(0, Math.min(1, intensity))

          if (intensity > 0.01) {
            const charIndex = Math.min(chars.length - 1, Math.floor(intensity * chars.length))
            const char = chars[charIndex]
            const alpha = intensity * (mix / 100)

            if (monochrome) {
              ctx.fillStyle = `rgba(${tintR}, ${tintG}, ${tintB}, ${alpha})`
            } else {
              const mixFactor = colorMix / 100
              const brightness = intensity
              const r = Math.round(255 * brightness * (1 - mixFactor) + tintR * mixFactor * brightness)
              const g = Math.round(255 * brightness * (1 - mixFactor) + tintG * mixFactor * brightness)
              const b = Math.round(255 * brightness * (1 - mixFactor) + tintB * mixFactor * brightness)
              ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`
            }
            ctx.fillText(char, x, y)
          }
        }
      }

      ctx.globalCompositeOperation = "source-over"
      frameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", updateSize)
      window.removeEventListener("mousemove", handleMouse)
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [glyphSet, scale, gamma, mix, invertOrder, monochrome, blendMode, radius, strength, turbulence, tint, colorMix, tailLength, drawBlendMode, trackMouse, momentum])

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full pointer-events-none z-[-1] ${className}`}
      style={{ display: "block" }}
    />
  )
}
