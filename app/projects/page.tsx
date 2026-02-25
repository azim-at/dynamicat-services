import { Metadata } from "next"
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo"
import { projects } from "@/lib/projects"
import { ProjectsContent } from "./projects-content"
import { CtaSection } from "@/components/sections/cta-section"

export const metadata: Metadata = constructMetadata({
  title: "Projects",
  description:
    "Explore my portfolio — freelance websites, full-stack applications, AI-powered tools, and more. Built with modern tech stacks.",
  pathname: "/projects",
})

export default function ProjectsPage() {
  return (
    <>
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl">
              Projects
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A selection of things I&apos;ve built — from client work to
              personal experiments. Real products, real users, real impact.
            </p>
          </div>
        </div>
      </section>

      <ProjectsContent />

      <CtaSection />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Projects by Azim Talikoti",
            description:
              "Portfolio of web development projects by Azim Talikoti — full-stack applications, freelance websites, and AI-powered tools.",
            numberOfItems: projects.length,
            itemListElement: projects.map((project, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "CreativeWork",
                name: project.title,
                description: project.description,
                url: project.link || project.buttonLink || undefined,
                author: {
                  "@type": "Person",
                  name: "Azim Talikoti",
                },
              },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([{ name: "Projects", path: "/projects" }])
          ),
        }}
      />
    </>
  )
}
