export default function MobileNav() {
  const navItems = [
    { href: '#hero', icon: '🏠', label: 'Accueil' },
    { href: '#annonce', icon: '📜', label: 'Annonce' },
    { href: '#localisation', icon: '📍', label: 'Lieu' },
    { href: '#tissus', icon: '👗', label: 'Tissus' },
    { href: '#remerciements', icon: '💐', label: 'Merci' },
    { href: '#menu', icon: '🍷', label: 'Menu' }
  ];

  return (
    <nav className="mobile-dock">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="mobile-dock-item"
        >
          <span className="mobile-dock-icon">{item.icon}</span>
          <span>{item.label}</span>
        </a>
      ))}
    </nav>
  );
}
