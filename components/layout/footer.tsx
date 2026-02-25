import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold">
              DynamicAT
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              {siteConfig.description}
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Portfolio"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <nav className="mt-3 flex flex-col gap-2">
              {siteConfig.navLinks
                .filter((link) => !link.external)
                .map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold">Services</h4>
            <nav className="mt-3 flex flex-col gap-2">
              {siteConfig.services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services#${service.slug}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {service.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold">Contact</h4>
            <address className="mt-3 flex flex-col gap-2 not-italic">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phones.india}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {siteConfig.phones.india} (India)
              </a>
              <a
                href={`tel:${siteConfig.phones.uae}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {siteConfig.phones.uae} (UAE)
              </a>
              <p className="text-sm text-muted-foreground">
                {siteConfig.location}
              </p>
            </address>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
