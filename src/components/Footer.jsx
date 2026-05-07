const footerLinks = ['Registro', 'LinkedIn', 'Documentación', 'Privacidad']

export default function Footer() {
  return (
    <footer style={{ background: '#fff', borderTop: '1px solid #e8e8e8', padding: '22px 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, fontSize: 13, fontWeight: 600, color: '#111' }}>
          <span style={{ color: '#1a7a4a' }}>Healthy</span>
          <span>Trition</span>
          <span style={{ fontSize: 10, color: '#aaa', fontWeight: 400, marginLeft: 4 }}>AI</span>
          <span style={{ fontSize: 11, color: '#bbb', fontWeight: 400, marginLeft: 8 }}>© 2024 HealthyTrition AI. All rights reserved.</span>
        </div>
        <nav style={{ display: 'flex', gap: 24 }}>
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
