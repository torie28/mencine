import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Target, Leaf, Heart, Shield, Award, CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">About Us</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Pioneering Environmental Technology in Tanzania
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Mencine Co Ltd is an award-winning Tanzanian environmental technology company pioneering 
              source-level, smoke-free waste destruction infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/manufacturing.jpg"
                  alt="Mencine manufacturing facility"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary rounded-xl p-6 text-primary-foreground shadow-xl hidden md:block">
                <p className="text-3xl font-bold">2023</p>
                <p className="text-sm text-primary-foreground/80">Malkia wa Nguvu Winner</p>
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">Corporate Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We design, simulate, and manufacture advanced thermal elimination hardware engineered 
                specifically to solve the disposal crises of high-density plastic hygiene products 
                (such as commercial sanitary pads and baby diapers) and bio-medical waste.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                By processing hazardous materials directly at the point of generation, Mencine eliminates 
                downstream logistical vulnerabilities, mitigates landfill congestion, and creates highly 
                resilient sanitation barriers.
              </p>
              <div className="bg-secondary/50 rounded-xl p-6 border-l-4 border-primary">
                <p className="font-semibold text-foreground mb-2">Entity Status</p>
                <p className="text-muted-foreground">Corporate Registered (BRELA, Tanzania)</p>
                <p className="text-muted-foreground">Focus: Eco-Friendly Hygiene & Medical Waste Management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Our Core Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To redefine African institutional sanitation by providing data-verified, highly affordable, 
              and thermally optimized systems that uphold human dignity while safeguarding localized ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* The Challenge & Solution */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Challenge & The Solution
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Problem */}
            <div className="bg-destructive/5 rounded-2xl p-8 border border-destructive/20">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center">
                  <span className="text-destructive font-bold">!</span>
                </span>
                The Problem Space
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Commercial hygiene items contain complex superabsorbent polymers and plastics requiring 
                  <strong className="text-foreground"> 500 to 800 years</strong> to decompose.
                </p>
                <p>
                  Institutional backyards frequently resort to unlined dump pits or crude open-air smoldering.
                </p>
                <p>
                  This results in severe underground microplastic leaching, toxic atmospheric emissions 
                  (dioxins/furans), and a structural lack of privacy that triggers widespread 
                  <strong className="text-foreground"> school absenteeism among young girls</strong>.
                </p>
              </div>
            </div>

            {/* Solution */}
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </span>
                The Mencine Solution
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The Mencine Compact Dual-Chamber Diesel Incinerator offers high-temperature decentralized 
                  thermal destruction.
                </p>
                <p>
                  Within a single <strong className="text-foreground">30-minute automated cycle</strong>, 
                  it reduces up to 2.0 kg of solid waste into minimal, sterile, inert ash.
                </p>
                <p>
                  Our advanced dual-combustion architecture ensures complete destruction of all complex 
                  hydrocarbons and pathogens, providing a <strong className="text-foreground">clean, 
                  smoke-free exhaust profile</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and commitment to African communities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-2xl p-6 border border-border text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Human Dignity</h3>
              <p className="text-sm text-muted-foreground">Upholding dignity through proper sanitation infrastructure</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Sustainability</h3>
              <p className="text-sm text-muted-foreground">Safeguarding localized ecosystems for future generations</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Affordability</h3>
              <p className="text-sm text-muted-foreground">Making advanced technology accessible to all institutions</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Excellence</h3>
              <p className="text-sm text-muted-foreground">Data-verified, precision-engineered solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              SDG Alignment
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Unlocking sustainable development goals across Sub-Saharan Africa.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { num: 3, title: "Good Health & Well-being" },
              { num: 4, title: "Quality Education" },
              { num: 5, title: "Gender Equality" },
              { num: 6, title: "Clean Water & Sanitation" },
              { num: 13, title: "Climate Action" },
            ].map((sdg) => (
              <div key={sdg.num} className="bg-primary/5 rounded-xl p-6 text-center border border-primary/20">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-foreground font-bold">{sdg.num}</span>
                </div>
                <p className="text-sm font-semibold text-foreground">{sdg.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
