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
    priceRange: "",
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
    priceRange: "",
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
    priceRange: "",
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
    priceRange: "",
  },
  {
    id: "rec-002",
    name: "Relax Pro Manual Recliner",
    category: "Recliner Sofas",
    segment: "Mid-Range",
    shortDescription:
      "Manual recliner sofa in genuine leather with plush cushioning and wide armrests for maximum comfort.",
    materialOptions: ["Genuine Leather", "Fabric"],
    image: "/images/Manual-Recliner.png",
    customizable: true,
    priceRange: "",
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
    image: "/images/Imported.png",
    customizable: false,
    featured: true,
    priceRange: "",
  },
  {
    id: "imp-002",
    name: "Venezia Modular Sofa",
    category: "Imported Sofa Collections",
    segment: "Premium & Luxury",
    shortDescription:
      "Modular Italian-style sofa with interchangeable sections, available in imported leather and premium fabric.",
    materialOptions: ["Imported Leather", "Premium Fabric"],
    image: "/images/Modular.png",
    customizable: false,
    priceRange: "",
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
    image: "/images/Upholstered.png",
    customizable: true,
    featured: true,
    priceRange: "",
  },
  {
    id: "bed-002",
    name: "Comfort Storage Bed",
    category: "Beds",
    segment: "Mid-Range",
    shortDescription:
      "Queen bed with hydraulic storage base, fabric headboard, and premium mattress support structure.",
    materialOptions: ["Fabric", "Leatherette"],
    image: "/images/storage.png",
    customizable: true,
    priceRange: "",
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
    image: "/images/Leather.png",
    customizable: true,
    featured: true,
    priceRange: "",
  },
  {
    id: "chr-002",
    name: "Accent Lounge Chair",
    category: "Chairs",
    segment: "Mid-Range",
    shortDescription:
      "Stylish accent chair in fabric or leather finish, suitable for living rooms, lobbies, and hotel rooms.",
    materialOptions: ["Fabric", "Genuine Leather"],
    image: "/images/Lounge.png",
    customizable: true,
    priceRange: "",
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
    priceRange: "",
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
    priceRange: "",
  },
  {
    id: "cpls-002",
    name: "Custom Leather Chesterfield",
    category: "Customized Pure Leather Sofas",
    segment: "Premium & Luxury",
    shortDescription:
      "Classic Chesterfield design in hand-stitched pure leather. Choose any size, colour, and buttoning pattern.",
    materialOptions: ["Pure Leather", "Aniline Leather"],
    image: "/images/Chesterfield.png",
    customizable: true,
    priceRange: "",
  },
];

export const BEST_SELLERS = PRODUCTS.filter((p) => p.featured);
