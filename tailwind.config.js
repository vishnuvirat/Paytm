module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gap: {
        72: "18rem",
        84: "21rem",
        98: "26rem",
        100: "28rem",
        102: "30rem",
        1920: "120rem",
      },
      colors: {
        "pattens-blue": {
          50: "#fdffff",
          100: "#fcfeff",
          200: "#f7fdff",
          300: "#f2fbff",
          400: "#e8f9ff",
          500: "#def6ff",
          600: "#c8dde6",
          700: "#a7b9bf",
          800: "#859499",
          900: "#6d797d",
        },

        "fountain-blue": {
          50: "#f7fbfc",
          100: "#eff8f9",
          200: "#d8edf1",
          300: "#c1e2e8",
          400: "#92ccd6",
          500: "#63b6c5",
          600: "#59a4b1",
          700: "#4a8994",
          800: "#3b6d76",
          900: "#315961",
        },

        heliotrope: {
          50: "#fbf8fe",
          100: "#f7f0fd",
          200: "#ebdafb",
          300: "#dfc3f8",
          400: "#c896f2",
          500: "#b069ed",
          600: "#9e5fd5",
          700: "#844fb2",
          800: "#6a3f8e",
          900: "#563374",
        },

        spray: {
          50: "#f9fefe",
          100: "#f4fdfe",
          200: "#e3fafc",
          300: "#d1f6fb",
          400: "#aff0f7",
          500: "#8de9f4",
          600: "#7fd2dc",
          700: "#6aafb7",
          800: "#558c92",
          900: "#457278",
        },

        "picton-blue": {
          50: "#f4fcff",
          100: "#e8f9ff",
          200: "#c6f0ff",
          300: "#a4e7fe",
          400: "#5fd4fe",
          500: "#1bc2fd",
          600: "#18afe4",
          700: "#1492be",
          800: "#107498",
          900: "#0d5f7c",
        },

        "deep-sapphire": {
          50: "#f2f4f8",
          100: "#e6eaf1",
          200: "#c0cadc",
          300: "#9babc6",
          400: "#4f6b9c",
          500: "#042c71",
          600: "#042866",
          700: "#032155",
          800: "#021a44",
          900: "#021637",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
