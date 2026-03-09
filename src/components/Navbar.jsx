import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled
          ? 'rgba(5, 10, 20, 0.95)'
          : 'transparent',
        borderBottom: scrolled
          ? '1px solid rgba(0, 102, 255, 0.15)'
          : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
      }}
    >
      <nav
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
          }}
        >
          {/* Logo icon */}
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #0066ff, #00d4ff)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 16px rgba(0, 102, 255, 0.5)',
              flexShrink: 0,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 2L17.32 6.5V15.5L10 20L2.68 15.5V6.5L10 2Z"
                stroke="#ffffff"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M10 6L14.33 8.5V13.5L10 16L5.67 13.5V8.5L10 6Z"
                fill="#ffffff"
                opacity="0.8"
              />
            </svg>
          </div>
          {/* Logo text */}
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '1.5rem',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #ffffff 30%, #00d4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.02em',
              textShadow: 'none',
            }}
          >
            Nexora
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            listStyle: 'none',
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map(({ label, path }) => (
            <li key={path}>
              <Link
                to={path}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  padding: '8px 16px',
                  borderRadius: '6px',
                  color: isActive(path) ? '#0066ff' : 'rgba(255,255,255,0.7)',
                  background: isActive(path) ? 'rgba(0,102,255,0.1)' : 'transparent',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                  display: 'block',
                }}
                onMouseEnter={(e) => {
                  if (!isActive(path)) {
                    e.target.style.color = '#ffffff'
                    e.target.style.background = 'rgba(255,255,255,0.05)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(path)) {
                    e.target.style.color = 'rgba(255,255,255,0.7)'
                    e.target.style.background = 'transparent'
                  }
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button (desktop) */}
        <div className="desktop-cta">
          <Link
            to="/contact"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.875rem',
              fontWeight: 600,
              padding: '10px 22px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #0066ff, #0044cc)',
              color: '#ffffff',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 0 16px rgba(0,102,255,0.3)',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = '0 0 28px rgba(0,102,255,0.55)'
              e.target.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = '0 0 16px rgba(0,102,255,0.3)'
              e.target.style.transform = 'translateY(0)'
            }}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          aria-label="Toggle menu"
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
          }}
        >
          <span
            style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: '#ffffff',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: '#ffffff',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: '#ffffff',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: '72px 0 0 0',
            background: 'rgba(5, 10, 20, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            padding: '32px 24px',
            borderTop: '1px solid rgba(0,102,255,0.15)',
            zIndex: 999,
          }}
        >
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {NAV_LINKS.map(({ label, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    padding: '16px 20px',
                    borderRadius: '10px',
                    color: isActive(path) ? '#0066ff' : '#ffffff',
                    background: isActive(path) ? 'rgba(0,102,255,0.1)' : 'transparent',
                    display: 'block',
                    borderLeft: isActive(path) ? '3px solid #0066ff' : '3px solid transparent',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '32px' }}>
            <Link
              to="/contact"
              style={{
                display: 'block',
                textAlign: 'center',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1rem',
                fontWeight: 600,
                padding: '16px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #0066ff, #0044cc)',
                color: '#ffffff',
                textDecoration: 'none',
                boxShadow: '0 0 24px rgba(0,102,255,0.35)',
              }}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
