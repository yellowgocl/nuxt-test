
let footer = {
  'footer': '36px',
  'footer-md': '36px',
  'footer-lg': '36px',
  'footer-xl': '44px'
}
let colors = {
  primary: '#050d0f',
  app: {
    default: '#ddca88',
    "1": '#88754b'
  },
  'divider-primary': '#654423'
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
      inset: {
       'card': '0.5rem'
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
