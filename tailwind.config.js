/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        app: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '##431407',
        },
        background: "#ffffff",
        foreground: "#1f2937",
        card: "#ffffff",
        "card-foreground": "#1f2937",
        popover: "#ffffff",
        "popover-foreground": "#1f2937",
        primary: "#1E293B",
        "primary-foreground": "#F9FAFB",
        secondary: "#E5E7EB",
        "secondary-foreground": "#1E293B",
        muted: "#E5E7EB",
        "muted-foreground": "#6B7280",
        accent: "#E5E7EB",
        "accent-foreground": "#1E293B",
        destructive: "#E11D48",
        "destructive-foreground": "#F9FAFB",
        border: "#D1D5DB",
        input: "#D1D5DB",
        ring: "#1E293B",
        chart1: "#FF8C00",
        chart2: "#10B981",
        chart3: "#3B82F6",
        chart4: "#FBBF24",
        chart5: "#F87171",
        dark: {
          background: "#1E293B",
          foreground: "#F9FAFB",
          card: "#1E293B",
          "card-foreground": "#F9FAFB",
          popover: "#1E293B",
          "popover-foreground": "#F9FAFB",
          primary: "#F9FAFB",
          "primary-foreground": "#1E293B",
          secondary: "#374151",
          "secondary-foreground": "#F9FAFB",
          muted: "#374151",
          "muted-foreground": "#9CA3AF",
          accent: "#374151",
          "accent-foreground": "#F9FAFB",
          destructive: "#7F1D1D",
          "destructive-foreground": "#F9FAFB",
          border: "#374151",
          input: "#374151",
          ring: "#9CA3AF",
          chart1: "#1E40AF",
          chart2: "#047857",
          chart3: "#F59E0B",
          chart4: "#9333EA",
          chart5: "#BE185D",
        },
      },
    },
  },
  plugins: [],
};
