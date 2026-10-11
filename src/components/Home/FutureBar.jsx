// src/components/Home/FeaturesBar.jsx
'use client';
import { Wrench, Truck, CreditCard, Headphones } from 'lucide-react';

export default function FeaturesBar() {
  const features = [
    {
      icon: Wrench,
      title: "Professional Installation",
      desc: "Team installs within 24 hours of ordering.",
      color: "#29abe2",
      bg: "#e6f6fc",
    },
    {
      icon: Truck,
      title: "Convenient Delivery",
      desc: "Scheduled delivery at your doorstep.",
      color: "#10b981",
      bg: "#e7f8f1",
    },
    {
      icon: CreditCard,
      title: "Flexible Payment",
      desc: "Direct to online, all methods supported.",
      color: "#f59e0b",
      bg: "#fef4e6",
    },
    {
      icon: Headphones,
      title: "Attentive After-sales",
      desc: "24/7/365 customer care service.",
      color: "#8b5cf6",
      bg: "#f0ebfe",
    },
  ];

  return (
    <section className="features-section py-4 bg-white border-top border-bottom">
      <div className="container px-3 px-md-4">
        <div className="features-row">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div className="feature-item" key={index}>
                <div
                  className="feature-icon shadow-sm"
                  style={{ background: item.bg, color: item.color }}
                >
                  <Icon size={20} strokeWidth={2.2} />
                </div>
                <div className="feature-text">
                  <h6 className="feature-title">{item.title}</h6>
                  <p className="feature-desc">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .features-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }
        .feature-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 16px;
          position: relative;
          transition: background 0.2s;
        }
        .feature-item:not(:last-child)::after {
          content: '';
          position: absolute;
          right: 0;
          top: 20%;
          height: 60%;
          width: 1px;
          background: #eaeaea;
        }
        .feature-item:hover {
          background: #fafafa;
        }
        .feature-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.2s;
        }
        .feature-item:hover .feature-icon {
          transform: scale(1.05);
        }
        .feature-title {
          font-size: 13px;
          font-weight: 700;
          color: #111;
          margin: 0 0 2px 0;
        }
        .feature-desc {
          font-size: 11px;
          color: #777;
          margin: 0;
          line-height: 1.35;
        }
        @media (max-width: 991.98px) {
          .features-row {
            grid-template-columns: repeat(2, 1fr);
          }
          .feature-item:nth-child(2)::after { display: none; }
        }
        @media (max-width: 767.98px) {
          .features-row {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 10px;
            scrollbar-width: none;
          }
          .features-row::-webkit-scrollbar { display: none; }
          .feature-item {
            flex: 0 0 auto;
            width: 230px;
            background: #fcfcfc;
            border: 1px solid #eee;
            border-radius: 12px;
            scroll-snap-align: start;
          }
          .feature-item::after { display: none !important; }
        }
      `}</style>
    </section>
  );
}