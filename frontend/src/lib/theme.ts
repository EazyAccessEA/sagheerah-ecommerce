import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors: {
      // Sagheerah Brand Colors
      emerald: '#073331', // Rich Emerald - primary accent
      camel: '#AC8C6A', // Camel - warm secondary accents
      cosmicLatte: '#FFF7E6', // Cosmic Latte - base background
      gainsboro: '#D6D8D7', // Gainsboro - neutral grey
      
      // Semantic colors
      primary: '#073331',
      secondary: '#AC8C6A',
      background: '#FFF7E6',
      surface: '#FFFFFF',
      text: '#171717',
      textSecondary: '#6B7280',
      border: '#D6D8D7',
      error: '#EF4444',
      success: '#10B981',
      warning: '#F59E0B',
      
      // Interactive states
      primaryHover: '#052827',
      secondaryHover: '#9A7B5F',
      backgroundHover: '#FEF9F0',
    },
    fonts: {
      // Typography as per design system
      heading: 'Caslon, Georgia, serif',
      body: 'Century Gothic, Arial, sans-serif',
      mono: 'Geist Mono, monospace',
    },
    fontSizes: {
      // Type scale
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
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    fontWeights: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeights: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
    space: {
      // 8px spacing scale as per design system
      0: '0',
      1: '0.25rem', // 4px
      2: '0.5rem',  // 8px
      3: '0.75rem', // 12px
      4: '1rem',    // 16px
      5: '1.25rem', // 20px
      6: '1.5rem',  // 24px
      7: '1.75rem', // 28px
      8: '2rem',    // 32px
      10: '2.5rem', // 40px
      12: '3rem',   // 48px
      16: '4rem',   // 64px
      20: '5rem',   // 80px
      24: '6rem',   // 96px
      32: '8rem',   // 128px
    },
    radii: {
      none: '0',
      sm: '0.125rem',
      base: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },
    shadows: {
      // Soft shadow for product cards as per design system
      soft: '0 4px 12px rgba(7, 51, 49, 0.08)',
      medium: '0 8px 25px rgba(7, 51, 49, 0.12)',
      large: '0 16px 50px rgba(7, 51, 49, 0.16)',
    },
    transitions: {
      // Smooth easing for luxury feel
      smooth: 'cubic-bezier(.23,1,.32,1)',
      fast: '150ms cubic-bezier(.23,1,.32,1)',
      normal: '300ms cubic-bezier(.23,1,.32,1)',
      slow: '500ms cubic-bezier(.23,1,.32,1)',
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)',
  },
  utils: {
    // Utility functions
    marginX: (value: string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: string) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value: string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});

// Global CSS reset and base styles
export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
  },
  'html, body': {
    margin: 0,
    padding: 0,
    fontFamily: '$body',
    fontSize: '$base',
    lineHeight: '$normal',
    color: '$text',
    backgroundColor: '$background',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  'h1, h2, h3, h4, h5, h6': {
    fontFamily: '$heading',
    fontWeight: '$bold',
    lineHeight: '$tight',
    margin: 0,
  },
  'p': {
    margin: 0,
  },
  'a': {
    color: 'inherit',
    textDecoration: 'none',
  },
  'button': {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  'input, textarea, select': {
    fontFamily: 'inherit',
  },
  // Focus styles for accessibility
  'button:focus, input:focus, textarea:focus, select:focus': {
    outline: '2px solid $primary',
    outlineOffset: '2px',
  },
  // Reduced motion support
  '@media (prefers-reduced-motion: reduce)': {
    '*': {
      animationDuration: '0.01ms !important',
      animationIterationCount: '1 !important',
      transitionDuration: '0.01ms !important',
    },
  },
}); 