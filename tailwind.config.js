/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins font family
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "10px", // Width of the scrollbar
          scrollbarColor: "#6E4D9D transparent", // Color of the thumb and track
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "10px", // Width of the scrollbar
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent", // Track background
            borderBottom: "1px solid #6E4D9D", // Single line at the bottom
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#6E4D9D", // Custom purple color for the thumb
            borderRadius: "50px", // Capsule shape
            border: "none", // No border
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
