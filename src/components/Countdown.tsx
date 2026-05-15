import { useState, useEffect } from 'react';
import { COUPLE_DATA } from '../constants';
import { motion } from 'motion/react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const target = new Date(COUPLE_DATA.anniversaryDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-6 text-center">
      <div className="mb-16">
        <p className="text-primary-light/40 text-[10px] uppercase tracking-[0.4em] mb-4">Milestone Progress</p>
        <h2 className="text-white text-4xl font-light tracking-tighter mb-4">Countdown to 1 Year</h2>
        <div className="w-12 h-[1px] bg-white/10 mx-auto" />
      </div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Mins" />
        <TimeUnit value={timeLeft.seconds} label="Secs" />
      </div>

      <div className="mt-16 max-w-md mx-auto h-[2px] bg-white/5 relative overflow-hidden rounded-full">
         <motion.div 
           initial={{ width: 0 }}
           whileInView={{ width: '75%' }}
           transition={{ duration: 2, ease: "easeOut" }}
           className="absolute h-full bg-primary shadow-[0_0_15px_#ec4899]"
         />
      </div>
      <p className="mt-4 text-[10px] uppercase tracking-widest text-primary-light/20">Approx. 75% Completed</p>
    </div>
  );
}

function TimeUnit({ value, label }: { value: number, label: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-white/5 backdrop-blur-lg w-20 h-24 md:w-32 md:h-40 rounded-2xl border border-white/10 flex flex-col items-center justify-center premium-shadow relative overflow-hidden group"
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <span className="text-2xl md:text-5xl font-light text-white mb-2">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-[8px] md:text-[10px] font-inter uppercase tracking-[0.2em] text-white/30">
        {label}
      </span>
    </motion.div>
  );
}
