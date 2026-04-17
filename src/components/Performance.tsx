"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Feather,
  Flame,
  Wind,
  Shield,
  Zap,
  Timer,
  HandMetal,
  ArrowRight,
} from "lucide-react";

const specs = [
  {
    icon: Feather,
    value: "~90%",
    label: "LIGHTER",
    description: "Than traditional ceramic kamados",
  },
  {
    icon: Flame,
    value: "225–2000°F",
    label: "TEMP RANGE",
    description: "Full spectrum live-fire cooking",
  },
  {
    icon: Zap,
    value: "3x",
    label: "FUEL EFFICIENCY",
    description: "Less fuel, longer cooks",
  },
  {
    icon: Timer,
    value: "15 min",
    label: "HEAT-UP",
    description: "To 225°F cooking temp",
  },
  {
    icon: Wind,
    value: "5 min",
    label: "COOL DOWN",
    description: "From max to 300°F",
  },
  {
    icon: Shield,
    value: "500+",
    label: "HEAT CYCLES",
    description: "No cracking, no warping",
  },
  {
    icon: HandMetal,
    value: "Touch Safe",
    label: "EXTERIOR",
    description: "Hand on outside at cook temp",
  },
  {
    icon: Flame,
    value: "±3°F",
    label: "VARIANCE",
    description: "Rock-solid temperature hold",
  },
];

const comparison = [
  {
    category: "Weight",
    pyre: "~25 lbs",
    ceramic: "150–250 lbs",
    steel: "50–80 lbs",
  },
  {
    category: "Heat-Up Time",
    pyre: "15 min",
    ceramic: "30–45 min",
    steel: "10–15 min",
  },
  {
    category: "Fuel Efficiency",
    pyre: "3x baseline",
    ceramic: "1.5x baseline",
    steel: "1x baseline",
  },
  {
    category: "Insulation",
    pyre: "Touch-safe exterior",
    ceramic: "Warm exterior",
    steel: "Hot exterior",
  },
  {
    category: "Durability",
    pyre: "500+ cycles",
    ceramic: "Cracks over time",
    steel: "Rusts over time",
  },
  {
    category: "Portability",
    pyre: "One person",
    ceramic: "Two+ people",
    steel: "One person",
  },
];

export default function Performance() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="performance"
      ref={ref}
      className="relative py-32 lg:py-48 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#262626] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#262626] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.4em] text-[#c9a962] mb-6">
            BUILT TO PERFORM
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-wide mb-8">
            Engineered without{" "}
            <span className="italic text-[#c9a962]">compromise</span>.
          </h2>
          <p className="text-base md:text-lg text-[#737373] max-w-2xl mx-auto font-light">
            Every number earned through testing. Every benchmark validated with
            real fire, real food, real conditions.
          </p>
        </motion.div>

        {/* Specs grid */}
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
              transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
              className="bg-[#0a0a0a] p-6 lg:p-10 text-center group hover:bg-[#0d0d0d] transition-colors duration-500"
            >
              <spec.icon
                className="w-5 h-5 mx-auto mb-4 text-[#c9a962] opacity-60 group-hover:opacity-100 transition-opacity"
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

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-light text-center text-white mb-12">
            How PYRE Compares
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#262626]">
                  <th className="py-4 px-4 text-xs tracking-[0.2em] text-[#737373] font-normal" />
                  <th className="py-4 px-4 text-xs tracking-[0.2em] text-[#c9a962] font-normal">
                    PYRE
                  </th>
                  <th className="py-4 px-4 text-xs tracking-[0.2em] text-[#525252] font-normal">
                    CERAMIC KAMADO
                  </th>
                  <th className="py-4 px-4 text-xs tracking-[0.2em] text-[#525252] font-normal">
                    STEEL GRILL
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <motion.tr
                    key={row.category}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    className="border-b border-[#1a1a1a]"
                  >
                    <td className="py-4 px-4 text-sm text-[#737373]">
                      {row.category}
                    </td>
                    <td className="py-4 px-4 text-sm text-white font-light">
                      {row.pyre}
                    </td>
                    <td className="py-4 px-4 text-sm text-[#525252]">
                      {row.ceramic}
                    </td>
                    <td className="py-4 px-4 text-sm text-[#525252]">
                      {row.steel}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-16"
        >
          <Link
            href="/configure"
            className="inline-flex items-center text-sm tracking-[0.2em] text-[#c9a962] hover:text-white transition-colors group"
          >
            BUILD YOUR PYRE
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
