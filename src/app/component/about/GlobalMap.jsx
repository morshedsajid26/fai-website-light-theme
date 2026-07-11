"use client";
import React from "react";
import Container from "../Container";
import Header from "../Header";
import Image from "next/image";
import { motion } from "framer-motion";

const GlobalMap = () => {
  return (
    <div className="pt-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Header titleText={"Clients Across the Globe"} />
        </motion.div>

        <motion.div
          className="mt-15"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Image
            src="/World Map.png"
            alt="Global Map"
            width={1200}
            height={100}
            className="w-full"
          />
        </motion.div>
      </Container>
    </div>
  );
};

export default GlobalMap;
