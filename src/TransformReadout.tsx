import { Html } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import type { RefObject } from 'react';
import { useRef, useState } from 'react';
import { Vector3, type Mesh } from 'three';

type TransformReadoutProps = {
  target: RefObject<Mesh | null>;
};

type Readout = {
  position: [number, number, number];
  rotation: [number, number, number];
  screen: [number, number];
};

export function TransformReadout({ target }: TransformReadoutProps) {
  const { camera, size } = useThree();
  const [readout, setReadout] = useState<Readout | null>(null);
  const projected = useRef(new Vector3());

  useFrame(() => {
    const mesh = target.current;
    if (!mesh) return;

    projected.current.copy(mesh.position).project(camera);

    setReadout({
      position: mesh.position.toArray() as [number, number, number],
      rotation: [mesh.rotation.x, mesh.rotation.y, mesh.rotation.z],
      screen: [
        (projected.current.x * 0.5 + 0.5) * size.width,
        (projected.current.y * -0.5 + 0.5) * size.height,
      ],
    });
  });

  if (!readout) return null;

  return (
    <Html fullscreen style={{ pointerEvents: 'none' }}>
      <pre
        style={{
          position: 'absolute',
          top: 16,
          right: 16,
          margin: 0,
          padding: '0.75rem 1rem',
          borderRadius: 8,
          background: 'rgba(6, 8, 22, 0.75)',
          color: '#22d3ee',
          fontSize: 12,
          lineHeight: 1.5,
          fontFamily: 'monospace',
        }}
      >
        {`position  ${readout.position.map((v) => v.toFixed(2)).join(', ')}
rotation  ${readout.rotation.map((v) => v.toFixed(2)).join(', ')}
screen    ${readout.screen.map((v) => v.toFixed(0)).join(', ')}`}
      </pre>
    </Html>
  );
}
