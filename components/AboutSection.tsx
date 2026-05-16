"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-offwhite overflow-hidden relative">
      <div id="campus" className="absolute top-0" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="flex-1 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div>
              <div className="text-gold font-bold uppercase tracking-widest text-sm mb-3">
                Who We Are
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy leading-tight mb-6">
                Knowledge Beyond Books
              </h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  JG University is a UGC-approved, tech-driven institution sponsored by the ASIA Charitable Trust — an organization shaping education in Gujarat since 1965. We offer future-ready programs that evolve alongside industry demands.
                </p>
                <p>
                  Our pedagogy is built on whole-brain learning — blending academic rigor with real-world exposure. From IIoT labs to incubation centers, every resource here is designed to turn knowledge seekers into global change-makers.
                </p>
              </div>
            </div>

            <ul className="space-y-4">
              {[
                "NEP 2020 & UGC Compliant Programs",
                "Faculty from Top Academia & Industry",
                "International Collaborations & Student Exchange",
                "Full-Pay On-The-Job Training Opportunities"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 text-gold flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-navy font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <a href="#programs" className="inline-flex items-center gap-2 text-gold font-bold hover:gap-4 transition-all uppercase tracking-wide text-sm">
              Learn More About Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            className="flex-1 relative w-full max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <Image 
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80" 
                alt="University Campus Building" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Floating Badge 1 */}
            <motion.div 
              className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-10"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="text-3xl">🏛️</div>
              <div>
                <div className="font-bold text-navy text-sm">Est. 1965</div>
                <div className="text-xs text-slate-500">Ahmedabad, Gujarat</div>
              </div>
            </motion.div>

            {/* Floating Badge 2 */}
            <motion.div 
              className="absolute -top-6 -right-6 md:-right-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-10"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="font-bold text-navy pr-2">UGC Approved</div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
