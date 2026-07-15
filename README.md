# @sukki/lab-3d-kit

React Three Fiber로 만든 인터랙티브 3D transform readout / bounding-box 시각화 키트.
좌표·회전·화면 투영 좌표를 실시간 HUD로 보여주고, 대상 메시의 바운딩 박스를 와이어프레임으로 그려준다.

[sukki-codes/polio](https://github.com/sukki-codes/polio)의 `/lab` 페이지 3D Playground 데모에서 사용.

## Install

```bash
npm install @sukki/lab-3d-kit @react-three/fiber @react-three/drei three
```

## Development

```bash
npm install
npm run build   # tsup으로 ESM/CJS + d.ts 빌드
npm run lint
npm run tsc
```
