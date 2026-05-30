"use client";

// Full quote request form.
// On submit, builds a WhatsApp deep-link and opens it so the
// customer can review and manually press Send.
// The "Upload Reference Image" field is UI-only (no backend).
// The WhatsApp message includes: "Reference image: Customer will share on WhatsApp."

import { useState } from "react";
import { MessageCircle, Upload, CheckCircle } from "lucide-react";
import { buildWhatsAppContactUrl } from "@/lib/utils";

const PRODUCT_CATEGORIES = [
  "Leather Sofas",
  "Recliner Sofas",
  "Imported Sofa Collections",
  "Beds",
  "Chairs",
  "Accessories",
  "Customized Pure Leather Sofas",
  "Other / Not Sure",
];

const REQUIREMENT_TYPES = [
  "Sofa",
  "Recliner Sofa",
  "Bed",
  "Chair",
  "Commercial Furniture",
  "Custom Furniture",
  "Bulk / Wholesale Requirement",
];

const BUDGET_RANGES = [
  "₹30,000 – ₹75,000",
  "₹75,000 – ₹1,50,000",
  "₹1,50,000 – ₹3,00,000",
  "Above ₹3,00,000",
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  company: string;
  city: string;
  category: string;
  requirementType: string;
  budget: string;
  spaceSize: string;
  materialPreference: string;
  message: string;
}

const INITIAL: FormData = {
  name: "",
  phone: "",
  email: "",
  company: "",
  city: "",
  category: "",
  requirementType: "",
  budget: "",
  spaceSize: "",
  materialPreference: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL);
  const [fileName, setFileName] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppContactUrl(formData);
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    // Reset "submitted" feedback after 8 seconds
    setTimeout(() => setSubmitted(false), 8000);
  };

  const base =
    "w-full font-sans text-sm border border-[#ddd] bg-white px-4 py-3.5 outline-none placeholder:text-[#bbb] focus:border-[#1B7E8C] focus:ring-1 focus:ring-[#1B7E8C] transition-all text-[#1A1A1A] rounded-sm";

  const label = "block font-sans text-[10px] font-bold uppercase tracking-widest text-[#666] mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Row 1: Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-name" className={label}>Name *</label>
          <input
            id="cf-name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
            className={base}
          />
        </div>
        <div>
          <label htmlFor="cf-phone" className={label}>Phone Number *</label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 00000 00000"
            required
            className={base}
          />
        </div>
      </div>

      {/* Row 2: Email + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-email" className={label}>Email</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={base}
          />
        </div>
        <div>
          <label htmlFor="cf-company" className={label}>Company / Store Name</label>
          <input
            id="cf-company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your company or store"
            className={base}
          />
        </div>
      </div>

      {/* Row 3: City + Category */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-city" className={label}>City *</label>
          <input
            id="cf-city"
            name="city"
            type="text"
            value={formData.city}
            onChange={handleChange}
            placeholder="Your city"
            required
            className={base}
          />
        </div>
        <div>
          <label htmlFor="cf-category" className={label}>Product Category</label>
          <select
            id="cf-category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={`${base} appearance-none cursor-pointer`}
          >
            <option value="">Select category</option>
            {PRODUCT_CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 4: Requirement Type + Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-req" className={label}>Requirement Type</label>
          <select
            id="cf-req"
            name="requirementType"
            value={formData.requirementType}
            onChange={handleChange}
            className={`${base} appearance-none cursor-pointer`}
          >
            <option value="">Select type</option>
            {REQUIREMENT_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cf-budget" className={label}>Budget Range</label>
          <select
            id="cf-budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={`${base} appearance-none cursor-pointer`}
          >
            <option value="">Select budget</option>
            {BUDGET_RANGES.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 5: Space + Material */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-space" className={label}>Space Size / Dimensions</label>
          <input
            id="cf-space"
            name="spaceSize"
            type="text"
            value={formData.spaceSize}
            onChange={handleChange}
            placeholder='e.g. 12 ft × 14 ft'
            className={base}
          />
        </div>
        <div>
          <label htmlFor="cf-material" className={label}>Material Preference</label>
          <input
            id="cf-material"
            name="materialPreference"
            type="text"
            value={formData.materialPreference}
            onChange={handleChange}
            placeholder='e.g. Pure Leather, Fabric'
            className={base}
          />
        </div>
      </div>

      {/* Reference Image Upload (UI-only) */}
      <div>
        <label className={label}>Upload Reference Image</label>
        <label
          htmlFor="cf-image"
          className="flex items-start gap-4 w-full border border-dashed border-[#ddd] bg-[#fafafa] px-5 py-4 cursor-pointer hover:border-[#1B7E8C] transition-colors rounded-sm group"
        >
          <Upload className="w-5 h-5 text-[#bbb] group-hover:text-[#1B7E8C] transition-colors mt-0.5 shrink-0" />
          <div>
            {fileName ? (
              <p className="font-sans text-sm text-[#1B7E8C] font-medium">{fileName}</p>
            ) : (
              <p className="font-sans text-sm text-[#888]">
                Click to select an image (JPG, PNG, WEBP)
              </p>
            )}
            <p className="font-sans text-[10px] text-[#bbb] mt-1 leading-relaxed">
              You can also share the image directly on WhatsApp after submitting.
            </p>
          </div>
          <input
            id="cf-image"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            aria-label="Upload reference image"
          />
        </label>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="cf-message" className={label}>Message / Requirements</label>
        <textarea
          id="cf-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your requirements, customization preferences, or any specific details..."
          rows={4}
          className={`${base} resize-none`}
        />
      </div>

      {/* Pricing note */}
      <p className="font-sans text-xs text-[#aaa] italic leading-relaxed">
        * Final pricing depends on size, material, leather type, design, and customization requirements.
      </p>

      {/* Submit — WhatsApp */}
      <button
        type="submit"
        className={`w-full font-sans text-[11px] font-bold tracking-widest uppercase py-4 flex items-center justify-center gap-2.5 transition-all rounded-sm ${
          submitted
            ? "bg-[#1B7E8C] text-white"
            : "bg-[#25D366] text-white hover:bg-[#1EB558]"
        }`}
      >
        {submitted ? (
          <>
            <CheckCircle className="w-5 h-5" />
            WhatsApp Opened — Review &amp; Press Send
          </>
        ) : (
          <>
            <MessageCircle className="w-5 h-5" />
            Submit Request on WhatsApp
          </>
        )}
      </button>

      {submitted && (
        <p className="font-sans text-xs text-center text-[#1B7E8C]">
          WhatsApp has opened with your details pre-filled. Please review and press Send.
        </p>
      )}
    </form>
  );
}
