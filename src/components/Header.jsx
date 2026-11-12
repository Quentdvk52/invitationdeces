import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Header({ className = 'desktop-header' }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll <= 10) {
        setVisible(true);
        return;
      }

      if (currentScroll > lastScroll && currentScroll > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={className}
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'rgba(5, 5, 5, 0.88)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.25)',
        zIndex: 1000,
        padding: 'var(--spacing-sm) var(--spacing-md)'
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.6rem',
            color: 'var(--color-gold)',
            letterSpacing: '0.12em',
            textShadow: '0 0 12px rgba(212, 175, 55, 0.3)'
          }}
        >
          OBSEQUES
        </div>
        <nav
          style={{
            display: 'flex',
            gap: 'var(--spacing-lg)'
          }}
        >
          {[
            { href: '#hero', label: 'Accueil' },
            { href: '#annonce', label: 'Annonce' },
            { href: '#localisation', label: 'Localisation' },
            { href: '#tissus', label: 'Tissus' },
            { href: '#remerciements', label: 'Remerciements' }
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
