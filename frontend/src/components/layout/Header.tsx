import { styled } from '@/lib/theme';
import { Search, Heart, User, ShoppingBag, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Button } from '../ui/Button';

const HeaderContainer = styled('header', {
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid $border',
  transition: 'all $normal',
});

const HeaderContent = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 $4',
});

const HeaderInner = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '80px',
  gap: '$6',
});

const Logo = styled(Link, {
  fontFamily: '$heading',
  fontSize: '$2xl',
  fontWeight: '$bold',
  color: '$primary',
  textDecoration: 'none',
  flexShrink: 0,
});

const Navigation = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  gap: '$6',

  '@md': {
    display: 'flex',
  },

  '@sm': {
    display: 'none',
  },
});

const NavLink = styled(Link, {
  color: '$text',
  textDecoration: 'none',
  fontSize: '$base',
  fontWeight: '$medium',
  transition: 'color $normal',
  position: 'relative',

  '&:hover': {
    color: '$primary',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-4px',
    left: 0,
    width: '0%',
    height: '2px',
    backgroundColor: '$primary',
    transition: 'width $normal',
  },

  '&:hover::after': {
    width: '100%',
  },
});

const Actions = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
});

const ActionButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '$md',
  color: '$text',
  cursor: 'pointer',
  transition: 'all $normal',
  position: 'relative',

  '&:hover': {
    backgroundColor: '$backgroundHover',
    color: '$primary',
  },

  '&:focus': {
    outline: '2px solid $primary',
    outlineOffset: '2px',
  },
});

const CartButton = styled(ActionButton, {
  position: 'relative',
});

const CartBadge = styled('span', {
  position: 'absolute',
  top: '-4px',
  right: '-4px',
  backgroundColor: '$primary',
  color: '$surface',
  fontSize: '$xs',
  fontWeight: '$bold',
  borderRadius: '$full',
  width: '20px',
  height: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '20px',
});

const MobileMenuButton = styled(ActionButton, {
  '@md': {
    display: 'none',
  },
});

const CurrencySelector = styled('div', {
  position: 'relative',
});

const CurrencyButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$1',
  padding: '$2 $3',
  backgroundColor: 'transparent',
  border: '1px solid $border',
  borderRadius: '$md',
  fontSize: '$sm',
  color: '$text',
  cursor: 'pointer',
  transition: 'all $normal',

  '&:hover': {
    backgroundColor: '$backgroundHover',
    borderColor: '$primary',
  },
});

const SearchContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});

const SearchInput = styled('input', {
  width: '200px',
  padding: '$2 $3 $2 $10',
  border: '1px solid $border',
  borderRadius: '$md',
  fontSize: '$sm',
  backgroundColor: '$surface',
  transition: 'all $normal',

  '&:focus': {
    outline: 'none',
    borderColor: '$primary',
    width: '250px',
  },

  '&::placeholder': {
    color: '$textSecondary',
  },

  '@sm': {
    display: 'none',
  },
});

const SearchIcon = styled(Search, {
  position: 'absolute',
  left: '$3',
  color: '$textSecondary',
  width: '16px',
  height: '16px',
});

const MobileMenu = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 1001,
  opacity: 0,
  visibility: 'hidden',
  transition: 'all $normal',

  variants: {
    isOpen: {
      true: {
        opacity: 1,
        visibility: 'visible',
      },
    },
  },
});

const MobileMenuContent = styled('div', {
  position: 'fixed',
  top: 0,
  right: 0,
  width: '300px',
  height: '100vh',
  backgroundColor: '$surface',
  padding: '$6',
  transform: 'translateX(100%)',
  transition: 'transform $normal',
  overflowY: 'auto',

  variants: {
    isOpen: {
      true: {
        transform: 'translateX(0)',
      },
    },
  },
});

const MobileMenuHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '$8',
  paddingBottom: '$4',
  borderBottom: '1px solid $border',
});

const MobileMenuTitle = styled('h2', {
  fontFamily: '$heading',
  fontSize: '$xl',
  fontWeight: '$bold',
  color: '$text',
  margin: 0,
});

const MobileMenuCloseButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '$md',
  color: '$text',
  cursor: 'pointer',
  transition: 'all $normal',

  '&:hover': {
    backgroundColor: '$backgroundHover',
    color: '$primary',
  },
});

const MobileNav = styled('nav', {
  marginBottom: '$8',
});

const MobileNavLink = styled(Link, {
  display: 'block',
  padding: '$3 0',
  color: '$text',
  textDecoration: 'none',
  fontSize: '$lg',
  fontWeight: '$medium',
  borderBottom: '1px solid $border',
  transition: 'color $normal',

  '&:hover': {
    color: '$primary',
  },

  '&:last-child': {
    borderBottom: 'none',
  },
});

const MobileActions = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  paddingTop: '$4',
  borderTop: '1px solid $border',
});

const MobileActionButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  padding: '$3 0',
  backgroundColor: 'transparent',
  border: 'none',
  color: '$text',
  fontSize: '$base',
  fontWeight: '$medium',
  cursor: 'pointer',
  transition: 'color $normal',

  '&:hover': {
    color: '$primary',
  },
});

export interface HeaderProps {
  cartItemCount?: number;
  onCartClick?: () => void;
  onSearchClick?: () => void;
  onUserClick?: () => void;
  onWishlistClick?: () => void;
}

export const Header = ({
  cartItemCount = 0,
  onCartClick,
  onSearchClick,
  onUserClick,
  onWishlistClick,
}: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentCurrency, setCurrentCurrency] = useState('USD');
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Handle backdrop click to close mobile menu
  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      closeMobileMenu();
    }
  };

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <HeaderInner>
            <Logo href="/">Sagheerah</Logo>
            
            <Navigation>
              <NavLink href="/shop">Shop</NavLink>
              <NavLink href="/new-arrivals">New Arrivals</NavLink>
              <NavLink href="/jilbabs">Jilbabs</NavLink>
              <NavLink href="/accessories">Accessories</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </Navigation>

            <Actions>
              <CurrencySelector>
                <CurrencyButton onClick={() => setCurrentCurrency(currentCurrency === 'USD' ? 'EUR' : 'USD')}>
                  {currentCurrency}
                </CurrencyButton>
              </CurrencySelector>

              <SearchContainer>
                <SearchIcon />
                <SearchInput 
                  type="text" 
                  placeholder="Search..." 
                  onClick={onSearchClick}
                  aria-label="Search products"
                />
              </SearchContainer>

              <ActionButton onClick={onWishlistClick} aria-label="Wishlist">
                <Heart size={20} />
              </ActionButton>

              <ActionButton onClick={onUserClick} aria-label="User account">
                <User size={20} />
              </ActionButton>

              <CartButton onClick={onCartClick} aria-label="Shopping cart">
                <ShoppingBag size={20} />
                {cartItemCount > 0 && (
                  <CartBadge>{cartItemCount}</CartBadge>
                )}
              </CartButton>

              <MobileMenuButton onClick={toggleMobileMenu} aria-label="Open navigation menu">
                <Menu size={20} />
              </MobileMenuButton>
            </Actions>
          </HeaderInner>
        </HeaderContent>
      </HeaderContainer>

      <MobileMenu isOpen={isMobileMenuOpen} onClick={handleBackdropClick}>
        <MobileMenuContent isOpen={isMobileMenuOpen} ref={mobileMenuRef}>
          <MobileMenuHeader>
            <MobileMenuTitle>Menu</MobileMenuTitle>
            <MobileMenuCloseButton onClick={closeMobileMenu} aria-label="Close navigation menu">
              <X size={20} />
            </MobileMenuCloseButton>
          </MobileMenuHeader>

          <MobileNav>
            <MobileNavLink href="/shop" onClick={closeMobileMenu}>
              Shop
            </MobileNavLink>
            <MobileNavLink href="/new-arrivals" onClick={closeMobileMenu}>
              New Arrivals
            </MobileNavLink>
            <MobileNavLink href="/jilbabs" onClick={closeMobileMenu}>
              Jilbabs
            </MobileNavLink>
            <MobileNavLink href="/accessories" onClick={closeMobileMenu}>
              Accessories
            </MobileNavLink>
            <MobileNavLink href="/about" onClick={closeMobileMenu}>
              About
            </MobileNavLink>
            <MobileNavLink href="/contact" onClick={closeMobileMenu}>
              Contact
            </MobileNavLink>
          </MobileNav>

          <MobileActions>
            <MobileActionButton onClick={onWishlistClick}>
              <Heart size={20} />
              Wishlist
            </MobileActionButton>
            <MobileActionButton onClick={onUserClick}>
              <User size={20} />
              Account
            </MobileActionButton>
            <MobileActionButton onClick={onCartClick}>
              <ShoppingBag size={20} />
              Cart ({cartItemCount})
            </MobileActionButton>
          </MobileActions>
        </MobileMenuContent>
      </MobileMenu>
    </>
  );
}; 