"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../Container";
import Image from "next/image";
import {
  FiSmartphone,
  FiCpu,
  FiCode,
  FiLayers,
  FiLayout,
  FiMonitor,
  FiTrendingUp,
  FiCheck,
} from "react-icons/fi";
import Header from "../Header";

const servicesData = [
  {
    id: 1,
    icon: <FiCpu size={18} />,
    title: "AI/ML Development",
    desc: "At Fire AI, we leverage the power of Artificial Intelligence and Machine Learning to build intelligent solutions that automate processes, enhance decision-making, and help businesses operate smarter.",
    offers: [
      "AI-Powered Automation",
      "AI Agents & Chatbots",
      "Voice Agents",
      "Machine Learning Solutions",
      "Intelligent Data Processing"
    ],
    image: "/AIDrivestCover.jpg.jpeg",
  },
  {
    id: 2,
    icon: <FiSmartphone size={18} />,
    title: "Mobile App Development",
    desc: "We design and develop high-performance mobile applications that deliver seamless user experiences and help businesses connect with customers anywhere.",
    offers: [
      "iOS & Android Applications",
      "Cross-Platform App Development",
      "Custom Business Apps",
      "App UI/UX Design",
      "API Integration"
    ],
    image: "/MobileAppCover.jpg.jpeg",
  },
  {
    id: 3,
    icon: <FiCode size={18} />,
    title: "Custom Website Development",
    desc: "We develop high-performance, custom websites that are tailored to your business goals, delivering exceptional user experiences with secure, scalable, and modern web technologies.",
    offers: [
      "Custom Web Applications",
      "Business Websites",
      "E-commerce Platforms",
      "SAAS Websites",
      "Third-Party Integrations"
    ],
    image: "/WebsiteCover.jpg.jpeg",
  },
  {
    id: 4,
    icon: <FiLayers size={18} />,
    title: "CMS Development",
    desc: "We build flexible and easy-to-manage CMS solutions that empower businesses to update, manage, and grow their digital presence without technical complexity.",
    offers: [
      "WordPress Development",
      "Wix Website Solutions",
      "CMS Customization",
      "Website Maintenance",
      "Content Management Solutions"
    ],
    image: "/CMScover.jpg.jpeg",
  },
  {
    id: 5,
    icon: <FiLayout size={18} />,
    title: "UI/UX Design",
    desc: "Our UI/UX design approach focuses on creating intuitive, visually engaging, and user-centered digital experiences that make every interaction simple, enjoyable, and impactful.",
    offers: [
      "User Interface Design",
      "User Experience Research",
      "Wireframing & Prototyping",
      "Design Systems",
      "Mobile & Web App Design"
    ],
    image: "/UIcover.png.jpeg",
  },
  {
    id: 6,
    icon: <FiTrendingUp size={18} />,
    title: "Google Ads & Digital Marketing",
    desc: "We create data-driven Google Ads strategies that help businesses reach the right audience, increase visibility, and generate measurable results through optimized campaigns.",
    offers: [
      "Google Search Ads",
      "Display Advertising",
      "Campaign Optimization",
      "Conversion Tracking",
      "Performance Analysis"
    ],
    image: "/Web.png",
  },
];

const LaptopSlider = ({ image }) => {
  return (
    <div className="relative mx-auto w-full max-w-[500px] xl:max-w-[600px] my-10 lg:my-0">
      {/* Laptop Screen / Lid */}
      <div className="relative bg-[#2a2a2a] rounded-t-[1.5rem] p-3 pb-5 border-b-4 border-[#1a1a1a] shadow-2xl z-10 ">
        {/* Camera */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-black rounded-full"></div>

        {/* Screen Area */}
        <div className="relative aspect-[16/10] bg-black overflow-hidden rounded-md border border-[#1a1a1a]">
          <div className="absolute inset-0">
            <Image
              src={image || "/UIUX.png"}
              alt="Service presentation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Laptop Base */}
      <div className="relative w-[114%] -left-[7%] h-4 sm:h-5 bg-[#d4d4d4] rounded-b-2xl shadow-xl flex justify-center z-0 border-t border-[#b0b0b0]">
        {/* Trackpad Indent */}
        <div className="absolute top-0 w-1/4 h-1.5 sm:h-2 bg-[#b8b8b8] rounded-b-md"></div>
      </div>
    </div>
  );
};

const WhatWeDo = () => {
  return (
    <div className="py-24 bg-[#f7f8f9]">
      <Container>
        <Header
          titleText="What We Do?"
          subtitleText="Transforming ideas into intelligent digital experiences"
        />

        <div className="space-y-32 mt-24">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 1; // Alternating layout

            return (
              <div
                key={service.id}
                className={`flex flex-col ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20 overflow-hidden py-4`}
              >
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full lg:w-1/2"
                >
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center p-2 border border-zinc-300 rounded-md text-zinc-600 mb-4 bg-white shadow-sm">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl md:text-[34px] font-bold text-[#4a4a4a] font-space-grotesk mb-6">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-[#6c757d] font-poppins leading-relaxed text-[15px] md:text-base mb-6">
                    {service.desc}
                  </p>
                  <div>
                    <h3 className="font-bold text-[#1a1a1a] mb-3 font-space-grotesk text-lg">
                      What We Offer:
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                      {service.offers.map((offer, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[#4a4a4a] text-sm md:text-[15px]">
                          <span className="mt-1 text-[#ff4e27]"><FiCheck size={16} /></span>
                          <span className="font-poppins">{offer}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Laptop Display */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="w-full lg:w-1/2 px-4 sm:px-8"
                >
                  <LaptopSlider image={service.image} />
                </motion.div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default WhatWeDo;
