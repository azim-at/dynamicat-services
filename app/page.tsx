import { Hero } from "@/components/sections/hero"
import { ServicesOverview } from "@/components/sections/services-overview"
import { ProcessSection } from "@/components/sections/process-section"
import { StatsSection } from "@/components/sections/stats-section"
import { Testimonials } from "@/components/sections/testimonials"
import { CtaSection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <ProcessSection />
      <StatsSection />
      <Testimonials />
      <CtaSection />
    </>
  )
}
