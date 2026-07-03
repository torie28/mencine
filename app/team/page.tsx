import type { Metadata } from "next";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the executive leadership team at Mencine Co Ltd driving innovation in Tanzanian environmental technology.",
};

const teamMembers = [
  {
    name: "Ms. Tarsila Faustin Mellita",
    role: "Founder & CEO",
    image: "/personel/Tarsila_Profile_JPG.jpg.jpeg",
    description:
      "Social entrepreneur, environmental advocate, and Founder & CEO of Mencine Co. LTD. With over six years of experience in climate action and a background in Economics, she drives sustainable menstrual waste management. Tarsila leads the development of eco-friendly incineration solutions, fostering gender equality and cleaner communities across East Africa.",
  },
  {
    name: "Mr. Harold Nakembetwa",
    role: "Lead Technical Expert",
    image: "/personel/halod.png",
    description:
      "Translates complex thermodynamic simulations and SolidWorks designs into physical prototypes, heading mechanical engineering efforts to ensure high-performance, durable, and environmentally clean incineration systems.",
  },
  {
    name: "Ms. Rosemary Haule",
    role: "Chief Operating Officer (COO)",
    image: "/personel/rosemarry.png",
    description:
      "Biomedical Engineer and Chief Operating Officer (COO) at Mencine Company. She directs day-to-day operations and program execution, utilizing her analytical background and structured, problem-solving approach to bridge the gap between technical development and executive business strategy.",
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Our Team
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Executive Leadership Team
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Meet the passionate professionals driving innovation in
              environmental technology and transforming waste management across
              Tanzania and East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-16">
            {teamMembers.map((member, idx) => {
              const isCenter = idx === 0 || idx === 2;
              const isLeft = idx === 1;

              // Position alignment for the row container: center members are centered, Harold is offset left
              const rowJustifyClass = isCenter 
                ? "justify-center" 
                : "justify-center md:-translate-x-24"; 

              // Flex direction: image-then-text (image on left, description on right) for everyone
              const flexDirClass = "flex-col md:flex-row";

              // Text alignment: aligned to the image (left-aligned) for everyone
              const textAlignClass = "text-center md:text-left";

              return (
                <div 
                  key={idx} 
                  className={`flex ${rowJustifyClass}`}
                >
                  <div className={`flex ${flexDirClass} items-center gap-8 max-w-3xl w-full`}>
                    {/* Spherical Image */}
                    <div className="relative w-48 h-48 rounded-full overflow-hidden flex-shrink-0 shadow-md group">
                      <Image 
                        src={member.image} 
                        alt={member.name} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {/* Plain Text Content */}
                    <div className={`flex-1 ${textAlignClass}`}>
                      <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm font-semibold text-primary mb-2">
                        {member.role}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Join Us */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Join Our Mission
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We&apos;re always looking for talented individuals who share our
            passion for environmental innovation and sustainable development in
            Africa.
          </p>
        </div>
      </section>
    </main>
  );
}
