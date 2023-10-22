/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      animation: {
        // Animation: Keyframe-name Duration Movement-func Repeat
        backgroundGradient: "bg 5s ease infinite",
      },
      keyframes: {
        bg: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      colors: {
        "forest-green": "#047357",
        "dark-blueish-gray": "#1d2025",
        "dark-steel": "#3a424c",
        "very-dark-blue": "#1f2933",
        "dark-blue": "#161d23"
      }, 
    },
  },
  plugins: [],
}
