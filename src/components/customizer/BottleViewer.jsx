"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

const BOTTLE_MODELS = {
  1: "/models/b1.glb",
  2: "/models/b2.glb",
  3: "/models/b3.glb",
  4: "/models/b6.glb",
  5: "/models/b5.glb",
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
    <div className="h-[520px] w-full bg-gradient-to-br from-emerald-50 via-white to-teal-50 rounded-3xl shadow-2xl border border-emerald-100 backdrop-blur-xl transition-all duration-500 hover:shadow-emerald-200/50">
      <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
        <ambientLight intensity={1.2} />
<directionalLight position={[5, 5, 5]} intensity={1.8} color="#d1fae5" />
<directionalLight position={[-5, -3, 4]} intensity={1.2} color="#ffffff" />
<pointLight position={[0, 3, 2]} intensity={0.6} color="#6ee7b7" />
        <BottleModel 
          selectedDesign={selectedDesign} 
          labelImage={labelImage} 
          logo={logo}
        />
        <OrbitControls 
  enablePan={false} 
  autoRotate 
  autoRotateSpeed={2} 
  enableDamping 
  dampingFactor={0.05}
/>
      </Canvas>
    </div>
  );
}