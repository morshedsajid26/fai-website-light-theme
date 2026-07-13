"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../Container";
import Image from "next/image";
import {
  FiCheck,
} from "react-icons/fi";
import {
  FaRobot,
  FaMobileAlt,
  FaLaptopCode,
  FaWordpress,
  FaPaintBrush,
} from "react-icons/fa";
import Header from "../Header";

const GoogleAdsOriginalIcon = ({ size, className, style }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 250 230" 
    className={className}
    style={style}
  >
    <path fill="#3C8BD9" d="M85.9,28.6c2.4-6.3,5.7-12.1,10.6-16.8c19.6-19.1,52-14.3,65.3,9.7c10,18.2,20.6,36,30.9,54 c17.2,29.9,34.6,59.8,51.6,89.8c14.3,25.1-1.2,56.8-29.6,61.1c-17.4,2.6-33.7-5.4-42.7-21c-15.1-26.3-30.3-52.6-45.4-78.8 c-0.3-0.6-0.7-1.1-1.1-1.6c-1.6-1.3-2.3-3.2-3.3-4.9c-6.7-11.8-13.6-23.5-20.3-35.2c-4.3-7.6-8.8-15.1-13.1-22.7 c-3.9-6.8-5.7-14.2-5.5-22C83.6,36.2,84.1,32.2,85.9,28.6"/>
    <path fill="#FABC04" d="M85.9,28.6c-0.9,3.6-1.7,7.2-1.9,11c-0.3,8.4,1.8,16.2,6,23.5C101,82,112,101,122.9,120c1,1.7,1.8,3.4,2.8,5 c-6,10.4-12,20.7-18.1,31.1c-8.4,14.5-16.8,29.1-25.3,43.6c-0.4,0-0.5-0.2-0.6-0.5c-0.1-0.8,0.2-1.5,0.4-2.3 c4.1-15,0.7-28.3-9.6-39.7c-6.3-6.9-14.3-10.8-23.5-12.1c-12-1.7-22.6,1.4-32.1,8.9c-1.7,1.3-2.8,3.2-4.8,4.2 c-0.4,0-0.6-0.2-0.7-0.5c4.8-8.3,9.5-16.6,14.3-24.9C45.5,98.4,65.3,64,85.2,29.7C85.4,29.3,85.7,29,85.9,28.6"/>
    <path fill="#34A852" d="M11.8,158c1.9-1.7,3.7-3.5,5.7-5.1c24.3-19.2,60.8-5.3,66.1,25.1c1.3,7.3,0.6,14.3-1.6,21.3 c-0.1,0.6-0.2,1.1-0.4,1.7c-0.9,1.6-1.7,3.3-2.7,4.9c-8.9,14.7-22,22-39.2,20.9C20,225.4,4.5,210.6,1.8,191 c-1.3-9.5,0.6-18.4,5.5-26.6c1-1.8,2.2-3.4,3.3-5.2C11.1,158.8,10.9,158,11.8,158"/>
  </svg>
);

const servicesData = [
  {
    id: 1,
    icon: <FaRobot size={20} />,
    color: "#ff4e27",
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
    icon: <FaMobileAlt size={20} />,
    color: "#3DDC84",
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
    icon: <FaLaptopCode size={20} />,
    color: "#3b82f6",
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
    icon: <FaWordpress size={20} />,
    color: "#21759b",
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
    icon: <FaPaintBrush size={20} />,
    color: "#ec4899",
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
    icon: <GoogleAdsOriginalIcon size={20} />,
    color: "#4285F4",
    title: "Google Ads & Digital Marketing",
    desc: "We create data-driven Google Ads strategies that help businesses reach the right audience, increase visibility, and generate measurable results through optimized campaigns.",
    offers: [
      "Google Search Ads",
      "Display Advertising",
      "Campaign Optimization",
      "Conversion Tracking",
      "Performance Analysis"
    ],
    image: "/GoogleAds.jpeg",
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
                  <div className="mb-6 flex items-center gap-4">
                    <div 
                      className="inline-flex items-center justify-center p-2.5 border border-zinc-200 rounded-lg bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)] shrink-0"
                      style={{ color: service.color }}
                    >
                      {service.icon}
                    </div>
                    <h2 className="text-2xl md:text-[34px] font-bold text-[#4a4a4a] font-space-grotesk leading-tight">
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
