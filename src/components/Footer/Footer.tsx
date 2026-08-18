import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { MapPin, Clock, Phone, MessageCircle, Facebook } from 'lucide-react';
import styles from './Footer.module.css';

export function Footer() {
  const t = useTranslations('common');
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.gradientBorder} />
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.col}>
            <Link href="/" className={styles.brand}>
              <div className={styles.logoWrapper}>
                <Image
                  src="/images/logo.jpg"
                  alt={t('brandName')}
                  width={48}
                  height={48}
                  className={styles.brandLogo}
                />
              </div>
              <span className={styles.brandName}>{t('brandName')}</span>
            </Link>
            <p className={styles.description}>{t('footer.description')}</p>
            <div className={styles.socialRow}>
              <a
                href="https://www.facebook.com/mahmoud.elfeky.779"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                title="Facebook: Mahmoud Elfky"
                aria-label="Facebook"
              >
                <Facebook size={18} />
                <span>Facebook</span>
              </a>
              <a
                href="https://wa.me/2010004442488"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialBtn} ${styles.whatsappBtn}`}
                title="WhatsApp: 010004442488"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>{t('footer.quickLinks')}</h4>
            <div className={styles.linksList}>
              <Link href="/" className={styles.footerLink}>{t('nav.home')}</Link>
              <Link href="/about" className={styles.footerLink}>{t('nav.about')}</Link>
              <Link href="/services" className={styles.footerLink}>{t('nav.services')}</Link>
              <Link href="/contact" className={styles.footerLink}>{t('nav.contact')}</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>{t('footer.contactInfo')}</h4>
            <div className={styles.contactItems}>
              <a
                href="tel:010004442488"
                className={styles.contactItemLink}
              >
                <Phone size={18} className={styles.contactIcon} />
                <span className={styles.phoneLtr}>010004442488</span>
              </a>
              <a
                href="https://maps.app.goo.gl/CPBq9qsUmzgoJRjs7"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactItemLink}
              >
                <MapPin size={18} className={styles.contactIcon} />
                <span>{t('footer.address')}</span>
              </a>
              <div className={styles.contactItem}>
                <Clock size={18} className={styles.contactIcon} />
                <span>{t('footer.workingHoursValue')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            {t('footer.copyright', { year: year.toString() })}
          </p>
          <p className={styles.madeWith}>{t('footer.madeWith')}</p>
        </div>
      </div>
    </footer>
  );
}
