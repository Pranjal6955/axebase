<div align="center">
  <img src="public/logos/logo.png" alt="Axebase Logo" width="120" height="120" />
  <h1>Axebase</h1>
  <p><strong>A high-performance AI integration platform for building automated workflows.</strong></p>

  <div align="center">
    <a href="https://nextjs.org">
      <picture>
        <source media="(prefers-color-scheme: dark)" srcset="public/integrationLogo/Next.js-white.svg">
        <img src="public/integrationLogo/Next.js.svg" width="40" height="40" alt="Next.js" />
      </picture>
    </a>
    &nbsp;&nbsp;
    <a href="https://tailwindcss.com">
      <img src="public/integrationLogo/Tailwind CSS.svg" width="40" height="40" alt="Tailwind CSS" />
    </a>
    &nbsp;&nbsp;
    <a href="https://prisma.io">
      <img src="public/integrationLogo/Prisma.svg" width="40" height="40" alt="Prisma" />
    </a>
    &nbsp;&nbsp;
    <a href="https://trpc.io">
      <img src="public/integrationLogo/trpc.svg" width="40" height="40" alt="tRPC" />
    </a>
    &nbsp;&nbsp;
    <a href="https://inngest.com">
      <img src="public/integrationLogo/InngestLogo.png" width="40" height="40" alt="Inngest" />
    </a>
    &nbsp;&nbsp;
    <a href="https://sentry.io">
      <img src="public/integrationLogo/sentry-glyph-dark-400x367.svg" width="40" height="40" alt="Sentry" />
    </a>
    &nbsp;&nbsp;
    <a href="https://polar.sh">
      <img src="public/integrationLogo/PolarLogo.png" width="40" height="40" alt="Polar" />
    </a>
    &nbsp;&nbsp;
    <a href="https://better-auth.com">
      <img src="public/integrationLogo/better-auth_light.svg" width="40" height="40" alt="Better Auth" />
    </a>
  </div>
</div>

---

## 🚀 Overview

Axebase is a modern, full-stack application designed for building and managing AI-driven workflows. It leverages the latest web technologies to provide a seamless experience for integrating multiple AI models and automating complex tasks.

## ✨ Features

- **Multi-LLM Support**: Integrated with OpenAI, Anthropic, and Google Gemini via Vercel AI SDK.
- **Visual Workflows**: Interactive node-based interface powered by XYFlow.
- **Reliable Automation**: Background job processing and workflow management with Inngest.
- **Type-Safe API**: End-to-end type safety using tRPC.
- **Robust Auth**: Secure authentication powered by Better Auth.

## 🛠️ Tech Stack

### Frontend & Core
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Turbopack)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Components**: Radix UI & Shadcn/ui

### Backend & Database
- **API**: [tRPC](https://trpc.io/)
- **ORM**: [Prisma](https://www.prisma.io/) (Postgres)
- **Workflows**: [Inngest](https://www.inngest.com/)
- **Authentication**: [Better Auth](https://better-auth.com/)

### AI & Tools
- **AI SDK**: [Vercel AI SDK](https://sdk.vercel.ai/)
- **Monitoring**: [Sentry](https://sentry.io/)
- **Linting/Formatting**: [Biome](https://biomejs.dev/)

---

## 🛠️ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js 20+ 
- npm / yarn / pnpm
- A PostgreSQL database

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Pranjal6955/axebase.git
   cd axebase
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Copy the example environment file and add your configuration:
   ```bash
   cp .env.example .env
   ```
   Open `.env` and provide your Database URL, AI API keys, and other required credentials.

4. **Prepare Database**
   ```bash
   npx prisma db push
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🏗️ Commands

- `npm run dev` - Starts the development server with Turbopack.
- `npm run build` - Builds the application for production.
- `npm run start` - Starts the production server.
- `npm run lint` - Lints the codebase using Biome.
- `npm run format` - Formats the codebase using Biome.
- `npm run inngest:dev` - Starts the Inngest development server.
- `npm run dev:all` - Starts all development processes (mprocs).

---

<div align="center">
  Built with ❤️ by the Axebase Team
</div>
