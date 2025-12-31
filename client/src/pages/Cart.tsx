import { useStore } from "@/hooks/use-store";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, ArrowRight, CreditCard } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useStore();
  
  const subtotal = cart.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 10;
  const total = subtotal + shipping;

  return (
    <div className="pt-24 min-h-screen bg-slate-50 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-4xl font-bold mb-8">Shopping Cart</h1>
        
        {cart.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-slate-500 mb-8">Looks like you haven't added anything yet.</p>
            <Link href="/shop">
              <Button size="lg" className="rounded-full bg-sky-500 hover:bg-sky-600">
                Start Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence>
                {cart.map((item) => (
                  <motion.div
                    key={`${item.id}-${item.selectedColor}-${item.selectedModel}`}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col sm:flex-row gap-6 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm"
                  >
                    <div className="w-24 h-24 bg-slate-50 rounded-xl shrink-0 overflow-hidden">
                      <img 
                        src={Array.isArray(item.images) ? item.images[0] : ""} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-display font-bold text-lg">{item.name}</h3>
                        <span className="font-bold text-lg">${Number(item.price) * item.quantity}</span>
                      </div>
                      
                      <div className="text-sm text-slate-500 mb-4 space-x-4">
                        {item.selectedColor && <span>Color: {item.selectedColor}</span>}
                        {item.selectedModel && <span>Model: {item.selectedModel}</span>}
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3 bg-slate-50 rounded-lg p-1">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-8 text-center font-medium text-sm">{item.quantity}</span>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                        
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-rose-500 hover:text-rose-600 hover:bg-rose-50"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="w-4 h-4 mr-2" /> Remove
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm sticky top-24">
                <h3 className="font-display font-bold text-xl mb-6">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="border-t border-slate-100 pt-4 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <Button className="w-full h-12 text-lg bg-sky-500 hover:bg-sky-600 shadow-lg shadow-sky-500/20 mb-3">
                  Checkout <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                
                <div className="flex justify-center gap-2 text-slate-300">
                   <CreditCard className="w-6 h-6" />
                   {/* Add more payment icons here */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
