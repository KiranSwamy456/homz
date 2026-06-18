import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ProjectsGallery from "@/components/ProjectsGallery";
import QuoteCTA from "@/components/QuoteCTA";
import { PROJECTS } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Projects & Portfolio — HomzIndia Custom Furniture Work",
  description:
    "Explore HomzIndia's portfolio of completed custom furniture projects — homes, offices, hotels, schools, hospitals, and commercial interiors across Hyderabad.",
};

const USE_CASE_ICONS = [
  { label: "Homes", count: "3+" },
  { label: "Offices", count: "1+" },
  { label: "Hotels", count: "1+" },
  { label: "Schools", count: "1+" },
  { label: "Hospitals", count: "1+" },
  { label: "Commercial", count: "2+" },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen flex flex-col w-full">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────── */}
      <PageHero
        eyebrow="Portfolio"
        title="Our Work, In Every Space"
        subtitle="From elegant residential lounge setups to large-scale hotel furnishings — see how our custom furniture transforms spaces."
        cta={{ text: "Discuss Your Project", href: "/contact" }}
        image="/images/products/ivory-rust-swivel-lounge-chair.jpg"
        imageAlt="Ivory and rust swivel lounge chair"
        imageLeft={true}
      />

      {/* ── Use-case overview ─────────────────────────────── */}
      <section className="bg-white py-14 px-8 border-b border-[#E0EAEC]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {USE_CASE_ICONS.map((uc) => (
              <div key={uc.label} className="text-center">
                <p className="font-serif text-3xl text-[#1B7E8C]">{uc.count}</p>
                <p className="font-sans text-xs uppercase tracking-wider text-[#888] mt-1">{uc.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects Gallery with filter ─────────────────── */}
      <ProjectsGallery projects={PROJECTS} />

      {/* ── Placeholder note ─────────────────────────────── */}
      <section className="bg-white py-12 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-sm text-[#aaa] italic">
            These project images are representative of our work. Real project photos from our completed
            installations will be updated shortly. Contact us to discuss your specific requirement.
          </p>
        </div>
      </section>

      {/* ── Stats strip ──────────────────────────────────── */}
      <section className="bg-[#1A1A1A] py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            {[
              { value: "1,38,000+", label: "Sets Delivered" },
              { value: "750+", label: "Sets / Month" },
              { value: "18 Years", label: "Of Experience" },
              { value: "24 Mo.", label: "Warranty" },
            ].map((s) => (
              <div key={s.label} className="text-center px-4">
                <p className="font-serif text-4xl text-[#F47920]">{s.value}</p>
                <p className="font-sans text-[10px] uppercase tracking-widest text-white/50 mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <QuoteCTA
        heading="Start Your Custom Project"
        subtext="Whether it's a single room or an entire institution — share your requirement and let us furnish your space with the quality it deserves."
        primaryCta={{ text: "Discuss Your Project", href: "/contact" }}
        secondaryCta={{ text: "View Our Products", href: "/products" }}
      />

      <Footer />
    </main>
  );
}
