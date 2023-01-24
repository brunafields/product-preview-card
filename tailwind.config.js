module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
     screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
      colors: {
        darkCyan: "hsl(158, 36%, 37%)",
        cream: "hsl(30, 38%, 92%)",
        veryDarkBlue: "hsl(212, 21%, 14%)",
        darkGrayishBlue: "hsl(228, 12%, 48%)",
        white: "hsl(0, 0%, 100%)"   
      },
      fontFamily: {
       sans: ['Montserrat', 'sans-serif'],
       serif: ['Fraunces', 'serif'],
      },
    },
  },
  plugins: [],
};
