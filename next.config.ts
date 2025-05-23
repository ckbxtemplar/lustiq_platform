import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
	experimental: {
    serverActions: {
      bodySizeLimit: '5mb',
    },
  },	
  async rewrites() {
    return [
      {
        source: "/:locale/course/:id",
        destination: "/:locale/courses/:id",
      },
      {
        source: "/:locale/dashboard/course/:id",
        destination: "/:locale/dashboard/courses/:id",
      },
      {
        source: '/:locale/course',
        destination: '/:locale/courses',
      },
      {
        source: '/:locale/dashboard/course',
        destination: '/:locale/dashboard/courses',
      },								
    ];
  },
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
    ],
  },	
};

const withNextIntl = createNextIntlPlugin('./app/i18n/request.ts');
export default withNextIntl(nextConfig);
