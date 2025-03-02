import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/300Riel300DermV5/",
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
