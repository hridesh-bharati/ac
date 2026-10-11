'use client';
import { Wrench, Droplets, Wind, Tool, Zap, ShieldCheck } from 'lucide-react';

export default function ServicesPage() {
  const servicesList = [
    { title: "AC Repair & Troubleshooting", price: "₹499", desc: "Fixing cooling problems, noise issues, PCB card failure, and water leakage.", icon: Wrench, color: "text-primary" },
    { title: "Deep Jet Wet Servicing", price: "₹599", desc: "Thorough cleaning with high-pressure jet pump for indoor and outdoor units.", icon: Droplets, color: "text-info" },
    { title: "Gas Filling & Leakage Repair", price: "₹1,499", desc: "Nitrogen pressure testing, leakage welding, and refrigerant gas charging.", icon: Wind, color: "text-success" },
    { title: "AC Installation & Uninstallation", price: "₹999", desc: "Secure wall mounting, copper piping, and professional setup for split/window AC.", icon: Wrench, color: "text-warning" },
    { title: "PCB Repair & Replacement", price: "₹799", desc: "Expert diagnosis and chip-level repair of AC motherboard/control circuit.", icon: Zap, color: "text-danger" },
    { title: "Annual Maintenance Contract (AMC)", price: "₹2,499/yr", desc: "Complete peace of mind with scheduled free services and breakdown support.", icon: ShieldCheck, color: "text-success" }
  ];

  return (
    <div className="container py-5">
      <div className="text-center mx-auto mb-5" style={{ maxWidth: '700px' }}>
        <span className="badge bg-primary bg-opacity-10 text-primary fw-bold px-3 py-2 rounded-pill mb-2">Our Offerings</span>
        <h1 className="fw-bold display-5 mb-3">Professional AC Services & Pricing</h1>
        <p className="text-muted">Choose from our transparently priced doorstep cooling solutions delivered by certified experts.</p>
      </div>

      <div className="row g-4">
        {servicesList.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div className="col-md-4" key={index}>
              <div className="card h-100 border-0 shadow-sm p-4 rounded-4 d-flex flex-column bg-white">
                <div className={`mb-3 p-3 bg-light rounded-3 w-fit ${service.color}`}>
                  <IconComponent size={28} />
                </div>
                <h3 className="h5 fw-bold mb-2">{service.title}</h3>
                <p className="text-muted small mb-4">{service.desc}</p>
                <div className="mt-auto d-flex align-items-center justify-content-between pt-3 border-top">
                  <span className="text-primary fw-bold fs-5">{service.price}</span>
                  <a href="/contact" className="btn btn-sm btn-primary rounded-pill px-3 fw-semibold text-decoration-none">Book Now</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}