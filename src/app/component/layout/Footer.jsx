"use client";
import React from "react";
import Container from "../Container";
import {
  FaEnvelopeOpen,
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="pt-">
      <div className="bg-white border border-zinc-200 shadow-md p-6 md:p-10 rounded-3xl relative overflow-hidden w-full">
        {/* Background Watermark Logo */}
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-10">
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-[80%] md:w-[80%]"
          >
            <Image
              src="/FireAiLogo.png"
              alt="Watermark"
              width={1200}
              height={1200}
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>

        <Container>
          <div className="relative z-10 w-full">
            <motion.div
              className="down flex flex-col lg:flex-row justify-between gap-12 pt-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                },
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className=""
              >
                <div className="h-[60px] flex items-center justify-start overflow-hidden -ml-5 ">
                  <Image
                    src="/FireAiLogo.png"
                    alt="logo"
                    width={150}
                    height={150}
                    className="w-[150px] h-auto"
                  />
                </div>

                <p className="font-istok-web text-zinc-600 mt-2">
                  Leading global provider of software design and development
                  services
                </p>

                <div className="flex flex-col gap-5 my-10">
                  <div className="flex items-center gap-3">
                    <FaPhone size={14} className="text-[#FF4400] shrink-0" />
                    <p className="text-[#09090b] text-[15px] font-bold font-istok-web">
                      +1 (123) 456-7890
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelopeOpen
                      size={14}
                      className="text-[#FF4400] shrink-0"
                    />
                    <p className="text-[#09090b] text-[15px] font-bold font-istok-web">
                      support@mail.com
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt
                      size={14}
                      className="text-[#FF4400] shrink-0 mt-1"
                    />
                    <p className="text-[#09090b] text-[15px] font-bold font-istok-web leading-tight">
                      Daisy Garden, Banasree A block <br />
                      <span className="text-zinc-500 font-normal text-sm">
                        Dhaka, Bangladesh
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="border border-zinc-300 p-2 rounded-full text-[#09090b] hover:text-[#F8A024] hover:border-[#F8A024] transition-colors"
                  >
                    <FaFacebookF size={20} />
                  </a>

                  <a
                    href="#"
                    className="border border-zinc-300 p-2 rounded-full text-[#09090b] hover:text-[#F8A024] hover:border-[#F8A024] transition-colors"
                  >
                    <FaXTwitter size={20} />
                  </a>

                  <a
                    href="#"
                    className="border border-zinc-300 p-2 rounded-full text-[#09090b] hover:text-[#F8A024] hover:border-[#F8A024] transition-colors"
                  >
                    <FaLinkedinIn size={20} />
                  </a>
                  <a
                    href="#"
                    className="border border-zinc-300 p-2 rounded-full text-[#09090b] hover:text-[#F8A024] hover:border-[#F8A024] transition-colors"
                  >
                    <FaWhatsapp size={20} />
                  </a>
                </div>
              </motion.div>

              <div className="w-full lg:w-[65%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <p className="text-[#09090b] font-bold uppercase font-istok-web">
                    Pages
                  </p>
                  <ul className="space-y-4 mt-5 font-istok-web text-zinc-600">
                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-1 hover:text-[#F8A024] transition-colors"
                      >
                        <IoIosArrowForward size={16} />
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-1 hover:text-[#F8A024] transition-colors"
                      >
                        <IoIosArrowForward size={16} />
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-1 hover:text-[#F8A024] transition-colors"
                      >
                        <IoIosArrowForward size={16} />
                        Team
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-1 hover:text-[#F8A024] transition-colors"
                      >
                        <IoIosArrowForward size={16} />
                        FAQs
                      </a>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <p className="text-[#09090b] font-bold uppercase font-istok-web">
                    SERVICES
                  </p>
                  <ul className="space-y-4 mt-5 font-istok-web text-zinc-600">
                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-1 hover:text-[#F8A024] transition-colors"
                      >
                        <IoIosArrowForward size={16} />
                        Software Development
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-1 hover:text-[#F8A024] transition-colors"
                      >
                        <IoIosArrowForward size={16} />
                        AI Programer
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-1 hover:text-[#F8A024] transition-colors"
                      >
                        <IoIosArrowForward size={16} />
                        System Application
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-1 hover:text-[#F8A024] transition-colors"
                      >
                        <IoIosArrowForward size={16} />
                        Network Solution
                      </a>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="w-full max-w-[320px]"
                >
                  <p className="text-[#09090b] font-bold uppercase font-istok-web">
                    NEWSLETTER
                  </p>
                  <div className="mt-5 flex items-center bg-white rounded-full p-1 border border-gray-300">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 bg-transparent px-4 outline-none text-gray-700 font-istok-web placeholder:text-gray-500 w-full"
                    />
                    <button className="bg-gradient-to-r from-[#E53022] to-[#F8A024] text-white p-2.5 rounded-full flex items-center justify-center hover:bg-[#6240df] transition-colors shrink-0">
                      <FaArrowRight size={16} />
                    </button>
                  </div>
                  <p className="text-zinc-600 mt-6 font-istok-web text-[15px] leading-relaxed">
                    Nisl rhoncus mattis rhoncus urna neque viverra.{" "}
                    <span className="font-bold text-[#09090b]">
                      Unsubscribe
                    </span>
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="mt-15 pt-8  text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: false }}
            >
              <p className="text-zinc-500 font-istok-web">
                © Copyright by{" "}
                <span className="text-[#FF4400] font-bold">Fire AI</span> – All
                right reserved.
              </p>
            </motion.div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
