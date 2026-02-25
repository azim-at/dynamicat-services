import { siteConfig } from "@/lib/site-config"

export function GET() {
  const baseUrl = siteConfig.url

  const body = `# Robots.txt for ${siteConfig.name}
# ${baseUrl}

# Default rules — allow everything
User-agent: *
Allow: /
Disallow: /api/

# AI Crawlers — explicitly allowed
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Bytespider
Allow: /

User-agent: CCBot
Allow: /

User-agent: cohere-ai
Allow: /

# Sitemap & feeds
Sitemap: ${baseUrl}/sitemap.xml

# AI-readable site summary
# LLMs-Txt: ${baseUrl}/llms.txt
`

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  })
}
