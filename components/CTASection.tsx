'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const CTASection = () => {
  return (
    <section id="admissions" className="py-24 relative overflow-hidden bg-gradient-to-br from-jg-accent to-amber-500">
      {/* Confetti/Particle SVG placeholder */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="confetti" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="3" fill="#fff" />
              <rect x="70" y="40" width="6" height="6" fill="#0B1F3A" transform="rotate(45 73 43)" />
              <circle cx="40" cy="80" r="4" fill="#00B8A9" />
              <polygon points="90,80 95,90 85,90" fill="#fff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#confetti)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-jg-primary mb-6 tracking-tight">Your Journey Starts Here.</h2>
          <p className="text-xl md:text-2xl text-jg-primary/80 mb-10 font-medium">
            Applications for the 2026-27 academic year are now open. Secure your seat in Gujarat&apos;s most future-ready university.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href="#admissions" className="inline-block w-full sm:w-auto px-10 py-4 bg-jg-primary text-white rounded-full font-bold text-lg shadow-xl hover:scale-105 active:scale-95 transition-all">
              Apply Now
            </a>
            <a href="/brochure.pdf" download="JG_University_Brochure.pdf" className="inline-block w-full sm:w-auto px-10 py-4 bg-white text-jg-primary rounded-full font-bold text-lg shadow-md hover:scale-105 active:scale-95 transition-all">
              Download Brochure
            </a>
          </div>

          <p className="text-jg-primary/90 font-medium">
            Need help? Call <a href="tel:+919876543210" className="underline hover:text-white transition-colors">+91 98765 43210</a> or email <a href="mailto:admissions@jguni.in" className="underline hover:text-white transition-colors">admissions@jguni.in</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
