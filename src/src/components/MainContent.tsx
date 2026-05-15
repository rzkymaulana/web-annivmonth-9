import Hero from './Hero';
import Gallery from './Gallery';
import LoveLetter from './LoveLetter';
import VideoSection from './VideoSection';
import Countdown from './Countdown';
import FinalSection from './FinalSection';
import ParticlesBG from './ParticlesBG';

export default function MainContent() {
  return (
    <main className="relative z-0">
      <ParticlesBG />

      {/* Professional Polish Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-10 h-16 md:h-24 flex justify-between items-end pb-4 md:pb-6 pointer-events-none">
        <div className="bg-black/20 backdrop-blur-md p-4 rounded-xl border border-white/5 pointer-events-auto">
          <p className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-primary-light/60 mb-1">Mirror of our Story — Vol. 09</p>
          <h1 className="text-xl md:text-3xl font-light tracking-tighter text-white">rizkyyy<span className="text-primary font-normal">&</span>mitaaa<span className="text-primary">🤍</span></h1>
        </div>
        <div className="text-right bg-black/20 backdrop-blur-md p-4 rounded-xl border border-white/5 pointer-events-auto">
          <p className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-primary-light/60 mb-1">Status: Unbreakable</p>
          <p className="text-sm md:text-xl font-serif italic text-white/90">9 Months of Magic</p>
        </div>
      </header>
      
      <section id="hero">
        <Hero />
      </section>

      <section id="gallery" className="py-24">
        <Gallery />
      </section>

      <section id="love-letter" className="py-24">
        <LoveLetter />
      </section>

      <section id="video" className="py-24">
        <VideoSection />
      </section>

      <section id="countdown" className="py-24">
        <Countdown />
      </section>

      <section id="final">
        <FinalSection />
      </section>
    </main>
  );
}
