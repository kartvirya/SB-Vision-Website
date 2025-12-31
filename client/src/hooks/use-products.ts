import { useQuery } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";

export function useProducts(filters?: {
  brand?: string;
  category?: string;
  search?: string;
  featured?: boolean;
  trending?: boolean;
}) {
  const queryKey = [api.products.list.path, filters];
  return useQuery({
    queryKey,
    queryFn: async () => {
      // Build query string manually since fetch needs a string URL
      const params = new URLSearchParams();
      if (filters) {
        Object.entries(filters).forEach(([key, value]) => {
          if (value !== undefined) params.append(key, String(value));
        });
      }
      const url = `${api.products.list.path}?${params.toString()}`;
      
      const res = await fetch(url, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch products");
      return api.products.list.responses[200].parse(await res.json());
    },
  });
}

export function useProduct(id: number) {
  return useQuery({
    queryKey: [api.products.get.path, id],
    queryFn: async () => {
      const url = buildUrl(api.products.get.path, { id });
      const res = await fetch(url, { credentials: "include" });
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch product");
      return api.products.get.responses[200].parse(await res.json());
    },
    enabled: !!id,
  });
}
