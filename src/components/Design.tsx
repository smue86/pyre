"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Design() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="design"
      ref={ref}
      className="relative py-32 lg:py-48 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#262626] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.4em] text-[#c9a962] mb-6">
            THE DESIGN
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight tracking-wide mb-8 leading-tight">
            Built for the most{" "}
            <span className="italic text-[#c9a962]">beautiful</span>
            <br />
            surroundings.
          </h2>
          <p className="text-base md:text-lg text-[#737373] max-w-2xl mx-auto font-light">
            Current grills are ugly. Heavy. Haven&apos;t evolved. PYRE is
            designed to be at home on a rooftop terrace, a modern patio, or
            the most beautiful backyard you can imagine.
          </p>
        </motion.div>

        {/* Editorial image grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        >
          {/* Large hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 lg:row-span-2 relative rounded-lg overflow-hidden border border-[#262626] group"
          >
            <Image
              src="/images/pyre-lifestyle.png"
              alt="PYRE in a designed outdoor space"
              width={1200}
              height={800}
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="text-xs tracking-[0.2em] text-[#c9a962]">
                DESIGNED TO BELONG
              </p>
            </div>
          </motion.div>

          {/* Top right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative rounded-lg overflow-hidden border border-[#262626] group"
          >
            <Image
              src="/images/pyre-store.png"
              alt="PYRE product display"
              width={600}
              height={400}
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="text-xs tracking-[0.2em] text-[#c9a962]">
                PREMIUM MATERIALS
              </p>
            </div>
          </motion.div>

          {/* Bottom right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative rounded-lg overflow-hidden border border-[#262626] group"
          >
            <Image
              src="/images/pyre-detail.png"
              alt="PYRE design detail"
              width={600}
              height={400}
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="text-xs tracking-[0.2em] text-[#c9a962]">
                EVERY DETAIL CONSIDERED
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
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
