import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ShoppingBag, Search, Menu, X, Heart } from "lucide-react";
import { useStore } from "@/hooks/use-store";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const cart = useStore((state) => state.cart);
  const wishlist = useStore((state) => state.wishlist);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform">
            S
          </div>
          <span className="font-display font-bold text-2xl tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
            SB Vision
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`font-medium text-sm transition-colors hover:text-sky-500 ${
                location === link.href ? "text-sky-600" : "text-slate-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden sm:flex hover:text-sky-500 hover:bg-sky-50">
            <Search className="w-5 h-5" />
          </Button>
          
          <Link href="/wishlist">
             <Button variant="ghost" size="icon" className="relative hover:text-sky-500 hover:bg-sky-50 cursor-pointer">
              <Heart className={`w-5 h-5 ${wishlist.length > 0 ? 'fill-rose-400 text-rose-400' : ''}`} />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
              )}
            </Button>
          </Link>

          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative hover:text-sky-500 hover:bg-sky-50 cursor-pointer">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-sky-500 hover:bg-sky-600">
                  {cartCount}
                </Badge>
              )}
            </Button>
          </Link>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-6 mt-10">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.href}
                      className="text-2xl font-display font-bold hover:text-sky-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
