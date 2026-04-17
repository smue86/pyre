export interface ColorOption {
  id: string;
  name: string;
  hex: string;
}

export interface ModuleOption {
  id: string;
  name: string;
  description: string;
  category: "cooking" | "accessory" | "tool";
}

export interface BaseOption {
  id: string;
  name: string;
  description: string;
}

export const colors: ColorOption[] = [
  { id: "obsidian", name: "Obsidian Black", hex: "#1a1a1a" },
  { id: "gunmetal", name: "Gunmetal Grey", hex: "#4a4a4a" },
  { id: "ember", name: "Ember Red", hex: "#8b2500" },
  { id: "arctic", name: "Arctic White", hex: "#f5f5f5" },
];

export const baseOptions: BaseOption[] = [
  {
    id: "no-base",
    name: "No Base",
    description: "Mount on your own surface or existing setup",
  },
  {
    id: "standard-base",
    name: "Standard Base",
    description: "Powder-coated steel with adjustable feet",
  },
  {
    id: "premium-base",
    name: "Premium Cart Base",
    description: "Stainless steel cart with wheels, side shelves, and storage",
  },
];

export const cookingModules: ModuleOption[] = [
  {
    id: "pellet-feeder",
    name: "PyroFeed™ Pellet System",
    description: "Automated pellet feeding with 20lb hopper capacity",
    category: "cooking",
  },
  {
    id: "flattop",
    name: "Flat Top Griddle Module",
    description: "Cast iron griddle for smash burgers and breakfast",
    category: "cooking",
  },
  {
    id: "pizza-oven",
    name: "Pizza Oven Module",
    description: "900°F capable dome for Neapolitan-style pizza",
    category: "cooking",
  },
  {
    id: "rotisserie",
    name: "Rotisserie System",
    description: "Heavy-duty rotisserie with motor and spit",
    category: "cooking",
  },
  {
    id: "offset-box",
    name: "Offset Firebox",
    description: "Separate firebox for authentic offset smoking",
    category: "cooking",
  },
  {
    id: "cold-smoke",
    name: "Cold Smoke Generator",
    description: "Low-temp smoke for cheese and charcuterie",
    category: "cooking",
  },
];

export const accessories: ModuleOption[] = [
  {
    id: "cover",
    name: "Premium Cover",
    description: "All-weather protection with PYRE logo",
    category: "accessory",
  },
  {
    id: "grate-set",
    name: "Stainless Steel Grate Set",
    description: "Full set of premium cooking grates",
    category: "accessory",
  },
  {
    id: "deflector",
    name: "Heat Deflector Plates",
    description: "Ceramic deflectors for indirect cooking",
    category: "accessory",
  },
  {
    id: "ash-tool",
    name: "Ash Management System",
    description: "Easy-clean ash drawer and tools",
    category: "accessory",
  },
];

export const tools: ModuleOption[] = [
  {
    id: "tool-set",
    name: "PYRE Tool Set",
    description: "Tongs, spatula, fork, and brush in stainless steel",
    category: "tool",
  },
  {
    id: "thermometer",
    name: "Wireless Meat Probes (4-pack)",
    description: "Bluetooth probes for precision temperature monitoring",
    category: "tool",
  },
  {
    id: "gloves",
    name: "Heat-Resistant Gloves",
    description: "Premium leather and aramid construction",
    category: "tool",
  },
  {
    id: "apron",
    name: "PYRE Leather Apron",
    description: "Full-grain leather with brass hardware",
    category: "tool",
  },
];

export interface Configuration {
  color: string;
  base: string;
  modules: string[];
  accessories: string[];
  tools: string[];
}
