# Mafaz Abrar's Resume

Instead of creating a paper resume, I decided to build and host my own! This is a
[Next.js](https://nextjs.org) project bootstrapped with
[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


## Dev

For local deugging:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.


## Deploy on GitHub Pages

To deploy this app on GitHub Pages, I needed to:

1. Install the gh-pages packages.

2. Add the following NextJS configs in next.config.ts:
```typescript
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  output: 'export',
  basePath: '/mafaz-abrar.github.io',
  assetPrefix: '/mafaz-abrar.github.io',
};
```

3. Add the following scripts in package.json:
```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "predeploy": "next build && touch ./out/.nojekyll",
    "deploy": "gh-pages -d out --dotfiles"
  },
}
```

4. Run `npm run predeploy && npm run deploy`.