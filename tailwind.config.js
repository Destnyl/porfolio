/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#f0f4ff",
          100: "#e5edff",
          200: "#d0ddff",
          300: "#b4c6ff",
          400: "#96a9ff",
          500: "#7c8cff",
          600: "#667eea",
          700: "#5a67d8",
          800: "#4c51bf",
          900: "#434190",
        },
        secondary: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
        },
        dark: {
          50: "#f8f9fa",
          100: "#e9ecef",
          200: "#dee2e6",
          300: "#ced4da",
          400: "#6c757d",
          500: "#495057",
          600: "#343a40",
          700: "#212529",
          800: "#1a1a1a",
          900: "#0c0c0c",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "primary-gradient": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "secondary-gradient":
          "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        "accent-gradient": "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        "dark-gradient": "linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        fadeIn: "fadeIn 0.5s ease-in-out",
        slideUp: "slideUp 0.5s ease-out",
        gradient: "gradient 15s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(102, 126, 234, 0.3)",
        "glow-lg": "0 0 30px rgba(102, 126, 234, 0.5)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
