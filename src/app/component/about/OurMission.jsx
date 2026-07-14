"use client";
import React from "react";
import Container from "../Container";
import Header from "../Header";
import Image from "next/image";
import { motion } from "framer-motion";

const OurMission = () => {
  return (
    <div className="py-10 bg-[#E76634]/5">
      <Container>


        <div className="space-y-20">
          <motion.div
            className="md:flex justify-between items-center mt-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="w-full md:w-[50%] md:mb-0 mb-10 text-center md:text-start">
              <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-[#0f172a] mb-2">
                Our Mission
              </h2>
              <h3 className="text-xl md:text-xl font-semibold bg-gradient-to-r from-[#E53022] to-[#F8A024] bg-clip-text text-transparent mb-6">
                Turning Ideas into Intelligent Solutions
              </h3>
              <p className="font-poppins text-lg md:text-xl leading-[1.8] text-zinc-600">
                Our mission is to help businesses solve real-world challenges with AI and custom software. By combining innovation, technical expertise, and a user-first approach, we create digital solutions that improve efficiency, drive growth, and deliver lasting value.
              </p>
            </div>
            <div className="w-full md:w-[45%] flex justify-center md:justify-end">
              <Image
                src="/mission1.png"
                alt="Our Mission"
                width={450}
                height={350}
                className="w-full max-w-[450px] h-auto object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            className="md:flex flex-row-reverse justify-between items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="w-full md:w-[50%] md:mb-0 mb-10 text-center md:text-start">
              <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-[#0f172a] mb-2">
                Our Vision
              </h2>
              <h3 className="text-xl md:text-xl font-bold font-istok-web bg-gradient-to-r from-[#E53022] to-[#F8A024] bg-clip-text text-transparent mb-6">
                Leading the Next Generation of Digital Innovation
              </h3>
              <p className="font-poppins text-lg md:text-xl leading-[1.8] text-zinc-600">
                Our vision is to become a globally recognized AI and software development company, empowering businesses with intelligent technologies that transform operations, inspire innovation, and create meaningful impact.
              </p>
            </div>
            <div className="w-full md:w-[45%] flex justify-center md:justify-start">
              <Image
                src="/mission2.png"
                alt="Our Vision"
                width={450}
                height={350}
                className="w-full max-w-[450px] h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default OurMission;
