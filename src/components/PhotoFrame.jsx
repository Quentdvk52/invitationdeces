import { motion } from 'motion/react';
import { MEDIA_URLS } from '../constants/media';

export default function PhotoFrame() {
  return (
    <section
      style={{
        padding: 'var(--space-2xl) var(--space-md)',
        textAlign: 'center',
        position: 'relative'
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'relative',
          maxWidth: '440px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Halo doux arrière */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            width: '340px',
            height: '340px',
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, rgba(255, 235, 200, 0.1) 50%, transparent 70%)',
            filter: 'blur(35px)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }}
        />

        {/* Médaillon circulaire à double anneau de lumière */}
        <div
          style={{
            position: 'relative',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            padding: '6px',
            background: 'linear-gradient(135deg, #FFF9F0 0%, #D4AF37 40%, #8F661B 80%, #F3DC8C 100%)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.9), 0 0 45px rgba(212, 175, 55, 0.4)'
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '3px solid #1A1410',
              position: 'relative'
            }}
          >
            <img
              src={MEDIA_URLS.images.circle}
              alt="Médaillon commémoratif"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                filter: 'contrast(1.05) brightness(1.02)'
              }}
            />
          </div>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: '1.15rem',
            color: 'var(--text-secondary)',
            marginTop: 'var(--space-lg)',
            maxWidth: '460px',
            lineHeight: 1.6
          }}
        >
          « Une étoile de plus brille au firmament, veillant avec tendresse sur chacun de nous. »
        </p>
      </motion.div>
    </section>
  );
}
