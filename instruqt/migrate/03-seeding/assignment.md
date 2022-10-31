---
slug: seeding
id: lbx3qcth3ek3
type: challenge
title: Seeding
notes:
- type: text
  contents: |
    This next challenge covers seeding the database.
tabs:
- title: Code Editor
  type: service
  hostname: workstation
  port: 8080
difficulty: basic
timelimit: 600
---
Steps
======
1. Create a seed script at /app/prisma/seed.ts which creates the following users/posts. Docs: [How to Seed your Database](https://www.prisma.io/docs/guides/database/seed-database#how-to-seed-your-database-in-prisma)
    | Email          | Name | Posts              |
    |----------------|------|--------------------|
    | rich@prisma.io | Rich | title: 'What's new in Prisma'<br>content: 'https://www.prisma.io/blog/wnip-q2-2022-pmn7rulcj8x'<br>published: true |
    | jan@prisma.io  | Jan  | title: 'Check out Prisma with Next.js'<br>content: 'https://www.prisma.io/nextjs'<br>published: true |

1. Update /app/package.json with a seed command for Prisma. Docs: [How to Seed your Database](https://www.prisma.io/docs/guides/database/seed-database#how-to-seed-your-database-in-prisma)
1. Use proper CLI commands to reset the database and perform a migration. Docs: [Prisma Migrate in development and production](https://www.prisma.io/docs/concepts/components/prisma-migrate/migrate-development-production)
