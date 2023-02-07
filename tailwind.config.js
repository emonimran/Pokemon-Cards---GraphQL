/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#257BC4",
        water: "#4592C4",
        bug: "#729F3F",
        white: "#FFFFFF",
        grass: "#9BCC50",
        poison: "#B97FC9",
        black: "#000000",
        yellow: "#FFCB05",
        normal: "#FC7C23",
      },
    },
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
    },
    backgroundImage: {
      flying:
        "linear-gradient(360deg, rgba(255,255,255,1) 0%, rgba(200,198,198,1) 12%, rgba(0,99,255,1) 100%)",
    },
    screens: {
      xs: "480px",
      sm: "770px",
      md: "1060px",
    },
    content: {
      brush: "url('../assets/Media Asset/Brush.png')",
    },
  },
  plugins: [],
};
