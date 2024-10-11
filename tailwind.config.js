/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: ["selector", '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        dark: "var(--dark)",
        darkEl: "var(--darkEl)",
        light:"var(--light)",
        lightEl:"var(--lightEl)",
        darkGray: "var(--dark-gray)",
        darkBlue: "var(--dark-blue)",
        lightBlue: "var(--light-blue)",
      },
    },
  },
  plugins: [],
};
