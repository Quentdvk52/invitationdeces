import { motion } from 'motion/react';
import { MEDIA_URLS, SITE_DATA } from '../constants/media';
import { useLightbox } from '../context/LightboxContext';

export default function MemorialPoster() {
  const { openLightbox } = useLightbox();

  const handleOpenPoster = () => {
    openLightbox({
      type: 'image',
      src: MEDIA_URLS.images.poster,
      alt: `Affiche officielle des obsèques de ${SITE_DATA.defunte.name} (90 ans)`
    });
  };

  return (
    <section
      id="affiche"
      style={{
        padding: 'var(--space-3xl) var(--space-md)',
        maxWidth: '1050px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative'
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
        <div className="section-eyebrow">
          <span>📜</span> Affiche & Faire-Part Officiel
        </div>
        <h2 className="section-title">Affiche Solennelle</h2>
        <p className="section-subtitle">
          L'annonce officielle illustrée des obsèques solennelles, immortalisée avec recueillement et distinction.
        </p>
      </div>

      {/* Cadre de prestige grand format avec bordure animée lumineuse */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 35 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          maxWidth: '780px',
          margin: '0 auto',
          position: 'relative'
        }}
      >
        {/* Halo de diffusion doré arrière */}
        <div
          style={{
            position: 'absolute',
            inset: '-15px',
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, rgba(255, 235, 200, 0.12) 50%, transparent 75%)',
            filter: 'blur(30px)',
            borderRadius: 'var(--radius-outer)',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

        <div
          className="luminous-photo-card"
          onClick={handleOpenPoster}
          title="Cliquer pour afficher l'affiche en plein écran"
          style={{ zIndex: 1, position: 'relative' }}
        >
          <div
            style={{
              padding: '8px',
              background: '#120F0D',
              borderRadius: 'calc(var(--radius-inner) - 2px)'
            }}
          >
            <div
              style={{
                borderRadius: 'calc(var(--radius-inner) - 6px)',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)'
              }}
            >
              <img
                src={MEDIA_URLS.images.poster}
                alt={`Affiche officielle des obsèques de ${SITE_DATA.defunte.name}`}
                style={{
                  width: '100%',
                  display: 'block',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.025)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />

              {/* Filtre dégradé subtil */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(14, 11, 9, 0.6) 0%, transparent 35%)',
                  pointerEvents: 'none'
                }}
              />

              {/* Badge d'agrandissement en bas à droite */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  right: '16px',
                  background: 'rgba(18, 14, 12, 0.88)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1.5px solid rgba(212, 175, 55, 0.55)',
                  borderRadius: 'var(--radius-pill)',
                  padding: '7px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.8rem',
                  color: 'var(--gold-light)',
                  letterSpacing: '0.08em',
                  fontWeight: 600,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.7)'
                }}
              >
                <span>Agrandir en Plein Écran</span>
                <span style={{ fontSize: '0.95rem' }}>⤢</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
