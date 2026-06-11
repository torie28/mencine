import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Waste Management?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Join the growing network of institutions across East Africa that
              trust Mencine for clean, efficient, and dignified waste disposal
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary" className="gap-2">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="gap-2">
                <Link href="/products">View Products</Link>
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-primary-foreground/10 rounded-2xl p-8">
            <h3 className="font-semibold text-xl mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/70">Hotline</p>
                  <div className="flex flex-col">
                    <a
                      href="tel:+255747105951"
                      className="font-semibold hover:underline"
                    >
                      +255 747 105 951
                    </a>
                    <a
                      href="https://wa.me/255747105951"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium hover:underline opacity-80"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/70">Email</p>
                  <a
                    href="mailto:mencinecoltd@gmail.com"
                    className="font-semibold hover:underline"
                  >
                    mencinecoltd@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-primary-foreground/20">
              <p className="text-sm text-primary-foreground/70">
                Primary Contact
              </p>
              <p className="font-semibold">Ms. Tarsila Mellita</p>
              <p className="text-sm text-primary-foreground/70">
                Founder & CEO
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
