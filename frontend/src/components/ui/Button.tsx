import { styled } from '@/lib/theme';
import { forwardRef } from 'react';

const StyledButton = styled('button', {
  // Base styles
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: '$body',
  fontWeight: '$semibold',
  fontSize: '$base',
  lineHeight: '$normal',
  border: 'none',
  cursor: 'pointer',
  transition: 'all $normal',
  textDecoration: 'none',
  
  // Default variant (Primary)
  backgroundColor: '$primary',
  color: '$surface',
  padding: '$3 $7', // 12px 28px as per design system
  
  '&:hover': {
    backgroundColor: '$primaryHover',
    transform: 'translateY(-1px)',
  },
  
  '&:active': {
    transform: 'translateY(0)',
  },
  
  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
    transform: 'none',
    '&:hover': {
      backgroundColor: '$primary',
      transform: 'none',
    },
  },
  
  // Variants
  variants: {
    variant: {
      primary: {
        backgroundColor: '$primary',
        color: '$surface',
        '&:hover': {
          backgroundColor: '$primaryHover',
        },
      },
      secondary: {
        backgroundColor: 'transparent',
        color: '$primary',
        border: '1px solid $primary',
        '&:hover': {
          backgroundColor: '$primary',
          color: '$surface',
        },
      },
      outline: {
        backgroundColor: 'transparent',
        color: '$text',
        border: '1px solid $border',
        '&:hover': {
          backgroundColor: '$backgroundHover',
          borderColor: '$primary',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: '$text',
        '&:hover': {
          backgroundColor: '$backgroundHover',
        },
      },
    },
    size: {
      sm: {
        padding: '$2 $4',
        fontSize: '$sm',
      },
      md: {
        padding: '$3 $7', // Default size
        fontSize: '$base',
      },
      lg: {
        padding: '$4 $8',
        fontSize: '$lg',
      },
      xl: {
        padding: '$5 $10',
        fontSize: '$xl',
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },
  
  // Default variants
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'md', fullWidth = false, ...props }, ref) => {
    return (
      <StyledButton
        ref={ref}
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        {...props}
      >
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button'; 