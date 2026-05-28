import type { Metadata } from 'next'
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the executive leadership team at Mencine Co Ltd driving innovation in Tanzanian environmental technology.',
}

const teamMembers = [
  {
    name: "Ms. Tarsila Mellita",
    role: "Founder, CEO & Business Developer",
    image: "/images/team-tarsila.jpg",
    description: "Directs commercial growth, ecosystem partnerships, and institutional strategic alignment.",
  },
  {
    name: "Mr. Donald Dominic",
    role: "Lead Mechanical Expert",
    image: "/images/team-donald.jpg",
    description: "Translates thermodynamic simulations and SolidWorks designs into physical prototypes.",
  },
  {
    name: "Mr. Robert Chacha",
    role: "Electrical Expert",
    image: "/images/team-robert.jpg",
    description: "Engineers smart automation systems, safety interlocks, and digital blower controls.",
  },
  {
    name: "Ms. Noela Ngowi",
    role: "Operations Manager",
    image: "/images/team-noela.jpg",
    description: "Manages internal workflow coordination, project delivery timelines, and logistics.",
  },
  {
    name: "Ms. Francine Gasper",
    role: "Safety & Sustainability Specialist",
    image: "/images/team-francine.jpg",
    description: "Ensures regulatory emission alignment and quantified environmental health targets.",
  },
  {
    name: "Mr. Wilson Mabala",
    role: "Project Corporate Advisor",
    image: "/images/team-wilson.jpg",
    description: "Provides guidance on industrial corporate governance and scalable business execution.",
  },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Our Team</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Executive Leadership Team
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Meet the passionate professionals driving innovation in environmental technology and 
              transforming waste management across Tanzania and East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all group"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Social Links */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-10 h-10 bg-background/90 rounded-lg flex items-center justify-center hover:bg-background transition-colors">
                      <Linkedin className="w-4 h-4 text-foreground" />
                    </button>
                    <button className="w-10 h-10 bg-background/90 rounded-lg flex items-center justify-center hover:bg-background transition-colors">
                      <Mail className="w-4 h-4 text-foreground" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Join Our Mission
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for talented individuals who share our passion for environmental 
            innovation and sustainable development in Africa.
          </p>
          <a 
            href="mailto:mencinecoltd@gmail.com?subject=Career%20Inquiry"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}