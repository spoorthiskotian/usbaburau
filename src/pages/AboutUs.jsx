import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import './AboutUs.css';

const timeline = [
  { year: '1949', event: 'Founded in Kannur, Kerala by Sri U.S. Babu Rau to distribute Ciba Dyes Ltd. products across South Canara and North Malabar.' },
  { year: '1950s', event: 'Opened branches in Udupi and Manipal to serve the growing coastal region market.' },
  { year: '1970s', event: 'Ventured into new product lines including Laminated Floorings and Wallpapers.' },
  { year: '2000s', event: 'Headquarters established in Mangalore, GHS Road. Expanded into Interior Solutions division.' },
  { year: '2010s', event: 'Launched USP Premium Ply – 8-year warranty plywood made from A+ grade hardwood.' },
  { year: 'Today', event: 'Most trusted company in Dakshina Kannada with 15+ product categories and 5 group companies.' },
];

export default function AboutUs() {
  return (
    <main className="about-page">
      <section className="page-hero about-hero">
        <div className="page-hero-overlay" />
        <AnimatedSection className="page-hero-content">
          <span className="section-tag light">Our Story</span>
          <h1>About U.S. Babu Rau</h1>
          <p>75+ years of trust, transparency and transformation in South Canara.</p>
        </AnimatedSection>
      </section>

      {/* Founder */}
      <section className="section founder-section">
        <div className="founder-inner">
          <AnimatedSection direction="left" className="founder-img-wrap">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" alt="Founder" className="founder-img" />
            <div className="founder-badge">Est. 1949</div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2} className="founder-text">
            <span className="section-tag">The Visionary</span>
            <h2>Sri U.S. Babu Rau</h2>
            <p>
              Sri U.S. Babu Rau's willpower, hard work and sincerity took him where he wanted to be.
              His professionalism attracted talented people to work with him. He guided them and gave
              a new direction to the company — a company that now spans multiple business sectors
              and serves thousands of customers across South Canara.
            </p>
            <p style={{ marginTop: '1rem', color: 'var(--gray)', lineHeight: 1.7 }}>
              As an initiative to help the poor and needy, the company donates a significant amount
              of profit to the <strong>Savithri Devi Memorial Charitable Trust (R)</strong>.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="section timeline-section">
        <AnimatedSection className="section-header">
          <span className="section-tag">Our Journey</span>
          <h2>75 Years of Legacy</h2>
        </AnimatedSection>
        <div className="timeline">
          {timeline.map((t, i) => (
            <AnimatedSection key={t.year} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-card">
                <span className="tl-year">{t.year}</span>
                <p>{t.event}</p>
              </div>
              <div className="tl-dot" />
            </AnimatedSection>
          ))}
          <div className="tl-line" />
        </div>
      </section>

      {/* Values */}
      <section className="section values-section">
        <AnimatedSection className="section-header">
          <span className="section-tag">What We Stand For</span>
          <h2>Our Core Values</h2>
        </AnimatedSection>
        <div className="values-grid">
          {[
            { icon: '🤝', title: 'Transparent Dealing', desc: 'Honest pricing and clear communication in every transaction.' },
            { icon: '⭐', title: 'Authentic Quality', desc: 'Only genuine, certified products from trusted manufacturers.' },
            { icon: '🔧', title: 'Superb Service', desc: 'End-to-end support from selection to installation and beyond.' },
            { icon: '❤️', title: 'Social Responsibility', desc: 'Committed to uplifting the community through charitable initiatives.' },
          ].map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1} className="value-card">
              <div className="value-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </main>
  );
}
