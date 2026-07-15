"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Laptop() {
 const { scene } = useGLTF("/models/laptop.glb");
const model = scene.clone();

  const group = useRef<THREE.Group>(null);
const { pointer } = useThree();

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(model);

console.log(box.getSize(new THREE.Vector3()));
  }, [scene]);
useFrame((state) => {
    if (!group.current) return;
console.log(pointer.x, pointer.y);
    // Floating
    group.current.position.y =
    -2 + Math.sin(state.clock.elapsedTime * 1.5) * 0.2;

    // Mouse Follow
    group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        Math.PI + pointer.x * 0.5,
        0.06
    );

    group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        0.2 - pointer.y * 0.25,
        0.06
    );

    // Small idle tilt
    group.current.rotation.z =
        Math.sin(state.clock.elapsedTime) * 0.03;
});
  return (

    <group
    ref={group}
    scale={15}
    position={[0,-2,0]}
    rotation={[0.2,Math.PI,0]}
>
    <primitive object={model} />
</group>
    
  );
}

useGLTF.preload("/models/laptop.glb");