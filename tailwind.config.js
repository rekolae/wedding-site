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
        //bounceX: "moveX 2s linear infinite alternate",
        //bounceY: "moveY 3s linear infinite alternate"
        pingPong: "moveX 5s linear infinite, moveY 7.8s linear infinite, spin 1s linear infinite",
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
        
        moveY: {
          "0%, 100%": { top: "0" },
          "50%": { top: "92%" },
        },
        moveX: {
          "0%, 100%": { left: "0" },
          "50%": { left: "92%" },
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
