'use client';

import {useTranslations} from 'next-intl';

export default function HomePage() {
  const t = useTranslations();
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{t('home.title')}</h1>
      <p className="mt-4">{t('home.description')}</p>
    </main>
  );
}
