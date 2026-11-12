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
      className="mobile-nav"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(10, 10, 10, 0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(212, 175, 55, 0.3)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-around',
        padding: 'var(--spacing-xs) 0',
        paddingBottom: 'calc(var(--spacing-xs) + env(safe-area-inset-bottom, 0px))'
      }}
    >
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="mobile-nav-link"
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
              fontSize: '1.4rem',
              marginBottom: '2px'
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
