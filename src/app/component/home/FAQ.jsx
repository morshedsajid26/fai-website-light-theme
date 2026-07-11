"use client";
import React from "react";
import Container from "../Container";
import Header from "../Header";
import FAQdropdown from "../FAQdropdown";
import { motion } from "framer-motion";

const FAQ = () => {
  return (
    <div className="pt-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Header titleText={`Frequently Asked Question`} />
        </motion.div>

        <motion.div
          className="flex flex-col items-center "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          <FAQdropdown
            question={`What services does Fire AI provide?`}
            answer={`We build AI-powered chatbots, automation tools, smart web & mobile applications, and intelligent business platforms tailored to your goals  `}
            className={`mt-10`}
          />

          <FAQdropdown
            question={`Do you work with international clients?`}
            answer={`We build AI-powered chatbots, automation tools, smart web & mobile applications, and intelligent business platforms tailored to your goals  `}
            className={`mt-10`}
          />

          <FAQdropdown
            question={`How long does it take to complete a project?`}
            answer={`Timelines depend on project scope and complexity — typically 2 to 8 weeks for MVPs and 2 to 4 months for full-scale products`}
            className={`mt-10`}
          />

          <FAQdropdown
            question={`What technologies do you use?`}
            answer={`Our team works with modern stacks — Python, Node.js, React, Flutter, Next.js, and AI frameworks like OpenAI, TensorFlow, and LangChain`}
            className={`mt-10`}
          />

          <FAQdropdown
            question={`How can I get a project quote?`}
            answer={`Simply head to our booking section and share your idea. Our team will review it and send you a custom quote within 24 hours`}
            className={`mt-10`}
          />

          <FAQdropdown
            question={`Can you integrate AI into an existing system?`}
            answer={`Yes, we specialize in integrating AI modules into existing applications — from chat automation to data intelligence dashboards`}
            className={`mt-10`}
          />
        </motion.div>
      </Container>
    </div>
  );
};

export default FAQ;
