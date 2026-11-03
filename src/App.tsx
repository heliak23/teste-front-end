import { useState } from 'react';
import styles from './App.module.scss';
import { useProducts } from './hooks/useProducts';
import type { Product } from './types/product';

// Components
import { Header } from './components/Header/Header';
import { HeroBanner } from './components/HeroBanner/HeroBanner';
import { CategoryNav } from './components/CategoryNav/CategoryNav';
import { ProductShowcase } from './components/ProductShowcase/ProductShowcase';
import { PartnerBanners } from './components/PartnerBanners/PartnerBanners';
import { BrandsSection } from './components/BrandsSection/BrandsSection';
import { Newsletter } from './components/Newsletter/Newsletter';
import { Footer } from './components/Footer/Footer';
import { ProductModal } from './components/ProductModal/ProductModal';

export function App() {
  const { products, loading, error } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddToCart = (_product: Product, quantity: number) => {
    setCartCount((prev) => prev + quantity);
  };

  const scrollToProducts = () => {
    const el = document.getElementById('vitrine-principal');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.app}>
      {/* Top Header & Navigation */}
      <Header cartCount={cartCount} />

      <main className={styles.mainContent}>
        {/* Hero Banner */}
        <HeroBanner onCtaClick={scrollToProducts} />

        {/* Categories Strip */}
        <CategoryNav />

        {/* Vitrine 1 (with category tabs) */}
        <div id="vitrine-principal">
          <ProductShowcase
            title="Produtos relacionados"
            showTabs={true}
            products={products}
            loading={loading}
            error={error}
            onSelectProduct={handleOpenModal}
          />
        </div>

        {/* Partner Banners 1 */}
        <PartnerBanners onBannerClick={scrollToProducts} />

        {/* Vitrine 2 (with "Ver todos" link) */}
        <ProductShowcase
          title="Produtos relacionados"
          showViewAll={true}
          products={products}
          loading={loading}
          error={error}
          onSelectProduct={handleOpenModal}
        />

        {/* Partner Banners 2 */}
        <PartnerBanners onBannerClick={scrollToProducts} />

        {/* Brands Section */}
        <BrandsSection />

        {/* Vitrine 3 (with "Ver todos" link) */}
        <ProductShowcase
          title="Produtos relacionados"
          showViewAll={true}
          products={products}
          loading={loading}
          error={error}
          onSelectProduct={handleOpenModal}
        />

        {/* Newsletter Subscription */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />

      {/* Product Interactive Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}

export default App;
