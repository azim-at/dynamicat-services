import Link from "next/link"
import {
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react"
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { CtaSection } from "@/components/sections/cta-section"
import { ValuesGrid } from "@/components/sections/values-grid"

export const metadata = constructMetadata({
  title: "About",
  description:
    "Meet Azim Talikoti — the full-stack developer and designer behind DynamicAT. From concept to deployment, building fast and scalable digital products.",
  pathname: "/about",
})

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl">
              About Me
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Full-stack developer &amp; UI/UX designer turning ideas into fast,
              scalable products that users love.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Hey, I&apos;m Azim Talikoti
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a full-stack developer and UI/UX designer from Belgaum,
                India. I design and build web applications from concept to
                deployment — whether it&apos;s a sleek landing page or a full-stack
                SaaS platform, I bring ideas to life with clean code and
                thoughtful design.
              </p>
              <p>
                With years of experience across React.js, Next.js, Node.js,
                NestJS, and Python, I work comfortably across the entire stack.
                On the frontend, I craft pixel-perfect interfaces with Tailwind
                CSS and modern frameworks. On the backend, I build robust APIs,
                manage databases like MongoDB and PostgreSQL, containerize apps
                with Docker, and deploy on AWS, Azure, and Oracle Cloud with
                proper CI/CD pipelines.
              </p>
              <p>
                Beyond code, I&apos;m a tech geek who loves gaming, esports,
                exploring new places, and nerding out over the cosmos. I believe
                in lifelong learning and building with purpose — one line of code
                (and several cups of chai) at a time.
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

      {/* Connect With Me */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Connect With Me
            </h2>
            <p className="mt-2 text-muted-foreground">
              Feel free to reach out — whether it&apos;s for a project, a
              collaboration, or just to say hello.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Socials
                </h3>
                <div className="space-y-3">
                  <a
                    href={siteConfig.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Github className="h-5 w-5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={siteConfig.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={siteConfig.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                    <span>Instagram</span>
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Mail className="h-5 w-5" />
                    <span>{siteConfig.email}</span>
                  </a>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Phone & WhatsApp
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="h-5 w-5 shrink-0" />
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <a
                        href={`tel:${siteConfig.phones.uae}`}
                        className="transition-colors hover:text-foreground"
                      >
                        {siteConfig.phones.uae} (UAE)
                      </a>
                      <a
                        href="https://wa.me/971509137418"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-600 transition-colors hover:bg-green-500/20 dark:text-green-400"
                      >
                        <MessageCircle className="h-3 w-3" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="h-5 w-5 shrink-0" />
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <a
                        href={`tel:${siteConfig.phones.india}`}
                        className="transition-colors hover:text-foreground"
                      >
                        {siteConfig.phones.india} (India)
                      </a>
                      <a
                        href="https://wa.me/919535983796"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-600 transition-colors hover:bg-green-500/20 dark:text-green-400"
                      >
                        <MessageCircle className="h-3 w-3" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight leading-[1.15] sm:text-4xl">
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
            name: "About Azim Talikoti — DynamicAT",
            description:
              "Meet Azim Talikoti — the full-stack developer and designer behind DynamicAT.",
            mainEntity: {
              "@type": "Organization",
              name: siteConfig.name,
              url: siteConfig.url,
              description: siteConfig.description,
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([{ name: "About", path: "/about" }])
          ),
        }}
      />
    </>
  )
}
