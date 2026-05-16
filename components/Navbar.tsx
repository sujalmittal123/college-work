'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1)).filter(id => id);
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Programs', href: '#programs' },
    { name: 'About', href: '#about' },
    { name: 'Campus', href: '#campus' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      <AnimatePresence>
        {showAnnouncement && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-[#F5A623] text-gray-900 text-sm py-2 px-4 relative flex justify-center items-center font-medium"
          >
            <span>🎓 Admissions Open 2026-27 — Apply Before June 30th</span>
            <button 
              onClick={() => setShowAnnouncement(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-black/10 rounded-full transition-colors"
              aria-label="Dismiss announcement"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <header 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-md py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 z-50 group">
              <div className="bg-[#0B1F3A] text-white font-bold text-xl w-10 h-10 flex items-center justify-center rounded-lg shadow-sm group-hover:scale-105 transition-transform">
                JG
              </div>
              <span className={`font-bold text-xl tracking-tight transition-colors ${isScrolled ? 'text-[#0B1F3A]' : 'text-white'}`}>
                University
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className={`text-sm font-medium transition-colors hover:text-[#F5A623] ${
                        activeSection === link.href.substring(1) || (link.href === '#home' && activeSection === '')
                          ? 'text-[#F5A623]'
                          : isScrolled ? 'text-slate-600' : 'text-slate-200'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link 
                href="#admissions"
                className="bg-[#F5A623] text-[#0B1F3A] px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-sm"
              >
                Apply Now
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden z-50 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className={`w-6 h-0.5 mb-1.5 transition-all ${isScrolled || isMobileMenuOpen ? 'bg-slate-900' : 'bg-white'} ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 mb-1.5 transition-all ${isScrolled || isMobileMenuOpen ? 'bg-slate-900' : 'bg-white'} ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 transition-all ${isScrolled || isMobileMenuOpen ? 'bg-slate-900' : 'bg-white'} ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: '100vh', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="fixed inset-0 top-0 pt-24 bg-white z-40 md:hidden flex flex-col"
            >
              <nav className="px-6 flex flex-col gap-6">
                <ul className="flex flex-col gap-6 text-lg font-medium text-slate-800">
                  {navLinks.map((link) => (
                    <motion.li 
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      key={link.name}
                    >
                      <Link 
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="mt-4"
                >
                  <Link 
                    href="#admissions"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-center bg-[#F5A623] text-[#0B1F3A] px-6 py-3.5 rounded-full font-bold text-base hover:bg-yellow-500 transition-colors shadow-sm"
                  >
                    Apply Now
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}

export default Navbar;