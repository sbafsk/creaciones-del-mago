export const designTokens = {
  colors: {
    primary: "#7C3AED",
    onPrimary: "#FFFFFF",
    accent: "#06B6D4",
    backgroundHero: "#0B0B0F",
    background: "#0F172A",
    surface: "#111827",
    surfaceHover: "#1F2937",
    border: "#334155",
    muted: "#94A3B8",
    success: "#16A34A",
    warning: "#F59E0B",
    error: "#EF4444",
  },
  radii: {
    sm: 6,
    md: 10,
    lg: 16,
    full: 9999,
  },
  spacing: {
    base: 4,
  },
  elevation: {
    card: "0 1px 2px rgba(0,0,0,.2)",
  },
  effects: {
    glowPrimary: "blur(32px) 20%",
  },
  typography: {
    font: "Inter, system-ui, sans-serif",
    scale: "Tailwind defaults",
  },
} as const

export type DesignTokens = typeof designTokens
