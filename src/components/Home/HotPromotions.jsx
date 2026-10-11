'use client';
import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HotPromotions() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardWidth = 380;
  const gap = 24;

  const promotions = [
    {
      id: 1,
      model: "FTXZ - 25NVMV",
      discount: "Discount Up to 30%",
      price: "11.000.000₫",
      installment: "0%",
      imageSrc: "/images/ac-1.jpg",
      shipping: "Free shipping"
    },
    {
      id: 2,
      model: "FTXZ Series",
      discount: "Discount Up to 35%",
      price: "10.000.000₫",
      installment: "0%",
      imageSrc: "/images/ac-2.jpg",
      shipping: "Free shipping"
    },
    {
      id: 3,
      model: "FTXZ Series",
      discount: "Discount Up to 40%",
      price: "9.000.000₫",
      installment: "0%",
      imageSrc: "/images/ac-3.jpg",
      shipping: "Free shipping"
    },
    {
      id: 4,
      model: "FTXZ - 35NVMV",
      discount: "Discount Up to 25%",
      price: "12.500.000₫",
      installment: "0%",
      imageSrc: "/images/ac-4.jpg",
      shipping: "Free shipping"
    },
    {
      id: 5,
      model: "FTXZ - 50NVMV",
      discount: "Discount Up to 30%",
      price: "15.000.000₫",
      installment: "0%",
      imageSrc: "/images/ac-6.jpg",
      shipping: "Free shipping"
    }
  ];

  // Handle manual or scroll-based active index update
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const totalCardSize = cardWidth + gap;
      const index = Math.round(scrollLeft / totalCardSize);
      setActiveIndex(Math.min(Math.max(index, 0), promotions.length - 1));
    }
  };

  // Button scroll handler
  const scroll = (direction) => {
    if (scrollRef.current) {
      const totalCardSize = cardWidth + gap;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;

      let targetScrollLeft;
      if (direction === 'left') {
        targetScrollLeft = Math.max(scrollLeft - totalCardSize, 0);
      } else {
        targetScrollLeft = scrollLeft >= maxScrollLeft - 20 ? 0 : scrollLeft + totalCardSize;
      }

      scrollRef.current.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
    }
  };

  // Dot click handler
  const scrollToSlide = (index) => {
    if (scrollRef.current) {
      const totalCardSize = cardWidth + gap;
      scrollRef.current.scrollTo({ left: index * totalCardSize, behavior: 'smooth' });
      setActiveIndex(index);
    }
  };

  // Auto-scroll Effect (Har 3 second mein slide karega)
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const totalCardSize = cardWidth + gap;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScrollLeft = scrollWidth - clientWidth;

        let targetScrollLeft = scrollLeft + totalCardSize;

        if (scrollLeft >= maxScrollLeft - 20) {
          targetScrollLeft = 0;
        }

        scrollRef.current.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-5 bg-white overflow-hidden">
      <div className="container-fluid px-lg-5 px-3">
        
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4 mb-lg-5">
          <h2 className="fw-bold text-dark fs-3 mb-0 text-uppercase tracking-wide">HOT PROMOTIONS</h2>
          <div className="d-flex gap-2">
            <button 
              onClick={() => scroll('left')} 
              className="btn btn-light border rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm"
              style={{ width: '44px', height: '44px' }}
            >
              <ChevronLeft size={22} className="text-dark" />
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="btn btn-light border rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm"
              style={{ width: '44px', height: '44px' }}
            >
              <ChevronRight size={22} className="text-dark" />
            </button>
          </div>
        </div>

        {/* Carousel Row */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="d-flex gap-4 pb-5 pt-2 hide-scrollbar px-1"
          style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', overflowX: 'auto' }}
        >
          {promotions.map((item, index) => (
            <div 
              key={item.id} 
              className="flex-shrink-0 position-relative rounded-4 shadow-sm border-0 text-white p-4"
              style={{ 
                width: `${cardWidth}px`, 
                minHeight: '270px',
                background: 'linear-gradient(135deg, #1fc8f8 0%, #0077b6 100%)',
                scrollSnapAlign: 'start',
                overflow: 'visible'
              }}
            >
              {/* Top Details & 0% Badge */}
              <div className="d-flex justify-content-between align-items-start mb-2">
                <div>
                  <span className="small opacity-75 fw-normal" style={{ fontSize: '13px' }}>{item.model}</span>
                  <h4 className="fw-bold fs-4 mb-1">{item.discount}</h4>
                </div>
                {/* Badge */}
                <div className="bg-white text-dark fw-bold px-2 py-1 rounded-2 shadow-sm text-center" style={{ minWidth: '46px' }}>
                  <span className="text-primary fw-bolder fs-6 lh-1 d-block">{item.installment}</span>
                  <span className="text-muted d-block" style={{ fontSize: '7px', fontWeight: '500', marginTop: '-1px' }}>installment</span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-2">
                <span className="small opacity-75 d-block" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>PRICE ONLY</span>
                <span className="fw-bold fs-3">{item.price}</span>
              </div>

              {/* Free Shipping (Left aligned) */}
              <div className="small opacity-85 mb-3" style={{ fontSize: '12px' }}>{item.shipping}</div>

              {/* AC Image Wide & Overlapping at Bottom Center */}
              <div 
                className="position-absolute start-50 translate-middle-x shadow-lg" 
                style={{ 
                  bottom: '-32px', 
                  width: '82%', 
                  height: '115px',
                  zIndex: 2,
                  background: '#ffffff',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  border: '1px solid #dee2e6'
                }}
              >
                <div className="position-relative w-100 h-100">
                  <Image 
                    src={item.imageSrc} 
                    alt={item.model} 
                    fill 
                    className="object-fit-cover" 
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="d-flex justify-content-center align-items-center gap-2 mt-5">
          {promotions.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`border-0 rounded-pill transition-all ${activeIndex === index ? 'bg-dark px-3' : 'bg-secondary opacity-25'}`}
              style={{ width: activeIndex === index ? '24px' : '8px', height: '8px', cursor: 'pointer', transition: 'all 0.3s ease' }}
            />
          ))}
        </div>

      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}