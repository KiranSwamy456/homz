import type { Metadata } from "next";
import Image from "next/image";
import { Factory, Users, Package, CheckCircle, Truck, ClipboardCheck, Settings } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import StatCard from "@/components/StatCard";
import FeatureCard from "@/components/FeatureCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import QuoteCTA from "@/components/QuoteCTA";
import { COMPANY_STATS } from "@/lib/data/stats";

export const metadata: Metadata = {
  title: "Manufacturing — HomzIndia Production Facility | Hyderabad",
  description:
    "HomzIndia operates a 30,000 sq. ft. manufacturing facility in Hyderabad with a capacity of 750+ furniture sets per month. Learn about our process and capabilities.",
};

const CAPABILITIES = [
  {
    Icon: Factory,
    title: "30,000 Sq. Ft. Facility",
    body: "A modern production facility in Hyderabad with dedicated zones for frame work, leather/fabric upholstery, foam, and finishing — all under one roof.",
  },
  {
    Icon: Users,
    title: "55+ Skilled Craftsmen",
    body: "A trained team of artisans and technicians with expertise in leather work, frame construction, joinery, and premium upholstery finishing.",
  },
  {
    Icon: Package,
    title: "750+ Sets / Month",
    body: "Production capacity of over 750 furniture sets per month — scalable for bulk B2B orders from dealers, institutions, and commercial clients.",
  },
  {
    Icon: Settings,
    title: "Custom Manufacturing",
    body: "Every piece is manufactured to your exact specification — custom sizes, designs, materials, and configurations handled with precision.",
  },
  {
    Icon: ClipboardCheck,
    title: "Rigorous Quality Control",
    body: "Each unit is inspected for frame integrity, seam quality, cushion density, leather consistency, and finish before leaving the factory.",
  },
  {
    Icon: Truck,
    title: "Bulk B2B Capability",
    body: "Experienced in large-scale projects for franchises, dealers, institutions, hotels, schools, and commercial interiors with timely dispatch.",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Requirement Understanding",
    description: "Customer shares dimensions, design brief, material preference, and quantity requirements.",
  },
  {
    number: "02",
    title: "Design & Material Selection",
    description: "Our team finalises design drawings, material samples, and production plan.",
  },
  {
    number: "03",
    title: "Frame & Structure",
    description: "Solid hardwood or engineered wood frames are crafted, jointed, and reinforced for long-term durability.",
  },
  {
    number: "04",
    title: "Leather / Fabric Work",
    description: "Upholstery is cut, stitched, and fitted by skilled artisans using certified leather or fabric.",
  },
  {
    number: "05",
    title: "Finishing & Quality Check",
    description: "Final detailing, touch-ups, dimension check, and quality sign-off before packaging.",
  },
  {
    number: "06",
    title: "Delivery / Dispatch",
    description: "Furniture is carefully packaged and dispatched to your location with delivery coordination.",
  },
];

export default function ManufacturingPage() {
  return (
    <main className="min-h-screen flex flex-col w-full">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────── */}
      <PageHero
        eyebrow="Our Facility"
        title="Manufacturing at Scale, Without Compromise"
        subtitle="Our 30,000 sq. ft. facility produces up to 750 premium sofa sets and recliners monthly, driven by state-of-the-art machinery and skilled craftsmen."
        cta={{ text: "View Our Catalogue", href: "/products" }}
        image="/images/manufacture-banner.jpg"
        imageAlt="Premium sofa manufacturing"
        imageLeft={true}
      />

      {/* ── Capacity Overview ─────────────────────────────── */}
      <section className="bg-[#F5F0EB] py-20 md:py-28 px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Production Capability"
            heading="Built for Bulk. Designed for Quality."
            subtext="HomzIndia's manufacturing capabilities are designed to serve B2B clients, institutions, dealers, and large-scale residential projects without compromising on craftsmanship."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap) => (
              <FeatureCard key={cap.title} {...cap} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Timeline ──────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="How We Work"
            heading="Our Manufacturing Process"
            subtext="From your requirement to your doorstep — six carefully managed steps ensure every piece meets our quality standard."
          />
          <ProcessTimeline steps={PROCESS_STEPS} />
        </div>
      </section>

      {/* ── Facility visual + story ───────────────────────── */}
      <section className="flex flex-col md:grid md:grid-cols-2 md:min-h-[70vh]">
        <div className="relative h-[50vh] min-h-[300px] md:h-auto">
          <Image
            src="/images/products/mustard-fabric-ottoman-pouffe.jpg"
            alt="HomzIndia quality leather furniture"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="bg-[#F5F0EB] flex flex-col justify-center px-8 md:px-16 py-16 md:py-0">
          <span className="font-sans text-[10px] uppercase tracking-widest text-[#888] mb-4 block">
            Our Commitment
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] leading-tight mb-6">
            Quality at Every Step, <span className="text-[#F47920]">Without Exception</span>
          </h2>
          <p className="font-sans text-base text-[#666] leading-relaxed mb-4">
            Since 2008, we have expanded from a 6,600 sq. ft. workshop to a 30,000 sq. ft.
            manufacturing powerhouse — all while maintaining the same standard of craft that
            built our reputation.
          </p>
          <p className="font-sans text-base text-[#666] leading-relaxed mb-8">
            We use imported certified leather and premium materials. Every frame is built to last.
            Every seam is hand-finished. Every product carries our 24-month warranty.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Imported Certified Leather", "Solid Hardwood Frames", "24-Month Warranty", "ISO-Grade Quality Checks"].map((tag) => (
              <span key={tag} className="flex items-center gap-1.5 font-sans text-[10px] uppercase tracking-wide text-[#666] border border-[#ccc] px-3 py-1.5">
                <CheckCircle className="w-3 h-3 text-[#1B7E8C]" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────── */}
      <section className="bg-[#1B7E8C] py-20 md:py-28 px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Our Numbers"
            heading="Production Scale at a Glance"
            light
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 divide-x divide-white/10">
            {COMPANY_STATS.map((stat) => (
              <StatCard key={stat.label} {...stat} light />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <QuoteCTA
        heading="Looking for a Bulk Manufacturing Partner?"
        subtext="HomzIndia supports B2B clients, franchise partners, dealers, and institutions with reliable bulk furniture manufacturing. Get in touch to discuss your order."
        primaryCta={{ text: "Request a Bulk Quote", href: "/contact" }}
        secondaryCta={{ text: "Trade & Wholesale", href: "/trade" }}
      />

      <Footer />
    </main>
  );
}
