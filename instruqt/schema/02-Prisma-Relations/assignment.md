---
slug: prisma-relations
id: q3qapg0eke2y
type: challenge
title: Prisma Relations
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

Steps
======
1. Add Post model to the schema with the following fields. Note the author field is related to User model, which requires updating of the User model as well. Docs: [Data Model](https://www.prisma.io/docs/concepts/components/prisma-schema/data-model) [Relations](https://www.prisma.io/docs/concepts/components/prisma-schema/relations)
| Field Name | Type     | Attributes              |
|------------|----------|-------------------------|
| id         | Int      | id and autoincrement    |
| createdAt  | DateTime | default to now          |
| updatedAt  | DateTime | updatedAt               |
| title      | String   | required                |
| content    | String   | optional                |
| published  | Boolean  | default to false        |
| viewCount  | Int      | default to zero         |
| author     | User     | relation using authorId |
| authorId   | Int      |                         |
1. Create an Enum Role with fields VIEWER, EDITOR and ADMIN. Use mapping to store those as lowercase in the database. Docs: [Data Model](https://www.prisma.io/docs/concepts/components/prisma-schema/data-model)

