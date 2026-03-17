// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FiChevronDown, FiEye } from 'react-icons/fi';
// import { Link } from 'react-router-dom';
// import { plywoodTabs } from '../data/plywoodData';
// import './PlywoodDropdown.css';

// export default function PlywoodDropdown() {
//   const [activeTab, setActiveTab] = useState(plywoodTabs[0]);
//   const [open, setOpen] = useState(true);

//   return (
//     <section className="ply-wrapper">
//       {/* Header row with dropdown toggle */}
//       <button
//         className="ply-header"
//         onClick={() => setOpen((o) => !o)}
//       >
//         <div>
//           <span className="ply-title">Plywood Products</span>
//           <p className="ply-subtitle">
//             Browse all plywood variants like marine, film faced, hardwood and waterproof grades.
//           </p>
//         </div>
//         <FiChevronDown
//           size={20}
//           className={`ply-chevron ${open ? 'open' : ''}`}
//         />
//       </button>

//       <AnimatePresence initial={false}>
//         {open && (
//           <motion.div
//             className="ply-content"
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             {/* Tabs row */}
//             <div className="ply-tabs">
//               {plywoodTabs.map((tab) => (
//                 <button
//                   key={tab.id}
//                   className={`ply-tab ${activeTab.id === tab.id ? 'active' : ''}`}
//                   onClick={() => setActiveTab(tab)}
//                 >
//                   {tab.label}
//                 </button>
//               ))}
//             </div>

//             {/* Active tab body */}
//             <div className="ply-body">
//               <div className="ply-desc">
//                 <h3>{activeTab.label}</h3>
//                 <p>{activeTab.description}</p>
//               </div>

//               <div className="ply-products-grid">
//                 {activeTab.products.map((p) => (
//                   <Link
//                     key={p.id}
//                     to={`/products/plywood/${p.id}`}
//                     className="ply-card-link"
//                   >
//                     <div className="ply-card">
//                       <div className="ply-img-wrap">
//                         <img src={p.image} alt={p.name} loading="lazy" />
//                       </div>
//                       <div className="ply-card-body">
//                         <h4>{p.name}</h4>

//                         {p.price && (
//                           <p className="ply-price">
//                             ₹ {p.price.toLocaleString('en-IN')}
//                             {p.unit && <span> {p.unit}</span>}
//                           </p>
//                         )}

//                         <button
//                           type="button"
//                           className="ply-view-btn"
//                         >
//                           <FiEye size={14} />
//                           View
//                         </button>
//                       </div>
//                     </div>
//                   </Link>
//                 ))}

//                 {activeTab.products.length === 0 && (
//                   <div className="ply-empty">
//                     <p>
//                       No products added yet. Add them in <code>plywoodData.js</code>.
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiEye, FiSearch, FiFilter } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { plywoodProducts, getUniqueCategories, filterProducts } from '../data/plywoodData';
import './PlywoodDropdown.css';

const PRODUCTS_PER_PAGE = 24;

// Build tab objects from categories (mirrors old plywoodTabs shape)
const buildTabs = () => {
  const categories = getUniqueCategories();
  return [
    { id: 'all', label: 'All Products', description: 'Browse our complete range of plywood products across all grades and brands.' },
    ...categories.map((cat) => ({
      id: cat.toLowerCase().replace(/\s+/g, '-'),
      label: cat,
      description: getCategoryDescription(cat),
    })),
  ];
};

function getCategoryDescription(cat) {
  const desc = {
    'Marine Plywood': 'BWP Grade (IS:710) — 100% waterproof, ideal for kitchens, bathrooms, and coastal areas. Phenol Formaldehyde resin bonded with lifetime warranty.',
    'BWP Grade Plywood': 'Boiling Water Proof plywood that withstands 72+ hours of boiling water. Perfect for water tanks, terraces, and high-humidity zones.',
    'MR Grade Plywood': 'Moisture Resistant interior-grade plywood bonded with Urea Formaldehyde resin. Best for furniture, wardrobes, and dry indoor applications.',
    'Blockboard': 'Lightweight softwood-core board sandwiched between hardwood veneers. 15–25% lighter than plywood — ideal for doors, shelves, and large panels.',
    'Fire Retardant': 'Chemically treated plywood that delays ignition and reduces smoke. Meets Euro Class B/C fire ratings for commercial and public spaces.',
    'Flexible Plywood': 'Specially oriented veneers allow bending in one or both directions. Perfect for curved furniture, arches, and designer interiors.',
    'Commercial Plywood': 'Budget-friendly general-purpose plywood for non-structural interior applications, packaging, and temporary partitions.',
    'General Plywood': 'Versatile cross-laminated hardwood plywood for furniture, cabinetry, paneling, and general carpentry.',
  };
  return desc[cat] || `Browse all ${cat} products.`;
}

const tabs = buildTabs();

export default function PlywoodDropdown() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [open, setOpen] = useState(true);
  const [search, setSearch] = useState('');
  const [brandFilter, setBrandFilter] = useState('');
  const [thicknessFilter, setThicknessFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filtered products for active tab
  const tabProducts = useMemo(() => {
    const categoryFilter = activeTab.id === 'all' ? '' : activeTab.label;
    return filterProducts({
      category: categoryFilter,
      search,
      brand: brandFilter,
      thickness: thicknessFilter,
    });
  }, [activeTab, search, brandFilter, thicknessFilter]);

  // Unique brands and thicknesses for current tab
  const brands = useMemo(() => {
    const categoryFilter = activeTab.id === 'all' ? '' : activeTab.label;
    const base = categoryFilter
      ? plywoodProducts.filter((p) => p.category === categoryFilter)
      : plywoodProducts;
    return [...new Set(base.map((p) => p.brand))].sort();
  }, [activeTab]);

  const thicknesses = useMemo(() => {
    const categoryFilter = activeTab.id === 'all' ? '' : activeTab.label;
    const base = categoryFilter
      ? plywoodProducts.filter((p) => p.category === categoryFilter)
      : plywoodProducts;
    return [...new Set(base.map((p) => p.thickness))]
      .filter((t) => t !== 'N/A')
      .sort((a, b) => parseInt(a) - parseInt(b));
  }, [activeTab]);

  // Pagination
  const totalPages = Math.ceil(tabProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = tabProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
    setSearch('');
    setBrandFilter('');
    setThicknessFilter('');
  };

  const handleFilterChange = (setter) => (e) => {
    setter(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section className="ply-wrapper">
      {/* Header */}
      <button className="ply-header" onClick={() => setOpen((o) => !o)}>
        <div>
          <span className="ply-title">Plywood Products</span>
          <p className="ply-subtitle">
            Browse all plywood variants like marine, film faced, hardwood and waterproof grades.
          </p>
        </div>
        <FiChevronDown size={20} className={`ply-chevron ${open ? 'open' : ''}`} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="ply-content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Category Tabs */}
            <div className="ply-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`ply-tab ${activeTab.id === tab.id ? 'active' : ''}`}
                  onClick={() => handleTabChange(tab)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab description */}
            {/* <div className="ply-desc">
              <h3>{activeTab.label}</h3>
              <p>{activeTab.description}</p>
            </div> */}

            {/* Filters Row */}
            <div className="ply-filters">
              {/* Search */}
              <div className="ply-search-wrap">
                <FiSearch size={15} />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={handleFilterChange(setSearch)}
                />
              </div>

              {/* Brand */}
              <select value={brandFilter} onChange={handleFilterChange(setBrandFilter)}>
                <option value="">All Brands</option>
                {brands.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>

              {/* Thickness */}
              <select value={thicknessFilter} onChange={handleFilterChange(setThicknessFilter)}>
                <option value="">All Thickness</option>
                {thicknesses.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>

              {/* Clear */}
              {(search || brandFilter || thicknessFilter) && (
                <button
                  className="ply-clear-btn"
                  onClick={() => {
                    setSearch('');
                    setBrandFilter('');
                    setThicknessFilter('');
                    setCurrentPage(1);
                  }}
                >
                  Clear
                </button>
              )}

              {/* <span className="ply-count">
                {tabProducts.length} products
              </span> */}
            </div>

            {/* Products Grid */}
            <div className="ply-body">
              <div className="ply-products-grid">
                {paginatedProducts.length > 0 ? (
                  paginatedProducts.map((p) => (
                    <Link
                      key={p.id}
                      to={`/products/plywood/${p.id}`}
                      className="ply-card-link"
                    >
                      <div className="ply-card">
                        <div className="ply-img-wrap">
                          <img
                            src={p.image}
                            alt={p.name}
                            loading="lazy"
                            onError={(e) => {
                              e.target.src =
                                'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&q=80';
                            }}
                          />
                          <span className="ply-badge">{p.category}</span>
                        </div>
                        <div className="ply-card-body">
                          <p className="ply-brand">{p.brand}</p>
                          <h4>{p.name}</h4>
                          <p className="ply-thickness">{p.thickness}</p>
                          {/* {p.rating > 0 && (
                            <p className="ply-rating">⭐ {p.rating} ({p.ratingCount})</p>
                          )} */}
                          <button type="button" className="ply-view-btn">
                            <FiEye size={14} /> View
                          </button>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="ply-empty">
                    <p>No products found. Try adjusting your filters.</p>
                  </div>
                )}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="ply-pagination">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => p - 1)}
                  >
                    Previous
                  </button>

                  <span>Page {currentPage} of {totalPages}</span>

                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((p) => p + 1)}
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
