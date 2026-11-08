import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

export default function AudioPlayer({ src, trackName, autoPlay = false, onEnded }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (autoPlay && audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error('Auto-play prevented:', error);
          });
      }
    }
  }, [autoPlay]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        // Stop all other audios
        document.querySelectorAll('audio').forEach(audio => {
          if (audio !== audioRef.current && !audio.paused) {
            audio.pause();
            audio.currentTime = 0;
          }
        });

        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    if (onEnded) {
      onEnded();
    }
  };

  return (
    <div
      style={{
        maxWidth: '500px',
        margin: '0 auto'
      }}
    >
      <div
        style={{
          background: 'var(--color-black)',
          border: '2px solid var(--color-gold)',
          borderRadius: '50px',
          padding: 'var(--spacing-md) var(--spacing-lg)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-md)',
          boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)'
        }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={togglePlay}
          aria-label="Lecture/Pause"
          style={{
            width: '60px',
            height: '60px',
            background: 'var(--color-gold)',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'var(--transition-normal)',
            flexShrink: 0
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--color-gold-light)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--color-gold)';
          }}
        >
          {isPlaying ? (
            <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--color-black)">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--color-black)">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </motion.button>

        <div
          style={{
            flex: 1,
            textAlign: 'left'
          }}
        >
          <p
            style={{
              fontSize: '1rem',
              color: 'var(--color-white)',
              fontWeight: 500,
              margin: 0
            }}
          >
            {trackName}
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '3px',
            alignItems: 'flex-end',
            height: '30px'
          }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              animate={isPlaying ? {
                scaleY: [1, 0.5, 1]
              } : {
                scaleY: 0.3
              }}
              transition={{
                duration: 0.5,
                repeat: isPlaying ? Infinity : 0,
                repeatType: 'reverse',
                delay: i * 0.1
              }}
              style={{
                width: '4px',
                background: 'var(--color-gold)',
                borderRadius: '2px',
                height: `${10 + i * 5}px`
              }}
            />
          ))}
        </div>
      </div>

      <audio
        ref={audioRef}
        src={src}
        loop={!onEnded}
        onEnded={handleEnded}
      />
    </div>
  );
}
