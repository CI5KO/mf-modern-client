import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [{ pattern: /./ }],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
