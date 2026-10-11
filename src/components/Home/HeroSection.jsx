'use client';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import HotPromotions from './HotPromotions';
import FeaturesBar from './FutureBar';
import ServiceSection from './ServiceSection';

export default function HeroSection() {
  return (
    <>
      {/* Hero Banner Section with Top Margin adjustment */}
      <section 
        className="hero-banner position-relative overflow-hidden text-dark d-flex align-items-center mt-0"
        style={{
          backgroundImage: `url('/images/hero.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container py-5">
          <div className="row align-items-center g-4">
            
            {/* Left Content Area */}
            <div className="col-lg-7">
              
              {/* Subtitle */}
              <span 
                className="hero-subtitle text-uppercase fw-bold text-primary mb-2 d-block" 
                style={{ letterSpacing: '2px' }}
                data-aos="fade-down"
                data-aos-duration="800"
              >
                PREMIUM AIR CONDITIONERS
              </span>
              
              {/* Heading */}
              <h1 
                className="hero-title fw-bold lh-sm mb-3 text-dark"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                Cool Comfort for <br />
                <span className="text-primary">a Better Tomorrow</span>
              </h1>
              
              {/* Paragraph */}
              <p 
                className="hero-desc text-secondary mb-4" 
                style={{ maxWidth: '500px' }}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Experience powerful cooling, top-tier energy efficiency, and modern designs tailored for your home and office spaces.
              </p>

              {/* Action Button */}
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <Link 
                  href="/products" 
                  className="btn btn-primary fw-bold px-4 py-2.5 rounded-pill shadow-sm d-inline-flex align-items-center gap-2 text-decoration-none hover-lift"
                  style={{ fontSize: '14px' }}
                >
                  Shop Now <ArrowRight size={16} />
                </Link>
              </div>

            </div>

            <div className="col-lg-5 d-none d-lg-block"></div>

          </div>
        </div>
      </section>

      {/* Structured Sections Flow */}
      <HotPromotions />
      <FeaturesBar />
      <ServiceSection />

      <style jsx>{`
        .hero-banner {
          min-height: 50vh;
        }

        @media (min-width: 992px) {
          .hero-banner {
            min-height: 80vh;
          }
        }

        .hero-subtitle {
          font-size: clamp(10px, 2vw, 13px);
        }

        .hero-title {
          font-size: clamp(1.6rem, 4vw, 3rem);
        }

        .hero-desc {
          font-size: clamp(14px, 1.6vw, 16px);
          line-height: 1.7;
        }

        .hover-lift {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .hover-lift:hover {
          transform: translateY(-2px);
          box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15) !important;
        }
      `}</style>
    </>
  );
}