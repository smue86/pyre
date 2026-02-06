"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Thermometer, Clock, ChefHat, Wifi, LineChart } from "lucide-react";

const cookPhases = [
  { name: "Sear", temp: "500°F", time: "0:15", color: "#ef4444" },
  { name: "Low & Slow", temp: "225°F", time: "4:00", color: "#c9a962" },
  { name: "The Stall", temp: "165°F", time: "2:30", color: "#737373" },
  { name: "Push Through", temp: "275°F", time: "1:30", color: "#c9a962" },
  { name: "Rest", temp: "145°F", time: "1:00", color: "#22c55e" },
];

const features = [
  {
    icon: Brain,
    title: "Cook Journey AI",
    description:
      "Our AI understands the science of cooking. It doesn't just hit temperatures—it manages the entire journey, adapting to the unique characteristics of each cook.",
  },
  {
    icon: ChefHat,
    title: "Master Profiles",
    description:
      "Replicate the exact cooking profiles of world-renowned pitmasters. From Aaron Franklin's brisket to Michelin-star techniques, perfection is one tap away.",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description:
      "Know exactly when your cook will finish. Our AI factors in meat weight, ambient temperature, humidity, and cook history for precise timing.",
  },
  {
    icon: Wifi,
    title: "Connected Control",
    description:
      "Full control from anywhere. Adjust temps, monitor progress, receive alerts, and review cook history from our iOS and Android apps.",
  },
];

export default function Intelligence() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="intelligence"
      ref={ref}
      className="relative py-32 lg:py-48 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-[#0a0a0a] to-[#0d0d0d]" />

      {/* Decorative grid lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: i * 0.1 }}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a962] to-transparent"
            style={{ top: `${10 + i * 8}%` }}
          />
        ))}
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
            INTELLIGENT COOKING SYSTEM
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-wide mb-8">
            PYREMIND™
          </h2>
          <p className="text-lg md:text-xl text-[#737373] max-w-3xl mx-auto font-light">
            AI that doesn't just follow recipes—it understands the science of fire.
            <br className="hidden md:block" />
            Train on perfection. Cook with confidence.
          </p>
        </motion.div>

        {/* Cook journey visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4 px-4">
              <p className="text-sm tracking-[0.2em] text-[#737373]">
                BRISKET COOK JOURNEY
              </p>
              <p className="text-sm text-[#525252]">Based on Aaron Franklin method</p>
            </div>

            {/* Journey timeline */}
            <div className="relative p-8 bg-[#0d0d0d] border border-[#262626] rounded-lg">
              {/* Temperature graph placeholder */}
              <div className="relative h-48 mb-8">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-[#525252] w-12">
                  <span>500°F</span>
                  <span>350°F</span>
                  <span>225°F</span>
                  <span>100°F</span>
                </div>

                {/* Graph area */}
                <div className="ml-14 h-full relative">
                  {/* Graph line */}
                  <svg className="absolute inset-0 w-full h-full">
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : {}}
                      transition={{ duration: 2, delay: 0.5 }}
                      d="M 0 20 L 40 20 L 60 180 L 200 170 L 260 140 L 340 180 L 400 160"
                      fill="none"
                      stroke="#c9a962"
                      strokeWidth="2"
                      className="drop-shadow-lg"
                      style={{
                        filter: "drop-shadow(0 0 4px rgba(201, 169, 98, 0.5))",
                      }}
                    />
                    {/* Grid lines */}
                    {[...Array(4)].map((_, i) => (
                      <line
                        key={i}
                        x1="0"
                        y1={i * 60}
                        x2="100%"
                        y2={i * 60}
                        stroke="#262626"
                        strokeWidth="1"
                      />
                    ))}
                  </svg>

                  {/* Phase markers */}
                  <div className="absolute bottom-0 left-0 right-0 flex">
                    {cookPhases.map((phase, i) => (
                      <motion.div
                        key={phase.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                        className="flex-1 text-center border-l border-[#262626] first:border-l-0"
                      >
                        <div
                          className="w-2 h-2 rounded-full mx-auto mb-2"
                          style={{ backgroundColor: phase.color }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Phase labels */}
              <div className="flex ml-14">
                {cookPhases.map((phase, i) => (
                  <motion.div
                    key={phase.name}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                    className="flex-1 text-center px-2"
                  >
                    <p className="text-sm text-white mb-1">{phase.name}</p>
                    <p className="text-xs text-[#c9a962]">{phase.temp}</p>
                    <p className="text-xs text-[#525252]">{phase.time}</p>
                  </motion.div>
                ))}
              </div>

              {/* AI indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="mt-8 pt-8 border-t border-[#262626] flex items-center justify-center gap-4"
              >
                <Brain size={20} className="text-[#c9a962]" strokeWidth={1} />
                <p className="text-sm text-[#737373]">
                  AI continuously adjusts pellet feed, convection, and dampers based on real-time conditions
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Features grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="group p-8 bg-[#0d0d0d] border border-[#262626] hover:border-[#c9a962]/30 transition-all duration-500"
            >
              <feature.icon
                size={32}
                className="text-[#c9a962] mb-6 opacity-60 group-hover:opacity-100 transition-opacity"
                strokeWidth={1}
              />
              <h3 className="text-xl md:text-2xl font-light text-white mb-4 group-hover:text-[#c9a962] transition-colors">
                {feature.title}
              </h3>
              <p className="text-[#737373] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-center gap-6 px-8 py-4 border border-[#262626] bg-[#0d0d0d]">
            <Thermometer size={24} className="text-[#c9a962]" strokeWidth={1} />
            <div className="text-left">
              <p className="text-sm text-[#737373]">Coming Soon</p>
              <p className="text-white">
                Upload your own cook profiles and share with the community
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
