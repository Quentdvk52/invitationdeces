import { motion } from 'motion/react';
import { MEDIA_URLS } from '../constants/media';
import AudioPlayer from './AudioPlayer';
import { useLightbox } from '../context/LightboxContext';

export default function Remerciements() {
  const { openLightbox } = useLightbox();

  const handleOpenSouvenir = (src, index) => {
    openLightbox({
      type: 'image',
      src,
      alt: `Souvenir de recueillement et mémoire émouvante #${index}`
    });
  };

  return (
    <section
      id="remerciements"
      style={{
        padding: 'var(--space-3xl) var(--space-md)',
        maxWidth: '1050px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative'
      }}
    >
      <div className="section-eyebrow">
        <span>💐</span> Gratitude & Pensées Pieuses
      </div>
      <h2 className="section-title">Remerciements</h2>
      <p className="section-subtitle">
        Du plus profond de nos cœurs, merci pour votre réconfort, vos prières et votre présence bienveillante.
      </p>

      {/* Lecteur Audio de Remerciement */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1 }}
        style={{ marginBottom: 'var(--space-2xl)' }}
      >
        <AudioPlayer
          trackId="thanks"
          trackName="Musique de remerciements"
          subtitle="Chant de consolation et d'action de grâce"
        />
      </motion.div>

      {/* Galerie de Souvenirs Inoubliables - Photos Lumineuses sans titres surimposés */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--space-lg)',
          marginBottom: 'var(--space-2xl)'
        }}
      >
        {/* Photo Souvenir 1 */}
        <div
          className="luminous-photo-card"
          onClick={() => handleOpenSouvenir(MEDIA_URLS.images.souvenir1, 1)}
          title="Cliquer pour afficher la photo en grand"
        >
          <div
            style={{
              padding: '6px',
              background: '#120F0D',
              borderRadius: 'calc(var(--radius-inner) - 2px)'
            }}
          >
            <div
              style={{
                borderRadius: 'calc(var(--radius-inner) - 6px)',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.7)'
              }}
            >
              <img
                src={MEDIA_URLS.images.souvenir1}
                alt="Souvenir mémorable 1"
                style={{
                  width: '100%',
                  height: '350px',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.04)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(18, 14, 12, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(212, 175, 55, 0.5)',
                  color: 'var(--gold-light)',
                  fontSize: '0.85rem'
                }}
              >
                ⤢
              </div>
            </div>
          </div>
        </div>

        {/* Photo Souvenir 2 */}
        <div
          className="luminous-photo-card"
          onClick={() => handleOpenSouvenir(MEDIA_URLS.images.souvenir2, 2)}
          title="Cliquer pour afficher la photo en grand"
        >
          <div
            style={{
              padding: '6px',
              background: '#120F0D',
              borderRadius: 'calc(var(--radius-inner) - 2px)'
            }}
          >
            <div
              style={{
                borderRadius: 'calc(var(--radius-inner) - 6px)',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.7)'
              }}
            >
              <img
                src={MEDIA_URLS.images.souvenir2}
                alt="Souvenir mémorable 2"
                style={{
                  width: '100%',
                  height: '350px',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.04)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(18, 14, 12, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(212, 175, 55, 0.5)',
                  color: 'var(--gold-light)',
                  fontSize: '0.85rem'
                }}
              >
                ⤢
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Message de gratitude solennel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1, delay: 0.3 }}
        className="luxury-card"
        style={{ maxWidth: '850px', margin: '0 auto var(--space-xl)' }}
      >
        <div className="luxury-card-inner" style={{ padding: 'var(--space-xl) var(--space-lg)' }}>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.15rem',
              lineHeight: 2,
              color: 'var(--text-secondary)',
              margin: 0
            }}
          >
            Les familles éplorées, les familles de la défunte, les familles parentes, alliées et amies vous expriment leur plus profonde et fraternelle gratitude pour vos nombreuses marques de sympathie, de compassion et d'affection témoignées par vos prières et vos gestes réconfortants durant ces moments de séparation.
          </p>
          <div
            style={{
              marginTop: '1.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(212, 175, 55, 0.25)',
              fontFamily: 'var(--font-display)',
              fontSize: '1.25rem',
              color: 'var(--gold-light)',
              letterSpacing: '0.06em'
            }}
          >
            Hounnongan Gbedossou DASSOU & son épouse Maman Confonon Dahanon
            <div style={{ fontSize: '0.85rem', color: 'var(--pearl-white)', fontWeight: 400, marginTop: '4px' }}>
              Vous disent infiniment merci du fond du cœur.
            </div>
          </div>
        </div>
      </motion.div>

      {/* Signature Céleste "Merci" */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 25 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.2, delay: 0.45 }}
        className="poetic-script"
        style={{
          fontSize: 'clamp(4rem, 10vw, 6rem)',
          marginTop: 'var(--space-md)'
        }}
      >
        Merci
      </motion.div>
    </section>
  );
}
