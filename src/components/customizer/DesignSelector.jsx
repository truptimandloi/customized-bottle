"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useCustomizer } from "../../context/CustomizerContext";

const BOTTLE_DESIGNS = [
  { id: 1, name: "Round", model: "/models/round.glb" },
  { id: 2, name: "Square", model: "/models/square.glb" },
  { id: 3, name: "Cylindrical", model: "/models/cylindrical.glb" },
  { id: 4, name: "Premium", model: "/models/round.glb" },
  { id: 5, name: "Eco", model: "/models/square.glb" },
];

function BottlePreview({ design }) {
  try {
    const { scene } = useGLTF(design.model);
    return <primitive object={scene} scale={1} />;
  } catch (error) {
    return <mesh><boxGeometry args={[1, 2, 1]} /><meshStandardMaterial color="#3b82f6" /></mesh>;
  }
}

export default function DesignSelector() {
  const { selectedDesign, setSelectedDesign } = useCustomizer();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Choose Your Bottle Design</h2>
      <p className="text-gray-700">Select one of our 5 premium bottle designs</p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {BOTTLE_DESIGNS.map((design) => (
          <button
            key={design.id}
            onClick={() => setSelectedDesign(design.id)}
            className={`relative p-4 border-2 rounded-xl transition-all h-64 ${
              selectedDesign === design.id
                ? "border-blue-600 bg-blue-50 shadow-lg"
                : "border-gray-300 hover:border-gray-400 bg-white"
            }`}
          >
            <div className="h-48 mb-2">
              <Canvas camera={{ position: [0, 0, 3], fov: 40 }}>
                <ambientLight intensity={1} />
                <directionalLight position={[2, 2, 2]} />
                <BottlePreview design={design} />
                <OrbitControls
                  enablePan={false}
                  autoRotate
                  autoRotateSpeed={2}
                />
              </Canvas>
            </div>
            <p className="font-semibold text-sm text-gray-900">{design.name}</p>
            {selectedDesign === design.id && (
              <div className="absolute top-2 right-2 bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                ✓
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
