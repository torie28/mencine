import { NewsletterForm } from "./newsletter-form";
import { Mail } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-32 bg-white text-primary relative overflow-hidden">
      {/* Subtle decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">
          Stay Informed & Inspired
        </h2>

        <p className="text-slate-600 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Join our exclusive network for the latest insights in sustainable
          waste management, technological breakthroughs, and industrial
          excellence across East Africa.
        </p>

        <div className="bg-slate-50 p-10 md:p-14 rounded-[2.5rem] border border-slate-200 shadow-xl">
          <h3 className="text-2xl font-semibold mb-8 text-slate-900">
            Subscribe to our newsletter
          </h3>
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
