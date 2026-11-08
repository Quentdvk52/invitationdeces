import { motion } from 'motion/react';
import { MEDIA_URLS, SITE_DATA } from '../constants/media';

export default function Tissus() {
  return (
    <section
      id="tissus"
      style={{
        padding: 'var(--spacing-2xl) var(--spacing-md)',
        textAlign: 'center'
      }}
    >
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1 }}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2rem',
          color: 'var(--color-gold)',
          letterSpacing: '0.1em',
          marginBottom: 'var(--spacing-lg)'
        }}
      >
        Tissus de la cérémonie
      </motion.h3>

      <motion.img
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, delay: 0.2 }}
        src={MEDIA_URLS.images.tissue}
        alt="Tissus de la cérémonie"
        style={{
          maxWidth: '400px',
          width: '100%',
          border: '3px solid var(--color-gold)',
          borderRadius: 'var(--spacing-md)',
          marginBottom: 'var(--spacing-lg)'
        }}
      />

      <br />

      <motion.a
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, delay: 0.4 }}
        href={`https://wa.me/${SITE_DATA.contact.whatsappTissus}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        Commander
      </motion.a>
    </section>
  );
}
