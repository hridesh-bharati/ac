'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Wrench, Award, Users, ArrowRight, CheckCircle2, Snowflake, Wind, Zap, Flame } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: '10,000+', label: 'ACs Installed & Serviced', icon: Snowflake, bg: 'bg-info bg-opacity-10 text-info border-info' },
    { number: '150+', label: 'Certified HVAC Experts', icon: Wrench, bg: 'bg-primary bg-opacity-10 text-primary border-primary' },
    { number: '5+', label: 'Years of Excellence', icon: Award, bg: 'bg-warning bg-opacity-10 text-warning border-warning' },
    { number: '99%', label: 'Happy Customers', icon: ShieldCheck, bg: 'bg-success bg-opacity-10 text-success border-success' },
  ];

  const servicesList = [
    {
      title: 'Split & Window AC Installation',
      desc: 'Expert wall mounting, vacuum testing, and proper copper piping for maximum cooling efficiency.',
      borderAccent: 'border-top border-info border-4'
    },
    {
      title: 'Deep Jet Wet Servicing',
      desc: 'High-pressure cleaning of indoor and outdoor coils, filters, and drain trays to eliminate bacteria and foul odor.',
      borderAccent: 'border-top border-primary border-4'
    },
    {
      title: 'Gas Refilling & Leakage Repair',
      desc: 'Pinpoint leakage detection using pressure checks and pure refrigerant charging for optimal chilling.',
      borderAccent: 'border-top border-warning border-4'
    },
    {
      title: 'Emergency Breakdown Repair',
      desc: 'Quick diagnostics for cooling loss, strange compressor noises, PCB faults, and electrical wiring issues.',
      borderAccent: 'border-top border-danger border-4'
    },
  ];

  return (
    <div className="bg-white min-vh-100 pb-5">
      
      {/* Section 1: Colorful Hero Banner */}
      <section className="py-5 text-white position-relative overflow-hidden mb-5" style={{ background: 'linear-gradient(135deg, #0b2545 0%, #087cf0 50%, #06b6d4 100%)' }}>
        <div className="position-absolute top-0 end-0 opacity-10 translate-middle-y me-n5 mt-n5 d-none d-lg-block">
          <Snowflake size={300} />
        </div>
        
        <div className="container py-5 position-relative" style={{ maxWidth: '1280px', zIndex: 2 }}>
          <div className="row align-items-center g-5">
            
            {/* Left Column: Text */}
            <div className="col-lg-6">
              <span className="badge bg-white text-primary fw-bold px-3 py-2 rounded-pill mb-3 text-uppercase shadow-sm" style={{ fontSize: '11px', letterSpacing: '1px' }}>
                ❄️ About MS Cool Care
              </span>
              <h1 className="fw-bold display-4 mb-3 text-white" style={{ letterSpacing: '-0.5px', lineHeight: '1.2' }}>
                Your Ultimate Destination For Chilling Comfort
              </h1>
              <p className="text-white-50 mb-4 fs-6" style={{ lineHeight: '1.7' }}>
                Welcome to MS Cool Care—bringing certified HVAC technicians directly to your doorstep for high-performance AC repairs, maintenance, and top-tier inverter cooling solutions.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Link href="/services" className="btn fw-bold px-4 py-3 rounded-pill shadow text-dark" style={{ background: '#ffbc00', fontSize: '13px' }}>
                  Book AC Service Now
                </Link>
                <Link href="/products" className="btn btn-outline-light fw-bold px-4 py-3 rounded-pill shadow-sm" style={{ fontSize: '13px' }}>
                  Explore AC Models
                </Link>
              </div>
            </div>

            {/* Right Column: Professional Image */}
            <div className="col-lg-6">
              <div className="position-relative rounded-4 overflow-hidden shadow-lg bg-white p-2 border border-white border-opacity-25" style={{ height: '420px' }}>
                <Image 
                  src="/images/hero.png" 
                  alt="MS Cool Care Professional AC Services" 
                  fill 
                  className="object-fit-cover rounded-3"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Colorful Stats Counter Grid */}
      <section className="container mb-5 pb-3" style={{ maxWidth: '1280px' }}>
        <div className="row g-4">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div className="col-6 col-lg-3" key={index}>
                <div className={`p-4 bg-white rounded-4 border shadow-sm text-center h-100 stat-card ${item.bg}`}>
                  <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 p-3 shadow-sm" style={{ width: '60px', height: '60px', background: 'rgba(255,255,255,0.9)' }}>
                    <Icon size={28} />
                  </div>
                  <h3 className="fw-bold fs-2 text-dark mb-1">{item.number}</h3>
                  <p className="text-secondary small mb-0 fw-semibold">{item.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 3: Specialized AC Services Overview with Accent Borders */}
      <section className="container mb-5 py-4 bg-light rounded-5 p-4 p-md-5 border" style={{ maxWidth: '1280px' }}>
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
          <span className="badge bg-primary bg-opacity-10 text-primary fw-bold text-uppercase px-3 py-1.5 rounded-pill mb-2" style={{ fontSize: '11px' }}>
            What We Do Best
          </span>
          <h2 className="fw-bold display-6 mb-3 text-dark" style={{ color: '#0b2545' }}>Complete Air Conditioning Care</h2>
          <p className="text-secondary small">Handling all major brands including Daikin, LG, Samsung, Blue Star, and Cooper&Hunter with absolute precision.</p>
        </div>

        <div className="row g-4">
          {servicesList.map((srv, idx) => (
            <div className="col-md-6 col-lg-3" key={idx}>
              <div className={`card h-100 border-0 shadow-sm p-4 rounded-4 bg-white service-about-card ${srv.borderAccent}`}>
                <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 text-primary rounded-3 mb-3" style={{ width: '48px', height: '48px' }}>
                  <Wind size={24} />
                </div>
                <h3 className="h6 fw-bold text-dark mb-2" style={{ color: '#0b2545' }}>{srv.title}</h3>
                <p className="text-secondary small mb-0" style={{ fontSize: '12.5px', lineHeight: '1.6' }}>{srv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Core Values & Commitments (Vibrant Gradient Card) */}
      <section className="container mb-5 py-4" style={{ maxWidth: '1280px' }}>
        <div className="row align-items-center g-5">
          
          <div className="col-lg-6">
            <div className="text-white p-5 rounded-5 shadow-lg position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)' }}>
              <h2 className="fw-bold fs-2 mb-3 text-white">Our Core Commitments</h2>
              <p className="text-white-50 small mb-4">We maintain absolute transparency, genuine components, and top-tier workmanship quality.</p>
              
              <ul className="list-unstyled d-flex flex-column gap-3 mb-0" style={{ fontSize: '14px' }}>
                <li className="d-flex align-items-start gap-3 bg-white bg-opacity-10 p-3 rounded-4">
                  <CheckCircle2 size={22} className="text-warning flex-shrink-0 mt-0.5" />
                  <div><strong>100% Genuine Spare Parts:</strong> Official manufacturer components used for all gas charging and repairs.</div>
                </li>
                <li className="d-flex align-items-start gap-3 bg-white bg-opacity-10 p-3 rounded-4">
                  <CheckCircle2 size={22} className="text-warning flex-shrink-0 mt-0.5" />
                  <div><strong>Upfront & Fair Pricing:</strong> Fixed starting rates with zero hidden inspection charges.</div>
                </li>
                <li className="d-flex align-items-start gap-3 bg-white bg-opacity-10 p-3 rounded-4">
                  <CheckCircle2 size={22} className="text-warning flex-shrink-0 mt-0.5" />
                  <div><strong>30-Day Service Warranty:</strong> Complete peace of mind backed by our post-service workmanship guarantee.</div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <span className="badge bg-success bg-opacity-10 text-success fw-bold px-3 py-2 rounded-pill mb-2 text-uppercase" style={{ fontSize: '11px', letterSpacing: '1px' }}>
              Why Trust MS Cool Care
            </span>
            <h2 className="fw-bold display-6 mb-3 text-dark" style={{ color: '#0b2545' }}>Delivering Unmatched Cooling In Every Season</h2>
            <p className="text-secondary mb-4" style={{ fontSize: '14px', lineHeight: '1.7' }}>
              When summer peaks, your AC shouldn't fail you. Our dedicated team of background-verified HVAC specialists ensure prompt arrival, quick diagnostics, and lasting resolution so your indoor space stays refreshingly cool.
            </p>
            <div className="d-flex gap-3">
              <Link href="/services" className="btn text-white fw-bold px-4 py-3 rounded-pill shadow-sm d-inline-flex align-items-center gap-2" style={{ background: 'linear-gradient(135deg, #0b2545 0%, #134074 100%)', fontSize: '13px' }}>
                Explore All Services <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Section 5: Colorful Call to Action Banner */}
      <section className="container my-5" style={{ maxWidth: '1280px' }}>
        <div className="rounded-5 p-5 text-center text-white shadow-lg position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #087cf0 0%, #0b2545 100%)' }}>
          <h2 className="fw-bold mb-3 text-white">Facing Cooling Issues or Looking for a New AC?</h2>
          <p className="text-white-50 small mb-4 mx-auto" style={{ maxWidth: '550px' }}>
            Book a trusted technician in minutes or check out our premium catalog of high-efficiency inverter air conditioners.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link href="/services" className="btn fw-bold px-4 py-3 rounded-pill shadow text-dark" style={{ background: '#ffbc00', fontSize: '13px' }}>
              Book Service Now
            </Link>
            <Link href="/products" className="btn btn-outline-light fw-bold px-4 py-3 rounded-pill shadow-sm" style={{ fontSize: '13px' }}>
              Browse AC Models
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .stat-card, .service-about-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .stat-card:hover, .service-about-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 1rem 2rem rgba(8, 124, 240, 0.15) !important;
        }
      `}</style>
    </div>
  );
}