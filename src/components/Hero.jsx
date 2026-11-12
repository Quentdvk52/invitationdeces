import { motion } from 'motion/react';
import { useEffect } from 'react';
import { MEDIA_URLS, SITE_DATA } from '../constants/media';

export default function Hero({ setLoaderVisible }) {
  useEffect(() => {
    // Hide loader after hero animations start
    const timer = setTimeout(() => {
      setLoaderVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setLoaderVisible]);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 50% 30%, rgba(212, 175, 55, 0.08) 0%, rgba(5, 5, 5, 0.45) 60%, rgba(5, 5, 5, 0.85) 100%)',
        padding: 'var(--spacing-md)'
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="hero-in-memoriam"
        style={{
          fontFamily: 'var(--font-script)',
          fontSize: '3.5rem',
          color: 'var(--color-gold)',
          marginBottom: 'var(--spacing-md)',
          textAlign: 'center',
          textShadow: '0 0 25px rgba(212, 175, 55, 0.5)'
        }}
      >
        In Memoriam
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '480px',
          margin: 'var(--spacing-md) 0'
        }}
      >
        <div
          style={{
            position: 'relative',
            borderRadius: 'var(--spacing-md)',
            overflow: 'hidden',
            border: '2px solid rgba(212, 175, 55, 0.5)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.9), 0 0 40px rgba(212, 175, 55, 0.25)'
          }}
        >
          <img
            src={MEDIA_URLS.images.hero}
            alt={`Photo de ${SITE_DATA.defunte.name}`}
            style={{
              width: '100%',
              display: 'block',
              filter: 'contrast(1.03) brightness(1.02)'
            }}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          width: '100%',
          maxWidth: '480px',
          marginTop: 'var(--spacing-md)'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '1rem',
            background: 'rgba(10, 10, 10, 0.7)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            padding: '1rem 1.2rem',
            borderRadius: '12px',
            border: '1px solid rgba(212, 175, 55, 0.25)'
          }}
        >
          <h2
            className="hero-name"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2.1rem',
              color: 'var(--color-white)',
              letterSpacing: '0.05em',
              textAlign: 'left',
              margin: 0,
              textTransform: 'uppercase'
            }}
          >
            {SITE_DATA.defunte.name}
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-md)',
              flexShrink: 0
            }}
          >
            {/* Bougie du souvenir */}
            <div
              style={{
                position: 'relative',
                width: '24px',
                height: '65px'
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, #F5F5DC 0%, #FFFACD 50%, #F5F5DC 100%)',
                  borderRadius: '3px',
                  boxShadow: '0 0 10px rgba(255, 215, 0, 0.4)'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '2px',
                    height: '12px',
                    background: '#222'
                  }}
                />
                <motion.div
                  animate={{
                    scale: [1, 1.15, 0.95, 1.05],
                    opacity: [0.9, 1, 0.85, 1],
                    x: ['-50%', '-48%', '-52%', '-50%']
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut'
                  }}
                  style={{
                    position: 'absolute',
                    top: '-38px',
                    left: '50%',
                    width: '18px',
                    height: '30px',
                    background: 'radial-gradient(ellipse at bottom, #FFFFFF 0%, #FFD700 35%, #FFA500 70%, #FF4500 100%)',
                    borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                    boxShadow: '0 0 15px #FFD700, 0 0 35px #FFA500, 0 0 50px rgba(255, 69, 0, 0.6)'
                  }}
                />
              </div>
            </div>

            {/* Badge d'âge */}
            <div
              className="age-badge"
              style={{
                background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-dark) 60%, var(--color-gold) 100%)',
                border: '2px solid var(--color-gold-light)',
                borderRadius: '50%',
                width: '74px',
                height: '74px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                boxShadow: '0 0 25px rgba(212, 175, 55, 0.5)'
              }}
            >
              <span
                className="age-number"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.9rem',
                  color: 'var(--color-black)',
                  lineHeight: 1,
                  fontWeight: 700
                }}
              >
                {SITE_DATA.defunte.age}
              </span>
              <span
                style={{
                  fontSize: '0.6rem',
                  color: 'var(--color-black)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  fontWeight: 700
                }}
              >
                ANS
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
