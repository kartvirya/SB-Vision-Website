import { db } from "./db";
import {
  products,
  messages,
  subscribers,
  type InsertProduct,
  type InsertMessage,
  type InsertSubscriber,
  type Product,
  type Message,
  type Subscriber,
} from "@shared/schema";
import { eq, ilike, or, and, desc } from "drizzle-orm";

export interface IStorage {
  getProducts(filters?: {
    brand?: string;
    category?: string;
    search?: string;
    featured?: boolean;
    trending?: boolean;
  }): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  createMessage(message: InsertMessage): Promise<Message>;
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  seedProducts(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getProducts(filters: {
    brand?: string;
    category?: string;
    search?: string;
    featured?: boolean;
    trending?: boolean;
  } = {}): Promise<Product[]> {
    const conditions = [];

    if (filters.brand) {
      conditions.push(eq(products.brand, filters.brand));
    }
    if (filters.category) {
      conditions.push(eq(products.category, filters.category));
    }
    if (filters.featured) {
      conditions.push(eq(products.isFeatured, true));
    }
    if (filters.trending) {
      conditions.push(eq(products.isTrending, true));
    }
    if (filters.search) {
      const searchLower = `%${filters.search.toLowerCase()}%`;
      conditions.push(
        or(
          ilike(products.name, searchLower),
          ilike(products.description, searchLower),
          ilike(products.brand, searchLower)
        )
      );
    }

    return await db
      .select()
      .from(products)
      .where(and(...conditions))
      .orderBy(desc(products.isFeatured), desc(products.id));
  }

  async getProduct(id: number): Promise<Product | undefined> {
    const [product] = await db.select().from(products).where(eq(products.id, id));
    return product;
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const [product] = await db.insert(products).values(insertProduct).returning();
    return product;
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const [message] = await db.insert(messages).values(insertMessage).returning();
    return message;
  }

  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const [subscriber] = await db
      .insert(subscribers)
      .values(insertSubscriber)
      .returning();
    return subscriber;
  }

  async seedProducts(): Promise<void> {
    const existing = await this.getProducts();
    if (existing.length > 0) return;

    const dummyProducts: InsertProduct[] = [
      {
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
      }
    ];

    for (const p of dummyProducts) {
      await this.createProduct(p);
    }
  }
}

export const storage = new DatabaseStorage();
