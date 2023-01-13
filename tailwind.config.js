/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/**/*"],
  theme: {
    extend: {
      colors: {
        primary: {
          nv: "#57068c",
          uv: "#57068c",
        },
        secondary: {
          dv: "#330662",
          mv1: "#702b9d",
          mv2: "#7b5aa6",
          lv1: "#ab82c5",
          lv2: "#eee6f3",
        },
        neutral: {
          black: "#000000",
          dg: "#404040",
          mg1: "#6d6d6d",
          mg2: "#b8b8b8",
          mg3: "#d6d6d6",
          lg: "#f2f2f2",
          white: "#ffffff",
        },
        accent: {
          teal: "#009b8a",
          magenta: "#fb0f78",
          blue: "#59B2D1",
          yellow: "#f4ec51",
        },
      },
    },
  },
  plugins: [],
};
