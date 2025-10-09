/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'it', 'ja'],
    defaultLocale: 'en'
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true }
};

export default nextConfig;
