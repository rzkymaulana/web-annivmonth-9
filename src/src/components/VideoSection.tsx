import { motion } from 'motion/react';
import { ASSETS } from '../constants';

export default function VideoSection() {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-white text-4xl font-light tracking-tighter mb-4">Cinematic Archive</h2>
        <p className="text-primary-light/40 font-inter text-[10px] uppercase tracking-[0.4em]">16 Aug 2025 • Memories in Motion</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="relative aspect-video max-w-5xl mx-auto rounded-[3rem] overflow-hidden premium-shadow group border border-white/10"
      >
        <video 
          src={ASSETS.video}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
        />
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-bg-dark/60 via-transparent to-primary/10 pointer-events-none" />
        <div className="absolute inset-0 cinematic-vignette opacity-80 pointer-events-none" />

        {/* Floating Label */}
        <div className="absolute top-8 left-8 bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#ec4899] animate-pulse" />
          <span className="text-white text-[10px] uppercase tracking-widest font-inter opacity-80">Directing our Journey</span>
        </div>
      </motion.div>
    </div>
  );
}
