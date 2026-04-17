"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#design", label: "Design" },
  { href: "#foundation", label: "AeroCore" },
  { href: "#platform", label: "Platform" },
  { href: "#pyremind", label: "PyreMind" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="relative group">
            <Image
              src="/images/pyre-logo.svg"
              alt="PYRE"
              width={120}
              height={33}
              className="h-7 w-auto"
              priority
            />
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c9a962] transition-all duration-300 group-hover:w-full" />
          </Link>

          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm tracking-widest text-[#a3a3a3] hover:text-white transition-colors duration-300 group"
              >
                {link.label.toUpperCase()}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c9a962] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="/configure"
              className="btn-luxury inline-flex items-center px-6 py-2.5 bg-[#c9a962] text-[#0a0a0a] text-xs tracking-[0.2em] font-medium hover:bg-[#e8d4a8] transition-all duration-300"
            >
              BUILD YOUR PYRE
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-[#262626]/50"
          >
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg tracking-widest text-[#a3a3a3] hover:text-white"
                  >
                    {link.label.toUpperCase()}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/configure"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-luxury inline-flex items-center px-6 py-2.5 bg-[#c9a962] text-[#0a0a0a] text-xs tracking-[0.2em] font-medium hover:bg-[#e8d4a8] transition-all duration-300"
              >
                BUILD YOUR PYRE
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
