import type { Config } from 'tailwindcss';

const noScrollbarPlugin = ({ addUtilities }: { addUtilities: Function }) => {
  addUtilities(
    {
      ".no-scrollbar": {
        "scrollbar-width": "none", /* Firefox */
        "-ms-overflow-style": "none", /* IE 10+ */
      },
      ".no-scrollbar::-webkit-scrollbar": {
        display: "none", /* Chrome, Safari, Edge */
      },
    },
    ["responsive", "hover"] // Optional variants
  );
};

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [noScrollbarPlugin],
} satisfies Config;
