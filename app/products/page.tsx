import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Flame, Wind, Timer, Gauge, Ruler, Thermometer, Droplets, Box,
  ArrowRight, CheckCircle, Wrench, FileText, HeadphonesIcon
} from "lucide-react"

const specifications = [
  { 
    icon: Flame, 
    param: "Primary Chamber Operating Temperature", 
    spec: "875 °C", 
    metric: "Rapid flash-pyrolysis and immediate core volume reduction." 
  },
  { 
    icon: Wind, 
    param: "Secondary Afterburner Temperature", 
    spec: "1,025 °C", 
    metric: "Intense oxidation zone powered by a 13.63 kW burner." 
  },
  { 
    icon: Timer, 
    param: "Secondary Gas Residence Time", 
    spec: "2.005 Seconds", 
    metric: "Exceeds regulatory compliance for complete smoke/odor breakdown." 
  },
  { 
    icon: Gauge, 
    param: "Calibrated System Airflow Rate", 
    spec: "112 m³/h", 
    metric: "Blower setpoint optimized to match perfect fuel stoichiometry." 
  },
  { 
    icon: Box, 
    param: "Refractory Insulation Profile", 
    spec: "100 mm Blocks", 
    metric: "Reduces wall transient heat loss by 31% over baseline models." 
  },
  { 
    icon: Droplets, 
    param: "Fuel Economy Coefficient", 
    spec: "0.300 L / Cycle", 
    metric: "Ultra-low operating overhead (Diesel fuel matrix)." 
  },
  { 
    icon: Thermometer, 
    param: "Outer Casing Skin Temperature", 
    spec: "104.8 °C Max", 
    metric: "Thermally stable 'cool-touch' casing safe for tight urban spots." 
  },
  { 
    icon: Ruler, 
    param: "Physical Footprint & Height", 
    spec: "1.95m × 0.95m | 5.08m", 
    metric: "Compact layout paired with a 3.5m insulated SS304 stack." 
  },
]

const services = [
  {
    icon: Box,
    title: "Direct Hardware Sales",
    description: "Purchase our Compact Dual-Chamber Diesel Incinerators outright for permanent installation at your facility."
  },
  {
    icon: FileText,
    title: "Equipment Leasing",
    description: "Flexible equipment leasing models designed specifically for public institutions and budget-constrained organizations."
  },
  {
    icon: Wrench,
    title: "Maintenance Contracts (SLAs)",
    description: "Preventative maintenance service contracts ensuring optimal performance and longevity of your equipment."
  },
  {
    icon: HeadphonesIcon,
    title: "Technical Consulting",
    description: "Expert waste stream consulting to help institutions develop comprehensive waste management strategies."
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Products & Services</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Advanced Thermal Destruction Technology
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                The Mencine Compact Dual-Chamber Diesel Incinerator offers high-temperature decentralized 
                thermal destruction with unmatched efficiency and environmental compliance.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                <Link href="/contact">
                  Request a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/incinerator-product.jpg"
                  alt="Mencine Dual-Chamber Incinerator"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-20" id="hygiene">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Product Capabilities
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Within a single 30-minute automated cycle, our incinerator reduces up to 2.0 kg of solid waste 
              into minimal, sterile, inert ash.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Hygiene Waste</h3>
              <p className="text-muted-foreground mb-4">
                Commercial sanitary pads and baby diapers containing complex superabsorbent polymers and plastics.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Sanitary towels
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Baby diapers
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Incontinence products
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border" id="medical">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Medical Waste</h3>
              <p className="text-muted-foreground mb-4">
                Bio-medical waste requiring high-temperature destruction to eliminate pathogens and hazardous materials.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Infectious waste
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Pathological waste
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Pharmaceutical waste
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Smoke-Free Output</h3>
              <p className="text-muted-foreground mb-4">
                Advanced dual-combustion architecture ensures complete destruction with clean exhaust profile.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Zero visible smoke
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  No toxic emissions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Sterile inert ash output
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Engineering & Technical Innovation
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our technical envelope is backed by rigorous numerical modeling, including 1D thermodynamic 
              mass-flow modeling, OpenFOAM v13 Computational Fluid Dynamics (CFD), and transient Finite 
              Element Method (FEM) wall heat-loss simulations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {specifications.map((spec, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <spec.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">{spec.param}</p>
                    <p className="text-xl font-bold text-foreground mb-2">{spec.spec}</p>
                    <p className="text-sm text-muted-foreground">{spec.metric}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Multi-Revenue Stream Architecture
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Scaled commercial viability across multiple service offerings to meet your institution&apos;s needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Contact us today to discuss your waste management needs and receive a customized solution proposal.
          </p>
          <Button asChild size="lg" variant="secondary" className="gap-2">
            <Link href="/contact">
              Contact Our Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
