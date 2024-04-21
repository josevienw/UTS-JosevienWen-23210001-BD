/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{html,js}", "./**/*.{html,js}"],
    theme: {
        screens: {
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            colors: {
                mygray: "#444655",
                myblack: "#343A40",
                mypurple: "#7952B3",
                mynavy: "#3B3486",
                myyellow: "#FFC107",
                myyellow2: "#F2B600",
                mywhite: "#E1E8EB",
                myblue: "#F6F9FF",
            },
            fontFamily: {
                Montserrat: ["Montserrat"],
                Poppins: ["Poppins"],
            },
            animation: {
                typewriter: "typewriter 2s steps(11) forwards",
                caret: "typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s",
            },
            keyframes: {
                typewriter: {
                    to: {
                        left: "100%",
                    },
                },
                blink: {
                    "0%": {
                        opacity: "0",
                    },
                    "0.1%": {
                        opacity: "1",
                    },
                    "50%": {
                        opacity: "1",
                    },
                    "50.1%": {
                        opacity: "0",
                    },
                    "100%": {
                        opacity: "0",
                    },
                },
            },
        },
    },
    plugins: [],
};
