"use client";

import { motion } from "framer-motion";
import { FlaskConical, Globe, BrainCircuit, Users, Factory, Map } from "lucide-react";

export const StrengthsSection = () => {
  const cards = [
    {
      icon: <FlaskConical className="w-8 h-8 text-[#F5A623]" />,
      title: "Immersive Experiential Learning",
      body: "Real-life project exposure, industry internships, and capstone projects embedded into every program.",
      large: true,
    },
    {
      icon: <Globe className="w-8 h-8 text-[#F5A623]" />,
      title: "Interdisciplinary Approach",
      body: "Students from diverse backgrounds ideate and solve problems together using cross-disciplinary frameworks.",
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-[#F5A623]" />,
      title: "Whole Brain Pedagogy",
      body: "A unique learning model that develops both analytical thinking and creative problem-solving simultaneously.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#F5A623]" />,
      title: "Industry-Expert Faculty",
      body: "Professors with dual expertise — deep academic knowledge and hands-on industry experience.",
    },
    {
      icon: <Factory className="w-8 h-8 text-[#F5A623]" />,
      title: "State-of-the-Art Labs",
      body: "IIoT Lab, R&D + Incubation Center, Tech-enabled Library, and fully Wi-Fi enabled campus.",
    },
    {
      icon: <Map className="w-8 h-8 text-[#F5A623]" />,
      title: "Global Opportunities",
      body: "International collaborations for curriculum delivery, student exchange programs, and cross-cultural internships.",
      large: true,
    },
  ];

  return (
    <section id="strengths" className="bg-[#0B1F3A] text-white section-shell overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#F5A623] text-sm font-bold tracking-widest uppercase mb-4 block">
            Why JG University
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for the Future. Proven by Results.
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Every element of our ecosystem is engineered to make students career-ready from day one.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl ${
                card.large ? "md:col-span-2" : ""
              }`}
            >
              <div className="mb-6">{card.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-slate-300 leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;
