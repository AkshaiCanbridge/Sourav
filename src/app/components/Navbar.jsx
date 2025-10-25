'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MenuPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['Home', 'About', 'Work', 'Contact'];

  const toPath = (item) => (item === 'Home' ? '/' : `/${item.toLowerCase()}`);

  return (
    <div className="m-0 p-0 overflow-x-hidden box-border">
      {/* Menu Bar */}
      <div className="relative top-0 left-0 w-screen p-8 flex justify-between items-center z-10">
        <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-white no-underline uppercase text-sm font-medium leading-none">
          HOME
        </Link>

        <div className="menu-open">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-white cursor-pointer uppercase text-sm font-medium leading-none"
            aria-expanded={isMenuOpen}
            aria-controls="main-menu"
          >
            Menu
          </button>
        </div>
      </div>

      {/* Menu Overlay */}
      <div
        id="main-menu"
        className="fixed top-0 left-0 w-screen h-screen p-8 bg-black z-[9999] flex transition-all duration-700 ease-in-out"
        style={{
          clipPath: isMenuOpen
            ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
            : 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
          pointerEvents: isMenuOpen ? 'auto' : 'none',
        }}
      >
        {/* Close Icon */}
        <div
          onClick={() => setIsMenuOpen(false)}
          className="flex-[2] flex items-end cursor-pointer max-md:hidden"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <p
            className="text-[100px] leading-[70%] text-transparent"
            style={{ WebkitTextStroke: '5px #fff' }}
          >
            ×
          </p>
        </div>

        {/* Menu Copy */}
        <div className="flex-[4] flex flex-col justify-between p-8 pt-16 gap-8 max-md:pt-32">
          {/* Menu Links */}
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <div
                key={item}
                className="w-max"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
              >
                <div className="relative">
                  <Link
                    href={toPath(item)}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white text-[80px] font-normal tracking-tight leading-[85%] no-underline max-md:text-[60px] hover:opacity-70 transition-opacity"
                  >
                    {item}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Menu Info */}
          <div className="flex gap-8 justify-center items-center">
            <div className="flex-1 flex flex-col justify-end mt-24 gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="text-white no-underline uppercase text-sm font-medium leading-none hover:opacity-70 transition-opacity"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="text-white no-underline uppercase text-sm font-medium leading-none hover:opacity-70 transition-opacity"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="text-white no-underline uppercase text-sm font-medium leading-none hover:opacity-70 transition-opacity"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex-1 flex flex-col justify-end mt-24 gap-2">
              <a
                href="mailto:you@example.com"
                onClick={() => setIsMenuOpen(false)}
                className="text-white no-underline uppercase text-sm font-medium leading-none hover:opacity-70 transition-opacity"
              >
                Email
              </a>
              <a
                href="tel:+1234567890"
                onClick={() => setIsMenuOpen(false)}
                className="text-white no-underline uppercase text-sm font-medium leading-none hover:opacity-70 transition-opacity"
              >
                Phone
              </a>
            </div>
          </div>
        </div>

        {/* Menu Preview */}
        <div className="flex-[4] flex justify-end items-end">
          {/* Preview content here */}
        </div>
      </div>
    </div>
  );
}
