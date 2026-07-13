"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../Container";
import Button from "../Button";
import { motion } from "framer-motion";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Career", path: "/career" },
  { name: "About Us", path: "/about" },
];

const Navbar = ({ className }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container
      className={`bg-white/40 backdrop-blur-md shadow-sm border border-zinc-200/50 p-2 rounded-2xl w-full fixed top-4 left-1/2 -translate-x-1/2  z-50 ${className}`}
    >
      <nav className="">
        <motion.div
          className="flex items-center justify-between"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div
            className="logo z-50 flex items-center h-[50px] md:h-[60px]"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="h-full flex items-center"
            >
              <Image
                src="/FireAiLogo.png"
                alt="Logo"
                width={140}
                height={60}
                className="h-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-4 xl:space-x-6 items-center">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.path;
              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={item.path}
                    className={`transition-colors duration-200 px-3 py-2 rounded-md text-lg xl:text-2xl font-bold font-space-grotesk ${
                      isActive
                        ? " bg-gradient-to-r from-[#E53022] to-[#F8A024] bg-clip-text text-transparent "
                        : "text-[#09090b] hover:bg-zinc-100/80"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop Button */}
          <motion.div
            className="hidden lg:block z-50"
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Link href="/contact">
              <Button buttonText="Contact" />
            </Link>
          </motion.div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden text-[#09090b] p-2 z-50 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12h18M3 6h18M3 18h18"
                />
              </svg>
            )}
          </button>
        </motion.div>

        {/* Mobile Menu Content */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-4 pb-4 px-2 w-full">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={index}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors duration-200 px-3 py-3 rounded-md text-xl font-bold font-space-grotesk block text-center ${
                    isActive
                      ? " bg-zinc-100 border border-zinc-200"
                      : "text-[#09090b] hover:text-[#09090b] hover:bg-zinc-100"
                  }`}
                >
                  <span
                    className={
                      isActive
                        ? "bg-gradient-to-r from-[#E53022] to-[#F8A024] bg-clip-text text-transparent"
                        : ""
                    }
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}
            <div className="pt-4 flex justify-center w-full">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button buttonText="Contact" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
