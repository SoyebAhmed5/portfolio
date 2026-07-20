"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Stars } from "@react-three/drei";

import Laptop from "./Laptop";

export default function HeroCanvas() {
  return (
    <Canvas
      className="!absolute inset-0"
      gl={{
  antialias: true,
  alpha: true,
}}
      camera={{
  position: [0, 0, 7.5],
  fov: 38,
}}
      dpr={[1, 2]}
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
        radius={80}
        depth={40}
        count={2500}
        factor={4}
        fade
        speed={0.4}
      />

      <Laptop />
    </Canvas>
  );
}