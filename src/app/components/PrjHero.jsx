// components/DynamicPrjHero.jsx

"use client";

import React, { useState, useEffect } from "react";

const PrjHero = ({ data }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[82vh] flex items-center justify-start px-6 md:px-12 lg:px-24 overflow-hidden bg-black">
      {/* Background Image with Zoom Animation */}
      <div
        className={`absolute inset-0 transition-transform duration-[1500ms] ease-out ${
          isLoaded ? "scale-100" : "scale-120"
        }`}
      >
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full">
        <div className="overflow-hidden mb-8">
          <h1
            className={`text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tight transition-all duration-1000 ease-out ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            {data.title}
          </h1>
          <span className="text-5xl text-gray-200">{data.span}</span>
        </div>

        <div className="overflow-hidden mb-12">
          <p
            className={`text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed transition-all duration-1000 ease-out ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            {data.subtitle}
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce transition-opacity duration-1000 ${
          isLoaded ? "opacity-60" : "opacity-0"
        }`}
        style={{ transitionDelay: "900ms" }}
      >
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default PrjHero;