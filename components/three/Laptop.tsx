"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

export default function Laptop() {
const { scene } = useGLTF("/models/laptop.glb");

const model = useMemo(() => scene.clone(), [scene]);

  const group = useRef<THREE.Group>(null);
const { pointer } = useThree();

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(model);

// console.log(box.getSize(new THREE.Vector3()));
  }, [scene]);
useFrame((state) => {
    if (!group.current) return;

    // Floating
   group.current.position.y =
  -1.1 + Math.sin(state.clock.elapsedTime * 1.3) * 0.12;

    // Mouse Follow
    group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        Math.PI - 0.35 + pointer.x * 0.22,
        0.06
    );

    group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
       0.15 - pointer.y * 0.12,
        0.06
    );

    // Small idle tilt
    group.current.rotation.z =
       Math.sin(state.clock.elapsedTime * 0.8) * 0.015;
});
  return (

   <group
  ref={group}
  scale={9}
  position={[0.4, -1.2, -0.8]}
  rotation={[0.15, Math.PI, 0]}
>
    <primitive object={model} />
</group>
    
  );
}

useGLTF.preload("/models/laptop.glb");