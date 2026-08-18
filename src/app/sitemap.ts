import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE_URL = 'https://elfky.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['ar', 'en'];
  const routes = ['', '/about', '/services', '/contact'];

  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1.0 : 0.8,
        alternates: {
          languages: {
            ar: `${BASE_URL}/ar${route}`,
            en: `${BASE_URL}/en${route}`,
          },
        },
      });
    }
  }

  return entries;
}
