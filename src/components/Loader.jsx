import { motion, AnimatePresence } from 'motion/react';

export default function Loader({ visible, onComplete }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          onAnimationComplete={onComplete}
          onClick={onComplete}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at center, #111111 0%, #030303 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
            cursor: 'pointer'
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8 }}
            style={{
              textAlign: 'center',
              padding: '0 24px',
              maxWidth: '700px'
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-script)',
                fontSize: '2.5rem',
                color: 'var(--color-gold-light)',
                marginBottom: '1rem',
                textShadow: '0 0 20px rgba(212, 175, 55, 0.4)'
              }}
            >
              Faire-Part d'Obsèques
            </div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.4rem',
                color: 'var(--color-white)',
                letterSpacing: '0.15em',
                lineHeight: 1.3,
                textTransform: 'uppercase'
              }}
            >
              Belle-Mère Hounnongan DASSOU
            </div>
            
            {/* Barre de progression dorée subtile */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
              style={{
                height: '2px',
                background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)',
                width: '260px',
                margin: '2rem auto 1rem',
                transformOrigin: 'left'
              }}
            />
            
            <div
              style={{
                fontSize: '0.8rem',
                color: 'var(--color-muted)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase'
              }}
            >
              Touchez pour entrer
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
