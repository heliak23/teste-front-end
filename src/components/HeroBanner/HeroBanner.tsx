import React from 'react';
import styles from './HeroBanner.module.scss';

interface HeroBannerProps {
  onCtaClick?: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onCtaClick }) => {
  return (
    <section className={styles.heroBanner} aria-label="Banner Principal de Promoções">
      <div className={styles.heroContent}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            Venha conhecer nossas promoções
          </h1>
          <p className={styles.subtitle}>
            50% Off nos produtos
          </p>
          <button
            type="button"
            className={styles.ctaButton}
            onClick={onCtaClick}
          >
            Ver produto
          </button>
        </div>
      </div>
    </section>
  );
};

