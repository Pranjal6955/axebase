---
title: "Quickstart"
category: "Getting Started"
order: 1
---
<!-- 
Check ../docs_writer_prompt.md before changing this file.
-->

# Quickstart

Set up Axebase locally in minutes.

## Prerequisites

- **Node.js**: v20 or higher.
- **PostgreSQL**: Running instance.
- **Package Manager**: npm, yarn, or pnpm.

## Installation

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Pranjal6955/axebase.git
    cd axebase
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment**
    Copy the example configuration:
    ```bash
    cp .env.example .env
    ```
    Populate `.env` with your `DATABASE_URL` and other secrets.

4.  **Setup Database**
    Push the schema to your database:
    ```bash
    npx prisma db push
    ```

5.  **Run Development Server**
    Start the app:
    ```bash
    npm run dev
    ```
    Access the app at `http://localhost:3000`.

## Next Steps

- Explore [Deployment](deployment.md) options.
- Learn about [Workflows](../pages/workflows.md).
