import { siteConfig } from "@/lib/site-config"

export function GET() {
  const baseUrl = siteConfig.url

  const services = siteConfig.services
    .map((s) => `- ${s.title}: ${s.shortDescription}`)
    .join("\n")

  const body = `# ${siteConfig.name}

> ${siteConfig.description}

## About

DynamicAT is a full-stack web development agency run by Azim Talikoti. We build fast, scalable, and beautifully crafted digital products — from websites and web apps to full-stack platforms with cloud infrastructure.

## Services

${services}

## Key Pages

- Home: ${baseUrl}
- About: ${baseUrl}/about
- Services: ${baseUrl}/services
- Projects: ${baseUrl}/projects
- Blog: ${baseUrl}/blog
- Contact: ${baseUrl}/contact

## Contact

- Email: ${siteConfig.email}
- Location: ${siteConfig.location}
- GitHub: ${siteConfig.socials.github}
- LinkedIn: ${siteConfig.socials.linkedin}

## More Info

For detailed information about our services, projects, blog posts, and FAQs, see the full version: ${baseUrl}/llms-full.txt
`

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  })
}
