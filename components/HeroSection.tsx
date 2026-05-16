'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function HeroSection() {
  const headingText = "Shape Your Future at";
  const universityText = "JG University";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col lg:flex-row bg-[#0B1F3A] overflow-hidden pt-20">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 hidden lg:block">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Overlay gradient for mobile readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A]/80 via-[#0B1F3A]/60 to-[#0B1F3A] z-10 lg:hidden pointer-events-none"></div>

      {/* Left Column (Content) */}
      <div className="relative z-20 flex-1 flex flex-col justify-center px-6 sm:px-10 lg:pl-16 xl:pl-24 py-20 lg:py-0">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block bg-[#F5A623] text-[#0B1F3A] text-xs font-bold px-3 py-1.5 rounded-full tracking-wide uppercase shadow-sm">
              UGC Approved | Est. 1965
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            <motion.div
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05, delayChildren: 0.2 }
                }
              }}
              initial="hidden"
              animate="visible"
            >
              {headingText.split(" ").map((word, i) => (
                <span key={i} className="inline-block mr-3">
                  {word.split("").map((char, j) => (
                    <motion.span key={j} variants={letterVariants} className="inline-block">
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05, delayChildren: 1.2 }
                }
              }}
              initial="hidden"
              animate="visible"
              className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mt-2 block"
            >
              {universityText.split("").map((char, i) => (
                <motion.span key={i} variants={letterVariants} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-xl"
          >
            A New Age Tech-Driven University empowering students with 
            industry-relevant skills, experiential learning, and global 
            opportunities — in Ahmedabad, Gujarat.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="#programs" className="bg-[#F5A623] text-[#0B1F3A] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-lg hover:shadow-[#F5A623]/20 transition-all text-center">
              Explore Programs
            </Link>
            <Link href="#campus" className="border border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#0B1F3A] transition-all text-center">
              Take a Virtual Tour
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`w-10 h-10 rounded-full border-2 border-[#0B1F3A] bg-gradient-to-br from-slate-200 to-slate-400 z-${40-i*10} flex items-center justify-center overflow-hidden`}>
                   {/* Gradient placeholder for avatar */}
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-300 font-medium">Join 10,000+ Alumni Worldwide</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Column (Image & Floating Card) */}
      <div className="relative z-10 flex-1 min-h-[50vh] lg:min-h-screen w-full">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80"
            alt="University Campus"
            fill
            className="object-cover"
            priority
          />
          {/* Blue overlay tint */}
          <div className="absolute inset-0 bg-[#0B1F3A]/20 mix-blend-multiply pointer-events-none"></div>
        </div>

        {/* Floating Card */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="absolute bottom-10 right-6 sm:bottom-16 sm:right-10 lg:bottom-24 lg:right-16 z-30"
        >
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl shadow-2xl max-w-xs"
          >
            <div className="flex gap-4 items-center mb-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden relative shrink-0">
                <Image 
                  src="https://images.unsplash.com/photo-1562774053-701939374585?w=200&q=80" 
                  alt="Campus thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-white font-bold leading-tight">17 Colleges</p>
                <p className="text-white font-bold leading-tight">3 Schools</p>
                <p className="text-white font-bold leading-tight">1 University</p>
              </div>
            </div>
            <div className="bg-[#F5A623] text-[#0B1F3A] text-xs font-bold py-2 px-3 rounded-lg text-center uppercase tracking-wide">
              Next Intake: July 2026
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;