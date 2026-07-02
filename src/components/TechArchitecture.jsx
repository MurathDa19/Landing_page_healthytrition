import { useIsMobile } from '../hooks/useIsMobile'

const sidebarLinks = [
  { icon: '🔷', label: 'Diagrama de arquitectura' },
  { icon: '🗂️', label: 'Diseño de ERD' },
  { icon: '⚙️', label: 'REST API (Django)' },
  { icon: '🔐', label: 'JWT Auth Flow' },
]

const cloudItems = [
  { label: 'Firestore NoSQL', desc: 'Persistencia de datos escalable' },
  { label: 'Auth Guards', desc: 'Serverless Firebase Rules' },
]

const cloudinary = [
  { label: 'Gestion multimedia', desc: 'Gestión de imágenes y videos basada en la nube para aplicaciones web y móviles' },
  { label: 'API RESTful', desc: ' API RESTful para la integración con la aplicación móvil.' },
]

const foodApi = [
  { label: 'Recurso de comida', desc: 'Recurso de comida para web y móviles' },
  { label: 'Data API', desc: ' Entrega de datos nutricionales.' },
]

const backendItems = [
  { label: 'Serializadores', desc: 'Integración de datos con DRF' },
  { label: 'Modelos', desc: 'Integración de capas SCNN con SCNN' },
]

function TechItem({ items }) {
  return items.map((item) => (
    <div key={item.label} style={{
      display: 'flex', alignItems: 'flex-start', gap: 10,
      padding: '10px 0', borderTop: '1px solid #f0f0f0',
    }}>
      <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#1a7a4a', marginTop: 4, flexShrink: 0 }} />
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, color: '#111', marginBottom: 2 }}>{item.label}</div>
        <div style={{ fontSize: 11, color: '#999' }}>{item.desc}</div>
      </div>
    </div>
  ))
}

export default function TechArchitecture() {
  const isMobile = useIsMobile(768)
  const isTablet = useIsMobile(1024)

  return (
    <section id="docs" style={{ padding: isMobile ? '60px 0' : '100px 0', background: '#f5f7f5' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '220px 1fr',
          gap: isMobile ? 32 : 64,
          alignItems: 'start',
        }}>

          {/* Sidebar */}
          <div>
            <h2 style={{ fontSize: isMobile ? 22 : 26, fontWeight: 700, letterSpacing: '-.5px', lineHeight: 1.2, marginBottom: 14 }}>
              Arquitectura Tecnológica
            </h2>
            <p style={{ fontSize: 13, color: '#666', lineHeight: 1.65, marginBottom: 28 }}>
              Una vista prev general de la pila de alto rendimiento que permite que la tecnología HealthyTrition AI.
            </p>
            <ul style={{
              listStyle: 'none', padding: 0, margin: 0,
              display: isMobile ? 'grid' : 'flex',
              gridTemplateColumns: isMobile ? '1fr 1fr' : undefined,
              flexDirection: 'column', gap: isMobile ? 4 : 2,
            }}>
              {sidebarLinks.map((l) => (
                <li key={l.label}>
                  <a href="#" style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '9px 12px', fontSize: 13, fontWeight: 500,
                    color: '#555', borderRadius: 8, textDecoration: 'none',
                    transition: 'background .15s',
                  }}>
                    <span style={{ fontSize: 14 }}>{l.icon}</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {/* Tech Cards Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : '1fr 1fr',
              gap: 14,
            }}>

              {/* Infraestructura Nube */}
              <div style={{ background: '#fff', borderRadius: 12, padding: '18px 20px', boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#111' }}>Infraestructura en la Nube</span>
                  <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.5px', padding: '3px 8px', borderRadius: 20, background: '#dbeafe', color: '#1e40af' }}>REACT</span>
                </div>
                <TechItem items={cloudItems} />
              </div>
              {/* API's utilizadas */}
              <div style={{ background: '#fff', borderRadius: 12, padding: '18px 20px', boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#111' }}>Cloudinary</span>
                  <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.5px', padding: '3px 8px', borderRadius: 20, background: '#dbeafe', color: '#1e40af' }}>API</span>
                </div>
                <TechItem items={cloudinary} />
              </div>

              <div style={{ background: '#fff', borderRadius: 12, padding: '18px 20px', boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#111' }}>Fast Food API</span>
                  <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.5px', padding: '3px 8px', borderRadius: 20, background: '#dbeafe', color: '#1e40af' }}>API</span>
                </div>
                <TechItem items={foodApi} />
              </div>

              {/* Backend Core */}
              <div style={{ background: '#fff', borderRadius: 12, padding: '18px 20px', boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#111' }}>Core Backend</span>
                  <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.5px', padding: '3px 8px', borderRadius: 20, background: '#e8f5ee', color: '#155a37' }}>DJANGO/DRF</span>
                </div>
                <TechItem items={backendItems} />
              </div>
            </div>

            {/* API Docs Banner */}
            <div style={{
              background: '#1a1a1a', borderRadius: 12,
              padding: isMobile ? '20px' : '18px 24px',
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: isMobile ? 'flex-start' : 'center',
              justifyContent: 'space-between', gap: isMobile ? 16 : 24,
            }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 4 }}>
                  Explora la documentación de API completa
                </div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>
                  Revise nuestra colección completa Swagger/Postman.
                </div>
              </div>
              <a href="#" style={{
                background: '#1a7a4a', color: '#fff',
                fontSize: 10, fontWeight: 700, letterSpacing: '.6px',
                padding: '10px 18px', borderRadius: 6,
                textDecoration: 'none', whiteSpace: 'nowrap',
                alignSelf: isMobile ? 'stretch' : 'auto',
                textAlign: isMobile ? 'center' : 'left',
              }}>
                ABRIR DOCS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}