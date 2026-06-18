const fs = require('fs');
const path = require('path');

const mapping = [
  { oldName: "Furniture 1-01", newName: "Grey & Black Swivel Lounge Chair", category: "Lounge Chairs", subCategory: "Lounge Chair" },
  { oldName: "Furniture 1-02", newName: "Tan Leather Accent Lounge Chair", category: "Lounge Chairs", subCategory: "Lounge Chair" },
  { oldName: "Furniture 1-03", newName: "Mocha Barrel Lounge Chair", category: "Lounge Chairs", subCategory: "Lounge Chair" },
  { oldName: "Furniture 1-04", newName: "Ivory & Rust Swivel Lounge Chair", category: "Lounge Chairs", subCategory: "Lounge Chair" },
  { oldName: "Furniture 1-05", newName: "Teal Executive Lounge Chair", category: "Lounge Chairs", subCategory: "Lounge Chair" },
  { oldName: "Furniture 1-06", newName: "White Modern Platform Bed", category: "Beds", subCategory: "Bed" },
  { oldName: "Furniture 1-07", newName: "Grey Upholstered Platform Bed", category: "Beds", subCategory: "Bed" },
  { oldName: "Furniture 1-08", newName: "Beige Premium Upholstered Bed", category: "Beds", subCategory: "Bed" },
  { oldName: "Furniture 1-09", newName: "Cream Luxury Panel Bed", category: "Beds", subCategory: "Bed" },
  { oldName: "Furniture 1-10", newName: "Beige Tufted Swivel Lounge Chair", category: "Lounge Chairs", subCategory: "Lounge Chair" },
  { oldName: "Furniture 1-11", newName: "Tan Leather Recliner Lounge Chair", category: "Recliners", subCategory: "Recliner" },
  { oldName: "Furniture 1-12", newName: "Round Fabric Pouffe Set", category: "Ottomans", subCategory: "Pouffe / Ottoman" },
  { oldName: "Furniture 1-13", newName: "Grey Fabric Swivel Accent Chair", category: "Lounge Chairs", subCategory: "Lounge Chair" },
  { oldName: "Furniture 1-14", newName: "Orange Swivel Lounge Chair", category: "Lounge Chairs", subCategory: "Lounge Chair" },
  { oldName: "Furniture 1-15", newName: "Mustard Fabric Ottoman Pouffe", category: "Ottomans", subCategory: "Ottoman" },
  { oldName: "Furniture 1-16", newName: "Grey & Rust Accent Lounge Chair", category: "Lounge Chairs", subCategory: "Lounge Chair" },
  { oldName: "Furniture 2-01", newName: "Modern Grey Living Room Sofa Set", category: "Sofas", subCategory: "Sofa Set" },
  { oldName: "Furniture 2-02", newName: "Premium Beige Living Room Sofa Set", category: "Sofas", subCategory: "Sofa Set" },
  { oldName: "Furniture 2-03", newName: "Burnt Orange Leather Sofa Set", category: "Sofas", subCategory: "Sofa Set" },
  { oldName: "Furniture 2-04", newName: "Slate Blue Sectional Sofa Set", category: "Sofas", subCategory: "Sectional Sofa" },
  { oldName: "Furniture 2-05", newName: "Royal Blue Recliner Sofa Set", category: "Sofas", subCategory: "Recliner Sofa" },
  { oldName: "Furniture 2-06", newName: "Orange L-Shaped Leather Sectional Sofa", category: "Sofas", subCategory: "L-Shaped Sofa" },
  { oldName: "Furniture 2-07", newName: "Mustard Yellow Premium Sofa Set", category: "Sofas", subCategory: "Sofa Set" },
  { oldName: "Furniture 2-08", newName: "Grey Recliner Sofa Set", category: "Sofas", subCategory: "Recliner Sofa" },
  { oldName: "Furniture 2-09", newName: "Olive Green Living Room Sofa Set", category: "Sofas", subCategory: "Sofa Set" },
  { oldName: "Furniture 2-10", newName: "Ivory L-Shaped Sectional Sofa", category: "Sofas", subCategory: "L-Shaped Sofa" },
  { oldName: "Furniture 2-11", newName: "Beige Three-Seater Sofa Set", category: "Sofas", subCategory: "Sofa Set" },
  { oldName: "Furniture 2-12", newName: "Olive Grey Premium Sofa Set", category: "Sofas", subCategory: "Sofa Set" },
  { oldName: "Furniture 2-13", newName: "Sage Green Corner Sofa Set", category: "Sofas", subCategory: "Corner Sofa" },
  { oldName: "Furniture 2-14", newName: "Brown Leather Lounge Sofa Set", category: "Sofas", subCategory: "Sofa Set" },
];

const destDir = path.join(__dirname, 'public/images/products');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const productsOutput = [];

mapping.forEach((item, index) => {
  const oldPath = path.join(__dirname, 'public/furnitures', `${item.oldName}.jpg`);
  const slug = slugify(item.newName);
  const newFilename = `${slug}.jpg`;
  const newPath = path.join(destDir, newFilename);

  if (fs.existsSync(oldPath)) {
    fs.copyFileSync(oldPath, newPath);
  } else {
    console.log("Missing:", oldPath);
  }

  productsOutput.push({
    id: `prod-${(index + 1).toString().padStart(3, '0')}`,
    name: item.newName,
    category: item.category,
    subCategory: item.subCategory,
    segment: "Premium & Luxury",
    shortDescription: `Experience ultimate comfort and style with our ${item.newName}.`,
    materialOptions: ["Premium Fabric", "Genuine Leather"],
    image: `/images/products/${newFilename}`,
    customizable: true,
    featured: index < 6, // feature first 6 products
    priceRange: "?45,000 – ?1,20,000",
  });
});

const tsContent = `// -------------------------------------------------------------
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

export const PRODUCTS: Product[] = ${JSON.stringify(productsOutput, null, 2)};

export const BEST_SELLERS = PRODUCTS.filter((p) => p.featured);
`;

fs.writeFileSync(path.join(__dirname, 'lib/data/products.ts'), tsContent, 'utf8');
console.log("Migration complete!");
