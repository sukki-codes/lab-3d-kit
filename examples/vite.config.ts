import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// 이 example은 빌드 산출물(dist)이 아니라 ../src 를 직접 불러와
// 소스 수정이 바로 반영되도록 구성했다.
export default defineConfig({
  root: __dirname,
  plugins: [react()],
});
