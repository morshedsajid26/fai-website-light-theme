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
      <div className="relative w-full px-6 overflow-hidden h-screen bg-gradient-to-r from-[#e6dfd7] via-[#e2cbb9] to-[#d67039]">
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src="/HomeAnimation.mp4" type="video/mp4" />
        </video> */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] z-0 pointer-events-none"></div>
        
        <Container className="relative z-10 h-full max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            className="w-[40%] flex flex-col items-start justify-center h-screen"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h3 className="font-space-grotesk font-bold text-5xl text-[#09090b]  leading-[1.2] ">
              Ignite Intelligence, Shape the Future.
            </h3>
            <p className="text-[#09090b] mt-4 mb-10 font-popins text-xl">
              Brief about AI automation or data innovation.
            </p>
            <Button
              buttonClass={`text-base`}
              buttonText={"Let’s Start & Discuss"}
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
                <h4 className="text-[#09090b] font-bold font-space-grotesk text-xl">
                  12K+ Worldwide Clients
                </h4>

                <p className=" font-popins text-sm text-zinc-700 mt-2 w-[70%]">
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
