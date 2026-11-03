import React from 'react';
import styles from './Footer.module.scss';
import {
  EconverseLogo,
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
} from '../Icons/Icons';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainFooter}>
          {/* About Column */}
          <div className={styles.aboutCol}>
            <EconverseLogo />
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                <InstagramIcon size={22} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
                <FacebookIcon size={22} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="YouTube">
                <YoutubeIcon size={22} />
              </a>
            </div>
          </div>

          {/* Institucional */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Institucional</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><a href="#sobre">Sobre nós</a></li>
              <li className={styles.linkItem}><a href="#movimento">Movimento</a></li>
              <li className={styles.linkItem}><a href="#trabalhe">Trabalhe conosco</a></li>
            </ul>
          </div>

          {/* Ajuda */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Ajuda</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><a href="#suporte">Suporte</a></li>
              <li className={styles.linkItem}><a href="#fale">Fale Conosco</a></li>
              <li className={styles.linkItem}><a href="#faq">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Termos */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Termos</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><a href="#termos">Termos e Condições</a></li>
              <li className={styles.linkItem}><a href="#privacidade">Política de Privacidade</a></li>
              <li className={styles.linkItem}><a href="#troca">Troca e Devolução</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomContent}>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          <span>© {new Date().getFullYear()} Econverse. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
};

