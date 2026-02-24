import { Metadata } from "next"
import { constructMetadata, generateServiceSchema } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"
import { ServicesContent } from "./services-content"
import { CtaSection } from "@/components/sections/cta-section"

export const metadata: Metadata = constructMetadata({
  title: "Services",
  description:
    "From website development to cloud infrastructure — explore the full range of development services we offer at Dynamicat.",
  pathname: "/services",
})

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to go from idea to launch — and keep growing
              after. No fluff, just solid execution.
            </p>
          </div>
        </div>
      </section>

      <ServicesContent />

      <CtaSection />

      {/* JSON-LD for each service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            siteConfig.services.map((service) =>
              generateServiceSchema({
                title: service.title,
                description: service.description,
              })
            )
          ),
        }}
      />
    </>
  )
}
