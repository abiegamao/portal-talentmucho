const { useState } = React;

const services = [
  {
    id: 'va', title: 'Virtual Assistants', subtitle: '— Done Right',
    desc: 'Not just task-doers. We place trained, vetted VAs who understand business goals, not just to-do lists.',
    features: ['Executive & Admin VAs', 'Customer Support', 'Operations & Back-Office', 'CRM & Automation'],
    detail: 'Skills-matched hiring, not guesswork.',
    dark: false, wide: true, icon: '👤', span: '8',
  },
  {
    id: 'branding', title: 'Personal Branding', subtitle: '— Authority & Influence',
    desc: 'Build a compelling personal brand that establishes authority and drives meaningful connections.',
    features: ['Content Strategy', 'Profile Optimization', 'Thought Leadership', 'Audience Growth'],
    dark: true, wide: false, icon: '📈', span: '4',
  },
  {
    id: 'marketing', title: 'Marketing & Strategy', subtitle: '— Visibility & Growth',
    desc: 'Turn founders into authorities with targeted execution and strategic brand positioning.',
    features: ['Brand Positioning', 'SMM & Engagement', 'SEO & Visibility'],
    dark: false, wide: false, icon: '📡', span: '6',
  },
  {
    id: 'web', title: 'Websites & Pages', subtitle: '— Digital Storefronts',
    desc: 'Conversion-focused designs that look good and work hard for your brand\'s growth.',
    features: ['Custom Web Design', 'LP Optimization', 'Speed & Mobile First'],
    dark: false, wide: false, icon: '🖥', span: '6',
  },
  {
    id: 'ai', title: 'AI & Tech Training', subtitle: '— For Teams & VAs',
    desc: 'We train your virtual assistants and teams to use AI tools properly. Stop leaving 90% of your tools\' power on the table.',
    features: ['Claude AI Mastery', 'Workflow Automation', 'Live Coaching Sessions', 'Productivity Systems'],
    dark: false, wide: false, icon: '🤖', span: '12',
  },
];

function ServiceCard({ s }) {
  const [hovered, setHovered] = useState(false);
  const base = {
    borderRadius: '2.5rem', padding: '2.5rem', border: '1px solid',
    transition: 'all 700ms ease-out', position: 'relative', overflow: 'hidden',
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    cursor: 'pointer', height: '100%',
    transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
    boxShadow: hovered
      ? '0 20px 40px -10px rgb(61 53 46 / 0.1), 0 10px 15px -5px rgb(61 53 46 / 0.05)'
      : '0 1px 2px 0 rgb(61 53 46 / 0.05)',
  };
  const light = { ...base, background: '#FFFFFF', borderColor: hovered ? '#c8b9a8' : '#EBE4D8' };
  const dark = { ...base, background: '#2A2520', borderColor: hovered ? 'rgb(125 107 90 / 0.5)' : 'rgb(61 53 46 / 0.3)' };
  const cardStyle = s.dark ? dark : light;

  const iconBoxStyle = {
    width: '56px', height: '56px', borderRadius: '16px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    marginBottom: '2rem', fontSize: '22px',
    transition: 'all 500ms',
    transform: hovered ? 'scale(1.1) rotate(3deg)' : 'scale(1) rotate(0)',
    background: s.dark ? '#7D6B5A' : '#F5F0E8',
    border: s.dark ? 'none' : '1px solid #EBE4D8',
  };

  return (
    <div style={cardStyle} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {s.dark && <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgb(125 107 90 / 0.1), transparent)', opacity: 0.5, pointerEvents: 'none' }} />}
      {!s.dark && <div style={{ position: 'absolute', top: '-6rem', right: '-6rem', width: '16rem', height: '16rem', background: 'rgb(125 107 90 / 0.05)', borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none', transition: 'all 700ms' }} />}

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={iconBoxStyle}>{s.icon}</div>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: s.id === 'ai' ? '2rem' : '1.75rem', lineHeight: 1.1, marginBottom: '0.75rem', color: s.dark ? '#FFFFFF' : '#2A2520' }}>
          {s.title}<br />
          <em style={{ fontStyle: 'italic', fontSize: '1.1rem', fontWeight: 300, color: s.dark ? '#a89080' : '#7D6B5A' }}>{s.subtitle}</em>
        </h3>
        <p style={{ fontSize: '1rem', lineHeight: 1.7, color: s.dark ? 'rgb(250 248 245 / 0.65)' : '#3D352E', marginBottom: '1.5rem', maxWidth: '28rem', fontFamily: "'Manrope', sans-serif" }}>
          {s.desc}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {s.features.map(f => (
            <span key={f} style={{
              fontSize: '9px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
              padding: '5px 12px', borderRadius: '9999px',
              fontFamily: "'Manrope', sans-serif",
              background: s.dark ? (hovered ? '#7D6B5A' : '#3D352E') : (hovered ? 'rgb(125 107 90 / 0.08)' : '#F5F0E8'),
              border: s.dark ? `1px solid ${hovered ? '#7D6B5A' : 'rgb(255 255 255 / 0.1)'}` : `1px solid ${hovered ? 'rgb(125 107 90 / 0.3)' : '#EBE4D8'}`,
              color: s.dark ? (hovered ? '#FAF8F5' : 'rgb(250 248 245 / 0.6)') : (hovered ? '#665847' : '#9C8B7A'),
              transition: 'all 300ms',
            }}>{f}</span>
          ))}
        </div>
      </div>
      {s.id === 'va' && (
        <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid #F5F0E8', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ display: 'flex', marginLeft: '-4px' }}>
            {[1,2,3].map(i => <div key={i} style={{ width: '28px', height: '28px', borderRadius: '50%', border: '2px solid white', background: 'linear-gradient(135deg, #DED4C4, #9C8B7A)', marginLeft: i > 1 ? '-8px' : '0', boxShadow: '0 1px 3px rgb(61 53 46 / 0.1)' }} />)}
          </div>
          <span style={{ fontSize: '11px', fontWeight: 600, color: '#9C8B7A', fontFamily: "'Manrope', sans-serif" }}>{s.detail}</span>
        </div>
      )}
    </div>
  );
}

function ServicesSection() {
  return (
    <section id="services" style={{ padding: '5rem 0', background: '#F5F0E8', overflow: 'hidden' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 3rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <p style={{ color: '#7D6B5A', fontSize: '11px', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1rem', fontFamily: "'Manrope', sans-serif" }}>What We Offer</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(2.5rem,5vw,3.75rem)', color: '#2A2520', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Scale Your Operations<br />
            <em style={{ fontStyle: 'italic', color: '#7D6B5A' }}>Without the Overhead</em>
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#3D352E', maxWidth: '40rem', margin: '0 auto', lineHeight: 1.7, fontFamily: "'Manrope', sans-serif" }}>
            From skilled virtual professionals to comprehensive digital strategies that drive real results.
          </p>
        </div>

        {/* Bento grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem' }}>
          <div style={{ gridColumn: 'span 8', minHeight: '320px' }}><ServiceCard s={services[0]} /></div>
          <div style={{ gridColumn: 'span 4', minHeight: '320px' }}><ServiceCard s={services[1]} /></div>
          <div style={{ gridColumn: 'span 6', minHeight: '260px' }}><ServiceCard s={services[2]} /></div>
          <div style={{ gridColumn: 'span 6', minHeight: '260px' }}><ServiceCard s={services[3]} /></div>
          <div style={{ gridColumn: 'span 12', minHeight: '200px' }}><ServiceCard s={services[4]} /></div>
        </div>

        <div style={{ marginTop: '5rem', textAlign: 'center' }}>
          <a href="#booking" style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            padding: '16px 36px', background: '#2A2520', color: '#FAF8F5',
            borderRadius: '9999px', fontSize: '15px', fontWeight: 500,
            fontFamily: "'Manrope', sans-serif", textDecoration: 'none',
            boxShadow: '0 10px 30px rgb(61 53 46 / 0.15)', transition: 'all 500ms ease-out',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#665847'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#2A2520'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Book a Free Strategy Call
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ServicesSection });
