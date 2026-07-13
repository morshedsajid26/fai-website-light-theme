"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Loader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show the loader for a short duration
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#fafafa]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80">
              {/* Outer dashed ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-[2px] border-dashed border-[#F8A024] opacity-50"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />

              {/* Glowing solid ring with pulsing effect */}
              <motion.div
                className="absolute inset-4 md:inset-6 rounded-full border-[2px] border-[#E53022] opacity-60 shadow-[0_0_20px_rgba(229,48,34,0.6)]"
                animate={{ rotate: -360, scale: [1, 1.02, 1] }}
                transition={{
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
              />

              {/* Faster segmented ring */}
              <motion.div
                className="absolute inset-10 md:inset-14 rounded-full border-[4px] border-t-transparent border-b-transparent border-[#F8A024]"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />

              {/* Inner subtle ring */}
              <motion.div
                className="absolute inset-16 md:inset-20 rounded-full border-[1px] border-[#E53022] opacity-40"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Central Icon Container */}
              <motion.div
                className="z-10 bg-white rounded-full p-4 md:p-6 shadow-[0_0_30px_rgba(248,160,36,0.4)] flex items-center justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
              >
                <Image
                  src="/faiIcon.png"
                  alt="Fire AI Icon"
                  width={100}
                  height={100}
                  className="w-16 h-16 md:w-25 md:h-25 object-contain drop-shadow-md"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
};

export default Loader;
