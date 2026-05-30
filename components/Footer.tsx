import Link from "next/link";
import Image from "next/image";
import { HOMZ_ADDRESS, HOMZ_PHONE_NUMBER, HOMZ_EMAIL, HOMZ_INSTAGRAM_HANDLE } from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#F5F0EB] px-8 pt-24 md:pt-32 pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1 — Brand */}
          <div>
            <div className="relative w-48 h-16 md:w-64 md:h-20 mb-8">
              <Image
                src="/images/logo-1.jfif"
                alt="HOMZindia Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <address className="not-italic font-sans text-sm text-[#666] leading-loose">
              <p>{HOMZ_ADDRESS.line1}</p>
              <p>{HOMZ_ADDRESS.line2}</p>
              <p className="mt-3">
                <a
                  href={`tel:${HOMZ_PHONE_NUMBER.replace(/\s/g, "")}`}
                  className="text-[#1B7E8C] hover:text-[#0f5a66] transition-colors font-medium"
                >
                  {HOMZ_PHONE_NUMBER}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${HOMZ_EMAIL}`}
                  className="text-[#1B7E8C] hover:text-[#0f5a66] transition-colors"
                >
                  {HOMZ_EMAIL}
                </a>
              </p>
              <p className="mt-2 text-[#888]">@{HOMZ_INSTAGRAM_HANDLE}</p>
            </address>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="font-sans text-xs font-bold tracking-wider uppercase mb-6 text-[#1A1A1A]">
              Quick Links
            </h4>
            <ul className="space-y-3 font-sans text-sm text-[#666]">
              <li>
                <Link href="/products" className="hover:text-[#1B7E8C] transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/customization" className="hover:text-[#1B7E8C] transition-colors">
                  Customization
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#1B7E8C] transition-colors">
                  Projects &amp; Portfolio
                </Link>
              </li>
              <li>
                <Link href="/trade" className="hover:text-[#1B7E8C] transition-colors">
                  Trade &amp; Wholesale
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#1B7E8C] transition-colors">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div>
            <h4 className="font-sans text-xs font-bold tracking-wider uppercase mb-6 text-[#1A1A1A]">
              Company
            </h4>
            <ul className="space-y-3 font-sans text-sm text-[#666]">
              <li>
                <Link href="/about" className="hover:text-[#1B7E8C] transition-colors">
                  About HomzIndia
                </Link>
              </li>
              <li>
                <Link href="/manufacturing" className="hover:text-[#1B7E8C] transition-colors">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#1B7E8C] transition-colors">
                  Warranty &amp; Quality
                </Link>
              </li>
              <li>
                <Link href="/trade" className="hover:text-[#1B7E8C] transition-colors">
                  Franchise &amp; Dealers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#1B7E8C] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 — Product Categories */}
          <div>
            <h4 className="font-sans text-xs font-bold tracking-wider uppercase mb-6 text-[#1A1A1A]">
              Categories
            </h4>
            <ul className="space-y-3 font-sans text-sm text-[#666]">
              <li>
                <Link href="/products" className="hover:text-[#1B7E8C] transition-colors">
                  Leather Sofas
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#1B7E8C] transition-colors">
                  Recliner Sofas
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#1B7E8C] transition-colors">
                  Imported Collections
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#1B7E8C] transition-colors">
                  Beds &amp; Chairs
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#1B7E8C] transition-colors">
                  Custom Pure Leather
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#ddd] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-sm text-[#aaa] tracking-wide text-center sm:text-left">
            © {year} HOMZindia Furniture Pvt. Ltd. All Rights Reserved.
          </p>
          <p className="font-sans text-sm text-[#aaa] tracking-wide">
            <Link href="/contact" className="hover:text-[#888] transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
