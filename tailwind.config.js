/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        button: "0px 2px 10px 0px rgba(0, 0, 0, 0.1)",
        buttonHover: "0px 4px 15px 0px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        primary: "#fd5521",
        textPrimary: "#ff4040",
        customBlack: "#333333",
        textHover: "#757575",
        lightGray: "#F4F6F9",
      },
    },
  },
  plugins: [],
};
