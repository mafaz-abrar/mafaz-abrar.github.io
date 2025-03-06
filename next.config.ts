import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: '/mafaz-abrar.github.io/',
  basePath: '/mafaz-abrar.github.io',
  output: 'export',
};

export default nextConfig;
