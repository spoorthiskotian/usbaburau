import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  plywoodProducts, 
  getUniqueBrands, 
  getUniqueCategories, 
  getUniqueThicknesses,
  filterProducts 
} from '../data/plywoodData';
import { FiFilter, FiX, FiSearch } from 'react-icons/fi';
import './PlywoodProducts.css';

export default function PlywoodProducts() {
  const [filters, setFilters] = useState({
    brand: '',
    category: '',
    thickness: '',
    search: ''
  });
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 24;

  // Get filter options
  const brands = useMemo(() => getUniqueBrands(), []);
  const categories = useMemo(() => getUniqueCategories(), []);
  const thicknesses = useMemo(() => getUniqueThicknesses(), []);

  // Filter products
  const filteredProducts = useMemo(() => {
    return filterProducts(filters);
  }, [filters]);

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({ ...prev, [filterName]: value }));
    setCurrentPage(1); // Reset to first page
  };

  const clearFilters = () => {
    setFilters({ brand: '', category: '', thickness: '', search: '' });
    setCurrentPage(1);
  };

  const activeFiltersCount = Object.values(filters).filter(v => v !== '').length;

  return (
    <main className="plywood-products-page">
      <div className="products-container">
        {/* Header */}
        <div className="products-header">
          <div className="header-content">
            <h1>Plywood Products</h1>
            <p className="products-count">
              {filteredProducts.length} of {plywoodProducts.length} products
            </p>
          </div>
          <button 
            className="filter-toggle"
            onClick={() => setShowFilters(!showFilters)}
          >
            <FiFilter />
            Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
          </button>
        </div>

        {/* Filters Section */}
        <div className={`filters-section ${showFilters ? 'show' : ''}`}>
          <div className="filters-header">
            <h3>Filter Products</h3>
            <button className="close-filters" onClick={() => setShowFilters(false)}>
              <FiX />
            </button>
          </div>

          {/* Search */}
          <div className="filter-group">
            <label>Search</label>
            <div className="search-input-wrapper">
              <FiSearch />
              <input
                type="text"
                placeholder="Search by name, brand, or category..."
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
              />
            </div>
          </div>

          {/* Brand Filter */}
          <div className="filter-group">
            <label>Brand ({brands.length})</label>
            <select
              value={filters.brand}
              onChange={(e) => handleFilterChange('brand', e.target.value)}
            >
              <option value="">All Brands</option>
              {brands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>

          {/* Category Filter */}
          <div className="filter-group">
            <label>Category ({categories.length})</label>
            <select
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Thickness Filter */}
          <div className="filter-group">
            <label>Thickness ({thicknesses.length})</label>
            <select
              value={filters.thickness}
              onChange={(e) => handleFilterChange('thickness', e.target.value)}
            >
              <option value="">All Thicknesses</option>
              {thicknesses.map(thickness => (
                <option key={thickness} value={thickness}>{thickness}</option>
              ))}
            </select>
          </div>

          {/* Clear Filters */}
          {activeFiltersCount > 0 && (
            <button className="clear-filters-btn" onClick={clearFilters}>
              Clear All Filters
            </button>
          )}
        </div>

        {/* Products Grid */}
        {currentProducts.length > 0 ? (
          <>
            <div className="products-grid">
              {currentProducts.map(product => (
                <Link 
                  key={product.id} 
                  to={`/products/plywood/${product.id}`}
                  className="product-card"
                >
                  <div className="product-image">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1593085260707-5377ba37f868?q=80&w=923&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
                      }}
                    />
                    <span className="category-badge">{product.category}</span>
                  </div>
                  
                  <div className="product-info">
                    <p className="product-brand">{product.brand}</p>
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-thickness">{product.thickness}</p>
                    
                    <div className="product-rating">
                      <span className="rating-stars">{'⭐'.repeat(Math.round(product.rating))}</span>
                      <span className="rating-value">{product.rating}</span>
                      <span className="rating-count">({product.ratingCount})</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="pagination">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="pagination-btn"
                >
                  Previous
                </button>
                
                <div className="pagination-numbers">
                  {[...Array(totalPages)].map((_, idx) => {
                    const pageNum = idx + 1;
                    // Show first page, last page, current page, and pages around current
                    if (
                      pageNum === 1 ||
                      pageNum === totalPages ||
                      (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`pagination-number ${currentPage === pageNum ? 'active' : ''}`}
                        >
                          {pageNum}
                        </button>
                      );
                    } else if (pageNum === currentPage - 2 || pageNum === currentPage + 2) {
                      return <span key={pageNum} className="pagination-ellipsis">...</span>;
                    }
                    return null;
                  })}
                </div>

                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="pagination-btn"
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="no-products">
            <p>No products found matching your filters.</p>
            <button onClick={clearFilters} className="btn-primary">
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}