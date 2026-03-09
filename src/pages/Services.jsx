import { Link } from 'react-router-dom'

const services = [
  {
    id: 'ai-strategy',
    icon: '🎯',
    title: 'AI Strategy Consulting',
    tagline: 'Build your AI roadmap with confidence',
    color: '#0066ff',
    desc: 'We work alongside your leadership team to identify high-value AI opportunities, assess feasibility, prioritize initiatives, and create a phased transformation roadmap aligned with your business objectives.',
    features: [
      'AI Readiness Assessment across data, talent, and infrastructure',
      'Executive AI literacy workshops and boardroom briefings',
      'Competitive landscape analysis and AI gap identification',
      'Build vs. buy vs. partner decision frameworks',
      'ROI modeling and business case development',
      'Ethics and governance policy design',
      'AI Center of Excellence setup and operating model',
    ],
    duration: 'Engagement: 4–12 weeks',
    deliverable: 'AI Roadmap + Business Case',
  },
  {
    id: 'custom-ai',
    icon: '🔬',
    title: 'Custom AI Development',
    tagline: 'Purpose-built models for your exact use case',
    color: '#00d4ff',
    desc: "Off-the-shelf AI does not fit specialized industries. We design, train, and deploy bespoke ML models on your proprietary data, delivering accuracy and performance no generic solution can match.",
    features: [
      'Problem framing and ML solution architecture design',
      'Data collection, labeling, and curation pipelines',
      'Custom model training with proprietary architectures',
      'Domain adaptation and transfer learning',
      'Hyperparameter optimization and model selection',
      'Explainability and interpretability tooling',
      'Production hardening, testing, and safety evaluations',
    ],
    duration: 'Engagement: 8–24 weeks',
    deliverable: 'Production ML Model + API',
  },
  {
    id: 'data-engineering',
    icon: '🗄️',
    title: 'Data Engineering',
    tagline: 'Turn raw data chaos into AI-ready pipelines',
    color: '#0066ff',
    desc: 'The best AI is only as good as its data. We build the modern data infrastructure your organization needs — from ingestion to transformation to governance — so your models are always training on clean, current, reliable data.',
    features: [
      'Data audit and quality assessment',
      'Lakehouse and data warehouse architecture',
      'Real-time streaming pipelines (Kafka, Flink, Spark)',
      'ETL/ELT pipeline development and orchestration',
      'Feature store design and implementation',
      'Data lineage, cataloguing, and governance',
      'GDPR/CCPA compliance and data anonymization',
    ],
    duration: 'Engagement: 6–20 weeks',
    deliverable: 'AI-Ready Data Platform',
  },
  {
    id: 'mlops',
    icon: '⚙️',
    title: 'MLOps & Deployment',
    tagline: 'From notebook to production in weeks, not years',
    color: '#00d4ff',
    desc: "Most AI projects fail at the deployment stage. Nexora's MLOps practice ensures your models run reliably in production with full observability, automated retraining, and zero-downtime rollouts.",
    features: [
      'CI/CD pipelines for model training and deployment',
      'Kubernetes-native model serving and auto-scaling',
      'A/B testing and canary deployment infrastructure',
      'Model monitoring: drift detection and performance alerts',
      'Automated retraining triggers and pipeline orchestration',
      'Multi-cloud and hybrid cloud deployment support',
      'On-premise deployment with air-gap capability',
    ],
    duration: 'Engagement: 4–16 weeks',
    deliverable: 'Production MLOps Platform',
  },
  {
    id: 'ai-integration',
    icon: '🔗',
    title: 'AI Integration',
    tagline: 'Embed intelligence into your existing systems',
    color: '#0066ff',
    desc: "You don't need to rebuild your stack to leverage AI. We specialize in integrating AI capabilities via APIs, microservices, and embedded models directly into your existing ERP, CRM, and operational systems.",
    features: [
      'Legacy system AI augmentation and integration design',
      'REST and GraphQL AI API development',
      'Salesforce, SAP, Oracle, and Microsoft 365 integrations',
      'AI-powered workflow automation with RPA connectors',
      'Secure API gateway and rate limiting architecture',
      'Real-time event-driven AI trigger systems',
      'Integration testing, sandbox environments, and rollout support',
    ],
    duration: 'Engagement: 4–12 weeks',
    deliverable: 'Integrated AI Endpoints + Documentation',
  },
  {
    id: 'training',
    icon: '🎓',
    title: 'Training & Enablement',
    tagline: 'Build the internal AI capability that lasts',
    color: '#00d4ff',
    desc: 'Sustainable AI transformation requires internal capability. We run structured programs to upskill your engineers, analysts, and leaders so they can build, maintain, and evolve AI systems independently.',
    features: [
      'Executive AI literacy and strategy workshops (1–2 days)',
      'Data science bootcamps for engineering teams (4–8 weeks)',
      'Hands-on ML engineering curriculum with real projects',
      'Prompt engineering and LLM application development',
      'MLOps and model deployment training',
      'AI product management certification program',
      'Ongoing coaching, office hours, and community of practice',
    ],
    duration: 'Engagement: Ongoing',
    deliverable: 'Trained Teams + Certification',
  },
]

const process = [
  { step: '01', title: 'Discovery', desc: 'We audit your data, systems, and goals to identify the highest-impact AI opportunities in your specific context.' },
  { step: '02', title: 'Design', desc: 'Our architects design the solution: data flows, model architecture, deployment topology, and integration points.' },
  { step: '03', title: 'Build', desc: 'We develop, train, test, and validate your AI solution in close collaboration with your internal teams.' },
  { step: '04', title: 'Deploy', desc: 'We release to production using CI/CD best practices with staged rollouts, monitoring, and zero-downtime guarantees.' },
  { step: '05', title: 'Optimize', desc: 'We continuously monitor, retrain, and improve your models using production feedback — AI that gets better over time.' },
]

export default function Services() {
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
            What We Do
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
            AI Services That Move<br />
            <span
              style={{
                background: 'linear-gradient(135deg, #0066ff, #00d4ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Businesses Forward
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
            End-to-end AI services from strategy through deployment. We don't just consult — we build, ship, and optimize production AI alongside your team.
          </p>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section style={{ padding: '100px 0', background: '#050a14' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {services.map((svc, i) => (
              <div
                key={svc.id}
                id={svc.id}
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '20px',
                  padding: '48px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0,102,255,0.3)'
                  e.currentTarget.style.background = 'rgba(0,102,255,0.03)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.025)'
                }}
              >
                {/* Left accent border */}
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: '10%',
                    bottom: '10%',
                    width: '3px',
                    background: `linear-gradient(to bottom, transparent, ${svc.color}, transparent)`,
                    borderRadius: '3px',
                  }}
                />

                {/* Background glow */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-30px',
                    right: '-30px',
                    width: '250px',
                    height: '250px',
                    background: `radial-gradient(ellipse, ${svc.color}15 0%, transparent 65%)`,
                    pointerEvents: 'none',
                  }}
                />

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.5fr',
                    gap: '48px',
                    alignItems: 'flex-start',
                  }}
                  className="service-inner-grid"
                >
                  {/* Left: header info */}
                  <div>
                    <div
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '14px',
                        background: `${svc.color}20`,
                        border: `1px solid ${svc.color}40`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.8rem',
                        marginBottom: '20px',
                      }}
                    >
                      {svc.icon}
                    </div>

                    <h2
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        marginBottom: '8px',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {svc.title}
                    </h2>

                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '0.9rem',
                        color: svc.color,
                        fontWeight: 500,
                        marginBottom: '16px',
                        fontStyle: 'italic',
                      }}
                    >
                      {svc.tagline}
                    </p>

                    <p
                      style={{
                        color: 'rgba(255,255,255,0.55)',
                        fontSize: '0.9rem',
                        lineHeight: 1.75,
                        marginBottom: '24px',
                      }}
                    >
                      {svc.desc}
                    </p>

                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                      }}
                    >
                      <div
                        style={{
                          background: `${svc.color}10`,
                          border: `1px solid ${svc.color}25`,
                          borderRadius: '8px',
                          padding: '10px 14px',
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: '0.8rem',
                          color: 'rgba(255,255,255,0.6)',
                        }}
                      >
                        <span style={{ color: svc.color, fontWeight: 600 }}>Timeline: </span>{svc.duration.replace('Engagement: ', '')}
                      </div>
                      <div
                        style={{
                          background: `${svc.color}10`,
                          border: `1px solid ${svc.color}25`,
                          borderRadius: '8px',
                          padding: '10px 14px',
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: '0.8rem',
                          color: 'rgba(255,255,255,0.6)',
                        }}
                      >
                        <span style={{ color: svc.color, fontWeight: 600 }}>Deliverable: </span>{svc.deliverable}
                      </div>
                    </div>
                  </div>

                  {/* Right: feature list */}
                  <div>
                    <h4
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.35)',
                        marginBottom: '20px',
                      }}
                    >
                      What's Included
                    </h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {svc.features.map((feature) => (
                        <li
                          key={feature}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '12px',
                            color: 'rgba(255,255,255,0.65)',
                            fontSize: '0.9rem',
                            lineHeight: 1.5,
                          }}
                        >
                          <span
                            style={{
                              width: '20px',
                              height: '20px',
                              borderRadius: '50%',
                              background: `${svc.color}20`,
                              border: `1px solid ${svc.color}50`,
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                              marginTop: '2px',
                            }}
                          >
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M2 5l2.5 2.5L8 3" stroke={svc.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS SECTION ===== */}
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
              How We Work
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
              Our Delivery Process
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2px',
              background: 'rgba(0,102,255,0.08)',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(0,102,255,0.15)',
            }}
          >
            {process.map(({ step, title, desc }, i) => (
              <div
                key={step}
                style={{
                  background: '#0a1628',
                  padding: '40px 28px',
                  transition: 'background 0.3s ease',
                  position: 'relative',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(0,102,255,0.07)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#0a1628' }}
              >
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, rgba(0,102,255,0.3), rgba(0,102,255,0.1))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1,
                    marginBottom: '16px',
                    display: 'block',
                  }}
                >
                  {step}
                </div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '10px',
                  }}
                >
                  {title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', lineHeight: 1.65 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
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
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
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
            Ready to Build Something Transformative?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '36px' }}>
            Every engagement begins with a free discovery call. Tell us what you're trying to solve — we'll tell you exactly how we can help.
          </p>
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
              boxShadow: '0 0 28px rgba(0,102,255,0.4)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 44px rgba(0,102,255,0.6)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 28px rgba(0,102,255,0.4)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Schedule a Free Call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .service-inner-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </div>
  )
}
