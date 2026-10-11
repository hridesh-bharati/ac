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
    <section className="features-section py-3 py-md-4">
      <div className="container-fluid px-3 px-md-4">
        <div className="features-row">

          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div className="feature-item" key={index}>
                <div
                  className="feature-icon"
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
        .features-section {
          background: #fff;
          border-top: 1px solid #f0f0f0;
          border-bottom: 1px solid #f0f0f0;
        }

        /* ===== ROW ===== */
        .features-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }

        /* ===== ITEM ===== */
        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
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
          background: #f0f0f0;
        }
        .feature-item:hover {
          background: #fafafa;
        }

        /* ===== ICON ===== */
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

        /* ===== TEXT ===== */
        .feature-text {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .feature-title {
          font-size: 12px;
          font-weight: 700;
          color: #111;
          margin: 0 0 3px 0;
          letter-spacing: 0.1px;
          line-height: 1.2;
        }
        .feature-desc {
          font-size: 10.5px;
          color: #888;
          margin: 0;
          line-height: 1.35;
          font-weight: 500;
        }

        /* ===== TABLET ===== */
        @media (max-width: 991.98px) {
          .features-row {
            grid-template-columns: repeat(2, 1fr);
            gap: 4px;
          }
          .feature-item:nth-child(2)::after {
            display: none;
          }
          .feature-item {
            padding: 12px;
          }
          .feature-item:nth-child(3)::after,
          .feature-item:nth-child(4)::after {
            display: none;
          }
        }

        /* ===== MOBILE — Horizontal Scroll (Shopsy style) ===== */
        @media (max-width: 767.98px) {
          .features-row {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 8px;
            padding-bottom: 4px;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .features-row::-webkit-scrollbar {
            display: none;
          }
          .feature-item {
            flex: 0 0 auto;
            width: 220px;
            background: #fafafa;
            border-radius: 12px;
            padding: 10px 12px;
            scroll-snap-align: start;
          }
          .feature-item::after {
            display: none !important;
          }
          .feature-icon {
            width: 38px;
            height: 38px;
            border-radius: 10px;
          }
          .feature-title {
            font-size: 11.5px;
          }
          .feature-desc {
            font-size: 10px;
          }
        }

        /* ===== SMALL PHONES ===== */
        @media (max-width: 380px) {
          .feature-item {
            width: 200px;
          }
        }
      `}</style>
    </section>
  );
}