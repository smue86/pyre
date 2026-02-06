export interface ColorOption {
  id: string;
  name: string;
  hex: string;
  price: number;
}

export interface ModuleOption {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "cooking" | "accessory" | "tool";
}

export interface BaseOption {
  id: string;
  name: string;
  description: string;
  price: number;
}

export const colors: ColorOption[] = [
  { id: "obsidian", name: "Obsidian Black", hex: "#1a1a1a", price: 0 },
  { id: "gunmetal", name: "Gunmetal Grey", hex: "#4a4a4a", price: 0 },
  { id: "ember", name: "Ember Red", hex: "#8b2500", price: 500 },
  { id: "arctic", name: "Arctic White", hex: "#f5f5f5", price: 500 },
];

export const baseOptions: BaseOption[] = [
  {
    id: "no-base",
    name: "No Base",
    description: "Mount on your own surface or existing setup",
    price: 0,
  },
  {
    id: "standard-base",
    name: "Standard Base",
    description: "Powder-coated steel with adjustable feet",
    price: 799,
  },
  {
    id: "premium-base",
    name: "Premium Cart Base",
    description: "Stainless steel cart with wheels, side shelves, and storage",
    price: 1499,
  },
];

export const cookingModules: ModuleOption[] = [
  {
    id: "pellet-feeder",
    name: "PyroFeed™ Pellet System",
    description: "Automated pellet feeding with 20lb hopper capacity",
    price: 999,
    category: "cooking",
  },
  {
    id: "flattop",
    name: "Flat Top Griddle Module",
    description: "Cast iron griddle for smash burgers and breakfast",
    price: 349,
    category: "cooking",
  },
  {
    id: "pizza-oven",
    name: "Pizza Oven Module",
    description: "900°F capable dome for Neapolitan-style pizza",
    price: 599,
    category: "cooking",
  },
  {
    id: "rotisserie",
    name: "Rotisserie System",
    description: "Heavy-duty rotisserie with motor and spit",
    price: 449,
    category: "cooking",
  },
  {
    id: "offset-box",
    name: "Offset Firebox",
    description: "Separate firebox for authentic offset smoking",
    price: 699,
    category: "cooking",
  },
  {
    id: "cold-smoke",
    name: "Cold Smoke Generator",
    description: "Low-temp smoke for cheese and charcuterie",
    price: 299,
    category: "cooking",
  },
];

export const accessories: ModuleOption[] = [
  {
    id: "cover",
    name: "Premium Cover",
    description: "All-weather protection with PYRE logo",
    price: 149,
    category: "accessory",
  },
  {
    id: "grate-set",
    name: "Stainless Steel Grate Set",
    description: "Full set of premium cooking grates",
    price: 249,
    category: "accessory",
  },
  {
    id: "deflector",
    name: "Heat Deflector Plates",
    description: "Ceramic deflectors for indirect cooking",
    price: 179,
    category: "accessory",
  },
  {
    id: "ash-tool",
    name: "Ash Management System",
    description: "Easy-clean ash drawer and tools",
    price: 129,
    category: "accessory",
  },
];

export const tools: ModuleOption[] = [
  {
    id: "tool-set",
    name: "PYRE Tool Set",
    description: "Tongs, spatula, fork, and brush in stainless steel",
    price: 199,
    category: "tool",
  },
  {
    id: "thermometer",
    name: "Wireless Meat Probes (4-pack)",
    description: "Bluetooth probes synced with PyreMind™ AI",
    price: 149,
    category: "tool",
  },
  {
    id: "gloves",
    name: "Heat-Resistant Gloves",
    description: "Premium leather and aramid construction",
    price: 79,
    category: "tool",
  },
  {
    id: "apron",
    name: "PYRE Leather Apron",
    description: "Full-grain leather with brass hardware",
    price: 189,
    category: "tool",
  },
];

export const BASE_PRICE = 4999;

export interface Configuration {
  color: string;
  base: string;
  modules: string[];
  accessories: string[];
  tools: string[];
}

export function calculateTotal(config: Configuration): number {
  let total = BASE_PRICE;

  // Color
  const selectedColor = colors.find((c) => c.id === config.color);
  if (selectedColor) total += selectedColor.price;

  // Base
  const selectedBase = baseOptions.find((b) => b.id === config.base);
  if (selectedBase) total += selectedBase.price;

  // Modules
  config.modules.forEach((id) => {
    const module = cookingModules.find((m) => m.id === id);
    if (module) total += module.price;
  });

  // Accessories
  config.accessories.forEach((id) => {
    const accessory = accessories.find((a) => a.id === id);
    if (accessory) total += accessory.price;
  });

  // Tools
  config.tools.forEach((id) => {
    const tool = tools.find((t) => t.id === id);
    if (tool) total += tool.price;
  });

  return total;
}
