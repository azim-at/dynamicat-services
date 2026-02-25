"use client"

import { useRef } from "react"
import Link from "next/link"
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { siteConfig } from "@/lib/site-config"
import { Button } from "@/components/ui/button"

gsap.registerPlugin(ScrollTrigger)

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!sectionRef.current) return

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      })

      tl.fromTo(
        "[data-cta-badge]",
        { autoAlpha: 0, y: 20, scale: 0.95 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, ease: "power2.out" }
      )
        .fromTo(
          "[data-cta-heading]",
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          "[data-cta-text]",
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          "[data-cta-buttons] > *",
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.12,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .fromTo(
          "[data-cta-footer]",
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.5, ease: "power2.out" },
          "-=0.2"
        )
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-36 overflow-hidden"
    >
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-neutral-950 via-neutral-900 to-neutral-950" />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Glow accents */}
      <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-primary/15 blur-[120px]" />
      <div className="absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />

      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* Badge */}
          <div
            data-cta-badge
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/80 mb-8 backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Free Consultation
          </div>

          <h2
            data-cta-heading
            className="text-4xl font-bold tracking-tight leading-[1.15] text-white sm:text-5xl lg:text-6xl"
          >
            Let&apos;s Build Something{" "}
            <span className="bg-linear-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
              Remarkable
            </span>
          </h2>
          <p
            data-cta-text
            className="mt-6 text-lg text-white/60 leading-relaxed max-w-xl mx-auto"
          >
            Got an idea? A problem that needs solving? We&apos;ll turn it into a
            digital product that actually works. No fluff, no bloated
            timelines — just results.
          </p>

          <div
            data-cta-buttons
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <Button size="lg" asChild>
              <Link
                href="/contact"
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
              >
                <MessageSquare className="h-4 w-4" />
                Start a Conversation
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/15 text-white hover:bg-white/5 hover:border-white/25 hover:text-white"
              asChild
            >
              <Link href="/services" className="gap-2">
                See What We Do
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Trust line */}
          <p
            data-cta-footer
            className="mt-10 text-sm text-white/40"
          >
            No commitment required · Response within 24 hours ·{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-white/50 underline underline-offset-2 hover:text-white/80 transition-colors"
            >
              {siteConfig.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
