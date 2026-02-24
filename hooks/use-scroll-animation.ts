"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface AnimationOptions {
  duration?: number
  delay?: number
  ease?: string
  y?: number
  stagger?: number
  start?: string
}

export function useFadeInUp(selector: string, options?: AnimationOptions) {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!containerRef.current) return
      const elements = containerRef.current.querySelectorAll(selector)
      if (!elements.length) return

      gsap.set(elements, { autoAlpha: 0, y: options?.y ?? 30 })
      gsap.to(elements, {
        autoAlpha: 1,
        y: 0,
        duration: options?.duration ?? 0.6,
        delay: options?.delay ?? 0,
        ease: options?.ease ?? "power2.out",
        stagger: options?.stagger ?? 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: options?.start ?? "top 85%",
          once: true,
        },
      })
    },
    { scope: containerRef }
  )

  return containerRef
}

export function useStaggerIn(
  childSelector: string,
  options?: AnimationOptions
) {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!containerRef.current) return
      const children = containerRef.current.querySelectorAll(childSelector)
      if (!children.length) return

      gsap.set(children, { autoAlpha: 0, y: options?.y ?? 40 })
      gsap.to(children, {
        autoAlpha: 1,
        y: 0,
        duration: options?.duration ?? 0.5,
        ease: options?.ease ?? "power2.out",
        stagger: options?.stagger ?? 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: options?.start ?? "top 80%",
          once: true,
        },
      })
    },
    { scope: containerRef }
  )

  return containerRef
}
