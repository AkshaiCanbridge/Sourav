"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Problem({ data }) {
  const imageRefs = useRef([]);
  const triggerRefs = useRef([]);

  const setImageRef = (index) => (el) => {
    imageRefs.current[index] = el;
  };
  const setTriggerRef = (index) => (el) => {
    triggerRefs.current[index] = el;
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobile = window.innerWidth < 768;
    const initialScale = isMobile ? 1.12 : 1.30;
    const endPx = Math.round(window.innerHeight * 0.45);
    const scrubVal = 0.45;

    imageRefs.current.forEach((img) => {
      if (img) gsap.set(img, { scale: initialScale, transformOrigin: "center center" });
    });

    const tweens = imageRefs.current.map((img, i) => {
      const triggerEl = triggerRefs.current[i];
      if (!img || !triggerEl) return null;

      return gsap.fromTo(
        img,
        { scale: initialScale },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: triggerEl,
            start: "top bottom",
            end: `+=${endPx}`,
            scrub: scrubVal,
          },
        }
      );
    });

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      tweens.forEach((t) => {
        if (!t) return;
        if (t.scrollTrigger) try { t.scrollTrigger.kill(); } catch (_) {}
        try { t.kill(); } catch (_) {}
      });
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-3 flex justify-start items-start">
            <button className="flex items-center gap-3 text-base font-normal text-gray-900">
              <span className="w-3 h-3 bg-red-500 rounded" />
              <span className="font-semibold text-lg">{data.title}</span>
            </button>
          </div>

          <div className="lg:col-span-9 space-y-8 pt-6 lg:pt-24">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-base text-gray-900 leading-tight">
              {data.description}
            </h1>
            <hr />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.images.map((image, index) => (
            <div key={index} ref={setTriggerRef(index)} className="w-full">
              <div className="relative overflow-hidden rounded-3xl bg-gray-200 aspect-[1/1]">
                <img
                  ref={setImageRef(index)}
                  src={image}
                  alt={`${data.title} visual ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transform-gpu will-change-transform"
                  style={{ transformOrigin: "center center" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}