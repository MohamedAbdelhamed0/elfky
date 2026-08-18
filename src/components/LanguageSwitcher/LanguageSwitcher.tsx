'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import styles from './LanguageSwitcher.module.css';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('common');

  const switchLocale = () => {
    const nextLocale = locale === 'ar' ? 'en' : 'ar';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      onClick={switchLocale}
      className={styles.switcher}
      aria-label={`Switch to ${locale === 'ar' ? 'English' : 'Arabic'}`}
    >
      <span className={styles.flag}>
        {locale === 'ar' ? '🇬🇧' : '🇪🇬'}
      </span>
      <span className={styles.label}>{t('language')}</span>
    </button>
  );
}
