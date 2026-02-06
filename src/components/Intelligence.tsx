"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Area,
  ComposedChart,
  Legend,
} from "recharts";
import { Brain, Thermometer, ChefHat, Wifi, LineChart as LineChartIcon } from "lucide-react";

// Simulated cook data for a brisket cook (9 hours)
const generateCookData = () => {
  const data = [];
  const totalMinutes = 540; // 9 hours

  for (let i = 0; i <= totalMinutes; i += 5) {
    const hours = i / 60;

    // Chamber temperature - starts high for sear, drops to low & slow, slight bump to push through stall
    let chamberTemp;
    if (hours < 0.25) {
      chamberTemp = 450 + Math.random() * 20; // Searing phase
    } else if (hours < 0.5) {
      chamberTemp = 450 - (hours - 0.25) * 800 + Math.random() * 10; // Dropping to low
    } else if (hours < 6) {
      chamberTemp = 225 + Math.sin(hours * 0.5) * 8 + Math.random() * 5; // Low & slow with slight variation
    } else if (hours < 7.5) {
      chamberTemp = 250 + Math.random() * 8; // Bump up to push through stall
    } else {
      chamberTemp = 225 + Math.random() * 5; // Back to holding
    }

    // Food probe 1 (brisket flat) - gradual rise with stall
    let probe1;
    if (hours < 0.25) {
      probe1 = 38 + hours * 80; // Quick rise during sear
    } else if (hours < 4) {
      probe1 = 58 + (hours - 0.25) * 28; // Gradual rise
    } else if (hours < 6) {
      probe1 = 163 + (hours - 4) * 2 + Math.random() * 2; // The stall (~165°F)
    } else if (hours < 8) {
      probe1 = 167 + (hours - 6) * 15; // Push through stall
    } else {
      probe1 = 197 + Math.random() * 3; // Target reached
    }

    // Food probe 2 (brisket point) - slightly different curve
    let probe2;
    if (hours < 0.25) {
      probe2 = 38 + hours * 70;
    } else if (hours < 4.5) {
      probe2 = 55 + (hours - 0.25) * 26;
    } else if (hours < 6.5) {
      probe2 = 165 + (hours - 4.5) * 1.5 + Math.random() * 2;
    } else if (hours < 8.5) {
      probe2 = 168 + (hours - 6.5) * 16;
    } else {
      probe2 = 200 + Math.random() * 3;
    }

    // Pellet feed rate (lbs/hr) - varies with temperature needs
    let pelletRate;
    if (hours < 0.5) {
      pelletRate = 2.5 + Math.random() * 0.3; // High during sear
    } else if (hours < 6) {
      pelletRate = 0.8 + Math.sin(hours * 0.3) * 0.15 + Math.random() * 0.1; // Steady low & slow
    } else if (hours < 7.5) {
      pelletRate = 1.2 + Math.random() * 0.15; // Increased for temp bump
    } else {
      pelletRate = 0.6 + Math.random() * 0.1; // Reduced for hold
    }

    // Ambient temperature (external) - slight variation
    const ambientTemp = 72 + Math.sin(hours * 0.2) * 5 + Math.random() * 2;

    // Smoke density (arbitrary 0-100 scale)
    let smokeDensity;
    if (hours < 4) {
      smokeDensity = 75 + Math.random() * 15; // Heavy smoke early
    } else if (hours < 6) {
      smokeDensity = 50 + Math.random() * 10; // Medium smoke
    } else {
      smokeDensity = 30 + Math.random() * 10; // Light smoke for finish
    }

    data.push({
      time: i,
      timeLabel: `${Math.floor(hours)}:${String(Math.round((hours % 1) * 60)).padStart(2, "0")}`,
      chamber: Math.round(chamberTemp),
      probe1: Math.round(probe1),
      probe2: Math.round(probe2),
      pelletRate: Math.round(pelletRate * 100) / 100,
      ambient: Math.round(ambientTemp),
      smoke: Math.round(smokeDensity),
    });
  }
  return data;
};

const cookData = generateCookData();

// Cook phases with timestamps (in minutes)
const phases = [
  { time: 0, name: "SEAR", color: "#ef4444" },
  { time: 30, name: "LOW & SLOW", color: "#c9a962" },
  { time: 240, name: "THE STALL", color: "#737373" },
  { time: 360, name: "PUSH THROUGH", color: "#c9a962" },
  { time: 450, name: "REST", color: "#22c55e" },
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
    icon: LineChartIcon,
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

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const timeInMinutes = payload[0]?.payload?.time || 0;
    const hours = Math.floor(timeInMinutes / 60);
    const minutes = timeInMinutes % 60;

    return (
      <div className="bg-[#0a0a0a]/95 backdrop-blur-sm border border-[#262626] p-4 rounded-lg shadow-xl">
        <p className="text-[#c9a962] text-sm font-medium mb-3 tracking-wider">
          {hours}h {minutes}m INTO COOK
        </p>
        <div className="space-y-2">
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center justify-between gap-6">
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: entry.color }}
                />
                <span className="text-xs text-[#737373] uppercase tracking-wider">
                  {entry.name}
                </span>
              </div>
              <span className="text-sm text-white font-mono">
                {entry.name === "Pellet Rate"
                  ? `${entry.value} lb/hr`
                  : entry.name === "Smoke"
                  ? `${entry.value}%`
                  : `${entry.value}°F`}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

// Custom legend
const CustomLegend = ({ payload }: any) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-4">
      {payload?.map((entry: any, index: number) => (
        <div key={index} className="flex items-center gap-2">
          <div
            className="w-3 h-0.5 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-xs text-[#737373] uppercase tracking-wider">
            {entry.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default function Intelligence() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeMetric, setActiveMetric] = useState<string | null>(null);

  return (
    <section
      id="intelligence"
      ref={ref}
      className="relative py-32 lg:py-48 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-[#0a0a0a] to-[#0d0d0d]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
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
          <div className="max-w-6xl mx-auto">
            {/* Chart header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
              <div>
                <h3 className="text-xl md:text-2xl font-light text-white mb-1">
                  Brisket Cook Journey
                </h3>
                <p className="text-sm text-[#525252]">
                  Based on Aaron Franklin method • 12 lb brisket • 9 hour cook
                </p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#141414] border border-[#262626] rounded-lg">
                <Brain size={16} className="text-[#c9a962]" />
                <span className="text-xs tracking-wider text-[#737373]">
                  AI OPTIMIZED
                </span>
              </div>
            </div>

            {/* Main chart container */}
            <div className="relative p-6 md:p-8 bg-[#0d0d0d] border border-[#262626] rounded-xl">
              {/* Phase labels at top */}
              <div className="flex mb-4 ml-12 mr-4">
                {phases.map((phase, index) => {
                  const nextPhase = phases[index + 1];
                  const startPercent = (phase.time / 540) * 100;
                  const widthPercent = nextPhase
                    ? ((nextPhase.time - phase.time) / 540) * 100
                    : ((540 - phase.time) / 540) * 100;

                  return (
                    <div
                      key={phase.name}
                      className="text-center"
                      style={{ width: `${widthPercent}%` }}
                    >
                      <span
                        className="text-[10px] md:text-xs tracking-wider font-medium px-2 py-1 rounded"
                        style={{ color: phase.color }}
                      >
                        {phase.name}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Chart */}
              <div className="h-[400px] md:h-[450px]">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart
                    data={cookData}
                    margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
                  >
                    {/* Grid */}
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#262626"
                      vertical={false}
                    />

                    {/* Phase reference lines */}
                    {phases.map((phase) => (
                      <ReferenceLine
                        key={phase.name}
                        x={phase.time}
                        stroke={phase.color}
                        strokeWidth={1}
                        strokeDasharray="4 4"
                        opacity={0.6}
                      />
                    ))}

                    {/* Target temperature reference */}
                    <ReferenceLine
                      y={203}
                      stroke="#22c55e"
                      strokeWidth={1}
                      strokeDasharray="8 4"
                      opacity={0.4}
                      label={{
                        value: "TARGET 203°F",
                        position: "right",
                        fill: "#22c55e",
                        fontSize: 10,
                        opacity: 0.7,
                      }}
                    />

                    {/* Stall zone */}
                    <ReferenceLine
                      y={165}
                      stroke="#737373"
                      strokeWidth={1}
                      strokeDasharray="4 4"
                      opacity={0.3}
                      label={{
                        value: "STALL ZONE",
                        position: "right",
                        fill: "#737373",
                        fontSize: 10,
                        opacity: 0.5,
                      }}
                    />

                    {/* Axes */}
                    <XAxis
                      dataKey="time"
                      tickFormatter={(value) => {
                        const hours = Math.floor(value / 60);
                        return `${hours}h`;
                      }}
                      stroke="#404040"
                      tick={{ fill: "#525252", fontSize: 11 }}
                      tickLine={{ stroke: "#404040" }}
                      axisLine={{ stroke: "#262626" }}
                      interval={Math.floor(cookData.length / 9)}
                    />
                    <YAxis
                      yAxisId="temp"
                      domain={[0, 500]}
                      stroke="#404040"
                      tick={{ fill: "#525252", fontSize: 11 }}
                      tickLine={{ stroke: "#404040" }}
                      axisLine={{ stroke: "#262626" }}
                      tickFormatter={(value) => `${value}°`}
                    />
                    <YAxis
                      yAxisId="rate"
                      orientation="right"
                      domain={[0, 3]}
                      stroke="#404040"
                      tick={{ fill: "#525252", fontSize: 11 }}
                      tickLine={{ stroke: "#404040" }}
                      axisLine={{ stroke: "#262626" }}
                      tickFormatter={(value) => `${value}`}
                      hide
                    />

                    {/* Tooltip */}
                    <Tooltip content={<CustomTooltip />} />

                    {/* Legend */}
                    <Legend content={<CustomLegend />} />

                    {/* Data lines */}
                    <Line
                      yAxisId="temp"
                      type="monotone"
                      dataKey="chamber"
                      name="Chamber"
                      stroke="#c9a962"
                      strokeWidth={2}
                      dot={false}
                      activeDot={{ r: 4, fill: "#c9a962" }}
                    />
                    <Line
                      yAxisId="temp"
                      type="monotone"
                      dataKey="probe1"
                      name="Probe 1 (Flat)"
                      stroke="#ef4444"
                      strokeWidth={2}
                      dot={false}
                      activeDot={{ r: 4, fill: "#ef4444" }}
                    />
                    <Line
                      yAxisId="temp"
                      type="monotone"
                      dataKey="probe2"
                      name="Probe 2 (Point)"
                      stroke="#f97316"
                      strokeWidth={2}
                      dot={false}
                      activeDot={{ r: 4, fill: "#f97316" }}
                    />
                    <Line
                      yAxisId="temp"
                      type="monotone"
                      dataKey="ambient"
                      name="Ambient"
                      stroke="#3b82f6"
                      strokeWidth={1.5}
                      strokeDasharray="4 2"
                      dot={false}
                      activeDot={{ r: 3, fill: "#3b82f6" }}
                    />
                    <Area
                      yAxisId="rate"
                      type="monotone"
                      dataKey="pelletRate"
                      name="Pellet Rate"
                      stroke="#22c55e"
                      strokeWidth={1}
                      fill="#22c55e"
                      fillOpacity={0.1}
                      dot={false}
                      activeDot={{ r: 3, fill: "#22c55e" }}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>

              {/* Chart footer - metrics summary */}
              <div className="mt-6 pt-6 border-t border-[#262626]">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-extralight text-white">
                      9<span className="text-lg text-[#737373]">h</span> 00<span className="text-lg text-[#737373]">m</span>
                    </p>
                    <p className="text-xs text-[#525252] tracking-wider mt-1">TOTAL TIME</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-extralight text-[#c9a962]">
                      225<span className="text-lg text-[#737373]">°F</span>
                    </p>
                    <p className="text-xs text-[#525252] tracking-wider mt-1">AVG CHAMBER</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-extralight text-[#ef4444]">
                      203<span className="text-lg text-[#737373]">°F</span>
                    </p>
                    <p className="text-xs text-[#525252] tracking-wider mt-1">FINAL INTERNAL</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-extralight text-[#22c55e]">
                      6.2<span className="text-lg text-[#737373]">lb</span>
                    </p>
                    <p className="text-xs text-[#525252] tracking-wider mt-1">PELLETS USED</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-extralight text-[#3b82f6]">
                      ±3<span className="text-lg text-[#737373]">°F</span>
                    </p>
                    <p className="text-xs text-[#525252] tracking-wider mt-1">TEMP VARIANCE</p>
                  </div>
                </div>
              </div>
            </div>

            {/* AI insights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 grid md:grid-cols-3 gap-4"
            >
              <div className="p-4 bg-[#141414] border border-[#262626] rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#c9a962]" />
                  <p className="text-xs tracking-wider text-[#c9a962]">AI ADJUSTMENT</p>
                </div>
                <p className="text-sm text-[#a3a3a3]">
                  Increased chamber temp by 25°F at hour 6 to push through stall faster
                </p>
              </div>
              <div className="p-4 bg-[#141414] border border-[#262626] rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
                  <p className="text-xs tracking-wider text-[#22c55e]">PELLET OPTIMIZATION</p>
                </div>
                <p className="text-sm text-[#a3a3a3]">
                  Reduced feed rate by 15% after bark formation to conserve fuel
                </p>
              </div>
              <div className="p-4 bg-[#141414] border border-[#262626] rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#3b82f6]" />
                  <p className="text-xs tracking-wider text-[#3b82f6]">AMBIENT COMPENSATION</p>
                </div>
                <p className="text-sm text-[#a3a3a3]">
                  Detected 8°F ambient drop at hour 4, auto-adjusted dampers
                </p>
              </div>
            </motion.div>
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
