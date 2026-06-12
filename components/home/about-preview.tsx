"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Shield, Leaf } from "lucide-react";

export function AboutPreview() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about-hero.jpg"
                alt="African school campus"
                fill
                className="object-cover"
              />
            </div>
            {/* Accent Card */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-xl p-6 shadow-xl max-w-xs hidden md:block">
              <p className="font-display text-2xl font-bold mb-2">
                Our Mission
              </p>
              <p className="text-sm text-primary-foreground/80">
                Redefining African institutional sanitation with dignity and
                sustainability.
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              About Mencine
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Pioneering Environmental Technology in Tanzania
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Mencine Co Ltd is an award-winning Tanzanian environmental
              technology company pioneering source-level, smoke-free waste
              destruction infrastructure. We design, simulate, and manufacture
              advanced thermal elimination hardware engineered specifically to
              solve the disposal crises of high-density plastic hygiene products
              and bio-medical waste.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              By processing hazardous materials directly at the point of
              generation, Mencine eliminates downstream logistical
              vulnerabilities, mitigates landfill congestion, and creates highly
              resilient sanitation barriers.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-start gap-2">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <p className="font-semibold text-foreground text-sm">
                  Data-Verified
                </p>
                <p className="text-xs text-muted-foreground">
                  Precision calibrated systems
                </p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <p className="font-semibold text-foreground text-sm">
                  Highly Affordable
                </p>
                <p className="text-xs text-muted-foreground">
                  Accessible for institutions
                </p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-primary" />
                </div>
                <p className="font-semibold text-foreground text-sm">
                  Eco-Friendly
                </p>
                <p className="text-xs text-muted-foreground">
                  Safeguarding ecosystems
                </p>
              </div>
            </div>

            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
            >
              <Link href="/about" aria-label="Read our full story and mission">
                Read Our Full Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
