'use client';

import {useTranslations} from 'next-intl';

export default function Footer() {
  const t = useTranslations();
  return (
    <footer className="bg-gray-50 mt-8">
      <div className="container mx-auto p-4 text-center text-sm">{t('footer.text')}</div>
    </footer>
  );
}
