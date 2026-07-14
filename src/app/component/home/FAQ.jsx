"use client";
import React, { useState } from "react";
import Container from "../Container";
import Header from "../Header";
import FAQdropdown from "../FAQdropdown";
import { motion } from "framer-motion";

const faqsData = [
  {
    question: "What services does Fire AI provide?",
    answer:
      "We offer AI Automation, Custom Software Development, Web Development, Mobile App Development, UI/UX Design, Business Automation, API Integration, and Cloud Solutions.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. We collaborate with startups, agencies, and enterprises worldwide through remote communication and agile project management.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Project timelines depend on complexity. Small projects typically take 2–4 weeks, while enterprise solutions may require several months.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "We work with React, Next.js, Flutter, Node.js, Python, OpenAI, MongoDB, MySQL, AWS, Docker, Firebase, and many other modern technologies.",
  },
  {
    question: "Can you integrate AI into an existing system?",
    answer:
      "Absolutely. We can integrate AI features such as chatbots, automation, document processing, recommendation systems, and intelligent workflows into existing applications.",
  },
  {
    question: "Do you provide maintenance after launch?",
    answer:
      "Yes. We offer ongoing maintenance, monitoring, feature enhancements, bug fixes, and technical support after deployment.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-20 bg-[#E76634]/5">
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
          className="flex flex-col items-center mt-10 gap-4"
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
          {faqsData.map((faq, index) => (
            <FAQdropdown
              key={index}
              question={faq.question}
              answer={faq.answer}
              className={``}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </motion.div>
      </Container>
    </div>
  );
};

export default FAQ;
