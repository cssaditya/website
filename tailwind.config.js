/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'void-black': '#000000',
        'charcoal': '#333333',
        'blood-red': '#DC143C',
        'ruby': '#E0115F',
      },
      fontFamily: {
        heading: ['"Monument Extended"', 'Arial Black', 'sans-serif'],
        body: ['"Sharp Grotesk"', 'Arial', 'Helvetica', 'sans-serif'],
      },
      animation: {
        'float': 'floating 3s ease-in-out infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      boxShadow: {
        'red-glow': '0 0 15px rgba(220, 20, 60, 0.7)',
      },
      height: {
        '128': '32rem',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
};