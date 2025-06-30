import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import type { ViteDevServer } from "vite";
import type { IncomingMessage, ServerResponse } from "http";

// CSP Plugin to allow FundraisingBox
const cspPlugin = () => {
  return {
    name: 'csp-plugin',
    configureServer(server: ViteDevServer) {
      server.middlewares.use((req: IncomingMessage, res: ServerResponse, next: () => void) => {
        res.setHeader(
          'Content-Security-Policy',
          "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://secure.fundraisingbox.com; object-src 'none';"
        );
        next();
      });
    }
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    cspPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
