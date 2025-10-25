import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            LET'S WORK
          </h2>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-500 mb-8 leading-tight flex items-center justify-center gap-4">
            TOGETHER
            <span className="w-4 h-4 md:w-6 md:h-6 bg-lime-400 rounded-full"></span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-3xl mx-auto">
            "YOUR VISION, MY CRAFT — LET'S BUILD SOMETHING POWERFUL."
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 md:mb-20">
          <a
            href="/resume.pdf"
            download="Resume.pdf"
            className="text-white font-medium text-lg hover:text-lime-400 transition-colors inline-flex items-center gap-2 group"
          >
            RESUME
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="https://www.linkedin.com/in/sourav-s-d-788735340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium text-lg hover:text-lime-400 transition-colors inline-flex items-center gap-2 group"
          >
            LINKEDIN
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white font-medium">©2025 DESIGN</div>
          
          <div className="flex items-center gap-6">
            {/* Theme Toggle Circles */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-600"></div>
              <div className="w-8 h-8 rounded-full bg-gray-900 border-2 border-gray-600"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
