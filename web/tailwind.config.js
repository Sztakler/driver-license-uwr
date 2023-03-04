module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      borderRadius: {
        half: '50%',
      },
      width: {
        double: '200%',
        half: '50%',
        108: '27rem',
        116: '29rem',
        124: '31rem',
        132: '33rem',
        140: '35rem',
        148: '37rem',
      },
      height: {
        double: '200%',
        half: '50%',
        108: '27rem',
        116: '29rem',
        124: '31rem',
        132: '33rem',
        140: '35rem',
        148: '37rem',
      },
      keyframes: {
        rotation: {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)'},
        },
      },
      animation: {
        'rotate-slow': 'rotation 5s linear infinite',
      },
      backgroundImage: {
        'gradient-0': 'linear-gradient(0deg, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
