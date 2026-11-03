import React from 'react';
import styles from './BrandsSection.module.scss';

export const BrandsSection: React.FC = () => {
  const brands = [1, 2, 3, 4, 5];

  return (
    <section className={styles.brandsSection} aria-label="Navegue por marcas">
      <div className={styles.container}>
        <h2 className={styles.title}>Navigue por marcas</h2>

        <div className={styles.brandsGrid}>
          {brands.map((brandId) => (
            <button
              key={brandId}
              type="button"
              className={styles.brandCircle}
              aria-label={`Marca Econverse ${brandId}`}
            >
              <img src="/logo.png" alt="Econverse" className={styles.brandLogoImg} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

