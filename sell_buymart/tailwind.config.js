/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");

export default {
  content: ["./src/**/*.{html,js}", flowbite.content(),
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin(),
  ],
}

