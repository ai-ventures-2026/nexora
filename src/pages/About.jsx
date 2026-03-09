import { Link } from 'react-router-dom'

const pillars = [
  {
    icon: '🧠',
    title: 'Foundation Models',
    desc: 'We build on and fine-tune state-of-the-art large language and vision models, adapting frontier AI to domain-specific enterprise challenges.',
  },
  {
    icon: '⚡',
    title: 'Real-Time Inference',
    desc: 'Our proprietary inference stack delivers sub-50ms latency at scale — because production AI must be fast, not just smart.',
  },
  {
    icon: '🔒',
    title: 'Private AI Architecture',
    desc: 'Enterprise data never leaves your environment. Nexora runs fully on-premise or in isolated VPCs with zero data egress.',
  },
  {
    icon: '🔄',
    title: 'Continuous Learning',
    desc: 'Models improve automatically through production feedback loops, so your AI gets smarter every day without manual retraining.',
  },
  {
    icon: '🌐',
    title: 'Multi-Modal Intelligence',
    desc: 'Text, image, tabular, time-series — Nexora models understand all data modalities and fuse them into unified decisions.',
  },
  {
    icon: '📡',
    title: 'Observable MLOps',
    desc: 'Full-stack monitoring, drift detection, and automatic rollbacks ensure your AI is always performing as intended.',
  },
]

const team = [
  {
    name: 'Dr. Amara Osei',
    title: 'Chief AI Officer & Co-Founder',
    expertise: 'Deep Learning · Transformers · Research',
    bio: 'Former AI Research Lead at DeepMind. PhD in Machine Learning from MIT. Published 40+ papers in top-tier ML conferences. Architect of Nexora\'s core model stack.',
    initials: 'AO',
    color: '#0066ff',
  },
  {
    name: 'Marcus Chen',
    title: 'CTO & Co-Founder',
    expertise: 'Distributed Systems · MLOps · Infrastructure',
    bio: 'Ex-Staff Engineer at Google Brain. Built ML infrastructure serving 3B+ daily predictions. Leads Nexora\'s platform engineering and real-time inference systems.',
    initials: 'MC',
    color: '#00d4ff',
  },
  {
    name: 'Dr. Priya Nair',
    title: 'Head of Applied AI Research',
    expertise: 'NLP · Computer Vision · Multimodal AI',
    bio: 'Former Principal Scientist at Microsoft Research. Specializes in multimodal AI and domain adaptation. Leads Nexora\'s research lab and client model development.',
    initials: 'PN',
    color: '#0066ff',
  },
]

const milestones = [
  { year: '2017', event: 'Founded in San Francisco by Dr. Osei and Marcus Chen with a $4M seed round.' },
  { year: '2019', event: 'Launched first commercial AI platform. Onboarded 20 enterprise clients within 6 months.' },
  { year: '2021', event: 'Raised $40M Series B. Expanded to Europe and Asia. Surpassed 100 enterprise deployments.' },
  { year: '2023', event: 'Launched Nexora Cloud — a fully managed AI-as-a-Service platform used in 40+ countries.' },
  { year: '2025', event: 'Crossed 500+ enterprise clients, $50M in client cost savings, and 120 global AI engineers.' },
]

export default function About() {
  return (
    <div>
      {/* ===== PAGE HEADER ===== */}
      <section
        style={{
          padding: '140px 0 100px',
          background: 'linear-gradient(180deg, #050a14 0%, #0a1628 50%, #050a14 100%)',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        <div className="grid-bg" />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '400px',
            background: 'radial-gradient(ellipse at top, rgba(0,102,255,0.12) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <span
            style={{
              display: 'inline-block',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#0066ff',
              background: 'rgba(0,102,255,0.1)',
              border: '1px solid rgba(0,102,255,0.3)',
              borderRadius: '100px',
              padding: '6px 18px',
              marginBottom: '24px',
            }}
          >
            Our Story
          </span>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              marginBottom: '24px',
            }}
          >
            Built by Researchers.<br />
            <span
              style={{
                background: 'linear-gradient(135deg, #0066ff, #00d4ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Deployed for Results.
            </span>
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: '1.15rem',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.75,
            }}
          >
            We started Nexora because we believed AI was too powerful to remain locked inside research labs.
            We bridge the gap between frontier science and enterprise outcomes.
          </p>
        </div>
      </section>

      {/* ===== MISSION SECTION ===== */}
      <section style={{ padding: '100px 0', background: '#050a14' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '80px',
              alignItems: 'center',
            }}
            className="about-grid-2"
          >
            <div>
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
                Our Mission
              </span>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                  fontWeight: 700,
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                  marginBottom: '24px',
                }}
              >
                Democratize AI for Every Enterprise
              </h2>
              <p
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  marginBottom: '20px',
                }}
              >
                We believe that AI shouldn't be a privilege reserved for tech giants with billion-dollar research budgets.
                Our mission is to make production-grade, frontier artificial intelligence accessible to every organization
                willing to lead rather than follow.
              </p>
              <p
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  marginBottom: '32px',
                }}
              >
                We measure our success not in model benchmarks, but in the operational transformation of the businesses
                we serve — lives improved through smarter healthcare, capital protected through better risk models,
                and time reclaimed through intelligent automation.
              </p>
              <Link
                to="/services"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  padding: '14px 28px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #0066ff, #0044cc)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 0 20px rgba(0,102,255,0.3)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 35px rgba(0,102,255,0.5)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0,102,255,0.3)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                See Our Services
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* Visual panel */}
            <div
              style={{
                background: 'rgba(0,102,255,0.05)',
                border: '1px solid rgba(0,102,255,0.2)',
                borderRadius: '20px',
                padding: '48px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  width: '200px',
                  height: '200px',
                  background: 'radial-gradient(ellipse, rgba(0,102,255,0.2), transparent 70%)',
                  borderRadius: '50%',
                  pointerEvents: 'none',
                }}
              />
              {[
                { label: 'Mission', value: 'Democratize AI' },
                { label: 'Founded', value: '2017, San Francisco' },
                { label: 'Team Size', value: '120+ AI Engineers' },
                { label: 'Presence', value: '40+ Countries' },
                { label: 'Client Success Rate', value: '97%' },
                { label: 'Core Tech', value: 'Proprietary Foundation Models' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    padding: '16px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    gap: '16px',
                  }}
                >
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>{label}</span>
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      textAlign: 'right',
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ORIGIN STORY / TIMELINE ===== */}
      <section style={{ padding: '100px 0', background: '#0a1628' }}>
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
              The Journey
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
              From Lab to Global Platform
            </h2>
          </div>

          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
            {/* Vertical line */}
            <div
              style={{
                position: 'absolute',
                left: '90px',
                top: 0,
                bottom: 0,
                width: '1px',
                background: 'linear-gradient(to bottom, transparent, rgba(0,102,255,0.4), transparent)',
              }}
            />

            {milestones.map(({ year, event }, i) => (
              <div
                key={year}
                style={{
                  display: 'flex',
                  gap: '32px',
                  marginBottom: '40px',
                  alignItems: 'flex-start',
                }}
              >
                {/* Year */}
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: '#0066ff',
                    minWidth: '60px',
                    textAlign: 'right',
                    paddingTop: '4px',
                  }}
                >
                  {year}
                </div>

                {/* Dot */}
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: i === milestones.length - 1 ? '#00d4ff' : '#0066ff',
                    border: '2px solid rgba(5,10,20,1)',
                    outline: '2px solid',
                    outlineColor: i === milestones.length - 1 ? 'rgba(0,212,255,0.4)' : 'rgba(0,102,255,0.3)',
                    flexShrink: 0,
                    marginTop: '5px',
                    boxShadow: i === milestones.length - 1 ? '0 0 12px rgba(0,212,255,0.5)' : '0 0 8px rgba(0,102,255,0.4)',
                  }}
                />

                {/* Event */}
                <div
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '10px',
                    padding: '16px 20px',
                    flex: 1,
                  }}
                >
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    {event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGY PILLARS ===== */}
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
              What We're Built On
            </span>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                marginBottom: '16px',
              }}
            >
              Core Technology Pillars
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '520px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.7 }}>
              Our platform sits on six foundational capabilities that make enterprise AI reliable, fast, private, and continuously improving.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            {pillars.map((p, i) => (
              <div
                key={p.title}
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '14px',
                  padding: '32px',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0,102,255,0.35)'
                  e.currentTarget.style.background = 'rgba(0,102,255,0.04)'
                  e.currentTarget.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.025)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(0,102,255,0.12)',
                    border: '1px solid rgba(0,102,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem',
                    flexShrink: 0,
                  }}
                >
                  {p.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '8px',
                    }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', lineHeight: 1.7 }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM SECTION ===== */}
      <section style={{ padding: '100px 0', background: '#0a1628' }}>
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
              The Minds Behind Nexora
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
              Leadership Team
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '28px',
            }}
          >
            {team.map((member) => (
              <div
                key={member.name}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '20px',
                  padding: '40px 32px',
                  transition: 'all 0.3s ease',
                  textAlign: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `rgba(0,102,255,0.35)`
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 24px 48px rgba(0,0,0,0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${member.color}, ${member.color === '#0066ff' ? '#00d4ff' : '#0066ff'})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    boxShadow: `0 0 24px ${member.color}55`,
                  }}
                >
                  {member.initials}
                </div>

                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '6px',
                  }}
                >
                  {member.name}
                </h3>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: member.color,
                    marginBottom: '12px',
                  }}
                >
                  {member.title}
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  {member.expertise.split(' · ').map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '0.65rem',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        color: 'rgba(255,255,255,0.5)',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '100px',
                        padding: '3px 10px',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', lineHeight: 1.7 }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '100px 0',
          background: '#050a14',
          textAlign: 'center',
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
            width: '600px',
            height: '300px',
            background: 'radial-gradient(ellipse, rgba(0,102,255,0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
            }}
          >
            Want to Join Our Mission?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '36px', fontSize: '1.05rem' }}>
            We're always looking for exceptional engineers, researchers, and strategists.
          </p>
          <Link
            to="/contact"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '1rem',
              fontWeight: 600,
              padding: '15px 32px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #0066ff, #0044cc)',
              color: '#ffffff',
              textDecoration: 'none',
              boxShadow: '0 0 24px rgba(0,102,255,0.35)',
              display: 'inline-block',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 40px rgba(0,102,255,0.55)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 24px rgba(0,102,255,0.35)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-grid-2 {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </div>
  )
}
