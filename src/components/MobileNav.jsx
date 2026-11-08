export default function MobileNav() {
  const navItems = [
    { href: '#hero', icon: '🏠', label: 'Accueil' },
    { href: '#annonce', icon: '📜', label: 'Annonce' },
    { href: '#localisation', icon: '📍', label: 'Lieu' },
    { href: '#tissus', icon: '👗', label: 'Tissus' },
    { href: '#remerciements', icon: '💐', label: 'Merci' }
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid var(--color-border)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-around',
        padding: 'var(--spacing-sm) 0'
      }}
    >
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textDecoration: 'none',
            color: 'var(--color-muted)',
            fontSize: '0.75rem',
            padding: 'var(--spacing-xs)',
            transition: 'var(--transition-normal)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--color-gold)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--color-muted)';
          }}
        >
          <span
            style={{
              fontSize: '1.5rem',
              marginBottom: '4px'
            }}
          >
            {item.icon}
          </span>
          <span>{item.label}</span>
        </a>
      ))}
    </nav>
  );
}
