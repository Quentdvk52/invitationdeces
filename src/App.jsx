import { useState, useEffect } from 'react';
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
import { AudioProvider } from './context/AudioContext';
import { LightboxProvider } from './context/LightboxContext';
import './index.css';

function AppContent() {
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [headerVisible, setHeaderVisible] = useState(false);

  const handleLoaderComplete = () => {
    setLoaderVisible(false);
    setHeaderVisible(true);
  };

  useEffect(() => {
    // Gestion du défilement doux vers les ancres
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
      {/* Univers 3D immersif céleste (Three.js) */}
      <ThreeScene />

      {/* Écran d'accueil poétique avec déclenchement audio automatique */}
      <Loader visible={loaderVisible} onComplete={handleLoaderComplete} />

      {/* Header en îlot flottant détachable */}
      {headerVisible && <Header />}

      {/* Contenu principal de l'hommage */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <main>
          <Hero />

          {/* Section d'Introduction Musicale Sacrée */}
          <section
            id="audio1"
            style={{
              padding: 'var(--space-2xl) var(--space-md)',
              textAlign: 'center',
              position: 'relative'
            }}
          >
            <div style={{ maxWidth: '650px', margin: '0 auto var(--space-lg)' }}>
              <div className="section-eyebrow">
                <span>🎵</span> Recueillement Spirituel
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: '1.15rem',
                  color: 'var(--text-secondary)'
                }}
              >
                Laissez-vous porter par cette mélodie sacrée qui a bercé ses prières et ses moments de paix.
              </p>
            </div>

            <AudioPlayer
              trackId="recueillement"
              trackName="Musique de recueillement"
              subtitle="Méditation solennelle & hommage filial"
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

      {/* Dock de navigation mobile luxe */}
      <MobileNav />
    </>
  );
}

export default function App() {
  return (
    <ErrorBoundary fallback={<div className="fatal-error">Une erreur est survenue lors du chargement de l'hommage.</div>}>
      <AudioProvider>
        <LightboxProvider>
          <AppContent />
        </LightboxProvider>
      </AudioProvider>
    </ErrorBoundary>
  );
}
