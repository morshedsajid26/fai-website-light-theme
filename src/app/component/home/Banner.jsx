"use client";
import React from "react";
import Container from "../Container";
import Button from "../Button";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import BannerThreeBg from "./BannerThreeBg";

const Banner = () => {
  return (
    <div className="">
      <div className="relative w-full px-6 overflow-hidden h-screen ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/HomeAnimation.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] z-10 pointer-events-none"></div>

        <Container className="relative z-20 h-full max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            className="w-[40%] flex flex-col items-start justify-center h-screen"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h3 className="font-space-grotesk font-bold text-5xl text-[#ffffff]  leading-[1.2] ">
              AI Solutions That Transform Businesses
            </h3>
            <p className="text-[#ffffff] mt-4 mb-10 font-popins text-xl">
              We build AI-powered web applications, intelligent automation
              systems, custom software, and modern digital experiences that help
              businesses increase productivity, reduce costs, and scale faster.
            </p>
            <Button
              buttonClass={`text-base`}
              buttonText={"Start Your Project"}
              icon={
                <FaArrowRight className="p-1.5 w-8 h-8 bg-[#FF1010] rounded-full" />
              }
            />

            <motion.div
              className="flex items-center mt-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <Image
                src={"/clients.png"}
                alt="clients"
                width={125}
                height={50}
                className="h-auto"
              />

              <div>
                <h4 className="text-[#ffffff] font-bold font-space-grotesk text-xl">
                  12K+ Worldwide Clients
                </h4>

                <p className=" font-popins text-sm text-white mt-2 w-[70%]">
                  Trusted by startup, enterprises, and global brands in 40+
                  countries
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: 3D Robot Image */}
          <div className="absolute right-0 top-0 w-[50%] h-full z-10 pointer-events-auto">
            <BannerThreeBg />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
