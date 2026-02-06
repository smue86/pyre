"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { Flame, Wind, Boxes, ArrowRight } from "lucide-react";

const modes = [
  {
    id: "kamado",
    name: "Kamado Mode",
    description:
      "Traditional firebox cooking with precise temperature control. Perfect for low-and-slow BBQ, roasting, and baking.",
    icon: Flame,
    features: ["Direct & Indirect Heat", "225°F - 700°F Range", "12+ Hour Cooks"],
  },
  {
    id: "pellet",
    name: "Pellet Smoker",
    description:
      "Automated pellet feeding system for effortless smoking. Set it and forget it with AI temperature management.",
    icon: Wind,
    features: ["Auto Pellet Feed", "WiFi Connected", "Smoke Level Control"],
  },
  {
    id: "offset",
    name: "Offset Smoker",
    description:
      "Classic offset configuration for authentic smoke flavor. Separate firebox for true pitmaster control.",
    icon: Boxes,
    features: ["True Offset Design", "Clean Smoke Flow", "Pro-Level Results"],
  },
];

const modules = [
  {
    name: "Flat Top Griddle",
    description: "Cast iron griddle for breakfast, smash burgers, and stir-fry.",
    price: "$349",
  },
  {
    name: "Pizza Oven Module",
    description: "900°F capable dome for authentic Neapolitan pizza.",
    price: "$599",
  },
  {
    name: "Rotisserie System",
    description: "Heavy-duty rotisserie for whole chickens, roasts, and more.",
    price: "$449",
  },
  {
    name: "Cold Smoke Generator",
    description: "Low-temp smoke for cheese, fish, and charcuterie.",
    price: "$299",
  },
];

export default function Platform() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeMode, setActiveMode] = useState("kamado");

  return (
    <section
      id="platform"
      ref={ref}
      className="relative py-32 lg:py-48 overflow-hidden bg-[#0d0d0d]"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #262626 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-[0.4em] text-[#c9a962] mb-6">
            ONE PLATFORM. INFINITE POSSIBILITIES.
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-wide mb-8">
            MODULAR BY DESIGN
          </h2>
          <p className="text-lg md:text-xl text-[#737373] max-w-3xl mx-auto font-light">
            Transform your PYRE in seconds. From kamado to pellet smoker to offset—
            <br className="hidden md:block" />
            adapt to any cooking style with our revolutionary bolt-on system.
          </p>
        </motion.div>

        {/* Cooking modes */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          {/* Mode tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {modes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => setActiveMode(mode.id)}
                className={`px-8 py-4 text-sm tracking-[0.2em] border transition-all duration-300 ${
                  activeMode === mode.id
                    ? "border-[#c9a962] bg-[#c9a962]/10 text-[#c9a962]"
                    : "border-[#262626] text-[#737373] hover:border-[#404040] hover:text-white"
                }`}
              >
                {mode.name.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Mode content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Mode visualization with product image */}
            <motion.div
              key={activeMode}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-lg border border-[#262626] overflow-hidden"
            >
              <Image
                src="/images/pyre-with-stand.jpeg"
                alt="PYRE modular cooking system"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
              {/* Mode indicator overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                {modes.map((mode) => {
                  if (mode.id === activeMode) {
                    return (
                      <motion.div
                        key={mode.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3"
                      >
                        <mode.icon size={20} className="text-[#c9a962]" strokeWidth={1.5} />
                        <span className="text-sm tracking-[0.2em] text-white">
                          {mode.name.toUpperCase()}
                        </span>
                      </motion.div>
                    );
                  }
                  return null;
                })}
              </div>
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[#c9a962]/30" />
              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-[#c9a962]/30" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-[#c9a962]/30" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[#c9a962]/30" />
            </motion.div>

            {/* Mode details */}
            <div>
              {modes.map((mode) => {
                if (mode.id === activeMode) {
                  return (
                    <motion.div
                      key={mode.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
                        {mode.name}
                      </h3>
                      <p className="text-lg text-[#737373] mb-8 leading-relaxed">
                        {mode.description}
                      </p>
                      <ul className="space-y-4">
                        {mode.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center text-[#a3a3a3]"
                          >
                            <span className="w-2 h-2 bg-[#c9a962] mr-4" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </motion.div>

        {/* Modules grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-center text-2xl md:text-3xl font-light text-white mb-12">
            Expand Your Capabilities
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <motion.div
                key={module.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="module-card group p-6 bg-[#141414] border border-[#262626] hover:border-[#c9a962]/30"
              >
                {/* Module placeholder icon */}
                <div className="w-12 h-12 mb-4 bg-[#1a1a1a] rounded border border-[#262626] flex items-center justify-center">
                  <Boxes
                    size={20}
                    className="text-[#c9a962] opacity-60"
                    strokeWidth={1}
                  />
                </div>
                <h4 className="text-lg font-light text-white mb-2 group-hover:text-[#c9a962] transition-colors">
                  {module.name}
                </h4>
                <p className="text-sm text-[#737373] mb-4">{module.description}</p>
                <p className="text-lg text-[#c9a962] font-light">{module.price}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="/configure"
            className="inline-flex items-center text-sm tracking-[0.2em] text-[#c9a962] hover:text-white transition-colors group"
          >
            EXPLORE ALL CONFIGURATIONS
            <ArrowRight
              size={16}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
