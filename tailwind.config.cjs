/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "title-01": [
          "20px",
          {
            lineHeight: "140%",
            letterSpacing: "-0.005em",
            fontWeight: 700,
          },
        ],
        "title-02": [
          "18px",
          {
            lineHeight: "140%",
            letterSpacing: "-0.005em",
            fontWeight: 700,
          },
        ],
        "body-01": [
          "16px",
          {
            lineHeight: "150%",
            letterSpacing: "0em",
            fontWeight: 600,
          },
        ],
        "body-02": [
          "14px",
          {
            lineHeight: "150%",
            letterSpacing: "0em",
            fontWeight: 600,
          },
        ],
        "body-03": [
          "12px",
          {
            lineHeight: "150%",
            letterSpacing: "0em",
            fontWeight: 500,
          },
        ],
        "caption-01": [
          "10px",
          {
            lineHeight: "140%",
            letterSpacing: "0.2px",
            fontWeight: 500,
          },
        ],
        "caption-02": [
          "8px",
          {
            lineHeight: "140%",
            letterSpacing: "0.2px",
            fontWeight: 500,
          },
        ],
      },
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
      },
      fontWeight: {
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      colors: {
        black: "#222222",
        white: "#FDFDFD",
        background: "#F8F8F8",
        gray: {
          100: "#E2E2E2",
          300: "#CBCBCB",
          500: "#9C9C9C",
          700: "#787878",
        },
        green: {
          300: "#A7E8C2",
          500: "#32BC81",
        },
        red: {
          300: "#F6A6A6",
          500: "#F26C63",
        },
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      boxShadow: {
        md: "0 2px 2px rgba(0, 0, 0, 0.25)",
      },
      zIndex: {
        bar: 200,
        modalBackground: 300,
        modal: 400,
        toast: 500,
      },
    },
    fontFamily: {
      sans: ["Pretendard", "sans-serif"],
    },
  },
  plugins: [require("tailwindcss-animate")],
});
