"use client";
import React from "react";
import Container from "../Container";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div>
      <div className="py-40 md:py-[200px] lg:py-[280px] text-center relative overflow-hidden bg-[url('/portfolioBanner.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] z-10 pointer-events-none"></div>

        <motion.div
          className="relative z-20 flex flex-col items-center gap-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <h3 className="text-4xl md:text-5xl font-space-grotesk font-bold text-[#09090b] leading-tight px-4 max-w-5xl text-center">
            Powering Digital Innovation Across Industries
          </h3>
          <p className="text-[#09090b] font-poppins text-lg md:text-xl mt-3 max-w-3xl px-4 text-center">
            Discover how <span className="text-[#E53022]">Fire AI</span> partners with ambitious startups and growing businesses to build AI-powered solutions, modern applications, and high-performing digital experiences that deliver measurable results.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
