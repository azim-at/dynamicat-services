import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { constructMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { CtaSection } from "@/components/sections/cta-section"
import { ValuesGrid } from "@/components/sections/values-grid"

export const metadata = constructMetadata({
  title: "About",
  description:
    "Learn about Dynamicat — who we are, how we work, and why businesses trust us to build their digital products.",
  pathname: "/about",
})

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About Dynamicat
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We&apos;re a development studio obsessed with building digital products
              that work as good as they look.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Our Story
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Dynamicat started with a simple belief: businesses deserve
                digital products that actually work — not just look pretty in a
                mockup. Too many projects end up over-budget, behind schedule,
                and underwhelming. We set out to change that.
              </p>
              <p>
                We&apos;ve spent years refining our craft across the full stack — from
                pixel-perfect frontends to rock-solid backends and scalable
                cloud infrastructure. Every project we take on gets the same
                level of care, whether it&apos;s a landing page or a complex SaaS
                platform.
              </p>
              <p>
                Today, we work with startups, growing businesses, and
                established companies who need a reliable development partner
                that can execute at a high level without the overhead of a
                massive agency.
              </p>
            </div>
            <div className="mt-8">
              <Button variant="outline" asChild>
                <a
                  href={siteConfig.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  View My Portfolio
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              How We Approach Every Project
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              These aren&apos;t just values on a page — they&apos;re how we actually work.
            </p>
          </div>

          <ValuesGrid />
        </div>
      </section>

      <CtaSection />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Dynamicat",
            description:
              "Learn about Dynamicat — who we are, how we work, and why businesses trust us.",
            mainEntity: {
              "@type": "Organization",
              name: siteConfig.name,
              url: siteConfig.url,
              description: siteConfig.description,
            },
          }),
        }}
      />
    </>
  )
}
