"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background: video placeholder with image fallback */}
      {/* TODO: Replace with <video autoPlay muted loop playsInline> when video asset is ready */}
      <div className="absolute inset-0">
        <Image
          src="/images/pyre-hero-single.jpeg"
          alt="PYRE outdoor cooking experience"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/40 to-[#0a0a0a]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/50 via-transparent to-[#0a0a0a]/50" />
      </div>

      <div className="absolute inset-0 noise" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs tracking-[0.4em] text-[#c9a962] mb-10"
        >
          INTRODUCING
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <Image
            src="/images/pyre-logo.svg"
            alt="PYRE"
            width={380}
            height={105}
            className="h-[50px] md:h-[65px] lg:h-[80px] w-auto mx-auto"
            priority
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl lg:text-2xl font-light tracking-[0.2em] text-[#e8e8e8] mb-8"
        >
          THE FUTURE OF FIRE
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-16 h-px bg-[#c9a962]/40 mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-base md:text-lg text-[#a3a3a3] max-w-xl mx-auto font-light leading-relaxed mb-12"
        >
          A complete rethink of outdoor cooking. Engineered from the material
          up. Built for those who refuse to compromise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/configure"
            className="btn-luxury group inline-flex items-center px-10 py-4 bg-[#c9a962] text-[#0a0a0a] text-sm tracking-[0.2em] font-medium hover:bg-[#e8d4a8] transition-all duration-300"
          >
            BUILD YOUR PYRE
            <motion.span
              className="ml-2"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              &rarr;
            </motion.span>
          </Link>
          <a
            href="#cta"
            className="inline-flex items-center px-10 py-4 border border-[#ffffff20] text-sm tracking-[0.2em] text-[#a3a3a3] hover:border-[#c9a962] hover:text-[#c9a962] transition-all duration-300"
          >
            GET UPDATES
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-[#525252]"
        >
          <span className="text-xs tracking-[0.3em] mb-2">SCROLL</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
