import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

export default function AudioPlayer({ src, trackName, subtitle = "Musique sacrée & recueillement", autoPlay = false, onEnded }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (autoPlay && audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => console.log('Autoplay deferred for user gesture:', err));
      }
    }
  }, [autoPlay]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // Met en pause les autres lecteurs audio sur la page
      document.querySelectorAll('audio').forEach((audio) => {
        if (audio !== audioRef.current && !audio.paused) {
          audio.pause();
        }
      });

      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error('Play error:', err));
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const curr = audioRef.current.currentTime;
      const dur = audioRef.current.duration || 1;
      setCurrentTime(curr);
      setDuration(dur);
      setProgress((curr / dur) * 100);
    }
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = Math.max(0, Math.min(1, clickX / rect.width));
    if (audioRef.current && audioRef.current.duration) {
      audioRef.current.currentTime = newProgress * audioRef.current.duration;
      setProgress(newProgress * 100);
    }
  };

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    if (onEnded) onEnded();
  };

  return (
    <div style={{ maxWidth: '580px', margin: '0 auto', width: '100%' }}>
      <div className={`audio-luxury-player ${isPlaying ? 'playing' : ''}`}>
        {/* Miniature Disque Vinyle Or qui tourne pendant la lecture */}
        <div className={`vinyl-disc ${isPlaying ? 'spin' : ''}`} onClick={togglePlay} title="Lecture musicale">
          <div className="vinyl-center-dot" />
        </div>

        {/* Bouton Play/Pause avec effet magnétique et halo doré */}
        <button
          className="play-btn-halo"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Mettre en pause' : 'Écouter'}
        >
          {isPlaying ? (
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

        {/* Infos du morceau & visualiseur */}
        <div style={{ flex: 1, minWidth: 0, textAlign: 'left' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.05rem',
                letterSpacing: '0.06em',
                color: 'var(--pearl-white)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                textTransform: 'uppercase'
              }}
            >
              {trackName}
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--gold-light)', fontFamily: 'monospace' }}>
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
            {subtitle}
          </p>

          {/* Barre de progression cliquable */}
          <div
            onClick={handleSeek}
            style={{
              width: '100%',
              height: '5px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '3px',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: '100%',
                background: 'linear-gradient(90deg, var(--gold-light), var(--gold-warm))',
                borderRadius: '3px',
                transition: 'width 0.15s linear',
                boxShadow: '0 0 8px rgba(212, 175, 55, 0.7)'
              }}
            />
          </div>
        </div>

        {/* Égaliseur d'onde sonore dynamique animé */}
        <div className="sound-bars-wrapper" title={isPlaying ? 'En lecture' : 'En pause'}>
          {[
            { delay: '0s', max: 22 },
            { delay: '0.15s', max: 14 },
            { delay: '0.3s', max: 24 },
            { delay: '0.1s', max: 18 },
            { delay: '0.25s', max: 20 },
            { delay: '0.05s', max: 12 }
          ].map((bar, i) => (
            <motion.div
              key={i}
              className="sound-bar"
              animate={
                isPlaying
                  ? { height: [6, bar.max, 8, bar.max * 0.8, 6] }
                  : { height: 4 }
              }
              transition={
                isPlaying
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

      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onEnded={handleEnded}
      />
    </div>
  );
}
