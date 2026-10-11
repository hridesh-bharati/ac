'use client';
import { Wrench, Settings, Wind, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServiceSection() {
  const services = [
    {
      title: "AC Repair & Diagnostics",
      desc: "Detailed inspection for cooling loss, strange noises, water dripping, or electrical fault fixes.",
      price: "₹499",
      icon: Wrench,
      badge: "Popular",
      badgeClass: "bg-primary text-white",
      iconBg: "bg-primary bg-opacity-10 text-primary",
    },
    {
      title: "Deep Jet Wet Servicing",
      desc: "High-pressure deep cleaning of cooling coils, filters, and drain trays for fresh, germ-free air.",
      price: "₹599",
      icon: Settings,
      badge: "Best Value",
      badgeClass: "bg-success text-white",
      iconBg: "bg-success bg-opacity-10 text-success",
    },
    {
      title: "Gas Filling & Leakage Check",
      desc: "Complete pressure testing, pinpoint leakage welding, and pure gas charging for optimal chilling.",
      price: "₹1,499",
      icon: Wind,
      badge: "Essential",
      badgeClass: "bg-warning text-dark",
      iconBg: "bg-warning bg-opacity-10 text-warning",
    }
  ];

  return (
    <section className="container py-5 my-3">
      
      {/* Section Header */}
      <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
        <span className="badge bg-primary bg-opacity-10 text-primary fw-bold text-uppercase px-3 py-1.5 rounded-pill mb-2" style={{ fontSize: '11px', letterSpacing: '1px' }}>
          What We Do
        </span>
        <h2 className="fw-bold display-6 mb-3 text-dark">Our Popular Services</h2>
        <p className="text-muted small">Comprehensive maintenance and repair solutions tailored for all window and split AC models, delivered right at your doorstep.</p>
      </div>

      {/* Services Grid */}
      <div className="row g-4">
        {services.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div className="col-md-4" key={index}>
              <div className="card h-100 border-0 shadow-sm p-4 rounded-4 bg-white position-relative service-card d-flex flex-column">
                
                {/* Top Badge & Icon */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className={`p-3 rounded-4 ${item.iconBg} d-flex align-items-center justify-content-center shadow-sm`} style={{ width: '52px', height: '52px' }}>
                    <IconComponent size={24} strokeWidth={2.2} />
                  </div>
                  <span className={`badge ${item.badgeClass} fw-bold px-2.5 py-1 rounded-pill`} style={{ fontSize: '10px' }}>
                    {item.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="h5 fw-bold mb-2 text-dark">{item.title}</h3>
                <p className="text-muted small mb-4" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                  {item.desc}
                </p>

                {/* Pricing & Action */}
                <div className="mt-auto pt-3 border-top d-flex align-items-center justify-content-between">
                  <div>
                    <span className="d-block text-muted" style={{ fontSize: '11px' }}>Starts from</span>
                    <span className="fw-bold fs-5 text-dark">{item.price}</span>
                  </div>
                  <Link href="/services" className="btn btn-sm btn-dark rounded-pill px-3 py-2 fw-bold d-flex align-items-center gap-1 service-btn">
                    Book <ArrowRight size={14} />
                  </Link>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Explore All CTA Button */}
      <div className="text-center mt-5">
        <Link href="/services" className="btn btn-outline-dark px-5 py-3 rounded-pill fw-bold text-uppercase small shadow-sm d-inline-flex align-items-center gap-2 hover-lift">
          Explore All Services <ArrowRight size={16} />
        </Link>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .service-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          border: 1px solid #f1f1f1 !important;
        }
        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 0.75rem 2rem rgba(0,0,0,.08) !important;
        }
        .hover-lift {
          transition: all 0.2s ease;
        }
        .hover-lift:hover {
          transform: translateY(-2px);
          box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15);
        }
      `}</style>
    </section>
  );
}