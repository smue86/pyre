"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Flame,
  Wind,
  Boxes,
  Zap,
  CircleDot,
  Grid3x3,
  Snowflake,
  ArrowRight,
} from "lucide-react";

const modes = [
  {
    id: "kamado",
    name: "Kamado",
    description: "Traditional firebox. Low-and-slow to high-heat searing.",
    icon: Flame,
  },
  {
    id: "offset",
    name: "Offset Smoker",
    description: "Separate firebox for authentic smoke flavor.",
    icon: Wind,
  },
  {
    id: "pellet",
    name: "Pellet Smoker",
    description: "Automated pellet feed. Set it and forget it.",
    icon: Boxes,
  },
  {
    id: "gas",
    name: "Gas Grill",
    description: "Instant ignition. Precise temperature control.",
    icon: Zap,
  },
  {
    id: "electric",
    name: "Electric Grill",
    description: "Zero emissions. Perfect for balconies and terraces.",
    icon: CircleDot,
  },
  {
    id: "griddle",
    name: "Flat Top Griddle",
    description: "Smash burgers, breakfast, stir-fry. Full surface cooking.",
    icon: Grid3x3,
  },
  {
    id: "cold-smoke",
    name: "Cold Smoker",
    description: "Low-temp smoke for cheese, fish, and charcuterie.",
    icon: Snowflake,
  },
];

export default function Platform() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const sectionInView = useInView(ref, { margin: "-50%" });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!sectionInView) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % modes.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [sectionInView]);

  return (
    <section
      id="platform"
      ref={ref}
      className="relative py-32 lg:py-48 overflow-hidden bg-[#0d0d0d]"
    >
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #262626 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.4em] text-[#c9a962] mb-6">
            THE PLATFORM
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-wide mb-8">
            One platform.{" "}
            <span className="italic text-[#c9a962]">Everything</span>.
          </h2>
          <p className="text-base md:text-lg text-[#737373] max-w-2xl mx-auto font-light">
            Your BBQ is the center of your outdoor kitchen. It should handle
            everything. Not five appliances. Not three. One platform that does
            it all.
          </p>
        </motion.div>

        {/* Auto-cycling product showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-24"
        >
          <div className="relative rounded-lg border border-[#262626] overflow-hidden">
            <Image
              src="/images/pyre-with-stand.jpeg"
              alt="PYRE modular platform"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/20 to-transparent" />

            {/* Cycling mode label */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={modes[activeIndex].id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-4"
                >
                  {(() => {
                    const Icon = modes[activeIndex].icon;
                    return (
                      <Icon
                        size={24}
                        className="text-[#c9a962]"
                        strokeWidth={1.5}
                      />
                    );
                  })()}
                  <div>
                    <p className="text-lg md:text-2xl font-light text-white tracking-wider">
                      {modes[activeIndex].name}
                    </p>
                    <p className="text-sm text-[#a3a3a3] font-light">
                      {modes[activeIndex].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dot indicators */}
              <div className="flex items-center gap-2 mt-6">
                {modes.map((mode, index) => (
                  <button
                    key={mode.id}
                    onClick={() => setActiveIndex(index)}
                    className={`transition-all duration-300 cursor-pointer ${
                      index === activeIndex
                        ? "w-6 h-1.5 bg-[#c9a962] rounded-full"
                        : "w-1.5 h-1.5 bg-[#404040] rounded-full hover:bg-[#737373]"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[#c9a962]/30" />
            <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-[#c9a962]/30" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-[#c9a962]/30" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[#c9a962]/30" />
          </div>
        </motion.div>

        {/* All modes grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-light text-center text-white mb-12">
            Seven Configurations. One Platform.
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {modes.map((mode, index) => (
              <motion.button
                key={mode.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                onClick={() => setActiveIndex(index)}
                className={`p-5 border text-left transition-all duration-300 cursor-pointer ${
                  index === activeIndex
                    ? "border-[#c9a962] bg-[#c9a962]/5"
                    : "border-[#262626] hover:border-[#404040]"
                }`}
              >
                <mode.icon
                  size={20}
                  className={`mb-3 transition-colors duration-300 ${
                    index === activeIndex
                      ? "text-[#c9a962]"
                      : "text-[#525252]"
                  }`}
                  strokeWidth={1}
                />
                <p
                  className={`text-sm font-light transition-colors duration-300 ${
                    index === activeIndex ? "text-[#c9a962]" : "text-white"
                  }`}
                >
                  {mode.name}
                </p>
                <p className="text-xs text-[#525252] mt-1">
                  {mode.description}
                </p>
              </motion.button>
            ))}

            {/* Extra card linking to configurator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.85 }}
            >
              <Link
                href="/configure"
                className="flex flex-col items-center justify-center h-full p-5 border border-[#c9a962]/30 hover:border-[#c9a962] text-center transition-all duration-300 group"
              >
                <ArrowRight
                  size={20}
                  className="mb-3 text-[#c9a962] group-hover:translate-x-1 transition-transform"
                  strokeWidth={1}
                />
                <p className="text-sm font-light text-[#c9a962]">
                  Build Yours
                </p>
                <p className="text-xs text-[#525252] mt-1">
                  Configure your PYRE
                </p>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
