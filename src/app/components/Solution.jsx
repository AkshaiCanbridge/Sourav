"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Solution({ data }) {
  const imageRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const img = imageRef.current;
    const triggerEl = triggerRef.current;
    if (!img || !triggerEl) return;

    // Responsive initial zoom
    const initialScale = window.innerWidth < 768 ? 1.35 : 1.9;
    const endPx = Math.round(window.innerHeight * 0.6);

    // Apply initial scale to avoid flash
    gsap.set(img, { scale: initialScale });

    const tween = gsap.fromTo(
      img,
      { scale: initialScale },
      {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: triggerEl,
          start: "top bottom",
          end: `+=${endPx}`,
          scrub: 1,
        },
      }
    );

    // Refresh on resize
    const onResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    return () => {
      tween.kill();
      window.removeEventListener("resize", onResize);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf(img);
    };
  }, []);

  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Solution Label */}
          <div className="lg:col-span-3 flex lg:justify-start justify-center items-start mt-4">
            <button
              aria-label="Solution section"
              className="inline-flex items-center gap-3 text-sm sm:text-base font-medium text-gray-900 hover:opacity-90 transition-opacity rounded-full px-4 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
            >
              <span className="w-3 h-3 bg-red-500 rounded shrink-0" />
              <span className="font-base text-lg">{data.title}</span>
            </button>
          </div>

          {/* Right: Description text */}
          <div className="lg:col-span-9 space-y-6 lg:mt-16">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-base text-gray-900 leading-tight max-w-3xl">
              {data.description}
            </h1>

            <hr className="border-t border-gray-200 mt-2" />
          </div>
        </div>
      </div>

      {/* Responsive scroll-zoom image section */}
      <div 
        ref={triggerRef} 
        className="px-4 sm:px-6 lg:px-8 py-6 md:py-12 flex items-center justify-center"
      >
        <div className="w-full max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-gray-200 aspect-[16/9] md:aspect-[16/9]">
            <img
              ref={imageRef}
              src={data.image}
              alt={`${data.title} visual`}
              loading="lazy"
              className="w-full h-full object-cover transform-gpu will-change-transform"
              style={{ transformOrigin: "center center" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}