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

export const metadata: Metadata = {
  title: "About HomzIndia — Built on Craftsmanship, Scale & Trust",
  description:
    "Established in May 2013 in Hyderabad, HomzIndia has grown to a 30,000 sq. ft. manufacturing facility producing 750+ furniture sets per month. Learn our story.",
};

const COMPANY_STATS = [
  { label: "Established", value: "2013" },
  { label: "Manufacturing Space", value: "30,000", suffix: " sq.ft." },
  { label: "Monthly Capacity", value: "750", suffix: "+ sets" },
  { label: "Products Delivered", value: "1,38,000", suffix: "+" },
  { label: "Team Members", value: "55", suffix: "+" },
  { label: "Warranty", value: "24", suffix: " Months" },
];

const WHY_ITEMS = [
  {
    Icon: Award,
    title: "Top Manufacturer in Hyderabad",
    body: "One of the top 3 furniture makers in Hyderabad for customized sofas, catering to low, middle, and premium segments.",
  },
  {
    Icon: Layers,
    title: "Imported Certified Leather",
    body: "We source imported, certified licensed materials from China, tested for durability, texture, and finish — ensuring superior quality standards.",
  },
  {
    Icon: Factory,
    title: "30,000 Sq. Ft. Facility",
    body: "Expanded from a 6,600 sq. ft. facility to a massive 30,000 sq. ft. manufacturing powerhouse equipped for large scale production.",
  },
  {
    Icon: Users,
    title: "55+ Skilled Craftsmen",
    body: "A dedicated ground team of 55+ professionals who bring precision, care, and passion to every unique product we manufacture.",
  },
  {
    Icon: Star,
    title: "End-to-End Customization",
    body: "We specialize in space-based and design-based customization for any space, perfectly matching your style and comfort requirements.",
  },
  {
    Icon: Award,
    title: "Proven Track Record",
    body: "Over 1,38,000 furniture sets successfully delivered across India through our B2B networks, stores, and franchises.",
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
        subtitle="Since May 2013, HomzIndia has been crafting premium sofas, recliners, and custom furniture from Hyderabad — serving luxury homes, offices, and institutions across India."
        cta={{ text: "Request a Custom Quote", href: "/contact" }}
        image="/images/products/brown-leather-lounge-sofa-set.jpg"
        imageAlt="HomzIndia premium brown leather lounge sofa"
        imageLeft={false}
      />

      {/* ── Brand Story ──────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          <div className="flex-1">
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#888] mb-4 block">
              About Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] leading-tight mb-6">
              From a 6,600 sq. ft. facility to a 30,000 sq. ft. manufacturing powerhouse
            </h2>
            <p className="font-sans text-base text-[#666] leading-relaxed mb-4">
              Established in Hyderabad in May 2013, we are one of the leading manufacturers of custom furniture, known for delivering premium-quality craftsmanship and personalized furniture solutions. From low, middle, to premium-category furniture, we specialize in creating products that perfectly match customers&apos; space, style, and comfort requirements.
            </p>
            <p className="font-sans text-base text-[#666] leading-relaxed mb-4">
              Our expertise includes imported sofa collections, recliner sofas, leather sofas, beds, chairs, and fully customized pure leather sofas exclusively designed for homes. Backed by a skilled team of 55 dedicated professionals, we use imported certified leather and licensed materials from China to ensure superior quality standards.
            </p>
            <p className="font-sans text-base text-[#666] leading-relaxed mb-4">
              Today, we manufacture around 750 sets per month and have successfully delivered approximately 1,38,000 furniture sets across India through our stores, B2B network, and franchises. Our product range caters to various segments, with sofas ranging from ₹30,000 to ₹3,00,000, premium beds from ₹1.2 lakh to ₹1.5 lakh, and luxury chairs around ₹30,000.
            </p>
            <p className="font-sans text-base text-[#666] leading-relaxed">
              What makes us unique is our ability to customize sofas and furniture for any space and design requirement. Customer trust is our biggest strength, and we proudly deliver across the city with a reputation built on trust, premium materials, and customized excellence.
            </p>
          </div>
          <div className="flex-1 relative h-[400px] md:h-[520px] w-full rounded-sm overflow-hidden">
            <Image
              src="/images/products/royal-blue-recliner-sofa-set.jpg"
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
            subtext="Our growth is a testament to the trust thousands of customers across India have placed in us since 2013."
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
              src="/images/products/ivory-l-shaped-sectional-sofa.jpg"
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
                  body: "Customer trust is our biggest strength. Every product is backed by a 24-month warranty, ensuring reliability, durability, and satisfaction.",
                },
                {
                  Icon: Layers,
                  title: "Imported Licensed Materials",
                  body: "We source certified premium leather and materials from China, rigorously tested for durability, texture consistency, and long-lasting appeal.",
                },
                {
                  Icon: Star,
                  title: "Premium Finish Standard",
                  body: "Every piece of furniture is strictly inspected for seam alignment, cushion density, and surface finish before dispatch to ensure luxury quality.",
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
