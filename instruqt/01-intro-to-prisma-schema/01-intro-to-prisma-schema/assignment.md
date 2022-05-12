---
slug: intro-to-prisma-schema
id: kgmexi8se4ql
type: challenge
title: Intro to Prisma Schema
tabs:
- title: Code Editor
  type: service
  hostname: workstation
  port: 8443
- title: Terminal
  type: terminal
  hostname: workstation
- title: App
  type: service
  hostname: workstation
  port: 3000
difficulty: basic
timelimit: 6000
---
Step 1
======
Open a terminal and change directory to /root/training/example-app/backend.

Use `npx prisma init` to create a new schema file.

Edit the new schema file with VS Code and review the precreated definitions. Modify the generator definition to use the "prisma-client-js" provider and output to "../src/generated/client". Modify the datasource definition to use sqlite at "./dev.db"

Links:
https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/generating-prisma-client
https://www.prisma.io/docs/concepts/database-connectors/sqlite

Step 2
======
Create a model for "User" with the following fields:
| Field Name | Type   | Attributes           |
|------------|--------|----------------------|
| id         | int    | id and autoincrement |
| email      | string | unique               |
| name       | string | optional             |

Links:
https://www.prisma.io/docs/concepts/components/prisma-schema/data-model#optional-and-mandatory-fields