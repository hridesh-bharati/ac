'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSection from '@/components/Home/HeroSection';
import ServiceSection from '@/components/Home/ServiceSection';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <HeroSection />
      <ServiceSection />
    </div>
  );
}