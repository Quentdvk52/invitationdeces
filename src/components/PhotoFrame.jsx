import { motion } from 'motion/react';
import { MEDIA_URLS } from '../constants/media';
import { useLightbox } from '../context/LightboxContext';

// Ornement floral vectoriel doré pour les 4 coins du cadre
function FloralCorner({ position }) {
  const styles = {
    topLeft: { top: '-14px', left: '-14px', transform: 'none' },
    topRight: { top: '-14px', right: '-14px', transform: 'scaleX(-1)' },
    bottomLeft: { bottom: '-14px', left: '-14px', transform: 'scaleY(-1)' },
    bottomRight: { bottom: '-14px', right: '-14px', transform: 'scale(-1, -1)' }
  };

  return (
    <div
      style={{
        position: 'absolute',
        width: '64px',
        height: '64px',
        pointerEvents: 'none',
        zIndex: 5,
        filter: 'drop-shadow(0 2px 8px rgba(212, 175, 55, 0.6))',
        ...styles[position]
      }}
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        {/* Rameau et volutes dorées */}
        <path
          d="M10 90 C 10 40, 40 10, 90 10 C 65 25, 45 45, 30 75 Z"
          fill="url(#goldGradientCorner)"
          opacity="0.95"
        />
        {/* Pétales de fleurs de lys / rose délicate */}
        <circle cx="28" cy="28" r="9" fill="url(#goldFlowerPetal)" />
        <circle cx="19" cy="35" r="7" fill="url(#goldFlowerPetal)" opacity="0.85" />
        <circle cx="35" cy="19" r="7" fill="url(#goldFlowerPetal)" opacity="0.85" />
        <circle cx="28" cy="28" r="4" fill="#FFFDF9" />
        {/* Petites feuilles botaniques */}
        <path d="M42 22 Q 52 14 58 24 Q 48 26 42 22 Z" fill="#E5C378" />
        <path d="M22 42 Q 14 52 24 58 Q 26 48 22 42 Z" fill="#E5C378" />
        <path d="M52 35 Q 64 30 68 40 Q 58 42 52 35 Z" fill="#D4AF37" opacity="0.75" />
        <defs>
          <linearGradient id="goldGradientCorner" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF2BD" />
            <stop offset="0.4" stopColor="#D4AF37" />
            <stop offset="1" stopColor="#8F661B" />
          </linearGradient>
          <linearGradient id="goldFlowerPetal" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF9EB" />
            <stop offset="0.6" stopColor="#F3DC8C" />
            <stop offset="1" stopColor="#C8963E" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Guirlande florale supérieure
function FloralCrestTop() {
  return (
    <div
      style={{
        position: 'absolute',
        top: '-26px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '180px',
        height: '42px',
        pointerEvents: 'none',
        zIndex: 6,
        filter: 'drop-shadow(0 2px 10px rgba(212, 175, 55, 0.7))'
      }}
    >
      <svg viewBox="0 0 200 45" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        {/* Fleur centrale */}
        <circle cx="100" cy="22" r="11" fill="url(#crestGoldCenter)" />
        <circle cx="100" cy="22" r="5" fill="#FFFDF9" />
        {/* Pétales rayonnants */}
        <ellipse cx="86" cy="22" rx="7" ry="5" fill="#F3DC8C" />
        <ellipse cx="114" cy="22" rx="7" ry="5" fill="#F3DC8C" />
        <ellipse cx="100" cy="11" rx="5" ry="7" fill="#F3DC8C" />
        <ellipse cx="100" cy="33" rx="5" ry="7" fill="#F3DC8C" />
        {/* Rameaux latéraux de laurier / rosier */}
        <path
          d="M80 22 C 60 14, 40 26, 15 20 C 35 30, 60 26, 80 22 Z"
          fill="url(#crestLeavesGold)"
        />
        <path
          d="M120 22 C 140 14, 160 26, 185 20 C 165 30, 140 26, 120 22 Z"
          fill="url(#crestLeavesGold)"
        />
        {/* Feuilles secondaires */}
        <circle cx="50" cy="19" r="3.5" fill="#FFF2BD" />
        <circle cx="150" cy="19" r="3.5" fill="#FFF2BD" />
        <circle cx="30" cy="23" r="2.8" fill="#D4AF37" />
        <circle cx="170" cy="23" r="2.8" fill="#D4AF37" />
        <defs>
          <linearGradient id="crestGoldCenter" x1="88" y1="10" x2="112" y2="34" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFDF9" />
            <stop offset="0.5" stopColor="#F3DC8C" />
            <stop offset="1" stopColor="#8F661B" />
          </linearGradient>
          <linearGradient id="crestLeavesGold" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C8963E" />
            <stop offset="0.5" stopColor="#F3DC8C" />
            <stop offset="1" stopColor="#C8963E" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function PhotoFrame() {
  const { openLightbox } = useLightbox();

  const handleOpenImage = () => {
    openLightbox({
      type: 'image',
      src: MEDIA_URLS.images.circle,
      alt: '« Une étoile de plus brille au firmament, veillant avec tendresse sur chacun de nous. »'
    });
  };

  return (
    <section
      style={{
        padding: 'var(--space-3xl) var(--space-md)',
        textAlign: 'center',
        position: 'relative'
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 35 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'relative',
          maxWidth: '520px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Halo de lumière chaude céleste */}
        <div
          style={{
            position: 'absolute',
            top: '30px',
            width: '420px',
            height: '480px',
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.32) 0%, rgba(255, 235, 200, 0.14) 50%, transparent 75%)',
            filter: 'blur(40px)',
            borderRadius: '30px',
            pointerEvents: 'none'
          }}
        />

        {/* CADRE RECTANGLE FLEURI & LUMINEUX */}
        <div
          className="floral-rectangle-wrapper"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '380px',
            margin: '25px auto 10px',
            padding: '16px'
          }}
        >
          {/* Ornements floraux aux 4 coins */}
          <FloralCorner position="topLeft" />
          <FloralCorner position="topRight" />
          <FloralCorner position="bottomLeft" />
          <FloralCorner position="bottomRight" />

          {/* Couronne florale supérieure centrale */}
          <FloralCrestTop />

          {/* Cadre rectangulaire lumineux avec bordure animée */}
          <div
            className="luminous-photo-card"
            onClick={handleOpenImage}
            title="Cliquer pour afficher la photo en grand"
            style={{
              width: '100%',
              borderRadius: '22px',
              cursor: 'pointer',
              position: 'relative'
            }}
          >
            {/* Conteneur intérieur avec passe-partout ivoire et noir */}
            <div
              style={{
                borderRadius: '19px',
                overflow: 'hidden',
                background: '#120F0D',
                padding: '6px',
                border: '1.5px solid rgba(212, 175, 55, 0.45)',
                position: 'relative'
              }}
            >
              <div
                style={{
                  borderRadius: '14px',
                  overflow: 'hidden',
                  position: 'relative',
                  aspectRatio: '3 / 4',
                  boxShadow: 'inset 0 0 25px rgba(0, 0, 0, 0.8)'
                }}
              >
                <img
                  src={MEDIA_URLS.images.circle}
                  alt="Portrait commémoratif fleuri"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    filter: 'contrast(1.04) brightness(1.02)',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.04)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />

                {/* Badge élégant invitant au clic plein écran */}
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
        </div>

        {/* Texte poétique gravé sous le cadre */}
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: '1.2rem',
            color: 'var(--text-secondary)',
            marginTop: 'var(--space-xl)',
            maxWidth: '520px',
            lineHeight: 1.7,
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.7)'
          }}
        >
          « Une étoile de plus brille au firmament, veillant avec tendresse sur chacun de nous. »
        </p>

        <div
          style={{
            width: '120px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, var(--gold-light), transparent)',
            margin: '1.2rem auto 0'
          }}
        />
      </motion.div>
    </section>
  );
}
