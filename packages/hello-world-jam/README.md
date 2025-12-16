# Hello World Jam

## About This Project

This is a modern web application featuring an animated orange aurora background effect. The project demonstrates the power of combining Next.js with Tailwind CSS to create visually stunning, performant web experiences. Built with the latest web technologies, it showcases smooth animations and responsive design principles.

The application serves as a foundation for building interactive web experiences. It leverages Next.js 15's App Router architecture, providing optimal performance through server-side rendering and automatic code splitting. The clean, minimal design allows for easy customization and extension to meet various project requirements.

At its core, this project emphasizes developer experience and modern best practices. The codebase is structured for maintainability, with clear separation of concerns and TypeScript support throughout. Every component is designed to be reusable and easily adaptable for different use cases.

The animated background system uses CSS animations and Tailwind's utility classes to create a mesmerizing visual effect. Multiple layers of animated gradients blend together to produce a dynamic, ever-changing backdrop that adds depth and visual interest without compromising performance or accessibility.

This template is production-ready and configured for deployment on Cloudflare Pages. It includes comprehensive CORS configuration, webview compatibility, and all the necessary optimizations for modern web deployment. Whether you're building a landing page, portfolio, or full-featured application, this foundation provides everything you need to get started quickly.

## Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and configured for Cloudflare Pages deployment.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Webview & CORS Configuration

This template is configured with **universal CORS and iframe embedding** for maximum compatibility:

### 🌐 Simple Universal Access
- **All Routes & Assets**: Wildcard CORS allowing any origin, method, and headers
- **No File Type Restrictions**: Works with any file format your project uses
- **Iframe Ready**: `Content-Security-Policy: frame-ancestors *` allows embedding in any iframe
- **Webview Ready**: Configured for embedding in any container or webview
- **Development Friendly**: Works across any port, domain, or subdomain

### 🚀 Works Everywhere
- Any localhost port (`localhost:3000`, `localhost:8080`, etc.)
- Any subdomain pattern (`*.localhost`, `*.nullshot.dev`, etc.)
- Webview containers (Electron, VSCode, browser iframes)
- Cross-origin development scenarios
- CDN and edge deployments

### Environment Variables

Create a `.env.local` file for local development:

```bash
# Next.js Environment (for Cloudflare deployment)
NEXTJS_ENV=development

# Optional: Override CORS settings if needed
# CORS_ALLOWED_ORIGINS=http://localhost:3000,https://yourdomain.com
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



