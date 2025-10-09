'use client';

import {useTranslations} from 'next-intl';

export default function AboutPage() {
  const t = useTranslations();
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold">{t('about.title')}</h1>
      <p className="mt-3">{t('about.description')}</p>
    </main>
  );
}
