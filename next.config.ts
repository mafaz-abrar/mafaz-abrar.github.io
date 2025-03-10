import type { NextConfig } from 'next';

const isProduction: boolean = process.env.NODE_ENV == 'production';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  output: 'export',
};

export default nextConfig;
