import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Tobacco shop brand colors
        tobacco: {
          50: "#fdf8f6",
          100: "#f2e8e0",
          200: "#eaddd7",
          300: "#e0cec2",
          400: "#d2b5a0",
          500: "#c49c7d",
          600: "#b5855d",
          700: "#a0704a",
          800: "#85603f",
          900: "#6d4f36",
          950: "#3a2920",
        },
        gold: {
          50: "#fffdf2",
          100: "#fffacd",
          200: "#fff5a3",
          300: "#ffed6b",
          400: "#ffdf32",
          500: "#ffc107",
          600: "#d4970a",
          700: "#b8710c",
          800: "#955911",
          900: "#7a4912",
          950: "#452606",
        },
        mahogany: {
          50: "#fdf4f3",
          100: "#fce7e4",
          200: "#f9d4cd",
          300: "#f4b6aa",
          400: "#ec8b79",
          500: "#e0684f",
          600: "#cc4a35",
          700: "#ab3d2a",
          800: "#8d3426",
          900: "#742f25",
          950: "#3f1510",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-in": {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-in": "slide-in 0.5s ease-out",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #3a2920 0%, #6d4f36 25%, #a0704a 50%, #c49c7d 75%, #e0cec2 100%)",
        "card-gradient": "linear-gradient(145deg, #f2e8e0 0%, #eaddd7 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
