import { motion } from 'motion/react';
import { MEDIA_URLS, SITE_DATA } from '../constants/media';
import Candle3D from './Candle3D';
import { useLightbox } from '../context/LightboxContext';

// Ornements botaniques dorés pour sublimer le portrait principal
function BotanicalHeroCorner({ position }) {
  const styles = {
    topLeft: { top: '-10px', left: '-10px', transform: 'none' },
    topRight: { top: '-10px', right: '-10px', transform: 'scaleX(-1)' },
    bottomLeft: { bottom: '-10px', left: '-10px', transform: 'scaleY(-1)' },
    bottomRight: { bottom: '-10px', right: '-10px', transform: 'scale(-1, -1)' }
  };

  return (
    <div
      style={{
        position: 'absolute',
        width: '52px',
        height: '52px',
        pointerEvents: 'none',
        zIndex: 5,
        filter: 'drop-shadow(0 2px 6px rgba(212, 175, 55, 0.5))',
        ...styles[position]
      }}
    >
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        <path
          d="M8 72 C 8 32, 32 8, 72 8 C 50 20, 36 36, 24 60 Z"
          fill="url(#goldHeroCornerGrad)"
          opacity="0.9"
        />
        <circle cx="22" cy="22" r="7" fill="url(#goldHeroFlower)" />
        <circle cx="22" cy="22" r="3" fill="#FFFDF9" />
        <defs>
          <linearGradient id="goldHeroCornerGrad" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF2BD" />
            <stop offset="0.5" stopColor="#D4AF37" />
            <stop offset="1" stopColor="#8F661B" />
          </linearGradient>
          <linearGradient id="goldHeroFlower" x1="15" y1="15" x2="29" y2="29" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF9EB" />
            <stop offset="0.6" stopColor="#F3DC8C" />
            <stop offset="1" stopColor="#C8963E" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function Hero() {
  const { openLightbox } = useLightbox();

  const handleOpenPortrait = () => {
    openLightbox({
      type: 'image',
      src: MEDIA_URLS.images.hero,
      alt: `Portrait solennel de ${SITE_DATA.defunte.name} (1936 - 2026)`
    });
  };

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

      {/* Portrait Commémoratif - Cadrage Luminous & Ornements Floraux */}
      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.3, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '460px',
          margin: '0 auto var(--space-xl)',
          padding: '12px'
        }}
      >
        {/* Ornements botaniques sur le cadre du portrait */}
        <BotanicalHeroCorner position="topLeft" />
        <BotanicalHeroCorner position="topRight" />
        <BotanicalHeroCorner position="bottomLeft" />
        <BotanicalHeroCorner position="bottomRight" />

        {/* Halo de diffusion nacré arrière */}
        <div
          style={{
            position: 'absolute',
            inset: '-15px',
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.32) 0%, rgba(255, 240, 220, 0.15) 50%, transparent 75%)',
            filter: 'blur(25px)',
            borderRadius: 'calc(var(--radius-outer) + 12px)',
            zIndex: 0
          }}
        />

        {/* Carte photo lumineuse avec bordure animée */}
        <div
          className="luminous-photo-card"
          onClick={handleOpenPortrait}
          title="Cliquer pour afficher le portrait en grand"
          style={{ zIndex: 1, position: 'relative' }}
        >
          <div
            style={{
              padding: '6px',
              background: 'rgba(18, 14, 12, 0.94)',
              borderRadius: 'calc(var(--radius-inner) - 2px)'
            }}
          >
            <div
              style={{
                borderRadius: 'calc(var(--radius-inner) - 6px)',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: 'inset 0 0 30px rgba(0, 0, 0, 0.7)'
              }}
            >
              <img
                src={MEDIA_URLS.images.hero}
                alt={`Portrait solennel de ${SITE_DATA.defunte.name}`}
                style={{
                  width: '100%',
                  display: 'block',
                  filter: 'contrast(1.04) brightness(1.02)',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.035)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />

              {/* Filtre dégradé subtil bas d'image */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10, 8, 7, 0.5) 0%, transparent 40%)',
                  pointerEvents: 'none'
                }}
              />

              {/* Badge d'agrandissement en bas à droite */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  background: 'rgba(18, 14, 12, 0.82)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(212, 175, 55, 0.5)',
                  borderRadius: 'var(--radius-pill)',
                  padding: '5px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.72rem',
                  color: 'var(--gold-light)',
                  letterSpacing: '0.06em',
                  fontWeight: 600,
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.6)'
                }}
              >
                <span>Agrandir</span>
                <span>⤢</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Cartouche d'Identification : Nom, Bougie Vivante 3D & Médaillon d'Âge */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: '100%',
          maxWidth: '580px',
          margin: '0 auto'
        }}
      >
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(26, 20, 16, 0.88) 0%, rgba(14, 11, 9, 0.96) 100%)',
            border: '1.5px solid var(--gold-border)',
            borderRadius: 'var(--radius-inner)',
            padding: '1.25rem 1.6rem',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(212, 175, 55, 0.15)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            textAlign: 'left'
          }}
        >
          <div style={{ flex: 1, minWidth: 0 }}>
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
                fontSize: 'clamp(1.3rem, 3.8vw, 1.85rem)',
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

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexShrink: 0 }}>
            {/* Bougie 3D Vivante & Naturelle avec flamme oscillante et étincelles de feu */}
            <Candle3D />

            {/* Médaillon d'Âge Impérial */}
            <div
              style={{
                width: '74px',
                height: '74px',
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
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    color: 'var(--gold-light)',
                    lineHeight: 1
                  }}
                >
                  {SITE_DATA.defunte.age}
                </span>
                <span
                  style={{
                    fontSize: '0.58rem',
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
