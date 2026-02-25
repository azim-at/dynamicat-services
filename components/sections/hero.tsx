"use client"

import { useRef } from "react"
import Link from "next/link"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!containerRef.current) return

      // Content entrance animation
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.from("[data-hero-badge]", {
        autoAlpha: 0,
        y: 20,
        duration: 0.6,
      })
        .from(
          "[data-hero-heading]",
          { autoAlpha: 0, y: 30, duration: 0.7 },
          "-=0.3"
        )
        .from(
          "[data-hero-sub]",
          { autoAlpha: 0, y: 20, duration: 0.6 },
          "-=0.35"
        )
        .from(
          "[data-hero-cta] > *",
          { autoAlpha: 0, y: 20, duration: 0.5, stagger: 0.12 },
          "-=0.3"
        )

      // Floating orb animations
      const orbs = containerRef.current.querySelectorAll("[data-orb]")
      orbs.forEach((orb, i) => {
        const xRange = 40 + i * 15
        const yRange = 30 + i * 10
        const duration = 6 + i * 2

        gsap.to(orb, {
          x: `random(-${xRange}, ${xRange})`,
          y: `random(-${yRange}, ${yRange})`,
          scale: `random(0.8, 1.2)`,
          duration,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          repeatRefresh: true,
        })
      })
    },
    { scope: containerRef }
  )

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-28 md:py-36 lg:py-44"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-muted via-background to-background" />
        <div className="dot-grid-bg absolute inset-0 opacity-40" />
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute inset-0 -z-5 overflow-hidden" aria-hidden="true">
        <div
          data-orb
          className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/8 blur-3xl"
        />
        <div
          data-orb
          className="absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-primary/6 blur-3xl"
        />
        <div
          data-orb
          className="absolute -bottom-16 left-1/3 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div data-hero-badge>
            <Badge variant="secondary" className="mb-6 text-sm px-4 py-1">
              Web Development &amp; Digital Solutions
            </Badge>
          </div>
          <h1
            data-hero-heading
            className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            We Build Digital Products{" "}
            <span className="gradient-text">That Actually Perform</span>
          </h1>
          <p
            data-hero-sub
            className="mt-6 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto"
          >
            From sleek websites to complex web applications — we craft digital
            experiences that look sharp, load fast, and drive real results for
            your business.
          </p>
          <div
            data-hero-cta
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <Button size="lg" asChild>
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
