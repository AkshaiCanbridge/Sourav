'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView, motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const gradientRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);
  const textRef = useRef(null);
  
  const isInView = useInView(textRef, { once: false });

  // Animation variants
  const slideUp = {
    initial: {
      y: "100%"
    },
    open: (i) => ({
      y: "0%",
      transition: { duration: 0.5, delay: 0.01 * i }
    }),
    closed: {
      y: "100%",
      transition: { duration: 0.5 }
    }
  };

  const opacity = {
    initial: {
      opacity: 0
    },
    open: {
      opacity: 1,
      transition: { duration: 0.5 }
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  useEffect(() => {
    const section = sectionRef.current;
    const cardsContainer = cardsContainerRef.current;
    const gradient = gradientRef.current;
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;
    const row3 = row3Ref.current;

    if (!section || !cardsContainer || !gradient || !row1 || !row2 || !row3) return;

    // initial states
    gsap.set(cardsContainer, { opacity: 0, y: 100 });
    gsap.set(gradient, { opacity: 0.95 });

    // Fade in cards container
    gsap.to(cardsContainer, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
      }
    });

    // Animate gradient
    gsap.to(gradient, {
      opacity: 0.18,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom center',
        scrub: 1.5,
      }
    });

    // row animations
    gsap.to(row1, {
      x: -200,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 2,
      }
    });

    gsap.to(row2, {
      x: 200,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 2,
      }
    });

    gsap.to(row3, {
      x: -200,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 2,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const portfolioImages = [
    { id: 1, title: 'Design Project 1', src: '/p1.jpg' },
    { id: 2, title: 'Design Project 2', src: '/p2.jpg' },
    { id: 3, title: 'Design Project 3', src: '/p3.jpg' },
    { id: 4, title: 'Design Project 4', src: '/p4.jpg' },
    { id: 5, title: 'Design Project 5', src: '/p5.jpg' },
    { id: 6, title: 'Design Project 6', src: '/p6.jpg' },
    { id: 7, title: 'Design Project 7', src: '/p7.jpg' },
    { id: 8, title: 'Design Project 8', src: '/p8.jpg' },
    { id: 9, title: 'Design Project 9', src: '/p9.jpg' },
  ];

  const descriptionText = "I'm Sourav SD Passionate and detail-oriented UI/UX Designer & Graphic Designer with experience designing CRM platforms, web applications, and marketing visuals. Adept at transforming user needs into engaging interfaces and creative brand visuals. Proficient in Figma, Adobe Photoshop, and Illustrator, with strong knowledge of user-centered design principles, typography, and color theory. ";

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[140vh] text-white bg-black"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="relative z-30 container mx-auto px-6 flex items-center justify-center h-full">
          <div className="max-w-4xl mx-auto text-center">
            {/* About Me Label */}
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-cyan-400 text-lg font-light tracking-wider">
                About Me
              </span>
            </motion.div>

            {/* Hi There! Heading */}
            <motion.h1 
              className="text-6xl md:text-7xl font-bold mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hi There!
            </motion.h1>

            {/* Animated Description */}
            <div ref={textRef} className="text-lg md:text-xl leading-relaxed mb-8 text-gray-300">
              <p>
                {descriptionText.split(" ").map((word, index) => {
                  return (
                    <span 
                      key={`word-${index}`}
                      style={{ 
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'inline-flex',
                        marginRight: '0.25em'
                      }}
                    >
                      <motion.span
                        variants={slideUp}
                        custom={index}
                        animate={isInView ? "open" : "closed"}
                        initial="initial"
                      >
                        {word}
                      </motion.span>
                    </span>
                  );
                })}
              </p>
            </div>

          </div>
        </div>

        {/* Scrolling Cards */}
        <div
          ref={cardsContainerRef}
          className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
        >
          <div
            ref={gradientRef}
            className="absolute top-0 left-0 right-0 h-72 md:h-[44rem] z-20 pointer-events-none about-gradient"
            style={{ opacity: 0.95 }}
          />

          <div className="relative overflow-hidden pb-8">
            {/* First Row */}
            <div ref={row1Ref} className="flex mb-4 will-change-transform px-6">
              {portfolioImages.map((item, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 w-96 h-52 mx-3 rounded-xl overflow-hidden shadow-2xl bg-gray-900 relative"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 90vw, 24rem"
                      className="object-cover"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-black/35" />
                  </div>
                  <div className="relative z-10 w-full h-full flex items-center justify-center text-gray-100">
                    <div className="text-center px-4">
                      <p className="text-sm font-medium">{item.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row */}
            <div
              ref={row2Ref}
              className="flex mb-4 will-change-transform px-6"
              style={{ transform: 'translateX(-200px)' }}
            >
              {portfolioImages.map((item, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 w-96 h-52 mx-3 rounded-xl overflow-hidden shadow-2xl bg-gray-900 relative"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 90vw, 24rem"
                      className="object-cover"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-black/35" />
                  </div>
                  <div className="relative z-10 w-full h-full flex items-center justify-center text-gray-100">
                    <div className="text-center px-4">
                      <p className="text-sm font-medium">{item.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Third Row */}
            <div ref={row3Ref} className="flex will-change-transform px-6">
              {portfolioImages.map((item, index) => (
                <div
                  key={`row3-${index}`}
                  className="flex-shrink-0 w-96 h-52 mx-3 rounded-xl overflow-hidden shadow-2xl bg-gray-900 relative"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 90vw, 24rem"
                      className="object-cover"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-black/35" />
                  </div>
                  <div className="relative z-10 w-full h-full flex items-center justify-center text-gray-100">
                    <div className="text-center px-4">
                      <p className="text-sm font-medium">{item.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @font-face {
          font-family: 'Handwriting';
          src: local('Brush Script MT'), local('Lucida Handwriting');
        }

        .font-handwriting {
          font-family: 'Handwriting', cursive;
        }

        .about-gradient {
          background-image:
            radial-gradient(circle at 50% 14%,
              rgba(6,120,200,0.42) 0%,
              rgba(8,78,150,0.30) 20%,
              rgba(6,46,86,0.20) 40%,
              rgba(8,22,32,0.30) 70%,
              rgba(0,0,0,0.55) 100%
            ),
            linear-gradient(180deg,
              rgba(6,36,72,0.28) 0%,
              rgba(3,10,18,0.24) 45%,
              rgba(0,0,0,0.6) 100%
            );

          box-shadow: inset 0 -36px 80px rgba(0,0,0,0.56);
          backdrop-filter: blur(4px) saturate(1.05);
          -webkit-backdrop-filter: blur(4px) saturate(1.05);
          border-bottom: 1px solid rgba(255,255,255,0.03);
          mix-blend-mode: normal;
          transform: translateZ(0);
        }

        .about-gradient::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: 0; top: 0;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}