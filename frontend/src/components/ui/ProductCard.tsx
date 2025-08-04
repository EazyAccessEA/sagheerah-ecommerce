import { styled } from '@/lib/theme';
import { Heart, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from './Button';

const CardContainer = styled('div', {
  position: 'relative',
  backgroundColor: '$surface',
  borderRadius: '$lg',
  overflow: 'hidden',
  boxShadow: '$soft',
  transition: 'all $normal',
  cursor: 'pointer',
  
  '&:hover': {
    boxShadow: '$medium',
    transform: 'translateY(-2px)',
  },
});

const ImageContainer = styled('div', {
  position: 'relative',
  width: '100%',
  height: '320px', // Fixed height as per design system
  backgroundColor: '$cosmicLatte',
  overflow: 'hidden',
});

const ImageOverlay = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.03)',
  opacity: 0,
  transition: 'opacity $normal',
  
  '&:hover': {
    opacity: 1,
  },
});

const ActionButtons = styled('div', {
  position: 'absolute',
  top: '$4',
  right: '$4',
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  opacity: 0,
  transform: 'translateX(10px)',
  transition: 'all $normal',
  
  [`${CardContainer}:hover &`]: {
    opacity: 1,
    transform: 'translateX(0)',
  },
});

const ActionButton = styled('button', {
  width: '40px',
  height: '40px',
  borderRadius: '$full',
  backgroundColor: '$surface',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all $fast',
  boxShadow: '$soft',
  
  '&:hover': {
    backgroundColor: '$primary',
    color: '$surface',
    transform: 'scale(1.1)',
  },
});

const Content = styled('div', {
  padding: '$6',
});

const ProductTitle = styled('h3', {
  fontFamily: '$heading',
  fontSize: '$lg',
  fontWeight: '$semibold',
  color: '$text',
  marginBottom: '$2',
  lineHeight: '$tight',
});

const ProductDescription = styled('p', {
  fontSize: '$sm',
  color: '$textSecondary',
  marginBottom: '$4',
  lineHeight: '$normal',
});

const PriceContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  marginBottom: '$4',
});

const CurrentPrice = styled('span', {
  fontSize: '$xl',
  fontWeight: '$bold',
  color: '$text',
});

const OriginalPrice = styled('span', {
  fontSize: '$lg',
  color: '$textSecondary',
  textDecoration: 'line-through',
});

const Badge = styled('span', {
  position: 'absolute',
  top: '$4',
  left: '$4',
  backgroundColor: '$primary',
  color: '$surface',
  fontSize: '$xs',
  fontWeight: '$semibold',
  padding: '$1 $2',
  borderRadius: '$sm',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
});

export interface ProductCardProps {
  id: string;
  title: string;
  description?: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  onAddToCart?: (productId: string) => void;
  onAddToWishlist?: (productId: string) => void;
  isWishlisted?: boolean;
}

export const ProductCard = ({
  id,
  title,
  description,
  price,
  originalPrice,
  image,
  badge,
  onAddToCart,
  onAddToWishlist,
  isWishlisted = false,
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart?.(id);
  };

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToWishlist?.(id);
  };

  return (
    <CardContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ImageContainer>
        {badge && <Badge>{badge}</Badge>}
        
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        <ImageOverlay />
        
        <ActionButtons>
          <ActionButton
            onClick={handleAddToWishlist}
            aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart
              size={16}
              fill={isWishlisted ? 'currentColor' : 'none'}
              color={isWishlisted ? 'currentColor' : undefined}
            />
          </ActionButton>
          
          <ActionButton
            onClick={handleAddToCart}
            aria-label="Add to cart"
          >
            <ShoppingBag size={16} />
          </ActionButton>
        </ActionButtons>
      </ImageContainer>
      
      <Content>
        <ProductTitle>{title}</ProductTitle>
        {description && <ProductDescription>{description}</ProductDescription>}
        
        <PriceContainer>
          <CurrentPrice>{formatPrice(price)}</CurrentPrice>
          {originalPrice && originalPrice > price && (
            <OriginalPrice>{formatPrice(originalPrice)}</OriginalPrice>
          )}
        </PriceContainer>
        
        <Button
          variant="primary"
          size="sm"
          fullWidth
          onClick={handleAddToCart}
        >
          Add to Bag
        </Button>
      </Content>
    </CardContainer>
  );
}; 