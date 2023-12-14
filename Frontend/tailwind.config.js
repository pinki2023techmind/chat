/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    corePlugins: {
      preflight: false,
    },
    extend: {},
    
    screens: {
      sm: '640px',  
    
      md: '768px',   
    
      lg: '992px',
    
      xl: '1200px',
 
    }
  },
  plugins: [],
}
