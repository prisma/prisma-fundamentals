---
slug: instantiate-client
id: lndonrvqnshg
type: challenge
title: Instantiate the Prisma Client
notes:
- type: text
  contents: |
    This lab uses the same basic configuration as the Prisma Schema lab. Follow the instructions and use check button to check your work.
- type: text
  contents: |
    This first challenge covers instantiating the client in your code.

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
1. Review the Prisma schema file in the Prisma directory to perform the following tasks.
1. Generate the Prisma Client from the command line. Docs: [Generating the Client](https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/generating-prisma-client)
1. Create an index.ts file in the /app/src directory. Import the Prisma Client from the directory in which it's generated and create a new const 'prisma' with this client. Docs: [Importing Prisma Client](https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/generating-prisma-client#importing-prisma-client)