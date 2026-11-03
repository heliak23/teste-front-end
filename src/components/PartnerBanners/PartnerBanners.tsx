import React from 'react';
import styles from './PartnerBanners.module.scss';

interface PartnerBannersProps {
  title?: string;
  onBannerClick?: (bannerIndex: number) => void;
}

export const PartnerBanners: React.FC<PartnerBannersProps> = ({
  title = 'Parceiros',
  onBannerClick,
}) => {
  return (
    <section className={styles.partnerSection} aria-label="Banners de Parceiros">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.bannerCard}>
            <div className={styles.content}>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.description}>
                Lorem ipsum dolor sit <br />
                amet, consectetur
              </p>
              <button
                type="button"
                className={styles.button}
                onClick={() => onBannerClick?.(1)}
              >
                CONFIRA
              </button>
            </div>
          </div>

          <div className={styles.bannerCard}>
            <div className={styles.content}>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.description}>
                Lorem ipsum dolor sit <br />
                amet, consectetur
              </p>
              <button
                type="button"
                className={styles.button}
                onClick={() => onBannerClick?.(2)}
              >
                CONFIRA
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

