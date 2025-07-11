// tailwind.config.js
plugins: [
  function({ addComponents }) {
    addComponents({
      '.nav-underline': {
        '@apply absolute bottom-0 left-1/2 h-0.5 w-0 transition-all duration-300': '',
        'transform': 'translateX(-50%)',
        'background': 'linear-gradient(to right, #588157, #3a5a40)'
      }
    })
  }
]

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}