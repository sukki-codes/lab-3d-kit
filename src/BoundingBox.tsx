import { useFrame } from '@react-three/fiber';
import type { ReactNode, RefObject } from 'react';
import { useRef, useState } from 'react';
import { Box3, type Box3Helper, type Mesh } from 'three';

type BoundingBoxProps = {
  target: RefObject<Mesh | null>;
  children: ReactNode;
};

export function BoundingBox({ target, children }: BoundingBoxProps) {
  const helperRef = useRef<Box3Helper>(null);
  const [box] = useState(() => new Box3());

  useFrame(() => {
    if (!target.current || !helperRef.current) return;
    box.setFromObject(target.current);
    helperRef.current.box.copy(box);
  });

  return (
    <>
      {children}
      <box3Helper ref={helperRef} args={[box, 0x22d3ee]} />
    </>
  );
}
