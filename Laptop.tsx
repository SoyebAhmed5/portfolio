
import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh
  }
  materials: {
    MacBookPro: THREE.MeshStandardMaterial
  }
  // animations: GLTFAction[]
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/laptop-transformed.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.MacBookPro} />
    </group>
  )
}

useGLTF.preload('/laptop-transformed.glb')
