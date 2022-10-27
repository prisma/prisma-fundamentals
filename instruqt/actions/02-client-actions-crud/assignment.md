---
slug: client-actions-crud
id: blrqiruqhkbm
type: challenge
title: Using Prisma Client for CRUD Operations
notes:
- type: text
  contents: |
    This challenge covers performing CRUD operations with Prisma Client. These are some of the most common tasks performed and every user of Prisma should master these skills.

    Once the lab is finished loading, hit 'Start' in the bottom right.
tabs:
- title: Code Editor
  type: service
  hostname: workstation
  port: 8080
difficulty: basic
timelimit: 6000
---
Steps
======
1. Review the Prisma schema file in the Prisma directory to perform the following tasks. Use 'ts-node' to run each file after you've updated to ensure it's working as expected.
1. Edit src/readOne.ts and insert code to find a user with an id of 1 and return it as the const 'user'. Docs: [CRUD](https://www.prisma.io/docs/concepts/components/prisma-client/crud)
1. Edit src/readMany.ts and insert code to find all users with emails ending in '@prisma.io' and return it as const 'users'. Docs: [CRUD](https://www.prisma.io/docs/concepts/components/prisma-client/crud)
1. Edit src/createUser.ts and insert code to create a new user with the following information and return it as a const 'user':
| Field Name | Attributes           |
|------------|----------------------|
| email      | student@prisma.io    |
| name       | Prisma Student       |
Docs: [CRUD](https://www.prisma.io/docs/concepts/components/prisma-client/crud)
1. Edit src/createPost.ts to create a new post with the following information and return it as a const 'post':
| Field Name | Attributes           |
|------------|----------------------|
| User       | student@prisma.io    |
| title      | Created with Prisma! |
| content    | This was too easy!   |
Docs: [CRUD](https://www.prisma.io/docs/concepts/components/prisma-client/crud)
1. Edit src/updateUser.ts to change the name of the user with email cung@prisma.io to Anita and return it as const 'user'. Docs: [CRUD](https://www.prisma.io/docs/concepts/components/prisma-client/crud)
1. Edit src/updateUsers.ts to grant all users with @prisma.io emails the role of 'EDITOR' and return it as const 'user'. Docs: [CRUD](https://www.prisma.io/docs/concepts/components/prisma-client/crud)
1. Edit src/deletePosts.ts to delete posts by user 'matteson@prisma.io" and return it as const 'posts'. Docs: [CRUD](https://www.prisma.io/docs/concepts/components/prisma-client/crud)
