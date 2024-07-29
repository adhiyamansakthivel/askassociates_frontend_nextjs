'use client';

import AOS from 'aos';
import { useEffect } from 'react';

import 'aos/dist/aos.css';

export default function AosClientComponent({
    children,
  }: {
    children: React.ReactNode
  }) {
      
    
  useEffect(() => {
    AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false,
    });
  }, []);

  return (
    <>
      
        {children}

    </>
  )

};