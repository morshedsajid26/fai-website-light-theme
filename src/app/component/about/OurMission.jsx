"use client";
import React from "react";
import Container from "../Container";
import Header from "../Header";
import Image from "next/image";
import { motion } from "framer-motion";

const OurMission = () => {
  return (
    <div className="pt-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Header titleText={`Our Mission/Vission`} />
        </motion.div>

        <div className="space-y-20">
          <motion.div
            className="md:flex justify-between items-center mt-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <p className="font-poppins text-xl leading-[2] text-zinc-700 md:w-[50%] md:mb-0 mb-10 text-center md:text-start">
              At Fire AI, our mission is to bridge the gap between people and
              technology through the power of artificial intelligence.We strive
              to create smart, intuitive, and adaptive solutions that help
              businesses automate tasks, understand data, and deliver
              exceptional user experiences.Every product we build reflects our
              belief that technology should feel natural, work efficiently, and
              create real impact in people’s lives
            </p>
            <Image
              src="/mission1.png"
              alt="Our Mission"
              width={450}
              height={100}
            />
          </motion.div>

          <motion.div
            className="md:flex flex-row-reverse justify-between items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <p className="font-poppins text-xl leading-[2] text-zinc-700 md:w-[50%] md:mb-0 mb-10 text-center md:text-start">
              At Fire AI, our mission is to bridge the gap between people and
              technology through the power of artificial intelligence.We strive
              to create smart, intuitive, and adaptive solutions that help
              businesses automate tasks, understand data, and deliver
              exceptional user experiences.Every product we build reflects our
              belief that technology should feel natural, work efficiently, and
              create real impact in people’s lives
            </p>
            <Image
              src="/mission2.png"
              alt="Our Mission"
              width={450}
              height={100}
            />
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default OurMission;
