"use client";
import React from "react";
import Container from "../Container";
import Header from "../Header";
import Marquee from "react-fast-marquee";
import {
  SiOpenai,
  SiTwilio,
  SiZapier,
  SiWix,
  SiWordpress,
  SiShopify,
  SiGoogleads,
  SiYoutube,
} from "react-icons/si";
import { motion } from "framer-motion";

const row1 = [
  {
    name: "Python",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "React",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  { name: "OpenAI", icon: <SiOpenai size={56} color="#09090b" /> },
  {
    name: "Python",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "React",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "MongoDB",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  { name: "Wix", icon: <SiWix size={56} color="#000000" /> },
  { name: "WordPress", icon: <SiWordpress size={56} color="#21759B" /> },
];

const row2 = [
  {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "Figma",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
  { name: "Twilio", icon: <SiTwilio size={56} color="#F22F46" /> },
  {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "Flutter",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  },
  {
    name: "Figma",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
  { name: "Zapier", icon: <SiZapier size={56} color="#FF4A00" /> },
  { name: "Shopify", icon: <SiShopify size={56} color="#95BF47" /> },
  { name: "Google Ads", icon: <SiGoogleads size={56} color="#4285F4" /> },
  { name: "YouTube Ads", icon: <SiYoutube size={56} color="#FF0000" /> },
];

const TechCard = ({ tech }) => (
  <div className="flex flex-col items-center justify-center w-[200px] md:w-[300px] gap-6">
    {tech.icon ? (
      tech.icon
    ) : (
      <img
        src={tech.img}
        alt={tech.name}
        className="object-contain w-14 h-14 md:w-16 md:h-16"
      />
    )}
    <span className="text-[#09090b] font-space-grotesk text-lg md:text-3xl font-light">
      {tech.name}
    </span>
  </div>
);

const TechnologyStack = () => {
  return (
    <div className="pt-20 overflow-x-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Header titleText="The Technology Stack Behind Fire AI" />
        </motion.div>

        <motion.div
          className="mt-20 flex flex-col gap-12 md:gap-20 w-full overflow-x-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Row 1 - Moves Left */}
          <div className="overflow-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <Marquee
              speed={80}
              pauseOnHover={false}
              gradient={false}
              direction="left"
              className="overflow-hidden [&::-webkit-scrollbar]:hidden"
            >
              {row1.map((tech, i) => (
                <TechCard key={`row1-${i}`} tech={tech} />
              ))}
            </Marquee>
          </div>

          {/* Row 2 - Moves Right */}
          <div className="overflow-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <Marquee
              speed={80}
              pauseOnHover={false}
              gradient={false}
              direction="right"
              className="overflow-hidden [&::-webkit-scrollbar]:hidden"
            >
              {row2.map((tech, i) => (
                <TechCard key={`row2-${i}`} tech={tech} />
              ))}
            </Marquee>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default TechnologyStack;
