"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface AnimatedCounterProps {
  value: string
  className?: string
}

function parseStatValue(value: string): { target: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/)
  if (!match) return { target: 0, suffix: "" }
  return { target: parseInt(match[1], 10), suffix: match[2] }
}

export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const { target, suffix } = parseStatValue(value)

  useGSAP(
    () => {
      if (!ref.current) return
      const obj = { val: 0 }

      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          once: true,
        },
        onUpdate() {
          if (ref.current) {
            ref.current.textContent = `${Math.round(obj.val)}${suffix}`
          }
        },
      })
    },
    { scope: ref }
  )

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  )
}
