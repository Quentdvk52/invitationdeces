import { motion } from 'motion/react';
import { MEDIA_URLS, SITE_DATA } from '../constants/media';

export default function Tissus() {
  return (
    <section
      id="tissus"
      style={{
        background: 'rgba(12, 12, 12, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        padding: 'var(--spacing-2xl) var(--spacing-md)',
        textAlign: 'center',
        borderBottom: '1px solid rgba(212, 175, 55, 0.2)'
      }}
    >
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1 }}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2.5rem',
          color: 'var(--color-gold)',
          letterSpacing: '0.1em',
          marginBottom: 'var(--spacing-lg)',
          textTransform: 'uppercase',
          textShadow: '0 0 20px rgba(212, 175, 55, 0.3)'
        }}
      >
        Tissus de la cérémonie
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{
          maxWidth: '420px',
          margin: '0 auto var(--spacing-xl)',
          borderRadius: 'var(--spacing-md)',
          overflow: 'hidden',
          border: '2px solid var(--color-gold)',
          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.8), 0 0 25px rgba(212, 175, 55, 0.25)'
        }}
      >
        <img
          src={MEDIA_URLS.images.tissue}
          alt="Tissus de la cérémonie"
          style={{
            width: '100%',
            display: 'block'
          }}
        />
      </motion.div>

      <motion.a
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, delay: 0.4 }}
        href={`https://wa.me/${SITE_DATA.contact.whatsappTissus}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <span>💬</span> Commander via WhatsApp
      </motion.a>
    </section>
  );
}
