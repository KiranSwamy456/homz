"use client";

// B2B Quote Cart Drawer — NOT an e-commerce cart.
// Opens as a right-side panel with selected products,
// quantity selectors, notes, and a "Request Quote on WhatsApp" CTA.

import { useState } from "react";
import { X, Minus, Plus, Trash2, MessageCircle, ShoppingBag } from "lucide-react";
import { useQuoteCart } from "@/lib/store/quoteCart";
import { buildWhatsAppQuoteUrl } from "@/lib/utils";

export default function QuoteCartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, updateNotes, clearCart } =
    useQuoteCart();

  const [customerName, setCustomerName] = useState("");
  const [customerCity, setCustomerCity] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  const handleWhatsApp = () => {
    const url = buildWhatsAppQuoteUrl(items, {
      name: customerName,
      city: customerCity,
      phone: customerPhone,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (!isOpen) return null;

  const inputClass =
    "w-full font-sans text-sm border border-[#ddd] bg-white px-3 py-2.5 outline-none placeholder:text-[#bbb] focus:border-[#1B7E8C] focus:ring-1 focus:ring-[#1B7E8C] transition-all text-[#1A1A1A]";

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-[2px]"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        role="dialog"
        aria-label="Quote Cart"
        aria-modal="true"
        className="fixed right-0 top-0 bottom-0 w-full max-w-[420px] bg-white z-[70] flex flex-col shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E0EAEC] shrink-0 bg-white">
          <div>
            <h2 className="font-serif text-xl text-[#1A1A1A]">Quote Cart</h2>
            <p className="font-sans text-xs text-[#888] mt-0.5">
              {items.length} {items.length === 1 ? "item" : "items"} · B2B Inquiry Only
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#888] hover:text-[#1A1A1A] transition-colors p-1"
            aria-label="Close Quote Cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-8 py-16">
            <ShoppingBag className="w-14 h-14 text-[#ddd] mb-5" strokeWidth={1} />
            <p className="font-serif text-xl text-[#888]">Your quote cart is empty</p>
            <p className="font-sans text-sm text-[#aaa] mt-2 leading-relaxed">
              Browse our products and click &ldquo;Add to Quote&rdquo; to request pricing.
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-6 border border-[#1B7E8C] text-[#1B7E8C] font-sans text-[10px] font-bold tracking-widest uppercase px-6 py-3 hover:bg-[#1B7E8C] hover:text-white transition-colors"
            >
              Browse Products
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto">
            {/* Quote items */}
            <div className="px-6 py-5 space-y-4">
              {items.map((item) => (
                <div
                  key={item.productId}
                  className="bg-[#F5F0EB] rounded-sm p-4 relative"
                >
                  <div className="flex items-start justify-between gap-3 pr-6">
                    <div className="min-w-0">
                      <h3 className="font-sans text-sm font-semibold text-[#1A1A1A] leading-snug">
                        {item.name}
                      </h3>
                      <p className="font-sans text-xs text-[#888] mt-0.5">
                        {item.category}
                      </p>
                      <span className="inline-block mt-1.5 font-sans text-[9px] uppercase tracking-wide px-2 py-0.5 bg-[#1B7E8C]/10 text-[#1B7E8C]">
                        {item.segment}
                      </span>
                    </div>
                  </div>

                  {/* Remove button */}
                  <button
                    onClick={() => removeItem(item.productId)}
                    className="absolute top-4 right-4 text-[#bbb] hover:text-red-500 transition-colors"
                    aria-label={`Remove ${item.name}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  {/* Quantity selector */}
                  <div className="flex items-center gap-3 mt-4">
                    <span className="font-sans text-[10px] uppercase tracking-wide text-[#888]">
                      Qty:
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-[#ddd] text-[#555] hover:border-[#1B7E8C] hover:text-[#1B7E8C] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-sans text-sm font-semibold text-[#1A1A1A] w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-[#ddd] text-[#555] hover:border-[#1B7E8C] hover:text-[#1B7E8C] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Notes / customization */}
                  <textarea
                    value={item.notes}
                    onChange={(e) => updateNotes(item.productId, e.target.value)}
                    placeholder="Customization requirement, size, colour preference..."
                    rows={2}
                    className="w-full mt-3 font-sans text-xs border border-[#ddd] bg-white px-3 py-2 resize-none outline-none placeholder:text-[#bbb] focus:border-[#1B7E8C] focus:ring-1 focus:ring-[#1B7E8C] transition-all text-[#1A1A1A]"
                    aria-label={`Notes for ${item.name}`}
                  />
                </div>
              ))}
            </div>

            {/* Customer details */}
            <div className="px-6 py-4 border-t border-[#E0EAEC]">
              <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#888] mb-3">
                Your Details (Optional)
              </p>
              <div className="space-y-2">
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Your Name"
                  className={inputClass}
                  aria-label="Customer name"
                />
                <input
                  type="text"
                  value={customerCity}
                  onChange={(e) => setCustomerCity(e.target.value)}
                  placeholder="City"
                  className={inputClass}
                  aria-label="Customer city"
                />
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="Phone Number"
                  className={inputClass}
                  aria-label="Customer phone"
                />
              </div>
            </div>

            {/* Pricing disclaimer */}
            <div className="px-6 pb-4">
              <p className="font-sans text-[11px] text-[#aaa] italic leading-relaxed">
                * Final pricing depends on size, material, leather type, design, and
                customization requirements.
              </p>
            </div>
          </div>
        )}

        {/* Footer actions */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-[#E0EAEC] bg-white shrink-0 space-y-2">
            <button
              onClick={handleWhatsApp}
              className="w-full bg-[#25D366] text-white font-sans text-[11px] font-bold tracking-widest uppercase py-4 flex items-center justify-center gap-2 hover:bg-[#1EB558] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Request Quote on WhatsApp
            </button>
            <button
              onClick={clearCart}
              className="w-full border border-[#E0EAEC] text-[#aaa] font-sans text-[10px] font-bold tracking-widest uppercase py-3 hover:border-red-300 hover:text-red-400 transition-colors"
            >
              Clear Quote Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
