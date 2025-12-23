export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        wave: "wave 1.2s infinite ease-in-out",
      },
      keyframes: {
        wave: {
          "0%,100%": { height: "1rem" },
          "50%": { height: "3rem" },
        },
      },
    },
  },
  plugins: [],
};
