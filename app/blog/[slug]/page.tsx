import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { constructMetadata, generateBlogPostSchema, generateBreadcrumbSchema } from "@/lib/seo"
import { getPostBySlug, getAllSlugs, extractToc, slugify } from "@/lib/blog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { TableOfContents } from "@/components/sections/table-of-contents"

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return constructMetadata({
    title: post.title,
    description: post.excerpt,
    pathname: `/blog/${post.slug}`,
  })
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const tocItems = extractToc(post.content)

  return (
    <>
      <article className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Button variant="ghost" size="sm" asChild className="mb-8">
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          {/* Header */}
          <header>
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Badge>
              <span className="text-sm text-muted-foreground">
                {post.readingTime}
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight leading-[1.15] sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
            <Separator className="my-8" />
          </header>

          {/* TOC — collapsible on mobile, fixed on desktop */}
          <TableOfContents items={tocItems} />

          {/* Content */}
          <div>
            {post.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                const text = paragraph.replace("## ", "")
                return (
                  <h2
                    key={i}
                    id={slugify(text)}
                    className="text-2xl font-bold mt-8 mb-4 scroll-mt-24"
                  >
                    {text}
                  </h2>
                )
              }
              return (
                <p
                  key={i}
                  className="text-muted-foreground leading-relaxed mb-4"
                >
                  {paragraph}
                </p>
              )
            })}
          </div>

          {/* Footer CTA */}
          <div>
            <Separator className="my-12" />
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Have a project in mind? Let&apos;s talk about it.
              </p>
              <Button asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBlogPostSchema({
              title: post.title,
              description: post.excerpt,
              slug: post.slug,
              date: post.date,
              author: post.author,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Blog", path: "/blog" },
              { name: post.title, path: `/blog/${post.slug}` },
            ])
          ),
        }}
      />
    </>
  )
}
