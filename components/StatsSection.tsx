"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function useCountUp(end: number, duration: number = 2) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number | null = null;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // easeOutExpo
      const easeProgress = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      setCount(Math.floor(end * easeProgress));

      if (percentage < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, end, duration]);

  return { count, ref };
}

interface StatItemProps {
  end: number;
  suffix: string;
  label: string;
}

const StatItem = ({ end, suffix, label }: StatItemProps) => {
  const { count, ref } = useCountUp(end, 2);

  return (
    <div ref={ref} className="text-center px-4 py-6">
      <div className="text-4xl md:text-5xl font-bold text-navy mb-2 tracking-tight flex justify-center items-baseline">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-navy/80 text-sm md:text-base font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

export const StatsSection = () => {
  return (
    <section className="bg-gold py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-navy/10">
          <StatItem end={10000} suffix="+" label="Alumni Worldwide" />
          <StatItem end={17} suffix="+" label="Partner Colleges" />
          <StatItem end={50} suffix="+" label="Programs Offered" />
          <StatItem end={60} suffix="+" label="Years of Excellence" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
