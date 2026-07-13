"use client";
import React from "react";
import Container from "../Container";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div>
      <div className="py-[280px] text-center relative overflow-hidden bg-[url('/careerBanner.png')] bg-cover bg-center bg-no-repeat w-full">
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] z-10 pointer-events-none"></div>

        <motion.div
          className="relative z-20 flex flex-col items-center gap-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <h3 className="text-4xl md:text-5xl font-space-grotesk font-bold text-[#09090b] leading-tight px-4 max-w-5xl text-center">
            Build the Future with Fire AI
          </h3>
          <p className="text-[#09090b] font-poppins text-lg md:text-xl mt-3 max-w-4xl px-4 text-center">
            At Fire AI, we're building intelligent solutions that transform the way businesses work. Join a team of passionate engineers, designers, marketers, and innovators who are creating AI-powered software, modern digital experiences, and scalable technology products for clients around the world.
            <br className="hidden md:block" /><br className="hidden md:block" />
            Whether you're just starting your career or looking for your next challenge, you'll have the opportunity to learn, grow, and make a real impact.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
