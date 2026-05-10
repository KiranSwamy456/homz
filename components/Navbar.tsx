"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#home", id: "home" },
  { name: "Products", href: "#products", id: "products" },
  { name: "Solutions", href: "#solutions", id: "solutions" },
  { name: "Trade & Wholesale", href: "#trade", id: "trade" },
  { name: "About", href: "#about", id: "about" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px", // Trigger when section comes into top part of viewport
      }
    );

    const sections = navLinks.map((link) => link.id);
    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#E0EAEC] px-8 h-20 md:h-24 flex items-center justify-between">
      {/* Left: Brand */}
      <Link href="/" className="flex items-center">
        <div className="relative w-40 h-12 md:w-56 md:h-16">
          <Image 
            src="/images/logo-1.jfif" 
            alt="HOMZindia Logo" 
            fill 
            className="object-contain" 
            priority
          />
        </div>
      </Link>

      {/* Center: Links */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`font-sans text-sm transition-colors pb-[1px] border-b-2 ${
                isActive
                  ? "text-[#1B7E8C] border-[#1B7E8C]"
                  : "text-[#555] hover:text-[#1B7E8C] border-transparent"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-4 text-[#1A1A1A]">
        <button aria-label="Search" className="hover:text-[#1B7E8C] transition-colors">
          <Search className="w-5 h-5" strokeWidth={1.5} />
        </button>
        <button aria-label="Enquiry Bag" className="hover:text-[#1B7E8C] transition-colors">
          <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
        </button>
      </div>
    </nav>
  );
}
