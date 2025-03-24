import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      '@pages': '/src/pages/index',
      '@@ui-components': '/src/components/UI/index',
      '@components': '/src/components',
      '@utils': '/src/utils',
      '@store': '/src/store',
      '@types': '/src/types',
      '@constants': '/src/constant.ts',
    },
  },
});
