import { useQuery } from "@tanstack/react-query";
import { mockProducts, type Product } from "@/data/mockProducts";

export function useProducts(filters?: {
  brand?: string;
  category?: string;
  search?: string;
  featured?: boolean;
  trending?: boolean;
}) {
  return useQuery({
    queryKey: ["products", filters],
    queryFn: async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 100));
      
      let filtered = [...mockProducts];
      
      if (filters?.brand) {
        filtered = filtered.filter(p => p.brand.toLowerCase() === filters.brand?.toLowerCase());
      }
      
      if (filters?.category) {
        filtered = filtered.filter(p => p.category === filters.category);
      }
      
      if (filters?.search) {
        const searchLower = filters.search.toLowerCase();
        filtered = filtered.filter(p => 
          p.name.toLowerCase().includes(searchLower) ||
          p.description.toLowerCase().includes(searchLower) ||
          p.brand.toLowerCase().includes(searchLower)
        );
      }
      
      if (filters?.featured) {
        filtered = filtered.filter(p => p.isFeatured);
      }
      
      if (filters?.trending) {
        filtered = filtered.filter(p => p.isTrending);
      }
      
      return filtered;
    },
  });
}

export function useProduct(id: number) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 100));
      const product = mockProducts.find(p => p.id === id);
      return product || null;
    },
    enabled: !!id,
  });
}
