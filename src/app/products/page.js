'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Star, ShoppingCart, Filter, Snowflake } from 'lucide-react';

export default function ProductsPage() {
  const catalogProducts = [
    {
      id: "1",
      brand: "Cooper&Hunter",
      name: "Residential Inverter AC ICY III NG R32 Wi-Fi",
      price: 31499,
      rating: 4.5,
      reviews: 12,
      area: "up to 30m2",
      btu: "9",
      image: "/images/ac-1.jpg"
    },
    {
      id: "2",
      brand: "Cooper&Hunter",
      name: "Residential Air Conditioner VIP INVERTER",
      price: 39399,
      rating: 4.8,
      reviews: 24,
      area: "up to 30m2",
      btu: "12",
      image: "/images/ac-2.jpg"
    },
    {
      id: "3",
      brand: "Cooper&Hunter",
      name: "Residential Air Conditioner SUPREME R32",
      price: 43299,
      rating: 4.2,
      reviews: 8,
      area: "30-50m2",
      btu: "12",
      image: "/images/ac-3.jpg"
    },
    {
      id: "4",
      brand: "Daikin",
      name: "High-Performance Split Inverter AC",
      price: 44099,
      rating: 4.9,
      reviews: 45,
      area: "30-50m2",
      btu: "18",
      image: "/images/ac-4.jpg"
    },
    {
      id: "5",
      brand: "Cooper&Hunter",
      name: "Smart Wi-Fi Enabled Inverter AC",
      price: 44099,
      rating: 4.3,
      reviews: 19,
      area: "up to 30m2",
      btu: "9",
      image: "/images/ac-6.jpg"
    },
    {
      id: "6",
      brand: "LG",
      name: "AI Dual Inverter Split Air Conditioner",
      price: 21799,
      rating: 4.6,
      reviews: 31,
      area: "up to 30m2",
      btu: "7",
      image: "/images/ac-1.jpg"
    },
    {
      id: "7",
      brand: "Samsung",
      name: "WindFree Convertible AC Series",
      price: 26899,
      rating: 4.4,
      reviews: 15,
      area: "30-50m2",
      btu: "12",
      image: "/images/ac-2.jpg"
    },
    {
      id: "8",
      brand: "Cooper&Hunter",
      name: "Winemaster Heavy Duty Commercial/Residential AC",
      price: 34999,
      rating: 4.7,
      reviews: 27,
      area: "up to 30m2",
      btu: "9",
      image: "/images/ac-3.jpg"
    }
  ];

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [selectedBtus, setSelectedBtus] = useState([]);
  const [sortBy, setSortBy] = useState('rating');

  const toggleBrand = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const toggleArea = (area) => {
    setSelectedAreas(prev => 
      prev.includes(area) ? prev.filter(a => a !== area) : [...prev, area]
    );
  };

  const toggleBtu = (btu) => {
    setSelectedBtus(prev => 
      prev.includes(btu) ? prev.filter(b => b !== btu) : [...prev, btu]
    );
  };

  const clearAllFilters = () => {
    setSelectedBrands([]);
    setSelectedAreas([]);
    setSelectedBtus([]);
  };

  const filteredProducts = catalogProducts.filter(product => {
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const areaMatch = selectedAreas.length === 0 || selectedAreas.includes(product.area);
    const btuMatch = selectedBtus.length === 0 || selectedBtus.includes(product.btu);
    return brandMatch && areaMatch && btuMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="bg-light min-vh-100 pb-5">
      <div className="container-fluid px-lg-5 px-3 py-4" style={{ maxWidth: '1400px' }}>
        
        {/* Breadcrumb & Colorful Vibrant Header Banner */}
        <div className="mb-4 p-4 rounded-4 shadow-sm text-white position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0b2545 0%, #087cf0 100%)' }}>
          <div className="position-absolute end-0 bottom-0 opacity-10 translate-middle-y me-4 d-none d-md-block">
            <Snowflake size={120} />
          </div>
          <nav aria-label="breadcrumb" style={{ fontSize: '12px' }} className="text-white-50 mb-2">
            <Link href="/" className="text-white-50 text-decoration-none">Home</Link> <span className="mx-1">›</span> 
            <span className="text-white fw-semibold">Residential Air Conditioners</span>
          </nav>
          <h1 className="fw-bold fs-2 text-white mb-2">Residential Air Conditioners</h1>
          <p className="text-white-50 small mb-0" style={{ maxWidth: '600px' }}>
            Explore high-efficiency inverter and split AC models with professional doorstep installation and guaranteed best cooling performance.
          </p>
        </div>

        {/* Header Toolbar Bar (Sorting & Mobile Trigger) */}
        <div className="d-flex flex-wrap justify-content-between align-items-center bg-white p-3 rounded-4 mb-4 gap-3 shadow-sm border">
          
          <div className="d-flex flex-wrap align-items-center gap-2">
            <span className="text-secondary small fw-bold">Showing {sortedProducts.length} items</span>
            
            {(selectedBrands.length > 0 || selectedAreas.length > 0 || selectedBtus.length > 0) && (
              <>
                <button 
                  onClick={clearAllFilters}
                  className="badge bg-danger bg-opacity-10 text-danger border-0 d-inline-flex align-items-center gap-1 px-2.5 py-1.5 cursor-pointer rounded-pill"
                  style={{ fontSize: '11px' }}
                >
                  Clear All <X size={12} />
                </button>
                
                {selectedBrands.map(b => (
                  <span key={b} className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 d-inline-flex align-items-center gap-1 px-2.5 py-1.5 rounded-pill" style={{ fontSize: '11px' }}>
                    {b} <X size={12} className="cursor-pointer" onClick={() => toggleBrand(b)} />
                  </span>
                ))}
                {selectedBtus.map(btu => (
                  <span key={btu} className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 d-inline-flex align-items-center gap-1 px-2.5 py-1.5 rounded-pill" style={{ fontSize: '11px' }}>
                    BTU: {btu} <X size={12} className="cursor-pointer" onClick={() => toggleBtu(btu)} />
                  </span>
                ))}
              </>
            )}
          </div>

          <div className="d-flex align-items-center gap-3 ms-auto ms-md-0">
            {/* Mobile Filter Trigger Button */}
            <button 
              className="btn btn-dark d-lg-none d-flex align-items-center gap-2 btn-sm rounded-pill px-4 py-2 fw-bold shadow-sm"
              type="button" 
              data-bs-toggle="offcanvas" 
              data-bs-target="#mobileFilterOffcanvas"
            >
              <Filter size={15} /> Filters ({selectedBrands.length + selectedAreas.length + selectedBtus.length})
            </button>

            {/* Sort Dropdown */}
            <div className="dropdown">
              <select 
                className="form-select form-select-sm border shadow-none bg-light fw-semibold rounded-pill px-3 py-2"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{ fontSize: '12px', cursor: 'pointer', minWidth: '180px' }}
              >
                <option value="rating">Sort by: Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="row g-4">
          
          {/* Desktop Sidebar Filters */}
          <div className="col-lg-3 d-none d-lg-block">
            <div className="bg-white p-4 rounded-4 shadow-sm border sticky-top" style={{ top: '90px' }}>
              <div className="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom">
                <h5 className="fw-bold mb-0 fs-5 text-dark" style={{ color: '#0b2545' }}>Filters</h5>
                {(selectedBrands.length > 0 || selectedAreas.length > 0 || selectedBtus.length > 0) && (
                  <button onClick={clearAllFilters} className="btn btn-link btn-sm text-decoration-none p-0 text-danger fw-bold" style={{ fontSize: '12px' }}>
                    Reset All
                  </button>
                )}
              </div>

              {/* Manufacturers */}
              <div className="mb-4">
                <h6 className="fw-bold mb-3 text-uppercase text-secondary" style={{ fontSize: '11px', letterSpacing: '0.8px' }}>Manufacturers</h6>
                <div className="d-flex flex-column gap-2.5">
                  {['Cooper&Hunter', 'Daikin', 'LG', 'Samsung'].map(brand => (
                    <div className="form-check" key={brand}>
                      <input 
                        className="form-check-input shadow-none cursor-pointer" 
                        type="checkbox" 
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                        id={`brand-${brand}`}
                      />
                      <label className="form-check-label small cursor-pointer text-dark fw-medium" htmlFor={`brand-${brand}`}>
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="text-muted opacity-25" />

              {/* Room Area */}
              <div className="mb-4">
                <h6 className="fw-bold mb-3 text-uppercase text-secondary" style={{ fontSize: '11px', letterSpacing: '0.8px' }}>Room Area</h6>
                <div className="d-flex flex-column gap-2.5">
                  {['up to 30m2', '30-50m2'].map(area => (
                    <div className="form-check" key={area}>
                      <input 
                        className="form-check-input shadow-none cursor-pointer" 
                        type="checkbox" 
                        checked={selectedAreas.includes(area)}
                        onChange={() => toggleArea(area)}
                        id={`area-${area}`}
                      />
                      <label className="form-check-label small cursor-pointer text-dark fw-medium" htmlFor={`area-${area}`}>
                        {area}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="text-muted opacity-25" />

              {/* Capacity BTU */}
              <div className="mb-2">
                <h6 className="fw-bold mb-3 text-uppercase text-secondary" style={{ fontSize: '11px', letterSpacing: '0.8px' }}>Capacity, BTU</h6>
                <div className="d-flex flex-column gap-2.5">
                  {['7', '9', '12', '18'].map(btu => (
                    <div className="form-check" key={btu}>
                      <input 
                        className="form-check-input shadow-none cursor-pointer" 
                        type="checkbox" 
                        checked={selectedBtus.includes(btu)}
                        onChange={() => toggleBtu(btu)}
                        id={`btu-${btu}`}
                      />
                      <label className="form-check-label small cursor-pointer text-dark fw-medium" htmlFor={`btu-${btu}`}>
                        {btu} BTU
                      </label>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Product Grid (Responsive Cards with Full Width Images & White Fade) */}
          <div className="col-lg-9 col-12">
            <div className="row g-3">
              {sortedProducts.length > 0 ? (
                sortedProducts.map((product) => (
                  <div className="col-xl-4 col-md-6 col-12" key={product.id}>
                    <div className="card h-100 border rounded-4 p-3 bg-white position-relative product-card shadow-sm d-flex flex-column">
                      
                      {/* Full Width Product Image Container with Bottom White Fade */}
                      <Link href={`/products/${product.id}`} className="position-relative d-block mb-3 bg-white rounded-3 overflow-hidden border m-0" style={{ height: '205px' }}>
                        <Image 
                          src={product.image} 
                          alt={product.name} 
                          fill 
                          className="object-fit-cover w-100 h-100" 
                        />
                        <div 
                          className="position-absolute bottom-0 start-0 w-100 pointer-event-none"
                          style={{ height: '40px', background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.92) 100%)' }}
                        ></div>
                      </Link>

                      {/* Brand Tag */}
                      <span className="text-muted fw-semibold mb-1 text-uppercase" style={{ fontSize: '10.5px', letterSpacing: '0.5px' }}>{product.brand}</span>

                      {/* Product Name */}
                      <Link href={`/products/${product.id}`} className="text-decoration-none text-dark mb-2 fw-bold d-block" style={{ fontSize: '13.5px', lineHeight: '1.4', height: '38px', overflow: 'hidden' }}>
                        {product.name}
                      </Link>

                      {/* Ratings */}
                      <div className="d-flex align-items-center gap-2 mb-3 text-muted" style={{ fontSize: '11px' }}>
                        <span className="badge bg-success text-white fw-bold d-inline-flex align-items-center gap-1 px-2 py-1 rounded" style={{ fontSize: '10px' }}>
                          {product.rating} <Star size={10} fill="#fff" stroke="none" />
                        </span>
                        <span>({product.reviews} reviews)</span>
                      </div>

                      {/* Price & Action Button */}
                      <div className="mt-auto d-flex align-items-center justify-content-between pt-3 border-top">
                        <span className="fw-bold fs-5 text-dark" style={{ color: '#0b2545' }}>₹{product.price.toLocaleString()}</span>
                        <button 
                          onClick={() => alert(`Added ${product.name} to cart!`)}
                          className="btn text-white fw-bold p-2 rounded-circle d-flex align-items-center justify-content-center shadow-sm cart-action-btn"
                          style={{ background: 'linear-gradient(135deg, #087cf0 0%, #0056b3 100%)', width: '38px', height: '38px' }}
                          title="Add to Cart"
                        >
                          <ShoppingCart size={16} />
                        </button>
                      </div>

                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-5 bg-white rounded-4 shadow-sm border">
                  <p className="text-muted mb-0">No products found matching your filter criteria.</p>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>

      {/* Mobile Offcanvas Filter */}
      <div 
        className="offcanvas offcanvas-bottom rounded-top-4 shadow-lg d-lg-none" 
        tabIndex="-1" 
        id="mobileFilterOffcanvas" 
        style={{ height: '80vh' }}
      >
        <div className="offcanvas-header border-bottom px-4 py-3">
          <h5 className="offcanvas-title fw-bold fs-5 text-dark">Filter Products</h5>
          <button type="button" className="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body px-4 py-4 overflow-y-auto">
          
          <div className="mb-4">
            <h6 className="fw-bold mb-3 text-secondary text-uppercase" style={{ fontSize: '12px' }}>Manufacturers</h6>
            <div className="d-flex flex-column gap-3">
              {['Cooper&Hunter', 'Daikin', 'LG', 'Samsung'].map(brand => (
                <div className="form-check" key={brand}>
                  <input 
                    className="form-check-input shadow-none" 
                    type="checkbox" 
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                    id={`m-brand-${brand}`}
                  />
                  <label className="form-check-label fw-medium text-dark" htmlFor={`m-brand-${brand}`}>
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <hr className="text-muted opacity-25" />

          <div className="mb-4">
            <h6 className="fw-bold mb-3 text-secondary text-uppercase" style={{ fontSize: '12px' }}>Capacity, BTU</h6>
            <div className="d-flex flex-column gap-3">
              {['7', '9', '12', '18'].map(btu => (
                <div className="form-check" key={btu}>
                  <input 
                    className="form-check-input shadow-none" 
                    type="checkbox" 
                    checked={selectedBtus.includes(btu)}
                    onChange={() => toggleBtu(btu)}
                    id={`m-btu-${btu}`}
                  />
                  <label className="form-check-label fw-medium text-dark" htmlFor={`m-btu-${btu}`}>
                    {btu} BTU
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="d-flex gap-2 mt-5">
            <button 
              type="button" 
              onClick={clearAllFilters}
              className="btn btn-outline-secondary w-50 py-3 rounded-pill fw-bold"
            >
              Clear
            </button>
            <button 
              type="button" 
              className="btn text-white fw-bold w-50 py-3 rounded-pill shadow-sm"
              style={{ background: '#087cf0', borderColor: '#087cf0' }}
              data-bs-dismiss="offcanvas"
            >
              Apply ({filteredProducts.length})
            </button>
          </div>

        </div>
      </div>

      <style jsx global>{`
        .product-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          border-color: #e2e8f0 !important;
        }
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(8, 124, 240, 0.12) !important;
          border-color: #087cf0 !important;
        }
        .cart-action-btn {
          transition: transform 0.2s ease, opacity 0.2s ease;
        }
        .cart-action-btn:hover {
          transform: scale(1.08);
          opacity: 0.95;
        }
      `}</style>
    </div>
  );
}