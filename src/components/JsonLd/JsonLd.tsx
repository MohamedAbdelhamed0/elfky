import { useLocale } from 'next-intl';

export function JsonLd() {
  const locale = useLocale();
  const isAr = locale === 'ar';

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: isAr ? 'مركز الفقي' : 'Al-Fky Center',
    alternateName: ['Al-Fky Center', 'مركز الفقي', 'مركز الفكي'],
    description: isAr
      ? 'مركز متخصص في صيانة الهواتف الذكية وأجهزة الآيفون بجميع إصداراتها تحت إشراف المهندس محمود الفقي'
      : 'Specialized smartphone and iPhone repair workshop by Engineer Mahmoud Elfky in Al Warraq, Giza',
    url: `https://elfky.com/${locale}`,
    telephone: '+2010004442488',
    sameAs: [
      'https://www.facebook.com/mahmoud.elfeky.779',
      'https://maps.app.goo.gl/CPBq9qsUmzgoJRjs7',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: isAr ? 'ش أحمد حسن' : 'Ahmed Hassan St.',
      addressLocality: isAr ? 'وراق العرب، الوراق' : 'Al Warraq',
      addressRegion: isAr ? 'محافظة الجيزة' : 'Giza Governorate',
      addressCountry: 'EG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.11806,
      longitude: 31.18417,
    },
    openingHours: 'Mo-Su 13:00-00:00',
    priceRange: '$$',
    image: 'https://elfky.com/images/logo.jpg',
    founder: {
      '@type': 'Person',
      name: isAr ? 'محمود الفقي' : 'Mahmoud Elfky',
      jobTitle: isAr ? 'مهندس صيانة أجهزة ذكية' : 'Smart Device Maintenance Engineer',
      image: 'https://elfky.com/images/mahmoud-elfky.jpg',
      sameAs: 'https://www.facebook.com/mahmoud.elfeky.779',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: isAr ? 'خدمات الصيانة' : 'Repair Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: isAr ? 'إصلاح شاشة الآيفون' : 'iPhone Screen Repair',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: isAr ? 'تبديل بطارية الآيفون' : 'iPhone Battery Replacement',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: isAr ? 'إصلاح اللوحة الأم' : 'Motherboard Repair',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: isAr ? 'إصلاح أضرار المياه' : 'Water Damage Recovery',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  );
}
