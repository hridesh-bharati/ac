'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSection from '@/components/Home/HeroSection';
import ProductsPage from './products/page';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <HeroSection />
      <ProductsPage />
    </div>
  );
}