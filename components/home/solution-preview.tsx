"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame, Wind, Timer, Gauge } from "lucide-react";

const specs = [
  {
    icon: Flame,
    label: "Primary Chamber",
    value: "875°C",
    description: "Rapid flash-pyrolysis",
  },
  {
    icon: Wind,
    label: "Afterburner",
    value: "1,025°C",
    description: "Complete oxidation",
  },
  {
    icon: Timer,
    label: "Residence Time",
    value: "2.0s",
    description: "Regulatory compliant",
  },
  {
    icon: Gauge,
    label: "Fuel Economy",
    value: "0.3L/cycle",
    description: "Ultra-low overhead",
  },
];

const images = [
  {
    src: "/images/LWI-A10 (1).webp",
    alt: "Mencine Dual-Chamber Incinerator",
  },
  {
    src: "/images/I8-140-agricultural-incinerator.webp",
    alt: "I8-140 Agricultural Incinerator",
  },
  {
    src: "/images/i8-M100-incinerator.webp",
    alt: "i8-M100 Medical Incinerator",
  },
  {
    src: "/images/I8-55A-1-ANI.webp",
    alt: "Industrial Garbage Incinerator",
  },
  {
    src: "/images/i8-250G-general-waste-incinerator.webp",
    alt: "General Waste Incinerator",
  },
];

export function SolutionPreview() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Our Solution
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Advanced Thermal Destruction Technology
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            The Mencine Compact Dual-Chamber Diesel Incinerator offers
            high-temperature decentralized thermal destruction. Within a single
            30-minute automated cycle, it reduces up to 2.0 kg of solid waste
            into minimal, sterile, inert ash.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Product Image Slideshow */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-muted to-muted/30 shadow-2xl border border-border/50">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentImage ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain p-4 md:p-8 drop-shadow-2xl"
                    priority={index === 0}
                  />
                </div>
              ))}
              {/* Bottom shade overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              {/* Top/Side inner shadow effect */}
              <div className="absolute inset-0 shadow-[inset_0_2px_20px_rgba(0,0,0,0.05)] pointer-events-none" />
            </div>
            {/* Tech Badge */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-foreground text-background rounded-2xl px-8 py-4 shadow-xl z-10 whitespace-nowrap border border-background/10">
              <p className="text-sm md:text-base font-bold tracking-tight">
                Dual-Combustion Architecture
              </p>
            </div>
            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentImage
                      ? "bg-white w-8"
                      : "bg-white/40 hover:bg-white/60 w-3"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Specs */}
          <div className="lg:col-span-5">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              Engineering Excellence
            </h3>
            <p className="text-muted-foreground mb-8">
              Our technical envelope is backed by rigorous numerical modeling,
              including 1D thermodynamic mass-flow modeling, OpenFOAM v13
              Computational Fluid Dynamics (CFD), and transient Finite Element
              Method (FEM) wall heat-loss simulations.
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
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        {spec.label}
                      </p>
                      <p className="text-xl font-bold text-foreground">
                        {spec.value}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {spec.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
            >
              <Link
                href="/products"
                aria-label="View full technical specifications of our incinerators"
              >
                View Full Specifications
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
