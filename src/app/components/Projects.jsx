'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import Link from 'next/link';
import { projectsData } from '../lib/ProjectsData';

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="w-full mb-32 sm:mb-40 lg:mb-48">
      <div
        ref={container}
        style={{
          position: 'relative',
          height: '350vh',
          margin: '20px auto',
          padding: '0 15px',
          maxWidth: '1200px',
        }}
        className="px-4 sm:px-6 lg:px-8"
      >
        {projectsData.map((project, i) => {
          const targetScale = 1 - (projectsData.length - i) * 0.05;
          const scale = useTransform(scrollYProgress, [i * 0.25, 1], [1, targetScale]);

          return (
            <motion.div
              key={`p_${i}`}
              style={{
                position: 'sticky',
                top: '20vh',
                height: 'auto',
                minHeight: '60vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '25px',
                scale,
              }}
              className="p-4 sm:p-6 lg:p-8"
            >
              {/* Background image container */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '900px',
                  margin: '0 auto',
                  borderRadius: '25px',
                  minHeight: '60vh',
                  overflow: 'hidden',
                  backgroundImage: `url(${project.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
                className="p-4 sm:p-6 lg:p-8"
              >
                {/* Color overlay for readability */}
                <div
                  aria-hidden
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '25px',
                    pointerEvents: 'none',
                  }}
                />

                {/* Content above the overlay */}
                <div className="flex flex-col h-full relative z-10">
                  <div className="w-full mb-8">
                    <h2
                      className="text-2xl sm:text-3xl lg:text-5xl font-semibold inline-block mx-auto"
                      style={{ color: '#ffffff', textShadow: '0 3px 10px rgba(0,0,0,0.45)' }}
                    >
                      {project.title}
                    </h2>
                  </div>

                  {/* Removed the right-side thumbnail image (was previously here) */}

                  {/* Description block — responsive widths */}
                  <div className="mt-auto max-w-full sm:max-w-[60%] lg:max-w-[50%] self-start">
                    <p
                      className="text-base sm:text-lg lg:text-xl font-sans"
                      style={{
                        color: '#ffffff',
                        textShadow: '0 2px 8px rgba(0,0,0,0.45)',
                      }}
                    >
                      {project.description}
                    </p>
                    <span className="block mt-4 text-2xl text-semibold">
                      <Link href={`/project/${project.id}`} className="underline hover:text-opacity-80" style={{ color: '#ffffff' }}>
                        See Project
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
