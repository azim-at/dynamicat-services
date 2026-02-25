"use client"

import { useState, useRef, useCallback } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { projects, projectCategories } from "@/lib/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

const categoryColors: Record<string, string> = {
  freelance: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  personal: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  professional: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) {
  const isGithub = project.buttonText === "GitHub"

  return (
    <Card
      data-project-card
      className="group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5"
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
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium backdrop-blur-sm ${categoryColors[project.category]}`}
          >
            {project.category.charAt(0).toUpperCase() +
              project.category.slice(1)}
          </span>
        </div>
        {/* External link on hover */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 rounded-full bg-background/80 backdrop-blur-sm p-2 text-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-background"
            aria-label={`Visit ${project.title}`}
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
        {/* Number badge */}
        <div className="absolute bottom-3 right-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="text-xs font-mono text-white/70">
            #{String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      <CardContent className="flex-1 space-y-3 pt-5">
        <h3 className="font-semibold text-lg leading-tight">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Features */}
        {project.features && (
          <ul className="space-y-1">
            {project.features.slice(0, 3).map((feature) => (
              <li
                key={feature}
                className="text-xs text-muted-foreground flex items-start gap-1.5"
              >
                <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.techs.slice(0, 5).map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-[10px] px-2 py-0 font-normal"
            >
              {tech}
            </Badge>
          ))}
          {project.techs.length > 5 && (
            <Badge
              variant="secondary"
              className="text-[10px] px-2 py-0 font-normal"
            >
              +{project.techs.length - 5}
            </Badge>
          )}
        </div>
      </CardContent>

      {project.buttonLink && (
        <CardFooter className="pt-0">
          <Button variant="outline" size="sm" className="w-full" asChild>
            <a
              href={project.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              {isGithub ? (
                <Github className="h-3.5 w-3.5" />
              ) : (
                <ExternalLink className="h-3.5 w-3.5" />
              )}
              {project.buttonText}
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}

export function ProjectsContent() {
  const [activeTab, setActiveTab] = useState("all")
  const gridRef = useRef<HTMLDivElement>(null)

  const handleTabChange = useCallback((value: string) => {
    setActiveTab(value)
    requestAnimationFrame(() => {
      if (!gridRef.current) return
      const cards = gridRef.current.querySelectorAll("[data-project-card]")
      if (!cards.length) return
      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 24, scale: 0.97 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          stagger: 0.06,
          ease: "power2.out",
        }
      )
    })
  }, [])

  return (
    <section className="pb-16 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full"
        >
          <div className="flex justify-center mb-10">
            <TabsList>
              {projectCategories.map((cat) => (
                <TabsTrigger key={cat.value} value={cat.value}>
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {projectCategories.map((cat) => {
            const filtered =
              cat.value === "all"
                ? projects
                : projects.filter((p) => p.category === cat.value)
            return (
              <TabsContent key={cat.value} value={cat.value}>
                <div
                  ref={gridRef}
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {filtered.map((project, i) => (
                    <ProjectCard
                      key={project.title}
                      project={project}
                      index={
                        cat.value === "all" ? i : projects.indexOf(project)
                      }
                    />
                  ))}
                </div>
              </TabsContent>
            )
          })}
        </Tabs>
      </div>
    </section>
  )
}
