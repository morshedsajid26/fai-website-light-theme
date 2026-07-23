"use client";
import React from "react";
import Image from "next/image";
import Container from "../Container";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const teamData = [
  {
    id: 1,
    name: "Shahriar Hossain Jihad",
    designation: "Assistant Manager Operation (AMO)",
    image: "/jihad.jpg",
    quote: "Ensuring flawless content delivery and seamless digital experiences.",
  },
  {
    id: 2,
    name: "Mehedi Hasan Munna",
    designation: "Sr. Executive, Frontend ",
    image: "/munna.jpg",
    quote: "Optimizing visibility and driving organic growth through strategic SEO.",
  },
  {
    id: 3,
    name: "Samia Halim Mrittika",
    designation: "Sr. Executive, Business Development",
    image: "/mrittika.jpg",
    quote: "Crafting engaging social campaigns that resonate and convert.",
  },
  {
    id: 4,
    name: "Nirmol Malo",
    designation: "Sr. Executive, Sales",
    image: "/nirmol.jpg",
    quote: "Leading full-stack and mobile development with a focus on seamless user experiences.",
  },
   {
    id: 5,
    name: "Piqlu Chowdhury",
    designation: "Sr, Executive, Sales",
    image: "/piqlu.jpg",
    quote: "Leading full-stack and mobile development with a focus on seamless user experiences.",
  },
];

const Team = () => {
  return (
    <div className="py-20 bg-[#E76634]/5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-[#0f172a] mb-6">
            Our Strategic <span className="bg-gradient-to-r from-[#E53022] to-[#F8A024] bg-clip-text text-transparent">Architects.</span>
          </h2>
          <p className="text-zinc-600 font-poppins text-lg">
            Every successful outcome begins with our people. These are the strategic architects and passionate collaborators who guide our clients' journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {teamData.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
              className="flex flex-col group cursor-pointer"
            >
              {/* Image Card with Hover Overlay */}
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[4/5] bg-zinc-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-white text-sm font-poppins italic mb-6 leading-relaxed">
                    "{member.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-[#22c55e] hover:border-[#22c55e] transition-colors">
                      <FaFacebookF size={12} />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-[#22c55e] hover:border-[#22c55e] transition-colors">
                      <FaLinkedinIn size={12} />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-[#22c55e] hover:border-[#22c55e] transition-colors">
                      <FaTwitter size={12} />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-[#22c55e] hover:border-[#22c55e] transition-colors">
                      <FaInstagram size={12} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="text-start">
                <h3 className="text-[#0f172a] font-bold text-xl md:text-2xl font-space-grotesk mb-1">
                  {member.name}
                </h3>
                <p className="bg-gradient-to-r from-[#E53022] to-[#F8A024] bg-clip-text text-transparent font-bold text-[10px] md:text-xs tracking-widest uppercase">
                  {member.designation} 
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Team;
