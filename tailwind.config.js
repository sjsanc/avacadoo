// tailwind.config.js
module.exports = {
    purge: [],
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        container: {
            center: true,
            padding: "2rem",
        },
        fluidContainer: {
            default: {
                maxWidth: "1200px", // defaults to null (no max width)
                padding: "15px", // defaults to '15px'
            },
        },
    },
    variants: {
        extend: {},
        fluidContainer: ["responsive"], // defaults to ['responsive']
    },
    plugins: [require("tailwindcss-fluid-container")],
};
