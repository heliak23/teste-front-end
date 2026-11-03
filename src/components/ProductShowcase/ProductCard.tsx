import React, { useState } from 'react';
import styles from './ProductCard.module.scss';
import type { Product } from '../../types/product';
import { formatCurrency } from '../../services/api';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const [imgSrc, setImgSrc] = useState(product.photo);

  // Price formatting
  // product.price is in cents (e.g. 149990 = R$ 1.499,90 or 15000 = R$ 150,00)
  const currentPriceFormatted = formatCurrency(product.price);

  // Calculate a realistic old price (+ 15% discount representation)
  const oldPriceCents = Math.round(product.price * 1.15);
  const oldPriceFormatted = formatCurrency(oldPriceCents);

  // Calculate 2x installments
  const installmentValue = formatCurrency(Math.round(product.price / 2));

  const handleCardClick = () => {
    onSelect(product);
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect(product);
  };

  return (
    <article
      className={styles.productCard}
      onClick={handleCardClick}
      aria-label={`Produto: ${product.productName}`}
    >
      <div className={styles.imageWrapper}>
        <img
          src={imgSrc}
          alt={product.productName}
          onError={() => setImgSrc('/foto-iphone.png')}
          loading="lazy"
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.productTitle} title={product.productName}>
          {product.productName}
        </h3>

        <div className={styles.pricing}>
          <span className={styles.oldPrice}>{oldPriceFormatted}</span>
          <span className={styles.currentPrice}>{currentPriceFormatted}</span>
          <span className={styles.installments}>
            ou 2x de {installmentValue} sem juros
          </span>
          <span className={styles.freeShipping}>Frete grátis</span>
        </div>

        <button
          type="button"
          className={styles.buyButton}
          onClick={handleButtonClick}
          aria-label={`Comprar ${product.productName}`}
        >
          COMPRAR
        </button>
      </div>
    </article>
  );
};
