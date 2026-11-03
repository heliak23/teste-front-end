import React, { useState, useEffect } from 'react';
import styles from './ProductModal.module.scss';
import type { Product } from '../../types/product';
import { formatCurrency } from '../../services/api';
import { CloseIcon, MinusIcon, PlusIcon } from '../Icons/Icons';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart?: (product: Product, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [imgSrc, setImgSrc] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    if (product) {
      setImgSrc(product.photo);
      setQuantity(1);
      setShowFeedback(false);
    }
  }, [product]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) {
    return null;
  }

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleBuy = () => {
    if (onAddToCart) {
      onAddToCart(product, quantity);
    }
    setShowFeedback(true);
    setTimeout(() => {
      setShowFeedback(false);
      onClose();
    }, 1200);
  };

  // Format quantity with 2 digits (e.g. "01")
  const formattedQuantity = quantity < 10 ? `0${quantity}` : `${quantity}`;

  // Cálculo dinâmico do preço do produto de acordo com a quantidade
  const totalPrice = product.price * quantity;

  return (
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Fechar modal"
        >
          <CloseIcon size={18} />
        </button>

        <div className={styles.modalBody}>
          <div className={styles.imageCol}>
            <img
              src={imgSrc}
              alt={product.productName}
              onError={() => setImgSrc('/foto-iphone.png')}
            />
          </div>

          <div className={styles.infoCol}>
            <h2 id="modal-product-title" className={styles.productName}>
              {product.productName}
            </h2>

            <div className={styles.price}>
              {formatCurrency(totalPrice)}
            </div>

            <p className={styles.description}>
              {product.descriptionShort ||
                'Many desktop publishing packages and web page editors now many desktop publishing'}
            </p>

            <a href="#detalhes" className={styles.detailsLink}>
              Veja mais detalhes do produto &gt;
            </a>

            <div className={styles.actionsRow}>
              <div className={styles.quantitySelector} aria-label="Seletor de quantidade">
                <button
                  type="button"
                  className={styles.qtyButton}
                  onClick={handleDecrease}
                  disabled={quantity <= 1}
                  aria-label="Diminuir quantidade"
                >
                  <MinusIcon size={12} />
                </button>
                <span className={styles.qtyNumber}>{formattedQuantity}</span>
                <button
                  type="button"
                  className={styles.qtyButton}
                  onClick={handleIncrease}
                  aria-label="Aumentar quantidade"
                >
                  <PlusIcon size={12} />
                </button>
              </div>

              <button
                type="button"
                className={styles.buyButton}
                onClick={handleBuy}
              >
                COMPRAR
              </button>
            </div>

            {showFeedback && (
              <div className={styles.addedFeedback}>
                Produto adicionado ao carrinho com sucesso!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
