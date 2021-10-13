module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      letterSpacing: {
        full: ".25em",
      },
      fontFamily: {
        fira: ["Fira Sans", "sans-serif"],
        hand: ["Caveat", "sans-serif"],
      },
      translate: {
        "screen-h": "100vh",
        "screen-w": "100vw",
      },

      keyframes: {
        upDown: {
          "0%, 100%": { transform: "translate(-3rem, 1rem) scale(125%)" },
          "50%": { transform: "translate(-3rem, 0rem) scale(125%)" },
        },
        up: {
          "0%": { transform: "translate(0, 100%)" },
          "100%": { transform: "translate(0, 0rem)" },
        },
        upFar: {
          "0%": { transform: "translate(0, 150%)" },
          "100%": { transform: "translate(0, 0rem)" },
        },
        down: {
          "0%": { transform: "translate(0, -100%)" },
          "100%": { transform: "translate(0, 0rem)" },
        },
        left: {
          "0%": { transform: "translate(100%, 0)" },
          "100%": { transform: "translate(0, 0rem)" },
        },
        right: {
          "0%": { transform: "translate(-100%, 0)" },
          "100%": { transform: "translate(0, 0rem)" },
        },
        scale: {
          "0%": { transform: "scale(.7)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        scaleUp: {
          "0%": { transform: "translate(0, 50%) scale(0.5)", opacity: "0" },
          "100%": { transform: "translate(0, 0) scale(1)", opacity: "1" },
        },
        out: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-110vw, 0)" },
        },
      },
      animation: {
        upDown: "upDown ease-in-out infinite",
        itemUp: "up ease-in-out",
        itemUpFar: "upFar ease-in-out",
        itemDown: "down ease-in-out",
        itemLeft: "left ease-in-out",
        itemRight: "right ease-in-out",
        scale: "scale ease-in-out",
        scaleUp: "scaleUp ease-in",
        out: "out .3s ease-out",
      },
      margin: {
        screen10: "10vh",
      },
      height: {
        screen80: "80vh",
        screen75: "75vh",
      },
      inset: {
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "5/5": "100%",
      },
    },
  },
  variants: {
    extend: {
      letterSpacing: ["hover", "focus"],
      flexDirection: ["hover", "focus"],
    },
  },
  plugins: [],
};
