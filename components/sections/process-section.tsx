"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Search,
  Palette,
  Code,
  Rocket,
  Headphones,
} from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

gsap.registerPlugin(ScrollTrigger)

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  Palette,
  Code,
  Rocket,
  Headphones,
}

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!sectionRef.current) return

      gsap.from("[data-process-heading]", {
        autoAlpha: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "[data-process-heading]",
          start: "top 85%",
          once: true,
        },
      })

      gsap.from("[data-process-step]", {
        autoAlpha: 0,
        y: 40,
        duration: 0.5,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "[data-process-step]",
          start: "top 85%",
          once: true,
        },
      })

      gsap.from("[data-process-icon]", {
        scale: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: "[data-process-step]",
          start: "top 80%",
          once: true,
        },
      })
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-process-heading className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How We Work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A proven process that keeps things clear, on track, and stress-free
            from start to finish.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
          {siteConfig.process.map((step) => {
            const Icon = iconMap[step.icon]
            return (
              <Card
                key={step.step}
                data-process-step
                className="process-connector relative text-center"
              >
                <CardContent className="pt-6">
                  <Badge
                    variant="outline"
                    className="mb-4 text-xs font-mono bg-gradient-to-r from-primary/10 to-primary/5"
                  >
                    Step {step.step}
                  </Badge>
                  <div
                    data-process-icon
                    className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5"
                  >
                    {Icon && <Icon className="h-6 w-6 text-primary" />}
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
