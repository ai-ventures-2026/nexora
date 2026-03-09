import { Link } from 'react-router-dom'

const aiSolutions = [
  {
    icon: '⚙️',
    title: 'AI Automation',
    desc: 'Eliminate repetitive workflows with intelligent process automation that learns and adapts to your business in real time.',
    tag: 'Process Intelligence',
  },
  {
    icon: '📊',
    title: 'Predictive Analytics',
    desc: 'Turn raw data into decisive foresight. Our models forecast demand, risk, and opportunity with surgical precision.',
    tag: 'Data Science',
  },
  {
    icon: '💬',
    title: 'NLP Solutions',
    desc: 'Deploy conversational AI, document analysis, and sentiment intelligence that speaks the language of your industry.',
    tag: 'Natural Language',
  },
  {
    icon: '👁️',
    title: 'Computer Vision',
    desc: 'Give machines the ability to see and understand — from quality control to real-time object recognition at scale.',
    tag: 'Visual AI',
  },
]

const stats = [
  { value: '500+', label: 'Companies Transformed', sub: 'across 40+ industries' },
  { value: '98%', label: 'Model Accuracy', sub: 'on production systems' },
  { value: '10x', label: 'Faster Deployment', sub: 'vs. traditional dev' },
  { value: '$50M', label: 'Client Savings', sub: 'in operational costs' },
]

const caseStudies = [
  {
    company: 'GlobalRetail Co.',
    industry: 'Retail & E-commerce',
    result: '340% increase in recommendation accuracy',
    detail: 'Deployed a real-time personalization engine processing 2M+ daily events, slashing cart abandonment by 28% in 90 days.',
    metric: '+340%',
    color: '#0066ff',
  },
  {
    company: 'MediCore Health',
    industry: 'Healthcare & Diagnostics',
    result: 'Reduced diagnostic errors by 67%',
    detail: 'Built a medical imaging AI platform that assists radiologists with sub-millimeter anomaly detection, now used in 80+ hospitals.',
    metric: '-67%',
    color: '#00d4ff',
  },
  {
    company: 'FinAxis Bank',
    industry: 'Financial Services',
    result: '$18M in fraud prevented in Year 1',
    detail: 'Implemented a real-time transaction scoring system with 99.2% precision, replacing a rules-based legacy system overnight.',
    metric: '$18M',
    color: '#0066ff',
  },
]

const trustedBy = [
  'AeroGlobal', 'QuantumPeak', 'StellarFinance', 'MetaCore Systems',
  'PulseHealth', 'OmniLogistics', 'DataVault', 'Synapse Labs',
]

export default function Home() {
  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(180deg, #050a14 0%, #071220 60%, #050a14 100%)',
        }}
      >
        {/* Grid background */}
        <div className="grid-bg" />

        {/* Radial glow orbs */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '900px',
            height: '600px',
            background: 'radial-gradient(ellipse at center, rgba(0,102,255,0.12) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '40%',
            right: '-100px',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(ellipse, rgba(0,212,255,0.07) 0%, transparent 65%)',
            borderRadius: '50%',
            pointerEvents: 'none',
            animation: 'pulse-glow 6s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '20%',
            left: '-100px',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(ellipse, rgba(0,102,255,0.08) 0%, transparent 65%)',
            borderRadius: '50%',
            pointerEvents: 'none',
            animation: 'pulse-glow 8s ease-in-out infinite reverse',
          }}
        />

        {/* Floating geometric shapes */}
        <div
          style={{
            position: 'absolute',
            top: '15%',
            right: '8%',
            width: '180px',
            height: '180px',
            border: '1px solid rgba(0,102,255,0.2)',
            borderRadius: '50%',
            animation: 'float 7s ease-in-out infinite',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '18%',
            right: '10%',
            width: '100px',
            height: '100px',
            border: '1px solid rgba(0,212,255,0.15)',
            borderRadius: '50%',
            animation: 'float 5s ease-in-out infinite reverse',
            pointerEvents: 'none',
          }}
        />

        {/* Hero content */}
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '120px 24px 80px',
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
          }}
        >
          {/* Eyebrow badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(0,102,255,0.1)',
              border: '1px solid rgba(0,102,255,0.3)',
              borderRadius: '100px',
              padding: '6px 18px',
              marginBottom: '32px',
              animation: 'slide-up 0.6s ease forwards',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#0066ff',
                display: 'inline-block',
                boxShadow: '0 0 8px #0066ff',
                animation: 'pulse-glow 2s ease infinite',
              }}
            />
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#0066ff',
              }}
            >
              Next-Gen AI Platform &mdash; Now in Production
            </span>
          </div>

          {/* Main headline */}
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              marginBottom: '28px',
              letterSpacing: '-0.03em',
              animation: 'slide-up 0.7s ease 0.1s both',
            }}
          >
            The Future Runs<br />
            <span
              style={{
                background: 'linear-gradient(135deg, #0066ff 0%, #00d4ff 60%, #ffffff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              on Nexora
            </span>
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '640px',
              margin: '0 auto 40px',
              lineHeight: 1.75,
              animation: 'slide-up 0.7s ease 0.2s both',
            }}
          >
            We build the AI infrastructure that powers billion-dollar decisions.
            From machine learning to full-stack automation — Nexora transforms
            enterprises into intelligent, self-optimizing systems.
          </p>

          {/* CTA buttons */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              animation: 'slide-up 0.7s ease 0.3s both',
            }}
          >
            <Link
              to="/contact"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1rem',
                fontWeight: 600,
                padding: '16px 32px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #0066ff, #0044cc)',
                color: '#ffffff',
                textDecoration: 'none',
                boxShadow: '0 0 24px rgba(0,102,255,0.4)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 40px rgba(0,102,255,0.6)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 24px rgba(0,102,255,0.4)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Start Your Transformation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link
              to="/services"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1rem',
                fontWeight: 600,
                padding: '15px 32px',
                borderRadius: '10px',
                background: 'transparent',
                color: '#ffffff',
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.2)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,102,255,0.5)'
                e.currentTarget.style.background = 'rgba(0,102,255,0.06)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              Explore Services
            </Link>
          </div>

          {/* Hero metrics bar */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '48px',
              marginTop: '72px',
              flexWrap: 'wrap',
              animation: 'slide-up 0.7s ease 0.4s both',
            }}
          >
            {[
              { label: 'Years of R&D', value: '7+' },
              { label: 'AI Engineers', value: '120+' },
              { label: 'Uptime SLA', value: '99.9%' },
            ].map(({ label, value }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    lineHeight: 1,
                    marginBottom: '4px',
                  }}
                >
                  {value}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '120px',
            background: 'linear-gradient(to bottom, transparent, #050a14)',
            pointerEvents: 'none',
          }}
        />
      </section>

      {/* ===== AI SOLUTIONS SECTION ===== */}
      <section style={{ padding: '100px 0', background: '#050a14' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#0066ff',
                display: 'block',
                marginBottom: '12px',
              }}
            >
              Core Capabilities
            </span>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '16px',
                letterSpacing: '-0.02em',
              }}
            >
              AI Solutions Built to Scale
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem', maxWidth: '520px', margin: '0 auto' }}>
              Every product we build is engineered for production-grade reliability and measurable business impact.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            {aiSolutions.map((sol) => (
              <div
                key={sol.title}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '16px',
                  padding: '36px 28px',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0,102,255,0.4)'
                  e.currentTarget.style.background = 'rgba(0,102,255,0.05)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3), 0 0 30px rgba(0,102,255,0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Corner accent */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '60px',
                    height: '60px',
                    background: 'radial-gradient(ellipse at top right, rgba(0,102,255,0.2), transparent 70%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Tag */}
                <span
                  style={{
                    display: 'inline-block',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#00d4ff',
                    background: 'rgba(0,212,255,0.08)',
                    border: '1px solid rgba(0,212,255,0.2)',
                    borderRadius: '100px',
                    padding: '3px 10px',
                    marginBottom: '20px',
                  }}
                >
                  {sol.tag}
                </span>

                {/* Icon */}
                <div
                  style={{
                    fontSize: '2rem',
                    marginBottom: '16px',
                    display: 'block',
                  }}
                >
                  {sol.icon}
                </div>

                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '12px',
                  }}
                >
                  {sol.title}
                </h3>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                  }}
                >
                  {sol.desc}
                </p>

                {/* Arrow */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginTop: '24px',
                    color: '#0066ff',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IMPACT STATS SECTION ===== */}
      <section
        style={{
          padding: '100px 0',
          background: '#0a1628',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            width: '800px',
            height: '400px',
            background: 'radial-gradient(ellipse, rgba(0,102,255,0.07) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#0066ff',
                display: 'block',
                marginBottom: '12px',
              }}
            >
              Proven at Scale
            </span>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '-0.02em',
              }}
            >
              Numbers That Define Impact
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '2px',
              background: 'rgba(0,102,255,0.1)',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(0,102,255,0.2)',
            }}
          >
            {stats.map(({ value, label, sub }, i) => (
              <div
                key={label}
                style={{
                  textAlign: 'center',
                  padding: '48px 32px',
                  background: '#0a1628',
                  transition: 'background 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0,102,255,0.08)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#0a1628'
                }}
              >
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                    fontWeight: 700,
                    background: i % 2 === 0
                      ? 'linear-gradient(135deg, #0066ff, #00d4ff)'
                      : 'linear-gradient(135deg, #00d4ff, #ffffff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1,
                    marginBottom: '12px',
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    marginBottom: '6px',
                  }}
                >
                  {label}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>
                  {sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CASE STUDIES SECTION ===== */}
      <section style={{ padding: '100px 0', background: '#050a14' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ marginBottom: '64px' }}>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#0066ff',
                display: 'block',
                marginBottom: '12px',
              }}
            >
              Case Studies
            </span>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                  fontWeight: 700,
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                  maxWidth: '500px',
                }}
              >
                Real Outcomes, Real Organizations
              </h2>
              <Link
                to="/contact"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: '#0066ff',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'gap 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                View all case studies
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {caseStudies.map((cs) => (
              <div
                key={cs.company}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '16px',
                  padding: '36px',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `rgba(0,102,255,0.4)`
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 24px 48px rgba(0,0,0,0.35)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Top accent bar */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: `linear-gradient(90deg, ${cs.color}, transparent)`,
                  }}
                />

                {/* Big metric */}
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '3rem',
                    fontWeight: 700,
                    background: `linear-gradient(135deg, ${cs.color}, #ffffff)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1,
                    marginBottom: '16px',
                  }}
                >
                  {cs.metric}
                </div>

                <span
                  style={{
                    display: 'inline-block',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.4)',
                    marginBottom: '10px',
                  }}
                >
                  {cs.industry}
                </span>

                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '12px',
                    lineHeight: 1.3,
                  }}
                >
                  {cs.company}
                </h3>

                <p
                  style={{
                    color: 'rgba(255,255,255,0.55)',
                    fontSize: '0.88rem',
                    lineHeight: 1.7,
                    marginBottom: '16px',
                  }}
                >
                  {cs.detail}
                </p>

                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: cs.color,
                  }}
                >
                  {cs.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRUSTED BY SECTION ===== */}
      <section
        style={{
          padding: '80px 0',
          background: '#0a1628',
          borderTop: '1px solid rgba(0,102,255,0.1)',
          borderBottom: '1px solid rgba(0,102,255,0.1)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <p
            style={{
              textAlign: 'center',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
              marginBottom: '40px',
            }}
          >
            Trusted by Industry Leaders
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px 32px',
            }}
          >
            {trustedBy.map((name) => (
              <div
                key={name}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.2)',
                  letterSpacing: '0.05em',
                  padding: '10px 20px',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                  e.currentTarget.style.borderColor = 'rgba(0,102,255,0.25)'
                  e.currentTarget.style.background = 'rgba(0,102,255,0.04)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.2)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section
        style={{
          padding: '120px 0',
          background: '#050a14',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            width: '700px',
            height: '400px',
            background: 'radial-gradient(ellipse, rgba(0,102,255,0.15) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />
        <div className="grid-bg" style={{ opacity: 0.5 }} />

        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 24px',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#0066ff',
              display: 'block',
              marginBottom: '16px',
            }}
          >
            Ready to Disrupt?
          </span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '20px',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
            }}
          >
            Start Your AI<br />Transformation Today
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              marginBottom: '40px',
              maxWidth: '520px',
              margin: '0 auto 40px',
            }}
          >
            Join 500+ enterprises already using Nexora to automate, predict, and accelerate at an unprecedented scale.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1rem',
                fontWeight: 600,
                padding: '16px 36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #0066ff, #0044cc)',
                color: '#ffffff',
                textDecoration: 'none',
                boxShadow: '0 0 30px rgba(0,102,255,0.45)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 50px rgba(0,102,255,0.65)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(0,102,255,0.45)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Get a Free Consultation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link
              to="/about"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1rem',
                fontWeight: 600,
                padding: '15px 32px',
                borderRadius: '10px',
                background: 'transparent',
                color: 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.15)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0,102,255,0.4)'
                e.currentTarget.style.color = '#0066ff'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
              }}
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
