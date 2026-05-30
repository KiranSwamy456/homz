"use client";

// Client component: product grid with category filter tabs
// Used on the Products page

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import type { Product, ProductCategory } from "@/lib/data/products";

interface ProductsGridProps {
  products: Product[];
  categories: ProductCategory[];
}

export default function ProductsGrid({ products, categories }: ProductsGridProps) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "All">("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-white py-20 md:py-28 px-8" id="product-grid">
      <div className="max-w-7xl mx-auto">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCategory("All")}
            className={`font-sans text-[11px] px-4 py-2 border transition-colors ${
              activeCategory === "All"
                ? "bg-[#1B7E8C] text-white border-[#1B7E8C]"
                : "text-[#555] border-[#ddd] hover:border-[#1B7E8C] hover:text-[#1B7E8C] bg-white"
            }`}
          >
            All Products
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-sans text-[11px] px-4 py-2 border transition-colors ${
                activeCategory === cat
                  ? "bg-[#1B7E8C] text-white border-[#1B7E8C]"
                  : "text-[#555] border-[#ddd] hover:border-[#1B7E8C] hover:text-[#1B7E8C] bg-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="font-sans text-center text-[#888] py-24">
            No products available in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
