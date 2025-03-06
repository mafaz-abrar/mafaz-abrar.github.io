import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  output: 'export',
  basePath: '/mafaz-abrar.github.io',
  assetPrefix: '/mafaz-abrar.github.io',
};

export default nextConfig;
