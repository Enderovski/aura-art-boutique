import { motion } from "framer-motion";
import { Leaf, Globe, Sparkles, Recycle } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Zero Waste",
    description: "No packaging, no shipping materials. Every purchase is instantly delivered to your inbox.",
  },
  {
    icon: Globe,
    title: "No Carbon Footprint",
    description: "Digital delivery means zero transportation emissions. Art that's beautiful for you and the planet.",
  },
  {
    icon: Recycle,
    title: "Print on Demand",
    description: "Choose to print only what you love, reducing overproduction and waste in the art industry.",
  },
  {
    icon: Sparkles,
    title: "Infinite Copies",
    description: "One purchase, unlimited prints. No waste from mass production — only what you need, when you need it.",
  },
];

const SustainabilitySection = () => {
  return (
    <section id="sustainability" className="py-28 px-4 sm:px-6 lg:px-8 bg-secondary relative overflow-hidden">
      {/* Gold line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-secondary-foreground/50 font-sans font-medium">
              Our Commitment
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-secondary-foreground mt-3 italic leading-tight">
              Sustainable <br />Digital Art
            </h2>
            <div className="h-[1px] w-12 bg-gold/50 mt-5" />
            <p className="text-secondary-foreground/70 mt-6 text-sm leading-relaxed font-sans max-w-md">
              We believe beautiful art shouldn't cost the earth — literally. Every piece in our collection
              is delivered digitally, leaving nothing behind but inspiration. No shipping trucks, 
              no plastic packaging, no excess inventory. Just pure creative expression, 
              delivered instantly to your doorstep.
            </p>

            {/* Digital Sustainability Badge */}
            <div className="mt-8 inline-flex items-center gap-3 bg-secondary-foreground/5 rounded-full px-5 py-3">
              <div className="h-8 w-8 rounded-full bg-gold/20 flex items-center justify-center">
                <Leaf className="h-4 w-4 text-gold" />
              </div>
              <div>
                <p className="text-xs font-semibold text-secondary-foreground font-sans">Zero Footprint Certified</p>
                <p className="text-[10px] text-secondary-foreground/50 font-sans">100% Digital · No Physical Waste</p>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-secondary-foreground/5 rounded-xl p-6 hover:bg-secondary-foreground/10 transition-colors duration-300"
              >
                <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <feature.icon className="h-4 w-4 text-gold" />
                </div>
                <h3 className="font-serif text-lg text-secondary-foreground mt-4">{feature.title}</h3>
                <p className="text-secondary-foreground/60 text-xs mt-2 leading-relaxed font-sans">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
