import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  server: { port: 5174 },
});

/*
{
      config: {
        theme: {
          extend: {
            colors: {
              primary: {
                DEFAULT: "#5f6FFF", // main brand color
                light: "#8794FF",
                dark: "#2C3AFF",
              },
              secondary: {
                DEFAULT: "#34D399",
                light: "#6EE7B7",
                dark: "#059669",
              },
              accent: {
                DEFAULT: "#F59E0B",
                light: "#FCD34D",
                dark: "#B45309",
              },
              danger: {
                DEFAULT: "#EF4444",
                light: "#F87171",
                dark: "#B91C1C",
              },
              neutral: {
                DEFAULT: "#5E5E5E",
                light: "#9CA3AF",
                dark: "#1F2937",
              },
            },
            gridTemplateColumns: {
              auto: "repeat(auto-fill, minmax(250px, 1fr))",
            },
          },
        },
      },
    }
*/