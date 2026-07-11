"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "../../data/projectsData";
import { LuArrowLeft } from "react-icons/lu";
import Container from "../Container";
import * as motion from "framer-motion/client";

export default async function ProjectDetails(props) {
  const params = await props.params;
  const id = params?.id;
  const project = projectsData.find((p) => p.id.toString() === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-[#09090b]">
        <h1 className="text-3xl font-bold font-space-grotesk mb-4">
          Project not found
        </h1>
        <Link
          href="/portfolio"
          className="text-[#FF4400] underline hover:text-[#E53022]"
        >
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen py-5 text-[#09090b]">
      <Container>
        <div className="  px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-zinc-600 hover:text-[#09090b] transition-colors mb-10"
          >
            <LuArrowLeft className="text-xl" />
            <span>Back to Projects</span>
          </Link>

          {/* Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <span className="inline-block px-5 py-2 rounded-full bg-zinc-100 border border-[#FF4400]/20 text-sm font-semibold text-[#FF4400] mb-6">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-space-grotesk tracking-tight mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-zinc-600 max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {/* Feature Image Layout */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-16"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            {/* Main Feature Image */}
            <div className="lg:col-span-2 relative w-full h-[300px] sm:h-[450px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 bg-white group">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>

            {/* Sidebar Images stacked */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6">
              <div className="relative w-full h-[150px] sm:h-[220px] lg:h-[288px] rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 bg-white group">
                <Image
                  src="/Ai.png"
                  alt="Gallery Image 1"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="relative w-full h-[150px] sm:h-[220px] lg:h-[288px] rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 bg-white group">
                <Image
                  src="/Web.png"
                  alt="Gallery Image 2"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* Details Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Description */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h2 className="text-3xl font-bold font-space-grotesk">
                Project Overview
              </h2>
              <p className="text-zinc-600 leading-relaxed text-lg">
                This is a dynamic project details view. The {project.title} was
                built to solve critical infrastructure problems and provide a
                seamless user experience. Below, you will find additional
                documentation covering project architecture and deployment
                details.
              </p>
              <p className="text-zinc-600 leading-relaxed text-lg">
                Our team focused heavily on ensuring scalability, security, and
                beautiful interfaces. From rigorous testing pipelines to
                high-fidelity Figma designs, every step was optimized to deliver
                top-tier results for the client.
              </p>
            </motion.div>

            {/* Sidebar Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="bg-white border border-zinc-200 shadow-sm p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-6 font-space-grotesk">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gradient-to-r from-[#E53022] to-[#F8A024] text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-zinc-200 shadow-sm p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-4 font-space-grotesk">
                  Quick Facts
                </h3>
                <ul className="space-y-4 text-zinc-600">
                  <li className="flex justify-between">
                    <span>Client</span>
                    <span className="text-[#09090b] font-medium">
                      Confidential
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>Timeline</span>
                    <span className="text-[#09090b] font-medium">3 Months</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Live Link</span>
                    <a href="#" className="text-[#09090b] font-bold">
                      View Project
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </main>
  );
}
