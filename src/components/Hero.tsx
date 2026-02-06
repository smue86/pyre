"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(201, 169, 98, 0.3) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto pt-20">
        {/* Eyebrow text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm tracking-[0.4em] text-[#c9a962] mb-6"
        >
          INTRODUCING
        </motion.p>

        {/* Main headline - fixed */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-7xl md:text-8xl lg:text-[10rem] font-extralight tracking-tight mb-4"
        >
          <span className="text-gradient">PYRE</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl lg:text-2xl font-light tracking-[0.2em] text-[#a3a3a3] mb-4"
        >
          THE FUTURE OF FIRE
        </motion.p>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base md:text-lg text-[#737373] max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          Revolutionary AeroCore™ ceramic technology meets AI-powered precision.
          <br className="hidden md:block" />
          One platform. Infinite possibilities.
        </motion.p>

        {/* Product showcase with real image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
          className="product-showcase relative w-full max-w-4xl mx-auto mb-12"
        >
          <div className="relative">
            {/* Product image */}
            <Image
              src="/images/pyre-hero.jpeg"
              alt="PYRE - The Future of Fire"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            />
            {/* Subtle glow under product */}
            <div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-32 blur-3xl opacity-40"
              style={{ background: "radial-gradient(ellipse, rgba(201, 169, 98, 0.4), transparent 70%)" }}
            />
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/configure"
            className="btn-luxury group inline-flex items-center px-10 py-4 bg-[#c9a962] text-[#0a0a0a] text-sm tracking-[0.2em] font-medium hover:bg-[#e8d4a8] transition-all duration-300"
          >
            BUILD YOURS
            <motion.span
              className="ml-2"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Link>
          <Link
            href="#technology"
            className="inline-flex items-center px-10 py-4 border border-[#404040] text-sm tracking-[0.2em] text-[#a3a3a3] hover:border-[#c9a962] hover:text-[#c9a962] transition-all duration-300"
          >
            DISCOVER
          </Link>
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

      {/* Side decorations */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-[#262626] to-transparent" />
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-[#262626] to-transparent" />
      </div>
    </section>
  );
}
