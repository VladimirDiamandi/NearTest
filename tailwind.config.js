module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor:{
        "error": "#E08080"
      },
    screens: {
      'extra-large': {'min': '1201'},
      // => @media (max-width: 1535px) { ... }

      'large': {'max': '1200px'},
      // => @media (max-width: 1279px) { ... }

      'small': {'max': '1024px'},
      // => @media (max-width: 1023px) { ... }

      'tablet': {'max': '768px'},
      // => @media (max-width: 767px) { ... }

      'mobile': {'max': '480px'},
      // => @media (max-width: 639px) { ... }
    }
    },
    fontFamily: {
      body: ["Manrope", "sans-serif"],
    },

  },
  plugins: [],
}