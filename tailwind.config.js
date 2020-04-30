
let footer = {
  'footer': '36px',
  'footer-md': '36px',
  'footer-lg': '36px',
  'footer-xl': '44px'
}
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#050d0f',
        app: {
          default: '#ddca88',
          "1": '#88754b'
        },
        'divider-primary': '#654423'
      },
      spacing: {
        '96': '6rem',
        ...footer
      },
      height: {
        'navbar': '64px',
        'navbar-md': '96px',
        'navbar-lg': '144px',
        'navbar-xl': '188px',
        ...footer
      }
    },
  },
  fontFamily: {
    display: ['Roboto', 'sans-serif'],
    body: ['Roboto', 'sans-serif'],
  },
  variants: {},
  plugins: [],
}
