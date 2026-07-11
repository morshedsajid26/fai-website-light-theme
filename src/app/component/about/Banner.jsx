"use client";
import React from "react";
import Container from "../Container";
import Button from "../Button";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div>
      <div
        className={`bg-[url('/aboutBanner.png')] bg-cover bg-center bg-no-repeat w-full py-[280px] px-6 relative after:absolute after:inset-0 after:bg-white/70 after:backdrop-blur-[2px] after:z-10   `}
      >
        <motion.div
          className="z-30 w-full text-center relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <h3 className="font-space-grotesk font-bold text-5xl text-[#09090b]  leading-[1.2] ">
            We are{" "}
            <span className="bg-gradient-to-r from-[#E53022] to-[#F8A024] bg-clip-text text-transparent">
              Fire AI
            </span>
          </h3>
          <motion.p
            className="text-zinc-700 mt-4 mb-10 font-popins text-xl w-[60%] mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false }}
          >
            At Fire AI, we design and develop intelligent digital solutions that
            empower businesses to work smarter. From AI chat-bots and automation
            platforms to custom web, mobile, and gaming applications, we deliver
            products that combine innovation with real-world performance
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
