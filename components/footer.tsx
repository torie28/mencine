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
  // sdgs: [
  //   { label: "SDG 3: Good Health" },
  //   { label: "SDG 4: Quality Education" },
  //   { label: "SDG 5: Gender Equality" },
  //   { label: "SDG 6: Clean Water & Sanitation" },
  //   { label: "SDG 13: Climate Action" },
  // ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-3 mb-6"
              aria-label="Mencine Co Ltd - Home"
            >
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
                aria-label="Call us at +255 747 105 951"
              >
                <Phone className="w-4 h-4" />
                +255 747 105 951
              </a>
              <a
                href="mailto:mencinecoltd@gmail.com"
                className="flex items-center gap-2 hover:text-background transition-colors"
                aria-label="Email us at mencinecoltd@gmail.com"
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
                    aria-label={`Go to ${link.label} page`}
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
                    aria-label={`Go to ${link.label} section`}
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
                href="https://wa.me/255747105951"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-background/50 hover:text-background transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.301-.15-1.781-.878-2.057-.977-.276-.1-.476-.15-.676.15-.2.3-.772.977-.947 1.177-.175.2-.35.225-.65.075-.301-.15-1.27-.467-2.42-1.496-.895-.798-1.5-1.783-1.675-2.083-.175-.3-.018-.462.13-.61.135-.133.301-.35.451-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.63-0.926-2.232-.243-.584-.49-.505-.676-.514-.175-.009-.376-.011-.576-.011-.2 0-.525.075-.8.375-.276.3-.1.75.1 1.05.2.3.576 1.128 1.128 1.63 1.258 1.128 2.503 1.725 4.393 2.476.502.2 1.058.147 1.558-.04 1.258-.467 2.058-1.128 2.058-1.128s.1-.175.1-.3c0-.125-.1-.225-.2-.375zM12.004 2C6.48 2 2 6.48 2 12c0 2.176.702 4.192 1.9 5.825l-1.35 4.925 5.05-1.325C9.202 22.482 10.565 23 12.004 23c5.524 0 10.004-4.48 10.004-10.004C22.008 6.48 17.528 2 12.004 2z" />
                </svg>
              </a>
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
                aria-label="View Terms and Conditions"
              >
                Terms
              </Link>
              <Link
                href="/about"
                className="hover:text-background transition-colors"
                aria-label="Learn more about us"
              >
                Learn More
              </Link>
              <Link
                href="/privacy"
                className="hover:text-background transition-colors"
                aria-label="View Privacy and Cookie Notice"
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
