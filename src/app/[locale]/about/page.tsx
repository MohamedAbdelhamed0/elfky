'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { AnimatedSection } from '@/components/AnimatedSection/AnimatedSection';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import {
  Smartphone,
  Cpu,
  Bug,
  TabletSmartphone,
  HardDrive,
  CircuitBoard,
  MessageCircle,
  Phone,
  Facebook,
  Award,
} from 'lucide-react';
import styles from './About.module.css';

export default function AboutPage() {
  const t = useTranslations('about');
  const tc = useTranslations('common');

  const skills = [
    { key: 'iphoneRepair', icon: <Smartphone size={22} />, level: 95 },
    { key: 'microSoldering', icon: <CircuitBoard size={22} />, level: 90 },
    { key: 'softwareTroubleshooting', icon: <Bug size={22} />, level: 85 },
    { key: 'androidRepair', icon: <TabletSmartphone size={22} />, level: 80 },
    { key: 'dataRecovery', icon: <HardDrive size={22} />, level: 75 },
    { key: 'boardRepair', icon: <Cpu size={22} />, level: 88 },
  ];

  const milestones = ['milestone1', 'milestone2', 'milestone3', 'milestone4'] as const;

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

      {/* Bio */}
      <section className="section">
        <div className="container">
          <div className={styles.bioGrid}>
            <AnimatedSection direction="left">
              <div className={styles.bioAvatar}>
                <div className={styles.avatarImageWrapper}>
                  <Image
                    src="/images/mahmoud-elfky.jpg"
                    alt={t('bio.title')}
                    width={320}
                    height={380}
                    className={styles.avatarImage}
                    priority
                  />
                  <div className={styles.avatarBadge}>
                    <Award size={16} />
                    <span>iPhone Expert</span>
                  </div>
                </div>
                <div className={styles.avatarGlow} />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className={styles.bioText}>
                <h2 className={styles.bioName}>{t('bio.title')}</h2>
                <p className={styles.bioRole}>{t('bio.role')}</p>
                <p className={styles.bioDesc}>{t('bio.description')}</p>
                <p className={styles.bioDesc}>{t('bio.description2')}</p>

                <div className={styles.bioActions}>
                  <a
                    href="https://wa.me/2010004442488"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <MessageCircle size={18} />
                    <span>{tc('cta.whatsapp')}</span>
                  </a>
                  <a
                    href="tel:010004442488"
                    className="btn-outline"
                  >
                    <Phone size={18} />
                    <span>010004442488</span>
                  </a>
                  <a
                    href="https://www.facebook.com/mahmoud.elfeky.779"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.facebookBtn}
                    aria-label="Facebook Profile"
                  >
                    <Facebook size={18} />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className={`section ${styles.skillsSection}`}>
        <div className="container">
          <AnimatedSection>
            <SectionTitle
              title={t('skills.title')}
              subtitle={t('skills.subtitle')}
            />
          </AnimatedSection>
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <AnimatedSection key={skill.key} delay={index * 0.08}>
                <div className={styles.skillCard}>
                  <div className={styles.skillHeader}>
                    <div className={styles.skillIcon}>{skill.icon}</div>
                    <span className={styles.skillName}>
                      {t(`skills.${skill.key}` as any)}
                    </span>
                    <span className={styles.skillPercent}>{skill.level}%</span>
                  </div>
                  <div className={styles.skillBarBg}>
                    <div
                      className={styles.skillBar}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <SectionTitle
              title={t('experience.title')}
              subtitle={t('experience.subtitle')}
            />
          </AnimatedSection>
          <div className={styles.timeline}>
            {milestones.map((key, index) => (
              <AnimatedSection key={key} delay={index * 0.15}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineCard}>
                    <span className={styles.timelineYear}>
                      {t(`experience.${key}.year`)}
                    </span>
                    <h3 className={styles.timelineTitle}>
                      {t(`experience.${key}.title`)}
                    </h3>
                    <p className={styles.timelineDesc}>
                      {t(`experience.${key}.description`)}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
