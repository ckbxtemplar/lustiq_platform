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
    ];
  },
};

export default nextConfig;
