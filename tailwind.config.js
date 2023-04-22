module.exports = {
  //purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  purge: ["./src/**/*.html", "./src/**/*.css", "./src/**/*.ts*"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    letterSpacing: {
      tightest: "-0.075em",
      tighter: "-0.05em",
      tight: "-0.015em",
      normal: "0",
      wide: "0.05em",
      wider: "0.1em",
      widest: "0.25em",
    },
    fontFamily: {
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        "Libre Baskerville",
        "Lora",
        "ui-serif",
        "Georgia",
        "Cambria",
        '"Times New Roman"',
        "Times",
        "serif",
      ],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
    extend: {
      boxShadow: {
        "border-top-i": "inset 0 1px 0 0 currentColor",
        "border-bottom-i": "inset 0 -1px 0 0 currentColor",
        "border-bottom": "0 1px 0 0 currentColor",
        "border-right": "1px 0 0 0 currentColor",
        "border-left": "-1px 0 0 0 currentColor",
        "border-i": "inset 0 0 0 1px currentColor",
        "border-i-2": "inset 0 0 0 2px currentColor",
        "border-2": "0 0 0 2px currentColor",
        border: "0 0 0 1px currentColor",
        "border-y-i":
          "inset 0 -1px 0 0 currentColor, inset 0 1px 0 0 currentColor",
        modal:
          "0 10px 15px -3px rgb(0 0 0 / 0.2), 0 4px 6px -4px rgb(0 0 0 / 0.1), 0 1px 0 0 rgba(0, 0, 0, 0.1)",
        widget: "0px 1px 3px #E6E6F4, 0px 10px 14px #F1F1F4",
      },
      colors: {
        "hot-pink": "#FF015C",
      },
      fontSize: {
        xxs: ["10px", { lineHeight: "14px" }],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
