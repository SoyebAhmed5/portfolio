"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Stars } from "@react-three/drei";

import Laptop from "./Laptop";

export default function HeroCanvas() {
  return (
    <Canvas
      className="!absolute inset-0"
       gl={{
    antialias: false,
    alpha: true,
    powerPreference: "high-performance",
  }}
      camera={{
  position: [0, 0, 7.5],
  fov: 38,
}}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={1.4} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
      />

      <pointLight
        position={[2, 2, 2]}
        color="#8B5CF6"
        intensity={20}
      />

      <pointLight
        position={[-2, 1, 2]}
        color="#06B6D4"
        intensity={10}
      />

      <Environment preset="city" />

      <Stars
        radius={70}
        depth={35}
        count={1500}
        factor={3}
        fade
        speed={0.25}
      />

      <Laptop />
    </Canvas>
  );
}