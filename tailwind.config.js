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
      colors: {
        blue2: {
          light: "#C1FAFF",
          DEFAULT: "#44BDDD",
          dark: "#0087A6",
        },
        green2: {
          light: "#D1FBE1",
          DEFAULT: "#4EBF85",
          dark: "#008953",
        },
        brown2: {
          light: "#FAF1CA",
          DEFAULT: "#BAAD4E",
          dark: "#817844",
        },
        orange2: {
          light: "#FFE6D9",
          DEFAULT: "#FA8E73",
          dark: "#A56758",
        },
        pink2: {
          light: "#FFE3ED",
          DEFAULT: "#FF85A2",
          dark: "#C34F6F",
        },
        purple2: {
          light: "#FAEAFF",
          DEFAULT: "#BE9BF3",
          dark: "#8767BA",
        },
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
        upDownRes: {
          "0%, 100%": { transform: "translate(0, 0.5rem)" },
          "50%": { transform: "translate(0, -0.5rem)" },
        },
        bgUp: {
          "0%, 100%": { transform: "translate(0, 0rem)" },
          "50%": { transform: "translate(0, 1rem)" },
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
        scaleUp: {
          "0%": { transform: "scale(.7,.7)", opacity: "0" },
          "100%": { transform: "scale(1,1)", opacity: "1" },
        },
        out: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-110vw, 0)" },
        },
      },
      animation: {
        upDown: "upDown ease-in-out infinite",
        upDownRes: "upDownRes 4s ease-in-out infinite",
        itemUp: "up ease-in-out",
        itemUpFar: "upFar ease-in-out",
        itemDown: "down ease-in-out",
        itemLeft: "left ease-in-out",
        itemRight: "right ease-in-out",
        scale: "scaleUp ease-in-out",
        out: "out .3s ease-out",
      },
      margin: {
        screen10: "10vh",
      },
    },
  },
  variants: {
    extend: {
      letterSpacing: ["hover", "focus"],
    },
  },
  plugins: [],
};
