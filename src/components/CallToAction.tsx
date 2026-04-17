"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!email || !email.includes("@") || !email.includes(".")) {
      setError("Enter a valid email address.");
      return;
    }

    const mailtoLink = `mailto:launch@pyrefire.com?subject=Waitlist%20Signup&body=Please%20add%20${encodeURIComponent(email)}%20to%20the%20PYRE%20waitlist.`;
    window.location.href = mailtoLink;
    setEmailSubmitted(true);
  }

  return (
    <section
      id="cta"
      ref={ref}
      className="relative py-32 lg:py-48 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] to-[#0a0a0a]" />
        <div className="absolute inset-0 hero-gradient opacity-50" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.08 } : {}}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#c9a962]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.04 } : {}}
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
          <p className="text-xs tracking-[0.4em] text-[#c9a962] mb-8">
            FOUNDING EDITION
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-wide mb-8">
            Build Your{" "}
            <span className="text-gradient">PYRE</span>
          </h2>
          <p className="text-base md:text-lg text-[#737373] max-w-2xl mx-auto font-light mb-16 leading-relaxed">
            Be among the first to own what comes next. Reserve your place in the
            founding edition with a fully refundable $100 deposit — or join the
            waitlist for updates.
          </p>
        </motion.div>

        {/* Reserve option */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="inline-block mb-6">
            <p className="text-sm text-[#525252] mb-2">
              Fully refundable deposit
            </p>
            <p className="text-4xl md:text-5xl font-extralight text-white price-tag">
              $100
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/configure"
              className="btn-luxury group inline-flex items-center px-12 py-5 bg-[#c9a962] text-[#0a0a0a] text-sm tracking-[0.2em] font-medium hover:bg-[#e8d4a8] transition-all duration-300"
            >
              CONFIGURE & RESERVE
              <ArrowRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-8 text-xs text-[#404040]"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#c9a962] rounded-full" />
              100% Refundable
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#c9a962] rounded-full" />
              Priority Access
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#c9a962] rounded-full" />
              Founding Edition Pricing
            </span>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center gap-6 max-w-md mx-auto mb-16"
        >
          <div className="flex-1 h-px bg-[#262626]" />
          <span className="text-xs tracking-[0.3em] text-[#404040]">OR</span>
          <div className="flex-1 h-px bg-[#262626]" />
        </motion.div>

        {/* Email waitlist fallback */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-sm text-[#737373] mb-6 font-light">
            Not ready to reserve? Get development updates and early access.
          </p>

          {!emailSubmitted ? (
            <form
              onSubmit={handleEmailSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter your email"
                  className="w-full bg-transparent border-b border-[#262626] focus:border-[#c9a962]/60 text-white text-sm tracking-wider py-3 px-0 placeholder:text-[#525252] transition-colors duration-300 outline-none"
                />
                {error && (
                  <p className="text-xs text-red-400/80 mt-2 tracking-wide text-left">
                    {error}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="border border-[#404040] hover:border-[#c9a962] text-[#a3a3a3] hover:text-[#c9a962] text-xs tracking-[0.25em] uppercase py-3 px-8 transition-all duration-500 whitespace-nowrap cursor-pointer"
              >
                Join Waitlist
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#c9a962] text-sm tracking-[0.2em] uppercase mb-2">
                You&apos;re on the list
              </p>
              <p className="text-[#525252] text-xs tracking-wider font-light">
                We&apos;ll be in touch when the fire is ready.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
