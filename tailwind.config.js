/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            blur: {
                header: "2px",
            },
            backgroundColor: {
                dark: "rgba(19, 19, 19, 1)",
                blackrussian: "rgba(15, 18, 42, 1)",
                midnight: "rgba(24, 27, 65, 1)",
                searchField: "rgba(90, 100, 110, 1)",
                unitel: "rgba(100, 190, 0, 1)",
                bottomGrad:
                    "linear-gradient(180deg, rgba(24, 27, 65, 0) 0%, #181B41 100%)",
                whiteish: "rgba(249, 249, 251, 1)",
                darkGray: "rgba(111, 115, 129, 1)",
            },
            borderRadius: {
                "1.5xl": "14px",
                home: "16px 16px 0px 0px",
                footer: "20px 20px 0px 0px",
                modal: "36px 46px 0px 0px",
            },
            colors: {
                gray: "rgba(129, 142, 154, 1)",
                unitel: "rgba(100, 190, 0, 1)",
                dark: "rgba(90, 91, 91, 1)",
                midnight: "rgba(24, 27, 65, 1)",
                detail: "rgba(129, 142, 154, 1)",
                blackrussian: "rgba(15, 18, 42, 1)",

                shuttle: "rgba(171, 175, 189, 1)",
                lightGray: "rgba(209, 216, 221, 1)",
                blackish: "rgba(16, 19, 24, 1)",
                darkGray: "rgba(111, 115, 129, 1)",
            },
            fontSize: {
                extrasmall: ["10px", "12px"],
                "2xs": ["10px", "14px"],
                regular: ["14px", "24px"],
                smaller: ["12px", "24px"],
                sm: ["14px", "16.59px"],
                normal: ["14px", "20px"],
                button: ["16px", "19px"],
                large: ["24px", "32px"],
                veryLarge: ["48px", "56px"],
            },
            padding: {
                7.5: "30px",
            },

            screens: {
                tall: { raw: "(min-height: 60.625rem)" },
                small: { raw: "(max-height: 500px)" },
            },
            transitionProperty: {
                height: "height",
            },
        },
    },
}
