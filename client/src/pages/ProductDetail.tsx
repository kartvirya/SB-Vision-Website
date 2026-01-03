import { useRoute } from "wouter";
import { useProduct } from "@/hooks/use-products";
import { useStore } from "@/hooks/use-store";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Star, Shield, Rotate3D, Check, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";

export default function ProductDetail() {
  const [, params] = useRoute("/product/:id");
  const id = parseInt(params?.id || "0");
  const { data: product, isLoading } = useProduct(id);
  const addToCart = useStore((state) => state.addToCart);
  
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  
  if (isLoading) return <div className="h-screen flex items-center justify-center"><Loader2 className="animate-spin text-sky-500 w-12 h-12" /></div>;
  if (!product) return <div className="h-screen flex items-center justify-center">Product Not Found</div>;

  const colors = (product.colors as string[]) || [];
  const models = (product.modelCompatibility as string[]) || [];
  const images = (product.images as string[]) || [];

  return (
    <div className="pt-24 min-h-screen bg-white pb-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Gallery Side */}
          <div className="space-y-4 sticky top-24">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-square rounded-3xl overflow-hidden bg-slate-50 border border-slate-100"
            >
               <img 
                 src={images[0] || "https://placehold.co/800x800/e0f2fe/0ea5e9?text=Product"} 
                 alt={product.name} 
                 className="w-full h-full object-cover"
               />
               <Button 
                variant="secondary" 
                size="sm" 
                className="absolute bottom-4 right-4 bg-white/80 backdrop-blur shadow-sm rounded-full"
               >
                 <Rotate3D className="w-4 h-4 mr-2" /> 360° View
               </Button>
            </motion.div>
            
            <div className="grid grid-cols-4 gap-4">
              {images.map((img, i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden bg-slate-50 cursor-pointer border-2 border-transparent hover:border-sky-500 transition-colors">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Info Side */}
          <div className="space-y-8">
            <div>
              {product.brand && (
                <span className="text-sky-600 font-semibold text-sm tracking-wider uppercase mb-2 block">
                  {product.brand}
                </span>
              )}
              <h1 className="font-display text-4xl font-bold text-slate-900 mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center text-amber-400">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <span className="text-slate-500 text-sm">(128 reviews)</span>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed">{product.description}</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-6">
              <div className="flex items-end gap-3">
                <span className="text-4xl font-bold text-slate-900">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-slate-400 line-through mb-1">${product.originalPrice}</span>
                )}
                {product.originalPrice && (
                  <Badge variant="destructive" className="mb-2">Sale</Badge>
                )}
              </div>

              {colors.length > 0 && (
                <div>
                  <label className="text-sm font-bold text-slate-900 mb-3 block">Select Color</label>
                  <div className="flex flex-wrap gap-3">
                    {colors.map(color => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                          selectedColor === color 
                          ? 'border-sky-500 bg-sky-50 text-sky-700 ring-2 ring-sky-500/20' 
                          : 'border-slate-200 hover:border-sky-200'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {models.length > 0 && (
                <div>
                  <label className="text-sm font-bold text-slate-900 mb-3 block">Compatibility</label>
                  <div className="flex flex-wrap gap-3">
                    {models.map(model => (
                      <button
                        key={model}
                        onClick={() => setSelectedModel(model)}
                        className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                          selectedModel === model 
                          ? 'border-sky-500 bg-sky-50 text-sky-700 ring-2 ring-sky-500/20' 
                          : 'border-slate-200 hover:border-sky-200'
                        }`}
                      >
                        {model}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <Button 
                size="lg" 
                className="w-full h-14 text-lg bg-sky-500 hover:bg-sky-600 shadow-lg shadow-sky-500/20 rounded-xl"
                onClick={() => addToCart(product, 1, selectedColor, selectedModel)}
              >
                <ShoppingBag className="w-5 h-5 mr-2" /> Add to Cart
              </Button>

              <div className="flex items-center justify-center gap-6 text-sm text-slate-500 pt-2 flex-wrap">
                <span className="flex items-center"><Truck className="w-4 h-4 mr-2" /> Free Delivery</span>
                <span className="flex items-center"><Shield className="w-4 h-4 mr-2" /> Genuine Warranty</span>
                <span className="flex items-center"><Check className="w-4 h-4 mr-2" /> In Stock</span>
                <span className="flex items-center"><Check className="w-4 h-4 mr-2" /> Original Product</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
