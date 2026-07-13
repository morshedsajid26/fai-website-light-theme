"use client";
import Image from "next/image";
import React from "react";
import Container from "../Container";
import Header from "../Header";
import Slider from "react-slick";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = ({ name, text, company }) => {
  return (
    <div className="bg-white w-full rounded-2xl p-8 col-span-2 md:col-span-1 md border border-zinc-200 shadow-md h-full">
      <Image
        src={"/FireAiLogo.png"}
        alt={`logo`}
        width={100}
        height={50}
        className="h-[40px] w-auto"
      />

      <p className="font-space-grotesk text-zinc-700 text-lg md:text-xl leading-relaxed md:h-30 h-50
      mt-5 ">
        "{text}"
      </p>

      <div className="font-space-grotesk flex flex-col mt-5">
        <span className="text-[#E53022] font-bold text-xl">{name}</span>
        <span className="text-zinc-500 text-base">{company}</span>
      </div>
    </div>
  );
};

const VoiceofPartners = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const partners = [
    {
      name: "Steve Zee",
      text: "Fire AI and their team were so professional. From the first discussion all the way through to the end they were exceptional. Their communication and patience are first class and this was so important to me whilst building a website. The quality of their work is superb!",
      company: "CEO of XYZ Company",
    },
    {
      name: "Sarah Jenkins",
      text: "Working with Fire AI has been an absolute game-changer for our internal operations. Their automated AI solutions reduced our overhead significantly and everything was delivered perfectly on time.",
      company: "CTO, NextGen Tech",
    },
    {
      name: "Michael Roe",
      text: "I was blown away by the level of detail and care the Fire AI team put into our chatbot integration. The AI feels incredibly human, which is exactly why we chose them over competitors.",
      company: "Director of Support, AlphaRetail",
    },
  ];

  return (
    <div className="py- overflow-hidden">
      <div className="relative bg-gradient-to-br from-orange-50 to-red-50 py-25 ">
        <Container className="relative z-10">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Header
              titleText={`Voices of Our Partners`}
              subtitleText={`See how our clients are transforming their ideas into success with AI`}
            />
          </motion.div>

          <motion.div
            className="-mx-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Slider {...settings}>
              {partners.map((partner, idx) => (
                <div
                  key={idx}
                  className="px-4 py-4 h-full grid grid-cols-2 gap-6"
                >
                  <Card
                    name={partner.name}
                    text={partner.text}
                    company={partner.company}
                  />
                </div>
              ))}
            </Slider>
          </motion.div>
        </Container>
      </div>
    </div>
  );
};

export default VoiceofPartners;
