'use client';

import { useTranslations } from 'next-intl';
import { AnimatedSection } from '@/components/AnimatedSection/AnimatedSection';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import { ServiceCard } from '@/components/ServiceCard/ServiceCard';
import {
  Smartphone,
  Battery,
  Cpu,
  Droplets,
  RotateCcw,
  TabletSmartphone,
  Tablet,
  HardDrive,
  Unlock,
  ShoppingBag,
} from 'lucide-react';
import styles from './Services.module.css';

export default function ServicesPage() {
  const t = useTranslations('services');

  const services = [
    { key: 'iphoneScreen', icon: <Smartphone size={28} /> },
    { key: 'iphoneBattery', icon: <Battery size={28} /> },
    { key: 'motherboard', icon: <Cpu size={28} /> },
    { key: 'waterDamage', icon: <Droplets size={28} /> },
    { key: 'softwareRepair', icon: <RotateCcw size={28} /> },
    { key: 'androidRepair', icon: <TabletSmartphone size={28} /> },
    { key: 'tabletRepair', icon: <Tablet size={28} /> },
    { key: 'dataRecovery', icon: <HardDrive size={28} /> },
    { key: 'phoneUnlocking', icon: <Unlock size={28} /> },
    { key: 'accessories', icon: <ShoppingBag size={28} /> },
  ];

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroOrb} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <AnimatedSection>
            <SectionTitle
              title={t('hero.title')}
              subtitle={t('hero.subtitle')}
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {services.map((service, index) => (
              <AnimatedSection key={service.key} delay={index * 0.06}>
                <ServiceCard
                  icon={service.icon}
                  title={t(`items.${service.key}.title`)}
                  description={t(`items.${service.key}.description`)}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
