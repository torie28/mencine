"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Explicit Validation Logic
    if (!email || email.trim() === "") {
      toast.error("Validation Error", {
        description: "Please enter your email address to subscribe.",
      });
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Invalid Email", {
        description:
          "Please enter a valid email address (e.g., name@example.com).",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      toast.success("Welcome Aboard!", {
        description:
          "Successfully subscribed. Please check your inbox for a welcome email.",
      });
      setEmail("");
    } catch (error) {
      toast.error("Subscription Failed", {
        description:
          error instanceof Error
            ? error.message
            : "We couldn't process your subscription right now. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col sm:flex-row gap-3"
      >
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 h-12 text-base shadow-sm focus:border-primary focus:ring-primary/5"
          disabled={isLoading}
        />
        <Button
          type="submit"
          variant="default"
          className="h-12 px-8 font-semibold shrink-0 shadow-md hover:shadow-lg transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90"
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              Subscribe
              <Send className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </form>
      <p className="text-[11px] text-slate-400 mt-4 text-center italic">
        Join our community. We respect your privacy and never spam.
      </p>
    </div>
  );
}
