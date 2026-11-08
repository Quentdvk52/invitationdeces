import { motion } from 'motion/react';
import { SITE_DATA } from '../constants/media';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-black)',
        borderTop: '1px solid var(--color-border)',
        padding: 'var(--spacing-2xl) var(--spacing-md)',
        textAlign: 'center',
        paddingBottom: '100px'
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
            fontWeight: 600
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
          fontSize: '0.9rem',
          color: 'var(--color-muted)',
          marginBottom: 'var(--spacing-lg)',
          lineHeight: 1.6
        }}
      >
        Vous avez une cérémonie, un mariage, un enterrement, un anniversaire et vous voulez commander des invitations digitales sur mesures avec toutes les options possibles : cliquer en dessous pour commander
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
      >
        Commander
      </motion.a>
    </footer>
  );
}
