const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'Nunito' : ['Nunito', 'sans-serif']
      },

      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
      },
       

    },


    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },



  },
  plugins: [],
});