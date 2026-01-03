import { useState } from "react";
import { useProducts } from "@/hooks/use-products";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal, Loader2 } from "lucide-react";
import { SEO } from "@/components/SEO";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | undefined>();
  const [brand, setBrand] = useState<string | undefined>();

  const { data: products, isLoading } = useProducts({ 
    search: search || undefined,
    category: category === "all" ? undefined : category,
    brand: brand === "all" ? undefined : brand
  });

  const categories = ["Phones", "Phone Case", "Screen Protector", "Charger", "Cables", "Accessories"];
  const brands = ["Apple", "Samsung", "Xiaomi", "OnePlus", "Oppo", "Vivo", "Realme", "Nothing"];

  return (
    <>
      <SEO 
        title="Shop - Latest Phones & Premium Accessories | SB Vision Kathmandu"
        description="Browse our collection of latest smartphones and premium phone accessories in Kathmandu. Find iPhone cases, screen protectors, chargers, and more at SB Vision. Visit our store in Khahare Khola or shop online."
        keywords="buy phones Nepal, shop phone accessories Kathmandu, iPhone cases online Nepal, phone accessories store Kathmandu, mobile phone shop Nepal"
      />
      <div className="pt-24 min-h-screen bg-slate-50 pb-20">
        <div className="container mx-auto px-4">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h1 className="font-display text-4xl font-bold text-slate-900">Shop</h1>
            <p className="text-slate-500 mt-2">Browse latest phones and premium accessories</p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input 
                placeholder="Search products..." 
                className="pl-9 bg-white border-slate-200 rounded-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full shrink-0">
                  <SlidersHorizontal className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="font-display text-2xl">Filters</SheetTitle>
                </SheetHeader>
                <div className="mt-8 space-y-6">
                  <div>
                    <h4 className="font-bold mb-3">Category</h4>
                    <div className="flex flex-wrap gap-2">
                      <Button 
                        variant={!category || category === "all" ? "default" : "outline"} 
                        size="sm" 
                        onClick={() => setCategory("all")}
                        className={!category || category === "all" ? "bg-sky-500" : ""}
                      >
                        All
                      </Button>
                      {categories.map(c => (
                        <Button
                          key={c}
                          variant={category === c ? "default" : "outline"}
                          size="sm"
                          onClick={() => setCategory(c)}
                          className={category === c ? "bg-sky-500" : ""}
                        >
                          {c}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold mb-3">Brand</h4>
                    <Select value={brand} onValueChange={setBrand}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Brand" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Brands</SelectItem>
                        {brands.map(b => (
                          <SelectItem key={b} value={b}>{b}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Product Grid */}
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-sky-500" />
          </div>
        ) : products?.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-xl font-bold text-slate-900">No products found</h3>
            <p className="text-slate-500 mt-2">Try adjusting your filters or search query.</p>
            <Button 
              variant="link" 
              onClick={() => {setSearch(""); setCategory(undefined); setBrand(undefined)}}
              className="text-sky-500 mt-4"
            >
              Clear all filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
        </div>
      </div>
    </>
  );
}
