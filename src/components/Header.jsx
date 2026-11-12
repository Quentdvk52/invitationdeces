import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Header() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll <= 20) {
        setVisible(true);
        return;
      }

      if (currentScroll > lastScroll && currentScroll > 90) {
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
      className="island-header"
      initial={{ y: -80, opacity: 0 }}
      animate={{
        y: visible ? 0 : -90,
        opacity: visible ? 1 : 0
      }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      <a
        href="#hero"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          textDecoration: 'none'
        }}
      >
        <span style={{ fontSize: '1.2rem' }}>🕊️</span>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.35rem',
            fontWeight: 800,
            letterSpacing: '0.14em',
            color: 'var(--gold-light)',
            textShadow: '0 0 15px rgba(212, 175, 55, 0.4)'
          }}
        >
          OBSEQUES
        </span>
      </a>

      <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {[
          { href: '#hero', label: 'Accueil' },
          { href: '#annonce', label: 'Annonce' },
          { href: '#localisation', label: 'Lieu' },
          { href: '#tissus', label: 'Tissus' },
          { href: '#remerciements', label: 'Remerciements' },
          { href: '#menu', label: 'Menu' }
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="nav-link-royal"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
