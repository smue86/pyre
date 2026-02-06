"use client";

import { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Flame,
  Palette,
  Layers,
  Boxes,
  Wrench,
  ShoppingBag,
  RotateCcw,
} from "lucide-react";
import {
  colors,
  baseOptions,
  cookingModules,
  accessories,
  tools,
  calculateTotal,
  Configuration,
  BASE_PRICE,
} from "@/lib/configurator-data";

// Dynamically import 3D viewer to avoid SSR issues
const PyreViewer3D = dynamic(() => import("@/components/PyreViewer3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-2 border-[#c9a962] border-t-transparent rounded-full animate-spin" />
        <p className="text-sm tracking-[0.2em] text-[#737373]">LOADING 3D MODEL</p>
      </div>
    </div>
  ),
});

const steps = [
  { id: "color", label: "Exterior", icon: Palette },
  { id: "base", label: "Base", icon: Layers },
  { id: "modules", label: "Modules", icon: Boxes },
  { id: "accessories", label: "Accessories", icon: Wrench },
  { id: "tools", label: "Tools", icon: ShoppingBag },
  { id: "summary", label: "Summary", icon: Check },
];

export default function ConfiguratorPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [config, setConfig] = useState<Configuration>({
    color: "obsidian",
    base: "no-base",
    modules: [],
    accessories: [],
    tools: [],
  });

  const total = calculateTotal(config);

  const toggleItem = (
    category: "modules" | "accessories" | "tools",
    id: string
  ) => {
    setConfig((prev) => ({
      ...prev,
      [category]: prev[category].includes(id)
        ? prev[category].filter((item) => item !== id)
        : [...prev[category], id],
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const selectedColor = colors.find((c) => c.id === config.color);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-4 text-[#737373] hover:text-white transition-colors">
              <ArrowLeft size={20} />
              <span className="text-sm tracking-widest">BACK</span>
            </Link>

            <Link href="/" className="absolute left-1/2 -translate-x-1/2">
              <span className="text-xl font-light tracking-[0.3em] text-gradient">
                PYRE
              </span>
            </Link>

            <div className="text-right">
              <p className="text-xs text-[#525252]">YOUR BUILD</p>
              <p className="text-xl font-light price-tag">${total.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-1 pt-20 flex">
        {/* Left side - 3D Product Viewer */}
        <div className="hidden lg:flex flex-1 flex-col configurator-view sticky top-20 h-[calc(100vh-5rem)]">
          {/* 3D Viewer */}
          <div className="flex-1 relative">
            <PyreViewer3D
              color={config.color}
              base={config.base}
              modules={config.modules}
            />
          </div>

          {/* Configuration summary below viewer */}
          <div className="p-6 border-t border-[#262626]/50 bg-[#0a0a0a]/80 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm tracking-[0.2em] text-[#c9a962]">
                  {selectedColor?.name.toUpperCase()}
                </p>
                {config.base !== "no-base" && (
                  <p className="text-xs tracking-[0.15em] text-[#525252] mt-1">
                    WITH {baseOptions.find(b => b.id === config.base)?.name.toUpperCase()}
                  </p>
                )}
              </div>

              {/* Module badges */}
              {config.modules.length > 0 && (
                <div className="flex flex-wrap gap-2 justify-end">
                  {config.modules.slice(0, 3).map((id) => {
                    const module = cookingModules.find(m => m.id === id);
                    return (
                      <span
                        key={id}
                        className="px-2 py-1 bg-[#c9a962]/10 border border-[#c9a962]/30 text-[#c9a962] text-xs tracking-wider"
                      >
                        {module?.name.split(' ')[0].toUpperCase()}
                      </span>
                    );
                  })}
                  {config.modules.length > 3 && (
                    <span className="px-2 py-1 text-[#737373] text-xs">
                      +{config.modules.length - 3} MORE
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right side - Configuration options */}
        <div className="w-full lg:w-[500px] xl:w-[600px] border-l border-[#262626] flex flex-col">
          {/* Step indicator */}
          <div className="p-6 border-b border-[#262626]">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setCurrentStep(index)}
                  className={`flex flex-col items-center gap-2 transition-all ${
                    index === currentStep
                      ? "text-[#c9a962]"
                      : index < currentStep
                      ? "text-[#737373]"
                      : "text-[#404040]"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                      index === currentStep
                        ? "border-[#c9a962] bg-[#c9a962]/10"
                        : index < currentStep
                        ? "border-[#737373]"
                        : "border-[#404040]"
                    }`}
                  >
                    {index < currentStep ? (
                      <Check size={16} />
                    ) : (
                      <step.icon size={16} />
                    )}
                  </div>
                  <span className="text-xs tracking-wider hidden sm:block">
                    {step.label.toUpperCase()}
                  </span>
                </button>
              ))}
            </div>
            <div className="h-1 bg-[#262626] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#c9a962]"
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Step content */}
          <div className="flex-1 overflow-y-auto p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Color Step */}
                {currentStep === 0 && (
                  <div>
                    <h2 className="text-2xl font-light mb-2">Choose Your Exterior</h2>
                    <p className="text-[#737373] mb-8">
                      Select from our curated palette of premium ceramic finishes.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {colors.map((color) => (
                        <button
                          key={color.id}
                          onClick={() =>
                            setConfig((prev) => ({ ...prev, color: color.id }))
                          }
                          className={`group p-4 border rounded-lg transition-all ${
                            config.color === color.id
                              ? "border-[#c9a962] bg-[#c9a962]/5"
                              : "border-[#262626] hover:border-[#404040]"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className={`w-12 h-12 rounded-full border-2 color-swatch ${
                                config.color === color.id ? "selected" : ""
                              }`}
                              style={{
                                backgroundColor: color.hex,
                                borderColor:
                                  color.id === "arctic"
                                    ? "#ddd"
                                    : "transparent",
                              }}
                            />
                            <div className="text-left">
                              <p className="text-white font-light">{color.name}</p>
                              <p className="text-sm text-[#525252]">
                                {color.price === 0
                                  ? "Included"
                                  : `+$${color.price}`}
                              </p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Base Step */}
                {currentStep === 1 && (
                  <div>
                    <h2 className="text-2xl font-light mb-2">Select Your Base</h2>
                    <p className="text-[#737373] mb-8">
                      Choose how you want to mount your PYRE.
                    </p>
                    <div className="space-y-4">
                      {baseOptions.map((base) => (
                        <button
                          key={base.id}
                          onClick={() =>
                            setConfig((prev) => ({ ...prev, base: base.id }))
                          }
                          className={`w-full p-6 border rounded-lg text-left transition-all ${
                            config.base === base.id
                              ? "border-[#c9a962] bg-[#c9a962]/5"
                              : "border-[#262626] hover:border-[#404040]"
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-lg text-white font-light mb-1">
                                {base.name}
                              </p>
                              <p className="text-sm text-[#737373]">
                                {base.description}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-[#c9a962]">
                                {base.price === 0
                                  ? "Included"
                                  : `+$${base.price}`}
                              </p>
                              {config.base === base.id && (
                                <Check
                                  size={20}
                                  className="text-[#c9a962] mt-2 ml-auto"
                                />
                              )}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Modules Step */}
                {currentStep === 2 && (
                  <div>
                    <h2 className="text-2xl font-light mb-2">Add Cooking Modules</h2>
                    <p className="text-[#737373] mb-8">
                      Expand your capabilities with bolt-on modules.
                    </p>
                    <div className="space-y-4">
                      {cookingModules.map((module) => (
                        <button
                          key={module.id}
                          onClick={() => toggleItem("modules", module.id)}
                          className={`w-full p-6 border rounded-lg text-left transition-all ${
                            config.modules.includes(module.id)
                              ? "border-[#c9a962] bg-[#c9a962]/5"
                              : "border-[#262626] hover:border-[#404040]"
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <p className="text-lg text-white font-light mb-1">
                                {module.name}
                              </p>
                              <p className="text-sm text-[#737373]">
                                {module.description}
                              </p>
                            </div>
                            <div className="text-right ml-4">
                              <p className="text-[#c9a962]">+${module.price}</p>
                              <div
                                className={`mt-2 w-6 h-6 rounded border flex items-center justify-center transition-all ${
                                  config.modules.includes(module.id)
                                    ? "bg-[#c9a962] border-[#c9a962]"
                                    : "border-[#404040]"
                                }`}
                              >
                                {config.modules.includes(module.id) && (
                                  <Check size={14} className="text-[#0a0a0a]" />
                                )}
                              </div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Accessories Step */}
                {currentStep === 3 && (
                  <div>
                    <h2 className="text-2xl font-light mb-2">Add Accessories</h2>
                    <p className="text-[#737373] mb-8">
                      Essential additions for the complete experience.
                    </p>
                    <div className="space-y-4">
                      {accessories.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => toggleItem("accessories", item.id)}
                          className={`w-full p-6 border rounded-lg text-left transition-all ${
                            config.accessories.includes(item.id)
                              ? "border-[#c9a962] bg-[#c9a962]/5"
                              : "border-[#262626] hover:border-[#404040]"
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <p className="text-lg text-white font-light mb-1">
                                {item.name}
                              </p>
                              <p className="text-sm text-[#737373]">
                                {item.description}
                              </p>
                            </div>
                            <div className="text-right ml-4">
                              <p className="text-[#c9a962]">+${item.price}</p>
                              <div
                                className={`mt-2 w-6 h-6 rounded border flex items-center justify-center transition-all ${
                                  config.accessories.includes(item.id)
                                    ? "bg-[#c9a962] border-[#c9a962]"
                                    : "border-[#404040]"
                                }`}
                              >
                                {config.accessories.includes(item.id) && (
                                  <Check size={14} className="text-[#0a0a0a]" />
                                )}
                              </div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tools Step */}
                {currentStep === 4 && (
                  <div>
                    <h2 className="text-2xl font-light mb-2">Add Tools</h2>
                    <p className="text-[#737373] mb-8">
                      Premium tools designed for PYRE.
                    </p>
                    <div className="space-y-4">
                      {tools.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => toggleItem("tools", item.id)}
                          className={`w-full p-6 border rounded-lg text-left transition-all ${
                            config.tools.includes(item.id)
                              ? "border-[#c9a962] bg-[#c9a962]/5"
                              : "border-[#262626] hover:border-[#404040]"
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <p className="text-lg text-white font-light mb-1">
                                {item.name}
                              </p>
                              <p className="text-sm text-[#737373]">
                                {item.description}
                              </p>
                            </div>
                            <div className="text-right ml-4">
                              <p className="text-[#c9a962]">+${item.price}</p>
                              <div
                                className={`mt-2 w-6 h-6 rounded border flex items-center justify-center transition-all ${
                                  config.tools.includes(item.id)
                                    ? "bg-[#c9a962] border-[#c9a962]"
                                    : "border-[#404040]"
                                }`}
                              >
                                {config.tools.includes(item.id) && (
                                  <Check size={14} className="text-[#0a0a0a]" />
                                )}
                              </div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Summary Step */}
                {currentStep === 5 && (
                  <div>
                    <h2 className="text-2xl font-light mb-2">Your Configuration</h2>
                    <p className="text-[#737373] mb-8">
                      Review your build before reserving.
                    </p>

                    <div className="space-y-6">
                      {/* Base unit */}
                      <div className="p-4 bg-[#141414] border border-[#262626] rounded-lg">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-sm text-[#737373]">PYRE Base Unit</p>
                            <p className="text-white">AeroCore™ Ceramic Grill</p>
                          </div>
                          <p className="text-[#c9a962] price-tag">
                            ${BASE_PRICE.toLocaleString()}
                          </p>
                        </div>
                      </div>

                      {/* Color */}
                      <div className="p-4 bg-[#141414] border border-[#262626] rounded-lg">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-6 h-6 rounded-full"
                              style={{ backgroundColor: selectedColor?.hex }}
                            />
                            <div>
                              <p className="text-sm text-[#737373]">Exterior Color</p>
                              <p className="text-white">{selectedColor?.name}</p>
                            </div>
                          </div>
                          <p className="text-[#c9a962]">
                            {selectedColor?.price === 0
                              ? "Included"
                              : `+$${selectedColor?.price}`}
                          </p>
                        </div>
                      </div>

                      {/* Base */}
                      {config.base !== "no-base" && (
                        <div className="p-4 bg-[#141414] border border-[#262626] rounded-lg">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-sm text-[#737373]">Base</p>
                              <p className="text-white">
                                {baseOptions.find((b) => b.id === config.base)?.name}
                              </p>
                            </div>
                            <p className="text-[#c9a962]">
                              +${baseOptions.find((b) => b.id === config.base)?.price}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Modules */}
                      {config.modules.length > 0 && (
                        <div className="p-4 bg-[#141414] border border-[#262626] rounded-lg">
                          <p className="text-sm text-[#737373] mb-3">Cooking Modules</p>
                          <div className="space-y-2">
                            {config.modules.map((id) => {
                              const module = cookingModules.find((m) => m.id === id);
                              return (
                                <div
                                  key={id}
                                  className="flex justify-between items-center"
                                >
                                  <p className="text-white">{module?.name}</p>
                                  <p className="text-[#c9a962]">+${module?.price}</p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Accessories */}
                      {config.accessories.length > 0 && (
                        <div className="p-4 bg-[#141414] border border-[#262626] rounded-lg">
                          <p className="text-sm text-[#737373] mb-3">Accessories</p>
                          <div className="space-y-2">
                            {config.accessories.map((id) => {
                              const item = accessories.find((a) => a.id === id);
                              return (
                                <div
                                  key={id}
                                  className="flex justify-between items-center"
                                >
                                  <p className="text-white">{item?.name}</p>
                                  <p className="text-[#c9a962]">+${item?.price}</p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Tools */}
                      {config.tools.length > 0 && (
                        <div className="p-4 bg-[#141414] border border-[#262626] rounded-lg">
                          <p className="text-sm text-[#737373] mb-3">Tools</p>
                          <div className="space-y-2">
                            {config.tools.map((id) => {
                              const item = tools.find((t) => t.id === id);
                              return (
                                <div
                                  key={id}
                                  className="flex justify-between items-center"
                                >
                                  <p className="text-white">{item?.name}</p>
                                  <p className="text-[#c9a962]">+${item?.price}</p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Total */}
                      <div className="p-6 bg-[#c9a962]/10 border border-[#c9a962]/30 rounded-lg">
                        <div className="flex justify-between items-center">
                          <p className="text-lg text-white">Total</p>
                          <p className="text-3xl font-light text-[#c9a962] price-tag">
                            ${total.toLocaleString()}
                          </p>
                        </div>
                        <p className="text-sm text-[#737373] mt-2">
                          Fully refundable $500 deposit to reserve
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="p-6 border-t border-[#262626] bg-[#0a0a0a]">
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className={`flex items-center gap-2 px-6 py-3 text-sm tracking-widest transition-all ${
                  currentStep === 0
                    ? "text-[#404040] cursor-not-allowed"
                    : "text-[#a3a3a3] hover:text-white"
                }`}
              >
                <ArrowLeft size={16} />
                BACK
              </button>

              {currentStep < steps.length - 1 ? (
                <button
                  onClick={nextStep}
                  className="btn-luxury flex items-center gap-2 px-8 py-3 bg-[#c9a962] text-[#0a0a0a] text-sm tracking-widest font-medium hover:bg-[#e8d4a8] transition-all"
                >
                  CONTINUE
                  <ArrowRight size={16} />
                </button>
              ) : (
                <button className="btn-luxury flex items-center gap-2 px-8 py-3 bg-[#c9a962] text-[#0a0a0a] text-sm tracking-widest font-medium hover:bg-[#e8d4a8] transition-all">
                  RESERVE NOW — $500
                  <ArrowRight size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
