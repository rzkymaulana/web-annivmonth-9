import { useState, useEffect, useRef } from 'react';
import { Play, Pause, Music, Volume2, VolumeX, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';

interface Props {
  started: boolean;
}

export default function MusicPlayer({ started }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = document.getElementById('main-bg-music') as HTMLAudioElement;
    if (started) setIsPlaying(true);
  }, [started]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleEasterEgg = () => {
    setShowPopup(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#F8E1E9', '#F4C2C2', '#D8A7B1']
    });
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-[100] h-20 md:h-24 bg-black/40 backdrop-blur-2xl border-t border-white/5 flex items-center px-4 md:px-10 justify-between">
        <div className="flex items-center gap-4 md:gap-8">
          <button
            onClick={togglePlay}
            className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all border border-white/10 group shadow-lg"
          >
            {isPlaying ? <Pause size={20} fill="white" /> : <Play size={20} className="ml-1" fill="white" />}
          </button>

          <div className="flex flex-col">
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary-light/60 mb-1">Now Playing</p>
            <div className="flex items-center gap-3">
               <span className="text-xs md:text-sm font-medium tracking-wide text-white truncate max-w-[100px] md:max-w-none">
                 Eternal Romance Melody
               </span>
               {isPlaying && (
                  <div className="flex gap-1 items-end h-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ height: isPlaying ? [4, 16, 8, 20, 6] : 4 }}
                        transition={{ repeat: Infinity, duration: 1, delay: i * 0.15 }}
                        className="w-[2px] bg-primary rounded-full shadow-[0_0_5px_#ec4899]"
                      />
                    ))}
                  </div>
               )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-8">
           <button 
             onClick={toggleMute}
             className="hidden md:flex text-white/40 hover:text-white transition-colors"
           >
             {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
           </button>

           <div className="hidden lg:block h-10 w-[1px] bg-white/5" />

           <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEasterEgg}
              className="bg-primary/20 hover:bg-primary/30 text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border border-primary/20 transition-all flex items-center gap-2"
           >
              Sayanggg <Heart size={12} fill="currentColor" />
           </motion.button>
        </div>
      </div>

      {/* Easter Egg Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center px-6"
          >
            <div 
              className="absolute inset-0 bg-romantic-dark/40 backdrop-blur-md" 
              onClick={() => setShowPopup(false)}
            />
            <motion.div 
              initial={{ scale: 0.5, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.5, y: 100 }}
              className="glass p-12 rounded-[3rem] text-center max-w-sm relative z-10 premium-shadow"
            >
              <div className="flex justify-center gap-2 mb-6">
                 <Heart className="text-secondary fill-secondary animate-bounce" />
                 <Heart className="text-secondary fill-secondary animate-bounce" style={{ animationDelay: '0.2s' }} />
                 <Heart className="text-secondary fill-secondary animate-bounce" style={{ animationDelay: '0.4s' }} />
              </div>
              <h3 className="text-white text-3xl font-poppins font-bold mb-4">awww aww 🤍</h3>
              <p className="text-white/80 font-manrope mb-8">Sayanggg, makasih udah klik ini! I love you so much more than words can say. <br/>— Rizky</p>
              <button 
                onClick={() => setShowPopup(false)}
                className="bg-white text-romantic-dark px-8 py-3 rounded-full font-inter text-xs uppercase tracking-widest font-bold"
              >
                Close 🤍
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
