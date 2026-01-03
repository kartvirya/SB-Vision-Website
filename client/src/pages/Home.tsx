import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { useProducts } from "@/hooks/use-products";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Zap, Smartphone, Headphones, Battery, Cable } from "lucide-react";
import { SEO } from "@/components/SEO";

export default function Home() {
  const { data: featuredProducts } = useProducts({ featured: true });
  const { data: trendingProducts } = useProducts({ trending: true });
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 120]);
  const y2 = useTransform(scrollY, [0, 500], [0, -120]);
  const y3 = useTransform(scrollY, [0, 500], [0, 60]);
  const rotate1 = useTransform(scrollY, [0, 500], [12, 8]);
  const rotate2 = useTransform(scrollY, [0, 500], [-12, -8]);
  const rotate3 = useTransform(scrollY, [0, 500], [6, 4]);
  const scale1 = useTransform(scrollY, [0, 500], [1, 0.95]);
  const scale2 = useTransform(scrollY, [0, 500], [1, 0.95]);
  const scale3 = useTransform(scrollY, [0, 500], [1, 0.98]);
  
  return (
    <>
      <SEO 
        title="SB Vision - Latest Phones & Premium Accessories in Kathmandu, Nepal"
        description="Suraj Electronics Nepal - Your trusted destination for latest smartphones and premium phone accessories in Khahare Khola, Kathmandu. Genuine products, best prices, expert service. Call 9841759119."
        keywords="phones Nepal, mobile phones Kathmandu, phone accessories Kathmandu, smartphone store Nepal, iPhone cases Nepal, phone cases Kathmandu, screen protectors Nepal, phone chargers Kathmandu"
      />
      <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-sky-300/40 to-purple-300/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" 
          />
          <motion.div 
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-300/30 to-blue-300/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" 
          />
          <motion.div 
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl" 
          />
        </div>

        <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-sky-100 text-sky-700 font-medium text-sm mb-6">
              Premium Phones & Accessories 2025
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight text-slate-900 mb-6">
              Latest Phones & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400">
                Premium Accessories
              </span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Discover the latest smartphones and premium accessories. From cutting-edge phones to protective cases, screen protectors, and more - everything you need for your mobile lifestyle.
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

          <div className="relative h-[700px] w-full hidden md:block">
            {/* Phone cases from local public folder with enhanced animations */}
            
            {/* Image 1 - Top Right (Golden Cases) */}
            <motion.div 
              initial={{ opacity: 0, x: 100, y: -50, scale: 0.8, rotate: 20 }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 12 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ y: y1, rotate: rotate1, scale: scale1 }}
              className="absolute top-8 right-8 w-72 h-auto z-20"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 0, z: 50 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-amber-400/20 rounded-3xl blur-xl -z-10" />
                <img 
                  src="/Untitled-5.webp" 
                  alt="Premium Phone Case" 
                  className="w-full rounded-3xl shadow-2xl shadow-sky-500/30 object-cover border-2 border-white/50"
                />
              </motion.div>
            </motion.div>
            
            {/* Image 2 - Center (Stellar) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.6, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ y: y3, rotate: rotate3, scale: scale3 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-auto z-30"
            >
              <motion.div
                whileHover={{ scale: 1.08, rotate: 0, z: 50 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-pink-400/20 rounded-3xl blur-2xl -z-10 animate-pulse" />
                <img 
                  src="/Stellar.webp" 
                  alt="Stellar Phone Case" 
                  className="w-full rounded-3xl shadow-2xl shadow-purple-500/40 object-cover border-2 border-white/50"
                />
              </motion.div>
            </motion.div>
            
            {/* Image 3 - Bottom Left (Slimfit) */}
            <motion.div 
              initial={{ opacity: 0, x: -100, y: 50, scale: 0.8, rotate: -20 }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: -12 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ y: y2, rotate: rotate2, scale: scale2 }}
              className="absolute bottom-16 left-8 w-72 h-auto z-10"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 0, z: 50 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-3xl blur-xl -z-10" />
                <img 
                  src="/slimfit.webp" 
                  alt="Slimfit Phone Case" 
                  className="w-full rounded-3xl shadow-2xl shadow-cyan-500/30 object-cover border-2 border-white/50"
                />
              </motion.div>
            </motion.div>

            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-sky-400/30 rounded-full"
                  initial={{
                    x: Math.random() * 100 + '%',
                    y: Math.random() * 100 + '%',
                    opacity: 0,
                  }}
                  animate={{
                    y: [null, Math.random() * 200 - 100],
                    x: [null, Math.random() * 200 - 100],
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Latest Phones", desc: "Brand new smartphones from top brands with warranty and support." },
              { icon: Zap, title: "Premium Accessories", desc: "High-quality cases, screen protectors, chargers, and more." },
              { icon: Star, title: "Expert Service", desc: "Professional advice and after-sales support for all your needs." },
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
              <h2 className="font-display text-4xl font-bold mb-4">Featured Products</h2>
              <p className="text-slate-500">Latest phones and top-rated accessories</p>
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

      {/* Categories Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-slate-500">Everything you need for your mobile device</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Smartphone, title: "Latest Phones", desc: "New smartphones", href: "/shop?category=Phones", color: "bg-blue-100 text-blue-600" },
              { icon: Shield, title: "Phone Cases", desc: "Protection & style", href: "/shop?category=Phone Case", color: "bg-purple-100 text-purple-600" },
              { icon: Star, title: "Screen Protectors", desc: "Crystal clear", href: "/shop?category=Screen Protector", color: "bg-cyan-100 text-cyan-600" },
              { icon: Battery, title: "Chargers", desc: "Fast charging", href: "/shop?category=Charger", color: "bg-green-100 text-green-600" },
            ].map((cat, i) => (
              <Link key={i} href={cat.href}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:border-sky-200 transition-all cursor-pointer group"
                >
                  <div className={`w-14 h-14 rounded-xl ${cat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <cat.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{cat.title}</h3>
                  <p className="text-sm text-slate-500">{cat.desc}</p>
                </motion.div>
              </Link>
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
            Special Offers
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Get amazing deals on latest phones and premium accessories. Limited time offers with great discounts.
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
          <h2 className="font-display text-4xl font-bold mb-12 text-center">Trending Products</h2>
          <p className="text-slate-500 text-center mb-12">Most popular phones and accessories this week</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts?.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
