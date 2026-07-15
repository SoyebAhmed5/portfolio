"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Laptop from "./Laptop";
import { Environment } from "@react-three/drei";

export default function HeroCanvas() {
  return (
   <Canvas
  camera={{
    position: [0, 0, 8],
    fov: 40,
  }}
>
     <ambientLight intensity={1.8} />

<directionalLight
  position={[5, 5, 5]}
  intensity={2}
/>


<Environment preset="city" />

<pointLight
  position={[0, 2, 2]}
  color="#8B5CF6"
  intensity={35}
/>

<pointLight
  position={[-3, 0, 2]}
  color="#06B6D4"
  intensity={20}
/>

      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      <Laptop />

      {/* <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1}
      /> */}
    </Canvas>
  );
}