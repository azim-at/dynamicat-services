"use client"

import { useRef } from "react"
import { Star } from "lucide-react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { siteConfig } from "@/lib/site-config"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

gsap.registerPlugin(ScrollTrigger)

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!sectionRef.current) return

      gsap.from("[data-testimonials-heading]", {
        autoAlpha: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "[data-testimonials-heading]",
          start: "top 85%",
          once: true,
        },
      })

      gsap.from("[data-testimonials-carousel]", {
        autoAlpha: 0,
        y: 20,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "[data-testimonials-carousel]",
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
        <div data-testimonials-heading className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight leading-[1.15] sm:text-4xl">
            What Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Feedback from people I&apos;ve worked with on freelance projects.
          </p>
        </div>

        <div data-testimonials-carousel className="relative mx-auto max-w-5xl px-12">
          <div className="quote-decoration" />
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {siteConfig.testimonials.map((testimonial, index) => {
                const initials = testimonial.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                return (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2"
                  >
                    <Card className="h-full">
                      <CardContent className="pt-6">
                        <div className="mb-4 flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-amber-500 text-amber-500"
                            />
                          ))}
                        </div>
                        <blockquote className="text-sm text-muted-foreground leading-relaxed">
                          &ldquo;{testimonial.content}&rdquo;
                        </blockquote>
                        <div className="mt-4 flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback className="text-xs font-medium">
                              {initials}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-semibold">
                              {testimonial.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {testimonial.role}, {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
