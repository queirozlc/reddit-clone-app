/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#f7d8cc',
          200: '#f0b099',
          300: '#e88966',
          400: '#e16133',
          500: '#d93a00',
          600: '#ae2e00',
          700: '#822300',
          800: '#571700',
          900: '#2b0c00'
        },
        link: {
          100: '#cce4f6',
          200: '#99c9ed',
          300: '#66afe5',
          400: '#3394dc',
          500: '#0079d3',
          600: '#0061a9',
          700: '#00497f',
          800: '#003054',
          900: '#00182a'
        },
        'light-gray': {
          100: '#f8f9fa',
          200: '#f0f3f5',
          300: '#e9ecf0',
          400: '#e1e6eb',
          500: '#dae0e6',
          600: '#aeb3b8',
          700: '#83868a',
          800: '#575a5c',
          900: '#2c2d2e'
        },
        'dark-gray': {
          100: '#d1d1d1',
          200: '#a3a3a4',
          300: '#767676',
          400: '#484849',
          500: '#1a1a1b',
          600: '#151516',
          700: '#101010',
          800: '#0a0a0b',
          900: '#050505'
        },
        'soft-gray': {
          100: '#d8d9d9',
          200: '#b1b3b4',
          300: '#8a8c8e',
          400: '#636669',
          500: '#3c4043',
          600: '#303336',
          700: '#242628',
          800: '#181a1b',
          900: '#0c0d0d'
        },
        'lighest-blue': {
          100: '#f6f9fe',
          200: '#edf4fe',
          300: '#e4eefd',
          400: '#dbe9fd',
          500: '#d2e3fc',
          600: '#a8b6ca',
          700: '#7e8897',
          800: '#545b65',
          900: '#2a2d32'
        }
      },
      fontFamily: {
        body: ['Noto Sans', 'sans-serif'],
        title: ['IBM Plex Sans', 'sans-serif']
      },
      screens: {
        xs: '368px',
        'xl-mini': '1200px'
      }
    }
  },
  darkMode: 'class',
  plugins: []
}
