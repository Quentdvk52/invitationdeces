import { motion } from 'motion/react';
import { SITE_DATA } from '../constants/media';

export default function Footer() {
  const orderWhatsappUrl = `https://wa.me/${SITE_DATA.contact.whatsappCommander}?text=${encodeURIComponent(
    "Bonjour YEKPON DIGIT, j'ai vu la magnifique invitation digitale d'obsèques avec animation 3D et je souhaite commander une invitation sur-mesure pour mon événement."
  )}`;

  return (
    <footer
      style={{
        padding: 'var(--space-3xl) var(--space-md) var(--space-2xl)',
        background: 'linear-gradient(to top, #060404 0%, #0F0C0A 100%)',
        borderTop: '1px solid rgba(212, 175, 55, 0.3)',
        textAlign: 'center',
        position: 'relative'
      }}
    >
      {/* Carte Magistrale de Conversion "Effet Waouh" */}
      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="luxury-card"
        style={{
          maxWidth: '820px',
          margin: '0 auto var(--space-2xl)'
        }}
      >
        <div className="luxury-card-inner" style={{ padding: 'var(--space-2xl) var(--space-lg)' }}>
          <div
            style={{
              fontSize: '2.5rem',
              marginBottom: '1rem',
              filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.7))'
            }}
          >
            ✨
          </div>

          <div className="section-eyebrow" style={{ margin: '0 auto var(--space-sm)' }}>
            Service de Création Exclusive
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.6rem, 4.5vw, 2.5rem)',
              color: 'var(--pearl-white)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '1rem',
              lineHeight: 1.2
            }}
          >
            Vous Souhaitez une Invitation Digitale d'Exception ?
          </h3>

          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              maxWidth: '640px',
              margin: '0 auto var(--space-xl)'
            }}
          >
            Vous organisez des <strong>obsèques solennelles</strong>, un <strong>mariage grandiose</strong>, un <strong>anniversaire d'honneur</strong> ou une réception privée ? Offrez à vos invités une expérience interactive inoubliable avec musique, 3D, guidage GPS et partage WhatsApp instantané.
          </p>

          <a
            href={orderWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-royal"
            style={{
              fontSize: '1rem',
              padding: '12px 14px 12px 30px'
            }}
          >
            <span>Commander Votre Invitation Sur-Mesure</span>
            <span className="btn-icon-bubble">✨</span>
          </a>
        </div>
      </motion.div>

      {/* Signature & Mentions de Prestige */}
      <div style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            background: 'rgba(212, 175, 55, 0.08)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            borderRadius: 'var(--radius-pill)',
            marginBottom: '1rem'
          }}
        >
          <span style={{ fontSize: '0.85rem' }}>👑</span>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.9rem',
              color: 'var(--gold-light)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase'
            }}
          >
            Réalisé par {SITE_DATA.credits.author}
          </span>
        </div>

        <p style={{ fontSize: '0.82rem', margin: 0, opacity: 0.8 }}>
          Tous droits réservés • Reproduction et diffusion autorisées pour la cérémonie
        </p>
      </div>
    </footer>
  );
}
