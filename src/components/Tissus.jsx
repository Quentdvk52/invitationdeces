import { motion } from 'motion/react';
import { MEDIA_URLS, SITE_DATA } from '../constants/media';
import { useLightbox } from '../context/LightboxContext';

export default function Tissus() {
  const { openLightbox } = useLightbox();

  const whatsappUrl = `https://wa.me/${SITE_DATA.contact.whatsappTissus}?text=${encodeURIComponent(
    "Bonjour, je souhaite commander le tissu officiel pour les obsèques de la belle-mère de M. Hounnongan DASSOU."
  )}`;

  const handleOpenTissue = () => {
    openLightbox({
      type: 'image',
      src: MEDIA_URLS.images.tissue,
      alt: "Tissu officiel de la cérémonie — Prix demi pièce : 5.500 FCFA"
    });
  };

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

      {/* Cadre de luxe pour le tissu avec bordure animée */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 35 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ maxWidth: '460px', margin: '0 auto var(--space-xl)' }}
      >
        <div
          className="luminous-photo-card"
          onClick={handleOpenTissue}
          title="Cliquer pour afficher le tissu en grand"
        >
          <div
            style={{
              padding: '6px',
              background: '#120F0D',
              borderRadius: 'calc(var(--radius-inner) - 2px)'
            }}
          >
            <div
              style={{
                borderRadius: 'calc(var(--radius-inner) - 6px)',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.7)'
              }}
            >
              <img
                src={MEDIA_URLS.images.tissue}
                alt="Tissu officiel de la cérémonie"
                style={{
                  width: '100%',
                  display: 'block',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />

              {/* Badge officiel de tarif selon la consigne exacte de l'utilisateur */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  background: 'rgba(18, 14, 12, 0.9)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  padding: '7px 16px',
                  borderRadius: 'var(--radius-pill)',
                  border: '1.5px solid rgba(212, 175, 55, 0.6)',
                  fontSize: '0.82rem',
                  color: 'var(--gold-light)',
                  letterSpacing: '0.06em',
                  fontWeight: 700,
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.7)'
                }}
              >
                Prix demi pièce : 5.500 FCFA
              </div>

              {/* Icône d'agrandissement en haut à droite */}
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(18, 14, 12, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(212, 175, 55, 0.5)',
                  color: 'var(--gold-light)',
                  fontSize: '0.85rem'
                }}
              >
                ⤢
              </div>
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
