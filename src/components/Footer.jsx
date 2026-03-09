import { Link } from 'react-router-dom'

const footerLinks = {
  Company: [
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
    { label: 'Careers', path: '/contact' },
  ],
  Solutions: [
    { label: 'AI Automation', path: '/services' },
    { label: 'Predictive Analytics', path: '/services' },
    { label: 'NLP Solutions', path: '/services' },
    { label: 'Computer Vision', path: '/services' },
  ],
  Resources: [
    { label: 'Documentation', path: '/contact' },
    { label: 'Case Studies', path: '/' },
    { label: 'Blog', path: '/contact' },
    { label: 'Research', path: '/about' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      style={{
        background: '#050a14',
        borderTop: '1px solid rgba(0, 102, 255, 0.15)',
        padding: '80px 0 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '300px',
          background: 'radial-gradient(ellipse at bottom, rgba(0,102,255,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Top section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr repeat(3, 1fr)',
            gap: '48px',
            paddingBottom: '60px',
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            {/* Logo */}
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
                marginBottom: '20px',
              }}
            >
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #0066ff, #00d4ff)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 14px rgba(0,102,255,0.4)',
                  flexShrink: 0,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L17.32 6.5V15.5L10 20L2.68 15.5V6.5L10 2Z" stroke="#fff" strokeWidth="1.5" fill="none"/>
                  <path d="M10 6L14.33 8.5V13.5L10 16L5.67 13.5V8.5L10 6Z" fill="#fff" opacity="0.8"/>
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #ffffff 30%, #00d4ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Nexora
              </span>
            </Link>

            <p
              style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: '0.9rem',
                lineHeight: 1.7,
                maxWidth: '280px',
                marginBottom: '28px',
              }}
            >
              Empowering enterprises with cutting-edge AI solutions that drive real-world transformation at unprecedented scale.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { label: 'LinkedIn', icon: 'in' },
                { label: 'Twitter', icon: 'X' },
                { label: 'GitHub', icon: 'gh' },
              ].map(({ label, icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    fontFamily: "'Space Grotesk', sans-serif",
                    transition: 'all 0.25s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0,102,255,0.5)'
                    e.currentTarget.style.color = '#0066ff'
                    e.currentTarget.style.background = 'rgba(0,102,255,0.08)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.35)',
                  marginBottom: '20px',
                }}
              >
                {title}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {links.map(({ label, path }) => (
                  <li key={label}>
                    <Link
                      to={path}
                      style={{
                        color: 'rgba(255,255,255,0.55)',
                        fontSize: '0.9rem',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                        display: 'inline-block',
                      }}
                      onMouseEnter={(e) => { e.target.style.color = '#ffffff' }}
                      onMouseLeave={(e) => { e.target.style.color = 'rgba(255,255,255,0.55)' }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(0,102,255,0.2), transparent)',
          }}
        />

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '24px 0',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p
            style={{
              color: 'rgba(255,255,255,0.3)',
              fontSize: '0.85rem',
            }}
          >
            &copy; {currentYear} Nexora Technologies, Inc. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  color: 'rgba(255,255,255,0.3)',
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => { e.target.style.color = 'rgba(255,255,255,0.7)' }}
                onMouseLeave={(e) => { e.target.style.color = 'rgba(255,255,255,0.3)' }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 500px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
