"use client";
import React, { useState } from "react";
import Container from "../Container";
import { motion } from "framer-motion";
import InputField from "../InputField";
import { FaCheck } from "react-icons/fa";
import Button from "../Button";
import CustomRadio from "../CustomRadio";

const Contact = () => {
  const [projectType, setProjectType] = useState("Mobile APP");
  const [budget, setBudget] = useState("$5K - $10K");

  const budgetOptions = [
    "Less than $5K",
    "$5K - $10K",
    "$10K - $20K",
    "$20K - $50K",
    "More than $50K",
  ];

  return (
    <div id="contact" className="pt-20 bg-transparent">
      <Container>
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="relative overflow-hidden w-full rounded-[2rem] p-3 sm:p-5 md:p-8 lg:p-10 bg-gradient-to-r from-[#E53022]/50 via-[#F8A024]/90 to-[#E53022]/50 bg-[length:200%_200%] "
        >
          <div className="relative z-10 w-full grid grid-cols-12 gap-8 md:gap-4 overflow-hidden">
            <motion.div
              className="col-span-12 md:col-span-5 flex flex-col justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <p className="text-2xl md:text-4xl font-bold text-white font-space-grotesk">
                Let’s Build the Future Together
              </p>

              <p className="text-[#DFDFDF] font-poppins text-sm mt-2 w-full md:w-[370px]">
                Let’s discuss your project idea and bring it to life with
                AI-powered innovation
              </p>

              <div className="mt-8 md:mt-12 block space-y-4 md:space-y-6">
                <p className="text-[#DFDFDF] font-poppins text-base md:text-xl flex items-start md:items-center gap-3">
                  <FaCheck className="bg-[#DF5600] rounded-full p-1 md:p-1 w-5 h-5 md:w-6 md:h-6 shrink-0 mt-0.5 md:mt-0" />
                  Expect a response from us within 24 hours
                </p>

                <p className="text-[#DFDFDF] font-poppins text-base md:text-xl flex items-start md:items-center gap-3">
                  <FaCheck className="bg-[#DF5600] rounded-full p-1 md:p-1 w-5 h-5 md:w-6 md:h-6 shrink-0 mt-0.5 md:mt-0" />
                  We’re happy to sign an NDA upon request.
                </p>

                <p className="text-[#DFDFDF] font-poppins text-base md:text-xl flex items-start md:items-center gap-3">
                  <FaCheck className="bg-[#DF5600] rounded-full p-1 md:p-1 w-5 h-5 md:w-6 md:h-6 shrink-0 mt-0.5 md:mt-0" />
                  Get access to a team of dedicated product specialists.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="col-span-12 md:col-span-7 bg-gradient-to-r from-[#E73A22]/85 to-[#F48C23]/85 p-6 rounded-3xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <form>
                <div className="grid grid-cols-12 space-y-4 gap-x-4">
                  <InputField
                    label="Full Name"
                    placeholder="Enter your name"
                    className="col-span-12"
                    type="text"
                    labelClass="text-white"
                  />

                  <InputField
                    label="Your Email"
                    placeholder="Enter your email"
                    className="col-span-12 md:col-span-6"
                    type="email"
                    labelClass="text-white"
                  />

                  <InputField
                    label="Phone Number"
                    placeholder="Enter your phone number"
                    className="col-span-12 md:col-span-6"
                    type="Number"
                    labelClass="text-white"
                  />
                </div>

                {/* Project Budget Section */}
                <div className="">
                  <label className="font-space-grotesk font-bold text-lg text-white block mb-5">
                    Project Budget
                  </label>
                  <div className="flex flex-wrap gap-3 md:gap-4 lg:gap-x-8 lg:gap-y-6">
                    {budgetOptions.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBudget(b)}
                        className={`px-4 py-2 md:px-6 md:py-2.5 text-sm md:text-base whitespace-nowrap rounded-[1rem] md:rounded-2xl font-space-grotesk font-medium transition-all duration-300 border-2 select-none ${
                          budget === b
                            ? "bg-white text-[#E53022] border-white shadow-md scale-[1.02]"
                            : "bg-transparent text-white border-white hover:bg-white/10"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="my-6 max-w-md">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                    <CustomRadio
                      label="Mobile APP"
                      value="Mobile APP"
                      selectedValue={projectType}
                      onChange={setProjectType}
                    />
                    <CustomRadio
                      label="Website"
                      value="Website"
                      selectedValue={projectType}
                      onChange={setProjectType}
                    />
                    <CustomRadio
                      label="AI Agent"
                      value="AI Agent"
                      selectedValue={projectType}
                      onChange={setProjectType}
                    />
                    <CustomRadio
                      label="WordPress"
                      value="WordPress"
                      selectedValue={projectType}
                      onChange={setProjectType}
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="project-details"
                    className="font-space-grotesk font-bold text-lg text-white"
                  >
                    Project Details
                  </label>

                  <textarea
                    id="project-details"
                    // placeholder="Describe your project idea, requirements, and any specific goals you have in mind."
                    className="bg-white w-full mt-2 p-4 rounded-2xl outline-none border border-zinc-300 text-[#09090b] placeholder:text-zinc-500 font-poppins h-32 resize-none"
                  />
                </div>

                <div>
                  <Button buttonText={"Contact Us"} />
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Contact;
