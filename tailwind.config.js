/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    extend: {
      fontFamily: {
        primary: ["var(--font-jetbrainsMono)", "monospace"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
      },
      colors: {
        primary: {
          DEFAULT: "#1c1c22",
          light: "#ffffff",
        },
        secondary: {
          DEFAULT: "#27272c",
          light: "#f1f5f9",
        },
        accent: {
          DEFAULT: "#00FF99",
          light: "#03E98D",
        },
        text: {
          primary: {
            DEFAULT: "#ffffff",
            light: "#111111",
          },
          secondary: {
            DEFAULT: "#ffffff80",
            light: "#64748b",
          },
        },
      },
    },
  },
  plugins: [],
};