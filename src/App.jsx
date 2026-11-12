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
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';

function AppContent() {
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

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <>
      {/* Scène 3D d'arrière-plan immersive */}
      <ThreeScene />

      {/* Écran de chargement élégant */}
      <Loader visible={loaderVisible} onComplete={handleLoaderComplete} />

      {/* Navigation Desktop */}
      {headerVisible && <Header className="desktop-header" />}

      {/* Contenu principal */}
      <div className="site-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        <main>
          <Hero setLoaderVisible={setLoaderVisible} />

          {/* Audio Section 1 - Musique de recueillement */}
          <section
            id="audio1"
            style={{
              background: 'rgba(26, 26, 26, 0.85)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              padding: 'var(--spacing-2xl) var(--spacing-md)',
              textAlign: 'center',
              borderTop: '2px solid var(--color-gold)',
              borderBottom: '2px solid var(--color-gold)'
            }}
          >
            <AudioPlayer
              src={MEDIA_URLS.audio.main}
              trackName="Musique de recueillement"
              autoPlay={false}
            />
          </section>

          <Annonce />

          <PhotoFrame />

          <Localisation />

          <Tissus />

          <Remerciements />

          <MenuCarousel />
        </main>

        <Footer />
      </div>

      {/* Navigation Mobile en bas */}
      <MobileNav />
    </>
  );
}

export default function App() {
  return (
    <ErrorBoundary fallback={<div className="fatal-error">Une erreur est survenue lors du chargement de l'hommage.</div>}>
      <AppContent />
    </ErrorBoundary>
  );
}
