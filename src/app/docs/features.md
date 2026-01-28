---
title: "Product Features"
category: "Features"
order: 1
---
<!-- 
Check ../docs_writer_prompt.md before changing this file.
-->

# Key Features

Axebase provides powerful tools for building AI workflows.

## Workflows

Visual, node-based automation designed with XYFlow.

- **Drag-and-Drop Editor**: Create complex flows without code.
- **Persistent State**: Workflows are saved to the database.
- **Execution History**: Track every run, including logs and errors.

## Nodes

Nodes are the building blocks of a workflow.

### Trigger Nodes
- **Manual Trigger**: Initiates a workflow on user action.

### Action Nodes
- **HTTP Request**: Send data to external APIs.
- **AI Integration**: (Coming Soon) Nodes for OpenAI, Anthropic, and Gemini.

## API & Type Safety

Built on tRPC for full specific type safety.

- **End-to-End Types**: Frontend shares types with the backend.
- **Prisma ORM**: Type-safe database queries.

## Authentication

Secure user management with Better Auth.
- **Sessions**: Secure cookie-based sessions.
- **Providers**: Extensible for OAuth providers.
- **Middleware**: Protected API routes and pages.
