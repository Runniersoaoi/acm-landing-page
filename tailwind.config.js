/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      height: {
        "screen-64": "calc(100vh - 64px)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "blue-gradient-one": "#146ef5",
        "blue-gradient-two": "#1c4fb4",
        "black-principal": "#111928",
        "black-bg-principal": "#080808",
        "gray-principal": "#171717",
        "gray-secondary": "#eae9e9",
        "gray-text": "#d8d8d8",
        "gray-border": "#222",
      },
      boxShadow: {
        "custom-complex":
          "0 4px 4px #08080814, 0 1px 2px #08080833, inset 0 6px 12px #ffffff1f, inset 0 1px 1px #fff3",
      },
    },
  },
  plugins: [],
};
