import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home/hero-section";
import { AboutPreview } from "@/components/home/about-preview";
import { StatsSection } from "@/components/home/stats-section";
import { SolutionPreview } from "@/components/home/solution-preview";
import { ImpactSection } from "@/components/home/impact-section";
import { CTASection } from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: "Home | MENCINE CO LTD",
  description:
    "Discover Mencine Co Ltd, pioneering smoke-free thermal waste destruction technology in Tanzania. Solving sanitation crises with innovation.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutPreview />
      <StatsSection />
      <SolutionPreview />
      <ImpactSection />
      <CTASection />
      <Footer />
    </main>
  );
}
