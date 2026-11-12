import { motion } from 'motion/react';
import { MEDIA_URLS } from '../constants/media';
import AudioPlayer from './AudioPlayer';

export default function Remerciements() {
  return (
    <section
      id="remerciements"
      style={{
        background: 'rgba(10, 10, 10, 0.85)',
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
        Remerciements
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <AudioPlayer
          src={MEDIA_URLS.audio.thanks}
          trackName="Musique de remerciements"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, delay: 0.4 }}
        className="photos-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--spacing-md)',
          margin: 'var(--spacing-xl) 0',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        <div style={{ borderRadius: 'var(--spacing-sm)', overflow: 'hidden', border: '2px solid var(--color-gold)', boxShadow: '0 10px 30px rgba(0,0,0,0.6)' }}>
          <img
            src={MEDIA_URLS.images.souvenir1}
            alt="Photo souvenir 1"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />
        </div>
        <div style={{ borderRadius: 'var(--spacing-sm)', overflow: 'hidden', border: '2px solid var(--color-gold)', boxShadow: '0 10px 30px rgba(0,0,0,0.6)' }}>
          <img
            src={MEDIA_URLS.images.souvenir2}
            alt="Photo souvenir 2"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, delay: 0.6 }}
        style={{
          fontSize: '1.15rem',
          color: 'var(--color-white)',
          lineHeight: 1.9,
          maxWidth: '800px',
          margin: 'var(--spacing-xl) auto',
          background: 'rgba(5, 5, 5, 0.6)',
          padding: '1.5rem',
          borderRadius: '12px',
          border: '1px solid rgba(212, 175, 55, 0.2)'
        }}
      >
        Les familles éplorées, les familles de la défunte, les familles parentes, alliées et amies vous expriment leur profonde gratitude pour vos nombreuses marques de sympathie et d'affection que vous leur avez témoignées par vos prières et de diverses manières durant ces moments de douleurs. <strong>Hounnongan Gbedossou DASSOU</strong> et son épouse <strong>Maman Confonon Dahanon</strong> vous disent infiniment merci.
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{
          fontFamily: 'var(--font-script)',
          fontSize: '4.5rem',
          color: 'var(--color-gold)',
          marginTop: 'var(--spacing-xl)',
          textShadow: '0 0 30px rgba(212, 175, 55, 0.5)'
        }}
      >
        Merci
      </motion.div>
    </section>
  );
}
