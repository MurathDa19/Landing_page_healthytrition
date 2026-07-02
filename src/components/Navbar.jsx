import { useState } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

const navLinks = ['Intro', 'Docs', 'Management', 'About']

export default function Navbar() {
  const [active, setActive] = useState('Intro')
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(255,255,255,0.97)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #e8e8e8',
    }}>
      <div style={{
        maxWidth: 1160, margin: '0 auto', padding: '0 24px',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', height: 58,
      }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none', color: '#111', fontWeight: 700, fontSize: 15, letterSpacing: '-0.3px' }}>
          <span style={{ fontSize: 17 }}>🥗</span>
          <span><span style={{ color: '#1a7a4a' }}>Healthy</span>Trition</span>
        </a>

        {isMobile ? (
          // Botón hamburguesa
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: 22, padding: 4, lineHeight: 1,
            }}
            aria-label="Abrir menú"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        ) : (
          // Nav Links normal
          <ul style={{ display: 'flex', listStyle: 'none', gap: 2, padding: 0, margin: 0 }}>
            {navLinks.map((link) => (
              <li key={link}>
                
                <a  href={`#${link.toLowerCase()}`}
                  onClick={() => setActive(link)}
                  style={{
                    display: 'block', padding: '6px 13px',
                    fontSize: 13, fontWeight: active === link ? 600 : 500,
                    color: active === link ? '#111' : '#666',
                    borderRadius: 6, textDecoration: 'none',
                    transition: 'color .15s, background .15s',
                  }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Menú desplegable en móvil */}
      {isMobile && menuOpen && (
        <ul style={{
          listStyle: 'none', margin: 0, padding: '8px 24px 16px',
          display: 'flex', flexDirection: 'column', gap: 4,
          borderTop: '1px solid #e8e8e8',
        }}>
          {navLinks.map((link) => (
            <li key={link}>
              
              <a href={`#${link.toLowerCase()}`}
                onClick={() => { setActive(link); setMenuOpen(false) }}
                style={{
                  display: 'block', padding: '10px 4px',
                  fontSize: 14, fontWeight: active === link ? 600 : 500,
                  color: active === link ? '#111' : '#666',
                  textDecoration: 'none',
                }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}