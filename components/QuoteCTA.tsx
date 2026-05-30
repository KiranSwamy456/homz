// Full-width teal CTA section — used at the bottom of every page

import Link from "next/link";
import { HOMZ_PHONE_NUMBER } from "@/lib/config";

interface QuoteCTAProps {
  heading?: string;
  subtext?: string;
  primaryCta?: { text: string; href: string };
  /** Defaults to a "Call Us" telephone link if not provided */
  secondaryCta?: { text: string; href: string } | "call";
}

export default function QuoteCTA({
  heading = "Ready to Build Your Custom Furniture?",
  subtext = "Share your space, design, and requirement — our team will craft a detailed quote for you.",
  primaryCta = { text: "Request a Custom Quote", href: "/contact" },
  secondaryCta = "call",
}: QuoteCTAProps) {
  return (
    <section className="bg-[#1B7E8C] py-20 md:py-28 px-8 relative overflow-hidden">
      {/* Subtle botanical decoration */}
      <svg
        className="absolute top-0 right-0 w-96 h-96 text-white opacity-[0.04] translate-x-1/3 -translate-y-1/3 pointer-events-none"
        fill="currentColor"
        viewBox="0 0 100 100"
      >
        <path d="M50 0 C60 30 80 40 100 50 C80 60 60 70 50 100 C40 70 20 60 0 50 C20 40 40 30 50 0 Z" />
      </svg>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
          {heading}
        </h2>
        <p className="font-sans text-base md:text-lg text-white/70 mt-4 mb-10 leading-relaxed">
          {subtext}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href={primaryCta.href}
            className="inline-block bg-white text-[#1B7E8C] font-sans text-[10px] font-bold tracking-widest uppercase px-8 py-4 hover:bg-[#F5F0EB] transition-colors"
          >
            {primaryCta.text}
          </Link>

          {secondaryCta === "call" ? (
            <a
              href={`tel:${HOMZ_PHONE_NUMBER.replace(/\s/g, "")}`}
              className="inline-block border border-white/60 text-white font-sans text-[10px] font-bold tracking-widest uppercase px-8 py-4 hover:bg-white/10 transition-colors"
            >
              Call Us
            </a>
          ) : secondaryCta ? (
            <Link
              href={secondaryCta.href}
              className="inline-block border border-white/60 text-white font-sans text-[10px] font-bold tracking-widest uppercase px-8 py-4 hover:bg-white/10 transition-colors"
            >
              {secondaryCta.text}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
