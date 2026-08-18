
import { Link } from '@/i18n/navigation';
import styles from './Home.module.css';

export default function NotFound() {
  return (
    <section className={styles.hero} style={{ textAlign: 'center' }}>
      <div className="container" style={{ paddingTop: '8rem' }}>
        <h1 style={{
          fontSize: 'var(--font-size-7xl)',
          fontWeight: 900,
          background: 'var(--color-accent-gradient)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: 'var(--space-md)'
        }}>
          404
        </h1>
        <p style={{
          fontSize: 'var(--font-size-xl)',
          color: 'var(--color-text-secondary)',
          marginBottom: 'var(--space-2xl)'
        }}>
          Page not found | الصفحة غير موجودة
        </p>
        <Link href="/" className="btn-primary">
          ← Home / الرئيسية
        </Link>
      </div>
    </section>
  );
}
