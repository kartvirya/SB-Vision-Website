import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@shared/schema';

export interface CartItem extends Product {
  quantity: number;
  selectedColor?: string;
  selectedModel?: string;
}

interface StoreState {
  cart: CartItem[];
  wishlist: number[]; // Product IDs
  addToCart: (product: Product, quantity?: number, color?: string, model?: string) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      cart: [],
      wishlist: [],
      addToCart: (product, quantity = 1, selectedColor, selectedModel) => set((state) => {
        const existing = state.cart.find(item => item.id === product.id);
        if (existing) {
          return {
            cart: state.cart.map(item => 
              item.id === product.id 
                ? { ...item, quantity: item.quantity + quantity } 
                : item
            )
          };
        }
        return { 
          cart: [...state.cart, { ...product, quantity, selectedColor, selectedModel }] 
        };
      }),
      removeFromCart: (id) => set((state) => ({
        cart: state.cart.filter(item => item.id !== id)
      })),
      updateQuantity: (id, quantity) => set((state) => ({
        cart: state.cart.map(item => 
          item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
        ).filter(item => item.quantity > 0)
      })),
      clearCart: () => set({ cart: [] }),
      toggleWishlist: (id) => set((state) => {
        const inList = state.wishlist.includes(id);
        return {
          wishlist: inList 
            ? state.wishlist.filter(i => i !== id) 
            : [...state.wishlist, id]
        };
      }),
      isInWishlist: (id) => get().wishlist.includes(id),
    }),
    {
      name: 'sb-vision-storage',
    }
  )
);
