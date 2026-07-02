import { useIsMobile } from '../hooks/useIsMobile'

const footerLinks = ['Registro', 'LinkedIn', 'Documentación', 'Privacidad']

export default function Footer() {
  const isMobile = useIsMobile()

  return (
    <footer style={{ background: '#fff', borderTop: '1px solid #e8e8e8', padding: isMobile ? '24px 0' : '22px 0' }}>
      <div style={{
        maxWidth: 1160, margin: '0 auto', padding: '0 24px',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'flex-start' : 'center',
        justifyContent: 'space-between',
        gap: isMobile ? 16 : 0,
      }}>
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'baseline',
          gap: isMobile ? 2 : 4,
          fontSize: 13, fontWeight: 600, color: '#111',
        }}>
          <span>
            <span style={{ color: '#1a7a4a' }}>Healthy</span>
            <span>Trition</span>
            <span style={{ fontSize: 10, color: '#aaa', fontWeight: 400, marginLeft: 4 }}>AI</span>
          </span>
          <span style={{ fontSize: 11, color: '#bbb', fontWeight: 400, marginLeft: isMobile ? 0 : 8 }}>
            © 2024 HealthyTrition AI. All rights reserved.
          </span>
        </div>
        <nav style={{ display: 'flex', gap: isMobile ? 16 : 24, flexWrap: 'wrap' }}>
          {footerLinks.map((l) => (
            <a key={l} href="#" style={{ fontSize: 12, color: '#666', textDecoration: 'none', transition: 'color .15s' }}>
              {l}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}