---
slug: intro-to-prisma-schema
id: dh8nvhpvbvpz
type: challenge
title: Intro to Prisma Schema
notes:
- type: text
  contents: |
    This training course is built on Instruqt. The training environment is being built now. Use the left and right buttons to navigate the instruction slides and then click start at that bottom right once the environment has loaded.
- type: text
  contents: |
    Instruqt includes instructions in a panel on the right, you can minimize that panel using the > arrow at the top of the panel. There are two tabs which you can click between, one for VSCode, and the other for interacting with the application once you've reached a lab where it has loaded.

    When you believe you have completed all of the steps click the "Check" button on the instruction panel to check your work. If Instruqt find something not completed correctly, it will provide you with a warning message at the bottom. You can then fix the issue and use the Check button again as many times as necessary.
- type: text
  contents: |
    This training course uses the VSCode Editor. The application for this lab is opened in VSCode. There is a terminal window for running commands built-in to VSCode at the bottom right. The Prisma VSCode plugin is already loaded to provide syntax highlighting in the Prisma Schema.
- type: text
  contents: |
    This lab is designed to encourage the use of Prisma's docs. Skim or search through the docs linked after each step to find the necessary information to solve that step.
- type: text
  contents: |
    Click the green start button below once it appears. Note that VS Code takes a few seconds to load after the rest of the training environment has appeared.
tabs:
- title: Code Editor
  type: service
  hostname: workstation
  port: 8080
- title: App
  type: service
  hostname: workstation
  port: 3000
difficulty: basic
timelimit: 600
---
Steps
======
1. Use the proper CLI command to create a new schema file. Docs: [Command Reference](https://www.prisma.io/docs/reference/api-reference/command-reference)
1. Edit the new schema file with VS Code and review the precreated definitions. Notice that the generator defaults to using the correct "prisma-client-js" provider. Now update the Prisma Schema so that the Prisma Client will output to a folder named "generated/client/" inside the "backend/src" directory". Update the datasource definition to use a MySQL database with a url coming from the environment variable DATABASE_CONNECTION.. Docs: [Generating the Client](https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/generating-prisma-client) [MySQL](https://www.prisma.io/docs/concepts/database-connectors/mysql)
1. Create a model for "User" with the following fields:
| Field Name | Type   | Attributes           |
|------------|--------|----------------------|
| id         | Int    | id and autoincrement |
| email      | String | unique               |
| name       | String | optional             |

Docs: [Data Model](https://www.prisma.io/docs/concepts/components/prisma-schema/data-model)