import { Inter, Noto_Kufi_Arabic } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing, Locale } from '@/i18n/routing';
import { Navbar } from '@/components/Navbar/Navbar';
import { Footer } from '@/components/Footer/Footer';
import { JsonLd } from '@/components/JsonLd/JsonLd';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp/FloatingWhatsApp';
import '../globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  variable: '--font-noto-kufi',
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  const title = isAr
    ? 'مركز الفقي | صيانة الأجهزة الذكية والآيفون'
    : 'Al-Fky Center | Smart Device & iPhone Repair Expert';
  const description = isAr
    ? 'مركز الفقي لصيانة الهواتف الذكية في وراق العرب، الجيزة. متخصصون في إصلاح الآيفون بجميع إصداراته. اتصل الآن: 010004442488.'
    : 'Al-Fky Center for smartphone and iPhone repair in Al Warraq, Giza. Expert engineer Mahmoud Elfky. Call 010004442488.';

  return {
    title: {
      default: title,
      template: `%s | ${isAr ? 'مركز الفقي' : 'Al-Fky Center'}`,
    },
    description,
    metadataBase: new URL('https://elfky.com'),
    alternates: {
      languages: {
        en: '/en',
        ar: '/ar',
      },
    },
    openGraph: {
      title,
      description,
      locale: isAr ? 'ar_EG' : 'en_US',
      type: 'website',
      siteName: isAr ? 'مركز الفقي' : 'Al-Fky Center',
      images: [
        {
          url: '/images/logo.jpg',
          width: 800,
          height: 800,
          alt: isAr ? 'شعار مركز الفقي' : 'Al-Fky Center Logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/logo.jpg'],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} className={`${inter.variable} ${notoKufiArabic.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <JsonLd />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
