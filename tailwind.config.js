/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./index.html"],
  theme: {
    fontFamily: {
      stylized: ["Amatic SC", "serif"],
      logo: ["Great Vibes", "cursive"],
      serif: ["Nanum Myeongjo", "serif"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
