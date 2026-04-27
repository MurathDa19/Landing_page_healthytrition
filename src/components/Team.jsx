import { useState } from 'react'

const members = [
  {
    initials: 'AR',
    name: 'Alex Rivera',
    role: 'LEAD ARCHITECT',
    description: 'Computational neural architectures that synthesize bespoke metabolic roadmaps and high-level data integrity.',
    email: 'alex@healthytrition.io',
    linkedin: 'linkedin.com/in/alexrivera',
    location: 'Bogotá, Colombia',
  },
  {
    initials: 'SC',
    name: 'Sofia Chen',
    role: 'LEAD DEVELOPER',
    description: 'Expert in Django REST frameworks and cloud infrastructure for real-time biometric synchronization.',
    email: 'sofia@healthytrition.io',
    linkedin: 'linkedin.com/in/sofiac',
    location: 'Medellín, Colombia',
  },
  {
    initials: 'MG',
    name: 'Mateo Gomez',
    role: 'LEAD DESIGNER',
    description: 'Dedicated frontend architect focused on creating intuitive interfaces for metabolic synthesis optimization.',
    email: 'mateo@healthytrition.io',
    linkedin: 'linkedin.com/in/mateogomez',
    location: 'Cali, Colombia',
  },
  {
    initials: 'ES',
    name: 'Elena Smith',
    role: 'AI SPECIALIST',
    description: 'Specialized in AI recipe filtering and semantic search for ingredient bio-availability optimization.',
    email: 'elena@healthytrition.io',
    linkedin: 'linkedin.com/in/elenasm',
    location: 'Barranquilla, Colombia',
  },
  {
    initials: 'JT',
    name: 'Julian Torres',
    role: 'SYSTEMS ARCHITECT',
    description: 'Systems architect prioritizing full-stack integrity and nonlinear technical documentation integration.',
    email: 'julian@healthytrition.io',
    linkedin: 'linkedin.com/in/juliantorres',
    location: 'Bogotá, Colombia',
  },
]

function MemberCard({ m }) {
  return (
    <div style={{
      background: '#fff', border: '1.5px solid #e8e8e8',
      borderRadius: 12, padding: '20px', display: 'flex',
      flexDirection: 'column', gap: 10,
    }}>
      {/* Avatar row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 38, height: 38, borderRadius: '50%',
          background: '#e8f5ee', color: '#155a37',
          fontSize: 13, fontWeight: 700,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          {m.initials}
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#111', marginBottom: 3 }}>{m.name}</div>
          <span style={{
            fontSize: 9, fontWeight: 700, letterSpacing: '.5px',
            padding: '2px 8px', borderRadius: 20,
            background: '#e8f5ee', color: '#155a37',
          }}>
            {m.role}
          </span>
        </div>
      </div>

      {/* Description */}
      <p style={{ fontSize: 12, color: '#666', lineHeight: 1.6, flex: 1 }}>{m.description}</p>

      {/* Links */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <a href={`mailto:${m.email}`} style={{ fontSize: 11, color: '#888', textDecoration: 'none', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>✉ {m.email}</a>
        <a href="#" style={{ fontSize: 11, color: '#888', textDecoration: 'none' }}>🔗 {m.linkedin}</a>
        <span style={{ fontSize: 11, color: '#888' }}>📍 {m.location}</span>
      </div>
    </div>
  )
}

const inputStyle = {
  width: '100%', background: '#f5f7f5',
  border: '1.5px solid transparent',
  borderRadius: 8, padding: '9px 12px',
  fontSize: 13, fontFamily: 'inherit',
  color: '#111', outline: 'none', boxSizing: 'border-box',
}

export default function Team() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => { setSent(false); setForm({ name: '', email: '', message: '' }) }, 3000)
  }

  return (
    <section id="about" style={{ padding: '100px 0', background: '#f5f7f5' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <div style={{ marginBottom: 44 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-.5px', marginBottom: 8 }}>
            The Development Team
          </h2>
          <p style={{ fontSize: 14, color: '#666', maxWidth: 460, lineHeight: 1.65 }}>
            A collective of SENA Apprentices bridging nutrition science and computational intelligence.
          </p>
        </div>

        {/* Grid: 3 cols */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {members.map((m) => <MemberCard key={m.name} m={m} />)}

          {/* Contact Form */}
          <div style={{
            background: '#fff', border: '1.5px solid #e8e8e8',
            borderRadius: 12, padding: '22px',
          }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#111', marginBottom: 20 }}>
              Send a Message
            </h3>

            {sent ? (
              <div style={{ textAlign: 'center', padding: '30px 0', color: '#1a7a4a', fontWeight: 600, fontSize: 14 }}>
                ✅ Message sent successfully!
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.6px', color: '#aaa', marginBottom: 5, textTransform: 'uppercase' }}>Your name</div>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" style={inputStyle} />
                </div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.6px', color: '#aaa', marginBottom: 5, textTransform: 'uppercase' }}>Email</div>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" style={inputStyle} />
                </div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.6px', color: '#aaa', marginBottom: 5, textTransform: 'uppercase' }}>Message</div>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="How can we help?" rows={4} style={{ ...inputStyle, resize: 'none', minHeight: 90 }} />
                </div>
                <button
                  onClick={handleSubmit}
                  style={{
                    background: '#1a7a4a', color: '#fff',
                    fontSize: 11, fontWeight: 700, letterSpacing: '.6px',
                    padding: 13, borderRadius: 8, border: 'none',
                    cursor: 'pointer', width: '100%',
                    fontFamily: 'inherit',
                  }}
                >
                  SEND INQUIRY
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
