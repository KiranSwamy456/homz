"use client";

// Product card with "Add to Quote" button.
// Must be "use client" because it uses the QuoteCart context.

import Image from "next/image";
import { Plus, Check } from "lucide-react";
import { useQuoteCart } from "@/lib/store/quoteCart";
import type { Product } from "@/lib/data/products";

interface ProductCardProps {
  product: Product;
}

const SEGMENT_STYLES: Record<Product["segment"], string> = {
  "Premium & Luxury": "bg-[#F47920] text-white",
  "Mid-Range": "bg-[#1B7E8C] text-white",
  "Value Segment": "bg-[#888] text-white",
};

const SEGMENT_LABELS: Record<Product["segment"], string> = {
  "Premium & Luxury": "Premium",
  "Mid-Range": "Mid-Range",
  "Value Segment": "Value",
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem, isInCart, setIsOpen } = useQuoteCart();
  const inCart = isInCart(product.id);

  const handleAddToQuote = () => {
    addItem({
      productId: product.id,
      name: product.name,
      category: product.category,
      segment: product.segment,
    });
    setIsOpen(true);
  };

  return (
    <div className="bg-white rounded-sm overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden shrink-0">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Segment badge */}
        <span
          className={`absolute top-3 left-3 font-sans text-[9px] font-bold px-2 py-0.5 uppercase tracking-wide ${SEGMENT_STYLES[product.segment]}`}
        >
          {SEGMENT_LABELS[product.segment]}
        </span>
        {/* Customizable badge */}
        {product.customizable && (
          <span className="absolute top-3 right-3 bg-black/60 text-white font-sans text-[9px] font-bold px-2 py-0.5 uppercase tracking-wide">
            Customizable
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <p className="font-sans text-[10px] text-[#888] uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <h3 className="font-serif text-base font-normal text-[#1A1A1A] mb-2 line-clamp-2 flex-1">
          {product.name}
        </h3>
        <p className="font-sans text-xs text-[#666] leading-relaxed mb-3 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Material options */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.materialOptions.slice(0, 2).map((mat) => (
            <span
              key={mat}
              className="font-sans text-[9px] uppercase tracking-wide border border-[#E0EAEC] text-[#888] px-2 py-0.5"
            >
              {mat}
            </span>
          ))}
        </div>

        {/* Prices hidden as per request */}

        {/* CTA */}
        <button
          onClick={handleAddToQuote}
          className={`w-full flex items-center justify-center gap-2 py-3 font-sans text-[10px] font-bold tracking-widest uppercase transition-colors ${
            inCart
              ? "bg-[#0f5a66] text-white cursor-default"
              : "bg-[#1B7E8C] text-white hover:bg-[#0f5a66]"
          }`}
        >
          {inCart ? (
            <>
              <Check className="w-3.5 h-3.5" />
              Added to Quote
            </>
          ) : (
            <>
              <Plus className="w-3.5 h-3.5" />
              Add to Quote
            </>
          )}
        </button>
      </div>
    </div>
  );
}
