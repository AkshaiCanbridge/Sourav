"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollZoomSection() {
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const container = containerRef.current;

    if (!image || !container) return;

    // Create the zoom animation
    gsap.fromTo(
      image,
      {
        scale: 2,
      },
      {
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          pin: false,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Image Section */}
      <div
        ref={containerRef}
        className="min-h-screen flex items-center justify-center px-8 py-2"
      >
        <div className="w-full max-w-8xl">
          <div className="relative overflow-hidden rounded-3xl aspect-[16/9] bg-gray-200">
            <img
              ref={imageRef}
              src="/mrrr.jpg"
              alt="Modern Architecture"
              className="w-full h-full object-cover transform-gpu will-change-transform"
            />
          </div>
        </div>
      </div>
    </div>
  );
}