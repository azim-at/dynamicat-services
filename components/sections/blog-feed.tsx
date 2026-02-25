"use client"

import { useRef } from "react"
import Link from "next/link"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type { BlogPost } from "@/lib/blog"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

gsap.registerPlugin(ScrollTrigger)

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export function BlogFeed({ posts }: { posts: BlogPost[] }) {
  const feedRef = useRef<HTMLDivElement>(null)
  const [featured, ...rest] = posts

  useGSAP(
    () => {
      if (!feedRef.current) return

      gsap.from("[data-blog-featured]", {
        autoAlpha: 0,
        y: 30,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-blog-featured]",
          start: "top 85%",
          once: true,
        },
      })

      gsap.from("[data-blog-item]", {
        autoAlpha: 0,
        y: 40,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "[data-blog-item]",
          start: "top 85%",
          once: true,
        },
      })
    },
    { scope: feedRef }
  )

  return (
    <div ref={feedRef} className="mx-auto max-w-3xl">
      {/* Featured post */}
      {featured && (
        <article data-blog-featured className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary" className="text-xs">
              {formatDate(featured.date)}
            </Badge>
            <span className="text-xs text-muted-foreground">
              {featured.readingTime}
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight leading-[1.15] sm:text-4xl">
            <Link
              href={`/blog/${featured.slug}`}
              className="hover:underline decoration-1 underline-offset-4"
            >
              {featured.title}
            </Link>
          </h2>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            {featured.excerpt}
          </p>
          <Link
            href={`/blog/${featured.slug}`}
            className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
          >
            Read article →
          </Link>
        </article>
      )}

      {rest.length > 0 && <Separator className="mb-8" />}

      {/* Remaining posts */}
      <div className="space-y-0">
        {rest.map((post, i) => (
          <article key={post.slug} data-blog-item>
            <div className="py-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs text-muted-foreground">
                  {formatDate(post.date)}
                </span>
                <span className="text-xs text-muted-foreground">·</span>
                <span className="text-xs text-muted-foreground">
                  {post.readingTime}
                </span>
              </div>
              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:underline decoration-1 underline-offset-4"
                >
                  {post.title}
                </Link>
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </div>
            {i < rest.length - 1 && <Separator />}
          </article>
        ))}
      </div>
    </div>
  )
}
