import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	experimental: {
    serverActions: {
      bodySizeLimit: '5mb',
    },
  },	
  async rewrites() {
    return [
      {
        source: "/course/:id",
        destination: "/courses/:id",
      },
      {
        source: "/dashboard/course/:id",
        destination: "/dashboard/courses/:id",
      }			
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

export default nextConfig;
