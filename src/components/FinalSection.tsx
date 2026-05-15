import { motion } from 'motion/react';
import { COUPLE_DATA } from '../constants';
import { Heart, RefreshCw } from 'lucide-react';

export default function FinalSection() {
  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
        window.location.reload();
    }, 1000);
  };

  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden premium-gradient-bg">
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      <div className="absolute inset-0 cinematic-vignette opacity-60 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-center px-6 relative z-10"
      >
        <div className="flex justify-center items-center gap-6 mb-16">
            <div className="h-[1px] w-12 bg-white/10" />
            <div className="flex gap-3">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 1, 0.3] }}
                        transition={{ repeat: Infinity, duration: 4, delay: i * 0.5 }}
                        className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#ec4899]"
                    />
                ))}
            </div>
            <div className="h-[1px] w-12 bg-white/10" />
        </div>

        <h2 className="text-white text-4xl md:text-6xl font-light tracking-tighter mb-12 leading-[1.1]">
          Our Journey <br />
          Continues <span className="text-primary italic font-serif">Forever</span><span className="text-primary">🤍</span>
        </h2>
        
        <p className="text-primary-light/30 font-inter text-[10px] uppercase tracking-[0.5em] mb-20">
          Established 16 Aug 2025 • Phase 09
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <button 
                onClick={handleReplay}
                className="px-10 py-4 bg-white text-black font-bold tracking-[0.2em] uppercase text-[10px] rounded-full hover:bg-primary-light transition-all duration-500 shadow-xl shadow-white/5 active:scale-95 flex items-center gap-3 group"
            >
                <RefreshCw size={14} className="group-hover:rotate-12 transition-transform" />
                Replay Journey
            </button>
            <div className="text-[10px] uppercase tracking-widest text-white/20 font-inter">
                 rizkyyy & mitaaa
            </div>
        </div>
      </motion.div>

      {/* Footer Info */}
      <div className="absolute bottom-12 text-[9px] text-white/10 font-inter uppercase tracking-[0.6em] select-none">
        Developed with pure effort & love for you 🤍
      </div>
    </div>
  );
}
