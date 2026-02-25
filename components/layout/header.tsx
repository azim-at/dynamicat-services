"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  User,
  Briefcase,
  FolderOpen,
  BookOpen,
  Mail,
} from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"
import { Dock, DockIcon } from "@/components/ui/dock"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const navIcons = {
  Home,
  About: User,
  Services: Briefcase,
  Projects: FolderOpen,
  Blog: BookOpen,
  Contact: Mail,
} as const

export function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed bottom-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <Dock
        direction="middle"
        className="pointer-events-auto rounded-full border bg-background/80 backdrop-blur-md shadow-lg"
      >
        {siteConfig.navLinks.map((link) => {
          const Icon = navIcons[link.label as keyof typeof navIcons]
          if (!Icon) return null
          const isActive = pathname === link.href

          return (
            <DockIcon key={link.href}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative flex h-full w-full items-center justify-center rounded-full transition-colors",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <Icon className="size-5" />
                    {isActive && (
                      <span className="absolute -bottom-2.5 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-primary" />
                    )}
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="top" sideOffset={8}>
                  {link.label}
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          )
        })}
      </Dock>
    </header>
  )
}
