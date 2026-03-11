import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import AnimatedSection from '../components/AnimatedSection';
import './Products.css';

const categories = [
  {
    id: 'plywood',
    name: 'Plywood, Laminates & Veneers',
    icon: '🪵',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
    desc: 'Commercial and waterproof plywood, veneers and laminates in various shades, colors and patterns catering to architects, interior designers & decorators.',
    items: ['MR Plywood', 'BWR Plywood', 'Film Faced Shuttering Plywood', 'USP Premium Ply', 'Decorative Veneers', 'High-Gloss Laminates', 'Matte Laminates', 'Hard Boards', 'Soft Boards', 'MDF Boards', 'Particle Boards'],
  },
  {
    id: 'flooring',
    name: 'Laminated & Vinyl Flooring',
    icon: '🏠',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80',
    desc: 'Modern laminated and vinyl flooring options from renowned brands. We also provide professional installation services through a skilled technical team.',
    items: ['Laminated Wooden Flooring', 'Vinyl Plank Flooring', 'SPC Flooring', 'WPC Flooring', 'Herringbone Patterns', 'Anti-Slip Variants'],
  },
  {
    id: 'wallpapers',
    name: 'Wallpapers',
    icon: '🖼',
    img: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=900&q=80',
    desc: 'Create stylish interiors with our wide range of wallpapers in stunning patterns and designs. Installation services available.',
    items: ['Textured Wallpapers', 'Floral & Nature Prints', 'Geometric Patterns', '3D Wallpapers', 'Mural Wallpapers', 'Commercial Grade'],
  },
  {
    id: 'interior',
    name: 'Interior Solutions',
    icon: '🎨',
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80',
    desc: 'Complete interior solutions including design, supply, installation and execution. Convert business plans into facility plans, capital expenditure plans and improve work environments.',
    items: ['Office Interiors', 'Residential Interiors', 'Retail Store Fit-Outs', 'Site Selection Studies', 'Property Analysis', 'Kitchen Interiors', 'Modular Kitchens', 'Kitchen Baskets & Hardware'],
  },
  {
    id: 'hardware',
    name: 'Hardware & Adhesives',
    icon: '🔩',
    img: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=900&q=80',
    desc: 'Complete range of hardware, adhesives, and beadings for furniture and interior applications.',
    items: ['Furniture Hardware', 'Hinges & Handles', 'Adhesives & Glues', 'Beadings & Trims', 'Screws & Fasteners', 'Photo Framings', 'Lamination Materials'],
  },
  {
    id: 'chemicals',
    name: 'Industrial Acids & Chemicals',
    icon: '⚗️',
    img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=80',
    desc: 'Leading supplier of industrial chemicals in Dakshina Kannada, stocking products from reputed brands for commercial applications.',
    items: ['Industrial Acids', 'Industrial Dyes', 'Metal Fabrication Chemicals', 'Soap Industry Chemicals', 'Plastic Industry Chemicals', 'Plywood Industry Chemicals'],
  },
];

export default function Products() {
  const [active, setActive] = useState(categories[0]);

  return (
    <main className="products-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-overlay" />
        <AnimatedSection className="page-hero-content">
          <span className="section-tag light">Our Offerings</span>
          <h1>Product Categories</h1>
          <p>Explore our comprehensive range of premium building materials and solutions.</p>
        </AnimatedSection>
      </section>

      {/* Category Tabs */}
      <section className="cat-tabs-section">
        <div className="cat-tabs">
          {categories.map((c) => (
            <button
              key={c.id}
              className={`cat-tab ${active.id === c.id ? 'active' : ''}`}
              onClick={() => setActive(c)}
            >
              <span>{c.icon}</span> {c.name}
            </button>
          ))}
        </div>
      </section>

      {/* Category Detail */}
      <section className="cat-detail-section">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            className="cat-detail"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45 }}
          >
            <div className="cat-detail-img">
              <img src={active.img} alt={active.name} />
            </div>
            <div className="cat-detail-body">
              <span className="cat-icon-big">{active.icon}</span>
              <h2>{active.name}</h2>
              <p>{active.desc}</p>
              <h4>Available Products</h4>
              <ul className="items-list">
                {active.items.map((item) => (
                  <li key={item}><span className="item-dot" />{item}</li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
                Enquire Now <FiArrowRight />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* All Products Quick Grid */}
      <section className="all-products-section">
        <AnimatedSection className="section-header">
          <span className="section-tag">Full Catalogue</span>
          <h2>All Products at a Glance</h2>
        </AnimatedSection>
        <div className="all-products-grid">
          {['Plywoods','Veneers','Laminates','Beadings','Adhesives','Hardwares','Kitchen Baskets','Wooden Floorings','Vinyl Floorings','Wall Papers','Hard Boards & Soft Boards','MDF & Particle Boards','Photo Framings & Lamination Materials','Industrial Acids, Dyes & Chemicals'].map((p, i) => (
            <AnimatedSection key={p} delay={i * 0.04} className="all-product-chip">
              {p}
            </AnimatedSection>
          ))}
        </div>
      </section>
    </main>
  );
}
