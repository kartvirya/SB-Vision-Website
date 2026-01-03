import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";

export default function About() {
  return (
    <>
      <SEO 
        title="About Us - SB Vision | Your Trusted Phone Store in Kathmandu, Nepal"
        description="Learn about SB Vision - Suraj Electronics Nepal. Located in Khahare Khola, Kathmandu. We offer genuine phones and premium accessories with expert service and competitive prices."
        keywords="about SB Vision, Suraj Electronics Nepal history, phone store Kathmandu about, mobile accessories store Nepal, trusted phone dealer Kathmandu"
      />
      <div className="pt-24 min-h-screen bg-white pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl font-bold mb-6"
          >
            Your Trusted <span className="text-sky-500">Phone Store</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-500 leading-relaxed"
          >
            Suraj Electronics Nepal - Your one-stop destination for latest smartphones and premium phone accessories in Kathmandu.
          </motion.p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-sky-500/10">
            {/* Using stock image for team/office */}
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80" 
              alt="Our Team" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                Located in the heart of Kathmandu, Suraj Electronics Nepal has been serving customers with the latest smartphones and premium phone accessories for years.
              </p>
              <p>
                We understand that your phone is more than just a device - it's your connection to the world. That's why we offer only genuine products from trusted brands, ensuring quality and reliability.
              </p>
              <p>
                From the newest flagship phones to essential accessories like cases, screen protectors, chargers, and cables - we have everything you need to keep your device protected and fully functional.
              </p>
              <p>
                Our commitment is to provide excellent customer service, competitive prices, and genuine products with proper warranty support.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-slate-50 rounded-3xl p-12 md:p-20 text-center">
          <h2 className="font-display text-3xl font-bold mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Genuine Products", desc: "100% authentic phones and accessories from authorized dealers." },
              { title: "Best Prices", desc: "Competitive pricing with regular offers and discounts." },
              { title: "Expert Support", desc: "Professional advice and after-sales service you can trust." },
            ].map((v, i) => (
              <div key={i}>
                <h3 className="font-bold text-xl mb-4 text-slate-900">{v.title}</h3>
                <p className="text-slate-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
