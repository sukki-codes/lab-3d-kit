import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import type { ReactNode } from 'react';

type Scene3DProps = {
  children: ReactNode;
};

export function Scene3D({ children }: Scene3DProps) {
  return (
    <Canvas camera={{ position: [3, 3, 3], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <OrbitControls makeDefault />
      {children}
    </Canvas>
  );
}
