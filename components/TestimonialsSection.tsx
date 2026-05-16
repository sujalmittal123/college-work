'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Jigardan Gadhvi',
    role: 'Celebrity Singer',
    text: "JG shaped who I am. The faculty weren't just teachers — they were mentors. The values I learned here remain my guiding light.",
  },
  {
    id: 2,
    name: 'Parth Rupareliya',
    role: 'Art Director',
    text: "The balance of theory and practical experience gave me a foundation I rely on every day in my creative career.",
  },
  {
    id: 3,
    name: 'Yatendra Sinh Joddha',
    role: 'Technical Lead, TCS',
    text: "The BCA program's focus on real-world tech and continuous learning prepared me perfectly for a career at TCS.",
  },
  {
    id: 4,
    name: 'Krishna Soni',
    role: 'Assistant Manager, ICICI Bank',
    text: "Beyond academics, JG emphasizes personality development — that's what truly set me apart in the corporate world.",
  },
  {
    id: 5,
    name: 'Stavan Doshi',
    role: 'Entrepreneur',
    text: "JG's entrepreneurship-first mindset gave me the courage and resources to build my own business.",
  },
  {
    id: 6,
    name: 'Shrushti Raval',
    role: 'Recruitment Consultant',
    text: "The internships and real-world projects at JG made me interview-ready before I even graduated.",
  },
];

export const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
    
    // Calculate index based on exactly how many items fit in the scroll area
    const totalItems = testimonials.length;
    const scrollPercentage = scrollLeft / (scrollWidth - clientWidth);
    const maxIndex = totalItems - 1; // It won't reach here exactly on desktop but we approximate
    
    // An approximation for pagination dots when variable items are visible
    // Simple version: just use scrollLeft / card width
    const cardWidth = clientWidth >= 1024 ? clientWidth / 3 : clientWidth >= 768 ? clientWidth / 2 : clientWidth;
    let index = Math.round(scrollLeft / cardWidth);
    
    if (index > maxIndex) index = maxIndex;
    if (index < 0) index = 0;
    
    setActiveIndex(index);
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    const cardWidth = clientWidth >= 1024 ? clientWidth / 3 : clientWidth >= 768 ? clientWidth / 2 : clientWidth;
    scrollRef.current.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
  };

  const scrollPrev = () => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    const cardWidth = clientWidth >= 1024 ? clientWidth / 3 : clientWidth >= 768 ? clientWidth / 2 : clientWidth;
    scrollRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  };

  const scrollNext = () => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    const cardWidth = clientWidth >= 1024 ? clientWidth / 3 : clientWidth >= 768 ? clientWidth / 2 : clientWidth;
    scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
  };

  // Auto-scroll logic
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const cardWidth = clientWidth >= 1024 ? clientWidth / 3 : clientWidth >= 768 ? clientWidth / 2 : clientWidth;
      
      // If we are at the end, scroll back to 0
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-jg-accent font-bold tracking-widest uppercase text-sm mb-2 block">Alumni Stories</span>
          <h2 className="text-4xl md:text-5xl font-bold text-jg-primary tracking-tight">Voices from the JG Family</h2>
        </motion.div>

        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar cursor-grab active:cursor-grabbing" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.id}
                className="snap-center shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw] bg-white rounded-3xl p-8 shadow-lg border border-slate-100 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -6 }}
              >
                <div>
                  <div className="text-6xl text-jg-accent font-serif leading-none mb-4">&ldquo;</div>
                  <p className="text-slate-600 italic text-lg mb-8">&quot;{t.text}&quot;</p>
                </div>
                <div>
                  <div className="flex text-jg-accent mb-4">
                    {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-jg-primary to-jg-accent flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-jg-primary">{t.name}</h4>
                      <p className="text-sm text-slate-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button onClick={scrollPrev} aria-label="Previous testimonial" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-jg-primary hover:bg-jg-primary hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <div className="flex gap-2">
              {Array.from({ length: testimonials.length }).map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => scrollToIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? 'w-6 bg-jg-accent' : 'bg-slate-300'}`}
                />
              ))}
            </div>
            <button onClick={scrollNext} aria-label="Next testimonial" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-jg-primary hover:bg-jg-primary hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
