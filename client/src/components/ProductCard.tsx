import { Link } from "wouter";
import { Product } from "@shared/schema";
import { motion } from "framer-motion";
import { ShoppingBag, Heart, Eye } from "lucide-react";
import { useStore } from "@/hooks/use-store";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function ProductCard({ product }: { product: Product }) {
  const addToCart = useStore((state) => state.addToCart);
  const toggleWishlist = useStore((state) => state.toggleWishlist);
  const isInWishlist = useStore((state) => state.isInWishlist(product.id));

  const image = Array.isArray(product.images) && product.images.length > 0 
    ? product.images[0] 
    : "https://placehold.co/600x600/e0f2fe/0ea5e9?text=Cover";

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-sky-500/10 hover:border-sky-100 transition-all duration-300"
    >
      <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-50 mb-4">
        {product.isFeatured && (
          <Badge className="absolute top-3 left-3 bg-sky-500 hover:bg-sky-600 z-10">
            Featured
          </Badge>
        )}
        {product.isTrending && (
          <Badge variant="secondary" className="absolute top-3 left-3 bg-amber-100 text-amber-700 hover:bg-amber-200 z-10 mt-8">
            Trending
          </Badge>
        )}
        
        <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2">
          <Button
            size="icon"
            variant="secondary"
            className={`rounded-full shadow-lg ${isInWishlist ? 'text-rose-500 bg-rose-50' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(product.id);
            }}
          >
            <Heart className={`w-4 h-4 ${isInWishlist ? 'fill-rose-500' : ''}`} />
          </Button>
        </div>

        <Link href={`/product/${product.id}`} className="block w-full h-full cursor-pointer">
          <img
            src={image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </Link>
        
        {/* Quick Add Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button 
            className="w-full bg-white/90 backdrop-blur text-slate-900 hover:bg-sky-500 hover:text-white shadow-lg font-semibold"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
          >
            <ShoppingBag className="w-4 h-4 mr-2" /> Add to Cart
          </Button>
        </div>
      </div>

      <Link href={`/product/${product.id}`} className="block cursor-pointer">
        <h3 className="font-display font-semibold text-lg text-slate-900 mb-1 group-hover:text-sky-600 transition-colors truncate">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-slate-500 text-sm">{product.category}</p>
          <div className="flex items-baseline gap-2">
            {product.originalPrice && (
              <span className="text-xs text-slate-400 line-through">
                ${product.originalPrice}
              </span>
            )}
            <span className="font-bold text-slate-900">${product.price}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
