import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { COUPLE_DATA } from '../constants';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div 
      ref={containerRef}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden premium-gradient-bg"
    >
      {/* Cinematic Vignette */}
      <div className="absolute inset-0 cinematic-vignette pointer-events-none" />

      <motion.div 
        style={{ y, opacity }}
        className="text-center px-6 relative z-10"
      >
        <span className="inline-block text-primary-light/60 font-inter tracking-[0.6em] uppercase text-[10px] md:text-xs mb-8 animate-in fade-in slide-in-from-bottom duration-1000">
          Digital Love Experience — Vol. 09
        </span>
        
        <h1 className="text-white text-6xl md:text-[10rem] font-light tracking-tighter leading-none mb-12 select-none">
          rizkyyy<span className="text-primary font-normal">&</span>mitaaa<span className="text-primary">🤍</span>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="w-12 h-[1px] bg-white/10" />
          <p className="text-white/40 font-serif text-xl italic tracking-wide max-w-md">
            "9 Months of Magic & Memories"
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 flex flex-col items-center gap-4 text-white/20"
      >
        <span className="font-inter text-[10px] uppercase tracking-[0.5em]">Scroll our story</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={20} strokeWidth={1} />
        </motion.div>
      </motion.div>
    </div>
  );
}
