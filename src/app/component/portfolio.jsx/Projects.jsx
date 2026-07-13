"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../Container";
import { LuGlobe, LuSmartphone, LuPalette } from "react-icons/lu";
import Link from "next/link";
import { projectsData } from "../../data/projectsData";

const categories = [
  { id: "all", label: "All Project", icon: LuGlobe },
  { id: "ai-mobile", label: "AI Powered Mobile APP", icon: LuSmartphone },
  { id: "custom-web", label: "Custom Website Development", icon: LuGlobe },
  { id: "ai-agent", label: "AI Agent / Automation / AI Powered Website", icon: LuGlobe },
  { id: "cms", label: "CMS", icon: LuPalette },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All Project");
  const [visibleCount, setVisibleCount] = useState(12);

  const handleCategoryChange = (label) => {
    setActiveCategory(label);
    setVisibleCount(12); // Reset visible count on category change
  };

  // Filter projects based on selected category
  const filteredProjects =
    activeCategory === "All Project"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section className="py-20">
      <Container>
        {/* Filter Tabs Container */}
        <div className="flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-2 bg-zinc-100/50 border border-zinc-200 p-2 rounded-2xl mb-12 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.label;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.label)}
                className={`flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm md:text-base font-medium transition-colors duration-300 flex-1 min-w-max font-poppins ${
                  isActive
                    ? "bg-gradient-to-r from-[#E53022] to-[#F8A024] text-white shadow-lg"
                    : "text-zinc-600 hover:text-[#09090b] hover:bg-zinc-200"
                }`}
              >
                <Icon className="text-lg" />
                <span className="whitespace-nowrap">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid with Framer Motion filtering */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="bg-white rounded-[24px] overflow-hidden border border-zinc-200 shadow-sm group"
              >
                <Link
                  href={`/portfolio/${project.id}`}
                  className="block w-full h-full cursor-pointer group-hover:border-[#FF4400]/50 transition-colors"
                >
                  {/* Project Thumbnail */}
                  <div className="relative w-full h-[240px] sm:h-[300px] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-[#09090b] mb-2 tracking-wide font-space-grotesk group-hover:text-[#FF4400] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-zinc-600 mb-6 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-gradient-to-r from-[#E53022] to-[#F8A024] text-white text-[13px] font-semibold px-4 py-1.5 rounded-lg shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisibleCount(filteredProjects.length)}
              className="bg-gradient-to-r from-[#E53022] to-[#F8A024] text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              View More Projects
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Projects;
