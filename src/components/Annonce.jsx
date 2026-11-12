import { motion } from 'motion/react';
import { MEDIA_URLS, SITE_DATA } from '../constants/media';
import AudioPlayer from './AudioPlayer';

export default function Annonce() {
  return (
    <section
      id="annonce"
      style={{
        padding: 'var(--space-3xl) var(--space-md)',
        maxWidth: '1100px',
        margin: '0 auto',
        position: 'relative'
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
        <div className="section-eyebrow">
          <span>📜</span> Avis et Faire-Part de Décès
        </div>
        <h2 className="section-title">Annonce Solennelle</h2>
        <p className="section-subtitle">
          Les familles réunies dans la foi, le souvenir et l'espérance partagent cette douloureuse nouvelle.
        </p>
      </div>

      {/* Carte Maîtresse d'Annonce avec Double-Bezel et Ornements d'angle */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="luxury-card"
        style={{ marginBottom: 'var(--space-2xl)' }}
      >
        <div className="luxury-card-inner">
          <div className="ornament-corner ornament-top-left" />
          <div className="ornament-corner ornament-top-right" />
          <div className="ornament-corner ornament-bottom-left" />
          <div className="ornament-corner ornament-bottom-right" />

          {/* Liste des Collectivités et Familles éplorées */}
          <div
            style={{
              textAlign: 'center',
              maxWidth: '850px',
              margin: '0 auto var(--space-xl)',
              padding: '0 var(--space-sm)'
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.85rem',
                letterSpacing: '0.22em',
                color: 'var(--gold-light)',
                textTransform: 'uppercase',
                marginBottom: 'var(--space-md)'
              }}
            >
              Les Familles Éplorées
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '12px',
                textAlign: 'center'
              }}
            >
              {SITE_DATA.families.map((family, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                    borderRadius: '12px',
                    padding: '10px 16px',
                    fontSize: '0.98rem',
                    color: 'var(--pearl-white)',
                    fontFamily: 'var(--font-serif)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  <span style={{ color: 'var(--gold-light)', fontSize: '0.8rem' }}>❖</span>
                  <span>{family}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              width: '180px',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, var(--gold-light), transparent)',
              margin: '0 auto var(--space-xl)'
            }}
          />

          {/* Couple Hounnongan DASSOU */}
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
            <div
              style={{
                fontFamily: 'var(--font-script)',
                fontSize: '2.4rem',
                color: 'var(--gold-light)',
                marginBottom: '0.2rem'
              }}
            >
              Et particulièrement
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.6rem, 4vw, 2.3rem)',
                color: 'var(--pearl-white)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textShadow: '0 0 25px rgba(212, 175, 55, 0.4)'
              }}
            >
              {SITE_DATA.couple.name}
            </h3>
          </div>

          {/* Photo du Couple dans un cadre d'art */}
          <div
            style={{
              maxWidth: '380px',
              margin: '0 auto var(--space-xl)',
              borderRadius: 'var(--radius-inner)',
              overflow: 'hidden',
              padding: '3px',
              background: 'linear-gradient(135deg, var(--gold-light), rgba(212, 175, 55, 0.2), var(--pearl-white))',
              boxShadow: '0 15px 40px rgba(0, 0, 0, 0.8), 0 0 30px rgba(212, 175, 55, 0.25)'
            }}
          >
            <div style={{ borderRadius: 'calc(var(--radius-inner) - 3px)', overflow: 'hidden' }}>
              <img
                src={MEDIA_URLS.images.couple}
                alt={SITE_DATA.couple.name}
                style={{ width: '100%', display: 'block', filter: 'contrast(1.03)' }}
              />
            </div>
          </div>

          {/* Texte solennel d'hommage */}
          <div
            style={{
              maxWidth: '780px',
              margin: '0 auto var(--space-xl)',
              textAlign: 'center',
              fontSize: '1.15rem',
              lineHeight: 1.9,
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              background: 'rgba(10, 8, 7, 0.6)',
              padding: 'var(--space-md) var(--space-lg)',
              borderRadius: '16px',
              border: '1px solid rgba(212, 175, 55, 0.2)'
            }}
          >
            Ont la vive et profonde douleur de vous annoncer le rappel à Dieu de leur très chère et regrettée Fille, Sœur, Tante, Épouse, Mère, Belle-Mère, Grand-Mère et Arrière-Grand-Mère :
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
                color: 'var(--gold-light)',
                fontStyle: 'normal',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                margin: '1.2rem 0 0.4rem',
                textShadow: '0 0 20px rgba(212, 175, 55, 0.35)'
              }}
            >
              {SITE_DATA.defunte.name}
            </div>
            <div style={{ fontStyle: 'normal', fontSize: '0.95rem', color: 'var(--pearl-white)', letterSpacing: '0.05em' }}>
              Endormie paisiblement dans l'espérance de la résurrection, dans sa 90ème année.
            </div>
          </div>

          {/* Lecteur Audio de l'Annonce vocale */}
          <div style={{ marginTop: 'var(--space-lg)' }}>
            <AudioPlayer
              src={MEDIA_URLS.audio.annonce}
              trackName="Annonce vocale solennelle"
              subtitle="Enregistrement officiel de la famille"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
