module.exports = {
   future: {
     removeDeprecatedGapUtilities: true,
     purgeLayersByDefault: true,
   },
   purge: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
      './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
   theme: {
     extend: {},
   },
   variants: {},
   plugins: [],
 };
