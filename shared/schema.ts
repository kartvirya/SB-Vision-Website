import { pgTable, text, serial, numeric, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: numeric("price").notNull(),
  originalPrice: numeric("original_price"), // For offers
  brand: text("brand").notNull(),
  category: text("category").notNull(), // e.g., "Phone Case", "Screen Protector"
  modelCompatibility: text("model_compatibility").array(), // e.g., ["iPhone 15", "Samsung S24"]
  material: text("material"),
  colors: jsonb("colors").$type<string[]>(), // Available colors
  images: jsonb("images").$type<string[]>().notNull(), // URLs
  isFeatured: boolean("is_featured").default(false),
  isTrending: boolean("is_trending").default(false),
  stock: serial("stock"),
});

export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
});

export const subscribers = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
});

export const insertProductSchema = createInsertSchema(products).omit({ id: true });
export const insertMessageSchema = createInsertSchema(messages).omit({ id: true });
export const insertSubscriberSchema = createInsertSchema(subscribers).omit({ id: true });

export type Product = typeof products.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Message = typeof messages.$inferSelect;
export type InsertMessage = z.infer<typeof insertMessageSchema>;
export type Subscriber = typeof subscribers.$inferSelect;
export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;
