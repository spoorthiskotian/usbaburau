import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import AnimatedSection from '../components/AnimatedSection';
import './Home.css';
import { IoCallSharp } from "react-icons/io5";

const products = [
  {
    title: 'Plywood, Laminates & Veneers',
    desc: 'Wide range of commercial & waterproof plywood, veneers and laminates in various shades, colors and patterns.',
    img: 'https://images.unsplash.com/photo-1629976828074-c248d94c82ea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    
  },
  {
    title: 'Laminated & Vinyl Flooring',
    desc: 'Modern flooring solutions including laminated and vinyl options. We offer installation services through a skilled technical team.',
    img: 'https://plus.unsplash.com/premium_photo-1704744490021-fb803cd2067f?q=80&w=1320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    
  },
  {
    title: 'Interior Solutions',
    desc: 'Complete interior solutions including design, supply of materials, installation and execution for offices and homes.',
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    
  },
  {
    title: 'Industrial Acids & Chemicals',
    desc: 'Leading supplier of industrial chemicals in Dakshina Kannada for metal fabrication, soap, plastic and plywood industries.',
    img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80',
    
  },
];

const whyChooseUs = [
  { title: 'Trusted Since 1949', desc: 'Over 75 years of serving South Canara with authenticity and quality.' },
  { title: 'One-Stop Solution', desc: 'From raw timber to finished interiors — all materials under one roof.' },
  { title: 'Expert Installation', desc: 'Skilled technical teams for flooring, wallpapers, and interior fit-outs.' },
  { title: 'Premium Quality', desc: 'USP Premium Ply with 8-year warranty, termite & borer resistant.' },
  { title: 'Widest Brand Portfolio', desc: 'Partnered with renowned brands catering to all budgets.' },
  { title: 'Charitable Commitment', desc: 'Profits donated to Savithri Devi Memorial Charitable Trust.' },
];

const WhyCard = ({ item, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      className="why-card"
      initial={{ opacity: 0, x: -60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <FiCheckCircle size={22} color="var(--orange)" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
      <div>
        <h4>{item.title}</h4>
        <p>{item.desc}</p>
      </div>
    </motion.div>
  );
};

export default function Home() {
  return (
    <main className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          {/* <motion.span
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Estd. 1949 · Trusted for 75+ Years
          </motion.span> */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Get All Materials <br /><span>Under One Roof</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            South Canara's most trusted supplier of plywood, laminates, flooring,
            interior solutions, and industrial chemicals since 1949.
          </motion.p>
          <motion.div
            className="hero-btns"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <Link to="/products" className="btn-primary">Explore Products <FiArrowRight /></Link>
            <Link to="/contact" className="btn-outline">Get in Touch</Link>
          </motion.div>
        </div>
        <div className="hero-scroll-hint">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="scroll-dot" />
        </div>
      </section>

      {/* Stats */}
      <section className="stats-bar">
        {[['75+', 'Years of Trust'], ['3', 'Locations'], ['15+', 'Product Categories'], ['5', 'Group Companies']].map(([num, label]) => (
          <AnimatedSection key={label} className="stat-item">
            <span className="stat-num">{num}</span>
            <span className="stat-label">{label}</span>
          </AnimatedSection>
        ))}
      </section>

      {/* Product Highlights */}
      <section className="section products-section">
        <AnimatedSection className="section-header">
          <span className="section-tag">What We Offer</span>
          <h2>Our Product Categories</h2>
          <p>Explore our diverse range built for architects, designers, and homeowners alike.</p>
        </AnimatedSection>

        <div className="products-grid">
          {products.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1} className="product-card">
              <div className="product-img-wrap">
                <img src={p.img} alt={p.title} loading="lazy" />
               
              </div>
              <div className="product-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <Link to="/products" className="card-link">View More <FiArrowRight size={14} /></Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-section">
        <div className="why-inner">
          <AnimatedSection className="why-text" direction="left">
            <span className="section-tag">Why Choose Us</span>
            <h2>Built on Trust, Delivered with Excellence</h2>
            <p>
              For over seven decades, U.S. Babu Rau has been the cornerstone of
              quality building materials in Dakshina Kannada. Our commitment to
              transparency, premium quality, and superb service sets us apart.
            </p>
            <div className="why-cards">
              {whyChooseUs.map((item, i) => <WhyCard key={item.title} item={item} index={i} />)}
            </div>
            <Link to="/about" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
              Learn Our Story <FiArrowRight />
            </Link>
          </AnimatedSection>

          <AnimatedSection className="why-img-wrap" direction="right" delay={0.2}>
            <div className="why-img-stack">
              <img
                src="https://images.unsplash.com/photo-1666000740128-ce1ad9847ca0?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Workshop"
                className="why-img-main"
              />
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
                alt="Interior"
                className="why-img-float"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* USP Premium Ply Banner */}
      <section className="section ply-banner">
        <AnimatedSection className="ply-content">
          <span className="section-tag light">Flagship Product</span>
          <h2>USB Premium Ply</h2>
          <p>
            Made from finest A+ grade hardwood. Termite & borer resistant.
            100% distort-free with <strong>8-year warranty</strong>. The ideal
            solution for modern home, office or retail interiors.
          </p>
          <Link to="/products" className="btn-primary">Discover Premium Ply <FiArrowRight /></Link>
        </AnimatedSection>
        <AnimatedSection className="ply-img" direction="right" delay={0.2}>
          <img
            src="https://images.unsplash.com/photo-1611491064644-a9ff17219a53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBseXdvb2R8ZW58MHx8MHx8fDA%3D"
            alt="Premium Plywood"
          />
        </AnimatedSection>
      </section>

      {/* Group Companies */}
      <section className="section group-section">
        <AnimatedSection className="section-header">
          <span className="section-tag">Our Ecosystem</span>
          <h2>Group Companies</h2>
        </AnimatedSection>
        <div className="group-grid">
          {['Wantspace Real Estate Services', 'Design Block – Interior Solutions', 'USB Sales and Services - interior, exterior products and Turnkey projects', 'Pritvi Mitr- Industrial and Domestic Scrap Recyclers', 'Savithri Devi Memorial Charitable Trust (R)'].map((c, i) => (
            <AnimatedSection key={c} delay={i * 0.08} className="group-card">
             
              <span>{c}</span>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <AnimatedSection className="cta-content">
          <h2>Ready to build something beautiful?</h2>
          <p>Visit our showroom or call our experts today.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn-primary">Contact Us <FiArrowRight /></Link>
            <a href="tel:+919686141856" className="btn-outline-white"> <IoCallSharp />+91 96861 41856</a>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}
