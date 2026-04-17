"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Observation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="observation"
      ref={ref}
      className="relative py-32 lg:py-48 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#262626] to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-wide text-center mb-16 leading-tight"
        >
          Fire brought us{" "}
          <span className="italic text-[#c9a962]">together</span>.
          <br />
          Then we stopped innovating.
        </motion.h2>

        <div className="space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-base md:text-lg text-[#a3a3a3] font-light leading-relaxed"
          >
            Humans have been cooking with fire for millennia. It is the oldest
            technology we have. Fire brought us together around the table,
            around the pit, around the flame. It is how we feed the people we
            love.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-[#a3a3a3] font-light leading-relaxed"
          >
            Cooking has evolved. Techniques, ingredients, tools — all of it has
            moved forward. But at some point, we stopped innovating with fire{" "}
            <span className="italic text-[#c9a962]">itself</span>. The
            firebox — the most fundamental part of the experience — hasn&apos;t
            changed in decades.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-white font-light leading-relaxed"
          >
            That is the story of PYRE. The best-designed fire-based cooking
            appliance ever made.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-[#737373] font-light leading-relaxed"
          >
            Design optimism. No compromises. Cutting-edge materials science.
            Technology that is native but not invasive. A future-proof platform.
            A complete rethink of outdoor cooking — from the fuel up.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
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
