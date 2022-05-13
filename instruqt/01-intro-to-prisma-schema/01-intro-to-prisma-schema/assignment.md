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
Intro
======
This training course uses the VSCode Editor.
To access your terminal press "Ctrl + `" or click:
* The Hamburger icon in the upper left
* "View"
* "Terminal"

To navigate the project click on the files and folders in the File Explorer in the left hand column.

Steps
======
Open a terminal and change directory to /root/training/example-app/backend.

Use the proper CLI command to create a new schema file.

Edit the new schema file with VS Code and review the precreated definitions. Notice that the generator defaults to using the correct "prisma-client-js" provider. Now update the Prisma Schema so that the Prisma Client will output to a folder named "generated/client/" inside the "backend/src" directory". Update the datasource definition to use a SQLite database named dev.db inside the prisma folder

Create a model for "User" with the following fields:
| Field Name | Type   | Attributes           |
|------------|--------|----------------------|
| id         | int    | id and autoincrement |
| email      | string | unique               |
| name       | string | optional             |

Links:
https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/generating-prisma-client
https://www.prisma.io/docs/concepts/database-connectors/sqlite
https://www.prisma.io/docs/concepts/components/prisma-schema/data-model#optional-and-mandatory-fields