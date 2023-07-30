/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    extend: {
      backgroundColor: {
        'main-100': '#e7ecec',
        'main-200': '#dde4e4',
        'main-300': '#ced9d9',
        'main-400': '#c0d8d8',
        'main-500': '#0e8080',
      },

      textColor: {
        'main-100': '#e7ecec',  
        'main-200': '#dde4e4',
        'main-300': '#ced9d9',
        'main-400': '#c0d8d8d',
        'main-500': '#0e8080',
      },

      keyframes: {
        'slide-right': {
          '0%': {
            '-webkit-transform': 'translateX(-500px);',
            transform: 'translateX(-500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'slide-left': {
          '0%': {
            '-webkit-transform': 'translateX(500px);',
            transform: 'translateX(500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        },
        'slide-left-2': {
          '0%': {
            '-webkit-transform': 'translateX(500px);',
            transform: 'translateX(500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0);',
            transform: 'translateX(0);'
          }
        }
      },
        animation: {
          'slide-right' : 'slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',  
          'slide-left' : 'slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
          'slide-left-2' : 'slide-right2 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;'            
        }
    },
    screens: {
      '1600' : '1600px'
    }
  },
  plugins: []
};

