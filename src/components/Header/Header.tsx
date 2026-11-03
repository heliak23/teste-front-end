import React, { useState } from 'react';
import styles from './Header.module.scss';
import {
  ShieldCheckIcon,
  TruckIcon,
  CreditCardIcon,
  SearchIcon,
  BoxIcon,
  HeartIcon,
  UserIcon,
  CartIcon,
  CrownIcon,
  EconverseLogo,
} from '../Icons/Icons';

interface HeaderProps {
  cartCount?: number;
  onSearch?: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount = 0, onSearch }) => {
  const [searchValue, setSearchValue] = useState('');
  const [activeNav, setActiveNav] = useState('OFERTAS DO DIA');

  const navItems = [
    { label: 'TODAS CATEGORIAS' },
    { label: 'SUPERMERCADO' },
    { label: 'LIVROS' },
    { label: 'MODA' },
    { label: 'LANÇAMENTOS' },
    { label: 'OFERTAS DO DIA' },
    { label: 'ASSINATURA', hasCrown: true },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchValue);
    }
  };

  return (
    <header className={styles.header}>
      {/* Top Bar with guarantees */}
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <div className={styles.topBarItem}>
            <ShieldCheckIcon size={18} color="#9F9F9F" />
            <span>
              Compra <strong>100% segura</strong>
            </span>
          </div>
          <div className={styles.topBarItem}>
            <TruckIcon size={18} color="#9F9F9F" />
            <span>
              <strong>Frete grátis</strong> acima de R$ 200
            </span>
          </div>
          <div className={styles.topBarItem}>
            <CreditCardIcon size={18} color="#9F9F9F" />
            <span>
              <strong>Parcele</strong> suas compras
            </span>
          </div>
        </div>
      </div>

      {/* Main Header with Logo, Search, Actions */}
      <div className={styles.mainHeader}>
        <div className={styles.mainHeaderContent}>
          <div className={styles.logo}>
            <a href="/" aria-label="Econverse Home">
              <EconverseLogo />
            </a>
          </div>

          <form className={styles.searchContainer} onSubmit={handleSearchSubmit}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="O que você está buscando?"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              aria-label="Campo de busca"
            />
            <button type="submit" className={styles.searchButton} aria-label="Buscar">
              <SearchIcon size={28} />
            </button>
          </form>

          <div className={styles.actions}>
            <button className={styles.actionButton} aria-label="Meus Pedidos" title="Meus Pedidos">
              <BoxIcon size={24} />
            </button>
            <button className={styles.actionButton} aria-label="Favoritos" title="Favoritos">
              <HeartIcon size={24} />
            </button>
            <button className={styles.actionButton} aria-label="Minha Conta" title="Minha Conta">
              <UserIcon size={24} />
            </button>
            <button className={styles.actionButton} aria-label="Carrinho de Compras" title="Carrinho">
              <CartIcon size={24} />
              {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation menu */}
      <nav className={styles.navBar} aria-label="Categorias principais">
        <div className={styles.navBarContent}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li
                key={item.label}
                className={`${styles.navItem} ${
                  activeNav === item.label ? styles.active : ''
                } ${item.hasCrown ? styles.hasCrown : ''}`}
                onClick={() => setActiveNav(item.label)}
              >
                {item.hasCrown && <CrownIcon size={16} color="#3442B5" />}
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

