/** Copied from the inline tailwind.config the CDN pages used, so output matches. */
module.exports = {
    content: ["./index.html", "./js/**/*.js"],
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
        sans: ['Epilogue', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Literata', 'Georgia', 'serif'],
        mono: ['Fragment Mono', 'ui-monospace', 'monospace'],
    },
    fontSize: {
        'display': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'headline': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'title': ['1.5rem', { lineHeight: '1.4' }],
    },
    spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
    },
    animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
    },
    keyframes: {
        fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
        },
        slideUp: {
            '0%': { transform: 'translateY(30px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
            '0%': { transform: 'scale(0.95)', opacity: '0' },
            '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
        },
    },
},
    },
}
