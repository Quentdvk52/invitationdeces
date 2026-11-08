import { motion } from 'motion/react';
import { MEDIA_URLS, SITE_DATA } from '../constants/media';
import AudioPlayer from './AudioPlayer';

export default function Remerciements() {
  return (
    <section
      id="remerciements"
      style={{
        background: 'var(--color-dark)',
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
        <img
          src={MEDIA_URLS.images.souvenir1}
          alt="Photo souvenir 1"
          style={{
            width: '100%',
            border: '2px solid var(--color-gold)',
            borderRadius: 'var(--spacing-sm)'
          }}
        />
        <img
          src={MEDIA_URLS.images.souvenir2}
          alt="Photo souvenir 2"
          style={{
            width: '100%',
            border: '2px solid var(--color-gold)',
            borderRadius: 'var(--spacing-sm)'
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, delay: 0.6 }}
        style={{
          fontSize: '1.1rem',
          color: 'var(--color-white)',
          lineHeight: 1.8,
          maxWidth: '800px',
          margin: 'var(--spacing-xl) auto'
        }}
      >
        Les familles éplorées, les familles de la défunte, les familles parentes, alliées et amies vous expriment leur profonde gratitude pour vos nombreuses marques de sympathie et d'affection que vous leur avez témoignées par vos prières et de diverses manières durant ces moments de douleurs. Hounnongan Gbedossou DASSOU et son épouse Maman Confonon Dahanon vous disent infiniment merci.
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{
          fontFamily: 'var(--font-script)',
          fontSize: '4rem',
          color: 'var(--color-gold)',
          marginTop: 'var(--spacing-2xl)'
        }}
      >
        Merci
      </motion.div>
    </section>
  );
}
