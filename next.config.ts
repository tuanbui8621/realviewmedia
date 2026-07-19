// next.config.ts (Root folder)
import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  async redirects() {
    const publicRequestOnly = [
      {
        type: 'header' as const,
        key: 'x-next-intl-locale',
      },
    ];

    return [
      {
        source: '/en',
        destination: '/',
        permanent: true,
        missing: publicRequestOnly,
      },
      {
        source: '/en/:path*',
        destination: '/:path*',
        permanent: true,
        missing: publicRequestOnly,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
