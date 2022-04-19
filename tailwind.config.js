const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'sans': ['"Open Sans"', defaultTheme.fontFamily.sans],
    }, 
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'grey-primary':{100: '#AFA798', 200:'#F3EDE9'},
      'brown-primary':'#938071',
      'black-primary':'#1B1C22',
      'white-primary':'#FAFAFA',
      white:'#FFFFFF',
      black:'#000'
    }
  },
  plugins: [],
}
