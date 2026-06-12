"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products & Services" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        // If mobile menu is open, don't hide the navbar
        if (isOpen) {
          setIsVisible(true);
          return;
        }

        if (window.scrollY > lastScrollY.current && window.scrollY > 100) {
          // scrolling down
          setIsVisible(false);
        } else {
          // scrolling up
          setIsVisible(true);
        }
        lastScrollY.current = window.scrollY;
      }
    };

    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Mencine Co Ltd - Home"
          >
            <div className="relative w-14 h-14  shrink-0 group-hover:scale-105 transition-transform">
              <Image
                src="/images/MENCINE.png"
                alt="Mencine logo"
                fill
                loading="eager"
                className="object-contain scale-[1.5] -translate-y-2"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-foreground">
                MENCINE CO LTD
              </span>
              {/*<span className="text-[10px] text-muted-foreground tracking-widest uppercase">
                CO LTD
              </span>*/}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-label={`Go to ${link.label} page`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary transition-all duration-300 origin-left ${
                      isActive
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href="/contact" aria-label="Get in touch with us">
                Get in Touch
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`relative px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    aria-label={`Go to ${link.label} page`}
                  >
                    <span
                      className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 bg-primary transition-all duration-300 ${
                        isActive ? "h-3/4 opacity-100" : "h-0 opacity-0"
                      }`}
                    />
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-4 px-4">
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    aria-label="Get in touch with us"
                  >
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
