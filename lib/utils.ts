import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { HOMZ_WHATSAPP_NUMBER } from "./config";
import type { QuoteItem } from "./store/quoteCart";

// ─────────────────────────────────────────────────────────────
//  Tailwind class merge utility (existing)
// ─────────────────────────────────────────────────────────────
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─────────────────────────────────────────────────────────────
//  WhatsApp message builders
// ─────────────────────────────────────────────────────────────

interface CustomerDetails {
  name?: string;
  city?: string;
  phone?: string;
}

/**
 * Builds a WhatsApp URL pre-filled with a formatted quote request message
 * for items selected from the Quote Cart.
 */
export function buildWhatsAppQuoteUrl(
  items: QuoteItem[],
  customer: CustomerDetails = {}
): string {
  const lines: string[] = [
    "Hello HomzIndia,",
    "",
    "I am interested in the following products:",
    "",
  ];

  items.forEach((item, idx) => {
    lines.push(`${idx + 1}. *${item.name}*`);
    lines.push(`   Category: ${item.category}`);
    lines.push(`   Segment: ${item.segment}`);
    lines.push(`   Quantity: ${item.quantity}`);
    if (item.notes.trim()) {
      lines.push(`   Notes: ${item.notes.trim()}`);
    }
    lines.push("");
  });

  lines.push("*Customer Details:*");
  lines.push(`Name: ${customer.name?.trim() || "—"}`);
  lines.push(`City: ${customer.city?.trim() || "—"}`);
  lines.push(`Phone: ${customer.phone?.trim() || "—"}`);
  lines.push("");
  lines.push(
    "Reference image: Customer will share on WhatsApp."
  );
  lines.push("");
  lines.push("Please share the price and availability.");

  const message = lines.join("\n");
  return `https://wa.me/${HOMZ_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  company?: string;
  city: string;
  category?: string;
  requirementType?: string;
  budget?: string;
  spaceSize?: string;
  materialPreference?: string;
  message?: string;
}

/**
 * Builds a WhatsApp URL pre-filled with contact form data.
 * The customer manually reviews and sends the message.
 */
export function buildWhatsAppContactUrl(data: ContactFormData): string {
  const lines: string[] = [
    "Hello HomzIndia,",
    "",
    "I would like to request a quote.",
    "",
    `*Name:* ${data.name}`,
    `*Phone:* ${data.phone}`,
  ];

  if (data.email) lines.push(`*Email:* ${data.email}`);
  if (data.company) lines.push(`*Company / Store:* ${data.company}`);
  lines.push(`*City:* ${data.city}`);
  if (data.category) lines.push(`*Product Category:* ${data.category}`);
  if (data.requirementType) lines.push(`*Requirement Type:* ${data.requirementType}`);
  if (data.budget) lines.push(`*Budget Range:* ${data.budget}`);
  if (data.spaceSize) lines.push(`*Space / Dimensions:* ${data.spaceSize}`);
  if (data.materialPreference) lines.push(`*Material Preference:* ${data.materialPreference}`);

  if (data.message?.trim()) {
    lines.push("");
    lines.push(`*Message:*`);
    lines.push(data.message.trim());
  }

  lines.push("");
  lines.push("Reference image: Customer will share on WhatsApp.");
  lines.push("");
  lines.push("Please share the price and availability.");

  const message = lines.join("\n");
  return `https://wa.me/${HOMZ_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
