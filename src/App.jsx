import { useState, useEffect } from 'react';
import { MEDIA_URLS } from './constants/media';
import ThreeScene from './components/ThreeScene';
import Loader from './components/Loader';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import Hero from './components/Hero';
import AudioPlayer from './components/AudioPlayer';
import Annonce from './components/Annonce';
import PhotoFrame from './components/PhotoFrame';
import Localisation from './components/Localisation';
import Tissus from './components/Tissus';
import Remerciements from './components/Remerciements';
import MenuCarousel from './components/MenuCarousel';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [headerVisible, setHeaderVisible] = useState(false);

  const handleLoaderComplete = () => {
    setHeaderVisible(true);
  };

  // Smooth scroll handler
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          targetElement.scrollIntoView({
            behavior: prefersReducedMotion ? 'auto' : 'smooth'
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <>
      <ThreeScene />

      <Loader visible={loaderVisible} onComplete={handleLoaderComplete} />

      {headerVisible && <Header className="desktop-header" />}

      <main>
        <Hero setLoaderVisible={setLoaderVisible} />

        {/* Audio Section 1 - Auto-play */}
        <section
          id="audio1"
          style={{
            background: 'var(--color-dark-gray)',
            padding: 'var(--spacing-2xl) var(--spacing-md)',
            textAlign: 'center',
            borderTop: '2px solid var(--color-gold)',
            borderBottom: '2px solid var(--color-gold)'
          }}
        >
          <AudioPlayer
            src={MEDIA_URLS.audio.main}
            trackName="Musique de recueillement"
            autoPlay={true}
          />
        </section>

        <Annonce />

        <PhotoFrame />

        <Localisation />

        <Tissus />

        <Remerciements audio2Playing={audio2Playing} />

        <MenuCarousel />
      </main>

      <MobileNav />

      <Footer />
    </>
  );
}

export default App;
