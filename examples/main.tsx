import { useFrame } from '@react-three/fiber';
import { StrictMode, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import type { Mesh } from 'three';

import { BoundingBox, Scene3D, TransformReadout } from '../src/index';

/** 매 프레임 천천히 회전하는 데모용 큐브. */
function SpinningCube({ meshRef }: { meshRef: React.RefObject<Mesh | null> }) {
  useFrame((_, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    mesh.rotation.x += delta * 0.3;
    mesh.rotation.y += delta * 0.5;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#22d3ee" />
    </mesh>
  );
}

function Playground() {
  const meshRef = useRef<Mesh>(null);
  const [boxVisible, setBoxVisible] = useState(true);

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <Scene3D>
        <BoundingBox target={meshRef} visible={boxVisible}>
          <SpinningCube meshRef={meshRef} />
        </BoundingBox>
        <TransformReadout target={meshRef} />
      </Scene3D>

      <button
        type="button"
        onClick={() => setBoxVisible((v) => !v)}
        style={{
          position: 'absolute',
          top: 16,
          left: 16,
          padding: '0.5rem 0.9rem',
          borderRadius: 8,
          border: '1px solid #22d3ee',
          background: boxVisible ? '#22d3ee' : 'transparent',
          color: boxVisible ? '#06081a' : '#22d3ee',
          fontSize: 13,
          cursor: 'pointer',
        }}
      >
        bounding box: {boxVisible ? 'on' : 'off'}
      </button>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Playground />
  </StrictMode>,
);
