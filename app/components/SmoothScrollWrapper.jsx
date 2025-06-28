'use client';

import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import './locomotive-style.module.css'; // Ensure you have the Locomotive Scroll CSS imported

export default function SmoothScrollWrapper({ children }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div id="scroll-container" data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
}
