import { styled } from '@/lib/theme';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductCard } from '@/components/ui/ProductCard';
import { Filter, Grid3X3, List } from 'lucide-react';
import { useState } from 'react';
import { getAllProducts, getProductsByCategory, Product } from '@/data/products';

const PageContainer = styled('div', {
  minHeight: '100vh',
  backgroundColor: '$background',
  display: 'flex',
  flexDirection: 'column',
});

const MainContent = styled('main', {
  paddingTop: '$8',
  paddingBottom: '$12',
  flex: 1,
});

const Container = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 $4',
});

const PageHeader = styled('div', {
  textAlign: 'center',
  marginBottom: '$8',
});

const PageTitle = styled('h1', {
  fontFamily: '$heading',
  fontSize: '$4xl',
  fontWeight: '$bold',
  color: '$text',
  marginBottom: '$3',
});

const PageDescription = styled('p', {
  fontSize: '$lg',
  color: '$textSecondary',
  maxWidth: '600px',
  margin: '0 auto',
});

const Controls = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$6',
  padding: '$4 0',
  borderBottom: '1px solid $border',
});

const FilterSection = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
});

const FilterButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$2 $4',
  backgroundColor: '$surface',
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

const ViewToggle = styled('div', {
  display: 'flex',
  gap: '$2',
});

const ViewButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  backgroundColor: '$surface',
  border: '1px solid $border',
  borderRadius: '$md',
  color: '$textSecondary',
  cursor: 'pointer',
  transition: 'all $normal',

  '&:hover': {
    backgroundColor: '$backgroundHover',
    color: '$text',
  },

  '&.active': {
    backgroundColor: '$primary',
    borderColor: '$primary',
    color: '$surface',
  },
});

const ProductGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  gap: '$6',
  marginBottom: '$8',
});

const ProductList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  marginBottom: '$8',
});

const EmptyState = styled('div', {
  textAlign: 'center',
  padding: '$12 $4',
});

const EmptyStateTitle = styled('h3', {
  fontFamily: '$heading',
  fontSize: '$2xl',
  fontWeight: '$semibold',
  color: '$text',
  marginBottom: '$2',
});

const EmptyStateDescription = styled('p', {
  fontSize: '$lg',
  color: '$textSecondary',
});

const CategoryFilter = styled('div', {
  display: 'flex',
  gap: '$3',
  marginBottom: '$6',
  flexWrap: 'wrap',
});

const CategoryButton = styled('button', {
  padding: '$2 $4',
  backgroundColor: '$surface',
  border: '1px solid $border',
  borderRadius: '$md',
  fontSize: '$sm',
  color: '$text',
  cursor: 'pointer',
  transition: 'all $normal',

  '&:hover': {
    backgroundColor: '$backgroundHover',
  },

  '&.active': {
    backgroundColor: '$primary',
    borderColor: '$primary',
    color: '$surface',
  },
});

export default function ShopPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const allProducts = getAllProducts();
  const categories = ['all', 'jilbabs', 'accessories'];
  
  const filteredProducts = selectedCategory === 'all' 
    ? allProducts 
    : getProductsByCategory(selectedCategory);

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
        <Container>
          <PageHeader>
            <PageTitle>Shop All</PageTitle>
            <PageDescription>
              Discover our complete collection of elegant modest fashion pieces.
            </PageDescription>
          </PageHeader>

          <CategoryFilter>
            {categories.map((category) => (
              <CategoryButton
                key={category}
                className={selectedCategory === category ? 'active' : ''}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </CategoryButton>
            ))}
          </CategoryFilter>

          <Controls>
            <FilterSection>
              <FilterButton onClick={() => setShowFilters(!showFilters)}>
                <Filter size={16} />
                Filters
              </FilterButton>
              <span style={{ fontSize: '$sm', color: '$textSecondary' }}>
                {filteredProducts.length} products
              </span>
            </FilterSection>

            <ViewToggle>
              <ViewButton
                className={viewMode === 'grid' ? 'active' : ''}
                onClick={() => setViewMode('grid')}
                aria-label="Grid view"
              >
                <Grid3X3 size={16} />
              </ViewButton>
              <ViewButton
                className={viewMode === 'list' ? 'active' : ''}
                onClick={() => setViewMode('list')}
                aria-label="List view"
              >
                <List size={16} />
              </ViewButton>
            </ViewToggle>
          </Controls>

          {filteredProducts.length > 0 ? (
            viewMode === 'grid' ? (
              <ProductGrid>
                {filteredProducts.map((product) => (
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
            ) : (
              <ProductList>
                {filteredProducts.map((product) => (
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
              </ProductList>
            )
          ) : (
            <EmptyState>
              <EmptyStateTitle>No products found</EmptyStateTitle>
              <EmptyStateDescription>
                Try adjusting your filters or search terms.
              </EmptyStateDescription>
            </EmptyState>
          )}
        </Container>
      </MainContent>

      <Footer />
    </PageContainer>
  );
} 