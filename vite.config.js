import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import { defineConfig } from 'vite'

export default defineConfig(({ command, mode }) => {
  return {
     plugins: [react(), ssr()],
    define: {
      __ENV__: mode === 'development' ? true: false,
    }
  }
})
