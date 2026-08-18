'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/ar');
  }, [router]);

  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta httpEquiv="refresh" content="0;url=ar/" />
        <title>مركز الفقي | صيانة الأجهزة الذكية</title>
      </head>
      <body
        style={{
          backgroundColor: '#0A0F1C',
          color: '#00D4FF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          margin: 0,
          fontFamily: 'system-ui, sans-serif',
          fontSize: '1.25rem',
          fontWeight: 600,
        }}
      >
        <p>جاري التحميل... / Loading Al-Fky Center...</p>
      </body>
    </html>
  );
}
