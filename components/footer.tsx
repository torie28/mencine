import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/team", label: "Our Team" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ],
  solutions: [
    { href: "/products#hygiene", label: "Hygiene Waste" },
    { href: "/products#medical", label: "Medical Waste" },
    { href: "/products#services", label: "Services" },
    { href: "/products#consulting", label: "Consulting" },
  ],
  sdgs: [
    { label: "SDG 3: Good Health" },
    { label: "SDG 4: Quality Education" },
    { label: "SDG 5: Gender Equality" },
    { label: "SDG 6: Clean Water & Sanitation" },
    { label: "SDG 13: Climate Action" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              {/*<div className="relative w-50 h-40 shrink-0">
                  <Image
                    src="/images/WIKI%20CLUB%20LOGO%20(5).png"
                    alt="Mencine logo"
                    fill
                    className="object-contain"
                  />
                </div>*/}
              <div className="flex flex-col mt-2">
                <span className="text-lg font-bold tracking-tight text-background">
                  MENCINE CO LTD
                </span>
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Award-winning Tanzanian environmental technology company
              pioneering smoke-free waste destruction infrastructure.
            </p>
            <div className="flex flex-col gap-3 text-sm text-background/70">
              <a
                href="tel:+255747105951"
                className="flex items-center gap-2 hover:text-background transition-colors"
              >
                <Phone className="w-4 h-4" />
                +255 747 105 951
              </a>
              <a
                href="mailto:mencinecoltd@gmail.com"
                className="flex items-center gap-2 hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4" />
                mencinecoltd@gmail.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Mwanza, Tanzania
              </span>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SDG Alignment */}
          {/*<div>
            <h4 className="font-semibold text-background mb-4">
              SDG Alignment
            </h4>
            <ul className="space-y-3">
              {footerLinks.sdgs.map((item) => (
                <li key={item.label} className="text-sm text-background/70">
                  {item.label}
                </li>
              ))}
            </ul>
          </div>*/}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/50">
              &copy; {new Date().getFullYear()} Mencine Co Ltd. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/mencine_co_ltd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-background/50 hover:text-background transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/tarsila-mellita-a1a316212/?originalSubdomain=tz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-background/50 hover:text-background transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-background/50">
              <Link
                href="/terms"
                className="hover:text-background transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/about"
                className="hover:text-background transition-colors"
              >
                Learn More
              </Link>
              <Link
                href="/privacy"
                className="hover:text-background transition-colors"
              >
                Privacy & Cookie Notice
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
