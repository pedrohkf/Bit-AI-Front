import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['example.com'], 
  },

  i18n: {
    locales: ['en', 'pt-br'], 
    defaultLocale: 'pt-br',   
  },
};

export default nextConfig;