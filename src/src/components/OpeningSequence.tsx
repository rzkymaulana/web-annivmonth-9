import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { COUPLE_DATA } from '../constants';
import { Heart } from 'lucide-react';

interface Props {
  onComplete: () => void;
}

export default function OpeningSequence({ onComplete }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const flowerRef = useRef<SVGSVGElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setIsAnimating(false)
    });

    // 1. Initial State
    gsap.set([text1Ref.current, text2Ref.current, buttonRef.current], { opacity: 0, y: 20 });
    gsap.set(".petal", { transformOrigin: "bottom center", scale: 0, opacity: 0 });

    // 2. Flower Bloom Animation
    tl.to(".petal", {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      stagger: 0.1,
      ease: "power2.out",
      delay: 0.5
    })
    .to(".flower-core", {
      scale: 1.2,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    }, "<")
    .to(flowerRef.current, {
      filter: "drop-shadow(0 0 20px rgba(236, 72, 153, 0.8))",
      duration: 2
    }, "-=1");

    // 3. Text Sequence
    tl.to(text1Ref.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out"
    }, "+=0.5")
    .to(text2Ref.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out"
    }, "+=0.3")
    .to(buttonRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "elastic.out(1, 0.3)"
    }, "+=0.5");

    return () => {
      tl.kill();
    };
  }, []);

  const handleStart = () => {
    gsap.to(containerRef.current, {
      scale: 1.5,
      opacity: 0,
      filter: "blur(20px)",
      duration: 1.5,
      ease: "power4.inOut",
      onComplete: onComplete
    });
  };

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg-dark overflow-hidden"
    >
      {/* Cinematic Vignette */}
      <div className="absolute inset-0 cinematic-vignette pointer-events-none" />
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />

      {/* Flower SVG */}
      <div className="relative mb-12">
        <svg 
          ref={flowerRef}
          viewBox="0 0 200 200" 
          className="w-48 h-48 md:w-64 md:h-64"
        >
          {/* Petals */}
          <path className="petal fill-primary/60" d="M100 100 Q100 40 130 30 Q160 20 160 60 Q160 100 100 100" />
          <path className="petal fill-primary-dark/60" d="M100 100 Q140 100 150 130 Q160 160 120 160 Q80 160 100 100" />
          <path className="petal fill-primary/60" d="M100 100 Q100 160 70 170 Q40 180 40 140 Q40 100 100 100" />
          <path className="petal fill-primary-dark/60" d="M100 100 Q60 100 50 70 Q40 40 80 40 Q120 40 100 100" />
          
          <path className="petal fill-secondary/40" d="M100 100 Q100 20 140 10 Q180 0 180 50 Q180 100 100 100" />
          <path className="petal fill-secondary-dark/40" d="M100 100 Q180 100 190 140 Q200 180 150 180 Q100 180 100 100" />
          <path className="petal fill-secondary/40" d="M100 100 Q100 180 60 190 Q20 200 20 150 Q20 100 100 100" />
          <path className="petal fill-secondary-dark/40" d="M100 100 Q20 100 10 60 Q0 20 50 20 Q100 20 100 100" />
          
          {/* Core */}
          <circle className="flower-core fill-white/80" cx="100" cy="100" r="15" />
          <Heart className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-primary-dark opacity-50" />
        </svg>
      </div>

      {/* Texts */}
      <div className="text-center z-10 px-6">
        <div ref={text1Ref} className="text-primary-light font-inter tracking-[0.4em] uppercase text-[10px] mb-4 opacity-60">
          Digital Love Experience — Vol. 09
        </div>
        
        <h1 
          ref={text2Ref} 
          className="text-white text-4xl md:text-7xl font-light tracking-tighter mb-12 text-glow-pink"
        >
          rizkyyy<span className="text-primary font-normal">&</span>mitaaa<span className="text-primary">🤍</span>
        </h1>

        <button
          ref={buttonRef}
          onClick={handleStart}
          className="bg-white text-black px-10 py-4 rounded-full font-inter tracking-[0.2em] uppercase text-[10px] font-bold hover:bg-primary-light transition-all duration-500 shadow-xl shadow-white/5 active:scale-95 transition-all duration-300 group relative overflow-hidden"
        >
          <span className="relative z-10">open our memories</span>
        </button>
      </div>

      {/* Floating particles (simplified) */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-full blur-[1px]"
            style={{
              width: Math.random() * 4 + 'px',
              height: Math.random() * 4 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 10}s linear infinite`
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
