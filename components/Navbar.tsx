"use client";

// Updated Navbar — multi-page navigation with:
// - Proper Next.js Link hrefs (not hash links)
// - Hamburger menu for mobile/tablet
// - Quote Cart icon with item count badge
// - Request Quote CTA button
// - usePathname for active state detection (replaces IntersectionObserver)
// The existing visual design is preserved exactly.

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";
import { useQuoteCart } from "@/lib/store/quoteCart";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Customization", href: "/customization" },
  { name: "Projects", href: "/projects" },
  { name: "Manufacturing", href: "/manufacturing" },
  { name: "Trade & Wholesale", href: "/trade" },
  { name: "Contact", href: "/contact" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const { items, setIsOpen } = useQuoteCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const cartCount = items.length;

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#E0EAEC]">
      {/* ── Main bar ─────────────────────────────────────── */}
      <div className="px-4 md:px-8 h-20 md:h-24 flex items-center justify-between gap-4 max-w-[1600px] mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0" aria-label="HomzIndia Home">
          <div className="relative w-36 h-10 md:w-48 md:h-14">
            <Image
              src="/images/logo-1.jfif"
              alt="HOMZindia Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop nav links — hidden below lg */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-5 flex-1 justify-center">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-sans text-[11px] xl:text-xs tracking-wide whitespace-nowrap pb-px border-b-2 transition-colors duration-200 ${
                  active
                    ? "text-[#1B7E8C] border-[#1B7E8C]"
                    : "text-[#555] hover:text-[#1B7E8C] border-transparent"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Quote Cart icon */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative text-[#1A1A1A] hover:text-[#1B7E8C] transition-colors p-1"
            aria-label={`Open Quote Cart — ${cartCount} items`}
          >
            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#F47920] text-white font-sans text-[9px] font-bold rounded-full flex items-center justify-center leading-none">
                {cartCount > 9 ? "9+" : cartCount}
              </span>
            )}
          </button>

          {/* Request Quote button — desktop only */}
          <Link
            href="/contact"
            className="hidden md:inline-block bg-[#1B7E8C] text-white font-sans text-[10px] font-bold tracking-widest uppercase px-5 py-3 hover:bg-[#0f5a66] transition-colors whitespace-nowrap"
          >
            Request Quote
          </Link>

          {/* Hamburger — mobile/tablet */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden text-[#1A1A1A] hover:text-[#1B7E8C] transition-colors p-1"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ───────────────────────────────────── */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#E0EAEC] bg-white absolute inset-x-0 top-full shadow-lg max-h-[calc(100vh-6rem)] overflow-y-auto">
          <div className="flex flex-col px-6 py-2">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-sans text-sm py-4 border-b border-[#f0f0f0] last:border-none transition-colors ${
                    active
                      ? "text-[#1B7E8C] font-semibold"
                      : "text-[#333] hover:text-[#1B7E8C]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="mt-4 mb-4 text-center bg-[#1B7E8C] text-white font-sans text-[10px] font-bold tracking-widest uppercase px-5 py-4 hover:bg-[#0f5a66] transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
