const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
  ,theme: {
    extend: {
        animation: {
            "tracking-in-expand": "tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both"
        },
        keyframes: {
            "tracking-in-expand": {
                "0%": {
                    "letter-spacing": "-.5em",
                    opacity: "0"
                },
                "40%": {
                    opacity: ".6"
                },
                to: {
                    opacity: "1"
                }
            }
        }
    }
}
}
