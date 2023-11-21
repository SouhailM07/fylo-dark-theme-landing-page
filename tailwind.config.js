/** @type {import(tailwindcss).Config} */ export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        "dark-blue-intro": "#1b1f2a", // Dark Blue (intro and email sign up background): hsl(217, 28%, 15%)
        "dark-blue-main": "#1c1f25", // Dark Blue (main background): hsl(218, 28%, 13%)
        "dark-blue-footer": "#1b1d24", // Dark Blue (footer background): hsl(216, 53%, 9%)
        "dark-blue-testimonials": "#1b242f", // Dark Blue (testimonials background): hsl(219, 30%, 18%)
        // Accent Colors
        "cyan-gradient": "#5ac4d4", // Cyan (inside call-to-action gradient): hsl(176, 68%, 64%)
        "blue-gradient": "#4b8fd7", // Blue (inside call-to-action gradient): hsl(198, 60%, 50%)
        "light-red-error": "#ff3f51", // Light Red (error): hsl(0, 100%, 63%)
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
