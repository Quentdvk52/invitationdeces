import { motion } from 'motion/react';
import { MEDIA_URLS, SITE_DATA } from '../constants/media';

export default function Localisation() {
  return (
    <section
      id="localisation"
      style={{
        background: 'rgba(18, 18, 18, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        padding: 'var(--spacing-2xl) var(--spacing-md)',
        textAlign: 'center',
        borderBottom: '1px solid rgba(212, 175, 55, 0.2)'
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1 }}
        className="section-title"
      >
        Localisation
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, delay: 0.2 }}
        className="location-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'var(--spacing-lg)',
          maxWidth: '1100px',
          margin: 'var(--spacing-xl) auto'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.6rem',
              color: 'var(--color-gold)',
              marginBottom: 'var(--spacing-md)'
            }}
          >
            Google Map
          </h3>
          <div
            className="map-container"
            style={{
              width: '100%',
              height: '380px',
              border: '2px solid rgba(212, 175, 55, 0.6)',
              borderRadius: 'var(--spacing-md)',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.6)'
            }}
          >
            <iframe
              src={`https://maps.google.com/maps?q=${SITE_DATA.location.mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 'none', filter: 'grayscale(30%) contrast(1.1)' }}
              allowFullScreen=""
              loading="lazy"
              title="Localisation des cérémonies"
            />
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.6rem',
              color: 'var(--color-gold)',
              marginBottom: 'var(--spacing-md)'
            }}
          >
            Vidéo Guide
          </h3>
          <div
            className="video-container"
            style={{
              width: '100%',
              height: '380px',
              border: '2px solid rgba(212, 175, 55, 0.6)',
              borderRadius: 'var(--spacing-md)',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
              background: '#000'
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
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>
          </div>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, delay: 0.4 }}
        style={{
          fontSize: '1.1rem',
          color: 'var(--color-gold)',
          marginTop: 'var(--spacing-lg)',
          fontStyle: 'italic',
          maxWidth: '700px',
          margin: 'var(--spacing-lg) auto 0'
        }}
      >
        {SITE_DATA.location.hint}
      </motion.p>
    </section>
  );
}
