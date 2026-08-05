# Nextfolio

**[Live demo](https://nextfolio-five-mu.vercel.app/)**

A Next.js 16 feature showcase, built to learn the App Router by actually using it rather than reading about it. Each area of the site exercises a different part of the framework — caching, streaming, server actions, parallel routes, metadata — with the code kept small enough to read in one sitting.

Built with Next.js 16, React 19, Tailwind CSS 4, TypeScript, and Neon Postgres.

## What's in here

| Area | Next.js concepts | Where |
| --- | --- | --- |
| Home / About | Route groups, static rendering | [`app/(marketing)/`](app/(marketing)) |
| Blog index | `use cache`, `cacheLife`, `cacheTag`, on-demand `revalidateTag` | [`app/blog/page.tsx`](app/blog/page.tsx), [`lib/posts.ts`](lib/posts.ts) |
| Blog post | Streaming with Suspense, PPR, `generateStaticParams`, dynamic OG images | [`app/blog/[slug]/`](app/blog/[slug]) |
| Comments | Server actions, `useActionState`, `useOptimistic`, `updateTag` | [`components/CommentForm.tsx`](components/CommentForm.tsx), [`app/blog/actions.ts`](app/blog/actions.ts) |
| Likes | Route handlers, client-side optimistic UI, `revalidateTag` | [`components/LikeButton.tsx`](components/LikeButton.tsx), [`app/api/posts/[id]/like/`](app/api/posts/[id]/like) |
| Shop | Parallel + intercepting routes (click a product for a modal, deep-link for a full page) | [`app/shop/`](app/shop) |
| Dashboard | Auth gating via `proxy.ts`, cookie session, redirect-back-after-login | [`proxy.ts`](proxy.ts), [`app/login/`](app/login) |
| Throughout | `error.tsx` / `not-found.tsx` boundaries, `loading.tsx`, metadata, sitemap, robots | [`app/`](app) |

Two Next.js 16 specifics worth pointing out:

- **`proxy.ts`, not `middleware.ts`.** Next 16 renamed the convention; the exported function is `proxy`.
- **Cache Components are on.** [`next.config.ts`](next.config.ts) sets `cacheComponents: true`, so caching is expressed with the `use cache` directive plus `cacheLife`/`cacheTag` rather than route segment config or `fetch` options.

## Getting started

**Requirements:** Node.js >= 20.9 and a Postgres database. The comments and likes features need one — [Neon](https://neon.com) has a free tier and is what this is built against.

```bash
git clone https://github.com/nfb1799/nextfolio.git
cd nextfolio
npm install
```

Create `.env.local` in the project root:

```
DATABASE_URL=postgresql://...
SITE_URL=http://localhost:3000
```

Create the tables, then start the dev server:

```bash
npm run db:init
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

`DATABASE_URL` is required — [`lib/db.ts`](lib/db.ts) throws on startup if it is missing, rather than failing later at query time.

## Environment variables

| Variable | Required | Used for |
| --- | --- | --- |
| `DATABASE_URL` | Yes | Neon Postgres connection string, for comments and likes |
| `SITE_URL` | No | Absolute URLs in [`sitemap.ts`](app/sitemap.ts), [`robots.ts`](app/robots.ts), and `metadataBase`. Defaults to `http://localhost:3000` |

## Scripts

| Script | Does |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run dev:clean` | Clears `.next` first, then dev with Turbopack |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run db:init` | Creates the `comments` and `likes` tables if they don't exist |

## Deploying

Deploys to Vercel from `master`. The only manual step is adding `DATABASE_URL` and `SITE_URL` to the project's environment variables — provisioning Postgres through the Vercel dashboard's Storage tab sets `DATABASE_URL` automatically. Run `npm run db:init` once against the production database to create the tables.

## Notes

A few things are deliberately simplified, since the point is the framework rather than the product:

- **Login is fake.** It sets a `session=true` cookie with no credentials or user record. It exists to demonstrate `proxy.ts` gating and redirect-after-login — it is not authentication and nothing behind it is actually protected.
- **Blog posts come from [JSONPlaceholder](https://jsonplaceholder.typicode.com/).** Reads are cached, so the external API is hit rarely.
- **Products are a hardcoded array** in [`lib/products.ts`](lib/products.ts).
- **Comments and likes are real** and persist in Postgres. They were in-memory until Phase 13, which broke as soon as more than one serverless instance was involved.
