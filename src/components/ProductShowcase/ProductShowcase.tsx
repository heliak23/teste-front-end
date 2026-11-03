import React, { useState, useEffect } from 'react';
import styles from './ProductShowcase.module.scss';
import type { Product, CategoryTab } from '../../types/product';
import { ProductCard } from './ProductCard';

interface ProductShowcaseProps {
  title?: string;
  showTabs?: boolean;
  showViewAll?: boolean;
  products: Product[];
  loading?: boolean;
  error?: string | null;
  onSelectProduct: (product: Product) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  title = 'Produtos relacionados',
  showTabs = false,
  showViewAll = false,
  products,
  loading = false,
  error = null,
  onSelectProduct,
}) => {
  const [activeTab, setActiveTab] = useState<CategoryTab>('CELULAR');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const tabs: CategoryTab[] = [
    'CELULAR',
    'ACESSÓRIOS',
    'TABLETS',
    'NOTEBOOKS',
    'TVS',
    'VER TODOS',
  ];

  // Adjust items visible on resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setItemsPerPage(1);
      } else if (width < 768) {
        setItemsPerPage(2);
      } else if (width < 1100) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, products.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Calculate slide percentage
  const gap = 20; // 20px gap
  const stepPercent = 100 / itemsPerPage;

  return (
    <section className={styles.showcaseSection} aria-label={title}>
      <div className={styles.container}>
        {/* Header */}
        <div className={`${styles.headerWrapper} ${showViewAll ? styles.hasViewAll : ''}`}>
          <div className={styles.titleArea}>
            <span className={styles.line} aria-hidden="true" />
            <h2 className={styles.title}>{title}</h2>
            <span className={styles.line} aria-hidden="true" />
          </div>

          {showViewAll && (
            <a href="#ver-todos" className={styles.viewAllLink}>
              Ver todos
            </a>
          )}
        </div>

        {/* Category Tabs */}
        {showTabs && (
          <div className={styles.tabsBar}>
            <div className={styles.tabsList} role="tablist">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab}
                  className={`${styles.tabItem} ${
                    activeTab === tab ? styles.active : ''
                  }`}
                  onClick={() => {
                    setActiveTab(tab);
                    setCurrentIndex(0);
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Content / Carousel */}
        {loading ? (
          <div className={styles.loadingGrid}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={styles.skeletonCard} />
            ))}
          </div>
        ) : error ? (
          <div className={styles.errorState}>
            <p>Não foi possível carregar os produtos neste momento.</p>
            <p style={{ fontSize: '13px', marginTop: '8px' }}>{error}</p>
          </div>
        ) : products.length === 0 ? (
          <div className={styles.errorState}>
            <p>Nenhum produto encontrado.</p>
          </div>
        ) : (
          <div className={styles.carouselWrapper}>
            <button
              type="button"
              className={styles.navArrow}
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Produto anterior"
            >
              <img src="/icons/arrow-left.png" alt="Anterior" width={40} height={40} />
            </button>

            <div className={styles.viewport}>
              <div
                className={styles.sliderTrack}
                style={{
                  transform: `translateX(calc(-${currentIndex * stepPercent}% - ${currentIndex * (gap / itemsPerPage)}px))`,
                }}
              >
                {products.map((product, idx) => (
                  <div key={`${product.productName}-${idx}`} className={styles.slide}>
                    <ProductCard
                      product={product}
                      onSelect={onSelectProduct}
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              className={styles.navArrow}
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              aria-label="Próximo produto"
            >
              <img src="/icons/arrow-right.png" alt="Próximo" width={40} height={40} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
