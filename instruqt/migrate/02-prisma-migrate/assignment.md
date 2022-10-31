---
slug: prisma-migrate
id: 5tm1uykjlu7g
type: challenge
title: Intro to Prisma Migrate
notes:
- type: text
  contents: |
    This next challenge covers using Prisma Migrate to update the database from the Prisma Schema file.
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
1. The database has been deleted. Use Prisma migrate to update the dev database back to an initial state based on the schema. Docs: [Migrate](https://www.prisma.io/docs/concepts/components/prisma-migrate/migrate-development-production)
1. Update the Prisma Schema file to add a new model 'Comment' with the following characteristics. Docs: [Data Model](https://www.prisma.io/docs/concepts/components/prisma-schema/data-model)
    | Field Name | Type   | Attributes              |
    |------------|--------|-------------------------|
    | id         | Int    | id and autoincrement    |
    | authorId   | Int    |                         |
    | User       | User   | relation using authorId |
    | postId     | Int    |                         |
    | post       | Post   | relation using postId   |
    | content    | String |                         |

1. Use Prisma migrate to update the database with the new schema. Docs: [Migrate](https://www.prisma.io/docs/concepts/components/prisma-migrate/migrate-development-production)
1. Change DATABASE_CONNECTION to: "mysql://root:mysql@mysql-prod:3306/mydb" and use Prisma migrate to deploy generated schema files to production. Docs: [Migrate](https://www.prisma.io/docs/concepts/components/prisma-migrate/migrate-development-production)