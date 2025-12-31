import { useState } from "react";
import { useSendMessage } from "@/hooks/use-messages";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const sendMessage = useSendMessage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage.mutate(formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="font-display text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-slate-500 text-lg">
            Have questions about our products? We're here to help you find the perfect match for your device.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Info Cards */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Email Us</h3>
                <p className="text-slate-500 text-sm mb-2">Typically replies within 2 hours</p>
                <a href="mailto:support@sbvision.com" className="text-sky-600 hover:underline font-medium">support@sbvision.com</a>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Call Us</h3>
                <p className="text-slate-500 text-sm mb-2">Mon-Fri from 8am to 5pm</p>
                <a href="tel:+1234567890" className="text-sky-600 hover:underline font-medium">+1 (234) 567-890</a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                <p className="text-slate-500 text-sm">
                  123 Tech Avenue<br/>Silicon Valley, CA 94000
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-lg shadow-sky-500/5 border border-slate-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Name</label>
                  <Input 
                    placeholder="John Doe" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Message</label>
                <Textarea 
                  placeholder="How can we help you?" 
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  className="bg-slate-50 border-slate-200 focus:bg-white transition-colors resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full h-12 bg-sky-500 hover:bg-sky-600 text-lg font-bold"
                disabled={sendMessage.isPending}
              >
                {sendMessage.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
