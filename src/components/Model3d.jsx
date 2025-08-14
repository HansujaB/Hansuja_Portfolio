import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function ModelContent() {
  const { scene } = useGLTF("../assets/Model.glb");
  const modelRef = useRef();
  
  useFrame((_, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.2; // slower rotation
    }
  });
  
  return <primitive ref={modelRef} object={scene} scale={1.5} />;
}

export default function Model() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <OrbitControls enableDamping dampingFactor={0.05} />
      <ModelContent />
    </Canvas>
  );
}