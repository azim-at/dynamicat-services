import { siteConfig } from "./site-config"
import type { Metadata } from "next"

export function constructMetadata({
  title,
  description,
  image,
  pathname,
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  pathname?: string
  noIndex?: boolean
} = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — Web Development & Digital Solutions`
  const desc = description || siteConfig.description
  const ogImg = image || siteConfig.ogImage
  const url = `${siteConfig.url}${pathname || ""}`

  return {
    title: fullTitle,
    description: desc,
    keywords: [
      "web development",
      "web application",
      "website development",
      "WordPress development",
      "cloud services",
      "DevOps",
      "Next.js",
      "React",
      "full-stack development",
      "DynamicAT",
    ],
    authors: [{ name: siteConfig.creator }],
    creator: siteConfig.creator,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
      types: {
        "application/rss+xml": `${siteConfig.url}/feed.xml`,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title: fullTitle,
      description: desc,
      siteName: siteConfig.name,
      images: [{ url: ogImg, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [ogImg],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  }
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.email,
      contactType: "customer service",
    },
    sameAs: Object.values(siteConfig.socials),
  }
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }
}

export function generateServiceSchema(service: {
  title: string
  description: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  }
}

export function generateBlogPostSchema(post: {
  title: string
  description: string
  slug: string
  date: string
  author: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `${siteConfig.url}/blog/${post.slug}`,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  }
}

export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function generateBreadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${siteConfig.url}${item.path}`,
      })),
    ],
  }
}

export function generateSiteNavSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: siteConfig.navLinks.map((link) => link.label),
    url: siteConfig.navLinks.map(
      (link) => `${siteConfig.url}${link.href === "/" ? "" : link.href}`
    ),
  }
}
