"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

function MarqueeSection() {
  const logos = [
    "/ps.png",
    "/canva.png",
    "/ppro.png",
    "/lr.png",
    "/fma.png",
    "/capcut.png",
    "/autocad.png",
  ];

  return (
    <section className="relative w-full flex items-center justify-center py-10 mt-12">
      {/* TOP SIDE */}
      <div className="w-full max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <Marquee
          direction="left"
          gradient={false}
          autoFill
          speed={20}
          pauseOnHover
          pauseOnClick
          className="z-20"
        >
          {logos.map((item, index) => (
            <div key={index} className="mx-12 flex items-center justify-center">
              <Image width={60} height={60} src={item} alt="logo" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default MarqueeSection;