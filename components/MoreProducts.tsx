"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

type Tab = "Furniture" | "Sofas" | "Tables" | "Storage";

const tabs: Tab[] = ["Furniture", "Sofas", "Tables", "Storage"];

const products: Record<Tab, { name: string; price: string; room: string; image: string; onSale?: boolean }[]> = {
  Furniture: [
    { name: "Executive Chair", price: "₹24,500", room: "Office Space", image: "/images/category-seating.png" },
    { name: "Work Desk", price: "₹18,000", room: "Office Space", image: "/images/category-desks.png" },
    { name: "Pedestal Cabinet", price: "₹8,200", room: "Storage", image: "/images/category-storage.png" },
    { name: "Stack Chair", price: "₹3,600", room: "Event Seating", image: "/images/case-2.png", onSale: true },
  ],
  Sofas: [
    { name: "Lounge Sofa", price: "₹55,000", room: "Reception", image: "/images/category-seating.png" },
    { name: "Standing Desk", price: "₹22,000", room: "Office Space", image: "/images/category-desks.png" },
    { name: "Filing Cabinet", price: "₹12,000", room: "Storage", image: "/images/category-storage.png" },
    { name: "Bar Stool", price: "₹6,500", room: "Breakout Area", image: "/images/case-3.png" },
  ],
  Tables: [
    { name: "Conference Table", price: "₹85,000", room: "Boardroom", image: "/images/category-desks.png" },
    { name: "Ergonomic Chair", price: "₹31,000", room: "Office Space", image: "/images/category-seating.png" },
    { name: "Bookshelf", price: "₹14,000", room: "Storage", image: "/images/category-storage.png" },
    { name: "Visitor Chair", price: "₹7,200", room: "Reception", image: "/images/case-2.png" },
  ],
  Storage: [
    { name: "Boardroom Table", price: "₹1,20,000", room: "Boardroom", image: "/images/case-3.png", onSale: true },
    { name: "Executive Desk", price: "₹45,000", room: "Office Space", image: "/images/category-desks.png" },
    { name: "Display Cabinet", price: "₹28,000", room: "Retail", image: "/images/category-storage.png" },
    { name: "Outdoor Chair", price: "₹9,800", room: "Hospitality", image: "/images/category-outdoor.png" },
  ],
};

export default function MoreProducts() {
  const [activeTab, setActiveTab] = useState<Tab>("Furniture");

  return (
    <section className="bg-[#1B7E8C] py-20 md:py-28 px-8 relative overflow-hidden" id="products">
      {/* Decorative Botanical SVG - top right */}
      <svg
        className="absolute top-0 right-0 w-64 h-64 text-white opacity-5 translate-x-1/4 -translate-y-1/4 pointer-events-none"
        fill="currentColor"
        viewBox="0 0 100 100"
      >
        <path d="M50 0 C60 30 80 40 100 50 C80 60 60 70 50 100 C40 70 20 60 0 50 C20 40 40 30 50 0 Z" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-white text-center">
          More Products
        </h2>
        <p className="font-sans text-base md:text-lg text-white/70 text-center mt-3 mb-12">
          Commercial-grade furniture for every space and style
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-8 mb-10 border-b border-white/20">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-sans text-sm pb-3 cursor-pointer transition-colors relative border-b-2 
                ${activeTab === tab ? "text-white border-[#F47920]" : "text-white/55 border-transparent hover:text-white/80"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {products[activeTab].map((product, idx) => (
              <div key={idx} className="bg-white rounded-sm overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-square w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {product.onSale && (
                    <span className="absolute top-2 left-2 bg-[#F47920] text-white text-[9px] font-bold px-2 py-0.5 uppercase tracking-wide">
                      Sale!
                    </span>
                  )}
                </div>
                <div className="p-5 md:p-6 text-center">
                  <p className="font-sans text-[11px] md:text-xs text-[#888] uppercase tracking-wider">
                    {product.room}
                  </p>
                  <h3 className="font-serif text-base md:text-lg font-normal text-[#1A1A1A] mt-2 line-clamp-1">
                    {product.name}
                  </h3>
                  <div className="flex justify-center gap-0.5 text-[#ddd] text-sm mt-1.5">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                  <p className="font-sans text-base md:text-lg font-semibold text-[#1B7E8C] mt-3">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
