---
slug: intro-to-prisma-schema
id: kgmexi8se4ql
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
    This training course uses the VSCode Editor. The application for this lab is opened in VSCode at app/example-app. There is a terminal window for running commands built-in to VSCode at the bottom right. The Prisma VSCode plugin is already loaded to provide syntax highlighting in the Prisma Schema.
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
0. Open a terminal and change directory to /root/training/example-app/backend.
1. Use the proper CLI command to create a new schema file.
1. Edit the new schema file with VS Code and review the precreated definitions. Notice that the generator defaults to using the correct "prisma-client-js" provider. Now update the Prisma Schema so that the Prisma Client will output to a folder named "generated/client/" inside the "backend/src" directory". Update the datasource definition to use a SQLite database named dev.db inside the prisma folder
1. Create a model for "User" with the following fields:
| Field Name | Type   | Attributes           |
|------------|--------|----------------------|
| id         | int    | id and autoincrement |
| email      | string | unique               |
| name       | string | optional             |

Links:
https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/generating-prisma-client
https://www.prisma.io/docs/concepts/database-connectors/sqlite
https://www.prisma.io/docs/concepts/components/prisma-schema/data-model#optional-and-mandatory-fields