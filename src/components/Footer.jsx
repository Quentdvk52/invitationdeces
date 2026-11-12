import { motion } from 'motion/react';
import { SITE_DATA } from '../constants/media';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'rgba(5, 5, 5, 0.95)',
        borderTop: '1px solid rgba(212, 175, 55, 0.25)',
        padding: 'var(--spacing-2xl) var(--spacing-md)',
        textAlign: 'center',
        paddingBottom: '120px'
      }}
    >
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1 }}
        style={{
          fontSize: '1rem',
          color: 'var(--color-muted)',
          marginBottom: 'var(--spacing-md)'
        }}
      >
        Réalisé par{' '}
        <span
          style={{
            color: 'var(--color-gold)',
            fontWeight: 600,
            letterSpacing: '0.05em'
          }}
        >
          {SITE_DATA.credits.author}
        </span>
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{
          fontSize: '0.95rem',
          color: 'var(--color-muted)',
          marginBottom: 'var(--spacing-lg)',
          lineHeight: 1.7,
          maxWidth: '650px',
          margin: '0 auto var(--spacing-lg)'
        }}
      >
        Vous avez une cérémonie, un mariage, un enterrement, un anniversaire et vous voulez commander des invitations digitales sur-mesure avec toutes les options possibles : cliquez ci-dessous pour commander.
      </motion.p>

      <motion.a
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, delay: 0.4 }}
        href={`https://wa.me/${SITE_DATA.contact.whatsappCommander}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <span>✨</span> Commander votre faire-part digital
      </motion.a>
    </footer>
  );
}
