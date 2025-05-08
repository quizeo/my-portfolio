module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        background: "var(--color-background)",
      },
      fontFamily: {
        krona: ['"Krona One"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
