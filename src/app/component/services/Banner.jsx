"use client";
import React from "react";
import Container from "../Container";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div>
      <div className="py-[280px] text-center relative overflow-hidden ">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        >
          <source src="/servicesVideo.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] z-10 pointer-events-none"></div>

        <motion.div
          className="relative z-20 flex flex-col items-center gap-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <h3 className="text-5xl font-space-grotesk font-bold text-[#09090b] leading-tight">
            Intelligent Solutions. Real Impact
          </h3>
          <p className="text-[#09090b] font-poppins text-xl mt-3 max-w-2xl">
            At <span className="text-[#E53022]">Fire AI</span>, We believe the
            best Technology feels less artificial and more intuitive
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
