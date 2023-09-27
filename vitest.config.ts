import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig(() => ({
  name: 'lettersanitizer',
  test: {
    environment: 'jsdom',
    globals: true,
  },
}));
