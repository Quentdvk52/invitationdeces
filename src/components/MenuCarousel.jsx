import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { MEDIA_URLS } from '../constants/media';

export default function MenuCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);

  const handlePrev = () => {
    if (currentIndex > 0) {
      const nextIndex = currentIndex - 1;
      setCurrentIndex(nextIndex);
      const images = trackRef.current?.querySelectorAll('img');
      if (images && images[nextIndex]) {
        images[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < MEDIA_URLS.images.menu.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      const images = trackRef.current?.querySelectorAll('img');
      if (images && images[nextIndex]) {
        images[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  return (
    <section
      id="menu"
      style={{
        background: 'rgba(18, 18, 18, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        padding: 'var(--spacing-2xl) var(--spacing-md)',
        textAlign: 'center',
        borderBottom: '2px solid var(--color-gold)'
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1 }}
        className="section-title"
      >
        Au menu
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, delay: 0.1 }}
        style={{ color: 'var(--color-muted)', fontSize: '1rem', marginBottom: 'var(--spacing-md)' }}
      >
        Aperçu des mets et rafraîchissements prévus pour la réception
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{
          overflow: 'hidden',
          marginTop: 'var(--spacing-lg)',
          maxWidth: '750px',
          marginLeft: 'auto',
          marginRight: 'auto',
          position: 'relative'
        }}
      >
        <button
          onClick={handlePrev}
          aria-label="Plat précédent"
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'var(--color-gold)',
            color: 'var(--color-black)',
            border: 'none',
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            fontSize: '1.4rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            left: '12px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.6)'
          }}
          className="menu-arrow menu-arrow-left"
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--color-gold-light)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--color-gold)';
          }}
        >
          ‹
        </button>

        <div
          ref={trackRef}
          className="menu-track"
          style={{
            display: 'flex',
            gap: '12px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.animationPlayState = 'paused';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.animationPlayState = 'running';
          }}
        >
          {MEDIA_URLS.images.menu.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Mets de réception ${index + 1}`}
              style={{
                width: '460px',
                height: '320px',
                objectFit: 'cover',
                border: '2px solid rgba(212, 175, 55, 0.7)',
                borderRadius: 'var(--spacing-sm)',
                flexShrink: 0,
                boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
              }}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          aria-label="Plat suivant"
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'var(--color-gold)',
            color: 'var(--color-black)',
            border: 'none',
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            fontSize: '1.4rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            right: '12px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.6)'
          }}
          className="menu-arrow menu-arrow-right"
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--color-gold-light)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--color-gold)';
          }}
        >
          ›
        </button>
      </motion.div>
    </section>
  );
}
