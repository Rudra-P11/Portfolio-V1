/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Richer dark background (Deep Slate/Violet tint)
        primary: "#030014", 
        secondary: "#0F0728", // Slightly lighter for cards
        
        // Neon Accents
        accent: "#8b5cf6", // Electric Violet
        cyan: "#06b6d4",   // Neon Cyan
        fuchsia: "#d946ef", // Hot Pink
        
        light: "#f3f4f6",
      },
      animation: {
        // Slow smooth movement for background blobs
        blob: "blob 7s infinite",
        // Fast spin for the borders
        "border-spin": "border-spin 4s linear infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        "border-spin": {
          "100%": { transform: "rotate(-360deg)" },
        },
      },
    },
  },
  plugins: [],
}