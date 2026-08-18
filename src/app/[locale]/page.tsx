'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Battery,
  Cpu,
  Droplets,
  Shield,
  Clock,
  Award,
  Sparkles,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection/AnimatedSection';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import { ServiceCard } from '@/components/ServiceCard/ServiceCard';
import styles from './Home.module.css';

function CounterStat({ value, label, delay }: { value: number; label: string; delay: number }) {
  return (
    <motion.div
      className={styles.stat}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <span className={styles.statValue}>{value}+</span>
      <span className={styles.statLabel}>{label}</span>
    </motion.div>
  );
}

export default function HomePage() {
  const t = useTranslations('home');
  const tc = useTranslations('common');
  const ts = useTranslations('services');

  const featuredServices = [
    { icon: <Smartphone size={28} />, key: 'iphoneScreen' as const },
    { icon: <Battery size={28} />, key: 'iphoneBattery' as const },
    { icon: <Cpu size={28} />, key: 'motherboard' as const },
    { icon: <Droplets size={28} />, key: 'waterDamage' as const },
  ];

  const whyUsItems = [
    { icon: <Award size={32} />, key: 'certified' as const },
    { icon: <Clock size={32} />, key: 'fast' as const },
    { icon: <Shield size={32} />, key: 'warranty' as const },
    { icon: <Sparkles size={32} />, key: 'genuine' as const },
  ];

  return (
    <>
      {/* ====== HERO SECTION ====== */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroOrb1} />
          <div className={styles.heroOrb2} />
          <div className={styles.heroGrid} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <motion.div
            className={styles.heroBadge}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('hero.badge')}
          </motion.div>
          <motion.p
            className={styles.heroGreeting}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('hero.greeting')}
          </motion.p>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            {t('hero.subtitle')}
          </motion.p>
          <motion.p
            className={styles.heroDesc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            {t('hero.description')}
          </motion.p>
          <motion.div
            className={styles.heroActions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <Link href="/services" className="btn-primary">
              {tc('cta.viewServices')} <ChevronRight size={18} />
            </Link>
            <Link href="/contact" className="btn-outline">
              {tc('cta.getInTouch')} <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ====== STATS SECTION ====== */}
      <section className={styles.statsSection}>
        <div className={`container ${styles.statsGrid}`}>
          <CounterStat value={6} label={t('stats.experience')} delay={0} />
          <CounterStat value={3000} label={t('stats.devicesRepaired')} delay={0.1} />
          <CounterStat value={2500} label={t('stats.happyCustomers')} delay={0.2} />
          <CounterStat value={15} label={t('stats.iphoneModels')} delay={0.3} />
        </div>
      </section>

      {/* ====== FEATURED SERVICES ====== */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <SectionTitle
              title={t('featured.title')}
              subtitle={t('featured.subtitle')}
            />
          </AnimatedSection>
          <div className={styles.servicesGrid}>
            {featuredServices.map((service, index) => (
              <AnimatedSection key={service.key} delay={index * 0.1}>
                <ServiceCard
                  icon={service.icon}
                  title={ts(`items.${service.key}.title`)}
                  description={ts(`items.${service.key}.description`)}
                />
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.4}>
            <div className={styles.servicesAction}>
              <Link href="/services" className="btn-outline">
                {tc('cta.viewServices')} <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ====== WHY CHOOSE US ====== */}
      <section className={`section ${styles.whyUsSection}`}>
        <div className="container">
          <AnimatedSection>
            <SectionTitle
              title={t('whyUs.title')}
              subtitle={t('whyUs.subtitle')}
            />
          </AnimatedSection>
          <div className={styles.whyUsGrid}>
            {whyUsItems.map((item, index) => (
              <AnimatedSection key={item.key} delay={index * 0.1}>
                <div className={styles.whyUsCard}>
                  <div className={styles.whyUsIcon}>{item.icon}</div>
                  <h3 className={styles.whyUsTitle}>{t(`whyUs.${item.key}.title`)}</h3>
                  <p className={styles.whyUsDesc}>{t(`whyUs.${item.key}.description`)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA BANNER ====== */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <div className={styles.ctaBanner}>
              <div className={styles.ctaBannerBg} />
              <h2 className={styles.ctaBannerTitle}>{t('ctaBanner.title')}</h2>
              <p className={styles.ctaBannerDesc}>{t('ctaBanner.description')}</p>
              <Link href="/contact" className="btn-primary">
                {t('ctaBanner.button')} <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
