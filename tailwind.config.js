/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
      extend: {},
      daisyui: {
        styles: true,
        themes: ["light"],
      },
    },
    plugins: [require("daisyui")],
  };
  