"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Zap, Feather, Flame, Wind } from "lucide-react";

const specs = [
  {
    icon: Feather,
    value: "10%",
    label: "THE WEIGHT",
    description: "Of traditional ceramic grills",
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
];

const features = [
  {
    title: "Aerospace-Grade Ceramic Foam",
    description:
      "Born from cutting-edge materials science, AeroCore™ ceramic foam delivers unmatched thermal performance with a fraction of the mass. The cellular microstructure creates millions of insulating air pockets.",
  },
  {
    title: "Integrated Air Channels",
    description:
      "Precision-engineered convection pathways allow for rapid temperature control. Heat up faster, cool down quicker, and maintain perfect stability throughout your cook.",
  },
  {
    title: "Next-Generation Durability",
    description:
      "AeroCore™ resists thermal shock, moisture damage, and structural degradation. Built to outlast traditional ceramics by orders of magnitude.",
  },
];

export default function Technology() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="technology"
      ref={ref}
      className="relative py-32 lg:py-48 overflow-hidden"
    >
      {/* Background */}
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
          <p className="text-sm tracking-[0.4em] text-[#c9a962] mb-6">
            MATERIAL INNOVATION
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-wide mb-8">
            AEROCORE™
          </h2>
          <p className="text-lg md:text-xl text-[#737373] max-w-3xl mx-auto font-light">
            A revolutionary ceramic foam technology that defies convention.
            <br />
            Lighter. Stronger. More efficient.
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#262626] mb-24"
        >
          {specs.map((spec, index) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-[#0a0a0a] p-8 lg:p-12 text-center group hover:bg-[#0d0d0d] transition-colors duration-500"
            >
              <spec.icon
                className="w-6 h-6 mx-auto mb-6 text-[#c9a962] opacity-60 group-hover:opacity-100 transition-opacity"
                strokeWidth={1}
              />
              <p className="text-4xl md:text-5xl font-extralight text-white mb-2">
                {spec.value}
              </p>
              <p className="text-xs tracking-[0.3em] text-[#c9a962] mb-2">
                {spec.label}
              </p>
              <p className="text-sm text-[#525252]">{spec.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature columns */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Product detail image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-lg overflow-hidden border border-[#262626]">
              <Image
                src="/images/pyre-display.png"
                alt="PYRE temperature display showing precision control"
                width={800}
                height={1000}
                className="w-full h-auto"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs tracking-[0.2em] text-[#c9a962]">
                  PRECISION TEMPERATURE CONTROL
                </p>
              </div>
            </div>
          </motion.div>

          {/* Features list */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-12 order-1 lg:order-2"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="group"
              >
                <h3 className="text-xl md:text-2xl font-light text-white mb-4 group-hover:text-[#c9a962] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-[#737373] leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-4 w-12 h-px bg-[#262626] group-hover:w-24 group-hover:bg-[#c9a962] transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
