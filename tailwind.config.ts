/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: ["Noev", "sans-serif"],
    },

    extend: {
      colors: {
        primary: "#DC4011",
      },
      backgroundImage: {
        gradient: 'linear-gradient(to right, #E9571E, #F6A53F)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
