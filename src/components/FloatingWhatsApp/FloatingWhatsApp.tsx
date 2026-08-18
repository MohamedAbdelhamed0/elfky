'use client';

import { MessageCircle, Phone } from 'lucide-react';
import styles from './FloatingWhatsApp.module.css';

export function FloatingWhatsApp() {
  return (
    <div className={styles.floatingContainer}>
      <a
        href="tel:010004442488"
        className={styles.callBtn}
        aria-label="Call 010004442488"
        title="010004442488"
      >
        <Phone size={22} />
      </a>
      <a
        href="https://wa.me/2010004442488"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappBtn}
        aria-label="Chat on WhatsApp 010004442488"
        title="WhatsApp: 010004442488"
      >
        <MessageCircle size={26} />
        <span className={styles.pulseRing} />
      </a>
    </div>
  );
}
