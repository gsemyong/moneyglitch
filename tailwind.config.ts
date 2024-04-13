import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

const primary = colors.fuchsia;
const secondary = colors.cyan;

const neutral = colors.neutral;

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        primary,
        secondary,
        neutral,
      },
    },
  },
  plugins: [],
} satisfies Config;
