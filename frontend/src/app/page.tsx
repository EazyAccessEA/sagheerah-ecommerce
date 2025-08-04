import { styled } from '@/lib/theme';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { ProductCard } from '@/components/ui/ProductCard';
import { ArrowRight, Star, Truck, Shield, Heart } from 'lucide-react';
import { getFeaturedProducts, getNewProducts, Product } from '@/data/products';

const PageContainer = styled('div', {
  minHeight: '100vh',
  backgroundColor: '$background',
  display: 'flex',
  flexDirection: 'column',
});

const MainContent = styled('main', {
  paddingTop: '$8',
  flex: 1,
});

const HeroSection = styled('section', {
  position: 'relative',
  height: '80vh',
  minHeight: '600px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, $cosmicLatte 0%, $background 100%)',
  marginBottom: '$12',
});

const HeroContent = styled('div', {
  textAlign: 'center',
  maxWidth: '800px',
  padding: '0 $4',
  zIndex: 2,
});

const HeroTitle = styled('h1', {
  fontFamily: '$heading',
  fontSize: '$5xl',
  fontWeight: '$bold',
  color: '$text',
  marginBottom: '$6',
  lineHeight: 1.2,

  '@md': {
    fontSize: '$6xl',
  },

  '@lg': {
    fontSize: '$7xl',
  },
});

const HeroSubtitle = styled('p', {
  fontSize: '$xl',
  color: '$textSecondary',
  marginBottom: '$8',
  lineHeight: 1.6,
  maxWidth: '600px',
  margin: '0 auto $8',
});

const HeroButtons = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  alignItems: 'center',

  '@md': {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const Section = styled('section', {
  padding: '$12 0',
});

const Container = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 $4',
});

const SectionHeader = styled('div', {
  textAlign: 'center',
  marginBottom: '$10',
});

const SectionTitle = styled('h2', {
  fontFamily: '$heading',
  fontSize: '$3xl',
  fontWeight: '$bold',
  color: '$text',
  marginBottom: '$3',

  '@md': {
    fontSize: '$4xl',
  },
});

const SectionDescription = styled('p', {
  fontSize: '$lg',
  color: '$textSecondary',
  maxWidth: '600px',
  margin: '0 auto',
});

const ProductGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  gap: '$6',
  marginBottom: '$8',
});

const CategoryGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '$6',
  marginBottom: '$8',
});

const CategoryCard = styled('div', {
  position: 'relative',
  height: '400px',
  backgroundColor: '$surface',
  borderRadius: '$lg',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'all $normal',

  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '$medium',
  },
});

const CategoryImage = styled('div', {
  width: '100%',
  height: '100%',
  background: 'linear-gradient(135deg, $cosmicLatte 0%, $camel 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$2xl',
  fontFamily: '$heading',
  color: '$text',
});

const CategoryOverlay = styled('div', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
  color: '$surface',
  padding: '$6',
  textAlign: 'center',
});

const CategoryTitle = styled('h3', {
  fontFamily: '$heading',
  fontSize: '$xl',
  fontWeight: '$semibold',
  marginBottom: '$2',
});

const CategoryDescription = styled('p', {
  fontSize: '$sm',
  opacity: 0.9,
});

const FeaturesSection = styled('section', {
  backgroundColor: '$surface',
  padding: '$12 0',
  marginTop: '$12',
});

const FeaturesGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '$8',
});

const FeatureCard = styled('div', {
  textAlign: 'center',
  padding: '$6',
});

const FeatureIcon = styled('div', {
  width: '60px',
  height: '60px',
  backgroundColor: '$primary',
  borderRadius: '$full',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto $4',
  color: '$surface',
});

const FeatureTitle = styled('h3', {
  fontFamily: '$heading',
  fontSize: '$lg',
  fontWeight: '$semibold',
  color: '$text',
  marginBottom: '$2',
});

const FeatureDescription = styled('p', {
  fontSize: '$sm',
  color: '$textSecondary',
  lineHeight: 1.5,
});

const NewsletterSection = styled('section', {
  backgroundColor: '$cosmicLatte',
  padding: '$12 0',
  marginTop: '$12',
});

const NewsletterContent = styled('div', {
  textAlign: 'center',
  maxWidth: '500px',
  margin: '0 auto',
});

const NewsletterTitle = styled('h2', {
  fontFamily: '$heading',
  fontSize: '$2xl',
  fontWeight: '$bold',
  color: '$text',
  marginBottom: '$3',
});

const NewsletterDescription = styled('p', {
  fontSize: '$lg',
  color: '$textSecondary',
  marginBottom: '$6',
});

const NewsletterForm = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  maxWidth: '400px',
  margin: '0 auto',

  '@md': {
    flexDirection: 'row',
  },
});

const NewsletterInput = styled('input', {
  flex: 1,
  padding: '$3 $4',
  border: '1px solid $border',
  borderRadius: '$md',
  fontSize: '$base',
  backgroundColor: '$surface',

  '&:focus': {
    outline: 'none',
    borderColor: '$primary',
  },
});

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const newProducts = getNewProducts();

  const handleAddToCart = (productId: string) => {
    console.log('Add to cart:', productId);
  };

  const handleAddToWishlist = (productId: string) => {
    console.log('Add to wishlist:', productId);
  };

  return (
    <PageContainer>
      <Header
        cartItemCount={0}
        onCartClick={() => console.log('Cart clicked')}
        onSearchClick={() => console.log('Search clicked')}
        onUserClick={() => console.log('User clicked')}
        onWishlistClick={() => console.log('Wishlist clicked')}
      />

      <MainContent>
        <HeroSection>
          <HeroContent>
            <HeroTitle>Elegant Modest Fashion</HeroTitle>
            <HeroSubtitle>
              Discover our collection of sophisticated, modest clothing designed for the modern woman who values both style and tradition.
            </HeroSubtitle>
            <HeroButtons>
              <Button size="lg">
                Shop Collection
                <ArrowRight size={20} />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </HeroButtons>
          </HeroContent>
        </HeroSection>

        <Section>
          <Container>
            <SectionHeader>
              <SectionTitle>Featured Products</SectionTitle>
              <SectionDescription>
                Our most popular pieces, crafted with premium materials and timeless design.
              </SectionDescription>
            </SectionHeader>

            <ProductGrid>
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.name}
                  description={product.short_description}
                  price={product.price}
                  image={product.images?.[0] || '/api/placeholder/800/1000?text=Product'}
                  badge={product.isNew ? 'New' : undefined}
                  onAddToCart={handleAddToCart}
                  onAddToWishlist={handleAddToWishlist}
                />
              ))}
            </ProductGrid>
          </Container>
        </Section>

        <Section>
          <Container>
            <SectionHeader>
              <SectionTitle>Shop by Category</SectionTitle>
              <SectionDescription>
                Explore our curated collections designed for every occasion.
              </SectionDescription>
            </SectionHeader>

            <CategoryGrid>
              <CategoryCard>
                <CategoryImage>Jilbabs</CategoryImage>
                <CategoryOverlay>
                  <CategoryTitle>Jilbabs</CategoryTitle>
                  <CategoryDescription>Elegant and modest designs for every occasion</CategoryDescription>
                </CategoryOverlay>
              </CategoryCard>
              <CategoryCard>
                <CategoryImage>Accessories</CategoryImage>
                <CategoryOverlay>
                  <CategoryTitle>Accessories</CategoryTitle>
                  <CategoryDescription>Complete your look with our premium accessories</CategoryDescription>
                </CategoryOverlay>
              </CategoryCard>
            </CategoryGrid>
          </Container>
        </Section>

        <FeaturesSection>
          <Container>
            <FeaturesGrid>
              <FeatureCard>
                <FeatureIcon>
                  <Truck size={24} />
                </FeatureIcon>
                <FeatureTitle>Free Shipping</FeatureTitle>
                <FeatureDescription>
                  Free standard shipping on all orders over $100
                </FeatureDescription>
              </FeatureCard>
              <FeatureCard>
                <FeatureIcon>
                  <Shield size={24} />
                </FeatureIcon>
                <FeatureTitle>Quality Guarantee</FeatureTitle>
                <FeatureDescription>
                  30-day return policy with full refund
                </FeatureDescription>
              </FeatureCard>
              <FeatureCard>
                <FeatureIcon>
                  <Heart size={24} />
                </FeatureIcon>
                <FeatureTitle>Handcrafted</FeatureTitle>
                <FeatureDescription>
                  Each piece is carefully crafted with attention to detail
                </FeatureDescription>
              </FeatureCard>
              <FeatureCard>
                <FeatureIcon>
                  <Star size={24} />
                </FeatureIcon>
                <FeatureTitle>Premium Materials</FeatureTitle>
                <FeatureDescription>
                  Only the finest fabrics and materials used
                </FeatureDescription>
              </FeatureCard>
            </FeaturesGrid>
          </Container>
        </FeaturesSection>

        <NewsletterSection>
          <Container>
            <NewsletterContent>
              <NewsletterTitle>Stay Updated</NewsletterTitle>
              <NewsletterDescription>
                Subscribe to our newsletter for exclusive offers and new arrivals.
              </NewsletterDescription>
              <NewsletterForm>
                <NewsletterInput
                  type="email"
                  placeholder="Enter your email address"
                  required
                />
                <Button type="submit">
                  Subscribe
                </Button>
              </NewsletterForm>
            </NewsletterContent>
          </Container>
        </NewsletterSection>
      </MainContent>

      <Footer />
    </PageContainer>
  );
}
