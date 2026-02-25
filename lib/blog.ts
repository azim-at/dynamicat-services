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
    slug: "how-to-migrate-wordpress-to-nextjs",
    title:
      "How to Migrate a WordPress Website to Next.js — A Complete Step-by-Step Guide",
    excerpt:
      "If you're running a WordPress website and want to upgrade to a modern, lightning-fast frontend with Next.js, this guide walks you through the entire process — from exporting your site to deploying on Vercel.",
    date: "2026-02-24",
    author: "DynamicAT",
    readingTime: "10 min read",
    content: `
If you're running a WordPress website and want to upgrade to a modern, lightning-fast frontend with Next.js, you're in the right place. In this guide, I'll walk you through the entire process — from exporting your WordPress site as static HTML to converting it into a fully functional Next.js application.

## Why Migrate from WordPress to Next.js?

Before diving in, let's understand why this migration makes sense:

- **Performance** — Next.js generates static or server-rendered pages that load significantly faster than WordPress
- **Security** — No PHP, no database vulnerabilities, no plugin exploits
- **Developer Experience** — React components, hot reload, TypeScript support, and modern tooling
- **Scalability** — Deploy on Vercel, Netlify, or any CDN with zero server management
- **SEO** — Built-in SSR/SSG means search engines see fully rendered HTML

## Prerequisites

Before you start, make sure you have:

- Access to your WordPress admin dashboard
- Node.js (v18+) installed on your machine
- Basic knowledge of HTML, CSS, JavaScript, and React
- A code editor (VS Code recommended)

## Step 1: Install the Simply Static Plugin on WordPress

The first step is to export your entire WordPress site as static HTML, CSS, and JavaScript files. The Simply Static plugin does this perfectly.

**How to install:**

1. Log in to your WordPress Admin Dashboard
2. Go to Plugins → Add New
3. Search for "Simply Static"
4. Click Install Now, then Activate

**Configure Simply Static:**

1. Navigate to Simply Static → Settings
2. Under Delivery Method, select "ZIP Archive" — this will bundle everything into a downloadable ZIP file
3. Under URLs, make sure the Origin URL matches your live WordPress URL
4. Click Save Changes

**Generate the static export:**

1. Go to Simply Static → Generate
2. Click "Generate Static Files"
3. Wait for the process to complete — it will crawl every page, post, image, and asset
4. Once done, download the ZIP file

**Tip:** For large sites with hundreds of pages, the export may take several minutes. Don't close the browser tab during this process.

## Step 2: Extract and Analyze the Static Files

Unzip the downloaded file. You'll see a folder structure like this:

\`\`\`
wordpress-static/
├── index.html
├── about/
│   └── index.html
├── blog/
│   ├── index.html
│   ├── post-one/
│   │   └── index.html
│   └── post-two/
│       └── index.html
├── contact/
│   └── index.html
├── wp-content/
│   ├── themes/
│   │   └── your-theme/
│   │       ├── style.css
│   │       └── assets/
│   ├── uploads/
│   │   └── 2024/
│   │       ├── image1.jpg
│   │       └── image2.png
│   └── plugins/
└── wp-includes/
    ├── css/
    └── js/
\`\`\`

**What to look for:**

- **HTML files** — These are your page templates. Each folder represents a route
- **wp-content/themes/your-theme/style.css** — Your main stylesheet
- **wp-content/uploads/** — All your media files (images, PDFs, etc.)
- **wp-includes/** — WordPress core CSS/JS (mostly not needed in Next.js)

**Clean up what you don't need:**

- Delete the \`wp-includes/\` folder — Next.js doesn't need WordPress core scripts
- Delete any plugin-specific files from \`wp-content/plugins/\` unless they contain custom CSS you want to keep
- Keep \`wp-content/uploads/\` — you'll move these images to Next.js later

## Step 3: Set Up a New Next.js Project

Open your terminal and create a fresh Next.js project:

\`\`\`bash
npx create-next-app@latest my-website
\`\`\`

When prompted, choose these options:

- Would you like to use TypeScript? → No (or Yes if you prefer)
- Would you like to use ESLint? → Yes
- Would you like to use Tailwind CSS? → Yes (recommended)
- Would you like to use \`src/\` directory? → Yes
- Would you like to use App Router? → Yes
- Would you like to customize the import alias? → No

Your project structure will look like this:

\`\`\`
my-website/
├── src/
│   └── app/
│       ├── layout.js
│       ├── page.js
│       └── globals.css
├── public/
├── package.json
└── next.config.js
\`\`\`

## Step 4: Convert HTML to JSX Components

This is the core of the migration. You'll take your WordPress HTML and convert it into React/JSX components.

**4.1 Identify Reusable Components**

Open your WordPress \`index.html\` and identify the common sections: Header, Footer, Sidebar, Hero/Banner section, and Content area.

**4.2 HTML → JSX Conversion Rules**

Here are the key differences between HTML and JSX:

- \`class\` → \`className\`
- \`for\` → \`htmlFor\`
- \`style="color: red"\` → \`style={{ color: 'red' }}\`
- \`<img src="...">\` → \`<img src="..." />\` (self-closing)
- \`onclick="..."\` → \`onClick={...}\`
- \`<!-- comment -->\` → \`{/* comment */}\`
- \`tabindex="0"\` → \`tabIndex={0}\`

**4.3 Create the Header Component**

Create \`src/components/Header.jsx\`:

\`\`\`jsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="text-2xl font-bold">
          Your Brand
        </Link>
        <ul className="flex gap-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
\`\`\`

**Key change:** WordPress uses \`<a href="...">\` for links. In Next.js, always use \`<Link href="...">\` from \`next/link\` for internal navigation — it enables client-side routing and prefetching.

**4.4 Create the Footer Component**

Create \`src/components/Footer.jsx\`:

\`\`\`jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Your Brand. All rights reserved.</p>
      </div>
    </footer>
  );
}
\`\`\`

**4.5 Set Up the Root Layout**

Update \`src/app/layout.js\` to include your Header and Footer:

\`\`\`jsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: 'Your Website',
  description: 'Your website description for SEO',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
\`\`\`

## Step 5: Migrate Your Styles

You have three options for handling WordPress CSS in Next.js:

**Option A: Use the Existing CSS (Quick)** — Copy the relevant styles from your WordPress \`style.css\` into \`src/app/globals.css\`. Remove WordPress-specific classes you don't need.

**Option B: Use Tailwind CSS (Recommended)** — Convert your CSS to Tailwind utility classes directly in your JSX.

**Option C: CSS Modules (Scoped)** — Create \`Header.module.css\` alongside your component for scoped styles.

## Step 6: Convert WordPress Pages to Next.js Routes

Next.js App Router uses folder-based routing. Each folder in \`src/app/\` becomes a URL route.

| WordPress URL | Next.js File |
|---|---|
| \`/\` (Home) | \`src/app/page.js\` |
| \`/about/\` | \`src/app/about/page.js\` |
| \`/contact/\` | \`src/app/contact/page.js\` |
| \`/blog/\` | \`src/app/blog/page.js\` |
| \`/blog/my-first-post/\` | \`src/app/blog/[slug]/page.js\` |

**SEO Tip:** The \`metadata\` export in Next.js automatically generates \`<title>\` and \`<meta name="description">\` tags — much cleaner than WordPress SEO plugins like Yoast.

## Step 7: Handle Images and Assets

Move all files from \`wp-content/uploads/\` to your Next.js \`public/images/\` folder, then update all image paths in your components.

Replace standard \`<img>\` tags with the Next.js \`<Image>\` component for automatic optimization:

\`\`\`jsx
import Image from 'next/image';

<Image
  src="/images/hero-banner.jpg"
  alt="Hero Banner"
  width={1200}
  height={600}
  priority
/>
\`\`\`

Benefits of \`next/image\`: automatic WebP/AVIF conversion, lazy loading by default, responsive srcset generation, and prevents Cumulative Layout Shift (CLS).

## Step 8: Handle Blog Posts

If your WordPress site has blog posts, you have two approaches:

**Approach A: Static Markdown Files** — Convert each blog post to a \`.md\` or \`.mdx\` file with frontmatter. Use a library like \`gray-matter\` to parse frontmatter and \`react-markdown\` to render content.

**Approach B: WordPress as Headless CMS** — Keep WordPress running as a backend API and fetch posts via the WordPress REST API. This lets content editors keep using WordPress while the frontend is Next.js.

## Step 9: Add Dynamic Features Back

WordPress plugins handle forms, search, and other dynamic features. Here's how to replace them in Next.js:

- **Contact Forms** — Use Formspree, EmailJS, or build a custom API route
- **Search** — Implement client-side search with \`useState\` and \`filter()\`, or use Algolia for advanced search
- **Comments** — Use Disqus, Giscus (GitHub-based), or build your own with a database

## Step 10: Deploy on Vercel

Vercel is the company behind Next.js and offers the best deployment experience:

1. Push your code to GitHub
2. Go to vercel.com and sign in with GitHub
3. Click "New Project" and import your repository
4. Vercel auto-detects Next.js — just click "Deploy"
5. Your site is live with a \`.vercel.app\` URL

Add your custom domain in Project Settings → Domains. SSL is automatic and free.

## Migration Checklist

Before going live, verify everything:

- All pages are converted and accessible
- Navigation links work correctly (no broken links)
- Images load properly and are optimized
- Forms and interactive features work
- SEO metadata is set for every page (title, description, OG tags)
- Set up 301 redirects for any changed URLs
- Test on mobile devices
- Run Lighthouse audit (aim for 90+ scores)
- Set up Google Search Console and submit your new sitemap
- Monitor 404 errors for the first few weeks

## Conclusion

Migrating from WordPress to Next.js might seem like a big undertaking, but by using the Simply Static plugin to export your content and systematically converting HTML to JSX, you can complete the migration smoothly. The result is a faster, more secure, and more maintainable website that you have full control over.

The key steps are: export WordPress as static HTML, set up a new Next.js project, convert HTML templates to React/JSX components, migrate styles to Tailwind CSS or CSS Modules, create Next.js routes matching your WordPress URL structure, optimize images with \`next/image\`, and deploy on Vercel.

If you have any questions about the migration process, feel free to reach out — I've helped multiple clients make this exact transition successfully.
    `.trim(),
  },
  {
    slug: "why-nextjs-is-the-future-of-web-development",
    title: "Why Next.js Is the Future of Web Development",
    excerpt:
      "Next.js has become the go-to framework for building modern web applications. Here's why it's reshaping how we build for the web.",
    date: "2026-02-15",
    author: "DynamicAT",
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

At DynamicAT, Next.js is our framework of choice for most projects. It gives us the flexibility to build anything from a simple marketing site to a complex SaaS application — all with the same toolchain. The developer experience is unmatched, and the performance gains speak for themselves.

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
    author: "DynamicAT",
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

At DynamicAT, we don't have a one-size-fits-all stack. We assess each project individually and recommend the tools that make the most sense for your goals, budget, and timeline. Sometimes that's Next.js and MongoDB. Sometimes that's WordPress. The right answer is the one that ships.

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
    author: "DynamicAT",
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

At DynamicAT, performance is built into our process from day one. We don't optimize at the end — we architect for speed. Every project we deliver is tested for performance across devices and network conditions. Because a beautiful site that's slow is still a failing site.
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
