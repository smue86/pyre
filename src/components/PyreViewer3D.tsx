"use client";

import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, Html } from "@react-three/drei";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import * as THREE from "three";

// Color mapping for the configurator
const colorMap: Record<string, string> = {
  obsidian: "#1a1a1a",
  gunmetal: "#4a4a4a",
  ember: "#8b2500",
  arctic: "#f0f0f0",
};

// Accent color (gold)
const ACCENT_COLOR = "#c9a962";

interface PyreModelProps {
  color: string;
  showBase: boolean;
  modules: string[];
}

function PyreModel({ color, showBase, modules }: PyreModelProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const accentRef = useRef<THREE.Mesh>(null);

  // Load STL geometry
  const geometry = useLoader(STLLoader, "/models/pyre-main.stl");

  // Center and scale the geometry
  useMemo(() => {
    geometry.center();
    geometry.computeVertexNormals();
  }, [geometry]);

  // Subtle auto-rotation when not interacting
  useFrame((state) => {
    if (meshRef.current) {
      // Very subtle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
    }
  });

  const bodyColor = colorMap[color] || colorMap.obsidian;
  const isLight = color === "arctic";

  return (
    <group>
      {/* Main body */}
      <mesh
        ref={meshRef}
        geometry={geometry}
        scale={0.015}
        rotation={[-Math.PI / 2, 0, 0]}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial
          color={bodyColor}
          metalness={isLight ? 0.1 : 0.4}
          roughness={isLight ? 0.3 : 0.5}
          clearcoat={0.3}
          clearcoatRoughness={0.2}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* Gold accent ring */}
      <mesh
        ref={accentRef}
        position={[0, 0.15, 0]}
        scale={0.015}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <torusGeometry args={[65, 3, 16, 100]} />
        <meshPhysicalMaterial
          color={ACCENT_COLOR}
          metalness={0.9}
          roughness={0.1}
          envMapIntensity={2}
        />
      </mesh>

      {/* Gold knob on top */}
      <mesh position={[0, 1.2, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.18, 0.12, 32]} />
        <meshPhysicalMaterial
          color={ACCENT_COLOR}
          metalness={0.95}
          roughness={0.05}
          envMapIntensity={2}
        />
      </mesh>
      <mesh position={[0, 1.28, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.12, 0.08, 32]} />
        <meshPhysicalMaterial
          color={ACCENT_COLOR}
          metalness={0.95}
          roughness={0.05}
          envMapIntensity={2}
        />
      </mesh>

      {/* Display screen */}
      <mesh position={[0, 0.5, 0.85]} rotation={[0.2, 0, 0]}>
        <planeGeometry args={[0.4, 0.25]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
      <mesh position={[0, 0.5, 0.851]} rotation={[0.2, 0, 0]}>
        <planeGeometry args={[0.35, 0.2]} />
        <meshBasicMaterial color="#111111" />
      </mesh>

      {/* Base/Stand */}
      {showBase && (
        <group position={[0, -1.2, 0]}>
          {/* Legs */}
          {[
            [-0.6, 0, -0.4],
            [0.6, 0, -0.4],
            [-0.6, 0, 0.4],
            [0.6, 0, 0.4],
          ].map((pos, i) => (
            <mesh key={i} position={pos as [number, number, number]} castShadow>
              <boxGeometry args={[0.08, 1.2, 0.08]} />
              <meshPhysicalMaterial
                color={ACCENT_COLOR}
                metalness={0.9}
                roughness={0.1}
                envMapIntensity={2}
              />
            </mesh>
          ))}
          {/* Shelf */}
          <mesh position={[0, -0.3, 0]}>
            <boxGeometry args={[1.3, 0.03, 0.9]} />
            <meshPhysicalMaterial
              color="#2a2a2a"
              metalness={0.3}
              roughness={0.7}
            />
          </mesh>
        </group>
      )}

      {/* Module indicators */}
      {modules.includes("pellet-feeder") && (
        <mesh position={[-1.2, 0, 0]} castShadow>
          <boxGeometry args={[0.4, 0.8, 0.5]} />
          <meshPhysicalMaterial
            color={bodyColor}
            metalness={isLight ? 0.1 : 0.4}
            roughness={isLight ? 0.3 : 0.5}
          />
        </mesh>
      )}

      {modules.includes("rotisserie") && (
        <mesh position={[0, 1.5, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.02, 0.02, 2, 16]} />
          <meshPhysicalMaterial
            color="#888888"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
      )}
    </group>
  );
}

function LoadingSpinner() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-2 border-[#c9a962] border-t-transparent rounded-full animate-spin" />
        <p className="text-sm tracking-[0.2em] text-[#737373]">LOADING 3D MODEL</p>
      </div>
    </Html>
  );
}

interface PyreViewer3DProps {
  color: string;
  base: string;
  modules: string[];
}

export default function PyreViewer3D({ color, base, modules }: PyreViewer3DProps) {
  const showBase = base !== "no-base";

  return (
    <div className="w-full h-full relative">
      <Canvas
        shadows
        camera={{ position: [4, 2, 4], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={2048}
        />
        <spotLight
          position={[-10, 5, -10]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
          color="#c9a962"
        />
        <pointLight position={[0, 5, 0]} intensity={0.3} color="#ffffff" />

        {/* Environment for reflections */}
        <Environment preset="studio" />

        {/* The 3D Model */}
        <Suspense fallback={<LoadingSpinner />}>
          <PyreModel color={color} showBase={showBase} modules={modules} />
        </Suspense>

        {/* Ground shadow */}
        <ContactShadows
          position={[0, showBase ? -1.8 : -0.8, 0]}
          opacity={0.5}
          scale={10}
          blur={2}
          far={4}
          color="#000000"
        />

        {/* Orbit controls for rotation */}
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={3}
          maxDistance={10}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>

      {/* Interaction hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
        <p className="text-xs tracking-[0.2em] text-[#525252]">
          DRAG TO ROTATE • SCROLL TO ZOOM
        </p>
      </div>
    </div>
  );
}
