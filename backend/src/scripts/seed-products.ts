import { 
  ProductService, 
  ProductVariantService, 
  ProductOptionService,
  ProductCategoryService,
  RegionService,
  CurrencyService
} from "@medusajs/medusa"
import { 
  ProductStatus, 
  ProductVariantStatus 
} from "@medusajs/medusa/dist/models/product"

const products = [
  // Malika Set - Kanadiya Jilbab Sets
  {
    name: "Malika Set",
    handle: "malika-set",
    description: "Elegant and modest kanadiya jilbab set with premium fabric and sophisticated design.",
    short_description: "Kanadiya Jilbab Set",
    category: "Jilbabs",
    price: 7500, // $75.00 in cents
    variants: [
      { sku: "SAG-KAN-MID-50", color: "Midnight Navy", size: "50" },
      { sku: "SAG-KAN-MID-52", color: "Midnight Navy", size: "52" },
      { sku: "SAG-KAN-MID-54", color: "Midnight Navy", size: "54" },
      { sku: "SAG-KAN-MID-56", color: "Midnight Navy", size: "56" },
      { sku: "SAG-KAN-MID-58", color: "Midnight Navy", size: "58" },
      { sku: "SAG-KAN-MID-60", color: "Midnight Navy", size: "60" },
      { sku: "SAG-KAN-DES-50", color: "Desert Sand", size: "50" },
      { sku: "SAG-KAN-DES-52", color: "Desert Sand", size: "52" },
      { sku: "SAG-KAN-DES-54", color: "Desert Sand", size: "54" },
      { sku: "SAG-KAN-DES-56", color: "Desert Sand", size: "56" },
      { sku: "SAG-KAN-DES-58", color: "Desert Sand", size: "58" },
      { sku: "SAG-KAN-DES-60", color: "Desert Sand", size: "60" },
      { sku: "SAG-KAN-FOR-50", color: "Forest Emerald", size: "50" },
      { sku: "SAG-KAN-FOR-52", color: "Forest Emerald", size: "52" },
      { sku: "SAG-KAN-FOR-54", color: "Forest Emerald", size: "54" },
      { sku: "SAG-KAN-FOR-56", color: "Forest Emerald", size: "56" },
      { sku: "SAG-KAN-FOR-58", color: "Forest Emerald", size: "58" },
      { sku: "SAG-KAN-FOR-60", color: "Forest Emerald", size: "60" },
      { sku: "SAG-KAN-CHA-50", color: "Charcoal Mist", size: "50" },
      { sku: "SAG-KAN-CHA-52", color: "Charcoal Mist", size: "52" },
      { sku: "SAG-KAN-CHA-54", color: "Charcoal Mist", size: "54" },
      { sku: "SAG-KAN-CHA-56", color: "Charcoal Mist", size: "56" },
      { sku: "SAG-KAN-CHA-58", color: "Charcoal Mist", size: "58" },
      { sku: "SAG-KAN-CHA-60", color: "Charcoal Mist", size: "60" },
      { sku: "SAG-KAN-MOC-50", color: "Mocha Brown", size: "50" },
      { sku: "SAG-KAN-MOC-52", color: "Mocha Brown", size: "52" },
      { sku: "SAG-KAN-MOC-54", color: "Mocha Brown", size: "54" },
      { sku: "SAG-KAN-MOC-56", color: "Mocha Brown", size: "56" },
      { sku: "SAG-KAN-MOC-58", color: "Mocha Brown", size: "58" },
      { sku: "SAG-KAN-MOC-60", color: "Mocha Brown", size: "60" },
      { sku: "SAG-KAN-CLA-50", color: "Classic Black", size: "50" },
      { sku: "SAG-KAN-CLA-52", color: "Classic Black", size: "52" },
      { sku: "SAG-KAN-CLA-54", color: "Classic Black", size: "54" },
      { sku: "SAG-KAN-CLA-56", color: "Classic Black", size: "56" },
      { sku: "SAG-KAN-CLA-58", color: "Classic Black", size: "58" },
      { sku: "SAG-KAN-CLA-60", color: "Classic Black", size: "60" },
    ]
  },
  // Sundus - One-Piece Jilbabs
  {
    name: "Sundus",
    handle: "sundus",
    description: "Elegant and modest one-piece jilbab with sophisticated design and premium comfort.",
    short_description: "One-Piece Jilbab",
    category: "Jilbabs",
    price: 7500, // $75.00 in cents
    variants: [
      { sku: "SAG-JLB-MID-50", color: "Midnight Navy", size: "50" },
      { sku: "SAG-JLB-MID-52", color: "Midnight Navy", size: "52" },
      { sku: "SAG-JLB-MID-54", color: "Midnight Navy", size: "54" },
      { sku: "SAG-JLB-MID-56", color: "Midnight Navy", size: "56" },
      { sku: "SAG-JLB-MID-58", color: "Midnight Navy", size: "58" },
      { sku: "SAG-JLB-MID-60", color: "Midnight Navy", size: "60" },
      { sku: "SAG-JLB-DES-50", color: "Desert Sand", size: "50" },
      { sku: "SAG-JLB-DES-52", color: "Desert Sand", size: "52" },
      { sku: "SAG-JLB-DES-54", color: "Desert Sand", size: "54" },
      { sku: "SAG-JLB-DES-56", color: "Desert Sand", size: "56" },
      { sku: "SAG-JLB-DES-58", color: "Desert Sand", size: "58" },
      { sku: "SAG-JLB-DES-60", color: "Desert Sand", size: "60" },
      { sku: "SAG-JLB-FOR-50", color: "Forest Emerald", size: "50" },
      { sku: "SAG-JLB-FOR-52", color: "Forest Emerald", size: "52" },
      { sku: "SAG-JLB-FOR-54", color: "Forest Emerald", size: "54" },
      { sku: "SAG-JLB-FOR-56", color: "Forest Emerald", size: "56" },
      { sku: "SAG-JLB-FOR-58", color: "Forest Emerald", size: "58" },
      { sku: "SAG-JLB-FOR-60", color: "Forest Emerald", size: "60" },
      { sku: "SAG-JLB-CHA-50", color: "Charcoal Mist", size: "50" },
      { sku: "SAG-JLB-CHA-52", color: "Charcoal Mist", size: "52" },
      { sku: "SAG-JLB-CHA-54", color: "Charcoal Mist", size: "54" },
      { sku: "SAG-JLB-CHA-56", color: "Charcoal Mist", size: "56" },
      { sku: "SAG-JLB-CHA-58", color: "Charcoal Mist", size: "58" },
      { sku: "SAG-JLB-CHA-60", color: "Charcoal Mist", size: "60" },
      { sku: "SAG-JLB-MOC-50", color: "Mocha Brown", size: "50" },
      { sku: "SAG-JLB-MOC-52", color: "Mocha Brown", size: "52" },
      { sku: "SAG-JLB-MOC-54", color: "Mocha Brown", size: "54" },
      { sku: "SAG-JLB-MOC-56", color: "Mocha Brown", size: "56" },
      { sku: "SAG-JLB-MOC-58", color: "Mocha Brown", size: "58" },
      { sku: "SAG-JLB-MOC-60", color: "Mocha Brown", size: "60" },
      { sku: "SAG-JLB-CLA-50", color: "Classic Black", size: "50" },
      { sku: "SAG-JLB-CLA-52", color: "Classic Black", size: "52" },
      { sku: "SAG-JLB-CLA-54", color: "Classic Black", size: "54" },
      { sku: "SAG-JLB-CLA-56", color: "Classic Black", size: "56" },
      { sku: "SAG-JLB-CLA-58", color: "Classic Black", size: "58" },
      { sku: "SAG-JLB-CLA-60", color: "Classic Black", size: "60" },
    ]
  },
  // Farida Set - Two-Piece Jilbabs with Zip
  {
    name: "Farida Set",
    handle: "farida-set",
    description: "Elegant and modest two-piece jilbab with zip closure for enhanced convenience and style.",
    short_description: "Two-Piece Jilbab with Zip",
    category: "Jilbabs",
    price: 7500, // $75.00 in cents
    variants: [
      { sku: "SAG-ZIP-MID-50", color: "Midnight Navy", size: "50" },
      { sku: "SAG-ZIP-MID-52", color: "Midnight Navy", size: "52" },
      { sku: "SAG-ZIP-MID-54", color: "Midnight Navy", size: "54" },
      { sku: "SAG-ZIP-MID-56", color: "Midnight Navy", size: "56" },
      { sku: "SAG-ZIP-MID-58", color: "Midnight Navy", size: "58" },
      { sku: "SAG-ZIP-MID-60", color: "Midnight Navy", size: "60" },
      { sku: "SAG-ZIP-DES-50", color: "Desert Sand", size: "50" },
      { sku: "SAG-ZIP-DES-52", color: "Desert Sand", size: "52" },
      { sku: "SAG-ZIP-DES-54", color: "Desert Sand", size: "54" },
      { sku: "SAG-ZIP-DES-56", color: "Desert Sand", size: "56" },
      { sku: "SAG-ZIP-DES-58", color: "Desert Sand", size: "58" },
      { sku: "SAG-ZIP-DES-60", color: "Desert Sand", size: "60" },
      { sku: "SAG-ZIP-FOR-50", color: "Forest Emerald", size: "50" },
      { sku: "SAG-ZIP-FOR-52", color: "Forest Emerald", size: "52" },
      { sku: "SAG-ZIP-FOR-54", color: "Forest Emerald", size: "54" },
      { sku: "SAG-ZIP-FOR-56", color: "Forest Emerald", size: "56" },
      { sku: "SAG-ZIP-FOR-58", color: "Forest Emerald", size: "58" },
      { sku: "SAG-ZIP-FOR-60", color: "Forest Emerald", size: "60" },
      { sku: "SAG-ZIP-CHA-50", color: "Charcoal Mist", size: "50" },
      { sku: "SAG-ZIP-CHA-52", color: "Charcoal Mist", size: "52" },
      { sku: "SAG-ZIP-CHA-54", color: "Charcoal Mist", size: "54" },
      { sku: "SAG-ZIP-CHA-56", color: "Charcoal Mist", size: "56" },
      { sku: "SAG-ZIP-CHA-58", color: "Charcoal Mist", size: "58" },
      { sku: "SAG-ZIP-CHA-60", color: "Charcoal Mist", size: "60" },
      { sku: "SAG-ZIP-MOC-50", color: "Mocha Brown", size: "50" },
      { sku: "SAG-ZIP-MOC-52", color: "Mocha Brown", size: "52" },
      { sku: "SAG-ZIP-MOC-54", color: "Mocha Brown", size: "54" },
      { sku: "SAG-ZIP-MOC-56", color: "Mocha Brown", size: "56" },
      { sku: "SAG-ZIP-MOC-58", color: "Mocha Brown", size: "58" },
      { sku: "SAG-ZIP-MOC-60", color: "Mocha Brown", size: "60" },
      { sku: "SAG-ZIP-CLA-50", color: "Classic Black", size: "50" },
      { sku: "SAG-ZIP-CLA-52", color: "Classic Black", size: "52" },
      { sku: "SAG-ZIP-CLA-54", color: "Classic Black", size: "54" },
      { sku: "SAG-ZIP-CLA-56", color: "Classic Black", size: "56" },
      { sku: "SAG-ZIP-CLA-58", color: "Classic Black", size: "58" },
      { sku: "SAG-ZIP-CLA-60", color: "Classic Black", size: "60" },
    ]
  },
  // Kenza Set - Children's Kanadiya
  {
    name: "Kenza Set",
    handle: "kenza-set",
    description: "Elegant and modest kanadiya designed specifically for children with comfort and style in mind.",
    short_description: "Kanadiya for Children",
    category: "Jilbabs",
    price: 7500, // $75.00 in cents
    variants: [
      { sku: "SAG-KID-MID-38", color: "Midnight Navy", size: "38" },
      { sku: "SAG-KID-MID-40", color: "Midnight Navy", size: "40" },
      { sku: "SAG-KID-MID-42", color: "Midnight Navy", size: "42" },
      { sku: "SAG-KID-MID-44", color: "Midnight Navy", size: "44" },
      { sku: "SAG-KID-MID-46", color: "Midnight Navy", size: "46" },
      { sku: "SAG-KID-DES-38", color: "Desert Sand", size: "38" },
      { sku: "SAG-KID-DES-40", color: "Desert Sand", size: "40" },
      { sku: "SAG-KID-DES-42", color: "Desert Sand", size: "42" },
      { sku: "SAG-KID-DES-44", color: "Desert Sand", size: "44" },
      { sku: "SAG-KID-DES-46", color: "Desert Sand", size: "46" },
      { sku: "SAG-KID-FOR-38", color: "Forest Emerald", size: "38" },
      { sku: "SAG-KID-FOR-40", color: "Forest Emerald", size: "40" },
      { sku: "SAG-KID-FOR-42", color: "Forest Emerald", size: "42" },
      { sku: "SAG-KID-FOR-44", color: "Forest Emerald", size: "44" },
      { sku: "SAG-KID-FOR-46", color: "Forest Emerald", size: "46" },
      { sku: "SAG-KID-CHA-38", color: "Charcoal Mist", size: "38" },
      { sku: "SAG-KID-CHA-40", color: "Charcoal Mist", size: "40" },
      { sku: "SAG-KID-CHA-42", color: "Charcoal Mist", size: "42" },
      { sku: "SAG-KID-CHA-44", color: "Charcoal Mist", size: "44" },
      { sku: "SAG-KID-CHA-46", color: "Charcoal Mist", size: "46" },
      { sku: "SAG-KID-MOC-38", color: "Mocha Brown", size: "38" },
      { sku: "SAG-KID-MOC-40", color: "Mocha Brown", size: "40" },
      { sku: "SAG-KID-MOC-42", color: "Mocha Brown", size: "42" },
      { sku: "SAG-KID-MOC-44", color: "Mocha Brown", size: "44" },
      { sku: "SAG-KID-MOC-46", color: "Mocha Brown", size: "46" },
      { sku: "SAG-KID-CLA-38", color: "Classic Black", size: "38" },
      { sku: "SAG-KID-CLA-40", color: "Classic Black", size: "40" },
      { sku: "SAG-KID-CLA-42", color: "Classic Black", size: "42" },
      { sku: "SAG-KID-CLA-44", color: "Classic Black", size: "44" },
      { sku: "SAG-KID-CLA-46", color: "Classic Black", size: "46" },
    ]
  },
  // Accessories
  {
    name: "Lamees Gloves",
    handle: "lamees-gloves",
    description: "Elegant and modest ladies' gloves crafted with premium materials for comfort and style.",
    short_description: "Ladies' Gloves",
    category: "Accessories",
    price: 2000, // $20.00 in cents
    variants: [
      { sku: "SAG-GLV-BLA-50", color: "Black", size: "50" },
      { sku: "SAG-GLV-BLA-52", color: "Black", size: "52" },
      { sku: "SAG-GLV-BLA-54", color: "Black", size: "54" },
      { sku: "SAG-GLV-BLA-56", color: "Black", size: "56" },
      { sku: "SAG-GLV-BLA-58", color: "Black", size: "58" },
      { sku: "SAG-GLV-BLA-60", color: "Black", size: "60" },
    ]
  },
  {
    name: "Layla Niqab",
    handle: "layla-niqab",
    description: "Elegant and modest three-piece niqab designed for comfort and complete coverage.",
    short_description: "Three-Piece Niqab",
    category: "Accessories",
    price: 2000, // $20.00 in cents
    variants: [
      { sku: "SAG-NIQ-BLA-50", color: "Black", size: "50" },
      { sku: "SAG-NIQ-BLA-52", color: "Black", size: "52" },
      { sku: "SAG-NIQ-BLA-54", color: "Black", size: "54" },
      { sku: "SAG-NIQ-BLA-56", color: "Black", size: "56" },
      { sku: "SAG-NIQ-BLA-58", color: "Black", size: "58" },
      { sku: "SAG-NIQ-BLA-60", color: "Black", size: "60" },
    ]
  },
  {
    name: "Sakina Khimar",
    handle: "sakina-khimar",
    description: "Elegant and modest stand-alone khimar perfect for layering or wearing independently.",
    short_description: "Stand-Alone Khimar",
    category: "Accessories",
    price: 2000, // $20.00 in cents
    variants: [
      { sku: "SAG-KMR-MID-50", color: "Midnight Navy", size: "50" },
      { sku: "SAG-KMR-MID-52", color: "Midnight Navy", size: "52" },
      { sku: "SAG-KMR-MID-54", color: "Midnight Navy", size: "54" },
      { sku: "SAG-KMR-MID-56", color: "Midnight Navy", size: "56" },
      { sku: "SAG-KMR-MID-58", color: "Midnight Navy", size: "58" },
      { sku: "SAG-KMR-MID-60", color: "Midnight Navy", size: "60" },
      { sku: "SAG-KMR-DES-50", color: "Desert Sand", size: "50" },
      { sku: "SAG-KMR-DES-52", color: "Desert Sand", size: "52" },
      { sku: "SAG-KMR-DES-54", color: "Desert Sand", size: "54" },
      { sku: "SAG-KMR-DES-56", color: "Desert Sand", size: "56" },
      { sku: "SAG-KMR-DES-58", color: "Desert Sand", size: "58" },
      { sku: "SAG-KMR-DES-60", color: "Desert Sand", size: "60" },
      { sku: "SAG-KMR-FOR-50", color: "Forest Emerald", size: "50" },
      { sku: "SAG-KMR-FOR-52", color: "Forest Emerald", size: "52" },
      { sku: "SAG-KMR-FOR-54", color: "Forest Emerald", size: "54" },
      { sku: "SAG-KMR-FOR-56", color: "Forest Emerald", size: "56" },
      { sku: "SAG-KMR-FOR-58", color: "Forest Emerald", size: "58" },
      { sku: "SAG-KMR-FOR-60", color: "Forest Emerald", size: "60" },
      { sku: "SAG-KMR-CHA-50", color: "Charcoal Mist", size: "50" },
      { sku: "SAG-KMR-CHA-52", color: "Charcoal Mist", size: "52" },
      { sku: "SAG-KMR-CHA-54", color: "Charcoal Mist", size: "54" },
      { sku: "SAG-KMR-CHA-56", color: "Charcoal Mist", size: "56" },
      { sku: "SAG-KMR-CHA-58", color: "Charcoal Mist", size: "58" },
      { sku: "SAG-KMR-CHA-60", color: "Charcoal Mist", size: "60" },
      { sku: "SAG-KMR-MOC-50", color: "Mocha Brown", size: "50" },
      { sku: "SAG-KMR-MOC-52", color: "Mocha Brown", size: "52" },
      { sku: "SAG-KMR-MOC-54", color: "Mocha Brown", size: "54" },
      { sku: "SAG-KMR-MOC-56", color: "Mocha Brown", size: "56" },
      { sku: "SAG-KMR-MOC-58", color: "Mocha Brown", size: "58" },
      { sku: "SAG-KMR-MOC-60", color: "Mocha Brown", size: "60" },
      { sku: "SAG-KMR-CLA-50", color: "Classic Black", size: "50" },
      { sku: "SAG-KMR-CLA-52", color: "Classic Black", size: "52" },
      { sku: "SAG-KMR-CLA-54", color: "Classic Black", size: "54" },
      { sku: "SAG-KMR-CLA-56", color: "Classic Black", size: "56" },
      { sku: "SAG-KMR-CLA-58", color: "Classic Black", size: "58" },
      { sku: "SAG-KMR-CLA-60", color: "Classic Black", size: "60" },
    ]
  },
  {
    name: "Zaina Skirt",
    handle: "zaina-skirt",
    description: "Elegant and modest stand-alone skirt perfect for layering with any jilbab or abaya.",
    short_description: "Stand-Alone Skirt",
    category: "Accessories",
    price: 2000, // $20.00 in cents
    variants: [
      { sku: "SAG-SKT-MID-50", color: "Midnight Navy", size: "50" },
      { sku: "SAG-SKT-MID-52", color: "Midnight Navy", size: "52" },
      { sku: "SAG-SKT-MID-54", color: "Midnight Navy", size: "54" },
      { sku: "SAG-SKT-MID-56", color: "Midnight Navy", size: "56" },
      { sku: "SAG-SKT-MID-58", color: "Midnight Navy", size: "58" },
      { sku: "SAG-SKT-MID-60", color: "Midnight Navy", size: "60" },
      { sku: "SAG-SKT-DES-50", color: "Desert Sand", size: "50" },
      { sku: "SAG-SKT-DES-52", color: "Desert Sand", size: "52" },
      { sku: "SAG-SKT-DES-54", color: "Desert Sand", size: "54" },
      { sku: "SAG-SKT-DES-56", color: "Desert Sand", size: "56" },
      { sku: "SAG-SKT-DES-58", color: "Desert Sand", size: "58" },
      { sku: "SAG-SKT-DES-60", color: "Desert Sand", size: "60" },
      { sku: "SAG-SKT-FOR-50", color: "Forest Emerald", size: "50" },
      { sku: "SAG-SKT-FOR-52", color: "Forest Emerald", size: "52" },
      { sku: "SAG-SKT-FOR-54", color: "Forest Emerald", size: "54" },
      { sku: "SAG-SKT-FOR-56", color: "Forest Emerald", size: "56" },
      { sku: "SAG-SKT-FOR-58", color: "Forest Emerald", size: "58" },
      { sku: "SAG-SKT-FOR-60", color: "Forest Emerald", size: "60" },
      { sku: "SAG-SKT-CHA-50", color: "Charcoal Mist", size: "50" },
      { sku: "SAG-SKT-CHA-52", color: "Charcoal Mist", size: "52" },
      { sku: "SAG-SKT-CHA-54", color: "Charcoal Mist", size: "54" },
      { sku: "SAG-SKT-CHA-56", color: "Charcoal Mist", size: "56" },
      { sku: "SAG-SKT-CHA-58", color: "Charcoal Mist", size: "58" },
      { sku: "SAG-SKT-CHA-60", color: "Charcoal Mist", size: "60" },
      { sku: "SAG-SKT-MOC-50", color: "Mocha Brown", size: "50" },
      { sku: "SAG-SKT-MOC-52", color: "Mocha Brown", size: "52" },
      { sku: "SAG-SKT-MOC-54", color: "Mocha Brown", size: "54" },
      { sku: "SAG-SKT-MOC-56", color: "Mocha Brown", size: "56" },
      { sku: "SAG-SKT-MOC-58", color: "Mocha Brown", size: "58" },
      { sku: "SAG-SKT-MOC-60", color: "Mocha Brown", size: "60" },
      { sku: "SAG-SKT-CLA-50", color: "Classic Black", size: "50" },
      { sku: "SAG-SKT-CLA-52", color: "Classic Black", size: "52" },
      { sku: "SAG-SKT-CLA-54", color: "Classic Black", size: "54" },
      { sku: "SAG-SKT-CLA-56", color: "Classic Black", size: "56" },
      { sku: "SAG-SKT-CLA-58", color: "Classic Black", size: "58" },
      { sku: "SAG-SKT-CLA-60", color: "Classic Black", size: "60" },
    ]
  }
]

export default async function seedProducts() {
  const { manager } = await import("@medusajs/medusa/dist/loaders/database")
  const { getConnection } = await import("typeorm")
  
  const connection = getConnection()
  const queryRunner = connection.createQueryRunner()
  
  try {
    await queryRunner.connect()
    await queryRunner.startTransaction()
    
    const productService = new ProductService({ manager })
    const productVariantService = new ProductVariantService({ manager })
    const productOptionService = new ProductOptionService({ manager })
    const productCategoryService = new ProductCategoryService({ manager })
    
    // Create categories
    const categories = await Promise.all([
      productCategoryService.create({ name: "Jilbabs", handle: "jilbabs" }),
      productCategoryService.create({ name: "Accessories", handle: "accessories" })
    ])
    
    const categoryMap = {
      "Jilbabs": categories[0],
      "Accessories": categories[1]
    }
    
    console.log("Created categories:", categories.map(c => c.name))
    
    // Create products
    for (const productData of products) {
      console.log(`Creating product: ${productData.name}`)
      
      // Create product options
      const colorOption = await productOptionService.create({
        name: "Color",
        product_id: null // Will be set after product creation
      })
      
      const sizeOption = await productOptionService.create({
        name: "Size",
        product_id: null // Will be set after product creation
      })
      
      // Create product
      const product = await productService.create({
        title: productData.name,
        handle: productData.handle,
        description: productData.description,
        status: ProductStatus.PUBLISHED,
        categories: [categoryMap[productData.category]],
        options: [colorOption, sizeOption],
        images: [
          {
            url: `/api/placeholder/800/1000?text=${encodeURIComponent(productData.name)}`,
            alt_text: productData.name
          }
        ],
        tags: [
          { value: "modest-fashion" },
          { value: "luxury" },
          { value: "premium-quality" },
          { value: productData.category.toLowerCase() }
        ]
      })
      
      // Update options with product_id
      await productOptionService.update(colorOption.id, { product_id: product.id })
      await productOptionService.update(sizeOption.id, { product_id: product.id })
      
      // Create variants
      for (const variantData of productData.variants) {
        await productVariantService.create({
          title: `${productData.name} - ${variantData.color} - Size ${variantData.size}`,
          product_id: product.id,
          sku: variantData.sku,
          barcode: variantData.sku,
          status: ProductVariantStatus.PUBLISHED,
          prices: [
            {
              amount: productData.price,
              currency_code: "usd"
            }
          ],
          options: [
            {
              option_id: colorOption.id,
              value: variantData.color
            },
            {
              option_id: sizeOption.id,
              value: variantData.size
            }
          ],
          inventory_quantity: 100, // Default stock
          manage_inventory: true
        })
      }
      
      console.log(`Created ${productData.variants.length} variants for ${productData.name}`)
    }
    
    await queryRunner.commitTransaction()
    console.log("✅ Successfully seeded all products!")
    
  } catch (error) {
    await queryRunner.rollbackTransaction()
    console.error("❌ Error seeding products:", error)
    throw error
  } finally {
    await queryRunner.release()
  }
}

// Run the seed function if this file is executed directly
if (require.main === module) {
  seedProducts()
    .then(() => {
      console.log("Product seeding completed successfully!")
      process.exit(0)
    })
    .catch((error) => {
      console.error("Product seeding failed:", error)
      process.exit(1)
    })
} 