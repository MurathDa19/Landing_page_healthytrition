import { useState } from 'react'

const navLinks = ['Intro', 'Product', 'Docs', 'Management', 'About']

export default function Navbar() {
  const [active, setActive] = useState('Intro')

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(255,255,255,0.97)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #e8e8e8',
    }}>
      <div style={{
        maxWidth: 1160, margin: '0 auto', padding: '0 32px',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', height: 58,
      }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none', color: '#111', fontWeight: 700, fontSize: 15, letterSpacing: '-0.3px' }}>
          <span style={{ fontSize: 17 }}>🥗</span>
          <span><span style={{ color: '#1a7a4a' }}>Healthy</span>Trition</span>
        </a>

        {/* Nav Links */}
        <ul style={{ display: 'flex', listStyle: 'none', gap: 2, padding: 0, margin: 0 }}>
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
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

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a href="#" style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.5px', color: '#666', textDecoration: 'none' }}>
            VIEW ON GITHUB
          </a>
          <a href="#" style={{
            background: '#1a7a4a', color: '#fff',
            fontSize: 11, fontWeight: 700, letterSpacing: '.5px',
            padding: '9px 18px', borderRadius: 6, textDecoration: 'none',
          }}>
            GET STARTED
          </a>
        </div>
      </div>
    </nav>
  )
}
