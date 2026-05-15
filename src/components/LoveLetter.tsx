import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { LOVE_LETTER } from '../constants';
import { motion } from 'motion/react';

export default function LoveLetter() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [LOVE_LETTER],
      typeSpeed: 5,
      showCursor: true,
      cursorChar: '🤍',
      onComplete: () => {
        console.log("Typing finished");
      }
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container mx-auto px-6 max-w-4xl">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="glass p-8 md:p-16 rounded-[3rem] relative overflow-hidden group shadow-2xl"
      >
        {/* Decorative Pink Glows */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px] group-hover:bg-primary/30 transition-colors duration-1000" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-dark/10 rounded-full blur-[100px]" />

        <div className="flex items-center gap-4 mb-12">
          <div className="glow-dot" />
          <div>
            <h3 className="text-white font-poppins font-light text-2xl tracking-tight">The Heartfelt Note</h3>
            <p className="text-primary-light/40 text-[10px] uppercase tracking-[0.3em]">rizkyyy & mitaaa — 16 Aug 2025</p>
          </div>
        </div>

        <div className="flex-1 overflow-visible">
          <div className="font-serif text-xl md:text-2xl leading-relaxed text-pink-50/90 italic tracking-wide">
             <span ref={el} className="block whitespace-pre-wrap" />
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/5 pt-12">
          <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-inter">
            Milestone: 9 Months Success
          </div>
          <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-inter">
            Love Letter for You 🤍
          </div>
        </div>
      </motion.div>
    </div>
  );
}
