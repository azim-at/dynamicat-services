import { siteConfig } from "@/lib/site-config"
import { getAllPosts } from "@/lib/blog"
import { projects } from "@/lib/projects"

export function GET() {
  const baseUrl = siteConfig.url

  const services = siteConfig.services
    .map(
      (s) =>
        `### ${s.title}\n${s.description}\n\nFeatures:\n${s.features.map((f) => `- ${f}`).join("\n")}`
    )
    .join("\n\n")

  const posts = getAllPosts()
  const blogSection = posts
    .map(
      (p) =>
        `### ${p.title}\nDate: ${p.date} | Reading Time: ${p.readingTime}\n${p.excerpt}\nURL: ${baseUrl}/blog/${p.slug}`
    )
    .join("\n\n")

  const featuredProjects = projects
    .slice(0, 10)
    .map(
      (p) =>
        `### ${p.title}\n${p.description}\nTech: ${p.techs.join(", ")}${p.link ? `\nURL: ${p.link}` : ""}`
    )
    .join("\n\n")

  const faqs = siteConfig.faqs
    .map((f) => `**Q: ${f.question}**\nA: ${f.answer}`)
    .join("\n\n")

  const body = `# ${siteConfig.name} — Full Site Information

> ${siteConfig.description}

---

## About

DynamicAT is a full-stack web development agency run by Azim Talikoti, a developer and UI/UX designer from Belgaum, India. We design and build web applications from concept to deployment — whether it's a sleek landing page or a full-stack SaaS platform.

Technologies we work with: React.js, Next.js, Node.js, NestJS, Python, Tailwind CSS, MongoDB, PostgreSQL, Docker, AWS, Azure, and Oracle Cloud.

- Portfolio: ${siteConfig.portfolioUrl}
- Email: ${siteConfig.email}
- Location: ${siteConfig.location}
- GitHub: ${siteConfig.socials.github}
- LinkedIn: ${siteConfig.socials.linkedin}

---

## Services

${services}

---

## Blog Posts

${blogSection}

---

## Featured Projects

${featuredProjects}

---

## Frequently Asked Questions

${faqs}

---

## Stats

${siteConfig.stats.map((s) => `- ${s.label}: ${s.value}`).join("\n")}

---

## Key Pages

- Home: ${baseUrl}
- About: ${baseUrl}/about
- Services: ${baseUrl}/services
- Projects: ${baseUrl}/projects
- Blog: ${baseUrl}/blog
- Contact: ${baseUrl}/contact
- RSS Feed: ${baseUrl}/feed.xml
- Sitemap: ${baseUrl}/sitemap.xml
`

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  })
}
