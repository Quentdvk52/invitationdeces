import { motion, AnimatePresence } from 'motion/react';

export default function Loader({ visible, onComplete }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          onAnimationComplete={onComplete}
          onClick={onComplete}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'radial-gradient(ellipse at 50% 40%, #1A1410 0%, #080605 90%)',
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
              width: '320px',
              height: '320px',
              background: 'radial-gradient(circle, rgba(212, 175, 55, 0.22) 0%, transparent 70%)',
              filter: 'blur(35px)',
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
            {/* Emblème colombe et dorure */}
            <div style={{ fontSize: '2.5rem', marginBottom: '0.8rem', filter: 'drop-shadow(0 0 15px rgba(212, 175, 55, 0.6))' }}>
              🕊️
            </div>

            <div
              className="poetic-script"
              style={{
                fontSize: 'clamp(2.4rem, 6vw, 3.8rem)',
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
                fontSize: '1rem',
                margin: '0 auto 1.8rem'
              }}
            >
              Une invitation sacrée à célébrer une vie de paix et de dévouement
            </p>

            {/* Barre de chargement avec filigrane d'or */}
            <div
              style={{
                width: '240px',
                height: '2px',
                background: 'rgba(255, 255, 255, 0.12)',
                margin: '0 auto 1.4rem',
                borderRadius: '2px',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  width: '60%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, var(--gold-light), transparent)'
                }}
              />
            </div>

            <div
              style={{
                fontSize: '0.78rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--gold-light)',
                fontWeight: 600,
                opacity: 0.85
              }}
            >
              Touchez l'écran pour entrer
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
