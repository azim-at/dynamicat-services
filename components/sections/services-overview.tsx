"use client"

import { useRef } from "react"
import Link from "next/link"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Globe,
  AppWindow,
  Layers,
  Paintbrush,
  ShoppingCart,
  Webhook,
} from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

gsap.registerPlugin(ScrollTrigger)

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  AppWindow,
  Layers,
  Paintbrush,
  ShoppingCart,
  Webhook,
}

export function ServicesOverview() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!sectionRef.current) return

      gsap.from("[data-services-heading]", {
        autoAlpha: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "[data-services-heading]",
          start: "top 85%",
          once: true,
        },
      })

      gsap.from("[data-service-card]", {
        autoAlpha: 0,
        y: 40,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "[data-service-card]",
          start: "top 85%",
          once: true,
        },
      })
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-services-heading className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight leading-[1.15] sm:text-4xl">
            What We Do
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            End-to-end development services designed to take your idea from
            concept to launch — and beyond.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <Card
                key={service.slug}
                data-service-card
                className="card-accent-border group transition-shadow hover:shadow-md"
              >
                <CardHeader>
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5">
                    {Icon && <Icon className="h-7 w-7 text-primary" />}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {service.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Learn more →
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
