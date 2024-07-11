/** @type {import('tailwindcss').Config} */
module.exports = {
    i18n: {
        locales: ["en-US"],
        defaultLocale: "en-US",
    },
    content: ["./**/*.{html,js}"],
    plugins: [
        // include Flowbite as a plugin in your Tailwind CSS project
        require("@tailwindcss/typography"),
        require("daisyui"),
    ],
    daisyui: {
        themes: ["dark"],
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
        prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
        themeRoot: ":root",
    },
    theme: {
        extend: {
            scale: {
                175: "1.75",
                200: "2.00",
            },
        },
    },
};
