import { motion } from "framer-motion";
import { Leaf, Globe, Sparkles } from "lucide-react";

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
    icon: Sparkles,
    title: "Print on Demand",
    description: "Choose to print only what you love, reducing overproduction and waste in the art industry.",
  },
];

const SustainabilitySection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-secondary-foreground/70 font-sans">
            Our Commitment
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-secondary-foreground mt-3">
            Sustainable Digital Art
          </h2>
          <p className="text-secondary-foreground/80 mt-4 max-w-xl mx-auto text-sm leading-relaxed font-sans">
            We believe beautiful art shouldn't cost the earth—literally. Every piece in our collection
            is delivered digitally, leaving nothing behind but inspiration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="h-12 w-12 rounded-full bg-secondary-foreground/10 flex items-center justify-center mx-auto">
                <feature.icon className="h-5 w-5 text-secondary-foreground" />
              </div>
              <h3 className="font-serif text-xl text-secondary-foreground mt-4">{feature.title}</h3>
              <p className="text-secondary-foreground/70 text-sm mt-2 leading-relaxed font-sans">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
