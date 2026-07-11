"use client";
import React, { useRef, useEffect } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import Container from "../Container";

const statsData = [
  { id: 1, value: 210, label: "Happy Clients", suffix: "+" },
  { id: 2, value: 2200, label: "Design Created", suffix: "+" },
  { id: 3, value: 1300, label: "Website Coded", suffix: "+" },
];

const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });
  const spring = useSpring(0, { stiffness: 40, damping: 20 });
  const displayValue = useTransform(spring, (latest) =>
    Math.floor(latest).toLocaleString(),
  );

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, value, spring]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
};

const StatSphere = ({ stat, index }) => {
  // Layout logic: Left, Center (Top), Right
  const isCenter = index === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
      className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full flex flex-col items-center justify-center text-center p-8 group transition-all duration-700
        ${isCenter ? "lg:-translate-y-30 z-20" : "z-10"}
        ${index === 0 ? "lg:translate-x-15 lg:translate-y-30" : ""}
        ${index === 2 ? "lg:-translate-x-15 lg:translate-y-30" : ""}
      `}
    >
      {/* Glowing Sphere Base */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white via-red-50 to-white shadow-[inset_0_0_60px_rgba(255,50,50,0.1)] border border-red-200 overflow-hidden">
        {/* Subtle inner light */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-red-100/50 blur-3xl rounded-full" />
      </div>

      {/* Animated Glowing Arc - SVG Path for the curved arc shown in design */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full rotate-[400deg] scale-110"
        >
          <motion.path
            d="M 40 100 A 60 60 0 0 1 160 100"
            fill="none"
            stroke="url(#sphereArcGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 0.7, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
          />
          <defs>
            <linearGradient
              id="sphereArcGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#ff8c00" stopOpacity="0" />
              <stop offset="50%" stopColor="#ff4500" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ff0000" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Particles Around Sphere */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-[#E53022]/60 rounded-full blur-[1px]"
          animate={{
            y: [0, -30, 0],
            x: [0, i % 2 === 0 ? 15 : -15, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
          style={{
            top: `${10 + Math.random() * 80}%`,
            left: `${10 + Math.random() * 80}%`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 space-y-2 select-none">
        <h3 className="text-4xl md:text-6xl font-bold font-space-grotesk text-[#09090b] tracking-tighter drop-shadow-sm">
          <Counter value={stat.value} suffix={stat.suffix} />
        </h3>
        <p className="text-sm md:text-lg text-zinc-700 font-semibold  tracking-wider font-poppins">
          {stat.label}
        </p>
      </div>

      {/* Hover Pulse Effect */}
      <div className="absolute inset-0 rounded-full bg-red-500/0 group-hover:bg-red-500/10 transition-colors duration-500 blur-xl -z-10" />
    </motion.div>
  );
};

const Stats = () => {
  return (
    <>
      <Container className={`pt-20`}>
        <section
          id="stats"
          className="py-24 md:py-50 bg-[#E53022]/10  relative overflow-hidden rounded-4xl "
        >
          {/* Background ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(139,0,0,0.15)_0%,transparent_70%)] blur-[120px] pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-0 max-w-7xl mx-auto">
              {statsData.map((stat, index) => (
                <StatSphere key={stat.id} stat={stat} index={index} />
              ))}
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Stats;
