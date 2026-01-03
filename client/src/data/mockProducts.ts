// Mock product data for frontend-only deployment
// Product type definition
export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  brand: string;
  category: string;
  modelCompatibility: string[];
  material: string;
  colors: string[];
  images: string[];
  isFeatured: boolean;
  isTrending: boolean;
}

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Neon Cyber Case",
    description: "Ultra-slim, glowing neon edges with shock absorption.",
    price: "29.99",
    brand: "CyberSkin",
    category: "Phone Case",
    modelCompatibility: ["iPhone 15 Pro", "iPhone 15"],
    material: "Polycarbonate",
    colors: ["#00BFFF", "#FF00FF", "#39FF14"],
    images: ["https://placehold.co/600x600/1e293b/00BFFF?text=Neon+Cyber"],
    isFeatured: true,
    isTrending: true,
  },
  {
    id: 2,
    name: "Glacier Glass Shield",
    description: "9H Hardness tempered glass with blue-light filter.",
    price: "19.99",
    originalPrice: "24.99",
    brand: "PureView",
    category: "Screen Protector",
    modelCompatibility: ["Samsung S24 Ultra"],
    material: "Tempered Glass",
    colors: ["transparent"],
    images: ["https://placehold.co/600x600/1e293b/00BFFF?text=Glacier+Glass"],
    isFeatured: true,
    isTrending: false,
  },
  {
    id: 3,
    name: "Aero MagSafe Grip",
    description: "Magnetic grip case with aerospace-grade aluminum finish.",
    price: "45.00",
    brand: "AeroTech",
    category: "Phone Case",
    modelCompatibility: ["iPhone 15 Pro Max"],
    material: "Aluminum + TPU",
    colors: ["#C0C0C0", "#000000"],
    images: ["https://placehold.co/600x600/1e293b/00BFFF?text=Aero+MagSafe"],
    isFeatured: false,
    isTrending: true,
  },
  {
    id: 4,
    name: "Liquid Silicon Soft",
    description: "Silky smooth touch, microfiber lining, pastel colors.",
    price: "24.99",
    brand: "SoftShell",
    category: "Phone Case",
    modelCompatibility: ["Pixel 8"],
    material: "Liquid Silicone",
    colors: ["#87CEEB", "#FFB6C1", "#E6E6FA"],
    images: ["https://placehold.co/600x600/1e293b/00BFFF?text=Liquid+Silicon"],
    isFeatured: false,
    isTrending: true,
  },
  {
    id: 5,
    name: "Carbon Fiber Elite",
    description: "Real carbon fiber weave. Lightweight and extremely durable.",
    price: "59.99",
    brand: "EliteGear",
    category: "Phone Case",
    modelCompatibility: ["Samsung S24"],
    material: "Carbon Fiber",
    colors: ["#111111"],
    images: ["https://placehold.co/600x600/1e293b/00BFFF?text=Carbon+Fiber"],
    isFeatured: true,
    isTrending: false,
  },
  {
    id: 6,
    name: "Crystal Clear Hybrid",
    description: "Anti-yellowing technology with reinforced corners.",
    price: "15.99",
    originalPrice: "19.99",
    brand: "ClearTech",
    category: "Phone Case",
    modelCompatibility: ["iPhone 14"],
    material: "TPU + PC",
    colors: ["transparent"],
    images: ["https://placehold.co/600x600/1e293b/00BFFF?text=Crystal+Clear"],
    isFeatured: false,
    isTrending: false,
  },
];

