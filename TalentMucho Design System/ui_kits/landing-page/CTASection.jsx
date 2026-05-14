function CTASection() {
  const gridPattern = {
    backgroundImage: `linear-gradient(45deg,transparent 49%,#FAF8F5 49%,#FAF8F5 51%,transparent 51%),linear-gradient(-45deg,transparent 49%,#FAF8F5 49%,#FAF8F5 51%,transparent 51%)`,
    backgroundSize: '50px 50px',
    opacity: 0.03,
  };

  return (
    <section id="contact" style={{ position: 'relative', background: '#2A2520', padding: '5rem 0', overflow: 'hidden' }}>
      {/* Grid */}
      <div style={{ position: 'absolute', inset: 0, ...gridPattern }} />
      {/* Glow */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '700px', height: '400px', background: 'rgb(125 107 90 / 0.06)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: '400px', height: '400px', background: 'rgb(82 70 57 / 0.1)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 3rem', position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
          <div style={{ height: '1px', width: '80px', background: 'linear-gradient(to right, transparent, rgb(156 139 122 / 0.3))' }} />
          <span style={{ color: '#9C8B7A', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600, fontFamily: "'Manrope', sans-serif" }}>Ready to scale?</span>
          <div style={{ height: '1px', width: '80px', background: 'linear-gradient(to left, transparent, rgb(156 139 122 / 0.3))' }} />
        </div>

        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(2.8rem,6vw,5rem)', color: '#FAF8F5', lineHeight: 1.05, marginBottom: '1.5rem' }}>
          Scale Without the{' '}
          <em style={{ fontStyle: 'italic', color: '#7D6B5A' }}>Stress.</em>
        </h2>

        <p style={{ fontSize: '1.125rem', color: 'rgb(250 248 245 / 0.55)', maxWidth: '36rem', margin: '0 auto 3rem', lineHeight: 1.7, fontFamily: "'Manrope', sans-serif" }}>
          Let's build your team, your systems, and your online presence properly.
        </p>

        <div id="booking" style={{ paddingBottom: '3rem' }}>
          <a href="https://calendly.com/talentmucho/30min" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            padding: '18px 36px', background: '#FAF8F5', color: '#2A2520',
            borderRadius: '12px', fontSize: '15px', fontWeight: 600,
            fontFamily: "'Manrope', sans-serif", textDecoration: 'none',
            boxShadow: '0 20px 40px -10px rgb(0 0 0 / 0.3)', transition: 'all 300ms ease-out',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#F5F0E8'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 24px 48px -10px rgb(0 0 0 / 0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#FAF8F5'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 20px 40px -10px rgb(0 0 0 / 0.3)'; }}
          >
            Book Your Free Call — Get a Custom Staffing Plan
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M7 7h10v10"/></svg>
          </a>
          <p style={{ color: 'rgb(250 248 245 / 0.35)', fontSize: '12px', marginTop: '1rem', fontFamily: "'Manrope', sans-serif" }}>
            No commitment required · 30-minute session
          </p>
        </div>

        {/* Footer row */}
        <div style={{ borderTop: '1px solid rgb(250 248 245 / 0.1)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ textAlign: 'left' }}>
            <p style={{ fontSize: '13px', color: 'rgb(250 248 245 / 0.45)', fontFamily: "'Manrope', sans-serif" }}>Torrevieja, Spain</p>
            <p style={{ fontSize: '13px', color: 'rgb(250 248 245 / 0.45)', fontFamily: "'Manrope', sans-serif" }}>Cagayan de Oro City, Philippines</p>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            {['W', 'f', '◻', '▷', '⊚'].map((icon, i) => (
              <a key={i} href="#" style={{
                width: '38px', height: '38px', borderRadius: '50%',
                border: '1px solid rgb(250 248 245 / 0.1)', background: 'rgb(250 248 245 / 0.04)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgb(250 248 245 / 0.6)', fontSize: '13px', textDecoration: 'none',
                transition: 'all 300ms',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgb(125 107 90 / 0.3)'; e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'scale(1.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgb(250 248 245 / 0.04)'; e.currentTarget.style.color = 'rgb(250 248 245 / 0.6)'; e.currentTarget.style.transform = 'scale(1)'; }}
              >{icon}</a>
            ))}
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '12px', color: 'rgb(250 248 245 / 0.3)', fontFamily: "'Manrope', sans-serif" }}>
              © {new Date().getFullYear()} Talent Mucho. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { CTASection });
