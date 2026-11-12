import { motion } from 'motion/react';
import { useAudio } from '../context/AudioContext';

export default function AudioPlayer({ trackId, trackName, subtitle }) {
  const {
    activeTrackId,
    isPlaying,
    currentTime,
    duration,
    progress,
    toggleTrack,
    seekTrack,
    tracks
  } = useAudio();

  const isCurrentActive = activeTrackId === trackId;
  const isThisPlaying = isCurrentActive && isPlaying;
  const trackInfo = tracks[trackId] || {};

  const displayName = trackName || trackInfo.name || 'Piste audio';
  const displaySubtitle = subtitle || trackInfo.subtitle || 'Hommage solennel';

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleSeek = (e) => {
    if (!isCurrentActive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
    seekTrack(newProgress);
  };

  return (
    <div style={{ maxWidth: '580px', margin: '0 auto', width: '100%' }}>
      <div className={`audio-luxury-player ${isThisPlaying ? 'playing' : ''}`}>
        {/* Miniature Disque Vinyle en Or gravé qui tourne pendant la lecture */}
        <div
          className={`vinyl-disc ${isThisPlaying ? 'spin' : ''}`}
          onClick={() => toggleTrack(trackId)}
          title="Écouter le morceau"
          style={{ cursor: 'pointer' }}
        >
          <div className="vinyl-center-dot" />
        </div>

        {/* Bouton Play/Pause avec halo doré */}
        <button
          className="play-btn-halo"
          onClick={() => toggleTrack(trackId)}
          aria-label={isThisPlaying ? 'Mettre en pause' : 'Écouter'}
        >
          {isThisPlaying ? (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="2" />
              <rect x="14" y="4" width="4" height="16" rx="2" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ marginLeft: '3px' }}>
              <path d="M7 4.5v15a1 1 0 001.52.85l12-7.5a1 1 0 000-1.7l-12-7.5A1 1 0 007 4.5z" />
            </svg>
          )}
        </button>

        {/* Informations de la piste */}
        <div style={{ flex: 1, minWidth: 0, textAlign: 'left' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.05rem',
                letterSpacing: '0.06em',
                color: isThisPlaying ? 'var(--gold-light)' : 'var(--pearl-white)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                textTransform: 'uppercase',
                transition: 'color 0.3s ease'
              }}
            >
              {displayName}
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--gold-light)', fontFamily: 'monospace' }}>
              {isCurrentActive ? `${formatTime(currentTime)} / ${formatTime(duration)}` : 'Écouter'}
            </span>
          </div>

          <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
            {displaySubtitle}
          </p>

          {/* Barre de progression interactive */}
          <div
            onClick={handleSeek}
            style={{
              width: '100%',
              height: '5px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '3px',
              cursor: isCurrentActive ? 'pointer' : 'default',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                width: isCurrentActive ? `${progress}%` : '0%',
                height: '100%',
                background: 'linear-gradient(90deg, var(--gold-light), var(--gold-warm))',
                borderRadius: '3px',
                transition: 'width 0.15s linear',
                boxShadow: '0 0 8px rgba(212, 175, 55, 0.7)'
              }}
            />
          </div>
        </div>

        {/* Égaliseur sonore dynamique */}
        <div className="sound-bars-wrapper" title={isThisPlaying ? 'En lecture' : 'En pause'}>
          {[
            { max: 22 },
            { max: 14 },
            { max: 24 },
            { max: 18 },
            { max: 20 },
            { max: 12 }
          ].map((bar, i) => (
            <motion.div
              key={i}
              className="sound-bar"
              animate={
                isThisPlaying
                  ? { height: [5, bar.max, 8, bar.max * 0.85, 5] }
                  : { height: 4 }
              }
              transition={
                isThisPlaying
                  ? {
                      duration: 0.85,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                      delay: i * 0.12
                    }
                  : { duration: 0.3 }
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
