const { useState } = React;

const steps = [
  { num: '01', title: 'Discovery Call', desc: 'We learn your goals, current gaps, and growth stage. No templates, just a real conversation about what you need.' },
  { num: '02', title: 'Custom Solution', desc: 'We recommend the right combination of talent + services, tailored precisely to your business model.' },
  { num: '03', title: 'Build & Launch', desc: 'Your VA, systems, or digital assets go live fast, without the chaos of managing it yourself.' },
  { num: '04', title: 'Optimize & Scale', desc: 'We refine, improve, and expand as your business grows. This is a long-term partnership, not a one-off placement.' },
];

function StepCard({ step }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      style={{
        background: hov ? 'rgb(82 70 57 / 0.6)' : 'rgb(82 70 57 / 0.4)',
        backdropFilter: 'blur(12px)',
        border: `1px solid ${hov ? 'rgb(125 107 90 / 0.3)' : 'rgb(250 248 245 / 0.1)'}`,
        borderRadius: '2rem', padding: '2rem',
        transition: 'all 500ms ease-out',
        transform: hov ? 'translateY(-8px)' : 'translateY(0)',
        display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div style={{
        width: '56px', height: '56px', borderRadius: '14px',
        background: hov ? 'rgb(125 107 90 / 0.1)' : '#2A2520',
        border: `1px solid ${hov ? '#7D6B5A' : 'rgb(250 248 245 / 0.2)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 500ms', transform: hov ? 'scale(1.1)' : 'scale(1)',
        boxShadow: hov ? '0 0 20px rgb(125 107 90 / 0.2)' : 'none',
      }}>
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', color: '#FAF8F5' }}>{step.num}</span>
      </div>
      <div>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: '1.5rem', color: '#FAF8F5', marginBottom: '0.75rem', transition: 'color 300ms' }}>
          {step.title}
        </h3>
        <p style={{ fontSize: '0.875rem', color: 'rgb(250 248 245 / 0.6)', lineHeight: 1.7, fontFamily: "'Manrope', sans-serif" }}>
          {step.desc}
        </p>
      </div>
    </div>
  );
}

function ProcessSection() {
  return (
    <section id="process" style={{ padding: '5rem 0', background: '#2A2520', position: 'relative', overflow: 'hidden' }}>
      {/* Glow orbs */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '600px', height: '600px', background: 'rgb(125 107 90 / 0.08)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '600px', height: '600px', background: 'rgb(82 70 57 / 0.1)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 3rem', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <p style={{ color: '#7D6B5A', fontSize: '11px', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1rem', fontFamily: "'Manrope', sans-serif" }}>How It Works</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(2.5rem,5vw,4rem)', color: '#FAF8F5', lineHeight: 1.05, marginBottom: '1.5rem' }}>
            Simple. Strategic. <em style={{ fontStyle: 'italic', color: '#a89080' }}>Scalable.</em>
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'rgb(250 248 245 / 0.65)', maxWidth: '38rem', margin: '0 auto', lineHeight: 1.7, fontFamily: "'Manrope', sans-serif" }}>
            Building great teams takes intention. Here's how we walk that path together, step by step.
          </p>
        </div>

        {/* Steps grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', position: 'relative' }}>
          {/* Connecting line */}
          <div style={{ position: 'absolute', top: '44px', left: '12.5%', right: '12.5%', height: '1px', background: 'linear-gradient(to right, transparent, rgb(125 107 90 / 0.3), transparent)', zIndex: 0, pointerEvents: 'none' }} />
          {steps.map(s => <StepCard key={s.num} step={s} />)}
        </div>

        <div style={{ marginTop: '5rem', textAlign: 'center' }}>
          <a href="#booking" style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            padding: '14px 32px', background: '#7D6B5A', color: '#FAF8F5',
            borderRadius: '9999px', fontSize: '15px', fontWeight: 500,
            fontFamily: "'Manrope', sans-serif", textDecoration: 'none',
            boxShadow: '0 8px 24px rgb(125 107 90 / 0.25)', transition: 'all 300ms ease-out',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#9C8B7A'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#7D6B5A'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Start with a Free Call
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ProcessSection });
