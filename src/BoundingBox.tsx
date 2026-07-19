import { useFrame } from '@react-three/fiber';
import type { ReactNode, RefObject } from 'react';
import { useRef, useState } from 'react';
import { Box3, type Box3Helper, type Mesh } from 'three';

type BoundingBoxProps = {
  target: RefObject<Mesh | null>;
  children: ReactNode;
  /** 와이어프레임 표시 여부. false면 매 프레임 재계산도 건너뛴다. 기본값 true. */
  visible?: boolean;
  /** 와이어프레임 색상 (three color). 기본값 0x22d3ee. */
  color?: number;
};

export function BoundingBox({ target, children, visible = true, color = 0x22d3ee }: BoundingBoxProps) {
  const helperRef = useRef<Box3Helper>(null);
  const [box] = useState(() => new Box3());

  useFrame(() => {
    if (!visible || !target.current || !helperRef.current) return;
    box.setFromObject(target.current);
    helperRef.current.box.copy(box);
  });

  return (
    <>
      {children}
      {visible && <box3Helper ref={helperRef} args={[box, color]} />}
    </>
  );
}
