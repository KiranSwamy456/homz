import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { HOMZ_PHONE_NUMBER, HOMZ_EMAIL, HOMZ_ADDRESS, HOMZ_WHATSAPP_BASE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact & Request Quote — HomzIndia | Hyderabad",
  description:
    "Request a custom furniture quote from HomzIndia. Share your space, design, and budget — our team will respond within 24–48 hours.",
};

const CONTACT_ITEMS = [
  {
    Icon: Phone,
    label: "Phone",
    value: HOMZ_PHONE_NUMBER,
    href: `tel:${HOMZ_PHONE_NUMBER.replace(/\s/g, "")}`,
  },
  {
    Icon: Mail,
    label: "Email",
    value: HOMZ_EMAIL,
    href: `mailto:${HOMZ_EMAIL}`,
  },
  {
    Icon: MapPin,
    label: "Address",
    value: HOMZ_ADDRESS.full,
    href: `https://maps.google.com/?q=${encodeURIComponent(HOMZ_ADDRESS.full)}`,
  },
  {
    Icon: Clock,
    label: "Working Hours",
    value: "Monday – Saturday, 10:00 AM – 7:00 PM",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col w-full">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────── */}
      <PageHero
        eyebrow="Get in Touch"
        title="Let's Build Something Together"
        subtitle="Looking for a custom sectional sofa or a bulk order of executive lounge chairs? Share your requirements and get a personalized quote."
        image="/images/products/teal-executive-lounge-chair.jpg"
        imageAlt="Teal executive lounge chair"
        imageLeft={false}
      />

      {/* ── Main Section: Form + Contact Info ────────────── */}
      <section className="bg-white py-20 md:py-28 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Form — spans 2 cols */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <span className="font-sans text-[10px] uppercase tracking-widest text-[#888] mb-3 block">
                  Quote Request Form
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] leading-tight">
                  Request a Quote
                </h2>
                <p className="font-sans text-base text-[#666] mt-4 leading-relaxed">
                  Fill in the details below. Clicking submit will open WhatsApp with your details
                  pre-filled — please review and press Send.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Sidebar: Contact details */}
            <div className="lg:col-span-1">
              <div className="bg-[#F5F0EB] p-8 rounded-sm sticky top-32">
                <h3 className="font-serif text-2xl text-[#1A1A1A] mb-6">Contact Information</h3>

                <div className="space-y-6">
                  {CONTACT_ITEMS.map(({ Icon, label, value, href }) => (
                    <div key={label} className="flex gap-4">
                      <div className="w-10 h-10 bg-[#1B7E8C]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-5 h-5 text-[#1B7E8C]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="font-sans text-[10px] uppercase tracking-widest text-[#aaa] mb-1">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="font-sans text-sm text-[#1A1A1A] hover:text-[#1B7E8C] transition-colors leading-relaxed"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="font-sans text-sm text-[#1A1A1A] leading-relaxed">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp direct link */}
                <div className="mt-8 pt-8 border-t border-[#ddd]">
                  <p className="font-sans text-xs text-[#888] mb-4 uppercase tracking-widest">
                    Direct WhatsApp
                  </p>
                  <a
                    href={HOMZ_WHATSAPP_BASE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-[#25D366] text-white font-sans text-[11px] font-bold tracking-widest uppercase px-5 py-4 hover:bg-[#1EB558] transition-colors w-full justify-center"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                </div>

                {/* Pricing note */}
                <p className="font-sans text-[11px] text-[#aaa] italic mt-6 leading-relaxed">
                  * Final pricing depends on size, material, leather type, design, and customisation requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs strip ───────────────────────────────────── */}
      <section className="bg-[#F5F0EB] py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-serif text-3xl text-[#1A1A1A] text-center mb-10">
            Frequently Asked Questions
          </h3>
          <div className="space-y-6">
            {[
              {
                q: "How soon will I get a quote?",
                a: "We typically respond within 24–48 business hours after receiving your requirement. Bulk and complex requirements may take slightly longer.",
              },
              {
                q: "What information do I need to provide for a quote?",
                a: "Share your product category, space dimensions, material preference, design brief (if any), and quantity. A reference image helps us understand your vision better.",
              },
              {
                q: "Do you have a showroom?",
                a: "Yes, our showroom is at our facility in Hyderabad. You can visit to see our material samples, leather options, and completed product displays.",
              },
              {
                q: "How long does manufacturing take?",
                a: "Manufacturing timelines vary by product and customisation. Standard products typically take 3–4 weeks. Complex or bulk orders may require 6–8 weeks.",
              },
              {
                q: "Do you manufacture for other cities?",
                a: "Yes, we serve clients across India through our store and franchise network. Contact us to discuss delivery to your location.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-[#ddd] pb-6 last:border-none">
                <h4 className="font-sans text-sm font-semibold text-[#1A1A1A] mb-2">
                  {faq.q}
                </h4>
                <p className="font-sans text-sm text-[#666] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
