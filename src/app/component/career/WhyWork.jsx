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
    title: "Real AI Products",
    description:
      "We don't just build demos. We ship scalable, production-ready AI solutions used by thousands.",
    icon: LuRocket,
    iconColor: "text-[#a855f7]", // purple
  },
  {
    title: "Learning-Focused",
    description:
      "Stay ahead of the curve. We provide resources and time for you to master the latest AI technologies.",
    icon: LuBrain,
    iconColor: "text-[#ec4899]", // pink
  },
  {
    title: "Flexible Culture",
    description:
      "Remote-first options and flexible hours. We value your output, not just your clock-in time.",
    icon: LuLaptop,
    iconColor: "text-[#3b82f6]", // blue
  },
  {
    title: "Growth Opportunities",
    description:
      "Lead projects and grow your career. We promote from within and support your leadership journey.",
    icon: LuTrendingUp,
    iconColor: "text-[#4ade80]", // green
  },
  {
    title: "Ethical AI",
    description:
      "We believe in responsible AI. We build systems that are fair, transparent, and safe.",
    icon: LuShieldCheck,
    iconColor: "text-[#f59e0b]", // yellow
  },
  {
    title: "People First",
    description:
      "We care about our team. Mental health, work-life balance, and happiness are priorities.",
    icon: LuHeart,
    iconColor: "text-[#ef4444]", // red
  },
];

const WhyWork = () => {
  return (
    <section className="py-20 ">
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
