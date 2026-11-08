import { motion } from 'motion/react';
import { MEDIA_URLS, SITE_DATA } from '../constants/media';
import AudioPlayer from './AudioPlayer';

export default function Annonce() {

  return (
    <section
      id="annonce"
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
        Annonce de décès
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, delay: 0.2 }}
        className="annonce-families"
        style={{
          fontSize: '1.1rem',
          color: 'var(--color-white)',
          lineHeight: 2,
          marginBottom: 'var(--spacing-xl)'
        }}
      >
        {SITE_DATA.families.map((family, index) => (
          <div key={index}>{family}</div>
        ))}
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, delay: 0.4 }}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2.5rem',
          color: 'var(--color-gold)',
          letterSpacing: '0.1em',
          margin: 'var(--spacing-xl) 0',
          textTransform: 'uppercase'
        }}
      >
        {SITE_DATA.couple.name}
      </motion.h3>

      <motion.img
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, delay: 0.6 }}
        src={MEDIA_URLS.images.couple}
        alt={SITE_DATA.couple.name}
        style={{
          maxWidth: '400px',
          width: '100%',
          border: '3px solid var(--color-gold)',
          borderRadius: 'var(--spacing-md)',
          margin: 'var(--spacing-xl) auto',
          boxShadow: '0 20px 60px rgba(212, 175, 55, 0.3)'
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{
          fontSize: '1.1rem',
          color: 'var(--color-white)',
          lineHeight: 1.8,
          maxWidth: '800px',
          margin: 'var(--spacing-xl) auto',
          fontStyle: 'italic'
        }}
      >
        Ont la vive douleur de vous annoncer le décès de leur Fille, Sœur, Tante, Epouse, Mère, Belle Mère, Grand-mère et Arrière grand-mère :
        <br /><br />
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.5rem',
            color: 'var(--color-gold)',
            letterSpacing: '0.05em',
            fontStyle: 'normal'
          }}
        >
          {SITE_DATA.defunte.name}
        </span>
        <br /><br />
        Décédé des suites d'une courte maladie dans sa 90ème année
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, delay: 1 }}
      >
        <AudioPlayer
          src={MEDIA_URLS.audio.annonce}
          trackName="Annonce de décès"
        />
      </motion.div>
    </section>
  );
}
