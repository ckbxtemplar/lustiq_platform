import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
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
