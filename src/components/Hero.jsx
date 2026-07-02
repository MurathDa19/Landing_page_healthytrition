import { useIsMobile } from '../hooks/useIsMobile'

export default function Hero() {
  const isMobile = useIsMobile()

  return (
    <section id="intro" style={{ background: '#f5f7f5', padding: isMobile ? '48px 0 60px' : '80px 0 100px', overflow: 'hidden' }}>
      <div style={{
        maxWidth: 1160, margin: '0 auto', padding: '0 24px',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'flex-start' : 'center',
        justifyContent: 'space-between',
        gap: isMobile ? 40 : 60,
      }}>

        {/* Contenido izquierdo */}
        <div style={{ maxWidth: isMobile ? '100%' : 480 }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1.8px', color: '#888', marginBottom: 20, textTransform: 'uppercase' }}>
            El Contador de Calorías
          </p>
          <h1 style={{
            fontFamily: '"DM Serif Display", serif',
            fontSize: isMobile ? 34 : 52,
            lineHeight: 1.12,
            color: '#111', marginBottom: 20,
            letterSpacing: '-1px',
          }}>
            HealthyTrition:{' '}
            <span style={{ color: '#1a7a4a' }}>Scan de comidas potenciado por la IA</span>
          </h1>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: '#666', marginBottom: 36 }}>
            Resultado de diversos tipos de comidas, podras ver sus valores
            nutricionales tales como: calorías, azucares, carbohidratos, entre otros muchos mas.
          </p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <a href="#" style={{
              background: '#1a7a4a', color: '#fff',
              fontSize: 11, fontWeight: 700, letterSpacing: '.6px',
              padding: '13px 22px', borderRadius: 7, textDecoration: 'none',
            }}>
              DESCARGAR APP
            </a>
          </div>
        </div>

        {/* Right — Phone Mockup */}
        <div style={{ flexShrink: 0, alignSelf: isMobile ? 'center' : 'auto' }}>
          <div style={{
            width: isMobile ? 190 : 230,
            height: isMobile ? 330 : 400,
            background: '#fff',
            borderRadius: 36,
            border: '6px solid #1a1a1a',
            boxShadow: '0 32px 80px rgba(0,0,0,0.18), inset 0 0 0 1px rgba(255,255,255,0.4)',
            padding: '28px 14px 16px',
            display: 'flex', flexDirection: 'column', gap: 10,
            position: 'relative',
          }}>
            {/* Notch */}
            <div style={{
              position: 'absolute', top: 14, left: '50%', transform: 'translateX(-50%)',
              width: 56, height: 8, background: '#1a1a1a', borderRadius: 4,
            }} />
            {/* App UI */}
            <div style={{ height: 8, background: '#e0e0e0', borderRadius: 4, width: '55%' }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              <div style={{ height: 82, borderRadius: 10, background: '#1a7a4a' }} />
              <div style={{ height: 82, borderRadius: 10, background: '#a8c4d4' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              <div style={{ height: 72, borderRadius: 10, background: '#c6e8d6' }} />
              <div style={{ height: 72, borderRadius: 10, background: '#ebebeb' }} />
            </div>
            <div style={{ height: 10, background: '#f0f0f0', borderRadius: 5 }} />
            <div style={{ height: 10, background: '#f0f0f0', borderRadius: 5, width: '70%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}