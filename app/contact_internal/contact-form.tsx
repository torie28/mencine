"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function ContactPage() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    // industry: "",
    // source: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // const industries = [
  //   "Healthcare / Hospital",
  //   "Education / School",
  //   "Industrial / Manufacturing",
  //   "Government / Municipality",
  //   "Non-Profit / NGO",
  //   "Other",
  // ];

  // const sources = [
  //   "Google Search",
  //   "Social Media",
  //   "Referral",
  //   "Exhibition / Event",
  //   "Other",
  // ];

  const faqs = [
    {
      question: "Do you offer installation services?",
      answer:
        "Yes, we provide full installation, commissioning, and staff training for all our incinerator solutions across East Africa.",
    },
    {
      question:
        "Are your incinerators compliant with environmental regulations?",
      answer:
        "Absolutely. Our smoke-free technology is designed to meet and exceed local and international environmental standards, including NEMC guidelines in Tanzania.",
    },
    {
      question: "What is the typical lead time for an order?",
      answer:
        "Lead times vary depending on the model and customization requirements, but generally range from 4 to 8 weeks from order confirmation.",
    },
    {
      question: "Do you provide maintenance and spare parts?",
      answer:
        "Yes, we offer comprehensive annual maintenance contracts and keep a steady stock of critical spare parts to ensure minimal downtime.",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      let recaptchaToken = null;
      if (executeRecaptcha) {
        recaptchaToken = await executeRecaptcha("contact_form");
      } else {
        console.warn("reCAPTCHA not available, submitting without token");
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formState,
          recaptchaToken,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message");
      }

      setIsSubmitted(true);
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("Contact submission error:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Contact Us
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Connect With Us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to transform your institution&apos;s waste management? Get
              in touch with our team to discuss your needs and receive a
              customized solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                      Sales & Inquiries
                    </p>
                    <a
                      href="tel:+255747105951"
                      className="text-lg font-semibold text-foreground hover:text-primary transition-colors block"
                    >
                      +255 747 105 951
                    </a>
                    <a
                      href="https://wa.me/255747105951"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary hover:underline flex items-center gap-1 mt-1"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                      Technical Support
                    </p>
                    <a
                      href="mailto:mencinecoltd@gmail.com"
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      mencinecoltd@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                      Headquarters
                    </p>
                    <p className="text-foreground font-medium">
                      Mwanza, Tanzania
                    </p>
                    <p className="text-sm text-muted-foreground">
                      East Africa Region
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                      Business Hours
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Monday - Friday: 8:00 AM - 5:00 PM
                      <br />
                      Saturday: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Section */}
              <div className="mt-12 pt-12 border-t border-border">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">
                  Trusted by Institutions
                </p>
                <div className="grid grid-cols-2 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                  {/* Placeholder for partner logos */}
                  <div className="h-12 bg-muted rounded flex items-center justify-center text-[10px] font-bold">
                    HEALTHCARE
                  </div>
                  <div className="h-12 bg-muted rounded flex items-center justify-center text-[10px] font-bold">
                    GOVERNMENT
                  </div>
                  <div className="h-12 bg-muted rounded flex items-center justify-center text-[10px] font-bold">
                    EDUCATION
                  </div>
                  <div className="h-12 bg-muted rounded flex items-center justify-center text-[10px] font-bold">
                    INDUSTRIAL
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we&apos;ll get back to you within
                  24-48 hours.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. We&apos;ll be in touch soon.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          required
                          value={formState.name}
                          onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                          }
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              email: e.target.value,
                            })
                          }
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="organization"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Organization
                        </label>
                        <Input
                          id="organization"
                          value={formState.organization}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              organization: e.target.value,
                            })
                          }
                          placeholder="School, Hospital, Company..."
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formState.phone}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              phone: e.target.value,
                            })
                          }
                          placeholder="+255 xxx xxx xxx"
                        />
                      </div>
                    </div>

                    {/*<div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="industry"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Industry *
                        </label>
                        <select
                          id="industry"
                          required
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          value={formState.industry}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              industry: e.target.value,
                            })
                          }
                        >
                          <option value="">Select an Industry</option>
                          {industries.map((ind) => (
                            <option key={ind} value={ind}>
                              {ind}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="source"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          How did you hear about us?
                        </label>
                        <select
                          id="source"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          value={formState.source}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              source: e.target.value,
                            })
                          }
                        >
                          <option value="">Select an Option</option>
                          {sources.map((src) => (
                            <option key={src} value={src}>
                              {src}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>*/}

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        required
                        value={formState.subject}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            subject: e.target.value,
                          })
                        }
                        placeholder="How can we help?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        required
                        rows={6}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            message: e.target.value,
                          })
                        }
                        placeholder="Tell us about your waste management needs..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find quick answers to common inquiries about our solutions.
            </p>
          </div>
          <div className="grid gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border"
              >
                <h3 className="font-semibold text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-card border border-border rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6 w-fit">
                  <MapPin className="w-3 h-3" />
                  Regional Presence
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                  Visit Our Offices
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our headquarters are located in the vibrant city of Mwanza,
                  positioned to serve all of Tanzania and neighboring East
                  African countries efficiently.
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-xl border border-border/50">
                    <p className="font-semibold text-foreground">Main Office</p>
                    <p className="text-sm text-muted-foreground">
                      Mwanza, Tanzania
                    </p>
                  </div>
                  <Button variant="outline" className="w-fit gap-2">
                    Open in Google Maps
                  </Button>
                </div>
              </div>
              <div className="aspect-[4/3] lg:aspect-auto bg-muted relative min-h-[400px]">
                {/* Real Google Map Embed would go here. Using a stylized placeholder for now. */}
                <iframe
                  title="Mwanza Map"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127568.2741513222!2d32.85196323604323!3d-2.5246733276856526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c48833989e2483%3A0x633190b9b3c58257!2sMwanza!5e0!3m2!1sen!2stz!4v1717320000000!5m2!1sen!2stz"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
