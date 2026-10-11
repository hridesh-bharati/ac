'use client';
import { Leaf, ShieldCheck, Truck, Wrench, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import HotPromotions from './HotPromotions';
import FeaturesBar from './FutureBar';
import ProductCatalog from './ProductCatalog';

export default function HeroSection() {
  return (
    <>
    <section 
      className="position-relative overflow-hidden py-5 py-lg-6 text-dark"
      style={{
        backgroundImage: `url('/images/hero.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container py-4">
        <div className="row align-items-center g-5">
          
          {/* Left Content Area with AOS */}
          <div className="col-lg-7" data-aos="fade-right" data-aos-duration="1000">
            
            {/* Top Subtitle */}
            <span className="text-uppercase fw-bold tracking-wider text-secondary small mb-2 d-block" style={{ letterSpacing: '2px' }}>
              PREMIUM AIR CONDITIONERS
            </span>
            
            {/* Main Heading */}
            <h1 className="display-4 fw-bold lh-sm mb-3 text-dark">
              Cool Comfort for <br />
              <span className="text-primary">a Better Tomorrow</span>
            </h1>
            
            {/* Description */}
            <p className="text-muted mb-4 fs-6" style={{ maxWidth: '480px' }}>
              Experience powerful cooling, energy efficiency and modern design with our wide range of air conditioners.
            </p>

            {/* Feature Icons Row */}
            <div className="row g-3 mb-5">
              <div className="col-6 col-sm-3 d-flex align-items-center gap-2">
                <div className="bg-primary text-white p-2 rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: '36px', height: '36px', flexShrink: 0 }}>
                  <Leaf size={18} />
                </div>
                <div className="small fw-semibold lh-sm text-secondary">Energy Efficient</div>
              </div>

              <div className="col-6 col-sm-3 d-flex align-items-center gap-2">
                <div className="bg-primary text-white p-2 rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: '36px', height: '36px', flexShrink: 0 }}>
                  <ShieldCheck size={18} />
                </div>
                <div className="small fw-semibold lh-sm text-secondary">Long Warranty</div>
              </div>

              <div className="col-6 col-sm-3 d-flex align-items-center gap-2">
                <div className="bg-primary text-white p-2 rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: '36px', height: '36px', flexShrink: 0 }}>
                  <Truck size={18} />
                </div>
                <div className="small fw-semibold lh-sm text-secondary">Free Delivery</div>
              </div>

              <div className="col-6 col-sm-3 d-flex align-items-center gap-2">
                <div className="bg-primary text-white p-2 rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: '36px', height: '36px', flexShrink: 0 }}>
                  <Wrench size={18} />
                </div>
                <div className="small fw-semibold lh-sm text-secondary">Professional Installation</div>
              </div>
            </div>
            
            {/* Shop Now CTA Button */}
            <div>
              <Link 
                href="/products" 
                className="btn btn-primary fw-bold px-5 py-3 rounded-pill shadow-lg d-inline-flex align-items-center gap-2 text-decoration-none"
              >
                Shop Now <ArrowRight size={18} />
              </Link>
            </div>

          </div>

          {/* Right side empty column */}
          <div className="col-lg-5 d-none d-lg-block" data-aos="fade-left" data-aos-duration="1000"></div>

        </div>
      </div>
    </section>
    <HotPromotions />
    <FeaturesBar />
    <ProductCatalog />
    </>
  );
}