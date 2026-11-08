import { motion } from 'motion/react';
import { MEDIA_URLS } from '../constants/media';

export default function PhotoFrame() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1 }}
        style={{
          position: 'relative',
          maxWidth: '500px',
          margin: 'var(--spacing-2xl) auto',
          padding: 'var(--spacing-xl)'
        }}
      >
        <img
          src={MEDIA_URLS.images.circle}
          alt="Photo"
          style={{
            width: '100%',
            maxWidth: '500px',
            objectFit: 'cover',
            border: '4px solid var(--color-gold)',
            boxShadow: '0 0 30px rgba(212, 175, 55, 0.5)'
          }}
        />
      </motion.div>
    </section>
  );
}
