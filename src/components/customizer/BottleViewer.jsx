"use client";

import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";

const BOTTLE_MODELS = {
  1: "/models/b1.glb",
  2: "/models/b2.glb",
  3: "/models/b3.glb",
  4: "/models/b4.glb",
  5: "/models/b5.glb",
};

function BottleModel({ selectedDesign, labelImage, logo, scale = 0.7 }) {
  // if selectedDesign is falsy or not in the map, bail out early
  if (!selectedDesign || !BOTTLE_MODELS[selectedDesign]) {
    return null;
  }

  const modelPath = BOTTLE_MODELS[selectedDesign];
  const { scene } = useGLTF(modelPath); // this uses suspense

  useEffect(() => {
    const textureToUse = labelImage || logo;

    // Always apply texture, even if empty - prevents flashing
    let texture = null;

    if (textureToUse) {
      texture = new THREE.TextureLoader().load(textureToUse);
      texture.flipY = false;
      texture.encoding = THREE.sRGBEncoding;
      // make texture repeat to cover entire bottle and center it
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(1, 1);
      texture.offset.set(0.5, 0.5);
      texture.center.set(0.5, 0.5);
    }

    if (texture) {
      scene.traverse((child) => {
        if (child.isMesh) {
          const material = new THREE.MeshPhysicalMaterial({
            map: texture,
            metalness: 0.05,
            roughness: 0.6,
            clearcoat: 0.1,
            clearcoatRoughness: 0.9,
          });
          // ensure geometry uses UVs correctly
          material.map.needsUpdate = true;
          child.material = material;
          child.material.needsUpdate = true;
        }
      });
    }
  }, [labelImage, logo, scene, selectedDesign]);

  // apply provided scale
  return <primitive object={scene} scale={scale} />;
}

export default function BottleViewer({ selectedDesign, labelImage, logo }) {
  // preload models once
  React.useEffect(() => {
    Object.values(BOTTLE_MODELS).forEach((path) => useGLTF.preload(path));
  }, []);

  if (!selectedDesign || !BOTTLE_MODELS[selectedDesign]) {
    return (
      <div className="h-[520px] w-full flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 rounded-3xl shadow-2xl border border-emerald-100 text-gray-400">
        <p>Select a design to preview</p>
      </div>
    );
  }

  // maps for design-specific tweaks
  const SCALE_MAP = {
    1: 0.7,
    2: 0.5, // design 2 looked too big
    3: 0.7,
    4: 0.7,
    5: 0.7,
  };
  const CAMERA_MAP = {
    1: { position: [0, 0, 8], fov: 35 },
    2: { position: [0, 0, 10], fov: 35 },
    3: { position: [0, 0, 8], fov: 35 },
    4: { position: [0, 0, 8], fov: 35 },
    5: { position: [0, 0, 8], fov: 35 },
  };

  const cameraSettings = CAMERA_MAP[selectedDesign] || { position: [0, 0, 8], fov: 35 };
  const modelScale = SCALE_MAP[selectedDesign] || 0.7;

  return (
    <div className="h-[520px] w-full bg-gradient-to-br from-emerald-50 via-white to-teal-50 rounded-3xl shadow-2xl border border-emerald-100 backdrop-blur-xl transition-all duration-500 hover:shadow-emerald-200/50">
      <Canvas camera={cameraSettings}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={1.8} color="#d1fae5" />
        <directionalLight position={[-5, -3, 4]} intensity={1.2} color="#ffffff" />
        <pointLight position={[0, 3, 2]} intensity={0.6} color="#6ee7b7" />
        <React.Suspense
          fallback={
            <mesh>
              <cylinderGeometry args={[1, 1, 2, 32]} />
              <meshPhysicalMaterial color="#f3f4f6" />
            </mesh>
          }
        >
          <BottleModel 
            key={selectedDesign}
            selectedDesign={selectedDesign}
            labelImage={labelImage}
            logo={logo}
            scale={modelScale}
          />
        </React.Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={6}
          maxDistance={12}
          autoRotate
          autoRotateSpeed={1.5}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}