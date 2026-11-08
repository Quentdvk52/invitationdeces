import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Header() {
  const [visible, setVisible] = useState(true);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 100], [0, -100]);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        setVisible(true);
        return;
      }

      if (currentScroll > lastScroll) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--color-border)',
        zIndex: 1000,
        padding: 'var(--spacing-sm) var(--spacing-md)',
        y: visible ? 0 : '-100%',
        transition: 'transform 0.3s ease'
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
            fontSize: '1.5rem',
            color: 'var(--color-gold)',
            letterSpacing: '0.1em'
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
