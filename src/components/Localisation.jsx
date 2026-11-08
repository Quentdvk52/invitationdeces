import { motion } from 'motion/react';
import { MEDIA_URLS, SITE_DATA } from '../constants/media';

export default function Localisation() {
  return (
    <section
      id="localisation"
      style={{
        background: 'var(--color-dark-gray)',
        padding: 'var(--spacing-2xl) var(--spacing-md)',
        textAlign: 'center'
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
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--spacing-md)',
          maxWidth: '1200px',
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
              fontSize: '1.5rem',
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
              height: '400px',
              border: '2px solid var(--color-gold)',
              borderRadius: 'var(--spacing-md)',
              overflow: 'hidden'
            }}
          >
            <iframe
              src={`https://maps.google.com/maps?q=${SITE_DATA.location.mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
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
              fontSize: '1.5rem',
              color: 'var(--color-gold)',
              marginBottom: 'var(--spacing-md)'
            }}
          >
            Vidéo
          </h3>
          <div
            className="video-container"
            style={{
              width: '100%',
              height: '400px',
              border: '2px solid var(--color-gold)',
              borderRadius: 'var(--spacing-md)',
              overflow: 'hidden'
            }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            >
              <source src={MEDIA_URLS.video.location} type="video/mp4" />
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
          fontSize: '1rem',
          color: 'var(--color-gold)',
          marginTop: 'var(--spacing-lg)',
          fontStyle: 'italic'
        }}
      >
        {SITE_DATA.location.hint}
      </motion.p>
    </section>
  );
}
