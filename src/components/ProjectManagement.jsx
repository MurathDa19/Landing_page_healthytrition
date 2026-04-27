const docs = [
  {
    icon: '📄',
    iconBg: '#e6f4ea',
    title: 'User Manual',
    description: 'Comprehensive guide accompanying the consumer synthesis dashboard and macro display.',
    action: 'DOWNLOAD PDF ↓',
  },
  {
    icon: '⚙️',
    iconBg: '#e8f0fe',
    title: 'Installation Guide',
    description: 'Step-by-step technical setup for local development and production environments.',
    action: 'DOWNLOAD PDF ↓',
  },
  {
    icon: '📅',
    iconBg: '#e6f4ea',
    title: 'Project Schedule',
    description: 'Gantt chart mapping the iterative development cycles and milestones.',
    action: 'VIEW SCHEDULE ↗',
  },
]

export default function ProjectManagement() {
  return (
    <section id="management" style={{ padding: '100px 0', background: '#fff' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-.5px', marginBottom: 8 }}>
            Project Management
          </h2>
          <p style={{ fontSize: 14, color: '#666' }}>Methodological execution and delivery assets.</p>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {docs.map((doc) => (
            <div key={doc.title} style={{
              background: '#fff',
              border: '1.5px solid #e8e8e8',
              borderRadius: 12, padding: '26px 22px',
              display: 'flex', flexDirection: 'column', gap: 12,
              transition: 'box-shadow .2s',
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: doc.iconBg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22,
              }}>
                {doc.icon}
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: '#111' }}>{doc.title}</h3>
              <p style={{ fontSize: 13, color: '#666', lineHeight: 1.65, flex: 1 }}>{doc.description}</p>
              <a href="#" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '.5px',
                color: '#999', textDecoration: 'none', marginTop: 4,
                transition: 'color .15s',
              }}>
                {doc.action}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
