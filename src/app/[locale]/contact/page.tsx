'use client';

import { useTranslations } from 'next-intl';
import { useState, FormEvent } from 'react';
import { AnimatedSection } from '@/components/AnimatedSection/AnimatedSection';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import { Phone, MessageCircle, MapPin, Clock, Facebook, Send, ExternalLink } from 'lucide-react';
import styles from './Contact.module.css';

export default function ContactPage() {
  const t = useTranslations('contact');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `السلام عليكم، أنا ${formData.name || 'عميل'}%0Aرقم الهاتف: ${formData.phone || 'غير محدد'}%0Aتفاصيل العطل: ${formData.message || 'استفسار عن صيانة جهاز'}`;
    window.open(`https://wa.me/2010004442488?text=${text}`, '_blank');
  };

  const contactCards = [
    {
      key: 'phone',
      icon: <Phone size={24} />,
      href: 'tel:010004442488',
      actionText: t('info.phone.hint'),
      highlight: true,
    },
    {
      key: 'whatsapp',
      icon: <MessageCircle size={24} />,
      href: 'https://wa.me/2010004442488',
      actionText: t('info.whatsapp.hint'),
      highlight: true,
      whatsapp: true,
    },
    {
      key: 'facebook',
      icon: <Facebook size={24} />,
      href: 'https://www.facebook.com/mahmoud.elfeky.779',
      actionText: t('info.facebook.hint'),
      facebook: true,
    },
    {
      key: 'address',
      icon: <MapPin size={24} />,
      href: 'https://maps.app.goo.gl/CPBq9qsUmzgoJRjs7',
      actionText: t('info.address.hint'),
    },
    {
      key: 'hours',
      icon: <Clock size={24} />,
      actionText: t('info.hours.hint'),
    },
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

      {/* Contact Info Cards */}
      <section className="section">
        <div className="container">
          <div className={styles.cardsGrid}>
            {contactCards.map((card, index) => {
              const CardInner = (
                <div
                  className={`${styles.contactCard} ${card.highlight ? styles.cardHighlight : ''} ${card.whatsapp ? styles.cardWhatsapp : ''} ${card.facebook ? styles.cardFacebook : ''}`}
                >
                  <div className={styles.cardIcon}>{card.icon}</div>
                  <h3 className={styles.cardTitle}>{t(`info.${card.key}.title`)}</h3>
                  <p className={styles.cardValue}>{t(`info.${card.key}.value`)}</p>
                  {card.actionText && (
                    <span className={styles.cardHint}>
                      {card.actionText} {card.href && <ExternalLink size={12} />}
                    </span>
                  )}
                </div>
              );

              return (
                <AnimatedSection key={card.key} delay={index * 0.08}>
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.href.startsWith('http') ? '_blank' : undefined}
                      rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={styles.cardLink}
                    >
                      {CardInner}
                    </a>
                  ) : (
                    CardInner
                  )}
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map + Form */}
      <section className="section">
        <div className="container">
          <div className={styles.mapFormGrid}>
            {/* Map */}
            <AnimatedSection direction="left">
              <div className={styles.mapSection}>
                <h3 className={styles.mapTitle}>{t('map.title')}</h3>
                <p className={styles.mapSubtitle}>{t('map.subtitle')}</p>
                <div className={styles.mapWrapper}>
                  <iframe
                    src="https://www.google.com/maps?q=30.11806,31.18417&z=15&output=embed"
                    width="100%"
                    height="420"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Al-Fky Center Location"
                    className={styles.mapIframe}
                  />
                </div>
                <div className={styles.mapFooter}>
                  <a
                    href="https://maps.app.goo.gl/CPBq9qsUmzgoJRjs7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    <MapPin size={16} />
                    <span>Google Maps</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection direction="right">
              <div className={styles.formSection}>
                <h3 className={styles.formTitle}>{t('form.title')}</h3>
                <p className={styles.formSubtitle}>{t('form.subtitle')}</p>
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label htmlFor="contact-name" className={styles.formLabel}>
                      {t('form.name')}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={styles.formInput}
                      placeholder={t('form.namePlaceholder')}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="contact-phone" className={styles.formLabel}>
                      {t('form.phone')}
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={styles.formInput}
                      placeholder={t('form.phonePlaceholder')}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="contact-message" className={styles.formLabel}>
                      {t('form.message')}
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={styles.formTextarea}
                      placeholder={t('form.messagePlaceholder')}
                    />
                  </div>
                  <button type="submit" className="btn-primary">
                    <MessageCircle size={18} />
                    <span>{t('form.submit')}</span>
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
