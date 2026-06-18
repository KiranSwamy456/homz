import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Store, Users, Building2, Palette, Hotel, GraduationCap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import FeatureCard from "@/components/FeatureCard";
import QuoteCTA from "@/components/QuoteCTA";

export const metadata: Metadata = {
  title: "Trade & Wholesale — B2B Furniture Partner | HomzIndia",
  description:
    "HomzIndia supports furniture stores, dealers, franchise partners, interior designers, and institutional buyers with premium bulk manufacturing and custom furniture solutions.",
};

const WHO_WE_WORK_WITH = [
  {
    Icon: Store,
    title: "Furniture Stores & Dealers",
    body: "Partner with us to stock or display our premium sofa and furniture collections. Competitive bulk pricing and exclusive dealer arrangements available.",
  },
  {
    Icon: Users,
    title: "Franchise Partners",
    body: "Expand HomzIndia's reach through our franchise network. We provide product support, manufacturing backing, and brand materials.",
  },
  {
    Icon: Palette,
    title: "Interior Designers",
    body: "We collaborate directly with interior designers to manufacture furniture that perfectly matches your design vision — custom sizes, materials, and finishes.",
  },
  {
    Icon: Building2,
    title: "Offices & Corporates",
    body: "Complete office furniture solutions — executive seating, reception sofas, lounge furniture, and bulk workstation chairs tailored for corporate environments.",
  },
  {
    Icon: Hotel,
    title: "Hotels & Hospitality",
    body: "From lobby sofas to room furniture, we manufacture hospitality-grade furniture that combines aesthetics with durability for hotels and resorts.",
  },
  {
    Icon: GraduationCap,
    title: "Institutions & Schools",
    body: "Bulk furniture supply for schools, colleges, hospitals, and government institutions. Durable, easy-to-clean, and cost-effective solutions.",
  },
];

const BENEFITS = [
  {
    title: "Competitive Bulk Pricing",
    desc: "Tiered pricing for bulk orders — the more you order, the better the value. Pricing is always quote-based and customised to your requirement.",
  },
  {
    title: "Dedicated Account Support",
    desc: "B2B clients get a dedicated point of contact for smooth communication, order tracking, and after-sales support.",
  },
  {
    title: "Custom Manufacturing",
    desc: "We manufacture to your exact specification — custom sizes, your brand's preferred materials, or exclusive designs not available off the shelf.",
  },
  {
    title: "Reliable Production Capacity",
    desc: "With 750+ sets per month production capacity and 55+ skilled craftsmen, we can handle large and time-sensitive institutional orders.",
  },
];

export default function TradePage() {
  return (
    <main className="min-h-screen flex flex-col w-full">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────── */}
      <PageHero
        eyebrow="Trade & Wholesale"
        title="Manufacturing Support for Businesses"
        subtitle="A trusted B2B partner for furniture stores, architects, and interior designers requiring high-quality bulk sofas, beds, and seating solutions."
        cta={{ text: "Partner With Us", href: "/contact" }}
        image="/images/products/grey-black-swivel-lounge-chair.jpg"
        imageAlt="Premium lounge chair for business"
        imageLeft={false}
      />

      {/* ── Who We Work With ─────────────────────────────── */}
      <section className="bg-[#F5F0EB] py-20 md:py-28 px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Our B2B Partners"
            heading="Who We Work With"
            subtext="From individual interior designers to large institutional buyers — we serve a wide range of B2B clients with flexible, quote-based arrangements."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHO_WE_WORK_WITH.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Bulk Order Support ────────────────────────────── */}
      <section className="flex flex-col md:grid md:grid-cols-2 md:min-h-[70vh]">
        <div className="bg-[#1A1A1A] flex flex-col justify-center px-8 md:px-16 py-16 md:py-0 order-2 md:order-1">
          <span className="font-sans text-[10px] uppercase tracking-widest text-white/40 mb-4 block">
            Bulk Orders
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-6">
            Reliable Supply for <span className="text-[#F47920]">Large Orders</span>
          </h2>
          <p className="font-sans text-base text-white/65 leading-relaxed mb-6">
            With a production capacity of 750+ sets per month and 18+ years of manufacturing
            experience, HomzIndia is equipped to handle large-scale furniture requirements from
            dealers, franchise stores, hotels, and institutional buyers.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Minimum order quantities flexible based on product",
              "Tiered bulk pricing — better value at scale",
              "Consistent quality across every unit in the batch",
              "Timely dispatch with packaging support",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#1B7E8C] rounded-full mt-2 shrink-0" />
                <span className="font-sans text-sm text-white/70">{point}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="inline-block bg-[#1B7E8C] text-white font-sans text-[10px] font-bold tracking-widest uppercase px-6 py-3.5 hover:bg-[#0f5a66] transition-colors w-fit"
          >
            Enquire About Bulk Orders
          </Link>
        </div>
        <div className="relative h-[50vh] min-h-[300px] md:h-auto order-1 md:order-2">
          <Image
            src="/images/products/grey-black-swivel-lounge-chair.jpg"
            alt="Bulk furniture order"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* ── Custom Manufacturing Support ──────────────────── */}
      <section className="flex flex-col md:grid md:grid-cols-2 md:min-h-[70vh]">
        <div className="relative h-[50vh] min-h-[300px] md:h-auto">
          <Image
            src="/images/products/teal-executive-lounge-chair.jpg"
            alt="Custom furniture manufacturing"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="bg-[#F5F0EB] flex flex-col justify-center px-8 md:px-16 py-16 md:py-0">
          <span className="font-sans text-[10px] uppercase tracking-widest text-[#888] mb-4 block">
            Custom Manufacturing
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] leading-tight mb-6">
            Made to Your <span className="text-[#F47920]">Specification</span>
          </h2>
          <p className="font-sans text-base text-[#666] leading-relaxed mb-6">
            Interior designers and stores can supply their design drawings or reference images, and
            our team manufactures to those exact specifications — ensuring the furniture integrates
            seamlessly with your client&apos;s interiors.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Custom dimensions, designs, and finishes",
              "Any leather or fabric in your client's choice",
              "White-label manufacturing available for dealers",
              "OEM furniture manufacturing for brands",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#F47920] rounded-full mt-2 shrink-0" />
                <span className="font-sans text-sm text-[#666]">{point}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="inline-block border border-[#1A1A1A] font-sans text-[10px] font-bold tracking-widest uppercase px-6 py-3 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors w-fit"
          >
            Discuss Custom Manufacturing
          </Link>
        </div>
      </section>

      {/* ── Benefits Grid ─────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Why Partner with Us"
            heading="The HomzIndia Advantage for B2B"
            subtext="Our B2B partnerships are built on transparency, reliability, and quality at every step."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {BENEFITS.map((b, idx) => (
              <div key={idx} className="flex gap-5 p-6 bg-[#F5F0EB] rounded-sm">
                <div className="w-10 h-10 bg-[#1B7E8C] text-white flex items-center justify-center font-sans text-sm font-bold shrink-0">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#1A1A1A] mb-2">{b.title}</h3>
                  <p className="font-sans text-sm text-[#666] leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing explanation ───────────────────────────── */}
      <section className="bg-[#F5F0EB] py-16 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-serif text-3xl text-[#1A1A1A] mb-4">Quote-Based Pricing</h3>
          <p className="font-sans text-base text-[#666] leading-relaxed mb-6">
            All B2B pricing is quote-based and depends on product category, order quantity,
            customisation requirements, material selection, and delivery location. We do not publish
            fixed trade price lists — every quote is tailored to your specific requirement.
          </p>
          <p className="font-sans text-sm text-[#aaa] italic">
            Contact us with your requirement details and we&apos;ll share a competitive quote within 24–48 hours.
          </p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <QuoteCTA
        heading="Ready to Discuss Your Business Requirement?"
        subtext="Share your product requirement, quantity, and timeline — our B2B team will get back to you with a competitive quote."
        primaryCta={{ text: "Discuss Business Requirement", href: "/contact" }}
        secondaryCta={{ text: "Our Manufacturing", href: "/manufacturing" }}
      />

      <Footer />
    </main>
  );
}
