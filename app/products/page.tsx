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
        title="Furniture Crafted for Every Space & Budget"
        subtitle="From pure leather customised sofas to imported collections and premium beds — explore furniture built with care, quality, and craftsmanship."
        cta={{ text: "Browse All Products", href: "#product-grid" }}
        image="/images/category-seating.png"
        imageAlt="HomzIndia premium leather sofa collection"
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

      {/* ── Indicative Pricing ───────────────────────────── */}
      <section className="bg-[#F5F0EB] py-20 md:py-28 px-8">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Pricing Guide"
            heading="Indicative Price Ranges"
            subtext="Prices are indicative and vary based on size, design, material, leather type, and customisation requirements."
          />

          <div className="overflow-x-auto rounded-sm">
            <table className="w-full border-collapse bg-white shadow-sm">
              <thead>
                <tr className="bg-[#1B7E8C] text-white">
                  <th className="font-sans text-[11px] font-bold uppercase tracking-widest text-left px-6 py-4">
                    Category
                  </th>
                  <th className="font-sans text-[11px] font-bold uppercase tracking-widest text-left px-6 py-4">
                    Indicative Range
                  </th>
                  <th className="font-sans text-[11px] font-bold uppercase tracking-widest text-left px-6 py-4 hidden sm:table-cell">
                    Segments Available
                  </th>
                </tr>
              </thead>
              <tbody>
                {PRICING_ROWS.map((row, idx) => (
                  <tr
                    key={row.category}
                    className={`border-b border-[#E0EAEC] last:border-none ${idx % 2 === 1 ? "bg-[#faf8f5]" : "bg-white"}`}
                  >
                    <td className="font-sans text-sm text-[#1A1A1A] font-medium px-6 py-4">
                      {row.category}
                    </td>
                    <td className="font-sans text-sm font-semibold text-[#1B7E8C] px-6 py-4">
                      {row.range}
                    </td>
                    <td className="font-sans text-xs text-[#888] px-6 py-4 hidden sm:table-cell">
                      {row.segments}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex items-start gap-3 bg-white border border-[#E0EAEC] rounded-sm p-5">
            <span className="text-[#F47920] font-sans font-bold text-sm shrink-0">*</span>
            <p className="font-sans text-sm text-[#666] leading-relaxed">
              Final pricing depends on size, design, material, leather type, customisation
              requirement, and order quantity. Contact us or request a quote for an accurate estimate.
            </p>
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
