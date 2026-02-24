"use client"

import { useState, useRef, useCallback } from "react"
import Link from "next/link"
import gsap from "gsap"
import {
  Globe,
  AppWindow,
  Layers,
  FileCode,
  Cloud,
  ShieldCheck,
  CheckCircle,
} from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  AppWindow,
  Layers,
  FileCode,
  Cloud,
  ShieldCheck,
}

function ServiceCard({
  service,
}: {
  service: (typeof siteConfig.services)[number]
}) {
  const Icon = iconMap[service.icon]
  return (
    <Card id={service.slug} data-service-card className="flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            {Icon && <Icon className="h-5 w-5 text-primary" />}
          </div>
          <CardTitle className="text-xl">{service.title}</CardTitle>
        </div>
        <CardDescription className="mt-3">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <h4 className="text-sm font-medium mb-3">What&apos;s included</h4>
        <ul className="space-y-2">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/contact?service=${service.slug}`}>Get a Quote</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export function ServicesContent() {
  const [activeTab, setActiveTab] = useState("all")
  const gridRef = useRef<HTMLDivElement>(null)

  const handleTabChange = useCallback((value: string) => {
    setActiveTab(value)
    requestAnimationFrame(() => {
      if (!gridRef.current) return
      const cards = gridRef.current.querySelectorAll("[data-service-card]")
      if (!cards.length) return
      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.08, ease: "power2.out" }
      )
    })
  }, [])

  return (
    <>
      {/* Services Tabs */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                {siteConfig.serviceCategories.map((cat) => (
                  <TabsTrigger key={cat.value} value={cat.value}>
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {siteConfig.serviceCategories.map((cat) => (
              <TabsContent key={cat.value} value={cat.value}>
                <div ref={gridRef} className="grid gap-6 md:grid-cols-2">
                  {(cat.value === "all"
                    ? siteConfig.services
                    : siteConfig.services.filter(
                        (s) => s.category === cat.value
                      )
                  ).map((service) => (
                    <ServiceCard key={service.slug} service={service} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-center text-muted-foreground text-lg">
            Got questions? We&apos;ve got answers.
          </p>

          <Accordion type="single" collapsible className="mt-8">
            {siteConfig.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  )
}
