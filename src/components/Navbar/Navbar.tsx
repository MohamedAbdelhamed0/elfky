'use client';

import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, MessageCircle } from 'lucide-react';
import { LanguageSwitcher } from '@/components/LanguageSwitcher/LanguageSwitcher';
import styles from './Navbar.module.css';

export function Navbar() {
  const t = useTranslations('common');
  const locale = useLocale();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/' as const, label: t('nav.home') },
    { href: '/about' as const, label: t('nav.about') },
    { href: '/services' as const, label: t('nav.services') },
    { href: '/contact' as const, label: t('nav.contact') },
  ];

  const isActive = (href: string) => {
    const cleanPath = pathname.replace(`/${locale}`, '') || '/';
    return cleanPath === href;
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand}>
          <div className={styles.logoWrapper}>
            <Image
              src="/images/logo.jpg"
              alt={t('brandName')}
              width={44}
              height={44}
              className={styles.brandLogo}
              priority
            />
          </div>
          <span className={styles.brandName}>{t('brandName')}</span>
        </Link>

        <div className={`${styles.navLinks} ${isMobileOpen ? styles.open : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${isActive(link.href) ? styles.active : ''}`}
            >
              {link.label}
              {isActive(link.href) && <span className={styles.activeDot} />}
            </Link>
          ))}
          <div className={styles.mobileActions}>
            <a
              href="https://wa.me/2010004442488"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileCallBtn}
            >
              <MessageCircle size={18} />
              <span>010004442488</span>
            </a>
            <LanguageSwitcher />
          </div>
        </div>

        <div className={styles.actions}>
          <a
            href="https://wa.me/2010004442488"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.quickContactBtn}
            title="WhatsApp: 010004442488"
          >
            <MessageCircle size={16} />
            <span className={styles.phoneText}>010004442488</span>
          </a>
          <LanguageSwitcher />
          <button
            className={styles.menuBtn}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div className={styles.overlay} onClick={() => setIsMobileOpen(false)} />
      )}
    </nav>
  );
}
