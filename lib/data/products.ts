// ─────────────────────────────────────────────────────────────
//  HomzIndia — Product Catalog Data
// ─────────────────────────────────────────────────────────────

export type ProductCategory =
  | "Leather Sofas"
  | "Recliner Sofas"
  | "Imported Sofa Collections"
  | "Beds"
  | "Chairs"
  | "Accessories"
  | "Customized Pure Leather Sofas";

export type ProductSegment = "Value Segment" | "Mid-Range" | "Premium & Luxury";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  segment: ProductSegment;
  shortDescription: string;
  materialOptions: string[];
  image: string;
  customizable: boolean;
  featured?: boolean;
  priceRange?: string;
}

export const ALL_CATEGORIES: ProductCategory[] = [
  "Leather Sofas",
  "Recliner Sofas",
  "Imported Sofa Collections",
  "Beds",
  "Chairs",
  "Accessories",
  "Customized Pure Leather Sofas",
];

export const PRODUCTS: Product[] = [
  // ── Leather Sofas ──────────────────────────────────────────
  {
    id: "cls-001",
    name: "Milano Pure Leather Sofa",
    category: "Leather Sofas",
    segment: "Premium & Luxury",
    shortDescription:
      "Handcrafted in imported certified full-grain leather with deep-button tufting and solid hardwood frame.",
    materialOptions: ["Full-Grain Leather", "Semi-Aniline Leather", "Nubuck"],
    image: "/images/category-seating.png",
    customizable: true,
    featured: true,
    priceRange: "₹1,20,000 – ₹3,00,000",
  },
  {
    id: "cls-002",
    name: "Heritage 3-Seater Leather Sofa",
    category: "Leather Sofas",
    segment: "Mid-Range",
    shortDescription:
      "Classic design with high-density foam seating and genuine leather upholstery. Ideal for homes and offices.",
    materialOptions: ["Genuine Leather", "PU Leather"],
    image: "/images/case-1.png",
    customizable: true,
    featured: true,
    priceRange: "₹55,000 – ₹1,20,000",
  },
  {
    id: "cls-003",
    name: "Comfort Plus Leather Sofa",
    category: "Leather Sofas",
    segment: "Value Segment",
    shortDescription:
      "Durable bonded leather sofa built for everyday comfort. Available in L-shape and 3+2 configurations.",
    materialOptions: ["Bonded Leather", "Leatherette"],
    image: "/images/case-2.png",
    customizable: true,
    priceRange: "₹30,000 – ₹55,000",
  },

  // ── Recliner Sofas ─────────────────────────────────────────
  {
    id: "rec-001",
    name: "Royal Electric Recliner Sofa",
    category: "Recliner Sofas",
    segment: "Premium & Luxury",
    shortDescription:
      "Motorised recliner with USB charging ports, premium leather, and adjustable headrest. Perfect for luxury living rooms.",
    materialOptions: ["Full-Grain Leather", "Fabric"],
    image: "/images/category-seating.png",
    customizable: true,
    featured: true,
    priceRange: "₹85,000 – ₹2,50,000",
  },
  {
    id: "rec-002",
    name: "Relax Pro Manual Recliner",
    category: "Recliner Sofas",
    segment: "Mid-Range",
    shortDescription:
      "Manual recliner sofa in genuine leather with plush cushioning and wide armrests for maximum comfort.",
    materialOptions: ["Genuine Leather", "Fabric"],
    image: "/images/case-3.png",
    customizable: true,
    priceRange: "₹45,000 – ₹85,000",
  },

  // ── Imported Sofa Collections ───────────────────────────────
  {
    id: "imp-001",
    name: "Barcelona Imported Collection",
    category: "Imported Sofa Collections",
    segment: "Premium & Luxury",
    shortDescription:
      "European-inspired sofa collection in certified imported leather with a modern, clean silhouette.",
    materialOptions: ["Imported Certified Leather"],
    image: "/images/lifestyle-contact.png",
    customizable: false,
    featured: true,
    priceRange: "₹1,50,000 – ₹3,00,000",
  },
  {
    id: "imp-002",
    name: "Venezia Modular Sofa",
    category: "Imported Sofa Collections",
    segment: "Premium & Luxury",
    shortDescription:
      "Modular Italian-style sofa with interchangeable sections, available in imported leather and premium fabric.",
    materialOptions: ["Imported Leather", "Premium Fabric"],
    image: "/images/case-1.png",
    customizable: false,
    priceRange: "₹1,20,000 – ₹2,50,000",
  },

  // ── Beds ───────────────────────────────────────────────────
  {
    id: "bed-001",
    name: "Palazzo King Upholstered Bed",
    category: "Beds",
    segment: "Premium & Luxury",
    shortDescription:
      "Upholstered king bed with leather-wrapped headboard, solid wood slats, and custom sizing available.",
    materialOptions: ["Leather", "Velvet", "Fabric"],
    image: "/images/bedroom-new-collection.png",
    customizable: true,
    featured: true,
    priceRange: "₹1,20,000 – ₹1,80,000",
  },
  {
    id: "bed-002",
    name: "Comfort Storage Bed",
    category: "Beds",
    segment: "Mid-Range",
    shortDescription:
      "Queen bed with hydraulic storage base, fabric headboard, and premium mattress support structure.",
    materialOptions: ["Fabric", "Leatherette"],
    image: "/images/bedroom-new-collection.png",
    customizable: true,
    priceRange: "₹65,000 – ₹1,20,000",
  },

  // ── Chairs ─────────────────────────────────────────────────
  {
    id: "chr-001",
    name: "Executive Leather Armchair",
    category: "Chairs",
    segment: "Premium & Luxury",
    shortDescription:
      "Premium leather armchair with solid wood legs and high-resilience foam. Ideal for executive offices and lounges.",
    materialOptions: ["Full-Grain Leather", "Semi-Aniline Leather"],
    image: "/images/product-chair.png",
    customizable: true,
    featured: true,
    priceRange: "₹50,000 – ₹70,000",
  },
  {
    id: "chr-002",
    name: "Accent Lounge Chair",
    category: "Chairs",
    segment: "Mid-Range",
    shortDescription:
      "Stylish accent chair in fabric or leather finish, suitable for living rooms, lobbies, and hotel rooms.",
    materialOptions: ["Fabric", "Genuine Leather"],
    image: "/images/product-chair.png",
    customizable: true,
    priceRange: "₹25,000 – ₹50,000",
  },

  // ── Accessories ────────────────────────────────────────────
  {
    id: "acc-001",
    name: "Premium Ottoman",
    category: "Accessories",
    segment: "Mid-Range",
    shortDescription:
      "Leather or fabric tufted ottoman — perfect as a footrest, accent piece, or extra seating.",
    materialOptions: ["Leather", "Fabric", "Velvet"],
    image: "/images/category-storage.png",
    customizable: true,
    priceRange: "₹15,000 – ₹35,000",
  },

  // ── Customized Pure Leather Sofas ──────────────────────────
  {
    id: "cpls-001",
    name: "Pure Leather L-Shape Custom Sofa",
    category: "Customized Pure Leather Sofas",
    segment: "Premium & Luxury",
    shortDescription:
      "Fully bespoke L-shape sofa in imported pure leather, built precisely to your room dimensions and design.",
    materialOptions: ["Imported Pure Leather", "Full-Grain Leather"],
    image: "/images/category-seating.png",
    customizable: true,
    featured: true,
    priceRange: "₹1,50,000 – ₹3,00,000+",
  },
  {
    id: "cpls-002",
    name: "Custom Leather Chesterfield",
    category: "Customized Pure Leather Sofas",
    segment: "Premium & Luxury",
    shortDescription:
      "Classic Chesterfield design in hand-stitched pure leather. Choose any size, colour, and buttoning pattern.",
    materialOptions: ["Pure Leather", "Aniline Leather"],
    image: "/images/case-3.png",
    customizable: true,
    priceRange: "₹1,20,000 – ₹2,50,000",
  },
];

export const BEST_SELLERS = PRODUCTS.filter((p) => p.featured);
