# @sukki/lab-3d-kit

React Three Fiber로 만든 인터랙티브 3D transform readout / bounding-box 시각화 키트.
좌표·회전·화면 투영 좌표를 실시간 HUD로 보여주고, 대상 메시의 바운딩 박스를 와이어프레임으로 그려준다.

[sukki-codes/polio](https://github.com/sukki-codes/polio)의 `/lab` 페이지 3D Playground 데모에서 사용.

## Install

```bash
npm install @sukki/lab-3d-kit @react-three/fiber @react-three/drei three
```

## Usage

```tsx
import { Scene3D, BoundingBox, TransformReadout } from '@sukki/lab-3d-kit';
import { useRef } from 'react';
import type { Mesh } from 'three';

function Playground() {
  const meshRef = useRef<Mesh>(null);

  return (
    <Scene3D>
      <BoundingBox target={meshRef}>
        <mesh ref={meshRef}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#22d3ee" />
        </mesh>
      </BoundingBox>
      <TransformReadout target={meshRef} />
    </Scene3D>
  );
}
```

## Development

```bash
npm install
npm run build   # tsup으로 ESM/CJS + d.ts 빌드
npm run lint
npm run tsc
```

## Status

초기 스캐폴드 단계. `Scene3D` / `BoundingBox` / `TransformReadout` 기본 동작만 구현되어 있고,
드래그 선택, AABB/OBB 비교 등 스트레치 기능은 아직 없음 (sukki-codes/polio#69 참고).
