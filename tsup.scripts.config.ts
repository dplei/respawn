import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['scripts/*.ts'],
  outDir: 'scripts-dist',
  format: ['cjs', 'esm'],
  dts: false,
  clean: true,
  sourcemap: true,
  target: 'node16'
});
