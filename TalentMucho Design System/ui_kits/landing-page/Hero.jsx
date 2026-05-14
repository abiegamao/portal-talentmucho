const { useEffect, useRef } = React;

function Hero() {
  const gridStyle = {
    backgroundImage: `linear-gradient(45deg,transparent 49%,#DED4C4 49%,#DED4C4 51%,transparent 51%),linear-gradient(-45deg,transparent 49%,#DED4C4 49%,#DED4C4 51%,transparent 51%)`,
    backgroundSize: '40px 40px',
    WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%,#000 60%,transparent 100%)',
    maskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%,#000 60%,transparent 100%)',
  };

  const bullets = [
    'AI-Trained Virtual Assistants & Engineers',
    'Websites, Systems & Automation',
    'Social Media, SEO & GEO',
    'AI & Tech Training for Teams & Companies',
    'One partner. One strategy. Real results.',
  ];

  return (
    <section style={{
      position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center',
      background: '#F5F0E8', overflow: 'hidden',
    }}>
      {/* Grid pattern */}
      <div style={{ position: 'absolute', inset: 0, ...gridStyle }} />
      {/* Glow orbs */}
      <div style={{ position: 'absolute', top: '25%', left: '-5rem', width: '24rem', height: '24rem', background: 'rgb(235 228 216 / 0.5)', borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '25%', right: '-5rem', width: '20rem', height: '20rem', background: 'rgb(222 212 196 / 0.4)', borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '160px 48px 80px', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          {/* Left */}
          <div className="tm-fade-in-up">
            <p style={{ color: '#9C8B7A', fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem', fontFamily: "'Manrope', sans-serif" }}>
              Educate. Build. Operate.
            </p>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(2.8rem,5vw,4.2rem)', lineHeight: 1.05, color: '#2A2520', marginBottom: '1.5rem' }}>
              Your Business Deserves<br />a Team That Uses AI
            </h1>
            <p style={{ fontSize: '1.125rem', color: '#3D352E', lineHeight: 1.7, maxWidth: '28rem', marginBottom: '2rem', fontFamily: "'Manrope', sans-serif" }}>
              We educate your team, build your digital systems, and operate as your AI-powered talent layer — all under one roof.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {bullets.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontFamily: "'Manrope', sans-serif" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7D6B5A" strokeWidth="2" style={{ flexShrink: 0, marginTop: '2px' }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <span style={{ fontSize: '1rem', color: i === 4 ? '#2A2520' : '#3D352E', fontWeight: i === 4 ? 700 : 500 }}>{item}</span>
                </li>
              ))}
            </ul>
            <a href="#booking" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 28px', background: '#7D6B5A', color: '#FAF8F5',
              borderRadius: '10px', fontSize: '15px', fontWeight: 500,
              fontFamily: "'Manrope', sans-serif", textDecoration: 'none',
              boxShadow: '0 4px 12px rgb(61 53 46 / 0.15)', transition: 'all 300ms ease-out',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#665847'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgb(61 53 46 / 0.2)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#7D6B5A'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgb(61 53 46 / 0.15)'; }}
            >
              Get Your Free VA Match
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
            </a>
          </div>

          {/* Right — image + floating cards */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'flex-end' }}>
            {/* Circle backdrop */}
            <div style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
              width: '380px', height: '380px', borderRadius: '50%',
              background: 'linear-gradient(135deg, rgb(235 228 216 / 0.6), rgb(222 212 196 / 0.4))',
              border: '1px solid rgb(222 212 196 / 0.5)',
            }} />
            {/* Person image */}
            <img src="../../assets/hero-image.png" alt="Professional"
              style={{ position: 'relative', zIndex: 1, height: '420px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgb(61 53 46 / 0.15))' }}
              onError={e => { e.target.src = '../../assets/hero-person.png'; }} />
            {/* Experience badge */}
            <div style={{
              position: 'absolute', top: '2rem', right: '0', zIndex: 2,
              background: '#7D6B5A', color: '#FAF8F5', padding: '12px 16px', borderRadius: '10px',
              boxShadow: '0 8px 24px rgb(61 53 46 / 0.2)',
            }}>
              <div style={{ fontSize: '24px', fontWeight: 700, fontFamily: "'Manrope', sans-serif" }}>10+</div>
              <div style={{ fontSize: '11px', opacity: 0.9, lineHeight: 1.4, fontFamily: "'Manrope', sans-serif" }}>Years<br />Experience</div>
            </div>
            {/* Professionals placed */}
            <div style={{
              position: 'absolute', top: '45%', left: '0', zIndex: 2,
              background: '#FAF8F5', border: '1px solid #EBE4D8', padding: '12px 16px', borderRadius: '14px',
              boxShadow: '0 8px 24px rgb(61 53 46 / 0.1)',
            }}>
              <div style={{ fontSize: '11px', fontWeight: 600, color: '#2A2520', fontFamily: "'Manrope', sans-serif", marginBottom: '2px' }}>Professionals Placed</div>
              <div style={{ fontSize: '22px', fontWeight: 700, color: '#7D6B5A', fontFamily: "'Manrope', sans-serif" }}>200+</div>
            </div>
            {/* Retention badge */}
            <div style={{
              position: 'absolute', bottom: '5rem', right: '-1rem', zIndex: 2,
              background: '#FAF8F5', border: '1px solid #EBE4D8', padding: '12px 16px', borderRadius: '14px',
              boxShadow: '0 8px 24px rgb(61 53 46 / 0.1)',
            }}>
              <div style={{ fontSize: '10px', color: '#9C8B7A', fontFamily: "'Manrope', sans-serif", marginBottom: '2px' }}>Client Retention</div>
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#2A2520', fontFamily: "'Manrope', sans-serif" }}>98%</div>
              <div style={{ display: 'flex', gap: '3px', alignItems: 'flex-end', marginTop: '6px' }}>
                {[3, 4, 5, 6, 8, 7, 10].map((h, i) => (
                  <div key={i} style={{ width: '5px', height: `${h * 2}px`, background: i < 3 ? '#DED4C4' : i < 5 ? '#9C8B7A' : '#7D6B5A', borderRadius: '2px' }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
