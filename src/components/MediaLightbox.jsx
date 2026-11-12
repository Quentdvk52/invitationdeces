import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function MediaLightbox({ media, onClose }) {
  // Fermeture par la touche Échap
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (media) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [media, onClose]);

  return (
    <AnimatePresence>
      {media && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 20000,
            background: 'rgba(6, 4, 3, 0.94)',
            backdropFilter: 'blur(28px)',
            WebkitBackdropFilter: 'blur(28px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          {/* Barre supérieure avec bouton Fermer */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              right: '24px',
              zIndex: 20001
            }}
          >
            <button
              onClick={onClose}
              aria-label="Fermer le plein écran"
              className="btn-royal"
              style={{
                padding: '8px 18px',
                fontSize: '0.85rem',
                gap: '8px'
              }}
            >
              <span>Fermer</span>
              <span className="btn-icon-bubble" style={{ width: '28px', height: '28px', fontSize: '0.9rem' }}>
                ✕
              </span>
            </button>
          </div>

          {/* Contenu média centré et agrandi avec cadre d'art */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '92vw',
              maxHeight: '85vh',
              position: 'relative',
              borderRadius: '24px',
              padding: '4px',
              background: 'linear-gradient(135deg, #F3DC8C 0%, rgba(212, 175, 55, 0.3) 50%, #FFF5DF 100%)',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.95), 0 0 50px rgba(212, 175, 55, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                background: '#0D0A08',
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                maxHeight: '84vh'
              }}
            >
              {media.type === 'video' ? (
                <video
                  src={media.src}
                  controls
                  autoPlay
                  playsInline
                  style={{
                    maxWidth: '88vw',
                    maxHeight: '80vh',
                    display: 'block',
                    objectFit: 'contain'
                  }}
                />
              ) : (
                <img
                  src={media.src}
                  alt={media.alt || 'Aperçu haute définition'}
                  style={{
                    maxWidth: '88vw',
                    maxHeight: '80vh',
                    display: 'block',
                    objectFit: 'contain',
                    filter: 'contrast(1.02)'
                  }}
                />
              )}
            </div>
          </motion.div>

          {media.alt && (
            <div
              style={{
                marginTop: '16px',
                color: 'var(--gold-light)',
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '1.05rem',
                textAlign: 'center',
                maxWidth: '600px'
              }}
            >
              {media.alt}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
