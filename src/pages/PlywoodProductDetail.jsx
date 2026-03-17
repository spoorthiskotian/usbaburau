import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { plywoodProducts } from '../data/plywoodData';
import { FiArrowLeft, FiStar } from 'react-icons/fi';
import './PlywoodProductDetail.css';

export default function PlywoodProductDetail() {
  const { productId } = useParams();
  const product = plywoodProducts.find((p) => p.id === productId);

  if (!product) {
    return (
      <main className="ppd-page">
        <div className="ppd-inner">
          <p style={{ color: 'var(--gray)', marginTop: '3rem' }}>Product not found.</p>
          <Link to="/products" className="ppd-back">
            <FiArrowLeft /> Back to Products
          </Link>
        </div>
      </main>
    );
  }

  const keyFeatures = {
    'Marine Plywood': [
      '100% Waterproof — withstands 72+ hours of boiling water',
      'Phenol Formaldehyde (PF) resin for superior bonding',
      'Ideal for kitchens, bathrooms, and marine applications',
      'Lifetime warranty against delamination',
      'Borer and termite resistant',
    ],
    'BWP Grade Plywood': [
      'Boiling Water Proof — exceeds IS:710 standards',
      'Suitable for water tanks, terraces, and wet areas',
      'Superior moisture resistance',
      'Long-lasting structural durability',
    ],
    'MR Grade Plywood': [
      'Moisture resistant for interior use',
      'Cost-effective solution for everyday furniture',
      'Smooth surface ready for laminates and paints',
      'Ideal for wardrobes, cabinets, and partitions',
    ],
    Blockboard: [
      '15–25% lighter than equivalent thickness plywood',
      'Excellent for doors, long shelves, and large panels',
      'Superior screw-holding capacity on face direction',
      'Cost-effective for wide surface applications',
    ],
    'Fire Retardant': [
      'Delays ignition and slows lateral flame spread',
      'Low smoke and toxic gas emission',
      'Meets Euro Class B/C fire ratings',
      'Ideal for schools, hospitals, and commercial buildings',
    ],
    'Flexible Plywood': [
      'Bendable in one or both directions without cracking',
      'Perfect for arches, curves, and designer interiors',
      'Specially oriented veneer arrangement',
      'Smooth surface ready for veneering or lamination',
    ],
    'Commercial Plywood': [
      'Budget-friendly for non-structural applications',
      'Suitable for packaging and temporary partitions',
      'Easy to cut and work with standard tools',
    ],
    'General Plywood': [
      'Cross-laminated hardwood veneers for stability',
      'Good all-round structural performance',
      'Smooth finish — paint and laminate ready',
      'Suitable for furniture, cabinetry, and paneling',
    ],
  };

  const features = keyFeatures[product.category] || keyFeatures['General Plywood'];

  return (
    <main className="ppd-page">
      <div className="ppd-inner">
        {/* Back */}
        <Link to="/products" className="ppd-back">
          <FiArrowLeft /> Back to Products
        </Link>

        <div className="ppd-layout">
          {/* Image */}
          <div className="ppd-img-wrap">
            <img
              src={product.image}
              alt={product.name}
              onError={(e) => {
                e.target.src =
                  'https://images.unsplash.com/photo-1593085260707-5377ba37f868?q=80&w=923&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
              }}
            />
          </div>

          {/* Info */}
          <div className="ppd-info">
            {/* Title + badge */}
            <div className="ppd-header">
              <h1>{product.name}</h1>
              <span className="ppd-category-badge">{product.category}</span>
            </div>

            {/* Brand */}
            <p className="ppd-brand">
              <strong>Brand:</strong> {product.brand}
            </p>

            {/* Rating */}
            {/* {product.rating > 0 && (
              <div className="ppd-rating-section">
                <div className="rating-stars">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={i < Math.round(product.rating) ? 'filled' : ''}
                    />
                  ))}
                </div>
                <span className="rating-value">{product.rating}</span>
                <span className="rating-count">({product.ratingCount})</span>
              </div>
            )} */}

            {/* Specifications */}
            {/* <div className="ppd-specs">
              <h2>Specifications &amp; Details</h2>
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="spec-item">
                  <strong>
                    {key
                      .replace(/([A-Z])/g, ' $1')
                      .replace(/^./, (s) => s.toUpperCase())
                      .trim()}
                    :
                  </strong>
                  <span>{value}</span>
                </div>
              ))}
            </div> */}
            {/* Specifications */}
            <div className="ppd-specs">
              <h2>Specifications &amp; Details</h2>
              <div className="ppd-specs-list">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="spec-item">
                    <strong>
                      {key
                        .replace(/([A-Z])/g, ' $1')
                        .replace(/^./, (s) => s.toUpperCase())
                        .trim()}
                      :
                    </strong>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>


            {/* Description */}
            <div className="ppd-description">
              <h2>Product Description</h2>
              <p>{product.description}</p>
            </div>

            {/* Key Features */}
            <div className="ppd-features">
              <h2>Key Features</h2>
              <ul>
                {features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
