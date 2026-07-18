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
  const [boxVisible, setBoxVisible] = useState(true);

  return (
    <Scene3D>
      <BoundingBox target={meshRef} visible={boxVisible}>
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

### `BoundingBox` props

| prop | type | default | 설명 |
| --- | --- | --- | --- |
| `target` | `RefObject<Mesh \| null>` | — | 박스를 씌울 대상 메시 ref |
| `visible` | `boolean` | `true` | 와이어프레임 토글. `false`면 매 프레임 재계산도 건너뜀 |
| `color` | `number` | `0x22d3ee` | 와이어프레임 색상 |

## Development

```bash
npm install
npm run build         # tsup으로 ESM/CJS + d.ts 빌드
npm run dev:example   # examples/ vite 플레이그라운드 (브라우저에서 실제 조작/토글 확인)
npm run lint
npm run tsc
```

`examples/`는 빌드 산출물이 아니라 `src`를 직접 불러오므로 소스 수정이 바로 반영된다.

## Status

MVP 기본 동작 구현 완료 — `Scene3D`(캔버스+OrbitControls) / `BoundingBox`(와이어프레임 + `visible` 토글) /
`TransformReadout`(world·rotation·screen 좌표 HUD). 클릭 다중선택, AABB/OBB 비교 등 스트레치 기능은
아직 없음 (sukki-codes/polio#69 참고).
