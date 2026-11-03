import React, { useState } from 'react';
import styles from './CategoryNav.module.scss';

interface CategoryNavProps {
  onSelectCategory?: (category: string) => void;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({ onSelectCategory }) => {
  const [activeCategory, setActiveCategory] = useState('Tecnologia');

  const categories = [
    { id: 'tecnologia', name: 'Tecnologia' },
    { id: 'supermercado', name: 'Supermercado' },
    { id: 'bebidas', name: 'Bebidas' },
    { id: 'ferramentas', name: 'Ferramentas' },
    { id: 'saude', name: 'Saúde' },
    { id: 'esportes', name: 'Esportes e Fitness' },
    { id: 'moda', name: 'Moda' },
  ];

  const handleCategoryClick = (name: string) => {
    setActiveCategory(name);
    if (onSelectCategory) {
      onSelectCategory(name);
    }
  };

  return (
    <section className={styles.categorySection} aria-label="Navegação por Categorias">
      <div className={styles.categoryGrid}>
        {categories.map((cat) => {
          const isActive = activeCategory === cat.name;
          const iconSrc = isActive
            ? `/icons/cat-${cat.id}-active.png`
            : `/icons/cat-${cat.id}-inactive.png`;

          return (
            <button
              key={cat.id}
              type="button"
              className={`${styles.categoryItem} ${isActive ? styles.active : ''}`}
              onClick={() => handleCategoryClick(cat.name)}
              aria-pressed={isActive}
            >
              <div className={styles.iconCard}>
                <img
                  src={iconSrc}
                  alt={cat.name}
                  className={styles.iconImg}
                />
              </div>
              <span className={styles.label}>{cat.name}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
};
