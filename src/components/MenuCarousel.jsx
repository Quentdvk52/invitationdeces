import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { MEDIA_URLS } from '../constants/media';

export default function MenuCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      const images = trackRef.current?.querySelectorAll('img');
      if (images && images[currentIndex - 1]) {
        images[currentIndex - 1].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < MEDIA_URLS.images.menu.length - 1) {
      setCurrentIndex(currentIndex + 1);
      const images = trackRef.current?.querySelectorAll('img');
      if (images && images[currentIndex + 1]) {
        images[currentIndex + 1].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  return (
    <section
      id="menu"
      style={{
        background: 'var(--color-dark-gray)',
        padding: 'var(--spacing-2xl) var(--spacing-md)',
        textAlign: 'center',
        borderBottom: '2px solid var(--color-gold)'
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1 }}
        className="section-title"
      >
        Au menu
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{
          overflow: 'hidden',
          marginTop: 'var(--spacing-xl)',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
          position: 'relative'
        }}
      >
        <button
          onClick={handlePrev}
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'var(--color-gold)',
            color: 'var(--color-black)',
            border: 'none',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            fontSize: '1.5rem',
            cursor: 'pointer',
            zIndex: 10,
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            left: '10px'
          }}
          className="menu-arrow menu-arrow-left"
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--color-gold-light)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--color-gold)';
          }}
        >
          ‹
        </button>

        <div
          ref={trackRef}
          className="menu-track"
          style={{
            display: 'flex',
            animation: 'scroll-left 66s steps(11) infinite'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.animationPlayState = 'paused';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.animationPlayState = 'running';
          }}
        >
          {MEDIA_URLS.images.menu.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Plat"
              style={{
                width: '500px',
                height: '350px',
                objectFit: 'cover',
                border: '2px solid var(--color-gold)',
                borderRadius: 'var(--spacing-sm)',
                flexShrink: 0
              }}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'var(--color-gold)',
            color: 'var(--color-black)',
            border: 'none',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            fontSize: '1.5rem',
            cursor: 'pointer',
            zIndex: 10,
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            right: '10px'
          }}
          className="menu-arrow menu-arrow-right"
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--color-gold-light)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--color-gold)';
          }}
        >
          ›
        </button>
      </motion.div>
    </section>
  );
}
