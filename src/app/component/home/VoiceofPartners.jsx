"use client";
import Image from "next/image";
import React from "react";
import Container from "../Container";
import Header from "../Header";
import Slider from "react-slick";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = ({ name, nationality, text }) => {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 border border-zinc-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] h-full mx-3 partner-card transition-all duration-300">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff4e27]/20 to-[#F8A024]/20 flex items-center justify-center text-xl font-bold text-[#ff4e27]">
            {name.charAt(0)}
          </div>
          <div>
            <h4 className="text-[#09090b] font-bold text-base md:text-lg leading-tight font-poppins">
              {name}
            </h4>
            <p className="text-zinc-500 text-xs md:text-sm font-poppins mt-1">
              {nationality}
            </p>
          </div>
        </div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-[#F8A024] fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
      <p className="text-zinc-700 leading-relaxed font-poppins text-sm md:text-base line-clamp-3 md:line-clamp-4">
        {text}
      </p>
    </div>
  );
};

const VoiceofPartners = () => {
  const row1Partners = [
    {
      name: "Waleed",
      nationality: "United Kingdom",
      text: "“Raton and The team have done an excellent job delivering the frontend development of our project. They work very hard and honestly; the work has been completed on time, and the quality of execution shows real professionalism. We’re pleased with how everything has come together so far and excited to continue working with them on the next phases. Highly recommended.”",
    },
    {
      name: "Rachel",
      nationality: "Netherlands",
      text: "“I am very happy working with this team. Very professional, attentive to details, cooperative, and responsible. Highly recommended! ”",
    },
    {
      name: "Varunsingh",
      nationality: "United Kingdom",
      text: "“Their team is very helpful. They are available always in the first place to understand the confusion. Will come back soon with more projects. Highly recommend to someone who do not know what to do with their project! All the best.\"",
    },
    {
      name: "Irakliberdzenad",
      nationality: "Georgia",
      text: "“Great experience working with Sheraz. The UI design looks clean, professional, and ready for development. Excellent communication and fast delivery. Highly recommend!\"",
    },
    {
      name: "Talpahima",
      nationality: "USA",
      text: "“Raton has the best team and service! Thank you for making my wish come true!\"",
    },
    {
      name: "Roryclerkin",
      nationality: "Canada",
      text: "“Very impressed with Rakibul and his team. Extremely competent and understanding of the task at hand!\"",
    },
    {
      name: "Djesaja",
      nationality: "Netherlands",
      text: "“It is perfect; they know everything about AI. Speak fluent English and know how to design an app. Really recommend it!\"",
    },
    {
      name: "Akilah Collins",
      nationality: "United States",
      text: "“Working with this development team has been such a positive experience! They are very talented, willing to jump on a Zoom call at any time to answer questions and walk through the details of the development phases, etc.\"",
    },
    {
      name: "Deepa Balaji",
      nationality: "United States",
      text: "“Excellent work so far and thrilled for the functional development.\"",
    },
    {
      name: "Johan",
      nationality: "Netherlands",
      text: "“As a project getting more shape. The questions rise, and Rokun and the team have a good discussion and fix or find solutions. Communication is key! Very well done.\"",
    },
  ];

  const row2Partners = [
    {
      name: "Tinas",
      nationality: "Germany",
      text: "“Great Work Exactly as i wanted it.\"",
    },
    {
      name: "revivalh",
      nationality: "",
      text: "“Great work! Very professional, efficient, detailed, quick, and carried out extra steps/details outside of the scope of the project. I highly recommend and will continue to do projects with Rakibul and the team.\"",
    },
    {
      name: "danparkbiz",
      nationality: "Somalia",
      text: "“A pleasure working with Rakibul. Communication was excellent, and the project was completed on time, and I was updated every step of the way. Will be using again in the future.”",
    },
    {
      name: "sharma",
      nationality: "United Kingdom",
      text: "“Excellent experience! The team was patient, professional, and very helpful throughout the entire project. They listened to all my ideas and feedback and worked hard to create a webshop that looks modern, professional, and ready for growth. Communication was clear, updates were frequent, and they always tried their best to go the extra mile. I am very happy with the final result and would definitely recommend them to others. Thank you for your dedication and support!”",
    },
    {
      name: "Robert",
      nationality: "Qatar",
      text: "“Tauqir and his team demonstrated exceptional technical expertise, professionalism, and clear communication throughout the project. They provided well-structured architecture guidance for multi-tenant SaaS, AI orchestration, CRM integration, omnichannel workflows, and scalable backend systems. The team was transparent about technical limitations and future scalability considerations and recommended practical phased development strategies instead of overpromising. Their knowledge of Voice AI, RAG systems, tenant isolation, and backend architecture is highly impressive. Looking forward to continuing the backend and AI platform development together.”",
    },
    {
      name: "bizsolutio",
      nationality: "United Kingdom",
      text: "“Amazing work, can’t fault them, and excited for future projects to come! Great attention to detail and execution! ”",
    },
    {
      name: "Rohan Morris",
      nationality: "United Kingdom",
      text: "“Great working with Tauqir and his team; happy with the first phase of this project.\"",
    },
    {
      name: "Thomas & Steve",
      nationality: "United States",
      text: "“They did a great job, and they were super available, and collaboration was really great.\"",
    },
    {
      name: "Idress",
      nationality: "Iraq",
      text: "“Great working with these guys.\"",
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-20 md:py-32 overflow-hidden bg-[#fafaf9]">
      <Container>
        <motion.div
          className="mb-16 text-center"
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
      </Container>

      <motion.div
        className="partners-container w-full flex flex-col gap-6 relative"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Row 1 - Left to Right */}
        <div className="w-full flex overflow-hidden">
          <div className="flex w-max shrink-0 animate-marquee-ltr">
            {[...row1Partners, ...row1Partners].map((partner, idx) => (
              <div key={idx} className="py-4 w-[350px] md:w-[500px] lg:w-[600px]">
                <Card
                  name={partner.name}
                  nationality={partner.nationality}
                  text={partner.text}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="w-full flex overflow-hidden">
          <div className="flex w-max shrink-0 animate-marquee-rtl">
            {[...row2Partners, ...row2Partners].map((partner, idx) => (
              <div key={idx} className="py-4 w-[350px] md:w-[500px] lg:w-[600px]">
                <Card
                  name={partner.name}
                  nationality={partner.nationality}
                  text={partner.text}
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VoiceofPartners;
