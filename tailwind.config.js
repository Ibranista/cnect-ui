/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts,scss}"],
  theme: {
    extend: {
      colors: {
        primary_brand: "#033C6D",
        light_brand: "#f5f5ee",
        secondary_brand: "#148AD6",
        bg_gray: "#F7F7F7",
        light_gray: "#BFBFBF",
        lightest_brand: "#345B7E",
        inactive: "#A4A4A4",
      },
    },
  },
  plugins: [],
};
