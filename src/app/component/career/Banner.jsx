"use client";
import React from "react";
import Container from "../Container";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div>
      <motion.div
        className={`bg-[url('/careerBanner.png')] bg-cover bg-center bg-no-repeat w-full  py-[280px] px-6 relative after:absolute after:inset-0 after:bg-white/70 after:backdrop-blur-[2px] after:z-10`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      ></motion.div>
    </div>
  );
};

export default Banner;
