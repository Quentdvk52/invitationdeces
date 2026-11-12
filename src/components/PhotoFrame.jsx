import { motion } from 'motion/react';
import { MEDIA_URLS } from '../constants/media';

export default function PhotoFrame() {
  return (
    <section
      style={{
        background: 'rgba(5, 5, 5, 0.7)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        padding: 'var(--spacing-xl) var(--spacing-md)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.2)'
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1 }}
        style={{
          position: 'relative',
          maxWidth: '460px',
          margin: '0 auto',
          padding: 'var(--spacing-sm)'
        }}
      >
        <div
          style={{
            position: 'relative',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '4px solid var(--color-gold)',
            boxShadow: '0 0 40px rgba(212, 175, 55, 0.4), 0 20px 50px rgba(0, 0, 0, 0.8)',
            aspectRatio: '1 / 1'
          }}
        >
          <img
            src={MEDIA_URLS.images.circle}
            alt="Portrait commémoratif"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
