const testimonials = [
  { name: 'Jonathan Yombo', role: 'Business Coach', quote: 'Talent Mucho completely transformed how I run my coaching business. Finding a reliable VA who understood my industry was a game-changer.' },
  { name: 'Yves Kalume', role: 'Founder, Tech Solutions', quote: 'We needed a highly-skilled developer fast, and they delivered. The vetting process is incredible. We saved weeks of recruitment headaches.' },
  { name: 'Yucel Faruksahan', role: 'E-commerce Entrepreneur', quote: 'From customer support to inventory management, the remote talent I hired through Talent Mucho has allowed me to finally step back and focus on scaling.' },
  { name: 'Shekinah Tshiokufila', role: 'Creative Agency Owner', quote: 'Hiring a specialized marketing assistant gave my agency the breathing room to take on three new enterprise clients this quarter. Absolute lifesavers.' },
  { name: 'Oketa Fred', role: 'Real Estate Investor', quote: 'I absolutely love the onboarding process! They found me an Executive Assistant who manages my entire calendar, lead flow, and inbox flawlessly.' },
  { name: 'Zeki', role: 'SaaS Founder', quote: "Partnering with Talent Mucho has been like unlocking a secret scaling superpower. The tech talent they source is top-tier and their support is unmatched." },
  { name: 'Joseph Kitheka', role: 'Marketing Consultant', quote: 'Talent Mucho has transformed the way I delegate. Having a dedicated designer and copywriter has significantly accelerated my workflow and client delivery.' },
  { name: 'Eric Ampire', role: 'Fitness Coach', quote: 'They are the perfect solution for anyone who wants to scale without the stress of traditional hiring. My client management is now fully automated.' },
  { name: 'Rodrigo Aguilar', role: 'Content Creator', quote: 'Having a dedicated video editor and social media manager has allowed me to focus purely on content creation. It makes growing an audience so much easier.' },
];

function TestimonialCard({ t }) {
  const initials = t.name.split(' ').map(w => w[0]).join('').slice(0, 2);
  const colors = ['#7D6B5A', '#9C8B7A', '#524639', '#665847', '#3D352E'];
  const bg = colors[t.name.length % colors.length];
  return (
    <div style={{
      background: '#FFFFFF', border: '1px solid rgb(235 228 216 / 0.5)',
      borderRadius: '1.25rem', padding: '1.5rem',
      boxShadow: '0 1px 3px rgb(61 53 46 / 0.05)',
      transition: 'box-shadow 300ms',
    }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 6px 16px rgb(61 53 46 / 0.08)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = '0 1px 3px rgb(61 53 46 / 0.05)'}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '1rem' }}>
        <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: bg, border: '1px solid rgb(235 228 216 / 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <span style={{ fontSize: '12px', fontWeight: 600, color: '#FAF8F5', fontFamily: "'Manrope', sans-serif" }}>{initials}</span>
        </div>
        <div>
          <div style={{ fontSize: '14px', fontWeight: 600, color: '#2A2520', fontFamily: "'Manrope', sans-serif" }}>{t.name}</div>
          <div style={{ fontSize: '11px', color: '#9C8B7A', fontWeight: 500, letterSpacing: '0.03em', marginTop: '2px', fontFamily: "'Manrope', sans-serif" }}>{t.role}</div>
          <blockquote style={{ marginTop: '1rem', fontSize: '13px', color: '#9C8B7A', lineHeight: 1.65, fontFamily: "'Manrope', sans-serif" }}>
            &ldquo;{t.quote}&rdquo;
          </blockquote>
        </div>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  const col1 = testimonials.slice(0, 3);
  const col2 = testimonials.slice(3, 6);
  const col3 = testimonials.slice(6, 9);

  return (
    <section id="testimonials" style={{ padding: '5rem 0', background: '#F5F0E8', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 3rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ color: '#7D6B5A', fontSize: '11px', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1rem', fontFamily: "'Manrope', sans-serif" }}>What Clients Say</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(2.5rem,5vw,3.75rem)', color: '#2A2520', lineHeight: 1.1, marginBottom: '1rem' }}>
            Loved by the Community
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#9C8B7A', maxWidth: '36rem', margin: '0 auto', lineHeight: 1.7, fontFamily: "'Manrope', sans-serif" }}>
            Hear from the professionals and companies we've had the privilege to partner with.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {[col1, col2, col3].map((col, ci) => (
            <div key={ci} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {col.map((t, i) => <TestimonialCard key={i} t={t} />)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { TestimonialsSection });
