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
    quote: "Streamlining operations and ensuring flawless execution for seamless digital experiences.",
  },
  {
    id: 2,
    name: "Mehedi Hasan Munna",
    designation: "Sr. Executive, Frontend ",
    image: "/munna.jpg",
    quote: "Crafting intuitive, pixel-perfect web interfaces to deliver exceptional user experiences.",
  },
  {
    id: 3,
    name: "Samia Halim Mrittika",
    designation: "Sr. Executive, Business Development",
    image: "/mrittika.jpg",
    quote: "Driving strategic partnerships and identifying new opportunities for sustainable business growth.",
  },
  {
    id: 4,
    name: "Nirmol Malo",
    designation: "Sr. Executive, Sales",
    image: "/nirmol.jpg",
    quote: "Building strong client relationships and delivering value-driven solutions for impactful sales.",
  },
   {
    id: 5,
    name: "Piqlu Chowdhury",
    designation: "Sr. Executive, Sales",
    image: "/piqlu.jpg",
    quote: "Connecting clients with the right solutions and maximizing business value through strategic sales.",
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
                    <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-gradient-to-r from-[#E53022] to-[#F8A024] transition-colors">
                      <FaFacebookF size={12} />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-gradient-to-r from-[#E53022] to-[#F8A024]  transition-colors">
                      <FaLinkedinIn size={12} />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-gradient-to-r from-[#E53022] to-[#F8A024]  transition-colors">
                      <FaTwitter size={12} />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-gradient-to-r from-[#E53022] to-[#F8A024]  transition-colors">
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
