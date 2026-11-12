import { motion } from 'motion/react';
import { MEDIA_URLS, SITE_DATA } from '../constants/media';

export default function Tissus() {
  const whatsappUrl = `https://wa.me/${SITE_DATA.contact.whatsappTissus}?text=${encodeURIComponent(
    "Bonjour, je souhaite commander le tissu officiel pour les obsèques de la belle-mère de M. Hounnongan DASSOU."
  )}`;

  return (
    <section
      id="tissus"
      style={{
        padding: 'var(--space-3xl) var(--space-md)',
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative'
      }}
    >
      <div className="section-eyebrow">
        <span>👗</span> Tenue Officielle d'Hommage
      </div>
      <h2 className="section-title">Tissus de la Cérémonie</h2>
      <p className="section-subtitle">
        Unissons nos cœurs et nos parures dans les mêmes étoffes d'honneur et de communion fraternelle.
      </p>

      {/* Cadre de luxe pour le tissu */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 35 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="luxury-card"
        style={{ maxWidth: '460px', margin: '0 auto var(--space-xl)' }}
      >
        <div className="luxury-card-inner" style={{ padding: '12px' }}>
          <div
            style={{
              borderRadius: 'calc(var(--radius-inner) - 4px)',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 15px 40px rgba(0, 0, 0, 0.7)'
            }}
          >
            <img
              src={MEDIA_URLS.images.tissue}
              alt="Tissus officiel de la cérémonie"
              style={{
                width: '100%',
                display: 'block',
                transition: 'transform 0.6s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '12px',
                left: '12px',
                background: 'rgba(18, 14, 12, 0.85)',
                backdropFilter: 'blur(10px)',
                padding: '6px 14px',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                fontSize: '0.75rem',
                color: 'var(--gold-light)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 600
              }}
            >
              Étoffe Officielle
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bouton de commande WhatsApp vibrant */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-royal"
        >
          <span>Commander le tissu via WhatsApp</span>
          <span className="btn-icon-bubble">💬</span>
        </a>
        <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '12px' }}>
          Réservation rapide & livraison auprès des organisateurs
        </p>
      </motion.div>
    </section>
  );
}
