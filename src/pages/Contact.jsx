import { useState } from 'react'
import { Link } from 'react-router-dom'

const contactInfo = [
  {
    icon: '📧',
    label: 'Email Us',
    value: 'hello@nexora.ai',
    sub: 'We reply within 2 business hours',
    color: '#0066ff',
  },
  {
    icon: '📞',
    label: 'Call Us',
    value: '+1 (415) 800-9200',
    sub: 'Mon–Fri, 9am–6pm PT',
    color: '#00d4ff',
  },
  {
    icon: '📍',
    label: 'Headquarters',
    value: '340 Market St, Suite 900',
    sub: 'San Francisco, CA 94105',
    color: '#0066ff',
  },
]

const offices = [
  { city: 'San Francisco', country: 'USA', flag: '🇺🇸', type: 'HQ' },
  { city: 'London', country: 'UK', flag: '🇬🇧', type: 'European HQ' },
  { city: 'Singapore', country: 'SGP', flag: '🇸🇬', type: 'APAC HQ' },
]

const inquiryTypes = [
  'AI Strategy Consulting',
  'Custom AI Development',
  'Data Engineering',
  'MLOps & Deployment',
  'AI Integration',
  'Training & Enablement',
  'Partnership Inquiry',
  'Press & Media',
  'Other',
]

const companySizes = [
  'Just me / Freelance',
  '2–10 employees',
  '11–50 employees',
  '51–200 employees',
  '201–1,000 employees',
  '1,000+ employees',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    companySize: '',
    inquiryType: '',
    message: '',
    newsletter: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e = {}
    if (!formData.firstName.trim()) e.firstName = 'First name is required'
    if (!formData.lastName.trim()) e.lastName = 'Last name is required'
    if (!formData.email.trim()) {
      e.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      e.email = 'Enter a valid email address'
    }
    if (!formData.inquiryType) e.inquiryType = 'Please select an inquiry type'
    if (!formData.message.trim()) e.message = 'Message is required'
    else if (formData.message.trim().length < 20) e.message = 'Message must be at least 20 characters'
    return e
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const v = validate()
    if (Object.keys(v).length > 0) {
      setErrors(v)
      return
    }
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  const inputStyle = (hasError) => ({
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${hasError ? '#ff4d6d' : 'rgba(255,255,255,0.1)'}`,
    borderRadius: '10px',
    padding: '14px 16px',
    color: '#ffffff',
    fontSize: '0.95rem',
    fontFamily: "'Inter', sans-serif",
    outline: 'none',
    transition: 'border-color 0.2s ease, background 0.2s ease',
    boxSizing: 'border-box',
  })

  const labelStyle = {
    display: 'block',
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: '0.85rem',
    fontWeight: 600,
    color: 'rgba(255,255,255,0.7)',
    marginBottom: '8px',
  }

  const errorStyle = {
    color: '#ff4d6d',
    fontSize: '0.78rem',
    marginTop: '5px',
    fontFamily: "'Inter', sans-serif",
  }

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
            Let's Talk
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
            Start Your AI Journey<br />
            <span
              style={{
                background: 'linear-gradient(135deg, #0066ff, #00d4ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              With a Conversation
            </span>
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: '1.15rem',
              maxWidth: '560px',
              margin: '0 auto',
              lineHeight: 1.75,
            }}
          >
            Every transformation starts with a question. Tell us what you're building, what's broken, or what you want to automate — and we'll tell you how we can help.
          </p>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section style={{ padding: '80px 0 120px', background: '#050a14' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.6fr',
              gap: '64px',
              alignItems: 'flex-start',
            }}
            className="contact-main-grid"
          >
            {/* ===== LEFT COLUMN ===== */}
            <div>
              {/* Contact info cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
                {contactInfo.map(({ icon, label, value, sub, color }) => (
                  <div
                    key={label}
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: '14px',
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '16px',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(0,102,255,0.3)'
                      e.currentTarget.style.background = 'rgba(0,102,255,0.04)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                      e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                    }}
                  >
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '10px',
                        background: `${color}18`,
                        border: `1px solid ${color}30`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        flexShrink: 0,
                      }}
                    >
                      {icon}
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: 'rgba(255,255,255,0.35)',
                          marginBottom: '4px',
                        }}
                      >
                        {label}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: '0.95rem',
                          fontWeight: 600,
                          color: '#ffffff',
                          marginBottom: '2px',
                        }}
                      >
                        {value}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>{sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Offices */}
              <div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.35)',
                    marginBottom: '16px',
                  }}
                >
                  Global Offices
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {offices.map(({ city, country, flag, type }) => (
                    <div
                      key={city}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 16px',
                        background: 'rgba(255,255,255,0.025)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: '10px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '1.1rem' }}>{flag}</span>
                        <div>
                          <div
                            style={{
                              fontFamily: "'Space Grotesk', sans-serif",
                              fontSize: '0.9rem',
                              fontWeight: 600,
                              color: '#ffffff',
                            }}
                          >
                            {city}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)' }}>{country}</div>
                        </div>
                      </div>
                      <span
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: '0.65rem',
                          fontWeight: 600,
                          color: '#0066ff',
                          background: 'rgba(0,102,255,0.1)',
                          border: '1px solid rgba(0,102,255,0.25)',
                          borderRadius: '100px',
                          padding: '3px 10px',
                        }}
                      >
                        {type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ===== RIGHT COLUMN — FORM ===== */}
            <div
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                padding: '48px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top glow */}
              <div
                style={{
                  position: 'absolute',
                  top: '-60px',
                  right: '-60px',
                  width: '250px',
                  height: '250px',
                  background: 'radial-gradient(ellipse, rgba(0,102,255,0.12) 0%, transparent 65%)',
                  pointerEvents: 'none',
                }}
              />

              {submitted ? (
                /* Success state */
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #0066ff, #00d4ff)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 24px',
                      fontSize: '2rem',
                      boxShadow: '0 0 40px rgba(0,102,255,0.4)',
                    }}
                  >
                    ✓
                  </div>
                  <h2
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '1.8rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '12px',
                    }}
                  >
                    Message Received!
                  </h2>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '32px' }}>
                    Thank you for reaching out to Nexora. Our team will review your inquiry and get back to you within 2 business hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ firstName: '', lastName: '', email: '', company: '', companySize: '', inquiryType: '', message: '', newsletter: false }) }}
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      padding: '12px 24px',
                      borderRadius: '8px',
                      background: 'rgba(0,102,255,0.15)',
                      border: '1px solid rgba(0,102,255,0.3)',
                      color: '#0066ff',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => { e.target.style.background = 'rgba(0,102,255,0.25)' }}
                    onMouseLeave={(e) => { e.target.style.background = 'rgba(0,102,255,0.15)' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} noValidate>
                  <h2
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '1.4rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '8px',
                    }}
                  >
                    Get in Touch
                  </h2>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem', marginBottom: '32px' }}>
                    Fill out the form below and we'll respond within 2 business hours.
                  </p>

                  {/* Name row */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '16px',
                      marginBottom: '20px',
                    }}
                    className="name-grid"
                  >
                    <div>
                      <label htmlFor="firstName" style={labelStyle}>First Name *</label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="Jane"
                        value={formData.firstName}
                        onChange={handleChange}
                        style={inputStyle(!!errors.firstName)}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'rgba(0,102,255,0.5)'
                          e.target.style.background = 'rgba(0,102,255,0.04)'
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = errors.firstName ? '#ff4d6d' : 'rgba(255,255,255,0.1)'
                          e.target.style.background = 'rgba(255,255,255,0.04)'
                        }}
                      />
                      {errors.firstName && <div style={errorStyle}>{errors.firstName}</div>}
                    </div>
                    <div>
                      <label htmlFor="lastName" style={labelStyle}>Last Name *</label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Smith"
                        value={formData.lastName}
                        onChange={handleChange}
                        style={inputStyle(!!errors.lastName)}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'rgba(0,102,255,0.5)'
                          e.target.style.background = 'rgba(0,102,255,0.04)'
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = errors.lastName ? '#ff4d6d' : 'rgba(255,255,255,0.1)'
                          e.target.style.background = 'rgba(255,255,255,0.04)'
                        }}
                      />
                      {errors.lastName && <div style={errorStyle}>{errors.lastName}</div>}
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="email" style={labelStyle}>Work Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      style={inputStyle(!!errors.email)}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(0,102,255,0.5)'
                        e.target.style.background = 'rgba(0,102,255,0.04)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = errors.email ? '#ff4d6d' : 'rgba(255,255,255,0.1)'
                        e.target.style.background = 'rgba(255,255,255,0.04)'
                      }}
                    />
                    {errors.email && <div style={errorStyle}>{errors.email}</div>}
                  </div>

                  {/* Company + size */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '16px',
                      marginBottom: '20px',
                    }}
                    className="company-grid"
                  >
                    <div>
                      <label htmlFor="company" style={labelStyle}>Company</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={handleChange}
                        style={inputStyle(false)}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'rgba(0,102,255,0.5)'
                          e.target.style.background = 'rgba(0,102,255,0.04)'
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(255,255,255,0.1)'
                          e.target.style.background = 'rgba(255,255,255,0.04)'
                        }}
                      />
                    </div>
                    <div>
                      <label htmlFor="companySize" style={labelStyle}>Company Size</label>
                      <select
                        id="companySize"
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleChange}
                        style={{
                          ...inputStyle(false),
                          cursor: 'pointer',
                          appearance: 'none',
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='rgba(255,255,255,0.4)' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 14px center',
                          paddingRight: '36px',
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'rgba(0,102,255,0.5)'
                          e.target.style.background = 'rgba(0,102,255,0.04)'
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(255,255,255,0.1)'
                          e.target.style.background = 'rgba(255,255,255,0.04)'
                        }}
                      >
                        <option value="" style={{ background: '#111827' }}>Select size...</option>
                        {companySizes.map(s => (
                          <option key={s} value={s} style={{ background: '#111827' }}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Inquiry type */}
                  <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="inquiryType" style={labelStyle}>How Can We Help? *</label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      style={{
                        ...inputStyle(!!errors.inquiryType),
                        cursor: 'pointer',
                        appearance: 'none',
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='rgba(255,255,255,0.4)' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 14px center',
                        paddingRight: '36px',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(0,102,255,0.5)'
                        e.target.style.background = 'rgba(0,102,255,0.04)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = errors.inquiryType ? '#ff4d6d' : 'rgba(255,255,255,0.1)'
                        e.target.style.background = 'rgba(255,255,255,0.04)'
                      }}
                    >
                      <option value="" style={{ background: '#111827' }}>Select a service...</option>
                      {inquiryTypes.map(t => (
                        <option key={t} value={t} style={{ background: '#111827' }}>{t}</option>
                      ))}
                    </select>
                    {errors.inquiryType && <div style={errorStyle}>{errors.inquiryType}</div>}
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: '24px' }}>
                    <label htmlFor="message" style={labelStyle}>Tell Us About Your Project *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Describe your challenge, what you're trying to achieve, or what you'd like to automate. The more context you give, the better we can help."
                      value={formData.message}
                      onChange={handleChange}
                      style={{
                        ...inputStyle(!!errors.message),
                        resize: 'vertical',
                        minHeight: '120px',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(0,102,255,0.5)'
                        e.target.style.background = 'rgba(0,102,255,0.04)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = errors.message ? '#ff4d6d' : 'rgba(255,255,255,0.1)'
                        e.target.style.background = 'rgba(255,255,255,0.04)'
                      }}
                    />
                    {errors.message && <div style={errorStyle}>{errors.message}</div>}
                  </div>

                  {/* Newsletter checkbox */}
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      marginBottom: '28px',
                      cursor: 'pointer',
                    }}
                  >
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      style={{
                        width: '16px',
                        height: '16px',
                        marginTop: '2px',
                        accentColor: '#0066ff',
                        flexShrink: 0,
                        cursor: 'pointer',
                      }}
                    />
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                      Subscribe to the Nexora AI Insider — monthly research digests, case studies, and no spam.
                    </span>
                  </label>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      width: '100%',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '1rem',
                      fontWeight: 600,
                      padding: '16px',
                      borderRadius: '10px',
                      background: loading
                        ? 'rgba(0,102,255,0.5)'
                        : 'linear-gradient(135deg, #0066ff, #0044cc)',
                      color: '#ffffff',
                      border: 'none',
                      cursor: loading ? 'not-allowed' : 'pointer',
                      boxShadow: loading ? 'none' : '0 0 24px rgba(0,102,255,0.4)',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                    }}
                    onMouseEnter={(e) => {
                      if (!loading) {
                        e.currentTarget.style.boxShadow = '0 0 40px rgba(0,102,255,0.6)'
                        e.currentTarget.style.transform = 'translateY(-1px)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!loading) {
                        e.currentTarget.style.boxShadow = '0 0 24px rgba(0,102,255,0.4)'
                        e.currentTarget.style.transform = 'translateY(0)'
                      }
                    }}
                  >
                    {loading ? (
                      <>
                        <span
                          style={{
                            width: '18px',
                            height: '18px',
                            border: '2px solid rgba(255,255,255,0.3)',
                            borderTopColor: '#ffffff',
                            borderRadius: '50%',
                            display: 'inline-block',
                            animation: 'spin 0.7s linear infinite',
                          }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </>
                    )}
                  </button>

                  <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', textAlign: 'center', marginTop: '16px' }}>
                    By submitting this form, you agree to our{' '}
                    <a href="#" style={{ color: 'rgba(0,102,255,0.8)', textDecoration: 'none' }}>Privacy Policy</a>
                    . We never share your data.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 900px) {
          .contact-main-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 520px) {
          .name-grid, .company-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
