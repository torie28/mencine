"use client"

import Image from "next/image"
import { AlertTriangle, CheckCircle, School, Building2, Factory } from "lucide-react"

export function ImpactSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Problem & Solution */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Problem */}
          <div className="bg-destructive/5 rounded-2xl p-8 border border-destructive/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">The Problem</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Commercial hygiene items contain complex superabsorbent polymers and plastics requiring 
                  <span className="font-semibold text-foreground"> 500 to 800 years</span> to decompose.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Institutional backyards frequently resort to unlined dump pits or crude open-air smoldering.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  This results in severe underground microplastic leaching, toxic atmospheric emissions 
                  (dioxins/furans), and widespread <span className="font-semibold text-foreground">school absenteeism among young girls</span>.
                </p>
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">The Mencine Solution</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  High-temperature decentralized thermal destruction within a single 
                  <span className="font-semibold text-foreground"> 30-minute automated cycle</span>.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Reduces up to 2.0 kg of solid waste into minimal, sterile, inert ash.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Advanced dual-combustion architecture ensures <span className="font-semibold text-foreground">complete destruction</span> of 
                  all complex hydrocarbons and pathogens, providing a clean, smoke-free exhaust profile.
                </p>
              </li>
            </ul>
          </div>
        </div>

        
        {/* Impact Image */}
        <div className="relative rounded-2xl overflow-hidden mb-16">
          <div className="aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] relative">
            <Image
              src="/images/impact.jpg"
              alt="Young African schoolgirls benefiting from improved sanitation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/40 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-xl px-4 sm:px-8 md:px-12">
                <p className="text-xs sm:text-sm font-semibold text-primary-foreground/80 uppercase tracking-wider mb-1 sm:mb-2">Our Impact</p>
                <h3 className="font-display text-lg sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-2 sm:mb-4">
                  Upholding Human Dignity
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-primary-foreground/80">
                  Product-market sweeps validated user patterns, safety comfort, and psychological impact 
                  with more than 2,000 young women in Mwanza regional secondary schools.
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* Target Markets */}
        <div className="text-center mb-12">
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">Target Markets</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our solutions serve institutions across East Africa with scalable waste management infrastructure.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-card rounded-2xl p-8 border border-border text-center hover:border-primary/30 hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <School className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground text-lg mb-2">Educational Institutions</h4>
            <p className="text-sm text-muted-foreground">Secondary schools, universities, and boarding facilities</p>
          </div>
          <div className="bg-card rounded-2xl p-8 border border-border text-center hover:border-primary/30 hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground text-lg mb-2">Healthcare Facilities</h4>
            <p className="text-sm text-muted-foreground">Hospitals, clinics, and medical centers</p>
          </div>
          <div className="bg-card rounded-2xl p-8 border border-border text-center hover:border-primary/30 hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Factory className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground text-lg mb-2">Industrial Facilities</h4>
            <p className="text-sm text-muted-foreground">Factories, manufacturing plants, and corporate campuses</p>
          </div>
        </div>
      </div>
    </section>
  )
}
