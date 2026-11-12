import { motion } from 'motion/react';
import { MEDIA_URLS, SITE_DATA } from '../constants/media';

export default function Localisation() {
  return (
    <section
      id="localisation"
      style={{
        padding: 'var(--space-3xl) var(--space-md)',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative'
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
        <div className="section-eyebrow">
          <span>📍</span> Accès et Cérémonies
        </div>
        <h2 className="section-title">Lieu du Recueillement</h2>
        <p className="section-subtitle">
          Samedi 28 Novembre 2026 à 12h00 • Cs Gnidjaszoun
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'var(--space-xl)',
          marginBottom: 'var(--space-xl)'
        }}
      >
        {/* Carte Google Map interactive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="luxury-card"
        >
          <div className="luxury-card-inner" style={{ padding: 'var(--space-md)' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem'
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.4rem',
                  color: 'var(--gold-light)',
                  margin: 0,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span>🗺️</span> Carte Interactive
              </h3>
              <a
                href={`https://maps.google.com/?q=${SITE_DATA.location.mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'underline'
                }}
              >
                Agrandir ↗
              </a>
            </div>

            <div
              style={{
                width: '100%',
                height: '360px',
                borderRadius: 'var(--radius-inner)',
                overflow: 'hidden',
                border: '1.5px solid rgba(212, 175, 55, 0.4)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.7)'
              }}
            >
              <iframe
                src={`https://maps.google.com/maps?q=${SITE_DATA.location.mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 'none', filter: 'contrast(1.05) saturate(1.1)' }}
                allowFullScreen=""
                loading="lazy"
                title="Localisation des cérémonies"
              />
            </div>
          </div>
        </motion.div>

        {/* Vidéo Guide de l'Itinéraire */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="luxury-card"
        >
          <div className="luxury-card-inner" style={{ padding: 'var(--space-md)' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem'
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.4rem',
                  color: 'var(--gold-light)',
                  margin: 0,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span>🎥</span> Vidéo Guide d'Itinéraire
              </h3>
              <span
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--gold-light)',
                  background: 'rgba(212, 175, 55, 0.15)',
                  padding: '3px 8px',
                  borderRadius: '10px'
                }}
              >
                Repères visuels
              </span>
            </div>

            <div
              style={{
                width: '100%',
                height: '360px',
                borderRadius: 'var(--radius-inner)',
                overflow: 'hidden',
                border: '1.5px solid rgba(212, 175, 55, 0.4)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.7)',
                background: '#0A0807'
              }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                controls
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              >
                <source src={MEDIA_URLS.video.location} type="video/mp4" />
                Votre appareil ne supporte pas la vidéo.
              </video>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Indication d'accès & Bouton GPS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{ textAlign: 'center' }}
      >
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: '1.1rem',
            color: 'var(--gold-light)',
            marginBottom: 'var(--space-lg)'
          }}
        >
          {SITE_DATA.location.hint}
        </p>

        <a
          href={`https://maps.google.com/?q=${SITE_DATA.location.mapQuery}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-royal"
        >
          <span>Ouvrir l'Itinéraire GPS</span>
          <span className="btn-icon-bubble">📍</span>
        </a>
      </motion.div>
    </section>
  );
}
