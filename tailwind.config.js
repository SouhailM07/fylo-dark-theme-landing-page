/** @type {import(tailwindcss).Config} */ export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        "dark-blue-intro": "#1b1f2a",
        "dark-blue-main": "#1c1f25",
        "dark-blue-footer": "#1b1d24",
        "dark-blue-testimonials": "#1b242f",
        // Accent Colors
        "cyan-gradient": "#5ac4d4",
        "blue-gradient": "#4b8fd7",
        "light-red-error": "#ff3f51",
      },
    },
    screens: {
      xs: "0px",
      sm: "430px",
      md: "768px",
      lg: "1024px",
    },
  },
  plugins: [],
};
