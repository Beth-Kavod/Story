/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.svelte","./src/**/*.svelte","./src/lib/components/*.svelte"],
  theme: {
    extend: {
      colors: {
        primary: '#ff5722',
        secondary: '#2196f3',
        accent: '#0058ff',
        background: '#1D232A',
        error: "#cb0035",
        info: "#00879a",
      },
    },
  },
  plugins: [],
}

