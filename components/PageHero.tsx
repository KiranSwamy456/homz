// Reusable split-layout hero for interior pages.
// Matches the existing HeroSplit pattern: cream left panel + full-bleed right image.

import Image from "next/image";
import Link from "next/link";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  cta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  image: string;
  imageAlt: string;
  /** Set true to place the image on the LEFT and text on RIGHT */
  imageLeft?: boolean;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  cta,
  secondaryCta,
  image,
  imageAlt,
  imageLeft = false,
}: PageHeroProps) {
  const textPanel = (
    <div
      className={`bg-[#F5F0EB] flex flex-col justify-center px-8 md:px-16 py-16 md:py-0 ${
        imageLeft ? "order-2" : "order-2 md:order-1"
      }`}
    >
      <span className="font-sans text-[10px] text-[#888] uppercase tracking-widest mb-4 block">
        {eyebrow}
      </span>
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-[#1A1A1A] leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="font-sans text-base md:text-lg text-[#666] leading-relaxed max-w-lg mt-6">
          {subtitle}
        </p>
      )}
      {(cta || secondaryCta) && (
        <div className="flex flex-wrap gap-3 mt-8">
          {cta && (
            <Link
              href={cta.href}
              className="inline-block border border-[#1A1A1A] font-sans text-[10px] font-bold tracking-widest uppercase px-6 py-3 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors duration-300"
            >
              {cta.text}
            </Link>
          )}
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-block border border-[#1B7E8C] font-sans text-[10px] font-bold tracking-widest uppercase px-6 py-3 text-[#1B7E8C] hover:bg-[#1B7E8C] hover:text-white transition-colors duration-300"
            >
              {secondaryCta.text}
            </Link>
          )}
        </div>
      )}
    </div>
  );

  const imagePanel = (
    <div
      className={`relative h-[50vh] min-h-[300px] md:h-auto ${
        imageLeft ? "order-1" : "order-1 md:order-2"
      }`}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        priority
      />
    </div>
  );

  return (
    <section className="flex flex-col md:grid md:grid-cols-2 md:min-h-[75vh]">
      {imageLeft ? (
        <>
          {imagePanel}
          {textPanel}
        </>
      ) : (
        <>
          {textPanel}
          {imagePanel}
        </>
      )}
    </section>
  );
}
