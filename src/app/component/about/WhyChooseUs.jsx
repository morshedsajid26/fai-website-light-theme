"use client";
import React from "react";
import Header from "../Header";
import Container from "../Container";
import Image from "next/image";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <div className="py-30 overflow-hidden bg-[#E76634]/5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Header titleText={"Why Choose Us?"} />
        </motion.div>

        <div className="mt-15 space-y-18">
          <motion.div
            className="md:flex justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="md:w-[50%] flex items-start gap-4">
              <span className="font-poppins text-2xl text-white px-4 py-1 bg-[#FF530A] rounded-full">
                1
              </span>
              <p className="font-poppins text-xl leading-[2] text-zinc-700">
                From predictive analytics to real-time optimization, every
                solution we deliver is powered by learning algorithms designed
                for impact, precision, and scalability. We don’t just use AI -
                we make it work for you, intelligently and efficiently
              </p>
            </div>
            <div>
              <Image
                src="/choose1.png"
                alt="Why Choose Us"
                width={450}
                height={100}
              />
            </div>
          </motion.div>

          <motion.div
            className="md:flex md:flex-row-reverse justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="md:w-[50%] flex items-start gap-4">
              <span className="font-poppins text-2xl text-white px-3.5 py-1 bg-[#FF530A] rounded-full">
                2
              </span>
              <p className="font-poppins text-xl leading-[2] text-zinc-700">
                Fire AI handles every stage of your digital journey — from
                concept and strategy to design, development, and deployment. Our
                multidisciplinary team ensures seamless collaboration across AI,
                back-end, and front-end technologies. We build scalable, secure,
                and high-performance systems tailored to your goals, with
                continuous optimization after launch.
              </p>
            </div>
            <div>
              <Image
                src="/choose2.png"
                alt="Why Choose Us"
                width={450}
                height={100}
              />
            </div>
          </motion.div>

          <motion.div
            className="md:flex justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="md:w-[50%] flex items-start gap-4">
              <span className="font-poppins text-2xl text-white px-3.5 py-1 bg-[#FF530A] rounded-full">
                3
              </span>
              <p className="font-poppins text-xl leading-[2] text-zinc-700">
                Headquartered in Dhaka, Bangladesh, Fire AI operates with a
                global vision and a deep understanding of local markets. We
                collaborate with clients across continents, blending
                international standards with the agility and dedication of a
                passionate local team. Our developers, designers, and AI
                specialists bring diverse perspectives that fuel innovation and
                precision in every project.
              </p>
            </div>
            <div>
              <Image
                src="/choose3.png"
                alt="Why Choose Us"
                width={450}
                height={100}
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
