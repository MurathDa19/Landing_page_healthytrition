import { useState } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

const members = [
  {
    initials: 'YS',
    name: 'Yael Sanchez',
    role: 'Diseñador Frontend',
    description: 'Diseñador de interfaces con un enfoque en la creación de esta pagina web.',
    email: 'yael@healthytrition.io',
    linkedin: 'linkedin.com/in/yaelsanche',
    location: 'Mosquera, Colombia',
  },
  {
    initials: 'DM',
    name: 'David Moncada.',
    role: 'DESARROLLADOR LIDER',
    description: 'Experto en Django, desarrollador del backend de nuestra aplicacion movil.',
    email: 'david@healthytrition.io',
    linkedin: 'linkedin.com/in/davidmoncada',
    location: 'Mosquera, Colombia',
  },
  {
    initials: 'FM',
    name: 'Fredi Millan',
    role: 'DESARROLLADOR BACKEND',
    description: 'Desarrollador contribuidor a la optimizacion de nuestra aplicacion.',
    email: 'fredi@healthytrition.io',
    linkedin: 'linkedin.com/in/fredimillan',
    location: 'Mosquera, Colombia',
  },
  {
    initials: 'DL',
    name: 'David Lozano',
    role: 'DESARROLLADOR FRONTEND',
    description: 'Desarrollador encargado de crear la interfaz grafica de la app movil.',
    email: 'david@healthytrition.io',
    linkedin: 'linkedin.com/in/davidlozano',
    location: 'Barranquilla, Colombia',
  },
  {
    initials: 'NJ',
    name: 'Nicolas Jimenez',
    role: 'DISEÑADOR DE INTERFAZ',
    description: 'Persona que se encargo de la creacion y el diseño Frontend de la pagina web y la app movil.',
    email: 'nicolas@healthytrition.io',
    linkedin: 'linkedin.com/in/nicolasjimenez',
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

  const isMobile = useIsMobile(768)   // < 768px -> 1 columna
  const isTablet = useIsMobile(1024)  // < 1024px -> 2 columnas

  const columns = isMobile ? 1 : isTablet ? 2 : 3

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => { setSent(false); setForm({ name: '', email: '', message: '' }) }, 3000)
  }

  return (
    <section id="about" style={{ padding: isMobile ? '60px 0' : '100px 0', background: '#f5f7f5' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ marginBottom: isMobile ? 28 : 44 }}>
          <h2 style={{ fontSize: isMobile ? 22 : 26, fontWeight: 700, letterSpacing: '-.5px', marginBottom: 8 }}>
            El Equipo de Desarrollo
          </h2>
          <p style={{ fontSize: 14, color: '#666', maxWidth: 460, lineHeight: 1.65 }}>
            Un equipo de SENA Aprendices fusionando la ciencia de la nutrición y la inteligencia computacional.
          </p>
        </div>

        {/* Grid: responsive columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: isMobile ? 14 : 16,
        }}>
          {members.map((m) => <MemberCard key={m.name} m={m} />)}

          {/* Contact Form */}
          <div style={{
            background: '#fff', border: '1.5px solid #e8e8e8',
            borderRadius: 12, padding: isMobile ? '18px' : '22px',
          }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#111', marginBottom: 20 }}>
              ¡Envianos un mensaje!
            </h3>

            {sent ? (
              <div style={{ textAlign: 'center', padding: '30px 0', color: '#1a7a4a', fontWeight: 600, fontSize: 14 }}>
                ✅ ¡Mensaje enviado con éxito!
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.6px', color: '#aaa', marginBottom: 5, textTransform: 'uppercase' }}>Tu nombre</div>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" style={inputStyle} />
                </div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.6px', color: '#aaa', marginBottom: 5, textTransform: 'uppercase' }}>Correo electrónico</div>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" style={inputStyle} />
                </div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.6px', color: '#aaa', marginBottom: 5, textTransform: 'uppercase' }}>Mensaje</div>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="¿Cómo podemos ayudarte?" rows={4} style={{ ...inputStyle, resize: 'none', minHeight: 90 }} />
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
                  ENVIAR MENSAJE
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}