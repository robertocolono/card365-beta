import {IntlProvider} from 'next-intl';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  const locale = params.locale;
  // Carica i messaggi corrispondenti alla lingua
  const messages = (await import(`../../locales/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body>
        <IntlProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </IntlProvider>
      </body>
    </html>
  );
}
