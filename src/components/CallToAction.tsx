"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-32 lg:py-48 overflow-hidden"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] to-[#0a0a0a]" />
        <div className="absolute inset-0 hero-gradient opacity-50" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.1 } : {}}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#c9a962]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.05 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#c9a962]"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-[0.4em] text-[#c9a962] mb-8">
            LIMITED FOUNDING EDITION
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-wide mb-8">
            RESERVE YOUR <span className="text-gradient">PYRE</span>
          </h2>
          <p className="text-lg md:text-xl text-[#737373] max-w-2xl mx-auto font-light mb-12">
            Be among the first to experience the future of outdoor cooking.
            Configure your perfect PYRE and secure your place in the founding edition.
          </p>

          {/* Price indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-sm text-[#525252] mb-2">Starting from</p>
            <p className="text-4xl md:text-5xl font-extralight text-white price-tag">
              $4,999
            </p>
            <p className="text-sm text-[#525252] mt-2">
              Fully refundable $500 deposit
            </p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/configure"
              className="btn-luxury group inline-flex items-center px-12 py-5 bg-[#c9a962] text-[#0a0a0a] text-sm tracking-[0.2em] font-medium hover:bg-[#e8d4a8] transition-all duration-300"
            >
              CONFIGURE NOW
              <ArrowRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center px-12 py-5 border border-[#404040] text-sm tracking-[0.2em] text-[#a3a3a3] hover:border-[#c9a962] hover:text-[#c9a962] transition-all duration-300"
            >
              SCHEDULE A DEMO
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-xs text-[#404040]"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#c9a962] rounded-full" />
              5-Year Warranty
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#c9a962] rounded-full" />
              Free Shipping
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#c9a962] rounded-full" />
              White Glove Delivery
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
