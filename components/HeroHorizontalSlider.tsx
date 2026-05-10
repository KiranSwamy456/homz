"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AUTO_MS = 6000;

const slides = [
  {
    eyebrow: "HOMZINDIA IS",
    title: "Premium B2B Furniture",
    image: "/images/hero.png",
    alt: "Modern conference room with city views",
  },
  {
    eyebrow: "HOMZINDIA IS",
    title: "Contract-Grade Workspaces",
    image: "/images/product-table.png",
    alt: "Premium conference meeting table",
  },
  {
    eyebrow: "HOMZINDIA IS",
    title: "Seating Built for Long Days",
    image: "/images/product-chair.png",
    alt: "Executive ergonomic office chair",
  },
] as const;

export default function HeroHorizontalSlider() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const go = useCallback((dir: -1 | 1) => {
    setIndex((i) => {
      const n = slides.length;
      return (i + dir + n) % n;
    });
  }, []);

  useEffect(() => {
    const t = window.setInterval(() => go(1), AUTO_MS);
    return () => window.clearInterval(t);
  }, [go]);

  const trackPercent = 100 / slides.length;

  return (
    <section
      className="relative w-full overflow-hidden md:min-h-[90vh]"
      aria-roledescription="carousel"
      aria-label="Featured highlights"
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        const start = touchStartX.current;
        touchStartX.current = null;
        if (start == null) return;
        const end = e.changedTouches[0]?.clientX;
        if (end == null) return;
        const dx = end - start;
        if (dx < -48) go(1);
        else if (dx > 48) go(-1);
      }}
    >
      <motion.div
        className="flex touch-pan-y"
        style={{ width: `${slides.length * 100}%` }}
        animate={{ x: `${-trackPercent * index}%` }}
        transition={{ type: "spring", stiffness: 280, damping: 38 }}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.title}
            className="grid shrink-0 grid-cols-1 md:grid-cols-2 md:min-h-[90vh]"
            style={{ width: `${trackPercent}%` }}
          >
            <div className="bg-[#F5F0EB] flex flex-col justify-center pl-8 md:pl-16 pr-8 py-16 md:py-0">
              <span className="font-sans text-sm text-[#888] mb-2 uppercase tracking-wide">
                {slide.eyebrow}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-normal text-[#1A1A1A] leading-tight max-w-xl">
                {slide.title}
              </h1>
              <div className="w-full max-w-xl h-px bg-[#1A1A1A] mt-3 opacity-20" />
            </div>

            <div className="relative h-[50vh] min-h-[280px] md:h-auto md:min-h-0">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority={i === 0}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        ))}
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 md:bottom-8 flex items-center justify-center gap-3 px-4">
        <div className="pointer-events-auto flex items-center gap-2 rounded-full bg-white/80 px-2 py-2 shadow-sm backdrop-blur-sm">
          <button
            type="button"
            aria-label="Previous slide"
            className="rounded-full p-2 text-[#1A1A1A] hover:bg-black/5 cursor-pointer"
            onClick={() => go(-1)}
          >
            <ChevronLeft className="size-5" />
          </button>
          <div className="flex gap-2 px-1">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  i === index ? "w-8 bg-[#1A1A1A]" : "w-2 bg-[#1A1A1A]/25 hover:bg-[#1A1A1A]/40"
                }`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next slide"
            className="rounded-full p-2 text-[#1A1A1A] hover:bg-black/5 cursor-pointer"
            onClick={() => go(1)}
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
