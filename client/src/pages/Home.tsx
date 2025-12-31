import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { useProducts } from "@/hooks/use-products";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Zap } from "lucide-react";

export default function Home() {
  const { data: featuredProducts } = useProducts({ featured: true });
  const { data: trendingProducts } = useProducts({ trending: true });
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-sky-100 text-sky-700 font-medium text-sm mb-6">
              New Collection 2025
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight text-slate-900 mb-6">
              Protect Your Tech with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400">
                Future Style
              </span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Premium, durable, and stunningly designed accessories for your mobile devices. Experience the perfect blend of protection and aesthetics.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/shop">
                <Button size="lg" className="rounded-full px-8 h-12 bg-sky-500 hover:bg-sky-600 shadow-lg shadow-sky-500/30 text-lg">
                  Shop Now
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="rounded-full px-8 h-12 border-slate-200 hover:bg-slate-50 text-slate-700 text-lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>

          <div className="relative h-[600px] w-full hidden md:block">
            {/* Using Unsplash images for hero visual representation */}
            <motion.div 
              style={{ y: y1 }}
              className="absolute top-10 right-10 w-64 h-auto z-10"
            >
              {/* colorful modern phone case */}
              <img 
                src="https://pixabay.com/get/ge053946058bbbd5e4226bd18899410707745bb1d8829020897c6316aaa8cf56d5adb93c08cce6590a3cafe3c0cf705ff6cd248f7cf5021f648e1a9845e190f3d_1280.jpg" 
                alt="Blue Case" 
                className="w-full rounded-3xl shadow-2xl shadow-sky-500/20 rotate-12 hover:rotate-0 transition-transform duration-500"
              />
            </motion.div>
            
            <motion.div 
              style={{ y: y2 }}
              className="absolute bottom-20 left-10 w-64 h-auto z-0"
            >
               {/* abstract tech background */}
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&auto=format&fit=crop&q=80" 
                alt="Cyber Case" 
                className="w-full rounded-3xl shadow-2xl shadow-cyan-500/20 -rotate-12 hover:rotate-0 transition-transform duration-500 grayscale opacity-70"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Military Grade", desc: "Tested drop protection up to 10ft." },
              { icon: Zap, title: "MagSafe Ready", desc: "Perfectly aligned magnets for fast charging." },
              { icon: Star, title: "Premium Material", desc: "Anti-yellowing technology keeps it clear." },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mx-auto mb-6">
                  <f.icon className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-xl mb-3">{f.title}</h3>
                <p className="text-slate-500">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-display text-4xl font-bold mb-4">Featured Collection</h2>
              <p className="text-slate-500">Handpicked favorites just for you</p>
            </div>
            <Link href="/shop">
              <Button variant="ghost" className="hidden md:flex gap-2 text-sky-600 hover:text-sky-700 hover:bg-sky-50">
                View All <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts?.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
           {/* dark abstract background */}
           <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80" 
            className="w-full h-full object-cover opacity-20"
            alt="Background"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center py-12">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Cyber Week Sale
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Get up to 50% off on all premium cases and accessories. Limited time only.
          </p>
          <Link href="/shop">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-sky-50 rounded-full px-10 h-14 text-lg font-bold">
              Shop The Sale
            </Button>
          </Link>
        </div>
      </section>

      {/* Trending */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">Trending Now</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts?.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
