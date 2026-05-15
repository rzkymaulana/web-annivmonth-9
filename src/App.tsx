/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import OpeningSequence from './components/OpeningSequence';
import MainContent from './components/MainContent';
import MusicPlayer from './components/MusicPlayer';
import { ASSETS } from './constants';

export default function App() {
  const [showMain, setShowMain] = useState(false);
  const [audioStarted, setAudioStarted] = useState(false);

  useEffect(() => {
    // Smooth scrolling initialization
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleStart = () => {
    setShowMain(true);
    setAudioStarted(true);
    // Play main audio if not already started
    const audio = document.getElementById('main-bg-music') as HTMLAudioElement;
    if (audio) {
      audio.play().catch(e => console.log("Audio autoplay blocked:", e));
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden selection:bg-primary-dark/30">
      {/* Background Music Persistent */}
      <audio id="main-bg-music" src={ASSETS.audioMain} loop />
      
      {!showMain ? (
        <OpeningSequence onComplete={handleStart} />
      ) : (
        <>
          <div className="animate-in fade-in duration-1000">
            <MainContent />
            <MusicPlayer started={audioStarted} />
          </div>
        </>
      )}
    </div>
  );
}
