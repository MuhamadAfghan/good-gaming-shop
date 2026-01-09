import type { Config } from "tailwindcss";

export default <Config>{
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
    "./app/error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "ggs-primary": "#E21F32",
        "ggs-dark": "#32080C",
        "ggs-black": "#1A1A1A",
        "ggs-light": "#F5F5F5",
        "ggs-off-white": "#F9F9F9",
        "ggs-grey": "#F1F1F1", // From diagonal gradient
        "ggs-light-grey": "#F7F7F7", // From diagonal gradient
        "ggs-dark-red": "#3E0A0F", // Group Buy BG
      },
    },
  },
};
