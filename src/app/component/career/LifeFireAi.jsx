"use client";
import React from "react";
import Container from "../Container";
import Image from "next/image";
import { motion } from "framer-motion";

const LifeFireAi = () => {
  return (
    <section className="py-20 bg-[#fafaf9]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#09090b] font-space-grotesk mb-6 xl:mb-8 leading-tight tracking-wide">
              Life at Fire AI
            </h2>
            <p className="text-zinc-600 font-poppins leading-relaxed text-[15px] sm:text-base md:text-[17px] xl:text-[18px]">
              We're a team of engineers, designers, and thinkers building AI
              that actually works. We foster an environment where curiosity
              thrives and hierarchy takes a back seat to innovation. Here,
              you'll find a collaborative space where your voice is heard and
              your contributions make a tangible impact.
            </p>
          </motion.div>

          {/* Right Images Area */}
          <motion.div
            className="flex flex-col gap-4 sm:gap-5"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            {/* Top Wide Image */}
            <div className="relative w-full h-[220px] sm:h-[350px] lg:h-[280px] xl:h-[350px] rounded-tr-[100px] rounded-tl-2xl rounded-bl-[100px] rounded-br-2xl overflow-hidden">
              <Image
                src="/office1.png"
                alt="Fire AI Office Overview"
                fill
                quality={100}
                className="object-cover"
              />
            </div>

            {/* Bottom Two Images */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              <div className="relative h-[160px] sm:h-[260px] lg:h-[200px] xl:h-[260px] rounded-tr-[100px] rounded-tl-2xl rounded-bl-[100px] rounded-br-2xl overflow-hidden">
                <Image
                  src="/office2.png"
                  alt="Developer working at Fire AI"
                  fill
                  quality={100}
                  className="object-cover"
                />
              </div>
              <div className="relative h-[160px] sm:h-[260px] lg:h-[200px] xl:h-[260px] rounded-tl-[100px] rounded-tr-2xl rounded-br-[100px] rounded-bl-2xl overflow-hidden">
                <Image
                  src="/office3.png"
                  alt="Team collaboration at Fire AI"
                  fill
                  quality={100}
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default LifeFireAi;
