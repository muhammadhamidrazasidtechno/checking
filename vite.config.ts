import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    chunkSizeWarningLimit: 3000,
  },
  server: {
    host: "0.0.0.0", // Make server accessible on all network interfaces
    port: 5176, // Use the port you want to access
    strictPort: true, // Fail if port is already in use
  },
});
