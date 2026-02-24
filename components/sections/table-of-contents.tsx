"use client"

import { useState } from "react"
import { List } from "lucide-react"
import type { TocItem } from "@/lib/blog"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible"
import { Separator } from "@/components/ui/separator"

function smoothScroll(e: React.MouseEvent, id: string) {
  e.preventDefault()
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" })
    window.history.pushState(null, "", `#${id}`)
  }
}

function MobileToc({ items }: { items: TocItem[] }) {
  const [open, setOpen] = useState(false)

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div className="rounded-lg border bg-muted/50 p-4">
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="flex w-full items-center justify-between p-0 h-auto font-semibold text-sm"
          >
            <span className="flex items-center gap-2">
              <List className="h-4 w-4" />
              Table of Contents
            </span>
            <span className="text-xs text-muted-foreground">
              {open ? "Hide" : "Show"}
            </span>
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Separator className="my-3" />
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    smoothScroll(e, item.id)
                    setOpen(false)
                  }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </CollapsibleContent>
      </div>
    </Collapsible>
  )
}

export function TableOfContents({ items }: { items: TocItem[] }) {
  if (items.length === 0) return null

  return (
    <>
      {/* Mobile/tablet: collapsible block */}
      <div className="xl:hidden mb-8">
        <MobileToc items={items} />
      </div>

      {/* Desktop: fixed sidebar */}
      <aside className="hidden xl:block fixed top-24 right-8 2xl:right-[calc((100vw-1280px)/2+1rem)] w-56 z-40">
        <nav>
          <p className="text-sm font-semibold mb-3">On this page</p>
          <ul className="space-y-2 border-l pl-4">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => smoothScroll(e, item.id)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}
