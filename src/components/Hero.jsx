import { motion } from 'motion/react';
import { useEffect } from 'react';
import { MEDIA_URLS, SITE_DATA } from '../constants/media';

export default function Hero({ setLoaderVisible }) {
  useEffect(() => {
    // Hide loader after hero animations complete (1.5s delay + animations)
    const timer = setTimeout(() => {
      setLoaderVisible(false);
    }, 2500);

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
        background: 'var(--color-black)',
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
          fontSize: '3rem',
          color: 'var(--color-gold)',
          marginBottom: 'var(--spacing-md)',
          textAlign: 'center'
        }}
      >
        In Memoriam
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '500px',
          margin: 'var(--spacing-md) 0'
        }}
      >
        <img
          src={MEDIA_URLS.images.hero}
          alt={`Photo de ${SITE_DATA.defunte.name}`}
          style={{
            width: '100%',
            borderRadius: 'var(--spacing-md)',
            boxShadow: '0 20px 60px rgba(212, 175, 55, 0.3)'
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          width: '100%',
          maxWidth: '500px',
          marginTop: 'var(--spacing-md)'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end'
          }}
        >
          <h2
            className="hero-name"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              color: 'var(--color-white)',
              letterSpacing: '0.05em',
              textAlign: 'left',
              marginTop: 'var(--spacing-md)'
            }}
          >
            {SITE_DATA.defunte.name}
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-md)'
            }}
          >
            {/* Candle */}
            <div
              style={{
                position: 'relative',
                width: '30px',
                height: '80px'
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, #F5F5DC 0%, #FFFACD 50%, #F5F5DC 100%)',
                  borderRadius: '3px'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '3px',
                    height: '15px',
                    background: '#333'
                  }}
                />
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [1, 0.8, 1]
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: 'reverse'
                  }}
                  style={{
                    position: 'absolute',
                    top: '-50px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '20px',
                    height: '35px',
                    background: 'radial-gradient(ellipse at bottom, #FFD700 0%, #FFA500 50%, #FF4500 100%)',
                    borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                    boxShadow: '0 0 20px #FFD700, 0 0 40px #FFA500, 0 0 60px #FF4500'
                  }}
                />
              </div>
            </div>

            {/* Age Badge */}
            <div
              style={{
                background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-dark) 50%, var(--color-gold) 100%)',
                border: '3px solid var(--color-gold-light)',
                borderRadius: '50%',
                width: '80px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                boxShadow: '0 0 20px rgba(212, 175, 55, 0.5)'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  color: 'var(--color-black)',
                  lineHeight: 1
                }}
              >
                {SITE_DATA.defunte.age}
              </span>
              <span
                style={{
                  fontSize: '0.6rem',
                  color: 'var(--color-black)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
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
