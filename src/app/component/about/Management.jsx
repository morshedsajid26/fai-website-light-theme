"use client";
import React from "react";
import Header from "../Header";
import Image from "next/image";
import Container from "../Container";
import { motion } from "framer-motion";

const managementData = [
  {
    id: 1,
    name: "Muhammad Monir Hossain",
    title: "Leading with Vision, Building with Purpose",
    description:
      "Muhammad Monir Hossain is a visionary leader with a proven track record of driving digital transformation. As the Managing Director & Group CEO of Betopia Group, he leads with purpose—bridging technology and business strategy to create scalable, secure, and future-ready ecosystems.",
    designation: " Managing Director & Group CEO",
    company: "BETOPIA GROUP",
    image: "/CEO.png",
    reverse: false,
  },
  {
    id: 2,
    name: "Sabina Akter",
    title: "Empowering Growth, Inspiring Innovation",
    description:
      "As the Chairman of Betopia Group, Sabina Akter plays a vital role in shaping the company's long-term direction and success. She is passionate about building an inclusive ecosystem where innovation and collaboration go hand in hand.",
    designation: "CHAIRMAN",
    company: "BETOPIA GROUP",
    image: "/chairman.png",
    reverse: true,
  },
  {
    id: 3,
    name: "Amirul Haque Shuhan",
    title: "Engineering the Future, One Solution at a Time",
    description:
      "Amirul Haque Shuhan is a strategic leader dedicated to operational excellence and business growth. As Vice President, he oversees key agency initiatives, ensuring that Scaleup Ads Agency continues to deliver high-impact results for clients through innovation and disciplined execution.",
    designation: "VICE PRESIDENT",
    company: "BETOPIA GROUP",
    image: "/VP.png",
    reverse: false,
  },
];

const Management = () => {
  return (
    <div className="py-20 bg-[#fafaf9]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
          className="mb-16"
        >
          <Header
            titleText={`Management`}
            subtitleText={`Our management team brings deep experience, strong leadership, and clear direction. They focus on driving growth, building a positive work culture, and ensuring long-term success.`}
          />
        </motion.div>

        <div className="flex flex-col gap-24 mt-20">
          {managementData.map((person, index) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
              className={`flex flex-col ${
                person.reverse ? "md:flex-row-reverse" : "md:flex-row"
              } items-center justify-between gap-10 md:gap-20`}
            >
              {/* Image Section */}
              <div className={`w-full md:w-1/2 flex ${person.reverse ? "justify-end" : "justify-start"}`}>
                <div className="relative">
                  {/* Subtle fade at the bottom of the image for the effect in screenshots */}
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={600}
                    height={600}
                    className="object-contain max-h-[600px] z-10 relative"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#fafaf9] to-transparent z-20"></div>
                </div>
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2 flex flex-col items-start text-start space-y-6">
                <h3 className="text-3xl md:text-5xl font-bold font-space-grotesk text-[#0f172a] leading-tight tracking-tight">
                  {person.title}
                </h3>
                <p className="text-zinc-600 font-poppins text-lg leading-relaxed">
                  {person.description}
                </p>
                <div className="pt-4">
                  <h4 className="bg-gradient-to-r from-[#E53022] to-[#F8A024] bg-clip-text text-transparent font-bold text-xl md:text-2xl font-space-grotesk mb-1">
                    {person.name}
                  </h4>
                  <p className="text-slate-500 font-bold text-sm tracking-widest uppercase">
                    {person.designation}
                  </p>
                  <p className="text-slate-400 font-semibold text-xs tracking-widest uppercase mt-0.5">
                    {person.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Management;
