import { motion, AnimatePresence } from 'motion/react';

export default function Loader({ visible, onComplete }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          onAnimationComplete={onComplete}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'var(--color-black)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000
          }}
        >
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '3rem',
              color: 'var(--color-gold)',
              letterSpacing: '0.2em',
              textAlign: 'center',
              padding: '0 20px',
              lineHeight: 1.3
            }}
          >
            Faire Part Belle Mère Hounnongan DASSOU
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
