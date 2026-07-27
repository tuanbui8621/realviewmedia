// next.config.ts (Root folder)
import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  skipTrailingSlashRedirect: true,
  async rewrites() {
    return [
      {
        source: '/MaiHouseSaigon',
        destination: '/MaiHouseSaigon/index.html',
      },
      {
        source: '/OakwoodResidence',
        destination: '/OakwoodResidence/index.html',
      },
      {
        source: '/HongHome',
        destination: '/HongHome/index.html',
      },
      {
        source: '/Richlane',
        destination: '/Richlane/index.html',
      },
    ];
  },
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
