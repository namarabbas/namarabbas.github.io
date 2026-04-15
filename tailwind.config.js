/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FAFBFD",
        secondary: "#64748B",
        tertiary: "#FFFFFF",
        "black-100": "#F1F5F9",
        "black-200": "#E8EDF2",
        "white-100": "#1E293B",
      },
      boxShadow: {
        card: "0px 10px 40px -10px rgba(0, 0, 0, 0.06)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "none",
      },
    },
  },
  plugins: [],
};
