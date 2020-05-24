/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/

let colors = {
  primary: '#1a65cb',
  secondary: '#e12d2d',
  n0: '#f3f3f3',
  n1: '#ebebeb',
  n2: '#393939',
}

module.exports = {
  theme: {
    extend: {
      colors: {
        ...colors
      },
      backgroundColor: {
        ...colors
      },
      borderColor:{
        ...colors
      },
      placeholderColor:{
        ...colors
      },
      fontFamily: {
        display: ['Roboto', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      height: {
        'card--index': '6.68rem'
      }
    }
  },
  variants: {},
  plugins: []
}
