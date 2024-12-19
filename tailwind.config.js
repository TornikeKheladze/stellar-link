/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fd5521",
        textPrimary: "#ff4040",
        customBlack: "#333333",
        textHover: "#757575",
      },
    },
  },
  plugins: [],
};
