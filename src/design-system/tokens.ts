/**
 * Design System Tokens
 * All design values centralized in one place
 */

// Color Tokens
export const colors = {
  // Primary Colors
  primary: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
  },
  
  // Purple Gradient Colors
  purple: {
    darkest: '#3d1f99',
    dark: '#4d28c2',
    base: '#6032f2',
    bright: '#8b3dff',
    light: '#a855f7',
    glow: 'rgba(139, 61, 255, 0.1)',
    border: 'rgba(96, 50, 242, 0.2)',
    subtle: 'rgba(120, 71, 189, 0.1)',
  },
  
  // Background Colors
  background: {
    primary: '#0B0815',
    secondary: '#0A0A0A',
    card: '#120E1F',
    elevated: '#1A1625',
    glass: 'rgba(255, 255, 255, 0.05)',
    glassHover: 'rgba(255, 255, 255, 0.1)',
    darkGlass: 'rgba(11, 8, 21, 0.2)',
  },
  
  // Text Colors
  text: {
    primary: '#ffffff',
    secondary: '#d9d9d9',
    tertiary: '#f5f5f5',
    muted: 'rgba(255, 255, 255, 0.7)',
    disabled: '#8A84A8',
  },
  
  // Border Colors
  border: {
    default: 'rgba(255, 255, 255, 0.1)',
    hover: 'rgba(255, 255, 255, 0.2)',
    purple: 'rgba(139, 61, 255, 0.2)',
    purpleLight: 'rgba(120, 71, 189, 0.2)',
  },
  
  // Semantic Colors
  semantic: {
    success: '#10B981',
    warning: '#F97316',
    error: '#d4183d',
    info: '#3B82F6',
  },
} as const;

// Typography Tokens
export const typography = {
  fontFamily: {
    primary: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    secondary: "'Archivo', sans-serif",
    heading: "'Satoshi', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono: "'Courier New', monospace",
  },
  
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '23.22px',
    '3xl': '36px',
    '4xl': '48px',
  },
  
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  lineHeight: {
    tight: 1.1,
    snug: 1.35,
    normal: 1.5,
    relaxed: 1.6,
  },
  
  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.1em',
  },
} as const;

// Spacing Tokens
export const spacing = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
  28: '112px',
  32: '128px',
} as const;

// Border Radius Tokens
export const radius = {
  none: '0',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '20px',
  '3xl': '24px',
  full: '9999px',
} as const;

// Shadow Tokens
export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 4px 24px -1px rgba(0, 0, 0, 0.2)',
  md: '0 6px 32px -2px rgba(0, 0, 0, 0.3)',
  lg: '0 10px 40px -3px rgba(0, 0, 0, 0.4)',
  xl: '0 20px 60px -5px rgba(0, 0, 0, 0.5)',
  glow: '0 0 8px rgba(255, 255, 255, 0.4)',
  purpleGlow: '0 4px 24px rgba(139, 61, 255, 0.3)',
} as const;

// Animation Tokens
export const animation = {
  duration: {
    instant: 0.15,
    fast: 0.2,
    normal: 0.3,
    slow: 0.4,
    slower: 0.5,
    slowest: 0.6,
    verySlow: 0.8,
  },
  
  easing: {
    linear: [0, 0, 1, 1],
    easeIn: [0.4, 0, 1, 1],
    easeOut: [0, 0, 0.2, 1],
    easeInOut: [0.4, 0, 0.2, 1],
    custom: [0.22, 1, 0.36, 1],
    spring: [0.04, 0.62, 0.23, 0.98],
  },
  
  delay: {
    none: 0,
    short: 0.1,
    medium: 0.2,
    long: 0.3,
  },
} as const;

// Gradient Tokens
export const gradients = {
  purple: {
    animated: 'linear-gradient(90deg, #3d1f99, #4d28c2, #6032f2, #8b3dff, #a855f7, #8b3dff, #6032f2, #4d28c2, #3d1f99)',
    vertical: 'linear-gradient(180deg, #0A0A0A 0%, #0B0815 25%, #0B0815 75%, #0A0A0A 100%)',
    radial: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(139, 61, 255, 0.1), transparent 40%)',
  },
  
  glow: {
    purple: 'radial-gradient(650px circle at var(--mouse-x) var(--mouse-y), rgba(120, 119, 198, 0.15), transparent 80%)',
    purpleStrong: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(139, 61, 255, 0.08), transparent 40%)',
  },
} as const;

// Breakpoints
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Z-Index Scale
export const zIndex = {
  base: 0,
  below: -1,
  content: 10,
  elevated: 20,
  sticky: 30,
  modal: 40,
  tooltip: 50,
} as const;

// Section Layout Tokens
export const layout = {
  maxWidth: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
    '2xl': '1440px',
    full: '100%',
  },
  
  padding: {
    section: {
      mobile: '20px',
      desktop: '48px',
    },
  },
  
  gap: {
    card: '24px',
    section: '64px',
  },
} as const;

// Transition Presets
export const transitions = {
  default: {
    duration: animation.duration.normal,
    ease: animation.easing.easeInOut,
  },
  
  smooth: {
    duration: animation.duration.slow,
    ease: animation.easing.custom,
  },
  
  spring: {
    duration: animation.duration.slow,
    ease: animation.easing.spring,
  },
  
  fast: {
    duration: animation.duration.fast,
    ease: animation.easing.easeOut,
  },
} as const;
