const features = [
  {
    icon: '🍴',
    title: 'AI Recipe Filtering',
    description: 'Advanced semantic search for ingredient bio-availability and inflammatory triggers.',
    wide: true,
  },
  {
    icon: '🌿',
    title: 'Green Focus',
    description: 'Priority plant-based protein sources for sustainable recovery cycles.',
  },
  {
    icon: '💧',
    title: 'Low-Fat Optimization',
    description: 'Targeted lipid profiles designed for cardiovascular longevity and lean mass maintenance.',
  },
]

const bars = [50, 75, 40, 100, 65, 88, 55]

export default function Features() {
  return (
    <section id="product" style={{ padding: '100px 0', background: '#fff' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 32px' }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-.5px', marginBottom: 10 }}>Metabolic Precision</h2>
        <div style={{ width: 36, height: 3, background: '#1a7a4a', borderRadius: 2, marginBottom: 48 }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 20, alignItems: 'start' }}>

          {/* Feature Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gap: 14 }}>
            {features.map((f, i) => (
              <div
                key={f.title}
                style={{
                  gridColumn: f.wide ? '1 / -1' : 'auto',
                  background: '#f6f7f6',
                  borderRadius: 12,
                  padding: '22px 20px',
                  display: f.wide ? 'grid' : 'flex',
                  gridTemplateColumns: f.wide ? '1fr auto' : undefined,
                  flexDirection: f.wide ? undefined : 'column',
                  gap: 14,
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <div style={{
                      width: 34, height: 34, background: '#fff',
                      borderRadius: 8, display: 'flex', alignItems: 'center',
                      justifyContent: 'center', fontSize: 16, flexShrink: 0,
                    }}>
                      {f.icon}
                    </div>
                    <span style={{ fontSize: 14, fontWeight: 600, color: '#111' }}>{f.title}</span>
                  </div>
                  <p style={{ fontSize: 12.5, color: '#666', lineHeight: 1.65 }}>{f.description}</p>
                </div>
                {f.wide && (
                  <div style={{ width: 110, height: 70, borderRadius: 8, overflow: 'hidden', background: '#e8e8e8', flexShrink: 0 }}>
                    {/* Placeholder food image */}
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #d4e8d8 0%, #a8c8b0 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28 }}>🥗</div>
                  </div>
                )}
                {!f.wide && (
                  <div style={{ marginTop: 'auto', height: 4, background: '#e8e8e8', borderRadius: 2, width: '40%' }} />
                )}
              </div>
            ))}
          </div>

          {/* Stat Card */}
          <div style={{
            background: '#1a7a4a',
            borderRadius: 12, padding: '26px 22px',
            color: '#fff', display: 'flex',
            flexDirection: 'column', gap: 8,
          }}>
            <h3 style={{ fontSize: 15, fontWeight: 700 }}>Personalized Macros</h3>
            <p style={{ fontSize: 12, opacity: .8, lineHeight: 1.55 }}>
              Real-time dynamic adjustment based on biometric feedback loops.
            </p>
            {/* Bar Chart */}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 64, margin: '16px 0 10px' }}>
              {bars.map((h, i) => (
                <div key={i} style={{
                  flex: 1,
                  height: `${h}%`,
                  background: i === bars.length - 1 ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.45)',
                  borderRadius: '3px 3px 0 0',
                }} />
              ))}
            </div>
            <div style={{ fontSize: 38, fontWeight: 800, letterSpacing: '-1.5px', lineHeight: 1 }}>2.4k+</div>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '1px', opacity: .65, textTransform: 'uppercase' }}>
              Active Data Points
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
