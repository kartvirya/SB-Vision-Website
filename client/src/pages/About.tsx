import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-white pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl font-bold mb-6"
          >
            The Future of <span className="text-sky-500">Protection</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-500 leading-relaxed"
          >
            SB Vision was born from a simple idea: phone accessories shouldn't just protect, they should inspire.
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
                Founded in 2024, we noticed a gap in the market. Phone cases were either protective but bulky, or slim but fragile. We set out to change that.
              </p>
              <p>
                Our engineering team spent months researching advanced materials used in aerospace industries to create our signature Impact-X™ polymer.
              </p>
              <p>
                Today, SB Vision represents the intersection of futuristic design and military-grade protection. We are for the visionaries, the creators, and those who demand the best.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-slate-50 rounded-3xl p-12 md:p-20 text-center">
          <h2 className="font-display text-3xl font-bold mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Innovation First", desc: "We never settle for 'good enough'. We push boundaries." },
              { title: "Sustainable Future", desc: "100% recycled materials in our packaging." },
              { title: "Customer Obsession", desc: "Your device's safety is our #1 priority." },
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
  );
}
