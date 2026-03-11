import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import './Sustainability.css';

const pillars = [
  { icon: '🌳', title: 'Responsible Sourcing', desc: 'We partner only with certified timber suppliers who follow sustainable forest management practices, ensuring minimal ecological impact.' },
  { icon: '♻️', title: 'Waste Reduction', desc: 'Our manufacturing and distribution processes aim to minimize waste through efficient material utilization and recycling initiatives.' },
  { icon: '🌱', title: 'Eco-Friendly Products', desc: 'USP Premium Ply uses BWP-type phenolic resins with low emission standards, safe for indoor environments.' },
  { icon: '💧', title: 'Water Conservation', desc: 'Production processes are continuously reviewed to reduce water consumption and prevent contamination.' },
  { icon: '🤲', title: 'Community Support', desc: 'Through Savithri Devi Memorial Charitable Trust, we invest in the welfare of underprivileged communities in Dakshina Kannada.' },
  { icon: '🏭', title: 'Local Economy', desc: 'By sourcing and hiring locally, we strengthen the regional economy and reduce transportation-related emissions.' },
];

export default function Sustainability() {
  return (
    <main className="sustain-page">
      <section className="page-hero sustain-hero">
        <div className="page-hero-overlay" />
        <AnimatedSection className="page-hero-content">
          <span className="section-tag light">Our Commitment</span>
          <h1>Sustainability</h1>
          <p>Building a better tomorrow — responsibly sourced, thoughtfully delivered.</p>
        </AnimatedSection>
      </section>

      <section className="section sustain-intro">
        <AnimatedSection className="sustain-intro-inner">
          <div className="intro-text">
            <span className="section-tag">Why It Matters</span>
            <h2>Green Materials for a Greener Future</h2>
            <p>At U.S. Babu Rau, sustainability isn't a buzzword — it's at the heart of how we
            source, manufacture, and distribute our products. From certified timber to eco-friendly
            laminates, every decision we make considers its impact on the environment and the community.</p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=80"
            alt="Forest sustainability"
            className="intro-img"
          />
        </AnimatedSection>
      </section>

      <section className="section pillars-section">
        <AnimatedSection className="section-header">
          <span className="section-tag">Our Pillars</span>
          <h2>Sustainability Commitments</h2>
        </AnimatedSection>
        <div className="pillars-grid">
          {pillars.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1} className="pillar-card">
              <div className="pillar-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="sustain-quote">
        <AnimatedSection>
          <blockquote>
            "We dedicate our success to the continued patronage of our customers who have shown
            enormous faith in us all these years — and to building a better world for those who come after."
          </blockquote>
          <cite>— U.S. Babu Rau, Founder</cite>
        </AnimatedSection>
      </section>
    </main>
  );
}
