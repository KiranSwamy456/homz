import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ProductsGrid from "@/components/ProductsGrid";
import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";
import QuoteCTA from "@/components/QuoteCTA";
import { PRODUCTS, ALL_CATEGORIES, BEST_SELLERS } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Products — HomzIndia Furniture Collections | Leather Sofas, Recliners, Beds",
  description:
    "Browse HomzIndia's premium furniture collections — pure leather sofas, recliner sofas, imported collections, beds, chairs, and fully customised furniture. Request a quote today.",
};

const PRICING_ROWS = [
  {
    category: "Sofas",
    range: "₹30,000 – ₹3,00,000",
    segments: "Value, Mid-Range & Premium & Luxury",
  },
  {
    category: "Beds",
    range: "₹1,20,000 – ₹1,80,000",
    segments: "Mid-Range & Premium & Luxury",
  },
  {
    category: "Chairs & Armchairs",
    range: "₹25,000 – ₹70,000",
    segments: "Mid-Range & Premium & Luxury",
  },
  {
    category: "Recliner Sofas",
    range: "₹45,000 – ₹2,50,000",
    segments: "Mid-Range & Premium & Luxury",
  },
  {
    category: "Customised Pure Leather Sofas",
    range: "₹1,20,000 – ₹3,00,000+",
    segments: "Premium & Luxury",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen flex flex-col w-full">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────── */}
      <PageHero
        eyebrow="Our Collections"
        title="Our Premium Collections"
        subtitle="Explore our wide range of Lounge Chairs, Beds, Sofas, Recliners, and Ottomans. Find the perfect piece for your luxury home or commercial space."
        cta={{ text: "Download Brochure", href: "/contact" }}
        image="/images/products/orange-l-shaped-leather-sectional-sofa.jpg"
        imageAlt="Premium leather sectional sofa"
        imageLeft={false}
      />

      {/* ── Product Grid with Category Filter ────────────── */}
      <ProductsGrid products={PRODUCTS} categories={ALL_CATEGORIES} />

      {/* ── Best Sellers ─────────────────────────────────── */}
      <section className="bg-[#1B7E8C] py-20 md:py-28 px-8 relative overflow-hidden">
        <svg
          className="absolute bottom-0 right-0 w-96 h-96 text-white opacity-[0.04] translate-x-1/3 translate-y-1/3 pointer-events-none"
          fill="currentColor"
          viewBox="0 0 100 100"
        >
          <path d="M50 0 C60 30 80 40 100 50 C80 60 60 70 50 100 C40 70 20 60 0 50 C20 40 40 30 50 0 Z" />
        </svg>
        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Most Popular"
            heading="Our Best-Selling Products"
            subtext="The furniture our customers love most — quality, comfort, and customisation combined."
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {BEST_SELLERS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>



      {/* ── CTA ──────────────────────────────────────────── */}
      <QuoteCTA
        heading="Can't Find What You're Looking For?"
        subtext="We manufacture customised furniture. If your requirement isn't listed, share your idea and we'll build it."
        primaryCta={{ text: "Request a Custom Quote", href: "/contact" }}
        secondaryCta={{ text: "Explore Customisation", href: "/customization" }}
      />

      <Footer />
    </main>
  );
}
