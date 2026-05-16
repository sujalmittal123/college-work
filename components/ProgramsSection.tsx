"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Program = {
  name: string;
  duration: string;
  icon: string;
  school: string;
};

const programsData: Record<string, Program[]> = {
  Undergraduate: [
    { name: "BBA — Bachelor of Business Administration", duration: "3/4 years", icon: "💼", school: "Management" },
    { name: "B.Com — Bachelor of Commerce", duration: "3/4 years", icon: "📊", school: "Commerce" },
    { name: "BCA — Bachelor of Computer Applications", duration: "3/4 years", icon: "💻", school: "Computing" },
    { name: "B.Tech (CS & AI) — Bachelor of Technology", duration: "4 years", icon: "⚙️", school: "Engineering" },
    { name: "iMBA — Integrated MBA", duration: "5 years", icon: "📈", school: "Management" },
    { name: "LL.B. — Bachelor of Laws", duration: "3 years", icon: "⚖️", school: "Law" },
  ],
  Postgraduate: [
    { name: "MBA — Master of Business Administration", duration: "2 years", icon: "🏢", school: "Management" },
    { name: "MCA — Master of Computer Applications", duration: "2 years", icon: "🖥️", school: "Computing" },
    { name: "M.Com (Hons)", duration: "2 years", icon: "📉", school: "Commerce" },
    { name: "M.Sc. Cyber Security & Digital Forensics", duration: "2 years", icon: "🔒", school: "Science" },
    { name: "Masters in International Trade & Finance", duration: "2 years", icon: "🌍", school: "Commerce" },
    { name: "LL.M. — Master of Laws", duration: "2 years", icon: "📜", school: "Law" },
  ],
  Doctoral: [
    { name: "Ph.D. Commerce", duration: "3+ years", icon: "🎓", school: "Commerce" },
    { name: "Ph.D. Management", duration: "3+ years", icon: "🎓", school: "Management" },
    { name: "Ph.D. Computing", duration: "3+ years", icon: "🎓", school: "Computing" },
    { name: "Ph.D. Law", duration: "3+ years", icon: "🎓", school: "Law" },
  ],
  Certificate: [
    { name: "Data Science, AI & ML", duration: "6 Months", icon: "🧠", school: "Computing" },
    { name: "Cybersecurity", duration: "6 Months", icon: "🛡️", school: "Computing" },
    { name: "Digital Marketing", duration: "3 Months", icon: "📱", school: "Management" },
    { name: "Blockchain", duration: "6 Months", icon: "⛓️", school: "Computing" },
    { name: "Full Stack Architecture", duration: "6 Months", icon: "🏗️", school: "Computing" },
    { name: "Industrial IoT", duration: "6 Months", icon: "🏭", school: "Engineering" },
  ],
};

const tabs = Object.keys(programsData);

export const ProgramsSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section id="programs" className="py-24 bg-offwhite min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-gold font-bold uppercase tracking-widest text-sm mb-3">
            Academics
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Programs Designed for Tomorrow
          </h2>
          <p className="text-slate-600 text-lg">
            Explore 50+ undergraduate, postgraduate, doctoral, and certificate programs across six schools.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all ${
                activeTab === tab 
                  ? "bg-gold text-navy shadow-md" 
                  : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Card Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {programsData[activeTab].map((program, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:border-gold hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group relative overflow-hidden"
                >
                  {/* Subtle top gradient on hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-2xl border border-slate-100">
                      {program.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                      {program.school}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-navy mb-3 line-clamp-2">
                    {program.name}
                  </h3>
                  
                  <div className="mt-auto">
                    <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full font-medium mb-6">
                      ⏱️ {program.duration}
                    </div>
                    
                    <a href="#" className="flex items-center gap-2 text-gold font-bold text-sm uppercase tracking-wide group-hover:gap-3 transition-all">
                      View Details
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default ProgramsSection;
