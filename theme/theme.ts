const colors = {
  white: "#ffffff",
  brand: {
    100: "#cec7e7",
    200: "#eae5ff",
    300: "#8d7dc8",
    400: "#7969d7",
    500: "#463ba1",
    600: "#3a3597",
    700: "#282a87",
    800: "#221c48",
    900: "#24185d",
  },
  secondary: "#ddf9ff",
  secondaryVariant: "#17c6ea",
};

const fonts = {
  sans: "Inter, system-ui, sans-serif",
  serif: "Georgia, serif",
  mono: "Space Mono, monospace",
  heading: "Space Mono, monospace",
};

const fontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem",
};

interface IObjectKeys {
  [key: string]: number;
}

interface IBreakpoints extends IObjectKeys {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

const breakpoints: IBreakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const borderRadius = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px",
  circle: "50%",
};

const theme = {
  colors,
  fonts,
  fontSizes,
  breakpoints,
  borderRadius,
};

export default theme;
