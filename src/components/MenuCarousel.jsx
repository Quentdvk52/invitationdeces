import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { MEDIA_URLS } from '../constants/media';

export default function MenuCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);

  const scrollToIndex = (index) => {
    const images = trackRef.current?.querySelectorAll('.menu-showcase-card');
    if (images && images[index]) {
      images[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      setCurrentIndex(index);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    } else {
      scrollToIndex(MEDIA_URLS.images.menu.length - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < MEDIA_URLS.images.menu.length - 1) {
      scrollToIndex(currentIndex + 1);
    } else {
      scrollToIndex(0);
    }
  };

  // Noms soignés pour chaque met
  const dishLabels = [
    "Rafraîchissements Sobebra",
    "Boissons & Sélection Prestige",
    "Akassa au Poisson Braisé",
    "Blokoto Traditionnel",
    "Chichanga Savoureux",
    "Plat Festif d'Honneur",
    "Délice Cérémonial",
    "Entrée Délicate",
    "Hors d'œuvre d'Accueil",
    "Riz au Gras Festif",
    "Télibo aux Légumes"
  ];

  return (
    <section
      id="menu"
      style={{
        padding: 'var(--space-3xl) var(--space-md)',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative'
      }}
    >
      <div className="section-eyebrow">
        <span>🍷</span> Agapes Fraternelles
      </div>
      <h2 className="section-title">Au Menu de la Réception</h2>
      <p className="section-subtitle">
        Un hommage gastronomique raffiné offert avec générosité pour partager ensemble ce moment de mémoire.
      </p>

      {/* Conteneur Carrousel avec Flèches de Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'relative',
          marginTop: 'var(--space-lg)'
        }}
      >
        <button
          onClick={handlePrev}
          aria-label="Plat précédent"
          style={{
            position: 'absolute',
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--gold-light), var(--gold-warm))',
            border: 'none',
            color: '#120F0D',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.8), 0 0 15px rgba(212, 175, 55, 0.4)'
          }}
        >
          ‹
        </button>

        <button
          onClick={handleNext}
          aria-label="Plat suivant"
          style={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--gold-light), var(--gold-warm))',
            border: 'none',
            color: '#120F0D',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.8), 0 0 15px rgba(212, 175, 55, 0.4)'
          }}
        >
          ›
        </button>

        <div
          ref={trackRef}
          className="menu-track"
          style={{
            display: 'flex',
            gap: '16px',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            padding: '20px 10px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {MEDIA_URLS.images.menu.map((src, idx) => (
            <div
              key={idx}
              className="menu-showcase-card"
              style={{
                scrollSnapAlign: 'center',
                position: 'relative'
              }}
            >
              <img
                src={src}
                alt={dishLabels[idx] || `Plat ${idx + 1}`}
                loading="lazy"
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(14, 11, 9, 0.95) 0%, rgba(14, 11, 9, 0.2) 40%, transparent 70%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '16px'
                }}
              >
                <div style={{ textAlign: 'left', width: '100%' }}>
                  <div
                    style={{
                      fontSize: '0.72rem',
                      color: 'var(--gold-light)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      fontWeight: 600,
                      marginBottom: '2px'
                    }}
                  >
                    Mets de Cérémonie #{idx + 1}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.1rem',
                      color: 'var(--pearl-white)',
                      letterSpacing: '0.04em'
                    }}
                  >
                    {dishLabels[idx] || `Spécialité #${idx + 1}`}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
