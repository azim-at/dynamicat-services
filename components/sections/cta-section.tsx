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

      gsap.from("[data-cta-badge]", {
        autoAlpha: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      })

      gsap.from("[data-cta-heading]", {
        autoAlpha: 0,
        y: 30,
        duration: 0.6,
        delay: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      })

      gsap.from("[data-cta-text]", {
        autoAlpha: 0,
        y: 20,
        duration: 0.5,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      })

      gsap.from("[data-cta-buttons] > *", {
        autoAlpha: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.12,
        delay: 0.35,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      })

      gsap.from("[data-cta-footer]", {
        autoAlpha: 0,
        duration: 0.5,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      })
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-foreground text-background overflow-hidden"
    >
      {/* Subtle blue glow shapes */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* Badge */}
          <div
            data-cta-badge
            className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-4 py-1.5 text-sm font-medium mb-6"
          >
            <Sparkles className="h-4 w-4" />
            Free Consultation
          </div>

          <h2
            data-cta-heading
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Let&apos;s Build Something{" "}
            <span className="underline decoration-primary decoration-2 underline-offset-4">
              Remarkable
            </span>
          </h2>
          <p
            data-cta-text
            className="mt-5 text-lg opacity-90 leading-relaxed"
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
              <Link href="/contact" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <MessageSquare className="h-4 w-4" />
                Start a Conversation
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background/30 text-background hover:bg-white/5 hover:border-background/50 hover:text-background"
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
            className="mt-8 text-sm opacity-60"
          >
            No commitment required · Response within 24 hours ·{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="underline underline-offset-2 hover:opacity-100 transition-opacity"
            >
              {siteConfig.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
