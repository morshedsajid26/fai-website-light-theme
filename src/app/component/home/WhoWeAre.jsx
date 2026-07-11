"use client";
import React from "react";
import Header from "../Header";
import Image from "next/image";
import Container from "../Container";
import Button from "../Button";
import { motion } from "framer-motion";

const WhoWeAre = () => {
  return (
    <div className="pt-20 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <Header
            titleText="Who We Are?"
            subtitleText="Building the Future with Intelligent Technology"
          />
        </motion.div>

        <div className="grid grid-cols-12 gap-10 mt-15">
          <motion.div
            className="col-span-12 md:col-span-6 grid grid-cols-12 gap-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="col-span-6">
              <Image
                src={"/office1.png"}
                alt="office1"
                width={400}
                height={200}
                quality={100}
                className="h-auto"
              />
            </div>
            <div className="col-span-6 space-y-5">
              <Image
                src={"/office2.png"}
                alt="office1"
                width={400}
                height={200}
                quality={100}
                className="h-auto"
              />
              <Image
                src={"/office3.png"}
                alt="office1"
                width={400}
                height={200}
                quality={100}
                className="h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            className="col-span-12 md:col-span-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="font-poppins text-xl text-zinc-700 space-y-5 mb-10">
              <p>
                At <span className="text-[#E53022] font-medium">Fire AI</span>,
                we harness the trans-formative power of artificial intelligence
                to create technology that learns, adapts, and evolves.
              </p>
              <p>
                As a pioneering AI-based software provider from Dhaka,
                Bangladesh, and a concern of{" "}
                <span className="text-[#E53022] font-medium">
                  Betopia Group
                </span>
                , Fire AI is built by a passionate team of engineers, designers,
                and innovators dedicated to shaping the next era of smart
                automation and human-centric design.
              </p>
              <p>
                From AI-powered chat-bots and automation systems to intelligent
                web and app solutions, we craft digital experiences that are
                fast, scalable, and seamlessly connected.
              </p>
              <p>
                Our mission is simple - to make technology feel more natural,
                more efficient, and more human
              </p>
            </div>

            <div className="">
              <Button buttonText="Learn more" />
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default WhoWeAre;
