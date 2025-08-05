// Sagheerah Design System - Theme Configuration

export const colors = {
  // Primary Brand Colors
  richEmerald: '#073331',
  camel: '#AC8C6A',
  cosmicLatte: '#FFF7E6',
  gainsboro: '#D6D8D7',
  
  // Semantic Colors
  primary: '#073331', // Rich Emerald
  secondary: '#AC8C6A', // Camel
  background: '#FAFAFA', // Plain off-white
  surface: '#D6D8D7', // Gainsboro
  
  // Text Colors
  textPrimary: '#073331',
  textSecondary: '#AC8C6A',
  textMuted: '#6B7280',
  
  // Status Colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
} as const;

export const typography = {
  // Font Families
  fontFamily: {
    heading: 'Caslon, serif',
    body: 'Century Gothic, sans-serif',
    fallback: 'system-ui, -apple-system, sans-serif',
  },
  
  // Font Sizes
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
  
  // Font Weights
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  
  // Line Heights
  lineHeight: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
  },
} as const;

export const spacing = {
  // Spacing Scale
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
  '4xl': '6rem',
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
} as const;

// Export theme object
export const theme = {
  colors,
  typography,
  spacing,
  breakpoints,
  shadows,
} as const;

export type Theme = typeof theme;
export type Colors = typeof colors;
export type Typography = typeof typography; 