/** Copied from the inline tailwind.config the CDN pages used, so output matches. */
module.exports = {
    content: ["./articles/*.html", "./authors/*.html", "./js/**/*.js"],
    darkMode: 'class',
    theme: {
extend: {
    colors: {
        primary: '#14190F',
        secondary: '#3B4630',
        accent: '#9A4455',
        'accent-light': '#EBD9D9',
        surface: '#E4EAD3',
        cream: '#EEF2E2',
        sage: '#B8C49F',
        moss: '#3B4630',
        botanical: '#14190F',
        white: '#F4F7EA',
        gray: {
            50: '#EEF2E2', 100: '#DCE4C8', 200: '#C6D1AC', 300: '#B5C19A',
            400: '#A9B596', 500: '#5A664A', 600: '#3B4630', 700: '#2C3622',
            800: '#232B1B', 900: '#1A2214', 950: '#10150D',
        },
        emerald: { 400: '#E8A3AE', 500: '#D9808F', 600: '#9A4455' },
        amber: {
            50: '#F3E4E4', 100: '#F3E4E4', 300: '#B7707F', 500: '#C98995',
            900: '#4A1B27', 950: '#2A1218',
        },
    },
    fontFamily: {
        display: ['Epilogue', 'system-ui', 'sans-serif'],
        body: ['Literata', 'Georgia', 'serif'],
        sans: ['Epilogue', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Fragment Mono', 'ui-monospace', 'monospace'],
    },
},
    },
}
