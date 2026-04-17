"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    name: "PYRE Tee",
    category: "Apparel",
    color: "#1a1a1a",
    accent: "#c9a962",
  },
  {
    name: "PYRE Cap",
    category: "Apparel",
    color: "#1c1c1c",
    accent: "#a68b4b",
  },
  {
    name: "Leather Apron",
    category: "Gear",
    color: "#2a1a0f",
    accent: "#8b6914",
  },
  {
    name: "Fire Vest",
    category: "Apparel",
    color: "#1a1a1a",
    accent: "#c9a962",
  },
  {
    name: "Leather Gloves",
    category: "Gear",
    color: "#241a10",
    accent: "#8b6914",
  },
  {
    name: "Tool Roll",
    category: "Gear",
    color: "#1e1e1e",
    accent: "#a68b4b",
  },
  {
    name: "Bottle Opener",
    category: "Accessories",
    color: "#1a1a1a",
    accent: "#c9a962",
  },
  {
    name: "Sticker Pack",
    category: "Accessories",
    color: "#1c1c1c",
    accent: "#a68b4b",
  },
];

export default function Swag() {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  function updateScrollState() {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }

  function scroll(direction: "left" | "right") {
    if (!scrollRef.current) return;
    const amount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
    setTimeout(updateScrollState, 400);
  }

  return (
    <section
      id="swag"
      ref={ref}
      className="relative py-32 lg:py-48 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#262626] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.4em] text-[#c9a962] mb-6">
              SWAG
            </p>
            <h2 className="text-4xl md:text-5xl font-extralight tracking-wide">
              Wear the fire.
            </h2>
          </motion.div>

          {/* Carousel controls */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:flex items-center gap-2"
          >
            <button
              onClick={() => scroll("left")}
              className={`w-10 h-10 border flex items-center justify-center transition-all cursor-pointer ${
                canScrollLeft
                  ? "border-[#404040] text-white hover:border-[#c9a962]"
                  : "border-[#262626] text-[#333] cursor-default"
              }`}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className={`w-10 h-10 border flex items-center justify-center transition-all cursor-pointer ${
                canScrollRight
                  ? "border-[#404040] text-white hover:border-[#c9a962]"
                  : "border-[#262626] text-[#333] cursor-default"
              }`}
            >
              <ChevronRight size={18} />
            </button>
          </motion.div>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            ref={scrollRef}
            onScroll={updateScrollState}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                className="snap-start shrink-0 w-[240px] md:w-[280px] group"
              >
                <div className="bg-[#141414] border border-[#262626] hover:border-[#c9a962]/20 transition-all duration-500 overflow-hidden">
                  {/* Placeholder image */}
                  <div
                    className="aspect-[4/5] relative overflow-hidden"
                    style={{ backgroundColor: product.color }}
                  >
                    {/* Stylized placeholder with PYRE branding */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div
                        className="w-16 h-16 rounded-full border opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                        style={{ borderColor: product.accent }}
                      />
                      <div
                        className="w-px h-8 mt-3 opacity-10"
                        style={{ backgroundColor: product.accent }}
                      />
                    </div>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-60" />
                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[9px] tracking-[0.2em] text-[#525252] uppercase">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-light text-white mb-1">
                      {product.name}
                    </p>
                    <p className="text-[10px] tracking-[0.2em] text-[#c9a962]">
                      SHOP NOW
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href="#"
            className="inline-flex items-center text-sm tracking-[0.2em] text-[#c9a962] hover:text-white transition-colors"
          >
            SHOP ALL SWAG
          </a>
        </motion.div>
      </div>
    </section>
  );
}
