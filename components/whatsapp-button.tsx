"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    // Show by default on mobile or after a short delay
    const timer = setTimeout(() => setIsVisible(true), 2000);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      clearTimeout(timer);
    };
  }, []);

  const whatsappUrl = "https://wa.me/255747105951";

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-24 right-6 z-50 flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:scale-110 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Contact us on WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.301-.15-1.781-.878-2.057-.977-.276-.1-.476-.15-.676.15-.2.3-.772.977-.947 1.177-.175.2-.35.225-.65.075-.301-.15-1.27-.467-2.42-1.496-.895-.798-1.5-1.783-1.675-2.083-.175-.3-.018-.462.13-.61.135-.133.301-.35.451-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.63-0.926-2.232-.243-.584-.49-.505-.676-.514-.175-.009-.376-.011-.576-.011-.2 0-.525.075-.8.375-.276.3-.1.75.1 1.05.2.3.576 1.128 1.128 1.63 1.258 1.128 2.503 1.725 4.393 2.476.502.2 1.058.147 1.558-.04 1.258-.467 2.058-1.128 2.058-1.128s.1-.175.1-.3c0-.125-.1-.225-.2-.375zM12.004 2C6.48 2 2 6.48 2 12c0 2.176.702 4.192 1.9 5.825l-1.35 4.925 5.05-1.325C9.202 22.482 10.565 23 12.004 23c5.524 0 10.004-4.48 10.004-10.004C22.008 6.48 17.528 2 12.004 2z" />
      </svg>
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white/20"></span>
      </span>
    </Link>
  );
}
