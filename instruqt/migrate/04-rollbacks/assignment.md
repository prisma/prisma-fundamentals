---
slug: rollbacks
id: fpytiaceghrt
type: challenge
title: Intro to Prisma Introspection
notes:
- type: text
  contents: |
    This lab uses the same basic configuration as the prior labs. Follow the instructions and use check button to check your work.
- type: text
  contents: |
    This first challenge covers introspecting an existing database to generate a schema file.

    Once the lab is finished loading, hit 'Start' in the bottom right.
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
1. Use the proper CLI command to create a new schema file. Docs: [Command Reference](https://www.prisma.io/docs/reference/api-reference/command-reference)
1. Edit the new schema file with VS Code and review the precreated definitions. Update the datasource definition to use a MySQL database with a url coming from the environment variable DATABASE_CONNECTION. Docs: [MySQL](https://www.prisma.io/docs/concepts/database-connectors/mysql)
1. Echo $DATABASE_CONNECTION to confirm that it's configured to "mysql://root:mysql@mysql:3306/mydb"
1. Use Introspection to configure data model from the existing database. Docs [Introspection](https://www.prisma.io/docs/concepts/components/introspection)