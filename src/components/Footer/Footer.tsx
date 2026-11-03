import React from 'react';
import styles from './Footer.module.scss';
import {
  EconverseLogo,
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon,
} from '../Icons/Icons';

export const Footer: React.FC = () => {
  return (
    <>
      {/* Seção Footer: 1440x282 */}
      <footer className={styles.footerSection} id="footer" aria-label="Rodapé institucional">
        <div className={styles.container}>
          <div className={styles.mainFooter}>
            {/* About Column */}
            <div className={styles.aboutCol}>
              <div className={styles.logoWrapper}>
                <EconverseLogo width={140} height={42} />
              </div>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit.
              </p>
              <div className={styles.socialLinks}>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label="Instagram"
                >
                  <InstagramIcon size={20} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label="Facebook"
                >
                  <FacebookIcon size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={20} />
                </a>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className={styles.verticalDivider} aria-hidden="true" />

            {/* Links Section */}
            <div className={styles.linksRow}>
              {/* Institucional */}
              <div className={styles.linkCol}>
                <h4 className={styles.colTitle}>Institucional</h4>
                <ul className={styles.linkList}>
                  <li className={styles.linkItem}><a href="#sobre">Sobre Nós</a></li>
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
        </div>
      </footer>

      {/* Seção Lorem: 1440x47 */}
      <div className={styles.bottomBar} id="lorem" aria-label="Texto institucional">
        <div className={styles.bottomContent}>
          <span className={styles.bottomText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
        </div>
      </div>
    </>
  );
};
