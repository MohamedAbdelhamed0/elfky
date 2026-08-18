import { ReactNode } from 'react';
import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'center' | 'start';
  children?: ReactNode;
}

export function SectionTitle({ title, subtitle, align = 'center' }: SectionTitleProps) {
  return (
    <div className={`${styles.wrapper} ${align === 'start' ? styles.alignStart : ''}`}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.accent} />
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
