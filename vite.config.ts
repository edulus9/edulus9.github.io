import * as path from 'path';
import { fileURLToPath } from 'url';
import rollupReplace from '@rollup/plugin-replace';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  server: {
    port: 3001,
  },
  base: '/',
  plugins: [
    tsconfigPaths(),
    rollupReplace({
      preventAssignment: true,
      values: {
        'process.env.NODE_ENV': JSON.stringify('development'),
      },
    }),
    react(),
  ],
  resolve: process.env.USE_SOURCE
    ? {
        alias: {
          'react-router-dom': path.resolve(__dirname, '../../packages/react-router-dom/index.tsx'),
        },
      }
    : {},
  assetsInclude: ['**/*.woff2'],
  appType: 'spa',
});
