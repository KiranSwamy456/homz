"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type Tab = "Featured" | "Sofas" | "Lounge Chairs" | "Beds" | "Recliners" | "Ottomans";

const tabs: Tab[] = ["Featured", "Sofas", "Lounge Chairs", "Beds", "Recliners", "Ottomans"];

const products: Record<
  Tab,
  {
    name: string;
    price: string;
    room: string;
    image: string;
    onSale?: boolean;
  }[]
> = {
  Featured: [
    {
      name: "Grey & Black Swivel Lounge Chair",
      price: "",
      room: "Lounge Chairs",
      image: "/images/products/grey-black-swivel-lounge-chair.jpg",
    },
    {
      name: "White Modern Platform Bed",
      price: "",
      room: "Beds",
      image: "/images/products/white-modern-platform-bed.jpg",
    },
    {
      name: "Orange L-Shaped Leather Sectional Sofa",
      price: "",
      room: "Sofas",
      image: "/images/products/orange-l-shaped-leather-sectional-sofa.jpg",
    },
    {
      name: "Tan Leather Recliner Lounge Chair",
      price: "",
      room: "Recliners",
      image: "/images/products/tan-leather-recliner-lounge-chair.jpg",
    },
  ],
  Sofas: [
    {
      name: "Modern Grey Living Room Sofa Set",
      price: "",
      room: "Sofas",
      image: "/images/products/modern-grey-living-room-sofa-set.jpg",
    },
    {
      name: "Burnt Orange Leather Sofa Set",
      price: "",
      room: "Sofas",
      image: "/images/products/burnt-orange-leather-sofa-set.jpg",
    },
    {
      name: "Slate Blue Sectional Sofa Set",
      price: "",
      room: "Sofas",
      image: "/images/products/slate-blue-sectional-sofa-set.jpg",
    },
    {
      name: "Royal Blue Recliner Sofa Set",
      price: "",
      room: "Sofas",
      image: "/images/products/royal-blue-recliner-sofa-set.jpg",
    },
  ],
  "Lounge Chairs": [
    {
      name: "Tan Leather Accent Lounge Chair",
      price: "",
      room: "Lounge Chairs",
      image: "/images/products/tan-leather-accent-lounge-chair.jpg",
    },
    {
      name: "Mocha Barrel Lounge Chair",
      price: "",
      room: "Lounge Chairs",
      image: "/images/products/mocha-barrel-lounge-chair.jpg",
    },
    {
      name: "Teal Executive Lounge Chair",
      price: "",
      room: "Lounge Chairs",
      image: "/images/products/teal-executive-lounge-chair.jpg",
    },
    {
      name: "Ivory & Rust Swivel Lounge Chair",
      price: "",
      room: "Lounge Chairs",
      image: "/images/products/ivory-rust-swivel-lounge-chair.jpg",
    },
  ],
  Beds: [
    {
      name: "Grey Upholstered Platform Bed",
      price: "",
      room: "Beds",
      image: "/images/products/grey-upholstered-platform-bed.jpg",
    },
    {
      name: "Beige Premium Upholstered Bed",
      price: "",
      room: "Beds",
      image: "/images/products/beige-premium-upholstered-bed.jpg",
    },
    {
      name: "Cream Luxury Panel Bed",
      price: "",
      room: "Beds",
      image: "/images/products/cream-luxury-panel-bed.jpg",
    },
    {
      name: "White Modern Platform Bed",
      price: "",
      room: "Beds",
      image: "/images/products/white-modern-platform-bed.jpg",
    },
  ],
  Recliners: [
    {
      name: "Tan Leather Recliner Lounge Chair",
      price: "",
      room: "Recliners",
      image: "/images/products/tan-leather-recliner-lounge-chair.jpg",
    },
  ],
  Ottomans: [
    {
      name: "Round Fabric Pouffe Set",
      price: "",
      room: "Ottomans",
      image: "/images/products/round-fabric-pouffe-set.jpg",
    },
    {
      name: "Mustard Fabric Ottoman Pouffe",
      price: "",
      room: "Ottomans",
      image: "/images/products/mustard-fabric-ottoman-pouffe.jpg",
    },
  ],
};

export default function MoreProducts() {
  const [activeTab, setActiveTab] = useState<Tab>("Featured");

  return (
    <section
      className="bg-[#1B7E8C] py-20 md:py-28 px-8 relative overflow-hidden"
      id="products"
    >
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
              <Link
                href="/products"
                key={idx}
                className="bg-white rounded-sm overflow-hidden group block shadow-sm hover:shadow-md transition-shadow"
              >
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
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
