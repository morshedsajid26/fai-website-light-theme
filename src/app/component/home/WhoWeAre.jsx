"use client";
import React from "react";
import Header from "../Header";
import Image from "next/image";
import Container from "../Container";
import Button from "../Button";
import { motion } from "framer-motion";

const WhoWeAre = () => {
  return (
    <div className="py-20 overflow-hidden bg-[#E76634]/5">
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
            className="col-span-12 lg:col-span-6 grid grid-cols-2 gap-4 lg:gap-6 min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="relative w-full h-full">
              <Image
                src={"/office1.png"}
                alt="office1"
                fill
                quality={100}
                className="object-cover rounded-tr-[100px] rounded-tl-2xl rounded-bl-[100px] rounded-br-2xl"
              />
            </div>
            <div className="flex flex-col gap-4 lg:gap-6 h-full">
              <div className="relative w-full h-1/2">
                <Image
                  src={"/office2.png"}
                  alt="office2"
                  fill
                  quality={100}
                  className="object-cover rounded-tr-[100px] rounded-tl-2xl rounded-bl-[100px] rounded-br-2xl"
                />
              </div>
              <div className="relative w-full h-1/2">
                <Image
                  src={"/office3.png"}
                  alt="office3"
                  fill
                  quality={100}
                  className="object-cover rounded-tl-[100px] rounded-tr-2xl rounded-br-[100px] rounded-bl-2xl"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="col-span-12 lg:col-span-6 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="font-poppins text-base md:text-lg text-zinc-700 space-y-4 mb-8">
              <p>
                At <span className="text-[#E53022] font-medium">Fire AI</span>,
                we build intelligent digital solutions that empower businesses
                to innovate, automate, and grow.
              </p>
              <p>
                As a pioneering AI software company based in Dhaka, Bangladesh,
                and a concern of{" "}
                <span className="text-[#E53022] font-medium">
                  Betopia Group
                </span>
                , we combine artificial intelligence, software engineering, and
                creative design to deliver impactful technology solutions.
              </p>
              <p>
                Our expertise spans{" "}
                <span className="font-semibold">
                  AI Automation, Custom Software Development, Web & Mobile
                  Applications, UI/UX Design, CMS Development (WordPress,
                  Shopify & Wix), Google Ads Management, and Business Process
                  Automation,
                </span>{" "}
                providing businesses with end-to-end digital transformation
                under one roof.
              </p>
              <p>
                Whether you're launching a startup, modernizing an existing
                business, or scaling your online presence, Fire AI is your
                trusted technology partner.
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
