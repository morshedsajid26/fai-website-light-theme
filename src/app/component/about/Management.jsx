"use client";
import React from "react";
import Header from "../Header";
import Image from "next/image";
import Container from "../Container";
import { motion } from "framer-motion";

const Management = () => {
  return (
    <div className="pt-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Header
            titleText={`Management`}
            subtitleText={`Our management team brings deep experience, strong leadership, and clear direction. They focus on driving growth, building a positive work culture, and ensuring long-term success.`}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col md:flex-row items-center  justify-center gap-10 mt-20"
        >
          <Image src="/CEO.png" alt="" width={300} height={100} />
          <Image src="/chairman.png" alt="" width={300} height={100} />
        </motion.div>
      </Container>
    </div>
  );
};

export default Management;
