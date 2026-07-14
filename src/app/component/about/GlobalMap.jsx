"use client";
import React, { useState } from "react";
import Container from "../Container";
import Header from "../Header";
import { motion } from "framer-motion";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
  { name: "Bangladesh", coordinates: [90.4125, 23.8103], xOffset: 12, yOffset: 0, anchor: "start" },
  { name: "USA", coordinates: [-95.7129, 37.0902], xOffset: 0, yOffset: -20, anchor: "middle" },
  { name: "UK", coordinates: [-3.4360, 55.3781], xOffset: -12, yOffset: -15, anchor: "end" },
  { name: "Australia", coordinates: [133.7751, -25.2744], xOffset: 0, yOffset: -20, anchor: "middle" },
  { name: "UAE", coordinates: [53.8478, 23.4241], xOffset: 12, yOffset: 15, anchor: "start" },
  { name: "Canada", coordinates: [-106.3468, 56.1304], xOffset: 0, yOffset: -20, anchor: "middle" },
  { name: "Qatar", coordinates: [51.1839, 25.3548], xOffset: -12, yOffset: -5, anchor: "end" },
  { name: "Netherlands", coordinates: [5.2913, 52.1326], xOffset: 12, yOffset: 0, anchor: "start" },
  { name: "India", coordinates: [78.9629, 20.5937], xOffset: 0, yOffset: 25, anchor: "middle" },
  { name: "Pakistan", coordinates: [69.3451, 30.3753], xOffset: -10, yOffset: -15, anchor: "end" },
  { name: "Germany", coordinates: [10.4515, 51.1657], xOffset: 12, yOffset: 20, anchor: "start" },
];

const GlobalMap = () => {
  const [tooltip, setTooltip] = useState({ show: false, content: "", x: 0, y: 0 });
  return (
    <div className="py-20 bg-[#E76634]/5 ">
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
          className="mt-15 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
          onMouseMove={(e) => {
            if (tooltip.show) {
              setTooltip((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
            }
          }}
        >
          <div className="w-full h-auto  rounded-2xl flex justify-center items-center overflow-hidden">
            <ComposableMap projection="geoMercator" width={1000} height={450} projectionConfig={{ scale: 150, center: [0, 20] }}>
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo, i) => {
                    // A palette of soft, colorful pastel colors
                    const pastelColors = ["#fca5a5", "#fcd34d", "#86efac", "#93c5fd", "#c4b5fd", "#f9a8d4", "#fbcfe8", "#bbf7d0", "#bfdbfe", "#fde68a"];
                    const color = pastelColors[i % pastelColors.length];
                    
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={color} 
                        stroke="#ffffff" 
                        strokeWidth={0.5}
                        onMouseEnter={(e) => {
                          setTooltip({ show: true, content: geo.properties.name, x: e.clientX, y: e.clientY });
                        }}
                        onMouseLeave={() => {
                          setTooltip({ show: false, content: "", x: 0, y: 0 });
                        }}
                        style={{
                          default: { outline: "none", opacity: 0.8 },
                          hover: { fill: "#E53022", outline: "none", opacity: 1, transition: "all 0.3s" },
                          pressed: { outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
              {markers.map(({ name, coordinates, xOffset, yOffset, anchor }) => (
                <Marker key={name} coordinates={coordinates}>
                  <g
                    fill="none"
                    stroke="#F8A024"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform="translate(-12, -24)"
                  >
                    <circle cx="12" cy="10" r="4" fill="#E53022" />
                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" />
                  </g>
                  <text
                    textAnchor={anchor || "middle"}
                    x={xOffset || 0}
                    y={yOffset || -20}
                    style={{ fontFamily: "inherit", fill: "#0f172a", fontSize: 10, fontWeight: "bold" }}
                  >
                    {name}
                  </text>
                </Marker>
              ))}
            </ComposableMap>
          </div>

          {/* Custom Tooltip */}
          {tooltip.show && (
            <div
              className="fixed z-50 bg-[#0f172a] text-white text-xs px-3 py-1.5 rounded shadow-lg pointer-events-none transform -translate-x-1/2 -translate-y-full transition-opacity duration-200 whitespace-nowrap"
              style={{ top: tooltip.y - 15, left: tooltip.x }}
            >
              {tooltip.content}
            </div>
          )}
        </motion.div>
      </Container>
    </div>
  );
};

export default GlobalMap;
