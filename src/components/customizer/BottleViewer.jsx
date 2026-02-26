"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

const BOTTLE_MODELS = {
  1: "/models/round.glb",
  2: "/models/square.glb",
  3: "/models/cylindrical.glb",
  4: "/models/round.glb",
  5: "/models/square.glb",
};

function BottleModel({ selectedDesign, labelImage, logo }) {
  const modelPath = BOTTLE_MODELS[selectedDesign] || "/models/round.glb";
  
  try {
    const { scene } = useGLTF(modelPath);

    useEffect(() => {
      const textureToUse = labelImage || logo;
      if (!textureToUse) return;

      const texture = new THREE.TextureLoader().load(textureToUse);
      texture.flipY = false;
      texture.encoding = THREE.sRGBEncoding;

      scene.traverse((child) => {
        if (child.isMesh) {
          // Use label/logo as the main texture
          const material = new THREE.MeshPhysicalMaterial({
            map: texture,
            metalness: 0.05,
            roughness: 0.6,
            clearcoat: 0.1,
            clearcoatRoughness: 0.9,
          });
          child.material = material;
          child.material.needsUpdate = true;
        }
      });
    }, [labelImage, logo, scene]);

    return <primitive object={scene} scale={1.3} />;
  } catch (error) {
    return (
      <mesh>
        <cylinderGeometry args={[1, 1, 2, 32]} />
        <meshPhysicalMaterial color="#ffffff" />
      </mesh>
    );
  }
}

export default function BottleViewer({ selectedDesign, labelImage, logo }) {
  return (
    <div className="h-[500px] w-full bg-white rounded-3xl shadow-xl border border-gray-200">
      <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
        <ambientLight intensity={1.4} />
        <directionalLight position={[4, 4, 4]} intensity={1.6} />
        <directionalLight position={[-4, -2, 3]} intensity={1} />
        <pointLight position={[0, 2, 0]} intensity={0.5} />
        <BottleModel 
          selectedDesign={selectedDesign} 
          labelImage={labelImage} 
          logo={logo}
        />
        <OrbitControls enablePan={false} autoRotate autoRotateSpeed={3} />
      </Canvas>
    </div>
  );
}