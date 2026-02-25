import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo"
import { getAllPosts } from "@/lib/blog"
import { BlogFeed } from "@/components/sections/blog-feed"

export const metadata = constructMetadata({
  title: "Blog",
  description:
    "Insights on web development, technology choices, and building digital products that perform — from the DynamicAT team.",
  pathname: "/blog",
})

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight leading-[1.15] sm:text-5xl">
              Blog
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Thoughts on building for the web, choosing the right tools, and
              shipping products that matter.
            </p>
          </div>

          <BlogFeed posts={posts} />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([{ name: "Blog", path: "/blog" }])
          ),
        }}
      />
    </>
  )
}
