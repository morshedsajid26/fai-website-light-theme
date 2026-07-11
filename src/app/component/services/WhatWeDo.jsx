"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../Container";
import Image from "next/image";
import {
  FiSmartphone,
  FiCpu,
  FiCode,
  FiMonitor,
  FiLayers,
  FiLayout,
} from "react-icons/fi";
import Header from "../Header";

const servicesData = [
  {
    id: 1,
    icon: <FiSmartphone size={18} />,
    title: "Mobile App Development",
    desc: "We craft seamless, high-performance mobile applications for both iOS and Android platforms. Our development approach blends intuitive, user-friendly interfaces with powerful, scalable functionality. From the conceptual phase to the final marketplace launch, we focus on creating apps that help businesses engage their customers effectively and stand out in the digital landscape.",
    sliderImages: ["/AppLeft.png", "/AppRight.png", "/App.png"],
  },
  {
    id: 2,
    icon: <FiCpu size={18} />,
    title: "AI/ML Development",
    desc: "Our team provides smart, data-driven solutions powered by Artificial Intelligence and Machine learning. These services are designed to turn complex data sets into actionable business insights. We develop intelligent tools, automation systems, and predictive models that empower businesses to make smarter, more informed decisions.",
    sliderImages: ["/AiLeft.png", "/AiRight.png", "/AI.png"],
  },
  {
    id: 3,
    icon: <FiCode size={18} />,
    title: "Custom Website Development",
    desc: "This service focuses on building tailored websites from the ground up, specifically designed to meet your unique business needs. These websites are engineered for high performance, maximum user engagement, and clear, measurable results. Unlike generic templates, custom development allows for complete control over the site's architecture and functionality.",
    sliderImages: ["/WebLeft.png", "/WebRight.png", "/Web.png"],
  },
  {
    id: 4,
    icon: <FiMonitor size={18} />,
    title: "Gaming App Development",
    desc: "We specialize in building immersive and scalable gaming experiences tailored for both mobile and web platforms. Our team manages the entire process from initial concept to launch, ensuring that every game combines engaging gameplay with robust technology. By focusing on high performance and scalability, we deliver products that prioritize long-term user retention.",
    sliderImages: ["/App.png", "/AppLeft.png", "/AppRight.png"],
  },
  {
    id: 5,
    icon: <FiLayers size={18} />,
    title: "CMS Development",
    desc: "CMS (Content Management System) development provides you with flexible and customized platforms to manage your digital assets with ease. This service focuses on creating an efficient backend infrastructure, allowing you to update, organize, and publish content without needing deep technical knowledge. It is designed to streamline your internal digital operations.",
    sliderImages: ["/UIUX.png", "/Web.png", "/WebRight.png"], // Removed /images/wordpress.png as it might not exist
  },
  {
    id: 6,
    icon: <FiLayout size={18} />,
    title: "UI/UX Design",
    desc: "UI (User Interface) and UX (User Experience) Design is centered on the visual and experiential aspects of a digital product. This service creates user-centered and visually compelling designs that ensure your product is not only beautiful but also intuitive and easy to use. The goal is to provide a seamless journey for the user from the moment they land on your platform.",
    sliderImages: ["/UiUxLeft.png", "/UiUxRight.png", "/UIUX.png"],
  },
];

const LaptopSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="relative mx-auto w-full max-w-[500px] xl:max-w-[600px] my-10 lg:my-0">
      {/* Laptop Screen / Lid */}
      <div className="relative bg-[#2a2a2a] rounded-t-[1.5rem] p-3 pb-5 border-b-4 border-[#1a1a1a] shadow-2xl z-10">
        {/* Camera */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-black rounded-full"></div>

        {/* Screen Area */}
        <div className="relative aspect-[16/10] bg-black overflow-hidden rounded-md border border-[#1a1a1a]">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentIndex] || "/UIUX.png"}
                alt="Slider screen"
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
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
                  <p className="text-[#6c757d] font-poppins leading-relaxed text-[15px] md:text-base">
                    {service.desc}
                  </p>
                </motion.div>

                {/* Laptop Slider */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="w-full lg:w-1/2 px-4 sm:px-8"
                >
                  <LaptopSlider images={service.sliderImages} />
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
