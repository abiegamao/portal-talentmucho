const { useState, useEffect } = React;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    padding: '10px 24px',
    background: scrolled ? '#FFFFFF' : 'transparent',
    boxShadow: scrolled ? '0 4px 6px -1px rgb(61 53 46 / 0.07)' : 'none',
    transition: 'all 300ms ease-out',
  };
  const innerStyle = {
    maxWidth: '80rem', margin: '0 auto',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  };

  return (
    <>
      <header style={navStyle}>
        <div style={innerStyle}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src="../../assets/tm-logo.png" alt="TalentMucho"
              style={{ height: '36px', width: 'auto', objectFit: 'contain' }} />
          </a>
          <nav style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            {['Our Studio', 'Insights', 'Contact'].map(label => (
              <button key={label} style={{
                padding: '6px 14px', borderRadius: '9999px', fontSize: '13px', fontWeight: 500,
                color: '#3D352E', background: 'transparent', border: 'none', cursor: 'pointer',
                fontFamily: "'Manrope', sans-serif", transition: 'background 200ms',
              }}
                onMouseEnter={e => e.target.style.background = '#F5F0E8'}
                onMouseLeave={e => e.target.style.background = 'transparent'}
              >{label}</button>
            ))}
          </nav>
          <a href="#booking" style={{
            padding: '9px 22px', borderRadius: '9999px', background: '#7D6B5A', color: '#FAF8F5',
            fontSize: '13px', fontWeight: 500, textDecoration: 'none', fontFamily: "'Manrope', sans-serif",
            boxShadow: '0 4px 6px -1px rgb(61 53 46 / 0.15)', display: 'inline-flex', alignItems: 'center', gap: '6px',
            transition: 'all 300ms ease-out',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#665847'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#7D6B5A'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Book a Call
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6"/></svg>
          </a>
        </div>
      </header>
    </>
  );
}

Object.assign(window, { Navbar });
