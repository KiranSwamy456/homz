import type { Metadata } from "next";
import Image from "next/image";
import { Award, Factory, Users, Star, Layers, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import StatCard from "@/components/StatCard";
import FeatureCard from "@/components/FeatureCard";
import QuoteCTA from "@/components/QuoteCTA";
import { COMPANY_STATS } from "@/lib/data/stats";

export const metadata: Metadata = {
  title: "About HomzIndia — Built on Craftsmanship, Scale & Trust",
  description:
    "Founded in 2008 in Hyderabad, HomzIndia has grown to a 30,000 sq. ft. manufacturing facility producing 750+ furniture sets per month. Learn our story.",
};

const WHY_ITEMS = [
  {
    Icon: Award,
    title: "Top Manufacturer in Hyderabad",
    body: "One of the leading customized sofa and furniture manufacturers in Hyderabad, trusted by thousands of homes, offices, and institutions across India.",
  },
  {
    Icon: Layers,
    title: "Imported Certified Leather",
    body: "We source imported, certified leather and premium materials, tested for durability, texture, and finish — so your furniture ages beautifully.",
  },
  {
    Icon: Factory,
    title: "30,000 Sq. Ft. Facility",
    body: "A modern manufacturing facility with dedicated zones for frame construction, upholstery, leather work, and rigorous quality inspection.",
  },
  {
    Icon: Users,
    title: "55+ Skilled Craftsmen",
    body: "A trained ground team of 55+ craftsmen who bring expertise, care, and attention to detail to every custom furniture piece.",
  },
  {
    Icon: Star,
    title: "Premium Finish Quality",
    body: "Every product undergoes thorough inspection for seam alignment, cushion density, and surface finish before leaving our facility.",
  },
  {
    Icon: Shield,
    title: "24-Month Warranty",
    body: "We stand behind every piece we manufacture with a 24-month warranty covering manufacturing defects and material quality.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col w-full">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────── */}
      <PageHero
        eyebrow="Our Story"
        title="Built on Craftsmanship, Scale & Trust"
        subtitle="Since May 2008, HomzIndia has been manufacturing premium customised sofas and furniture from Hyderabad — serving homes, offices, hotels, schools, and institutions across India."
        cta={{ text: "Request a Custom Quote", href: "/contact" }}
        image="/images/solution-hospitality.png"
        imageAlt="HomzIndia premium furniture"
        imageLeft={false}
      />

      {/* ── Brand Story ──────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          <div className="flex-1">
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#888] mb-4 block">
              Our Journey
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] leading-tight mb-6">
              From a workshop to a 30,000 sq. ft. manufacturing powerhouse
            </h2>
            <p className="font-sans text-base text-[#666] leading-relaxed mb-4">
              HomzIndia was founded in May 2008 in Hyderabad with a single belief — that every family
              and business deserves furniture that is truly made for them. Starting from a modest 6,600
              sq. ft. workshop, we have grown into one of Hyderabad&apos;s most trusted furniture manufacturers.
            </p>
            <p className="font-sans text-base text-[#666] leading-relaxed mb-4">
              Today, our 30,000 sq. ft. production facility operates at a capacity of over 750 sets
              per month, with a skilled team of 55+ craftsmen producing everything from pure leather
              customised sofas to recliner collections, beds, and institutional furniture.
            </p>
            <p className="font-sans text-base text-[#666] leading-relaxed">
              With a presence across India through our store and franchise network, and over 1,38,000
              sets delivered, HomzIndia continues to lead with quality, customisation, and commitment.
            </p>
          </div>
          <div className="flex-1 relative h-[400px] md:h-[520px] w-full rounded-sm overflow-hidden">
            <Image
              src="/images/lifestyle-contact.png"
              alt="HomzIndia showroom and manufacturing"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────── */}
      <section className="bg-[#1B7E8C] py-20 md:py-28 px-8 relative overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-96 h-96 text-white opacity-[0.04] -translate-x-1/3 -translate-y-1/3 pointer-events-none"
          fill="currentColor"
          viewBox="0 0 100 100"
        >
          <path d="M50 0 C60 30 80 40 100 50 C80 60 60 70 50 100 C40 70 20 60 0 50 C20 40 40 30 50 0 Z" />
        </svg>
        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="By the Numbers"
            heading="Scale That Speaks for Itself"
            subtext="Our growth is a testament to the trust thousands of customers across India have placed in us."
            light
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 divide-x divide-white/10">
            {COMPANY_STATS.map((stat) => (
              <StatCard key={stat.label} {...stat} light />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why HomzIndia ────────────────────────────────── */}
      <section className="bg-[#F5F0EB] py-20 md:py-28 px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Why Choose Us"
            heading="What Sets HomzIndia Apart"
            subtext="From raw material sourcing to finished product delivery, every step reflects our commitment to quality, customisation, and craftsmanship."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_ITEMS.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Warranty & Materials ─────────────────────────── */}
      <section className="bg-white py-20 md:py-28 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          <div className="flex-1 relative h-[350px] w-full rounded-sm overflow-hidden">
            <Image
              src="/images/category-seating.png"
              alt="HomzIndia leather quality"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#888] mb-4 block">
              Quality &amp; Trust
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] leading-tight mb-8">
              Materials Built to Last,{" "}
              <span className="text-[#F47920]">Warranty Backed</span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  Icon: Shield,
                  title: "24-Month Warranty",
                  body: "All HomzIndia products carry a 24-month warranty covering manufacturing defects and material quality issues.",
                },
                {
                  Icon: Layers,
                  title: "Imported Certified Leather",
                  body: "We source only certified imported leather — tested for durability, texture consistency, and surface finish — ensuring your furniture remains premium for years.",
                },
                {
                  Icon: Star,
                  title: "Premium Finish Standard",
                  body: "Every piece is inspected for seam alignment, cushion density, colour consistency, and surface finish before dispatch.",
                },
              ].map(({ Icon, title, body }) => (
                <div key={title} className="flex gap-5">
                  <div className="w-10 h-10 bg-[#1B7E8C]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-[#1B7E8C]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-[#1A1A1A] mb-1">
                      {title}
                    </h4>
                    <p className="font-sans text-sm text-[#666] leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <QuoteCTA
        heading="Let's Build Something Exceptional"
        subtext="Tell us your space, style, and requirement — our team will design and manufacture furniture that is truly yours."
        primaryCta={{ text: "Request a Custom Quote", href: "/contact" }}
        secondaryCta={{ text: "View Our Products", href: "/products" }}
      />

      <Footer />
    </main>
  );
}
