"use client";
import React, { useState } from "react";
import Container from "../Container";
import { motion } from "framer-motion";
import InputField from "../InputField";
import { FaCheck } from "react-icons/fa";
import Button from "../Button";
import CustomRadio from "../CustomRadio";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [projectType, setProjectType] = useState("Mobile APP");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !email || !details) {
      setMessage({ type: "error", text: "Please fill in all required fields." });
      return;
    }

    setLoading(true);
    setMessage(null);

    const templateParams = {
      user_name: name,
      user_email: email,
      user_phone: phone,
      project_type: projectType,
      message: details,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          setLoading(false);
          setMessage({ type: "success", text: "Message sent successfully!" });
          setName("");
          setEmail("");
          setPhone("");
          setDetails("");
          setProjectType("Mobile APP");
          setTimeout(() => setMessage(null), 5000);
        },
        (error) => {
          setLoading(false);
          setMessage({ type: "error", text: "Failed to send message. Please try again." });
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div id="contact" className="py-20">
      <Container>
        <div className="rounded-[2rem] p-[1.5px] bg-gradient-to-r from-[#E53022]/40 to-[#F8A024]/40 shadow-sm">
          <div className="relative overflow-hidden w-full rounded-[2rem] p-6 sm:p-8 md:p-10 bg-[#fafaf9]">
            <div className="relative z-10 w-full grid grid-cols-12 gap-10 lg:gap-8">
              <motion.div
                className="col-span-12 lg:col-span-5 flex flex-col justify-center"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#09090b] font-space-grotesk leading-tight">
                  Let’s Build the Future Together
                </h2>

                <p className="text-zinc-600 font-poppins text-base md:text-lg mt-4 w-full md:w-[90%]">
                  Let’s discuss your project idea and bring it to life with
                  AI-powered innovation.
                </p>

                <div className="mt-8 md:mt-12 block space-y-4 md:space-y-6">
                  <p className="text-[#09090b] font-poppins text-base md:text-lg flex items-start gap-4">
                    <span className="flex items-center justify-center bg-[#E76634]/15 rounded-full p-2 shrink-0 mt-0.5">
                      <FaCheck className="text-[#FF4400] w-3 h-3 md:w-4 md:h-4" />
                    </span>
                    Expect a response from us within 24 hours.
                  </p>

                  <p className="text-[#09090b] font-poppins text-base md:text-lg flex items-start gap-4">
                    <span className="flex items-center justify-center bg-[#E76634]/15 rounded-full p-2 shrink-0 mt-0.5">
                      <FaCheck className="text-[#FF4400] w-3 h-3 md:w-4 md:h-4" />
                    </span>
                    We’re happy to sign an NDA upon request.
                  </p>

                  <p className="text-[#09090b] font-poppins text-base md:text-lg flex items-start gap-4">
                    <span className="flex items-center justify-center bg-[#E76634]/15 rounded-full p-2 shrink-0 mt-0.5">
                      <FaCheck className="text-[#FF4400] w-3 h-3 md:w-4 md:h-4" />
                    </span>
                    Get access to a team of dedicated product specialists.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="col-span-12 lg:col-span-7 bg-[#fafaf9] p-6 md:p-8 rounded-3xl border border-zinc-100 shadow-sm"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-12 gap-y-4 md:gap-y-6 gap-x-4">
                    <InputField
                      label="Full Name"
                      placeholder="Enter your name"
                      className="col-span-12"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      labelClass="text-[#09090b]"
                      inputClass="bg-white border-zinc-200 focus:border-[#FF4400]/50"
                    />

                    <InputField
                      label="Your Email *"
                      placeholder="Enter your email"
                      className="col-span-12 md:col-span-6"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      labelClass="text-[#09090b]"
                      inputClass="bg-white border-zinc-200 focus:border-[#FF4400]/50"
                    />

                    <InputField
                      label="Phone Number"
                      placeholder="Enter your phone number"
                      className="col-span-12 md:col-span-6"
                      type="number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      labelClass="text-[#09090b]"
                      inputClass="bg-white border-zinc-200 focus:border-[#FF4400]/50"
                    />
                  </div>



                  <div className="my-8">
                    <label className="font-space-grotesk font-bold text-lg text-[#09090b] block mb-4">
                      What do you need help with?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-5 gap-x-8">
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
                        label="CMS"
                        value="CMS"
                        selectedValue={projectType}
                        onChange={setProjectType}
                      />
                       <CustomRadio
                        label="Software"
                        value="Software"
                        selectedValue={projectType}
                        onChange={setProjectType}
                      />
                       <CustomRadio
                        label="Others"
                        value="Others"
                        selectedValue={projectType}
                        onChange={setProjectType}
                      />
                      
                      
                    </div>
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="project-details"
                      className="font-space-grotesk font-bold text-lg text-[#09090b] block mb-4"
                    >
                      Project Details *
                    </label>
                    <textarea
                      id="project-details"
                      placeholder="Briefly describe your project..."
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      className="bg-white w-full p-4 rounded-2xl outline-none border border-zinc-200 text-[#09090b] placeholder:text-zinc-400 font-poppins h-32 resize-none focus:border-[#FF4400]/50 transition-colors"
                    />
                  </div>

                  {message && (
                    <div className={`mb-6 p-4 rounded-xl text-sm font-poppins font-medium border ${message.type === 'success' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
                      {message.text}
                    </div>
                  )}

                  <div>
                    <Button type="submit" disabled={loading} buttonText={loading ? "Sending..." : "Send Message"} />
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
