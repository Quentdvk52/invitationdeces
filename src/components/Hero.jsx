import { motion } from 'motion/react';
import { useEffect } from 'react';
import { MEDIA_URLS, SITE_DATA } from '../constants/media';

export default function Hero({ setLoaderVisible }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaderVisible(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, [setLoaderVisible]);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--space-2xl) var(--space-md) var(--space-xl)',
        textAlign: 'center'
      }}
    >
      {/* Badge d'en-tête poétique */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="section-eyebrow"
      >
        <span>🕊️</span> Célébration d'une Vie Lumineuse
      </motion.div>

      {/* Titre In Memoriam en calligraphie dorée */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="poetic-script"
        style={{ marginBottom: '0.2rem' }}
      >
        In Memoriam
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: '1.2rem',
          color: 'var(--text-secondary)',
          marginBottom: 'var(--space-lg)'
        }}
      >
        À la mémoire sacrée de notre vénérée mère et aïeule
      </motion.p>

      {/* Portrait Commémoratif - Architecture Double-Bezel Luxe */}
      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.3, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '480px',
          margin: '0 auto var(--space-xl)'
        }}
      >
        {/* Halo de diffusion nacré arrière */}
        <div
          style={{
            position: 'absolute',
            inset: '-15px',
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.28) 0%, rgba(255, 240, 220, 0.12) 50%, transparent 75%)',
            filter: 'blur(20px)',
            borderRadius: 'calc(var(--radius-outer) + 10px)',
            zIndex: 0
          }}
        />

        <div className="luxury-card" style={{ zIndex: 1 }}>
          <div
            className="luxury-card-inner"
            style={{ padding: '10px', background: 'rgba(18, 14, 12, 0.88)' }}
          >
            <div
              style={{
                borderRadius: 'calc(var(--radius-inner) - 6px)',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: 'inset 0 0 30px rgba(0, 0, 0, 0.6)'
              }}
            >
              <img
                src={MEDIA_URLS.images.hero}
                alt={`Portrait solennel de ${SITE_DATA.defunte.name}`}
                style={{
                  width: '100%',
                  display: 'block',
                  filter: 'contrast(1.04) brightness(1.02)'
                }}
              />
              {/* Filtre dégradé subtil bas d'image */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10, 8, 7, 0.45) 0%, transparent 40%)'
                }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Cartouche d'Identification : Nom, Bougie Vivante & Médaillon d'Âge */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: '100%',
          maxWidth: '560px',
          margin: '0 auto'
        }}
      >
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(26, 20, 16, 0.85) 0%, rgba(14, 11, 9, 0.95) 100%)',
            border: '1.5px solid var(--gold-border)',
            borderRadius: 'var(--radius-inner)',
            padding: '1.25rem 1.6rem',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(212, 175, 55, 0.15)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.2rem',
            textAlign: 'left'
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--gold-light)',
                marginBottom: '4px'
              }}
            >
              Feue notre bien-aimée
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.4rem, 4vw, 1.9rem)',
                color: 'var(--pearl-white)',
                letterSpacing: '0.06em',
                lineHeight: 1.2,
                textTransform: 'uppercase',
                margin: 0
              }}
            >
              {SITE_DATA.defunte.name}
            </h2>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              Une vie exemplaire consacrée à l'amour des siens
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', flexShrink: 0 }}>
            {/* Bougie Commémorative Vivante */}
            <div className="candle-sanctuary" title="Flamme de la mémoire éternelle">
              <div className="candle-glow-aura" />
              <div className="candle-flame-core" />
              <div className="candle-wax">
                <div className="candle-wick" />
              </div>
            </div>

            {/* Médaillon d'Âge Impérial */}
            <div
              style={{
                width: '76px',
                height: '76px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #F3DC8C 0%, #D4AF37 50%, #9B7020 100%)',
                padding: '2.5px',
                boxShadow: '0 0 25px rgba(212, 175, 55, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, #241D17 30%, #120F0D 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 235, 180, 0.5)'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.8rem',
                    fontWeight: 800,
                    color: 'var(--gold-light)',
                    lineHeight: 1
                  }}
                >
                  {SITE_DATA.defunte.age}
                </span>
                <span
                  style={{
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: 'var(--pearl-white)',
                    textTransform: 'uppercase'
                  }}
                >
                  ANS
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
