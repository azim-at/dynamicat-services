"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Target,
  Lightbulb,
  MessageSquare,
  ShieldCheck,
  Zap,
  Heart,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

gsap.registerPlugin(ScrollTrigger)

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Every decision we make is guided by one question: does this deliver value? We build with purpose, not just for the sake of building.",
  },
  {
    icon: Lightbulb,
    title: "Modern Thinking",
    description:
      "We stay ahead of the curve, using the latest technologies and best practices to build solutions that won't feel outdated next year.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "No jargon, no disappearing acts. We keep you in the loop at every stage with honest updates and straightforward conversations.",
  },
  {
    icon: ShieldCheck,
    title: "Quality First",
    description:
      "We don't cut corners. Clean code, thorough testing, and attention to detail are non-negotiable in everything we deliver.",
  },
  {
    icon: Zap,
    title: "Fast Execution",
    description:
      "We respect your timeline. Our process is built for speed without sacrificing quality — because your project can't afford to wait.",
  },
  {
    icon: Heart,
    title: "Genuine Partnership",
    description:
      "We're not just vendors — we're collaborators. Your success is our success, and we're invested in the long-term outcome.",
  },
]

export function ValuesGrid() {
  const gridRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!gridRef.current) return

      gsap.from("[data-value-card]", {
        autoAlpha: 0,
        y: 40,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
          once: true,
        },
      })
    },
    { scope: gridRef }
  )

  return (
    <div ref={gridRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {values.map((value) => (
        <Card key={value.title} data-value-card>
          <CardContent className="pt-6">
            <value.icon className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold">{value.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {value.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
