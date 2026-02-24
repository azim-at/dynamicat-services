import { Suspense } from "react"
import { Mail, MapPin, Phone, ExternalLink, Github, Linkedin } from "lucide-react"
import { constructMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { ContactForm } from "@/components/sections/contact-form"

export const metadata = constructMetadata({
  title: "Contact",
  description:
    "Get in touch with Dynamicat. Tell us about your project and we'll get back to you with a free consultation and custom quote.",
  pathname: "/contact",
})

export default function ContactPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Have a project in mind? Drop us a message and we&apos;ll get back to
              you within 24 hours with a free consultation.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll be in touch shortly.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Suspense>
                    <ContactForm />
                  </Suspense>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-2 space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Email</p>
                        <a
                          href={`mailto:${siteConfig.email}`}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {siteConfig.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Phone</p>
                        <a
                          href={`tel:${siteConfig.phones.india}`}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                        >
                          {siteConfig.phones.india} (India)
                        </a>
                        <a
                          href={`tel:${siteConfig.phones.uae}`}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                        >
                          {siteConfig.phones.uae} (UAE)
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary shrink-0" />
                      <div>
                        <p className="text-sm font-medium">Location</p>
                        <p className="text-sm text-muted-foreground">
                          {siteConfig.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4">Connect</h3>
                  <div className="space-y-3">
                    <a
                      href={siteConfig.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      GitHub
                    </a>
                    <a
                      href={siteConfig.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      LinkedIn
                    </a>
                    <a
                      href={siteConfig.portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                      Portfolio
                    </a>
                  </div>
                </CardContent>
              </Card>

            </aside>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Dynamicat",
            description:
              "Get in touch with Dynamicat for a free consultation and custom quote.",
            mainEntity: {
              "@type": "Organization",
              name: siteConfig.name,
              email: siteConfig.email,
              url: siteConfig.url,
            },
          }),
        }}
      />
    </>
  )
}
