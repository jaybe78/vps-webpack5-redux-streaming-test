import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import EnvironmentPlugin from 'vite-plugin-environment';
import { defineConfig } from 'vite';

export default defineConfig(({ command, mode }) => {
  return {
     plugins: [react(), ssr(), EnvironmentPlugin('all')],
    define: {
      __ENV__: mode === 'development' ? true: false,
    },
      test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './testing/setupJest.js',
    },
  }
})
