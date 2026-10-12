import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';

function ArchitecturalModel() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.45;
    }
  });

  return (
    <group ref={meshRef} position={[0, -0.4, 0]}>
      {/* Central Academic Monolith / Graduation Cap Stylized Geometry */}
      <mesh position={[0, 0.9, 0]} castShadow>
        <boxGeometry args={[1.8, 0.15, 1.8]} />
        <meshStandardMaterial color="#1e3a8a" roughness={0.3} metalness={0.2} />
      </mesh>

      {/* Cap Skull cap */}
      <mesh position={[0, 0.6, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 0.5, 16]} />
        <meshStandardMaterial color="#172554" roughness={0.4} />
      </mesh>

      {/* Tassel */}
      <mesh position={[0.7, 0.75, 0.7]}>
        <sphereGeometry args={[0.08, 12, 12]} />
        <meshStandardMaterial color="#f59e0b" emissive="#d97706" emissiveIntensity={0.6} />
      </mesh>

      {/* Stepped Pedestal (Campus Senate Architecture Motifs) */}
      <mesh position={[0, 0.1, 0]}>
        <cylinderGeometry args={[1.3, 1.5, 0.5, 8]} />
        <meshStandardMaterial color="#334155" roughness={0.6} />
      </mesh>

      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[1.7, 1.9, 0.4, 8]} />
        <meshStandardMaterial color="#1e293b" roughness={0.7} />
      </mesh>

      {/* Surrounding Geometric Pillars representing Education, Accommodation, Economy, Community */}
      {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((angle, i) => {
        const x = Math.cos(angle) * 2.2;
        const z = Math.sin(angle) * 2.2;
        const colors = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];
        return (
          <mesh key={i} position={[x, 0.2, z]}>
            <boxGeometry args={[0.35, 1.4, 0.35]} />
            <meshStandardMaterial color={colors[i]} roughness={0.3} />
          </mesh>
        );
      })}
    </group>
  );
}

export function ThreeCanvasPreview() {
  return (
    <div className="w-full h-72 sm:h-96 rounded-3xl overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-2xl relative">
      <Canvas
        camera={{ position: [0, 2.8, 5.2], fov: 45 }}
        gl={{ antialias: true, powerPreference: 'low-power' }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[6, 10, 4]} intensity={1.4} />
        <pointLight position={[-4, 2, -2]} color="#60a5fa" intensity={0.8} />
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.4}>
          <ArchitecturalModel />
        </Float>
      </Canvas>

      {/* Telemetry / Status Pill */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none text-[11px] font-mono">
        <span className="bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-800 text-slate-400">
          React Three Fiber / Three.js r170 Engine Ready
        </span>
        <span className="bg-emerald-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-emerald-500/40 text-emerald-400 font-semibold">
          Phase 1A: 3D Viewport Rigged
        </span>
      </div>
    </div>
  );
}
