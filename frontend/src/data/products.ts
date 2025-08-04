export interface ProductVariant {
  sku: string;
  color: string;
  size: string;
  price: number;
  inventory_quantity?: number;
}

export interface Product {
  id: string;
  name: string;
  handle: string;
  description: string;
  short_description: string;
  category: string;
  price: number;
  variants: ProductVariant[];
  images?: string[];
  tags?: string[];
  isNew?: boolean;
  isSale?: boolean;
}

export const products: Product[] = [
  // Malika Set - Kanadiya Jilbab Sets
  {
    id: "malika-set",
    name: "Malika Set",
    handle: "malika-set",
    description: "Elegant and modest kanadiya jilbab set with premium fabric and sophisticated design.",
    short_description: "Kanadiya Jilbab Set",
    category: "Jilbabs",
    price: 75,
    isNew: true,
    images: ["/api/placeholder/800/1000?text=Malika+Set"],
    tags: ["modest-fashion", "luxury", "premium-quality", "jilbabs"],
    variants: [
      { sku: "SAG-KAN-MID-50", color: "Midnight Navy", size: "50", price: 75 },
      { sku: "SAG-KAN-MID-52", color: "Midnight Navy", size: "52", price: 75 },
      { sku: "SAG-KAN-MID-54", color: "Midnight Navy", size: "54", price: 75 },
      { sku: "SAG-KAN-MID-56", color: "Midnight Navy", size: "56", price: 75 },
      { sku: "SAG-KAN-MID-58", color: "Midnight Navy", size: "58", price: 75 },
      { sku: "SAG-KAN-MID-60", color: "Midnight Navy", size: "60", price: 75 },
      { sku: "SAG-KAN-DES-50", color: "Desert Sand", size: "50", price: 75 },
      { sku: "SAG-KAN-DES-52", color: "Desert Sand", size: "52", price: 75 },
      { sku: "SAG-KAN-DES-54", color: "Desert Sand", size: "54", price: 75 },
      { sku: "SAG-KAN-DES-56", color: "Desert Sand", size: "56", price: 75 },
      { sku: "SAG-KAN-DES-58", color: "Desert Sand", size: "58", price: 75 },
      { sku: "SAG-KAN-DES-60", color: "Desert Sand", size: "60", price: 75 },
      { sku: "SAG-KAN-FOR-50", color: "Forest Emerald", size: "50", price: 75 },
      { sku: "SAG-KAN-FOR-52", color: "Forest Emerald", size: "52", price: 75 },
      { sku: "SAG-KAN-FOR-54", color: "Forest Emerald", size: "54", price: 75 },
      { sku: "SAG-KAN-FOR-56", color: "Forest Emerald", size: "56", price: 75 },
      { sku: "SAG-KAN-FOR-58", color: "Forest Emerald", size: "58", price: 75 },
      { sku: "SAG-KAN-FOR-60", color: "Forest Emerald", size: "60", price: 75 },
      { sku: "SAG-KAN-CHA-50", color: "Charcoal Mist", size: "50", price: 75 },
      { sku: "SAG-KAN-CHA-52", color: "Charcoal Mist", size: "52", price: 75 },
      { sku: "SAG-KAN-CHA-54", color: "Charcoal Mist", size: "54", price: 75 },
      { sku: "SAG-KAN-CHA-56", color: "Charcoal Mist", size: "56", price: 75 },
      { sku: "SAG-KAN-CHA-58", color: "Charcoal Mist", size: "58", price: 75 },
      { sku: "SAG-KAN-CHA-60", color: "Charcoal Mist", size: "60", price: 75 },
      { sku: "SAG-KAN-MOC-50", color: "Mocha Brown", size: "50", price: 75 },
      { sku: "SAG-KAN-MOC-52", color: "Mocha Brown", size: "52", price: 75 },
      { sku: "SAG-KAN-MOC-54", color: "Mocha Brown", size: "54", price: 75 },
      { sku: "SAG-KAN-MOC-56", color: "Mocha Brown", size: "56", price: 75 },
      { sku: "SAG-KAN-MOC-58", color: "Mocha Brown", size: "58", price: 75 },
      { sku: "SAG-KAN-MOC-60", color: "Mocha Brown", size: "60", price: 75 },
      { sku: "SAG-KAN-CLA-50", color: "Classic Black", size: "50", price: 75 },
      { sku: "SAG-KAN-CLA-52", color: "Classic Black", size: "52", price: 75 },
      { sku: "SAG-KAN-CLA-54", color: "Classic Black", size: "54", price: 75 },
      { sku: "SAG-KAN-CLA-56", color: "Classic Black", size: "56", price: 75 },
      { sku: "SAG-KAN-CLA-58", color: "Classic Black", size: "58", price: 75 },
      { sku: "SAG-KAN-CLA-60", color: "Classic Black", size: "60", price: 75 },
    ]
  },
  // Sundus - One-Piece Jilbabs
  {
    id: "sundus",
    name: "Sundus",
    handle: "sundus",
    description: "Elegant and modest one-piece jilbab with sophisticated design and premium comfort.",
    short_description: "One-Piece Jilbab",
    category: "Jilbabs",
    price: 75,
    images: ["/api/placeholder/800/1000?text=Sundus"],
    tags: ["modest-fashion", "luxury", "premium-quality", "jilbabs"],
    variants: [
      { sku: "SAG-JLB-MID-50", color: "Midnight Navy", size: "50", price: 75 },
      { sku: "SAG-JLB-MID-52", color: "Midnight Navy", size: "52", price: 75 },
      { sku: "SAG-JLB-MID-54", color: "Midnight Navy", size: "54", price: 75 },
      { sku: "SAG-JLB-MID-56", color: "Midnight Navy", size: "56", price: 75 },
      { sku: "SAG-JLB-MID-58", color: "Midnight Navy", size: "58", price: 75 },
      { sku: "SAG-JLB-MID-60", color: "Midnight Navy", size: "60", price: 75 },
      { sku: "SAG-JLB-DES-50", color: "Desert Sand", size: "50", price: 75 },
      { sku: "SAG-JLB-DES-52", color: "Desert Sand", size: "52", price: 75 },
      { sku: "SAG-JLB-DES-54", color: "Desert Sand", size: "54", price: 75 },
      { sku: "SAG-JLB-DES-56", color: "Desert Sand", size: "56", price: 75 },
      { sku: "SAG-JLB-DES-58", color: "Desert Sand", size: "58", price: 75 },
      { sku: "SAG-JLB-DES-60", color: "Desert Sand", size: "60", price: 75 },
      { sku: "SAG-JLB-FOR-50", color: "Forest Emerald", size: "50", price: 75 },
      { sku: "SAG-JLB-FOR-52", color: "Forest Emerald", size: "52", price: 75 },
      { sku: "SAG-JLB-FOR-54", color: "Forest Emerald", size: "54", price: 75 },
      { sku: "SAG-JLB-FOR-56", color: "Forest Emerald", size: "56", price: 75 },
      { sku: "SAG-JLB-FOR-58", color: "Forest Emerald", size: "58", price: 75 },
      { sku: "SAG-JLB-FOR-60", color: "Forest Emerald", size: "60", price: 75 },
      { sku: "SAG-JLB-CHA-50", color: "Charcoal Mist", size: "50", price: 75 },
      { sku: "SAG-JLB-CHA-52", color: "Charcoal Mist", size: "52", price: 75 },
      { sku: "SAG-JLB-CHA-54", color: "Charcoal Mist", size: "54", price: 75 },
      { sku: "SAG-JLB-CHA-56", color: "Charcoal Mist", size: "56", price: 75 },
      { sku: "SAG-JLB-CHA-58", color: "Charcoal Mist", size: "58", price: 75 },
      { sku: "SAG-JLB-CHA-60", color: "Charcoal Mist", size: "60", price: 75 },
      { sku: "SAG-JLB-MOC-50", color: "Mocha Brown", size: "50", price: 75 },
      { sku: "SAG-JLB-MOC-52", color: "Mocha Brown", size: "52", price: 75 },
      { sku: "SAG-JLB-MOC-54", color: "Mocha Brown", size: "54", price: 75 },
      { sku: "SAG-JLB-MOC-56", color: "Mocha Brown", size: "56", price: 75 },
      { sku: "SAG-JLB-MOC-58", color: "Mocha Brown", size: "58", price: 75 },
      { sku: "SAG-JLB-MOC-60", color: "Mocha Brown", size: "60", price: 75 },
      { sku: "SAG-JLB-CLA-50", color: "Classic Black", size: "50", price: 75 },
      { sku: "SAG-JLB-CLA-52", color: "Classic Black", size: "52", price: 75 },
      { sku: "SAG-JLB-CLA-54", color: "Classic Black", size: "54", price: 75 },
      { sku: "SAG-JLB-CLA-56", color: "Classic Black", size: "56", price: 75 },
      { sku: "SAG-JLB-CLA-58", color: "Classic Black", size: "58", price: 75 },
      { sku: "SAG-JLB-CLA-60", color: "Classic Black", size: "60", price: 75 },
    ]
  },
  // Farida Set - Two-Piece Jilbabs with Zip
  {
    id: "farida-set",
    name: "Farida Set",
    handle: "farida-set",
    description: "Elegant and modest two-piece jilbab with zip closure for enhanced convenience and style.",
    short_description: "Two-Piece Jilbab with Zip",
    category: "Jilbabs",
    price: 75,
    images: ["/api/placeholder/800/1000?text=Farida+Set"],
    tags: ["modest-fashion", "luxury", "premium-quality", "jilbabs"],
    variants: [
      { sku: "SAG-ZIP-MID-50", color: "Midnight Navy", size: "50", price: 75 },
      { sku: "SAG-ZIP-MID-52", color: "Midnight Navy", size: "52", price: 75 },
      { sku: "SAG-ZIP-MID-54", color: "Midnight Navy", size: "54", price: 75 },
      { sku: "SAG-ZIP-MID-56", color: "Midnight Navy", size: "56", price: 75 },
      { sku: "SAG-ZIP-MID-58", color: "Midnight Navy", size: "58", price: 75 },
      { sku: "SAG-ZIP-MID-60", color: "Midnight Navy", size: "60", price: 75 },
      { sku: "SAG-ZIP-DES-50", color: "Desert Sand", size: "50", price: 75 },
      { sku: "SAG-ZIP-DES-52", color: "Desert Sand", size: "52", price: 75 },
      { sku: "SAG-ZIP-DES-54", color: "Desert Sand", size: "54", price: 75 },
      { sku: "SAG-ZIP-DES-56", color: "Desert Sand", size: "56", price: 75 },
      { sku: "SAG-ZIP-DES-58", color: "Desert Sand", size: "58", price: 75 },
      { sku: "SAG-ZIP-DES-60", color: "Desert Sand", size: "60", price: 75 },
      { sku: "SAG-ZIP-FOR-50", color: "Forest Emerald", size: "50", price: 75 },
      { sku: "SAG-ZIP-FOR-52", color: "Forest Emerald", size: "52", price: 75 },
      { sku: "SAG-ZIP-FOR-54", color: "Forest Emerald", size: "54", price: 75 },
      { sku: "SAG-ZIP-FOR-56", color: "Forest Emerald", size: "56", price: 75 },
      { sku: "SAG-ZIP-FOR-58", color: "Forest Emerald", size: "58", price: 75 },
      { sku: "SAG-ZIP-FOR-60", color: "Forest Emerald", size: "60", price: 75 },
      { sku: "SAG-ZIP-CHA-50", color: "Charcoal Mist", size: "50", price: 75 },
      { sku: "SAG-ZIP-CHA-52", color: "Charcoal Mist", size: "52", price: 75 },
      { sku: "SAG-ZIP-CHA-54", color: "Charcoal Mist", size: "54", price: 75 },
      { sku: "SAG-ZIP-CHA-56", color: "Charcoal Mist", size: "56", price: 75 },
      { sku: "SAG-ZIP-CHA-58", color: "Charcoal Mist", size: "58", price: 75 },
      { sku: "SAG-ZIP-CHA-60", color: "Charcoal Mist", size: "60", price: 75 },
      { sku: "SAG-ZIP-MOC-50", color: "Mocha Brown", size: "50", price: 75 },
      { sku: "SAG-ZIP-MOC-52", color: "Mocha Brown", size: "52", price: 75 },
      { sku: "SAG-ZIP-MOC-54", color: "Mocha Brown", size: "54", price: 75 },
      { sku: "SAG-ZIP-MOC-56", color: "Mocha Brown", size: "56", price: 75 },
      { sku: "SAG-ZIP-MOC-58", color: "Mocha Brown", size: "58", price: 75 },
      { sku: "SAG-ZIP-MOC-60", color: "Mocha Brown", size: "60", price: 75 },
      { sku: "SAG-ZIP-CLA-50", color: "Classic Black", size: "50", price: 75 },
      { sku: "SAG-ZIP-CLA-52", color: "Classic Black", size: "52", price: 75 },
      { sku: "SAG-ZIP-CLA-54", color: "Classic Black", size: "54", price: 75 },
      { sku: "SAG-ZIP-CLA-56", color: "Classic Black", size: "56", price: 75 },
      { sku: "SAG-ZIP-CLA-58", color: "Classic Black", size: "58", price: 75 },
      { sku: "SAG-ZIP-CLA-60", color: "Classic Black", size: "60", price: 75 },
    ]
  },
  // Kenza Set - Children's Kanadiya
  {
    id: "kenza-set",
    name: "Kenza Set",
    handle: "kenza-set",
    description: "Elegant and modest kanadiya designed specifically for children with comfort and style in mind.",
    short_description: "Kanadiya for Children",
    category: "Jilbabs",
    price: 75,
    images: ["/api/placeholder/800/1000?text=Kenza+Set"],
    tags: ["modest-fashion", "luxury", "premium-quality", "jilbabs", "children"],
    variants: [
      { sku: "SAG-KID-MID-38", color: "Midnight Navy", size: "38", price: 75 },
      { sku: "SAG-KID-MID-40", color: "Midnight Navy", size: "40", price: 75 },
      { sku: "SAG-KID-MID-42", color: "Midnight Navy", size: "42", price: 75 },
      { sku: "SAG-KID-MID-44", color: "Midnight Navy", size: "44", price: 75 },
      { sku: "SAG-KID-MID-46", color: "Midnight Navy", size: "46", price: 75 },
      { sku: "SAG-KID-DES-38", color: "Desert Sand", size: "38", price: 75 },
      { sku: "SAG-KID-DES-40", color: "Desert Sand", size: "40", price: 75 },
      { sku: "SAG-KID-DES-42", color: "Desert Sand", size: "42", price: 75 },
      { sku: "SAG-KID-DES-44", color: "Desert Sand", size: "44", price: 75 },
      { sku: "SAG-KID-DES-46", color: "Desert Sand", size: "46", price: 75 },
      { sku: "SAG-KID-FOR-38", color: "Forest Emerald", size: "38", price: 75 },
      { sku: "SAG-KID-FOR-40", color: "Forest Emerald", size: "40", price: 75 },
      { sku: "SAG-KID-FOR-42", color: "Forest Emerald", size: "42", price: 75 },
      { sku: "SAG-KID-FOR-44", color: "Forest Emerald", size: "44", price: 75 },
      { sku: "SAG-KID-FOR-46", color: "Forest Emerald", size: "46", price: 75 },
      { sku: "SAG-KID-CHA-38", color: "Charcoal Mist", size: "38", price: 75 },
      { sku: "SAG-KID-CHA-40", color: "Charcoal Mist", size: "40", price: 75 },
      { sku: "SAG-KID-CHA-42", color: "Charcoal Mist", size: "42", price: 75 },
      { sku: "SAG-KID-CHA-44", color: "Charcoal Mist", size: "44", price: 75 },
      { sku: "SAG-KID-CHA-46", color: "Charcoal Mist", size: "46", price: 75 },
      { sku: "SAG-KID-MOC-38", color: "Mocha Brown", size: "38", price: 75 },
      { sku: "SAG-KID-MOC-40", color: "Mocha Brown", size: "40", price: 75 },
      { sku: "SAG-KID-MOC-42", color: "Mocha Brown", size: "42", price: 75 },
      { sku: "SAG-KID-MOC-44", color: "Mocha Brown", size: "44", price: 75 },
      { sku: "SAG-KID-MOC-46", color: "Mocha Brown", size: "46", price: 75 },
      { sku: "SAG-KID-CLA-38", color: "Classic Black", size: "38", price: 75 },
      { sku: "SAG-KID-CLA-40", color: "Classic Black", size: "40", price: 75 },
      { sku: "SAG-KID-CLA-42", color: "Classic Black", size: "42", price: 75 },
      { sku: "SAG-KID-CLA-44", color: "Classic Black", size: "44", price: 75 },
      { sku: "SAG-KID-CLA-46", color: "Classic Black", size: "46", price: 75 },
    ]
  },
  // Accessories
  {
    id: "lamees-gloves",
    name: "Lamees Gloves",
    handle: "lamees-gloves",
    description: "Elegant and modest ladies' gloves crafted with premium materials for comfort and style.",
    short_description: "Ladies' Gloves",
    category: "Accessories",
    price: 20,
    images: ["/api/placeholder/800/1000?text=Lamees+Gloves"],
    tags: ["modest-fashion", "luxury", "premium-quality", "accessories"],
    variants: [
      { sku: "SAG-GLV-BLA-50", color: "Black", size: "50", price: 20 },
      { sku: "SAG-GLV-BLA-52", color: "Black", size: "52", price: 20 },
      { sku: "SAG-GLV-BLA-54", color: "Black", size: "54", price: 20 },
      { sku: "SAG-GLV-BLA-56", color: "Black", size: "56", price: 20 },
      { sku: "SAG-GLV-BLA-58", color: "Black", size: "58", price: 20 },
      { sku: "SAG-GLV-BLA-60", color: "Black", size: "60", price: 20 },
    ]
  },
  {
    id: "layla-niqab",
    name: "Layla Niqab",
    handle: "layla-niqab",
    description: "Elegant and modest three-piece niqab designed for comfort and complete coverage.",
    short_description: "Three-Piece Niqab",
    category: "Accessories",
    price: 20,
    images: ["/api/placeholder/800/1000?text=Layla+Niqab"],
    tags: ["modest-fashion", "luxury", "premium-quality", "accessories"],
    variants: [
      { sku: "SAG-NIQ-BLA-50", color: "Black", size: "50", price: 20 },
      { sku: "SAG-NIQ-BLA-52", color: "Black", size: "52", price: 20 },
      { sku: "SAG-NIQ-BLA-54", color: "Black", size: "54", price: 20 },
      { sku: "SAG-NIQ-BLA-56", color: "Black", size: "56", price: 20 },
      { sku: "SAG-NIQ-BLA-58", color: "Black", size: "58", price: 20 },
      { sku: "SAG-NIQ-BLA-60", color: "Black", size: "60", price: 20 },
    ]
  },
  {
    id: "sakina-khimar",
    name: "Sakina Khimar",
    handle: "sakina-khimar",
    description: "Elegant and modest stand-alone khimar perfect for layering or wearing independently.",
    short_description: "Stand-Alone Khimar",
    category: "Accessories",
    price: 20,
    images: ["/api/placeholder/800/1000?text=Sakina+Khimar"],
    tags: ["modest-fashion", "luxury", "premium-quality", "accessories"],
    variants: [
      { sku: "SAG-KMR-MID-50", color: "Midnight Navy", size: "50", price: 20 },
      { sku: "SAG-KMR-MID-52", color: "Midnight Navy", size: "52", price: 20 },
      { sku: "SAG-KMR-MID-54", color: "Midnight Navy", size: "54", price: 20 },
      { sku: "SAG-KMR-MID-56", color: "Midnight Navy", size: "56", price: 20 },
      { sku: "SAG-KMR-MID-58", color: "Midnight Navy", size: "58", price: 20 },
      { sku: "SAG-KMR-MID-60", color: "Midnight Navy", size: "60", price: 20 },
      { sku: "SAG-KMR-DES-50", color: "Desert Sand", size: "50", price: 20 },
      { sku: "SAG-KMR-DES-52", color: "Desert Sand", size: "52", price: 20 },
      { sku: "SAG-KMR-DES-54", color: "Desert Sand", size: "54", price: 20 },
      { sku: "SAG-KMR-DES-56", color: "Desert Sand", size: "56", price: 20 },
      { sku: "SAG-KMR-DES-58", color: "Desert Sand", size: "58", price: 20 },
      { sku: "SAG-KMR-DES-60", color: "Desert Sand", size: "60", price: 20 },
      { sku: "SAG-KMR-FOR-50", color: "Forest Emerald", size: "50", price: 20 },
      { sku: "SAG-KMR-FOR-52", color: "Forest Emerald", size: "52", price: 20 },
      { sku: "SAG-KMR-FOR-54", color: "Forest Emerald", size: "54", price: 20 },
      { sku: "SAG-KMR-FOR-56", color: "Forest Emerald", size: "56", price: 20 },
      { sku: "SAG-KMR-FOR-58", color: "Forest Emerald", size: "58", price: 20 },
      { sku: "SAG-KMR-FOR-60", color: "Forest Emerald", size: "60", price: 20 },
      { sku: "SAG-KMR-CHA-50", color: "Charcoal Mist", size: "50", price: 20 },
      { sku: "SAG-KMR-CHA-52", color: "Charcoal Mist", size: "52", price: 20 },
      { sku: "SAG-KMR-CHA-54", color: "Charcoal Mist", size: "54", price: 20 },
      { sku: "SAG-KMR-CHA-56", color: "Charcoal Mist", size: "56", price: 20 },
      { sku: "SAG-KMR-CHA-58", color: "Charcoal Mist", size: "58", price: 20 },
      { sku: "SAG-KMR-CHA-60", color: "Charcoal Mist", size: "60", price: 20 },
      { sku: "SAG-KMR-MOC-50", color: "Mocha Brown", size: "50", price: 20 },
      { sku: "SAG-KMR-MOC-52", color: "Mocha Brown", size: "52", price: 20 },
      { sku: "SAG-KMR-MOC-54", color: "Mocha Brown", size: "54", price: 20 },
      { sku: "SAG-KMR-MOC-56", color: "Mocha Brown", size: "56", price: 20 },
      { sku: "SAG-KMR-MOC-58", color: "Mocha Brown", size: "58", price: 20 },
      { sku: "SAG-KMR-MOC-60", color: "Mocha Brown", size: "60", price: 20 },
      { sku: "SAG-KMR-CLA-50", color: "Classic Black", size: "50", price: 20 },
      { sku: "SAG-KMR-CLA-52", color: "Classic Black", size: "52", price: 20 },
      { sku: "SAG-KMR-CLA-54", color: "Classic Black", size: "54", price: 20 },
      { sku: "SAG-KMR-CLA-56", color: "Classic Black", size: "56", price: 20 },
      { sku: "SAG-KMR-CLA-58", color: "Classic Black", size: "58", price: 20 },
      { sku: "SAG-KMR-CLA-60", color: "Classic Black", size: "60", price: 20 },
    ]
  },
  {
    id: "zaina-skirt",
    name: "Zaina Skirt",
    handle: "zaina-skirt",
    description: "Elegant and modest stand-alone skirt perfect for layering with any jilbab or abaya.",
    short_description: "Stand-Alone Skirt",
    category: "Accessories",
    price: 20,
    images: ["/api/placeholder/800/1000?text=Zaina+Skirt"],
    tags: ["modest-fashion", "luxury", "premium-quality", "accessories"],
    variants: [
      { sku: "SAG-SKT-MID-50", color: "Midnight Navy", size: "50", price: 20 },
      { sku: "SAG-SKT-MID-52", color: "Midnight Navy", size: "52", price: 20 },
      { sku: "SAG-SKT-MID-54", color: "Midnight Navy", size: "54", price: 20 },
      { sku: "SAG-SKT-MID-56", color: "Midnight Navy", size: "56", price: 20 },
      { sku: "SAG-SKT-MID-58", color: "Midnight Navy", size: "58", price: 20 },
      { sku: "SAG-SKT-MID-60", color: "Midnight Navy", size: "60", price: 20 },
      { sku: "SAG-SKT-DES-50", color: "Desert Sand", size: "50", price: 20 },
      { sku: "SAG-SKT-DES-52", color: "Desert Sand", size: "52", price: 20 },
      { sku: "SAG-SKT-DES-54", color: "Desert Sand", size: "54", price: 20 },
      { sku: "SAG-SKT-DES-56", color: "Desert Sand", size: "56", price: 20 },
      { sku: "SAG-SKT-DES-58", color: "Desert Sand", size: "58", price: 20 },
      { sku: "SAG-SKT-DES-60", color: "Desert Sand", size: "60", price: 20 },
      { sku: "SAG-SKT-FOR-50", color: "Forest Emerald", size: "50", price: 20 },
      { sku: "SAG-SKT-FOR-52", color: "Forest Emerald", size: "52", price: 20 },
      { sku: "SAG-SKT-FOR-54", color: "Forest Emerald", size: "54", price: 20 },
      { sku: "SAG-SKT-FOR-56", color: "Forest Emerald", size: "56", price: 20 },
      { sku: "SAG-SKT-FOR-58", color: "Forest Emerald", size: "58", price: 20 },
      { sku: "SAG-SKT-FOR-60", color: "Forest Emerald", size: "60", price: 20 },
      { sku: "SAG-SKT-CHA-50", color: "Charcoal Mist", size: "50", price: 20 },
      { sku: "SAG-SKT-CHA-52", color: "Charcoal Mist", size: "52", price: 20 },
      { sku: "SAG-SKT-CHA-54", color: "Charcoal Mist", size: "54", price: 20 },
      { sku: "SAG-SKT-CHA-56", color: "Charcoal Mist", size: "56", price: 20 },
      { sku: "SAG-SKT-CHA-58", color: "Charcoal Mist", size: "58", price: 20 },
      { sku: "SAG-SKT-CHA-60", color: "Charcoal Mist", size: "60", price: 20 },
      { sku: "SAG-SKT-MOC-50", color: "Mocha Brown", size: "50", price: 20 },
      { sku: "SAG-SKT-MOC-52", color: "Mocha Brown", size: "52", price: 20 },
      { sku: "SAG-SKT-MOC-54", color: "Mocha Brown", size: "54", price: 20 },
      { sku: "SAG-SKT-MOC-56", color: "Mocha Brown", size: "56", price: 20 },
      { sku: "SAG-SKT-MOC-58", color: "Mocha Brown", size: "58", price: 20 },
      { sku: "SAG-SKT-MOC-60", color: "Mocha Brown", size: "60", price: 20 },
      { sku: "SAG-SKT-CLA-50", color: "Classic Black", size: "50", price: 20 },
      { sku: "SAG-SKT-CLA-52", color: "Classic Black", size: "52", price: 20 },
      { sku: "SAG-SKT-CLA-54", color: "Classic Black", size: "54", price: 20 },
      { sku: "SAG-SKT-CLA-56", color: "Classic Black", size: "56", price: 20 },
      { sku: "SAG-SKT-CLA-58", color: "Classic Black", size: "58", price: 20 },
      { sku: "SAG-SKT-CLA-60", color: "Classic Black", size: "60", price: 20 },
    ]
  }
]

// Utility functions
export const getProductByHandle = (handle: string): Product | undefined => {
  return products.find(product => product.handle === handle)
}

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category.toLowerCase() === category.toLowerCase())
}

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew)
}

export const getSaleProducts = (): Product[] => {
  return products.filter(product => product.isSale)
}

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 8) // Return first 8 products as featured
}

export const getAllProducts = (): Product[] => {
  return products
}

export const getProductVariants = (productId: string): ProductVariant[] => {
  const product = products.find(p => p.id === productId)
  return product?.variants || []
}

export const getProductVariant = (productId: string, color: string, size: string): ProductVariant | undefined => {
  const product = products.find(p => p.id === productId)
  return product?.variants.find(v => v.color === color && v.size === size)
}

// Color and size options
export const colors = [
  "Midnight Navy",
  "Desert Sand", 
  "Forest Emerald",
  "Charcoal Mist",
  "Mocha Brown",
  "Classic Black"
]

export const sizes = [
  "38", "40", "42", "44", "46", "50", "52", "54", "56", "58", "60"
]

export const categories = [
  "Jilbabs",
  "Accessories"
] 