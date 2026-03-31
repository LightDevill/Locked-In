module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: { 50: '#FAF9F6', 100: '#F5F3EE', 200: '#EBE8DF' },
        ink: { 900: '#1C1816', 800: '#2D2926', 700: '#3E3A35', 600: '#6B6B6B' },
        clay: { 50: '#FFF5F0', 100: '#FFEAE0', 200: '#F5D5C5', 300: '#E8C4B0', 400: '#D4A494', 500: '#C17767', 600: '#A65D4F', 700: '#8B4A3F' },
        bamboo: { 50: '#F6F8F3', 100: '#E8EDE3', 200: '#D4DCC9', 300: '#B8C5A8', 400: '#9CAD8A', 500: '#7D8F69', 600: '#6B7A58', 700: '#566347' },
        persimmon: { 50: '#FFF3F0', 100: '#FFE5DE', 200: '#FFCDC0', 300: '#FFB5A3', 400: '#FF9780', 500: '#E77A5E', 600: '#D15E42', 700: '#B44A31' },
        mist: { 50: '#F9FAFB', 100: '#F3F4F6', 200: '#E5E7EB', 300: '#D1D5DB' }
      }
    }
  },
  plugins: []
};
