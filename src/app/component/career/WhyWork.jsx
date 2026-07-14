"use client";
import React from "react";
import Container from "../Container";
import {
  LuRocket,
  LuBrain,
  LuLaptop,
  LuTrendingUp,
  LuShieldCheck,
  LuHeart,
} from "react-icons/lu";
import Header from "../Header";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Work on Real Projects",
    description:
      "Build AI solutions, web applications, mobile apps, CMS platforms, and automation systems used by real businesses.",
    icon: LuRocket,
    iconColor: "text-[#a855f7]", // purple
  },
  {
    title: "Continuous Learning",
    description:
      "Stay ahead with mentorship, training, and hands-on experience using modern technologies like AI, React, Flutter, WordPress, Shopify, and Wix.",
    icon: LuBrain,
    iconColor: "text-[#ec4899]", // pink
  },
  {
    title: "Flexible Work Environment",
    description:
      "Enjoy a collaborative workplace with flexible schedules, open communication, and a culture built on trust.",
    icon: LuLaptop,
    iconColor: "text-[#3b82f6]", // blue
  },
  {
    title: "Career Growth",
    description:
      "Take ownership of meaningful projects, develop new skills, and grow your career with clear advancement opportunities.",
    icon: LuTrendingUp,
    iconColor: "text-[#4ade80]", // green
  },
  {
    title: "Innovation-Driven Culture",
    description:
      "We encourage creative thinking, experimentation, and continuous improvement to solve real-world challenges.",
    icon: LuShieldCheck,
    iconColor: "text-[#f59e0b]", // yellow
  },
  {
    title: "People Come First",
    description:
      "We value respect, teamwork, work-life balance, and a supportive environment where everyone can succeed.",
    icon: LuHeart,
    iconColor: "text-[#ef4444]", // red
  },
];

const WhyWork = () => {
  return (
    <section className="py-20 bg-[#E76634]/5">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Header titleText="Why work with Fire AI" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="bg-white border border-zinc-200 shadow-sm rounded-2xl p-8 hover:border-zinc-300 hover:shadow-md transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center mb-6">
                  <Icon className={`text-2xl ${item.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-[#09090b] mb-4 tracking-wide font-space-grotesk">
                  {item.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed text-[15px]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

export default WhyWork;
