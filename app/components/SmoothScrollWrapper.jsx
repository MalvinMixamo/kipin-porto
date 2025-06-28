'use client';
import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function SmoothScroll() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      lerp: 0.08,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return null; // Tidak perlu render elemen apa pun
}
