import { useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAudio } from '../context/AudioContext';
import CelestialAngel from './CelestialAngel';

export default function Loader({ visible, onComplete }) {
  const { startAutoSequence } = useAudio();
  const hasEnteredRef = useRef(false);

  const handleEnter = useCallback(() => {
    if (hasEnteredRef.current) return;
    hasEnteredRef.current = true;

    // Déclenche l'enchaînement musical automatique
    try {
      startAutoSequence();
    } catch (e) {
      console.warn('[Loader] startAutoSequence warning:', e);
    }
    onComplete();
  }, [startAutoSequence, onComplete]);

  // Si la personne ne clique pas après 8 secondes, déclenchement automatique
  useEffect(() => {
    if (!visible) return;

    const timer = setTimeout(() => {
      console.log('[Loader] 8 secondes écoulées sans action -> Déclenchement automatique de l\'entrée');
      handleEnter();
    }, 8000);

    return () => clearTimeout(timer);
  }, [visible, handleEnter]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          onAnimationComplete={onComplete}
          onClick={handleEnter}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'radial-gradient(ellipse at 50% 40%, #1A1410 0%, #080605 95%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
            cursor: 'pointer',
            padding: '24px'
          }}
        >
          {/* Lueur dorée céleste pulsante */}
          <div
            style={{
              position: 'absolute',
              width: '340px',
              height: '340px',
              background: 'radial-gradient(circle, rgba(212, 175, 55, 0.28) 0%, transparent 70%)',
              filter: 'blur(40px)',
              pointerEvents: 'none'
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -20 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            style={{
              textAlign: 'center',
              maxWidth: '650px',
              position: 'relative',
              zIndex: 1
            }}
          >
            {/* Ange Céleste aux ailes battantes et halo lumineux */}
            <CelestialAngel size="clamp(115px, 24vw, 150px)" />

            <div
              className="poetic-script"
              style={{
                fontSize: 'clamp(2.4rem, 6vw, 4rem)',
                marginBottom: '0.5rem'
              }}
            >
              Faire-Part d'Hommage
            </div>

            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.2rem, 3.5vw, 1.7rem)',
                letterSpacing: '0.14em',
                color: 'var(--pearl-white)',
                textTransform: 'uppercase',
                marginBottom: '0.5rem'
              }}
            >
              Belle-Mère Hounnongan DASSOU
            </div>

            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                color: 'var(--text-secondary)',
                fontSize: '1.05rem',
                margin: '0 auto 1.8rem'
              }}
            >
              Une invitation sacrée à célébrer une vie de paix et de dévouement
            </p>

            {/* Barre de progression synchronisée sur les 8 secondes d'entrée automatique */}
            <div
              style={{
                width: '260px',
                height: '3px',
                background: 'rgba(255, 255, 255, 0.12)',
                margin: '0 auto 1.6rem',
                borderRadius: '3px',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 8, ease: 'linear' }}
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, var(--gold-warm), var(--gold-light), #FFF5DF)',
                  boxShadow: '0 0 10px rgba(212, 175, 55, 0.8)'
                }}
              />
            </div>

            {/* Bouton d'entrée Royal lumineux */}
            <button
              className="btn-royal"
              onClick={(e) => {
                e.stopPropagation();
                handleEnter();
              }}
              style={{
                margin: '0 auto 1rem',
                cursor: 'pointer',
                padding: '12px 30px',
                fontSize: '0.95rem'
              }}
            >
              <span>Entrer dans l'Hommage</span>
              <span className="btn-icon-bubble">🕊️</span>
            </button>

            <div
              style={{
                fontSize: '0.78rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--gold-light)',
                fontWeight: 600,
                opacity: 0.85
              }}
            >
              Touchez l'écran ou ouverture automatique (8s)
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
