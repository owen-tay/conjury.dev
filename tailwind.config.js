module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'pink-conjury': '#F198FF',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'slight-bounce': 'slight-bounce 2s infinite',
        'float-reverse': 'float-reverse 20s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slight-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'float-reverse': {
          '0%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(10px) translateX(-10px)' },
          '50%': { transform: 'translateY(0) translateX(-20px)' },
          '75%': { transform: 'translateY(-10px) translateX(-10px)' },
          '100%': { transform: 'translateY(0) translateX(0)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 0.5 },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
      },
      borderRadius: {
        'large': '3rem',
      },
      // Glass effect specific shadows
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'glass-sm': '0 2px 8px 0 rgba(31, 38, 135, 0.1)',
        'glass-lg': '0 12px 42px 0 rgba(31, 38, 135, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      blur: {
        '3xl': '64px',
      },
    },
  },
  plugins: [],
}