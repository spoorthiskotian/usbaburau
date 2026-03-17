// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FiArrowRight } from 'react-icons/fi';
// import AnimatedSection from '../components/AnimatedSection';
// import './Products.css';

// const categories = [
//   {
//     id: 'plywood',
//     name: 'Plywood, Laminates & Veneers',
//     icon: '🪵',
//     img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
//     desc: 'Commercial and waterproof plywood, veneers and laminates in various shades, colors and patterns catering to architects, interior designers & decorators.',
//     items: ['MR Plywood', 'BWR Plywood', 'Film Faced Shuttering Plywood', 'USP Premium Ply', 'Decorative Veneers', 'High-Gloss Laminates', 'Matte Laminates', 'Hard Boards', 'Soft Boards', 'MDF Boards', 'Particle Boards'],
//   },
//   {
//     id: 'flooring',
//     name: 'Laminated & Vinyl Flooring',
//     icon: '🏠',
//     img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80',
//     desc: 'Modern laminated and vinyl flooring options from renowned brands. We also provide professional installation services through a skilled technical team.',
//     items: ['Laminated Wooden Flooring', 'Vinyl Plank Flooring', 'SPC Flooring', 'WPC Flooring', 'Herringbone Patterns', 'Anti-Slip Variants'],
//   },
//   {
//     id: 'wallpapers',
//     name: 'Wallpapers',
//     icon: '🖼',
//     img: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=900&q=80',
//     desc: 'Create stylish interiors with our wide range of wallpapers in stunning patterns and designs. Installation services available.',
//     items: ['Textured Wallpapers', 'Floral & Nature Prints', 'Geometric Patterns', '3D Wallpapers', 'Mural Wallpapers', 'Commercial Grade'],
//   },
//   {
//     id: 'interior',
//     name: 'Interior Solutions',
//     icon: '🎨',
//     img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80',
//     desc: 'Complete interior solutions including design, supply, installation and execution. Convert business plans into facility plans, capital expenditure plans and improve work environments.',
//     items: ['Office Interiors', 'Residential Interiors', 'Retail Store Fit-Outs', 'Site Selection Studies', 'Property Analysis', 'Kitchen Interiors', 'Modular Kitchens', 'Kitchen Baskets & Hardware'],
//   },
//   {
//     id: 'hardware',
//     name: 'Hardware & Adhesives',
//     icon: '🔩',
//     img: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=900&q=80',
//     desc: 'Complete range of hardware, adhesives, and beadings for furniture and interior applications.',
//     items: ['Furniture Hardware', 'Hinges & Handles', 'Adhesives & Glues', 'Beadings & Trims', 'Screws & Fasteners', 'Photo Framings', 'Lamination Materials'],
//   },
//   {
//     id: 'chemicals',
//     name: 'Industrial Acids & Chemicals',
//     icon: '⚗️',
//     img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=80',
//     desc: 'Leading supplier of industrial chemicals in Dakshina Kannada, stocking products from reputed brands for commercial applications.',
//     items: ['Industrial Acids', 'Industrial Dyes', 'Metal Fabrication Chemicals', 'Soap Industry Chemicals', 'Plastic Industry Chemicals', 'Plywood Industry Chemicals'],
//   },
// ];

// export default function Products() {
//   const [active, setActive] = useState(categories[0]);

//   return (
//     <main className="products-page">
//       {/* Hero */}
//       <section className="page-hero">
//         <div className="page-hero-overlay" />
//         <AnimatedSection className="page-hero-content">
//           <span className="section-tag light">Our Offerings</span>
//           <h1>Product Categories</h1>
//           <p>Explore our comprehensive range of premium building materials and solutions.</p>
//         </AnimatedSection>
//       </section>

//       {/* Category Tabs */}
//       <section className="cat-tabs-section">
//         <div className="cat-tabs">
//           {categories.map((c) => (
//             <button
//               key={c.id}
//               className={`cat-tab ${active.id === c.id ? 'active' : ''}`}
//               onClick={() => setActive(c)}
//             >
//               <span>{c.icon}</span> {c.name}
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* Category Detail */}
//       <section className="cat-detail-section">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={active.id}
//             className="cat-detail"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.45 }}
//           >
//             <div className="cat-detail-img">
//               <img src={active.img} alt={active.name} />
//             </div>
//             <div className="cat-detail-body">
//               <span className="cat-icon-big">{active.icon}</span>
//               <h2>{active.name}</h2>
//               <p>{active.desc}</p>
//               <h4>Available Products</h4>
//               <ul className="items-list">
//                 {active.items.map((item) => (
//                   <li key={item}><span className="item-dot" />{item}</li>
//                 ))}
//               </ul>
//               <Link to="/contact" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
//                 Enquire Now <FiArrowRight />
//               </Link>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </section>

//       {/* All Products Quick Grid */}
//       <section className="all-products-section">
//         <AnimatedSection className="section-header">
//           <span className="section-tag">Full Catalogue</span>
//           <h2>All Products at a Glance</h2>
//         </AnimatedSection>
//         <div className="all-products-grid">
//           {['Plywoods','Veneers','Laminates','Beadings','Adhesives','Hardwares','Kitchen Baskets','Wooden Floorings','Vinyl Floorings','Wall Papers','Hard Boards & Soft Boards','MDF & Particle Boards','Photo Framings & Lamination Materials','Industrial Acids, Dyes & Chemicals'].map((p, i) => (
//             <AnimatedSection key={p} delay={i * 0.04} className="all-product-chip">
//               {p}
//             </AnimatedSection>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiSearch, FiX ,FiPhone} from 'react-icons/fi';
import PlywoodDropdown from '../components/PlywoodDropdown.jsx';
import AnimatedSection from '../components/AnimatedSection';
import './Products.css';

const categories = [
  {
    id: 'plywood',
    name: 'Plywood',
    icon: '🪵',
    img: 'https://images.unsplash.com/photo-1584950967742-2d5ddfa3c840?q=80&w=763&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tagline: 'MR, BWR & Film Faced Shuttering Plywood',
    description: `U.S. Babu Rau deals in a wide range of commercial and waterproof plywood manufactured from thin rotary cut sheets of veneer, bonded under heat and pressure with strong adhesives. Plywood has been one of the most ubiquitous building products for decades.

Our flagship USB Premium Ply is produced from high-quality treated hardwood and un-extended BWP type phenolic resin using state-of-the-art technology. Made from 100% hardwood, USB Premium Ply has high dimensional stability and is 100% distort-free. It comes with an industry-leading 8-year warranty.`,
    specs: [
      { label: 'Types', value: 'MR (Moisture Resistant), BWR (Boiling Water Resistant), Film Faced Shuttering' },
      { label: 'Grade', value: 'A+ Grade Timber – USP Premium Ply' },
      { label: 'Warranty', value: '8 Years (USP Premium Ply)' },
      { label: 'Resistance', value: 'Termite & Borer Resistant, 100% Distort-Free' },
      { label: 'Application', value: 'Home, Office, Retail Interiors, Shuttering' },
      { label: 'Technology', value: 'State-of-the-art BWP phenolic resin bonding' },
    ],
    items: ['MR Plywood', 'BWR Plywood', 'Film Faced Shuttering Plywood', 'USP Premium Ply', 'Commercial Plywood', 'Marine Plywood'],
  },
  {
    id: 'veneers',
    name: 'Veneers',
    icon: '🌿',
    img: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=1920&q=80',
    tagline: 'Natural & Engineered Decorative Veneers',
    description: `Veneers are thin slices of natural wood that are glued onto core panels to produce flat panels such as doors, tops, and panels for cabinets, parquet floors, and parts of furniture. U.S. Babu Rau offers a diverse portfolio of veneer brands that cater to the increasing and diverse demands of architects, interior designers & decorators.

Our veneers come in various natural wood species and exotic patterns, giving your interiors an authentic wood look with the practical advantages of engineered wood products. The wide assortment comes in different price points, ensuring there is a product for everyone.`,
    specs: [
      { label: 'Types', value: 'Natural Veneers, Engineered Veneers, Reconstituted Veneers' },
      { label: 'Finish', value: 'Raw, Pre-polished, Pre-finished' },
      { label: 'Application', value: 'Furniture, Doors, Cabinets, Wall Paneling' },
    ],
    items: ['Teak Veneer', 'Walnut Veneer', 'Oak Veneer', 'Maple Veneer', 'Wenge Veneer', 'Engineered Veneers', 'Reconstituted Veneers'],
  },
  {
    id: 'laminates',
    name: 'Laminates',
    icon: '✨',
    img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&q=80',
    tagline: 'High-Pressure Laminates in All Shades & Patterns',
    description: `Laminates are a versatile and durable surface material widely used in interior design. U.S. Babu Rau stocks laminates in various shades, colors and patterns to suit every design requirement — from understated solids to vibrant textures and realistic wood grains.

High-Pressure Laminates (HPL) are made by fusing together layers of kraft paper with resin under high pressure and temperature. They are scratch-resistant, easy to maintain, and ideal for both residential and commercial interiors. Our collection includes matte, gloss, texture, and metallic finishes.`,
    specs: [
      { label: 'Types', value: 'High-Pressure Laminates (HPL), Compact Laminates, Post-form Laminates' },
      { label: 'Finishes', value: 'Matte, Gloss, Suede, Metallic, Texture, Wood Grain' },
      { label: 'Application', value: 'Furniture, Countertops, Wall Paneling, Flooring' },
      { label: 'Properties', value: 'Scratch-resistant, Heat-resistant, Easy to clean' },
    ],
    items: ['Matte Laminates', 'High-Gloss Laminates', 'Wood Grain Laminates', 'Solid Color Laminates', 'Metallic Laminates', 'Textured Laminates', 'Anti-fingerprint Laminates'],
  },
  {
    id: 'flooring',
    name: 'Wooden & Vinyl Flooring',
    icon: '🏠',
    img: 'https://images.unsplash.com/photo-1642072585583-d5f0c313d169?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tagline: 'Laminated, Engineered & Vinyl Plank Flooring',
    description: `These days there are so many different kinds of flooring materials available that most customers are breaking away from traditional materials and opting for new options like Laminated and Vinyl flooring. U.S. Babu Rau is known to offer renowned brands of highest quality with regard to patterns and designs.

Laminated wooden flooring replicates the look and feel of real hardwood at a fraction of the cost, while Vinyl (LVT/SPC/WPC) flooring offers superior water resistance and durability. In addition, we offer the service of installation for both flooring and wallpapers through a skilled technical team.`,
    specs: [
      { label: 'Types', value: 'Laminated Wooden, Engineered Wood, LVT, SPC, WPC Vinyl Flooring' },
      { label: 'Installation', value: 'Click-lock system; Professional installation available' },
      { label: 'Properties', value: 'Water-resistant (Vinyl), Scratch-resistant, Anti-slip options' },
      { label: 'Application', value: 'Homes, Offices, Commercial Spaces, Hospitals' },
    ],
    items: ['Laminated Wooden Flooring', 'Engineered Hardwood Flooring', 'LVT Vinyl Flooring', 'SPC Flooring', 'WPC Flooring', 'Herringbone Pattern Flooring', 'Anti-Slip Flooring'],
  },
  {
    id: 'wallpapers',
    name: 'Wallpapers',
    icon: '🖼',
    img: 'https://images.unsplash.com/photo-1489171078254-c3365d6e359f?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tagline: 'Designer Wallpapers for Stylish Interiors',
    description: `Wallpaper is achieving popularity due to its functionality and its ability to create stylish interiors. U.S. Babu Rau offers a wide range of wallpapers from renowned brands, known for their highest quality with regard to patterns and designs.

From subtle textures and nature-inspired prints to bold geometric patterns and stunning 3D murals, our wallpaper collection transforms any space into a visual masterpiece. We also provide professional installation services through a skilled technical team, ensuring perfect application every time.`,
    specs: [
      { label: 'Types', value: 'Vinyl, Non-woven, Fabric, Embossed, 3D Wallpapers' },
      { label: 'Patterns', value: 'Geometric, Floral, Abstract, Wood Grain, Marble, Mural' },
      { label: 'Installation', value: 'Professional installation team available' },
      { label: 'Properties', value: 'Washable, Peel-resistant, Fade-resistant' },
      { label: 'Application', value: 'Living Rooms, Bedrooms, Offices, Feature Walls' },
    ],
    items: ['Vinyl Wallpapers', 'Non-woven Wallpapers', 'Textured Wallpapers', 'Floral & Nature Prints', 'Geometric Patterns', '3D Wallpapers', 'Mural Wallpapers', 'Commercial Grade Wallpapers'],
  },
  {
    id: 'interior',
    name: 'Interior Solutions',
    icon: '🎨',
    img: 'https://plus.unsplash.com/premium_photo-1680351370944-c938d9fc4dad?q=80&w=1278&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tagline: 'End-to-End Design, Supply & Execution',
    description: `U.S. Babu Rau provides complete interior solutions which includes design, supplying materials, installation and execution. The company has vast experience and technical knowledge to convert business plans into facility plans and capital expenditure plans.

We help improve the visual and work environment of offices, prepare site selection studies and property analysis. Whether it's a luxurious home interior, a modern corporate office, or a vibrant retail space — our team handles everything from concept to completion with precision and excellence.`,
    specs: [
      { label: 'Services', value: 'Design Consultation, Material Supply, Installation, Execution' },
      { label: 'Team', value: 'Experienced architects, designers, and skilled installation technicians' },
    ],
    items: ['Office Interiors', 'Residential Interiors', 'Retail Store Fit-Outs', 'Hospitality Interiors', 'Modular Kitchens', 'Kitchen Baskets & Hardware', 'False Ceilings', 'Site Selection Studies'],
  },
  {
    id: 'beadings',
    name: 'Beadings & Hardwares',
    icon: '🔩',
    img: 'https://images.unsplash.com/photo-1676907228185-6869277a9f8f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tagline: 'Quality Furniture Hardware & Accessories',
    description: `A complete range of furniture hardware, beadings, adhesives, and accessories for all interior applications. U.S. Babu Rau stocks hardware from reputed brands to complement your woodwork and interior installations.

Beadings are used as decorative trims and edge covers in furniture and paneling, while hardware like hinges, handles, and drawer systems ensure smooth and durable functionality. Our adhesives are engineered for strong, long-lasting bonds in furniture manufacturing and interior fit-outs.`,
    specs: [
      { label: 'Hardware', value: 'Hinges, Handles, Drawer Systems, Locks, Channels' },
      { label: 'Beadings', value: 'PVC, Wooden, Aluminum Beadings in various profiles' },
      { label: 'Adhesives', value: 'PVA, Contact, Epoxy, Phenolic adhesives' },
      { label: 'Application', value: 'Furniture Manufacturing, Interior Fit-outs, Cabinetry' },
    ],
    items: ['Furniture Hinges', 'Cabinet Handles', 'Drawer Systems', 'PVC Beadings', 'Wooden Beadings', 'PVA Adhesives', 'Contact Adhesives', 'Kitchen Baskets'],
  },
  {
    id: 'boards',
    name: 'MDF & Particle Boards',
    icon: '📦',
    img: 'https://images.unsplash.com/photo-1593670755950-603e1d6184b9?q=80&w=1063&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tagline: 'Hard Boards, Soft Boards, MDF & Particle Boards',
    description: `Medium Density Fibreboard (MDF) and Particle Boards are engineered wood products widely used in furniture, cabinetry, and interior applications. U.S. Babu Rau stocks a full range of these boards from trusted manufacturers.

MDF offers a smooth surface ideal for painting, veneering, or laminating. Particle boards are cost-effective and versatile for furniture cores. Hard boards and soft boards serve as backing materials, pinboards, and display surfaces in commercial and residential settings.`,
    specs: [
      { label: 'MDF Types', value: 'Plain MDF, Moisture Resistant MDF, Fire Retardant MDF' },
      { label: 'Particle Board', value: 'Plain, Pre-laminated, Moisture Resistant variants' },
      { label: 'Application', value: 'Furniture, Cabinetry, Flooring Underlay, Partitions' },
      { label: 'Boards', value: 'Hard Boards for backing; Soft/Pin Boards for notice boards' },
    ],
    items: ['Plain MDF', 'Moisture Resistant MDF', 'Fire Retardant MDF', 'Pre-laminated Particle Board', 'Plain Particle Board', 'Hard Boards', 'Soft Boards / Pin Boards'],
  },
  {
    id: 'photo',
    name: 'Photo Framings & Lamination',
    icon: '🖼️',
    img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1920&q=80',
    tagline: 'Photo Framing Materials & Lamination Sheets',
    description: `U.S. Babu Rau stocks a wide range of photo framing materials and lamination sheets for both commercial and personal use. From decorative mouldings used in picture frames to industrial-grade lamination films, our range covers all needs.

Lamination materials are used to protect documents, photographs, and printed materials, providing a glossy or matte finish while increasing durability. Our framing materials are available in a variety of styles, widths, and finishes to suit all interior aesthetics.`,
    specs: [
      { label: 'Framing', value: 'Wooden, Aluminium, Decorative Moulding Frames' },
      { label: 'Lamination', value: 'Gloss, Matte, Thermal, Cold Lamination Films' },
      { label: 'Sizes', value: 'Standard and custom sizes available' },
      { label: 'Application', value: 'Photo Framing, Document Protection, Signage, Displays' },
    ],
    items: ['Wooden Moulding Frames', 'Aluminium Frames', 'Gloss Lamination Films', 'Matte Lamination Films', 'Thermal Lamination Sheets', 'Cold Lamination Rolls', 'Custom Frame Profiles'],
  },
  {
    id: 'chemicals',
    name: 'Industrial Acids & Chemicals',
    icon: '⚗️',
    img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1920&q=80',
    tagline: 'Leading Supplier of Industrial Chemicals in Dakshina Kannada',
    description: `U.S. Babu Rau is the leading supplier of industrial chemicals in Dakshina Kannada. We stock different types of chemicals made by reputed brands needed for commercial applications in industries such as metal fabrication, soap, plastic and plywood industries.

With decades of experience in the chemical distribution business — dating back to our founding in 1949 as a Ciba Dyes Ltd. distributor — we have deep expertise in industrial dyes and chemicals for South Canara and North Malabar region. Our products meet strict quality standards and are sourced from certified manufacturers.`,
    specs: [
      { label: 'Acids', value: 'Sulphuric Acid, Hydrochloric Acid, Nitric Acid and more' },
      { label: 'Dyes', value: 'Industrial Dyes for textile, leather, and wood industries' },
      { label: 'Industries Served', value: 'Metal Fabrication, Soap, Plastic, Plywood, Textile' },
    ],
    items: ['Industrial Acids', 'Industrial Dyes', 'Metal Fabrication Chemicals', 'Soap Industry Chemicals', 'Plastic Industry Chemicals', 'Plywood Industry Chemicals', 'Textile Dyes & Chemicals'],
  },
];

export default function Products() {
  const [active, setActive] = useState(categories[0]);
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    if (!search.trim()) return categories;
    const q = search.toLowerCase();
    return categories.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.tagline.toLowerCase().includes(q) ||
        c.items.some((i) => i.toLowerCase().includes(q))
    );
  }, [search]);

  return (
    <main className="products-page">
      {/* Hero */}
      <section className="products-hero">
        <div className="products-hero-overlay" />
        <AnimatedSection className="products-hero-content">
          <span className="ptag">Our Offerings</span>
          <h1>Product Categories</h1>
          <p>Premium building materials, flooring, interior solutions and more — all under one roof.</p>
        </AnimatedSection>
      </section>

      {/* Search */}
      <section className="search-section">
        <div className="search-wrap">
          <FiSearch size={20} color="var(--orange)" />
          <input
            type="text"
            placeholder="Search products, categories..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); }}
          />
          {search && (
            <button className="clear-btn" onClick={() => setSearch('')}>
              <FiX size={18} />
            </button>
          )}
        </div>
        {search && (
          <p className="search-result-count">
            {filtered.length} {filtered.length === 1 ? 'category' : 'categories'} found for "<strong>{search}</strong>"
          </p>
        )}
      </section>

      {/* Main Layout */}
      <section className="products-layout">
        {/* Sidebar */}
        <aside className="cat-sidebar">
          <p className="sidebar-label">All Categories</p>
          <div className="sidebar-list">
            {(search ? filtered : categories).map((c) => (
              <button
                key={c.id}
                className={`sidebar-item ${active.id === c.id ? 'active' : ''}`}
                onClick={() => setActive(c)}
              >

                <span className="sidebar-name">{c.name}</span>
                {active.id === c.id && (
                  <motion.span
                    className="sidebar-indicator"
                    layoutId="indicator"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </aside>

        {/* Detail */}
        <div className="cat-detail-area">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="cat-detail-card"
            >
              {/* Image */}
              <div className="detail-img-wrap">
                <img src={active.img} alt={active.name} loading="lazy" />
                <div className="detail-img-overlay">
                  {/* <span className="detail-icon-big">{active.icon}</span> */}
                  <h2>{active.name}</h2>
                  <p className="detail-tagline">{active.tagline}</p>
                </div>
              </div>

              {/* Body */}
              <div className="detail-body">
                {/* Description */}
                <div className="detail-section">
                  <h3>About this Product</h3>
                  {active.description.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* Specs */}
                <div className="detail-section">
                  <h3>Specifications & Details</h3>
                  <div className="specs-grid">
                    {active.specs.map((s) => (
                      <div key={s.label} className="spec-item">
                        <span className="spec-label">{s.label}</span>
                        <span className="spec-value">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Items */}
                {/* <div className="detail-section">
                  <h3>Available Products</h3>
                  <div className="items-chips">
                    {active.items.map((item) => (
                      <span key={item} className="item-chip">
                        <span className="chip-dot" />{item}
                      </span>
                    ))}
                  </div>
                </div> */}
                {active.id === 'plywood' && (
                  <div >
                    <PlywoodDropdown />
                  </div>
                )}

                {/* CTA */}
                <div className="detail-cta">
                  <Link to="/contact" className="btn-primary">
                    <FiArrowRight size={16} /> Enquire Now
                  </Link>
                  <a href="tel:+918242420949" className="btn-secondary">
                    <FiPhone/> Call an Expert
                  </a>
                </div>
                

              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* All Products Grid */}
      {!search && (
        <section className="all-products-section">
          <AnimatedSection className="ap-header">
            <span className="ptag">Full Catalogue</span>
            <h2>Browse All Products</h2>
          </AnimatedSection>
          <div className="all-products-grid">
            {categories.map((cat, i) => (
              <AnimatedSection
                key={cat.id}
                delay={i * 0.06}
                className="ap-card"
                style={{ cursor: 'pointer' }}
              >
                <button className="ap-card-btn" onClick={() => { setActive(cat); window.scrollTo({ top: 300, behavior: 'smooth' }); }}>
                  <div className="ap-img-wrap">
                    <img src={cat.img} alt={cat.name} loading="lazy" />
                    {/* <div className="ap-overlay">
                      <span>{cat.icon}</span>
                    </div> */}
                  </div>
                  <div className="ap-body">
                    <h4>{cat.name}</h4>
                    <p>{cat.tagline}</p>
                    <span className="ap-link">View Details <FiArrowRight size={13} /></span>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
