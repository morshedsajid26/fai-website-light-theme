"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Container from "../Container";
import Image from "next/image";
import {
  FaArrowRight,
  FaRobot,
  FaMobileAlt,
  FaLaptopCode,
  FaPaintBrush,
  FaWordpress,
  FaWix,
  FaShopify,
  FaGoogle,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import { SiGoogleads } from "react-icons/si";
import Header from "../Header";

const GoogleAdsOriginalIcon = ({ size, className, style }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 250 230" 
    className={className}
    style={style}
  >
    <path fill="#3C8BD9" d="M85.9,28.6c2.4-6.3,5.7-12.1,10.6-16.8c19.6-19.1,52-14.3,65.3,9.7c10,18.2,20.6,36,30.9,54 c17.2,29.9,34.6,59.8,51.6,89.8c14.3,25.1-1.2,56.8-29.6,61.1c-17.4,2.6-33.7-5.4-42.7-21c-15.1-26.3-30.3-52.6-45.4-78.8 c-0.3-0.6-0.7-1.1-1.1-1.6c-1.6-1.3-2.3-3.2-3.3-4.9c-6.7-11.8-13.6-23.5-20.3-35.2c-4.3-7.6-8.8-15.1-13.1-22.7 c-3.9-6.8-5.7-14.2-5.5-22C83.6,36.2,84.1,32.2,85.9,28.6"/>
    <path fill="#FABC04" d="M85.9,28.6c-0.9,3.6-1.7,7.2-1.9,11c-0.3,8.4,1.8,16.2,6,23.5C101,82,112,101,122.9,120c1,1.7,1.8,3.4,2.8,5 c-6,10.4-12,20.7-18.1,31.1c-8.4,14.5-16.8,29.1-25.3,43.6c-0.4,0-0.5-0.2-0.6-0.5c-0.1-0.8,0.2-1.5,0.4-2.3 c4.1-15,0.7-28.3-9.6-39.7c-6.3-6.9-14.3-10.8-23.5-12.1c-12-1.7-22.6,1.4-32.1,8.9c-1.7,1.3-2.8,3.2-4.8,4.2 c-0.4,0-0.6-0.2-0.7-0.5c4.8-8.3,9.5-16.6,14.3-24.9C45.5,98.4,65.3,64,85.2,29.7C85.4,29.3,85.7,29,85.9,28.6"/>
    <path fill="#34A852" d="M11.8,158c1.9-1.7,3.7-3.5,5.7-5.1c24.3-19.2,60.8-5.3,66.1,25.1c1.3,7.3,0.6,14.3-1.6,21.3 c-0.1,0.6-0.2,1.1-0.4,1.7c-0.9,1.6-1.7,3.3-2.7,4.9c-8.9,14.7-22,22-39.2,20.9C20,225.4,4.5,210.6,1.8,191 c-1.3-9.5,0.6-18.4,5.5-26.6c1-1.8,2.2-3.4,3.3-5.2C11.1,158.8,10.9,158,11.8,158"/>
  </svg>
);

const servicesData = [
  {
    id: "01",
    displayId: "02",
    mobileOrder: "order-2 md:order-none",
    title: "App Development",
    desc: "We build powerful, scalable, and high-performance mobile apps for iOS & Android.",
    Icon: FaMobileAlt,
    color: "#3DDC84",
  },
  {
    id: "02",
    displayId: "01",
    mobileOrder: "order-1 md:order-none",
    title: "AI Automation",
    desc: "Automate workflows, save time, and increase productivity with intelligent AI solutions.",
    Icon: FaRobot,
    color: "#ff4e27",
  },
  {
    id: "03",
    mobileOrder: "order-3 md:order-none",
    title: "Web Development",
    desc: "Fast, secure, and modern websites & web applications that drive real business.",
    Icon: FaLaptopCode,
    color: "#3b82f6",
  },
  {
    id: "04",
    mobileOrder: "order-4 md:order-none",
    title: "UI/UX Design",
    desc: "We create intuitive, beautiful and user-centered designs that users love.",
    Icon: FaPaintBrush,
    color: "#ec4899",
  },
  { id: "center", isCenter: true, mobileOrder: "order-6 md:order-none" },
  {
    id: "05",
    mobileOrder: "order-5 md:order-none",
    title: "WordPress",
    desc: "Custom WordPress websites that are flexible, SEO-friendly and easy to manage.",
    Icon: FaWordpress,
    color: "#21759b",
  },
  {
    id: "06",
    mobileOrder: "order-7 md:order-none",
    title: "Wix",
    desc: "Modern, responsive websites built with Wix — fast, beautiful and conversion focused.",
    Icon: FaWix,
    color: "#000000",
  },
  {
    id: "07",
    mobileOrder: "order-8 md:order-none",
    title: "Shopify",
    desc: "Build stunning Shopify stores that convert visitors into loyal customers.",
    Icon: FaShopify,
    color: "#95BF47",
  },
  {
    id: "08",
    mobileOrder: "order-9 md:order-none",
    title: "Google Ads",
    desc: "Get more leads and sales with data-driven Google Ads campaigns that perform.",
    Icon: GoogleAdsOriginalIcon,
    color: "#4285F4",
  },
  {
    id: "09",
    displayId: "10",
    mobileOrder: "order-11 md:order-none",
    title: "YouTube Ads",
    desc: "Drive video views and conversions with highly targeted YouTube campaigns.",
    Icon: FaYoutube,
    color: "#FF0000",
  },
  {
    id: "10",
    displayId: "09",
    mobileOrder: "order-10 md:order-none",
    title: "Meta Ads",
    desc: "Reach the right audience and grow your business with high-converting Meta ads.",
    Icon: FaFacebook,
    color: "#1877F2",
  },
];

function drawOrthogonalPath(
  startX,
  startY,
  endX,
  endY,
  r = 24,
  dir = "h",
  offsetFactor = 0.5,
) {
  const dx = endX - startX;
  const dy = endY - startY;

  if (dir === "h" && Math.abs(dy) < 2) {
    return `M ${startX} ${startY} L ${endX} ${endY}`;
  }
  if (dir === "v" && Math.abs(dx) < 2) {
    return `M ${startX} ${startY} L ${endX} ${endY}`;
  }

  const signX = Math.sign(dx) || 1;
  const signY = Math.sign(dy) || 1;

  if (dir === "h") {
    const turnX = startX + dx * offsetFactor;
    const actualR = Math.min(
      r,
      Math.abs(turnX - startX),
      Math.abs(endX - turnX),
      Math.abs(dy) / 2,
    );

    return `M ${startX} ${startY} 
            L ${turnX - actualR * signX} ${startY} 
            Q ${turnX} ${startY} ${turnX} ${startY + actualR * signY}
            L ${turnX} ${endY - actualR * signY}
            Q ${turnX} ${endY} ${turnX + actualR * signX} ${endY}
            L ${endX} ${endY}`;
  } else {
    const turnY = startY + dy * offsetFactor;
    const actualR = Math.min(
      r,
      Math.abs(turnY - startY),
      Math.abs(endY - turnY),
      Math.abs(dx) / 2,
    );

    return `M ${startX} ${startY} 
            L ${startX} ${turnY - actualR * signY} 
            Q ${startX} ${turnY} ${startX + actualR * signX} ${turnY}
            L ${endX - actualR * signX} ${turnY}
            Q ${endX} ${turnY} ${endX} ${turnY + actualR * signY}
            L ${endX} ${endY}`;
  }
}

function drawLShapePath(startX, startY, endX, endY, r = 24, firstDir = "v") {
  const dx = endX - startX;
  const dy = endY - startY;

  if (Math.abs(dx) < 2 || Math.abs(dy) < 2) {
    return `M ${startX} ${startY} L ${endX} ${endY}`;
  }

  const signX = Math.sign(dx) || 1;
  const signY = Math.sign(dy) || 1;
  const actualR = Math.min(r, Math.abs(dx), Math.abs(dy));

  if (firstDir === "v") {
    return `M ${startX} ${startY}
            L ${startX} ${endY - actualR * signY}
            Q ${startX} ${endY} ${startX + actualR * signX} ${endY}
            L ${endX} ${endY}`;
  } else {
    return `M ${startX} ${startY}
            L ${endX - actualR * signX} ${startY}
            Q ${endX} ${startY} ${endX} ${startY + actualR * signY}
            L ${endX} ${endY}`;
  }
}

const AnimatedLines = ({ containerRef, nodes }) => {
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    if (!containerRef.current || !nodes.center) return;

    const updatePaths = () => {
      const containerRect = containerRef.current.getBoundingClientRect();
      const centerRect = nodes.center.getBoundingClientRect();

      const cx = centerRect.left - containerRect.left + centerRect.width / 2;
      const cy = centerRect.top - containerRect.top + centerRect.height / 2;

      const ringR = 95; // Radius of the dashed ring where lines start

      const newPaths = [];

      Object.keys(nodes).forEach((id) => {
        if (id === "center") return;

        const el = nodes[id];
        if (!el) return;

        const rect = el.getBoundingClientRect();

        const cardCx = rect.left - containerRect.left + rect.width / 2;
        const cardCy = rect.top - containerRect.top + rect.height / 2;
        const left = rect.left - containerRect.left;
        const right = rect.right - containerRect.left;
        const top = rect.top - containerRect.top;
        const bottom = rect.bottom - containerRect.top;

        let endX,
          endY,
          dir = "h";
        let pathType = "s"; // 's' for S-shape, 'l' for L-shape
        let offsetFactor = 0.6;

        if (["01", "08"].includes(id)) {
          endX = right - 30; // Extend into the card
          endY = cardCy;
          pathType = "l";
          dir = "v";
        } else if (["03", "10"].includes(id)) {
          endX = left + 30; // Extend into the card
          endY = cardCy;
          pathType = "l";
          dir = "v";
        } else if (["04", "06"].includes(id)) {
          endX = right - 30; // Extend into the card
          endY = cardCy;
          pathType = "s";
          if (id === "04") offsetFactor = 0.4;
          if (id === "06") offsetFactor = 0.4;
        } else if (["05", "07"].includes(id)) {
          endX = left + 30; // Extend into the card
          endY = cardCy;
          pathType = "s";
          if (id === "05") offsetFactor = 0.4;
          if (id === "07") offsetFactor = 0.4;
        } else if (id === "02") {
          endX = cardCx;
          endY = bottom - 60; // Extend deep into the card
          pathType = "l";
          dir = "h"; // Enter vertically
        } else if (id === "09") {
          endX = cardCx;
          endY = top + 60; // Extend deep into the card
          pathType = "l";
          dir = "h"; // Enter vertically
        } else {
          return;
        }

        // Calculate exact starting point on the ring based on angle to target
        let angle = Math.atan2(endY - cy, endX - cx);

        // Force offset angles for center-aligned cards so they get circuit corners instead of straight lines
        if (id === "02") {
          angle = -Math.PI / 2 - 0.1; // Tilted left
        } else if (id === "09") {
          angle = Math.PI / 2 + 0.04; // Tilted right
        }

        const startX = cx + ringR * Math.cos(angle);
        const startY = cy + ringR * Math.sin(angle);

        const pathD =
          pathType === "l"
            ? drawLShapePath(startX, startY, endX, endY, 24, dir)
            : drawOrthogonalPath(
                startX,
                startY,
                endX,
                endY,
                24,
                dir,
                offsetFactor,
              );

        newPaths.push({
          id,
          d: pathD,
          tx: endX,
          ty: endY,
          sx: startX,
          sy: startY,
        });
      });

      setPaths(newPaths);
    };

    updatePaths();

    // Add scroll listener too, just in case layout shifts during scroll
    window.addEventListener("resize", updatePaths);
    window.addEventListener("scroll", updatePaths, true);

    setTimeout(updatePaths, 100);
    setTimeout(updatePaths, 500);
    setTimeout(updatePaths, 1000);

    return () => {
      window.removeEventListener("resize", updatePaths);
      window.removeEventListener("scroll", updatePaths, true);
    };
  }, [containerRef, nodes]);

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="glow-intense" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {paths.map((p) => {
        const slowDuration = 8 + Math.random() * 4; // Slow animation
        return (
          <g key={p.id}>
            {/* Permanent Neon Glow (Orange blur) */}
            <path
              d={p.d}
              fill="none"
              stroke="#ff4e27"
              strokeWidth="6"
              strokeOpacity="0.4"
              filter="url(#glow)"
            />

            {/* Permanent Neon Core (Solid White) */}
            <path
              d={p.d}
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeOpacity="0.9"
            />

            {/* Flowing animated light pulse (Intense glow) */}
            <motion.path
              d={p.d}
              fill="none"
              stroke="#ffffff"
              strokeWidth="4"
              filter="url(#glow-intense)"
              strokeDasharray="60 500"
              animate={{ strokeDashoffset: [2000, -2000] }}
              transition={{
                duration: slowDuration,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Hub dot on the center dashed ring */}
            <circle
              cx={p.sx}
              cy={p.sy}
              r="0"
              fill="#ffffff"
              stroke="#ff4e27"
              strokeWidth="2.5"
              filter="url(#glow)"
            />

            {/* Connection dot on the card side */}
            <circle
              cx={p.tx}
              cy={p.ty}
              r="0"
              fill="#ffffff"
              stroke="#ff4e27"
              strokeWidth="2.5"
              filter="url(#glow)"
            />
          </g>
        );
      })}
    </svg>
  );
};

const WhatWeDo = () => {
  const containerRef = useRef(null);
  const [nodes, setNodes] = useState({});

  const measureNode = (id, el) => {
    if (el) {
      setNodes((prev) => {
        if (prev[id] === el) return prev;
        return { ...prev, [id]: el };
      });
    }
  };

  return (
    <div className="py-20 md:py-35 overflow-hidden bg-[#fafaf9] relative">
      {/* Background radial gradient mesh to simulate the soft background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,#ff4e27_0%,transparent_60%)] opacity-[0.06] blur-[60px]" />
      </div>

      {/* Subtle Background Pattern (Grid) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(#000 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      {/* Subtle orange accent blobs for corners */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#ff4e27] opacity-[0.04] rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#ff4e27] opacity-[0.04] rounded-full blur-[100px] pointer-events-none"></div>

      <Container className="relative z-10">
        {/* Header Section */}
        <Header
          titleText={`What We Do?`}
          subtitleText={`We design, develop, and automate digital products that empower businesses to operate more efficiently and grow faster. `}
        />

        {/* Network Grid Section */}
        <div
          ref={containerRef}
          className="relative w-full max-w-[1300px] mx-auto px-2 md:px-4 mt-40"
        >
          <div className="hidden lg:block">
            <AnimatedLines containerRef={containerRef} nodes={nodes} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 relative z-10">
            {servicesData.map((item, index) => {
              if (item.isEmpty) {
                return <div key={index} className="hidden lg:block"></div>;
              }

              if (item.isCenter) {
                return (
                  <div
                    key={item.id}
                    className={`flex items-center justify-center relative py-12 lg:py-0 h-[220px] lg:h-full lg:row-span-2 ${item.mobileOrder || ""}`}
                  >
                    {/* Background mask to hide lines underneath via z-index */}
                    <div className="absolute w-[200px] h-[200px] bg-[#fafaf9] rounded-full z-0" />

                    <svg viewBox="0 0 240 240" className="absolute w-[200px] h-[200px] z-10 overflow-visible pointer-events-none">
                      <defs>
                        {/* Red glow filter */}
                        <filter id="redGlow" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="4" result="blur" />
                          <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                        {/* Center soft glow gradient */}
                        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#f8a024" stopOpacity="0.15" />
                          <stop offset="70%" stopColor="#f8a024" stopOpacity="0.05" />
                          <stop offset="100%" stopColor="#f8a024" stopOpacity="0" />
                        </radialGradient>
                      </defs>

                      {/* Center Soft Glow */}
                      <circle cx="120" cy="120" r="50" fill="url(#centerGlow)" />

                      {/* Outer Dashed Ring */}
                      <circle cx="120" cy="120" r="105" fill="none" stroke="#f8a024" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.6" className="origin-center animate-[spin_20s_linear_infinite_reverse]" />
                      
                      {/* Red Glowing Ring */}
                      <circle cx="120" cy="120" r="85" fill="none" stroke="#ff4e27" strokeWidth="1.5" opacity="0.4" filter="url(#redGlow)" />
                      <circle cx="120" cy="120" r="85" fill="none" stroke="#ff4e27" strokeWidth="1" opacity="0.6" />

                      {/* Inner thin solid ring */}
                      <circle cx="120" cy="120" r="63" fill="none" stroke="#F8A024" strokeWidth="0.5" opacity="0.5" />

                      {/* Spinning Arcs (Loader style) - SVG allows perfect rounded caps */}
                      <circle cx="120" cy="120" r="74" fill="none" stroke="#F8A024" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="90 142.47" className="origin-center animate-[spin_3s_linear_infinite]" />
                    </svg>

                    {/* Center Logo Node (No white background) */}
                    <div
                      ref={(el) => measureNode(item.id, el)}
                      className="w-[90px] h-[90px] flex items-center justify-center relative z-20"
                    >
                      {/* Animated Icon (Breathing effect) */}
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="flex items-center justify-center w-full h-full relative z-10"
                      >
                        <Image
                          src="/faiIcon.png"
                          alt="Logo"
                          width={75}
                          height={75}
                          className="object-contain "
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "flex";
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={item.id}
                  className={`w-full h-full ${
                    item.id === "02" ? "lg:-translate-y-32" : ""
                  } ${item.id === "09" ? "lg:translate-y-32" : ""} ${item.mobileOrder || ""}`}
                >
                  <motion.div
                    ref={(el) => measureNode(item.id, el)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="bg-white rounded-[24px] lg:rounded-[32px] p-4 pr-5 shadow-[0_8px_30px_rgba(255,78,39,0.06)] border border-[#ff4e27]/5 flex items-center gap-4 hover:-shadow-lg transition-all duration-300 relative group z-10 w-full hover:-translate-y-2"
                  >
                    {/* Icon Container with specific squircle/rounded box style */}
                    <div className="w-[64px] h-[64px] md:w-[84px] md:h-[84px] flex-shrink-0 rounded-[16px] md:rounded-[20px] bg-gradient-to-br from-[#fff4f0] to-[#ffe8e0] flex items-center justify-center shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] border border-white group-hover:scale-110 transition-transform duration-300">
                      {item.Icon && (
                        <item.Icon
                          size={32}
                          className="drop-shadow-sm md:w-[38px] md:h-[38px] w-[28px] h-[28px]"
                          style={{ color: item.color }}
                        />
                      )}
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 py-1">
                      <div className="text-[#ff4e27] font-bold text-md mb-1 leading-none opacity-50">
                        {item.displayId || item.id}
                      </div>
                      <h4 className="text-[17px] font-bold text-[#09090b] mb-1.5 font-space-grotesk leading-tight tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-[#6b7280] text-[12.5px] leading-snug pr-2">
                        {item.desc}
                      </p>
                    </div>

                    {/* Right Arrow - Circular outline */}
                    <div className="w-[30px] h-[30px] rounded-full border-[1.5px] border-[#ff4e27] flex items-center justify-center text-[#ff4e27] flex-shrink-0 group-hover:bg-[#ff4e27] group-hover:text-white transition-colors duration-300 cursor-pointer shadow-sm">
                      <FaArrowRight size={10} />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhatWeDo;
