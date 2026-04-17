"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Zap, Feather, Flame, Wind, HandMetal, ArrowRight } from "lucide-react";
import { colors } from "@/lib/configurator-data";

const specs = [
  {
    icon: Feather,
    value: "~90%",
    label: "LIGHTER",
    description: "Than traditional ceramic kamados",
  },
  {
    icon: Zap,
    value: "3x",
    label: "EFFICIENCY",
    description: "Less fuel consumption",
  },
  {
    icon: Flame,
    value: "2000°F",
    label: "MAX TEMP",
    description: "Extreme heat capability",
  },
  {
    icon: Wind,
    value: "5 min",
    label: "COOL DOWN",
    description: "From max temp to 300°F",
  },
  {
    icon: HandMetal,
    value: "Safe",
    label: "TOUCH TEST",
    description: "Hand on exterior at cook temp",
  },
];

const features = [
  {
    title: "Advanced Ceramic Foam",
    description:
      "Born from cutting-edge materials science, our ceramic foam delivers unmatched thermal performance with a fraction of the mass. The cellular microstructure creates millions of insulating air pockets — hand on the outside at full cook temp, no burn.",
  },
  {
    title: "Integrated Convection Channels",
    description:
      "Precision-engineered air pathways built directly into the walls. Heat moves where it should, when it should. Faster heat-up, controlled cool-down, and stability throughout your cook — without electronics.",
  },
  {
    title: "Next-Generation Durability",
    description:
      "Engineered to resist thermal shock, moisture damage, and structural degradation. Hundreds of heat and cool cycles without cracking or warping. Built for the kind of use that destroys everything else.",
  },
];

export default function Foundation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedColor, setSelectedColor] = useState("obsidian");

  return (
    <section
      id="foundation"
      ref={ref}
      className="relative py-32 lg:py-48 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#262626] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#262626] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.4em] text-[#c9a962] mb-6">
            THE FOUNDATION
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-wide mb-4">
            <span className="text-gradient">AeroCore</span>
          </h2>
          <p className="text-lg md:text-xl text-[#737373] max-w-3xl mx-auto font-light">
            Materials have evolved. What hasn&apos;t?{" "}
            <span className="italic text-[#c9a962]">Cooking</span>. We are
            building the next generation of cooking material — a breakthrough
            that changes what a firebox can do.
          </p>
        </motion.div>

        {/* Specs grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-[#262626] mb-24"
        >
          {specs.map((spec, index) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-[#0a0a0a] p-8 lg:p-10 text-center group hover:bg-[#0d0d0d] transition-colors duration-500"
            >
              <spec.icon
                className="w-6 h-6 mx-auto mb-4 text-[#c9a962] opacity-60 group-hover:opacity-100 transition-opacity"
                strokeWidth={1}
              />
              <p className="text-3xl md:text-4xl font-extralight text-white mb-2">
                {spec.value}
              </p>
              <p className="text-[10px] tracking-[0.3em] text-[#c9a962] mb-1">
                {spec.label}
              </p>
              <p className="text-xs text-[#525252]">{spec.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature sections with dedicated images */}
        <div className="space-y-24 mb-32">
          {/* Advanced Ceramic Foam */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden border border-[#262626]">
                <Image
                  src="/images/aerocore-foam.png"
                  alt="AeroCore ceramic foam cross-section showing cellular microstructure"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-xs tracking-[0.2em] text-[#c9a962]">
                    CELLULAR MICROSTRUCTURE
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="group"
            >
              <h3 className="text-2xl md:text-3xl font-light text-white mb-6 group-hover:text-[#c9a962] transition-colors duration-300">
                {features[0].title}
              </h3>
              <p className="text-[#737373] leading-relaxed text-base md:text-lg">
                {features[0].description}
              </p>
              <div className="mt-6 w-12 h-px bg-[#262626] group-hover:w-24 group-hover:bg-[#c9a962] transition-all duration-500" />
            </motion.div>
          </div>

          {/* Integrated Convection Channels */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative rounded-lg overflow-hidden border border-[#262626]">
                <Image
                  src="/images/aerocore-convection.png"
                  alt="AeroCore convection channel system showing airflow paths"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-xs tracking-[0.2em] text-[#c9a962]">
                    INTEGRATED AIR CHANNELS
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="order-2 lg:order-1 group"
            >
              <h3 className="text-2xl md:text-3xl font-light text-white mb-6 group-hover:text-[#c9a962] transition-colors duration-300">
                {features[1].title}
              </h3>
              <p className="text-[#737373] leading-relaxed text-base md:text-lg">
                {features[1].description}
              </p>
              <div className="mt-6 w-12 h-px bg-[#262626] group-hover:w-24 group-hover:bg-[#c9a962] transition-all duration-500" />
            </motion.div>
          </div>

          {/* Next-Generation Durability — text only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-2xl mx-auto text-center group"
          >
            <h3 className="text-2xl md:text-3xl font-light text-white mb-6 group-hover:text-[#c9a962] transition-colors duration-300">
              {features[2].title}
            </h3>
            <p className="text-[#737373] leading-relaxed text-base md:text-lg">
              {features[2].description}
            </p>
            <div className="mt-6 w-12 h-px bg-[#262626] group-hover:w-24 group-hover:bg-[#c9a962] transition-all duration-500 mx-auto" />
          </motion.div>
        </div>

        {/* Color story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
            Four Finishes
          </h3>
          <p className="text-sm text-[#737373] mb-12 max-w-lg mx-auto font-light">
            Each finish is engineered into the material itself — not painted
            on. Choose the one that belongs in your space.
          </p>

          <div className="flex items-center justify-center gap-8 md:gap-12 mb-8">
            {colors.map((color, index) => (
              <motion.button
                key={color.id}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                onClick={() => setSelectedColor(color.id)}
                className="flex flex-col items-center gap-3 group cursor-pointer"
              >
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-full border-2 transition-all duration-300 ${
                    selectedColor === color.id
                      ? "border-[#c9a962] scale-110 shadow-[0_0_20px_rgba(201,169,98,0.3)]"
                      : "border-[#262626] group-hover:border-[#404040]"
                  }`}
                  style={{
                    backgroundColor: color.hex,
                    borderColor:
                      color.id === "arctic" && selectedColor !== color.id
                        ? "#555"
                        : undefined,
                  }}
                />
                <span
                  className={`text-xs tracking-[0.15em] transition-colors duration-300 ${
                    selectedColor === color.id
                      ? "text-[#c9a962]"
                      : "text-[#525252] group-hover:text-[#737373]"
                  }`}
                >
                  {color.name}
                </span>
              </motion.button>
            ))}
          </div>

          <Link
            href="/configure"
            className="inline-flex items-center text-sm tracking-[0.2em] text-[#c9a962] hover:text-white transition-colors group"
          >
            CONFIGURE YOURS
            <ArrowRight
              size={16}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
