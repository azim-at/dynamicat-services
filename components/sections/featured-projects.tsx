"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import { featuredProjects } from "@/lib/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

gsap.registerPlugin(ScrollTrigger)

const categoryColors: Record<string, string> = {
  freelance: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  personal: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  professional: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
}

export function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!sectionRef.current) return

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      })

      tl.fromTo(
        "[data-projects-heading]",
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }
      ).fromTo(
        "[data-project-item]",
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.3"
      )
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          data-projects-heading
          className="mx-auto max-w-2xl text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight leading-[1.15] sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A few highlights from my work — client sites, full-stack apps, and
            things I built because I couldn&apos;t help myself.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              data-project-item
              className="group relative overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5"
            >
              {/* Image */}
              <div className="relative aspect-16/10 overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                {/* Category */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium backdrop-blur-sm ${categoryColors[project.category]}`}
                  >
                    {project.category.charAt(0).toUpperCase() +
                      project.category.slice(1)}
                  </span>
                </div>
                {/* Link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 rounded-full bg-background/80 backdrop-blur-sm p-1.5 text-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-background"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-base mb-1.5 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.techs.slice(0, 4).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-[10px] px-2 py-0 font-normal"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.techs.length > 4 && (
                    <Badge
                      variant="secondary"
                      className="text-[10px] px-2 py-0 font-normal"
                    >
                      +{project.techs.length - 4}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/projects" className="gap-2">
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
