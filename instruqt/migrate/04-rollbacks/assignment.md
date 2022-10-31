---
slug: rollbacks
id: fpytiaceghrt
type: challenge
title: Rolling back with Prisma
notes:
- type: text
  contents: |
    This next challenge covers rolling back changes using Prisma Migrate.
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
1. A failed migration has been applied against the database. Create a down migration using the proper diff command against the database and save it to /app/down.sql Docs: [Generating Down Migrations](https://www.prisma.io/docs/guides/database/developing-with-prisma-migrate/generating-down-migrations)
1. Apply the proper cli commands to apply the down migration against the database and record the changes. Docs: [Generating Down Migrations](https://www.prisma.io/docs/guides/database/developing-with-prisma-migrate/generating-down-migrations)