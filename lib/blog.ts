export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  readingTime: string
  content: string
}

const posts: BlogPost[] = [
  {
    slug: "why-nextjs-is-the-future-of-web-development",
    title: "Why Next.js Is the Future of Web Development",
    excerpt:
      "Next.js has become the go-to framework for building modern web applications. Here's why it's reshaping how we build for the web.",
    date: "2026-02-15",
    author: "Dynamicat",
    readingTime: "5 min read",
    content: `
The web development landscape moves fast, and Next.js has positioned itself at the center of it. With server components, streaming, and edge rendering baked in, it's not just a React framework anymore — it's a platform for building the modern web.

## Server Components Change Everything

React Server Components let you render components on the server without shipping JavaScript to the client. This means faster page loads, smaller bundles, and a better experience for your users. Next.js was one of the first frameworks to embrace this paradigm, and it shows.

## The App Router

The App Router introduced in Next.js 13 brought layouts, loading states, and error boundaries as first-class citizens. Nested layouts mean you can share UI between routes without re-rendering the entire page. It's the kind of developer experience that makes complex apps feel simple.

## Performance by Default

With automatic code splitting, image optimization, font optimization, and built-in analytics, Next.js makes it hard to build a slow website. And with edge functions, you can run server-side logic closer to your users than ever before.

## Why We Use It

At Dynamicat, Next.js is our framework of choice for most projects. It gives us the flexibility to build anything from a simple marketing site to a complex SaaS application — all with the same toolchain. The developer experience is unmatched, and the performance gains speak for themselves.

## Getting Started

If you're considering Next.js for your next project, the barrier to entry is low. With excellent documentation, a massive ecosystem, and a vibrant community, there's never been a better time to dive in. Or better yet — let us handle the heavy lifting for you.
    `.trim(),
  },
  {
    slug: "choosing-the-right-tech-stack-for-your-project",
    title: "Choosing the Right Tech Stack for Your Project",
    excerpt:
      "The tech stack you choose can make or break your project. Here's how to pick the right tools without overcomplicating things.",
    date: "2026-02-01",
    author: "Dynamicat",
    readingTime: "4 min read",
    content: `
One of the most common questions we get from clients is "what technology should we use?" It's a fair question — and the answer is almost always "it depends." But here's a framework for thinking about it.

## Start With the Problem, Not the Tool

Too many projects start with a technology choice and work backwards. Instead, define what you need: a content-heavy site? Go with WordPress or a headless CMS. A dynamic web app with real-time features? React with a Node.js backend. The tool should serve the problem, not the other way around.

## Consider Your Team

If your team knows React, building with Vue just because it's trendy is a recipe for slower development and more bugs. Play to your strengths, especially in the early stages. You can always refactor later — shipping matters more.

## Don't Over-Engineer

You probably don't need microservices. You probably don't need Kubernetes. A well-architected monolith can take you incredibly far. Start simple, measure what matters, and scale when the data tells you to.

## Our Approach

At Dynamicat, we don't have a one-size-fits-all stack. We assess each project individually and recommend the tools that make the most sense for your goals, budget, and timeline. Sometimes that's Next.js and MongoDB. Sometimes that's WordPress. The right answer is the one that ships.

## The Bottom Line

Technology choices should be boring. Pick proven tools, write clean code, and focus on delivering value. The best tech stack is the one your team can execute on confidently.
    `.trim(),
  },
  {
    slug: "the-real-cost-of-a-slow-website",
    title: "The Real Cost of a Slow Website",
    excerpt:
      "A slow website doesn't just frustrate users — it costs you money. Here's what the data says and what you can do about it.",
    date: "2026-01-20",
    author: "Dynamicat",
    readingTime: "3 min read",
    content: `
Speed matters. Not in a "nice to have" way — in a "this is directly affecting your revenue" way. Let's look at the numbers.

## The Data Is Clear

Google reports that 53% of mobile users abandon sites that take longer than 3 seconds to load. Amazon found that every 100ms of latency cost them 1% in sales. Walmart saw a 2% increase in conversions for every 1 second of improvement in load time.

## SEO Impact

Google uses page speed as a ranking factor. Slow sites get pushed down in search results, which means less organic traffic, which means fewer potential customers finding you. It's a compounding problem.

## User Experience

Nobody enjoys waiting. A slow website signals to your visitors that you don't care about their time. First impressions matter, and a sluggish site makes a terrible one. Users will bounce and go to a competitor who invested in performance.

## What You Can Do

Performance optimization isn't magic — it's engineering. Image optimization, lazy loading, code splitting, CDN usage, and efficient caching strategies can dramatically improve your site speed. The key is measuring first and optimizing based on real data.

## How We Help

At Dynamicat, performance is built into our process from day one. We don't optimize at the end — we architect for speed. Every project we deliver is tested for performance across devices and network conditions. Because a beautiful site that's slow is still a failing site.
    `.trim(),
  },
]

export interface TocItem {
  id: string
  text: string
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export function extractToc(content: string): TocItem[] {
  const seen = new Map<string, number>()
  return content
    .split("\n\n")
    .filter((block) => block.startsWith("## "))
    .map((block) => {
      const text = block.replace("## ", "")
      let id = slugify(text)
      const count = seen.get(id) || 0
      if (count > 0) id = `${id}-${count}`
      seen.set(id, count + 1)
      return { id, text }
    })
}

export function getAllPosts(): BlogPost[] {
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug)
}

export function getAllSlugs(): string[] {
  return posts.map((post) => post.slug)
}
