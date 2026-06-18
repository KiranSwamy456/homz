// -------------------------------------------------------------
//  HomzIndia — Product Catalog Data
// -------------------------------------------------------------

export type ProductCategory = "Lounge Chairs" | "Beds" | "Sofas" | "Recliners" | "Ottomans";

export type ProductSegment = "Value Segment" | "Mid-Range" | "Premium & Luxury";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  subCategory?: string;
  segment: ProductSegment;
  shortDescription: string;
  materialOptions: string[];
  image: string;
  customizable: boolean;
  featured?: boolean;
  priceRange?: string;
}

export const ALL_CATEGORIES: ProductCategory[] = [
  "Lounge Chairs",
  "Beds",
  "Sofas",
  "Recliners",
  "Ottomans"
];

export const PRODUCTS: Product[] = [
  {
    "id": "prod-001",
    "name": "Grey & Black Swivel Lounge Chair",
    "category": "Lounge Chairs",
    "subCategory": "Lounge Chair",
    "segment": "Premium & Luxury",
    "shortDescription": "A sophisticated swivel lounge chair in a striking grey and black contrast, perfect for modern offices and executive suites.",
    "materialOptions": ["Premium Fabric", "Genuine Leather", "Vegan Leather"],
    "image": "/images/products/grey-black-swivel-lounge-chair.jpg",
    "customizable": true,
    "featured": true,
    "priceRange": "₹35,000 — ₹65,000"
  },
  {
    "id": "prod-002",
    "name": "Tan Leather Accent Lounge Chair",
    "category": "Lounge Chairs",
    "subCategory": "Lounge Chair",
    "segment": "Premium & Luxury",
    "shortDescription": "An exquisite tan leather accent chair with deep seating, offering a vintage yet contemporary feel to your living space.",
    "materialOptions": ["Top-Grain Leather", "Aniline Leather"],
    "image": "/images/products/tan-leather-accent-lounge-chair.jpg",
    "customizable": true,
    "featured": true,
    "priceRange": "₹45,000 — ₹85,000"
  },
  {
    "id": "prod-003",
    "name": "Mocha Barrel Lounge Chair",
    "category": "Lounge Chairs",
    "subCategory": "Lounge Chair",
    "segment": "Premium & Luxury",
    "shortDescription": "A plush, barrel-style lounge chair in a warm mocha shade, designed to provide cozy wrap-around comfort.",
    "materialOptions": ["Velvet", "Premium Suede", "Fabric"],
    "image": "/images/products/mocha-barrel-lounge-chair.jpg",
    "customizable": true,
    "featured": true,
    "priceRange": "₹30,000 — ₹55,000"
  },
  {
    "id": "prod-004",
    "name": "Ivory & Rust Swivel Lounge Chair",
    "category": "Lounge Chairs",
    "subCategory": "Lounge Chair",
    "segment": "Premium & Luxury",
    "shortDescription": "Elegant swivel chair featuring a dynamic two-tone ivory and rust design, adding a pop of color and luxury to any room.",
    "materialOptions": ["Premium Fabric", "Velvet"],
    "image": "/images/products/ivory-rust-swivel-lounge-chair.jpg",
    "customizable": true,
    "featured": true,
    "priceRange": "₹38,000 — ₹60,000"
  },
  {
    "id": "prod-005",
    "name": "Teal Executive Lounge Chair",
    "category": "Lounge Chairs",
    "subCategory": "Lounge Chair",
    "segment": "Premium & Luxury",
    "shortDescription": "A statement teal executive chair built with ergonomic precision, ideal for long hours of comfortable seating.",
    "materialOptions": ["Top-Grain Leather", "Premium Fabric"],
    "image": "/images/products/teal-executive-lounge-chair.jpg",
    "customizable": true,
    "featured": true,
    "priceRange": "₹42,000 — ₹75,000"
  },
  {
    "id": "prod-006",
    "name": "White Modern Platform Bed",
    "category": "Beds",
    "subCategory": "Bed",
    "segment": "Premium & Luxury",
    "shortDescription": "A sleek, low-profile white platform bed that brings minimalist elegance and luxury to the master bedroom.",
    "materialOptions": ["Genuine Leather", "Vegan Leather"],
    "image": "/images/products/white-modern-platform-bed.jpg",
    "customizable": true,
    "featured": true,
    "priceRange": "₹85,000 — ₹1,50,000"
  },
  {
    "id": "prod-007",
    "name": "Grey Upholstered Platform Bed",
    "category": "Beds",
    "subCategory": "Bed",
    "segment": "Premium & Luxury",
    "shortDescription": "Featuring a tall, tufted grey headboard, this upholstered bed combines structural durability with unmatched comfort.",
    "materialOptions": ["Premium Fabric", "Velvet"],
    "image": "/images/products/grey-upholstered-platform-bed.jpg",
    "customizable": true,
    "featured": false,
    "priceRange": "₹75,000 — ₹1,35,000"
  },
  {
    "id": "prod-008",
    "name": "Beige Premium Upholstered Bed",
    "category": "Beds",
    "subCategory": "Bed",
    "segment": "Premium & Luxury",
    "shortDescription": "A highly refined beige upholstered bed designed with intricate stitching and an oversized headboard for maximum impact.",
    "materialOptions": ["Premium Fabric", "Suede", "Leatherette"],
    "image": "/images/products/beige-premium-upholstered-bed.jpg",
    "customizable": true,
    "featured": false,
    "priceRange": "₹90,000 — ₹1,80,000"
  },
  {
    "id": "prod-009",
    "name": "Cream Luxury Panel Bed",
    "category": "Beds",
    "subCategory": "Bed",
    "segment": "Premium & Luxury",
    "shortDescription": "Transform your bedroom into a sanctuary with this cream panel bed, boasting luxurious padding and exquisite craftsmanship.",
    "materialOptions": ["Genuine Leather", "Premium Fabric"],
    "image": "/images/products/cream-luxury-panel-bed.jpg",
    "customizable": true,
    "featured": false,
    "priceRange": "₹95,000 — ₹2,00,000"
  },
  {
    "id": "prod-010",
    "name": "Beige Tufted Swivel Lounge Chair",
    "category": "Lounge Chairs",
    "subCategory": "Lounge Chair",
    "segment": "Premium & Luxury",
    "shortDescription": "A beautifully tufted beige lounge chair with a smooth swivel mechanism, blending classic tufting with modern utility.",
    "materialOptions": ["Premium Fabric", "Velvet"],
    "image": "/images/products/beige-tufted-swivel-lounge-chair.jpg",
    "customizable": true,
    "featured": false,
    "priceRange": "₹32,000 — ₹55,000"
  },
  {
    "id": "prod-011",
    "name": "Tan Leather Recliner Lounge Chair",
    "category": "Recliners",
    "subCategory": "Recliner",
    "segment": "Premium & Luxury",
    "shortDescription": "A high-end tan leather recliner that provides exceptional lumbar support and a smooth recline for total relaxation.",
    "materialOptions": ["Top-Grain Leather", "Italian Leather"],
    "image": "/images/products/tan-leather-recliner-lounge-chair.jpg",
    "customizable": true,
    "featured": false,
    "priceRange": "₹55,000 — ₹1,10,000"
  },
  {
    "id": "prod-012",
    "name": "Round Fabric Pouffe Set",
    "category": "Ottomans",
    "subCategory": "Pouffe / Ottoman",
    "segment": "Premium & Luxury",
    "shortDescription": "A versatile set of round fabric pouffes, perfect for extra seating or as an elegant accent piece in any corner.",
    "materialOptions": ["Premium Fabric", "Velvet", "Cotton Blend"],
    "image": "/images/products/round-fabric-pouffe-set.jpg",
    "customizable": true,
    "featured": false,
    "priceRange": "₹12,000 — ₹25,000"
  },
  {
    "id": "prod-013",
    "name": "Grey Fabric Swivel Accent Chair",
    "category": "Lounge Chairs",
    "subCategory": "Lounge Chair",
    "segment": "Premium & Luxury",
    "shortDescription": "A space-saving, modern grey fabric accent chair with a smooth 360-degree swivel base.",
    "materialOptions": ["Premium Fabric", "Linen"],
    "image": "/images/products/grey-fabric-swivel-accent-chair.jpg",
    "customizable": true,
    "featured": false,
    "priceRange": "₹28,000 — ₹48,000"
  },
  {
    "id": "prod-014",
    "name": "Orange Swivel Lounge Chair",
    "category": "Lounge Chairs",
    "subCategory": "Lounge Chair",
    "segment": "Premium & Luxury",
    "shortDescription": "Inject vibrancy into your interiors with this bold orange swivel chair, featuring curved armrests and deep cushioning.",
    "materialOptions": ["Premium Fabric", "Velvet"],
    "image": "/images/products/orange-swivel-lounge-chair.jpg",
    "customizable": true,
    "featured": false,
    "priceRange": "₹34,000 — ₹52,000"
  },
  {
    "id": "prod-015",
    "name": "Mustard Fabric Ottoman Pouffe",
    "category": "Ottomans",
    "subCategory": "Ottoman",
    "segment": "Premium & Luxury",
    "shortDescription": "A striking mustard ottoman that acts as a plush footrest or extra seating, adding a touch of contemporary flair.",
    "materialOptions": ["Premium Fabric", "Velvet"],
    "image": "/images/products/mustard-fabric-ottoman-pouffe.jpg",
    "customizable": true,
    "featured": false,
    "priceRange": "₹15,000 — ₹28,000"
  },
  {
    "id": "prod-016",
    "name": "Grey & Rust Accent Lounge Chair",
    "category": "Lounge Chairs",
    "subCategory": "Lounge Chair",
    "segment": "Premium & Luxury",
    "shortDescription": "A beautifully contoured accent chair blending cool grey and warm rust tones, set on a sleek metal frame.",
    "materialOptions": ["Premium Fabric", "Vegan Leather"],
    "image": "/images/products/grey-rust-accent-lounge-chair.jpg",
    "customizable": true,
    "featured": false,
    "priceRange": "₹35,000 — ₹60,000"
  },
  {
    "id": "prod-017",
    "name": "Modern Grey Living Room Sofa Set",
    "category": "Sofas",
    "subCategory": "Sofa Set",
    "segment": "Premium & Luxury",
    "shortDescription": "A complete, modern grey sofa set tailored with clean lines and deep seats for a sophisticated living room setup.",
    "materialOptions": ["Premium Fabric", "Linen Blend"],
    "image": "/images/products/modern-grey-living-room-sofa-set.jpg",
    "customizable": true,
    "featured": false,
    "priceRange": "₹85,000 — ₹1,60,000"
  },
  {
    "id": "prod-018",
    "name": "Premium Beige Living Room Sofa Set",
    "category": "Sofas",
    "subCategory": "Sofa Set",
    "segment": "Premium & Luxury",
    "shortDescription": "Luxurious beige sofa set featuring overstuffed cushions and a timeless silhouette, ideal for large families.",
    "materialOptions": ["Genuine Leather", "Premium Fabric"],
    "image": "/images/products/premium-beige-living-room-sofa-set.jpg",
    "customizable": true,
    "featured": false,
    "priceRange": "₹1,20,000 — ₹2,50,000"
  },
  {
    "id": "prod-019",
    "name": "Burnt Orange Leather Sofa Set",
    "category": "Sofas",
    "subCategory": "Sofa Set",
    "segment": "Premium & Luxury",
    "shortDescription": "A show-stopping burnt orange leather sofa set that brings warmth, character, and undeniable luxury to your home.",
    "materialOptions": ["Top-Grain Leather", "Italian Leather"],
    "image": "/images/products/burnt-orange-leather-sofa-set.jpg",
    "customizable": true,
    "featured": false,
    "priceRange": "₹1,50,000 — ₹3,20,000"
  },
  {
    "id": "prod-020",
    "name": "Slate Blue Sectional Sofa Set",
    "category": "Sofas",
    "subCategory": "Sectional Sofa",
    "segment": "Premium & Luxury",
    "shortDescription": "A sprawling slate blue sectional sofa designed for ultimate lounging, featuring modular pieces for custom layouts.",
    "materialOptions": ["Premium Fabric", "Velvet"],
    "image": "/images/products/slate-blue-sectional-sofa-set.jpg",
    "customizable": true,
    "featured": false,
    "priceRange": "₹1,10,000 — ₹2,10,000"
  },
  {
    "id": "prod-021",
    "name": "Royal Blue Recliner Sofa Set",
    "category": "Sofas",
    "subCategory": "Recliner Sofa",
    "segment": "Premium & Luxury",
    "shortDescription": "A majestic royal blue recliner sofa set that seamlessly integrates push-back recliners without compromising on style.",
    "materialOptions": ["Genuine Leather", "Vegan Leather"],
    "image": "/images/products/royal-blue-recliner-sofa-set.jpg",
    "customizable": true,
    "featured": false,
    "priceRange": "₹1,40,000 — ₹2,80,000"
  },
  {
    "id": "prod-022",
    "name": "Orange L-Shaped Leather Sectional Sofa",
    "category": "Sofas",
    "subCategory": "L-Shaped Sofa",
    "segment": "Premium & Luxury",
    "shortDescription": "A dynamic orange L-shaped sectional offering expansive seating, wrapped in premium leather for a durable, bold finish.",
    "materialOptions": ["Top-Grain Leather", "Italian Leather"],
    "image": "/images/products/orange-l-shaped-leather-sectional-sofa.jpg",
    "customizable": true,
    "featured": true,
    "priceRange": "₹1,80,000 — ₹3,50,000"
  },
  {
    "id": "prod-023",
    "name": "Mustard Yellow Premium Sofa Set",
    "category": "Sofas",
    "subCategory": "Sofa Set",
    "segment": "Premium & Luxury",
    "shortDescription": "Brighten your space with this mustard yellow premium sofa set, featuring a robust wooden frame and ultra-plush seating.",
    "materialOptions": ["Velvet", "Premium Fabric"],
    "image": "/images/products/mustard-yellow-premium-sofa-set.jpg",
    "customizable": true,
    "featured": false,
    "priceRange": "₹95,000 — ₹1,80,000"
  },
  {
    "id": "prod-024",
    "name": "Grey Recliner Sofa Set",
    "category": "Sofas",
    "subCategory": "Recliner Sofa",
    "segment": "Premium & Luxury",
    "shortDescription": "Enjoy movie nights in absolute comfort with this grey recliner sofa set, equipped with smooth, silent reclining mechanisms.",
    "materialOptions": ["Genuine Leather", "Premium Fabric"],
    "image": "/images/products/grey-recliner-sofa-set.jpg",
    "customizable": true,
    "featured": false,
    "priceRange": "₹1,30,000 — ₹2,40,000"
  },
  {
    "id": "prod-025",
    "name": "Olive Green Living Room Sofa Set",
    "category": "Sofas",
    "subCategory": "Sofa Set",
    "segment": "Premium & Luxury",
    "shortDescription": "Bring a touch of nature indoors with this olive green sofa set, expertly upholstered and designed with elegant, tapered legs.",
    "materialOptions": ["Premium Fabric", "Suede"],
    "image": "/images/products/olive-green-living-room-sofa-set.jpg",
    "customizable": true,
    "featured": false,
    "priceRange": "₹90,000 — ₹1,70,000"
  },
  {
    "id": "prod-026",
    "name": "Ivory L-Shaped Sectional Sofa",
    "category": "Sofas",
    "subCategory": "L-Shaped Sofa",
    "segment": "Premium & Luxury",
    "shortDescription": "A pristine ivory L-shaped sectional that acts as the luxurious centerpiece for expansive, contemporary living spaces.",
    "materialOptions": ["Genuine Leather", "Top-Grain Leather"],
    "image": "/images/products/ivory-l-shaped-sectional-sofa.jpg",
    "customizable": true,
    "featured": false,
    "priceRange": "₹1,60,000 — ₹3,20,000"
  },
  {
    "id": "prod-027",
    "name": "Beige Three-Seater Sofa Set",
    "category": "Sofas",
    "subCategory": "Sofa Set",
    "segment": "Premium & Luxury",
    "shortDescription": "A classic beige three-seater with perfectly proportioned armrests and dense foam cushions for lasting shape and comfort.",
    "materialOptions": ["Premium Fabric", "Linen"],
    "image": "/images/products/beige-three-seater-sofa-set.jpg",
    "customizable": true,
    "featured": false,
    "priceRange": "₹65,000 — ₹1,20,000"
  },
  {
    "id": "prod-028",
    "name": "Olive Grey Premium Sofa Set",
    "category": "Sofas",
    "subCategory": "Sofa Set",
    "segment": "Premium & Luxury",
    "shortDescription": "An understated olive grey sofa set featuring deep tufting and a sturdy hardwood frame for generations of use.",
    "materialOptions": ["Genuine Leather", "Premium Fabric"],
    "image": "/images/products/olive-grey-premium-sofa-set.jpg",
    "customizable": true,
    "featured": false,
    "priceRange": "₹1,10,000 — ₹2,20,000"
  },
  {
    "id": "prod-029",
    "name": "Sage Green Corner Sofa Set",
    "category": "Sofas",
    "subCategory": "Corner Sofa",
    "segment": "Premium & Luxury",
    "shortDescription": "Maximize your room's potential with this sage green corner sofa, offering ample seating and a serene, calming aesthetic.",
    "materialOptions": ["Premium Fabric", "Velvet"],
    "image": "/images/products/sage-green-corner-sofa-set.jpg",
    "customizable": true,
    "featured": false,
    "priceRange": "₹1,25,000 — ₹2,10,000"
  },
  {
    "id": "prod-030",
    "name": "Brown Leather Lounge Sofa Set",
    "category": "Sofas",
    "subCategory": "Sofa Set",
    "segment": "Premium & Luxury",
    "shortDescription": "The quintessential brown leather sofa set, exuding masculine elegance and aging beautifully to develop a unique patina.",
    "materialOptions": ["Top-Grain Leather", "Aniline Leather"],
    "image": "/images/products/brown-leather-lounge-sofa-set.jpg",
    "customizable": true,
    "featured": false,
    "priceRange": "₹1,50,000 — ₹3,00,000"
  }
];

export const BEST_SELLERS = PRODUCTS.filter((p) => p.featured);
