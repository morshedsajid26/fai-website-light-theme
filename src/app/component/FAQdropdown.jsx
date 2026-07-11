"use client";
import React, { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { motion } from "framer-motion";

const FAQdropdown = ({ question, answer, className }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="w-full flex justify-center"
    >
      <div
        className={`md:w-[80%] w-full bg-gradient-to-r from-[#E53022] to-[#F8A024] pb-[1px] ${className}`}
      >
        <div
          onClick={() => setDropdown(!dropdown)}
          className="cursor-pointer px-8  bg-white"
        >
          <div className="up flex items-center justify-between py-4 md:py-[25.5px]">
            <h4 className="text-[#09090b] text-lg md:text-3xl font-poppins">
              {question}
            </h4>
            {dropdown ? (
              <MdArrowDropUp className="md:w-8 w-6 md:h-8 h-6 text-[#09090b] " />
            ) : (
              <MdArrowDropDown className="md:w-8 w-6 h-6 md:h-8 text-[#09090b] " />
            )}
          </div>
          <p
            className={`text-zinc-700  md:text-xl  font-poppins  ${dropdown ? "opacity-100 h-auto visible overflow-auto pb-4" : "opacity-0 h-0 invisible overflow-hidden"}`}
          >
            {answer}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FAQdropdown;
