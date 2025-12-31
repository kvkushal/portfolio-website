/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // WARM THEME - Cream & Off-white
                // Primary warm background
                cream: {
                    DEFAULT: '#F5F1EB',
                    light: '#FAF8F5',
                    dark: '#EBE6DE',
                },
                // White/off-white for cards
                offwhite: '#FEFDFB',
                // Warm charcoal for text sections (replaces navy)
                charcoal: {
                    DEFAULT: '#2C2C2C',
                    light: '#3D3D3D',
                    border: '#4A4A4A',
                },
                // Legacy/compatibility colors
                background: '#F5F1EB',
                'background-alt': '#EBE6DE',
                surface: '#FEFDFB',
                'surface-hover': '#F5F1EB',
                border: '#E5E0D8',
                'border-dark': '#D4CFC5',
                'text-primary': '#2C2C2C',
                'text-secondary': '#5C5C5C',
                'text-muted': '#7C7C7C',
                // Text on dark backgrounds
                'text-light': '#FAF8F5',
                'text-light-secondary': '#D4CFC5',
                'text-light-muted': '#A59E94',
                // Accent - warm indigo
                accent: '#5B4FCF',
                'accent-hover': '#4A3FB8',
                'accent-subtle': 'rgba(91, 79, 207, 0.1)',
                'accent-light': '#7B6FE0',
                // For dark sections (hero, footer)
                dark: '#2C2C2C',
                'dark-surface': '#3D3D3D',
                'dark-border': '#4A4A4A',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
