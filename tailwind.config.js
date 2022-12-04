/** @type {import('tailwindcss').Config} */

module.exports = {
  
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        "bodyCover": "url('https://images.unsplash.com/photo-1635173250597-00863d9ce454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60')"
      }
    },
    screens: {
      sm: { min: "200px", max: "600px" },
      md: { min: "600px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px" },
    },
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
    }
      

  },
  plugins: [],
}
