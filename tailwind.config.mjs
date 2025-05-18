/** @type {import("tailwindcss").Config} */
export default {
    content: [
        "./pages/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                mono: ["Roboto Mono", "monospace"],
            },
            colors: {
                accent: "#0f6c4d",
                background: "#171717",
                foreground: "#ededed",
            },
            boxShadow: {
                out: "0px 0px 10px rgba(0,0,0,1)",
            },
        },
    },

    plugins: []
};
