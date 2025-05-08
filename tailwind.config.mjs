/** @type {import("tailwindcss").Config} */
export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                mono: ["\"Roboto Mono\"", "monospace"]
            }
        },
        colors: {
            accent: "#115740"
        }
    },
    plugins: []
};
