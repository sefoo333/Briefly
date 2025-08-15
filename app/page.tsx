import { HeroSection } from "@/components/hero-section"
import { CompactFeatures } from "@/components/compact-features"
import { QuickCTA } from "@/components/quick-cta"

export default function LandingPage() {
  return (
    <div className="h-screen bg-background relative overflow-hidden flex flex-col">
      <div className="flex-1 flex flex-col max-w-[1320px] mx-auto w-full px-6">
        {/* Hero takes up top portion */}
        <div className="flex-1 flex items-center">
          <HeroSection />
        </div>

        {/* Compact features in middle */}
        <div className="py-8 hidden md:block">
          <CompactFeatures />
        </div>

        {/* CTA at bottom */}
        <div className="pb-8 hidden md:block">
          <QuickCTA />
        </div>
      </div>
    </div>
  )
}
