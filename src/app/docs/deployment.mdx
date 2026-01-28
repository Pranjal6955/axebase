---
title: "Deployment"
category: "Getting Started"
order: 2
---
<!-- 
Check ../docs_writer_prompt.md before changing this file.
-->

# Deployment

Deploy Axebase to production.

## Vercel

Axebase is optimized for Vercel.

1.  Push your code to a Git repository.
2.  Import the project in Vercel.
3.  Configure Environment Variables in the Vercel dashboard.
4.  Deploy.

## Docker

Build a container image for any platform.

### Dockerfile

```dockerfile
# Use Node.js 20 on Alpine
FROM node:20-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN npx prisma generate
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
```

Build and run:

```bash
docker build -t axebase .
docker run -p 3000:3000 axebase
```

## Environment Variables

Ensure these are set in production:

- `DATABASE_URL`: PostgreSQL connection string.
- `BETTER_AUTH_SECRET`: Random string for session security.
- `NEXT_PUBLIC_APP_URL`: The URL of your deployed app.
- `INNGEST_SIGNING_KEY`: For background job verification.
- `INNGEST_EVENT_KEY`: For sending events.
- AI Provider Keys (e.g., `OPENAI_API_KEY`).
