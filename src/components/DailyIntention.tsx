import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, RotateCcw } from "lucide-react";

const intentions = [
  { text: "I am worthy of all the beauty life has to offer.", theme: "Worthiness" },
  { text: "I release what no longer serves me and welcome transformation.", theme: "Release" },
  { text: "My intuition guides me toward my highest purpose.", theme: "Intuition" },
  { text: "I honor my journey and trust the unfolding.", theme: "Trust" },
  { text: "I am a vessel of creativity and light.", theme: "Creativity" },
  { text: "Abundance flows to me effortlessly and endlessly.", theme: "Abundance" },
  { text: "I am grounded, centered, and at peace.", theme: "Peace" },
  { text: "Every ending is a sacred beginning.", theme: "Renewal" },
  { text: "I choose to see the magic in the mundane.", theme: "Presence" },
  { text: "My heart is open to giving and receiving love.", theme: "Love" },
];

const DailyIntention = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentCard, setCurrentCard] = useState<typeof intentions[0] | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const drawCard = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);

    if (isFlipped) {
      // Reset first
      setIsFlipped(false);
      setTimeout(() => {
        const randomCard = intentions[Math.floor(Math.random() * intentions.length)];
        setCurrentCard(randomCard);
        setTimeout(() => {
          setIsFlipped(true);
          setIsAnimating(false);
        }, 300);
      }, 500);
    } else {
      const randomCard = intentions[Math.floor(Math.random() * intentions.length)];
      setCurrentCard(randomCard);
      setIsFlipped(true);
      setTimeout(() => setIsAnimating(false), 600);
    }
  }, [isFlipped, isAnimating]);

  return (
    <section id="intention" className="py-24 px-4 sm:px-6 lg:px-8 bg-charcoal relative overflow-hidden">
      {/* Subtle gold decorative elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-charcoal-foreground/50 font-sans font-medium">
            Interactive Experience
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal-foreground mt-3 italic">
            Daily Intention
          </h2>
          <p className="text-charcoal-foreground/60 text-sm mt-3 max-w-md mx-auto font-sans">
            Draw a card to set your intention for today. Let the universe guide your focus.
          </p>
        </motion.div>

        {/* Card */}
        <div className="mt-14 flex justify-center">
          <div
            className="perspective-1000 cursor-pointer"
            onClick={drawCard}
          >
            <motion.div
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="preserve-3d relative w-[240px] h-[360px] sm:w-[280px] sm:h-[420px]"
            >
              {/* Front (back of card) */}
              <div className="backface-hidden absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary via-secondary to-charcoal border border-gold/20 flex flex-col items-center justify-center shadow-2xl">
                <div className="absolute inset-3 rounded-xl border border-gold/15" />
                <Sparkles className="h-8 w-8 text-gold/60 mb-4" />
                <p className="font-serif text-xl text-charcoal-foreground/80 italic">Draw</p>
                <p className="font-serif text-xl text-charcoal-foreground/80 italic">Your Card</p>
                <div className="absolute bottom-6 flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="h-1 w-1 rounded-full bg-gold/40" />
                  ))}
                </div>
              </div>

              {/* Back (intention) */}
              <div className="backface-hidden rotate-y-180 absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/90 via-primary to-primary/80 border border-gold/30 flex flex-col items-center justify-center p-8 shadow-2xl">
                <div className="absolute inset-3 rounded-xl border border-gold/15" />
                <AnimatePresence mode="wait">
                  {currentCard && (
                    <motion.div
                      key={currentCard.theme}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center z-10"
                    >
                      <span className="text-[9px] tracking-[0.3em] uppercase text-primary-foreground/60 font-sans font-medium">
                        {currentCard.theme}
                      </span>
                      <p className="font-serif text-lg sm:text-xl text-primary-foreground mt-4 leading-relaxed italic">
                        "{currentCard.text}"
                      </p>
                      <div className="h-[1px] w-10 bg-gold/50 mx-auto mt-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Draw Again */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <button
            onClick={drawCard}
            disabled={isAnimating}
            className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-sans font-medium text-charcoal-foreground/50 hover:text-charcoal-foreground/80 transition-colors disabled:opacity-50"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            {isFlipped ? "Draw Again" : "Tap the Card"}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default DailyIntention;
