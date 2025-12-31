import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import { useSubscribe } from "@/hooks/use-messages";
import { useState } from "react";
import { Button } from "./ui/button";

export function Footer() {
  const [email, setEmail] = useState("");
  const subscribe = useSubscribe();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      subscribe.mutate({ email });
      setEmail("");
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                SB Vision
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Premium mobile accessories that combine style, protection, and futuristic design. Elevate your device today.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-white text-lg mb-6">Shop</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/shop" className="hover:text-sky-400 transition-colors">All Products</Link></li>
              <li><Link href="/shop?category=Phone Case" className="hover:text-sky-400 transition-colors">Phone Cases</Link></li>
              <li><Link href="/shop?category=Screen Protector" className="hover:text-sky-400 transition-colors">Screen Protectors</Link></li>
              <li><Link href="/shop?trending=true" className="hover:text-sky-400 transition-colors">Trending Now</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white text-lg mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/contact" className="hover:text-sky-400 transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-sky-400 transition-colors">FAQs</Link></li>
              <li><Link href="#" className="hover:text-sky-400 transition-colors">Shipping Info</Link></li>
              <li><Link href="#" className="hover:text-sky-400 transition-colors">Returns & Exchanges</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white text-lg mb-6">Stay Updated</h4>
            <p className="text-sm text-slate-400 mb-4">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-slate-800 border-none rounded-full py-3 px-5 pr-12 focus:ring-2 focus:ring-sky-500 text-white placeholder:text-slate-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit" 
                size="icon" 
                className="absolute right-1 top-1 h-10 w-10 rounded-full bg-sky-500 hover:bg-sky-400"
                disabled={subscribe.isPending}
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>© 2024 SB Vision. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
