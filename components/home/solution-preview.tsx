"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Flame, Wind, Timer, Gauge } from "lucide-react"

const specs = [
  { icon: Flame, label: "Primary Chamber", value: "875°C", description: "Rapid flash-pyrolysis" },
  { icon: Wind, label: "Afterburner", value: "1,025°C", description: "Complete oxidation" },
  { icon: Timer, label: "Residence Time", value: "2.0s", description: "Regulatory compliant" },
  { icon: Gauge, label: "Fuel Economy", value: "0.3L/cycle", description: "Ultra-low overhead" },
]

export function SolutionPreview() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Our Solution</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Advanced Thermal Destruction Technology
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            The Mencine Compact Dual-Chamber Diesel Incinerator offers high-temperature decentralized thermal destruction. 
            Within a single 30-minute automated cycle, it reduces up to 2.0 kg of solid waste into minimal, sterile, inert ash.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-muted/50 shadow-xl">
              <Image
                src="/images/incinerator-product.jpg"
                alt="Mencine Dual-Chamber Incinerator"
                fill
                className="object-cover"
              />
            </div>
            {/* Tech Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-foreground text-background rounded-full px-6 py-3 shadow-lg">
              <p className="text-sm font-semibold">Dual-Combustion Architecture</p>
            </div>
          </div>

          {/* Specs */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Engineering Excellence
            </h3>
            <p className="text-muted-foreground mb-8">
              Our technical envelope is backed by rigorous numerical modeling, including 1D thermodynamic 
              mass-flow modeling, OpenFOAM v13 Computational Fluid Dynamics (CFD), and transient Finite 
              Element Method (FEM) wall heat-loss simulations.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {specs.map((spec, index) => (
                <div
                  key={index}
                  className="bg-background rounded-xl p-5 border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <spec.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{spec.label}</p>
                      <p className="text-xl font-bold text-foreground">{spec.value}</p>
                      <p className="text-sm text-muted-foreground">{spec.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              <Link href="/products">
                View Full Specifications
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
