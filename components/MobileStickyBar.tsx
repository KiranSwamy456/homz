"use client";

// Mobile bottom sticky action bar.
// Shown only on mobile (md:hidden).
// Shows Call | WhatsApp | Quote Cart actions.
// The parent layout adds pb-16 md:pb-0 so this bar doesn't cover content.

import { Phone, MessageCircle, ShoppingBag } from "lucide-react";
import { useQuoteCart } from "@/lib/store/quoteCart";
import { HOMZ_PHONE_NUMBER, HOMZ_WHATSAPP_BASE_URL } from "@/lib/config";

export default function MobileStickyBar() {
  const { items, setIsOpen } = useQuoteCart();
  const cartCount = items.length;

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white border-t border-[#E0EAEC] shadow-[0_-2px_12px_rgba(0,0,0,0.08)]">
      <div className="flex items-stretch h-16">
        {/* Call */}
        <a
          href={`tel:${HOMZ_PHONE_NUMBER.replace(/\s/g, "")}`}
          className="flex-1 flex flex-col items-center justify-center gap-1 text-[#1A1A1A] hover:text-[#1B7E8C] active:bg-[#f5f5f5] transition-colors border-r border-[#E0EAEC]"
          aria-label="Call HomzIndia"
        >
          <Phone className="w-5 h-5" strokeWidth={1.5} />
          <span className="font-sans text-[9px] uppercase tracking-wide font-medium">
            Call
          </span>
        </a>

        {/* WhatsApp */}
        <a
          href={HOMZ_WHATSAPP_BASE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-1 hover:opacity-80 active:bg-[#f5f5f5] transition-colors border-r border-[#E0EAEC]"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-[#25D366]" strokeWidth={1.5} />
          <span className="font-sans text-[9px] uppercase tracking-wide font-medium text-[#1A1A1A]">
            WhatsApp
          </span>
        </a>

        {/* Quote Cart */}
        <button
          onClick={() => setIsOpen(true)}
          className="flex-1 flex flex-col items-center justify-center gap-1 text-[#1B7E8C] hover:text-[#0f5a66] active:bg-[#f5f5f5] transition-colors relative"
          aria-label={`Quote Cart — ${cartCount} items`}
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#F47920] text-white font-sans text-[9px] font-bold rounded-full flex items-center justify-center">
                {cartCount > 9 ? "9+" : cartCount}
              </span>
            )}
          </div>
          <span className="font-sans text-[9px] uppercase tracking-wide font-medium">
            Quote Cart
          </span>
        </button>
      </div>
    </div>
  );
}
