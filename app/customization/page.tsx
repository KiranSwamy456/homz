import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Ruler, Palette, Layers, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import FeatureCard from "@/components/FeatureCard";
import QuoteCTA from "@/components/QuoteCTA";

export const metadata: Metadata = {
  title: "Customization — Furniture Built Around Your Space | HomzIndia",
  description:
    "HomzIndia specialises in fully customised sofas and furniture for any space, design, and budget. Pure leather, Value, Mid-Range, and Premium & Luxury segments.",
};

const MATERIAL_OPTIONS = [
  { name: "Full-Grain Leather", desc: "The most premium, durable, and naturally beautiful leather. Ages with character." },
  { name: "Semi-Aniline Leather", desc: "Slightly treated for consistency while retaining the natural grain and feel." },
  { name: "Genuine Leather", desc: "Quality leather at mid-range pricing — durable and great for homes and offices." },
  { name: "Imported Certified Leather", desc: "Sourced from international suppliers, certified for quality and finish." },
  { name: "Premium Fabric", desc: "High-resilience fabric upholstery for homes and commercial spaces." },
  { name: "Velvet & Designer Fabric", desc: "Luxurious velvet and designer fabric options for bespoke interiors." },
];

const SEGMENT_OPTIONS = [
  {
    name: "Value Segment",
    tag: "Budget-Friendly",
    tagBg: "bg-[#888]",
    desc: "Durable, functional furniture crafted for everyday use. Best for homes, hostels, and institutional requirements where comfort and longevity matter more than luxury detailing.",
    highlights: ["Bonded Leather & Leatherette options", "3+2 sofa sets & L-shapes", "Durable frame construction", "Ideal for bulk orders"],
    image: "/images/case-2.png",
  },
  {
    name: "Mid-Range",
    tag: "Best Value",
    tagBg: "bg-[#1B7E8C]",
    desc: "The sweet spot of quality and affordability. Genuine leather upholstery, solid construction, and beautiful finishes — suitable for premium homes, offices, and hospitality interiors.",
    highlights: ["Genuine leather & quality fabric", "Wide range of designs", "Office & hospitality-grade", "Customisation available"],
    image: "/images/case-1.png",
  },
  {
    name: "Premium & Luxury",
    tag: "Top of the Line",
    tagBg: "bg-[#F47920]",
    desc: "Bespoke furniture crafted with imported certified leather, solid hardwood frames, and precision finishing. For clients who demand nothing but the best in their homes, hotels, or showrooms.",
    highlights: ["Imported pure & full-grain leather", "Custom dimensions & designs", "Motorised recliner options", "Luxury finishing & detailing"],
    image: "/images/lifestyle-contact.png",
  },
];

const PROCESS_STEPS = [
  { step: "01", title: "Share Your Requirement", desc: "Tell us your space dimensions, design preference, material choice, and budget." },
  { step: "02", title: "Design Consultation", desc: "Our team suggests designs, materials, and configurations suited to your space." },
  { step: "03", title: "Material Selection", desc: "Choose your leather type, fabric, colour, and finish from our curated options." },
  { step: "04", title: "Manufacturing", desc: "Your furniture is crafted to your exact specifications in our 30,000 sq. ft. facility." },
  { step: "05", title: "Quality Inspection", desc: "Every piece is inspected for finish, dimensions, seams, and comfort before dispatch." },
  { step: "06", title: "Delivery", desc: "Your finished furniture is carefully packaged and delivered to your location." },
];

const CUSTOM_SPACES = [
  { label: "Homes & Villas" },
  { label: "Offices & Corporates" },
  { label: "Hotels & Resorts" },
  { label: "Schools & Colleges" },
  { label: "Hospitals & Clinics" },
  { label: "Commercial Interiors" },
];

export default function CustomizationPage() {
  return (
    <main className="min-h-screen flex flex-col w-full">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────── */}
      <PageHero
        eyebrow="Custom Manufacturing"
        title="Furniture Built Around Your Space"
        subtitle="We don't sell furniture off a shelf. Every piece we make is designed around your dimensions, your design preference, and your budget — from Value Segment to Premium & Luxury."
        cta={{ text: "Share Your Requirement", href: "/contact" }}
        image="/images/bedroom-new-collection.png"
        imageAlt="HomzIndia customised sofa manufacturing"
        imageLeft={false}
      />

      {/* ── Space-based customisation ─────────────────────── */}
      <section className="flex flex-col md:grid md:grid-cols-2 md:min-h-[70vh]">
        <div className="relative h-[50vh] min-h-[300px] md:h-auto">
          <Image
            src="/images/solution-office.png"
            alt="Space-based furniture customisation"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="bg-[#F5F0EB] flex flex-col justify-center px-8 md:px-16 py-16 md:py-0">
          <Ruler className="w-8 h-8 text-[#1B7E8C] mb-6" strokeWidth={1.5} />
          <span className="font-sans text-[10px] uppercase tracking-widest text-[#888] mb-3 block">
            Space-Based
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] leading-tight mb-6">
            Built for <span className="text-[#F47920]">Your Room,</span> Not Ours
          </h2>
          <p className="font-sans text-base text-[#666] leading-relaxed mb-6">
            Whether you have an irregular living room, a narrow corridor, or a grand hotel lobby — we
            manufacture furniture that fits your exact space. Share your room dimensions and we
            engineer the layout, depth, and configuration accordingly.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {CUSTOM_SPACES.map((s) => (
              <span
                key={s.label}
                className="font-sans text-[10px] uppercase tracking-wide border border-[#1B7E8C] text-[#1B7E8C] px-3 py-1.5"
              >
                {s.label}
              </span>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-block border border-[#1A1A1A] font-sans text-[10px] font-bold tracking-widest uppercase px-6 py-3 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors w-fit"
          >
            Enquire About Your Space
          </Link>
        </div>
      </section>

      {/* ── Design-based customisation ────────────────────── */}
      <section className="flex flex-col md:grid md:grid-cols-2 md:min-h-[70vh]">
        <div className="bg-white flex flex-col justify-center px-8 md:px-16 py-16 md:py-0 order-2 md:order-1">
          <Palette className="w-8 h-8 text-[#1B7E8C] mb-6" strokeWidth={1.5} />
          <span className="font-sans text-[10px] uppercase tracking-widest text-[#888] mb-3 block">
            Design-Based
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] leading-tight mb-6">
            Your Vision, <span className="text-[#F47920]">Our Craft</span>
          </h2>
          <p className="font-sans text-base text-[#666] leading-relaxed mb-6">
            You bring the design vision — a reference image, a mood board, or just an idea — and our
            team translates it into reality. We can replicate, modify, or entirely innovate based on
            your brief, manufacturing furniture that matches your interior perfectly.
          </p>
          <ul className="space-y-3 mb-8">
            {["Replicate any design from a reference image", "Modify existing styles to suit your preference", "Deep-button tufting, rolled arms, clean lines", "Custom leg finish, colour, and stitch patterns"].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#F47920] rounded-full mt-2 shrink-0" />
                <span className="font-sans text-sm text-[#666]">{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="inline-block border border-[#1A1A1A] font-sans text-[10px] font-bold tracking-widest uppercase px-6 py-3 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors w-fit"
          >
            Share Your Design Brief
          </Link>
        </div>
        <div className="relative h-[50vh] min-h-[300px] md:h-auto order-1 md:order-2">
          <Image
            src="/images/case-3.png"
            alt="Design-based customisation"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* ── Material Options ──────────────────────────────── */}
      <section className="bg-[#F5F0EB] py-20 md:py-28 px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Material Options"
            heading="Choose Your Leather & Fabric"
            subtext="We offer a curated range of imported and locally sourced materials — from entry-level leatherette to imported certified pure leather."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MATERIAL_OPTIONS.map((mat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-sm border border-[#E0EAEC] hover:border-[#1B7E8C] hover:shadow-sm transition-all">
                <div className="w-2 h-8 bg-[#1B7E8C] mb-4" />
                <h3 className="font-serif text-lg text-[#1A1A1A] mb-2">{mat.name}</h3>
                <p className="font-sans text-sm text-[#666] leading-relaxed">{mat.desc}</p>
              </div>
            ))}
          </div>
          <p className="font-sans text-xs text-[#aaa] italic text-center mt-8">
            * Material availability and pricing vary by segment. Contact us for a detailed material sample and quote.
          </p>
        </div>
      </section>

      {/* ── Segment Cards ─────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Furniture Segments"
            heading="Pick Your Segment"
            subtext="HomzIndia manufactures across three professional segments. Each segment maintains our quality standard while offering the right fit for every budget."
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SEGMENT_OPTIONS.map((seg) => (
              <div key={seg.name} className="group rounded-sm overflow-hidden border border-[#E0EAEC] hover:shadow-lg transition-shadow">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={seg.image}
                    alt={seg.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-4 left-4 ${seg.tagBg} text-white font-sans text-[9px] font-bold uppercase tracking-widest px-2.5 py-1`}>
                    {seg.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-[#1A1A1A] mb-3">{seg.name}</h3>
                  <p className="font-sans text-sm text-[#666] leading-relaxed mb-4">{seg.desc}</p>
                  <ul className="space-y-2">
                    {seg.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 bg-[#1B7E8C] rounded-full mt-2 shrink-0" />
                        <span className="font-sans text-xs text-[#555]">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Customisation Process ─────────────────────────── */}
      <section className="bg-[#1B7E8C] py-20 md:py-28 px-8 relative overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-72 h-72 text-white opacity-[0.04] -translate-x-1/3 -translate-y-1/3 pointer-events-none"
          fill="currentColor"
          viewBox="0 0 100 100"
        >
          <path d="M50 0 C60 30 80 40 100 50 C80 60 60 70 50 100 C40 70 20 60 0 50 C20 40 40 30 50 0 Z" />
        </svg>
        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="How It Works"
            heading="From Your Idea to Your Home"
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((s) => (
              <div key={s.step} className="bg-white/10 p-6 rounded-sm">
                <span className="font-sans text-3xl font-bold text-white/20 block mb-3">{s.step}</span>
                <h3 className="font-serif text-lg text-white mb-2">{s.title}</h3>
                <p className="font-sans text-sm text-white/65 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Customisation CTA ─────────────────────────────── */}
      <QuoteCTA
        heading="Ready to Describe Your Perfect Furniture?"
        subtext="Share your requirement with our team. We'll consult, design, and manufacture furniture exactly the way you want it."
        primaryCta={{ text: "Share Your Requirement", href: "/contact" }}
        secondaryCta={{ text: "Browse Products", href: "/products" }}
      />

      <Footer />
    </main>
  );
}
