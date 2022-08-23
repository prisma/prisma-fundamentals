class: center, middle, no-slide-number
count: false

![:scale 20%](./images/Prisma-IndigoSymbol.svg)

# Prisma Fundamentals

#### Prisma Schema Language

<br/>
A comprehensive course on using Prisma

---

.center[

## Table of Contents

]

1. Overview of Prisma Schema Language
2. What is a Prisma schema?
3. What is in a Prisma schema?
4. What makes this special?
5. How does the schema work?
6. A look at a full schema
7. Tooling

---

[//]: # "Prisma Schema Language Section"

layout: true

## Prisma Schema Language

---

Prisma Schema Language _(or PSL)_ is a language developed by Prisma that allows you to model your database's schema

```graphql
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id    Int     @id @default(autoincrement())
  name  String?
}
```

---

The syntax for PSL is very similar to GraphQL syntax. This design decision was made for a specific reason:
<br>
<br>
<br>
<br>
<br>

--

.center[

.emphasize-big[

# Readability

]

]

---

The Prisma Schema Language syntax reads in a way that is an intuitive representation of your data.

--
<br><br><br><br>
This allows even _non-technical_ members of your team to read, understand and possibly contribute to your data model.

---

layout: false
class: middle, center

## What is a Prisma Schema?

---

## What is a Prisma Schema?

.sub-middle[
The source of truth for the shape of data in your database
]

---

## What is a Prisma Schema?

.sub-middle[
The source of truth for the shape of data in your database

#### AND

]

---

## What is a Prisma Schema?

.sub-middle[
The source of truth for the shape of data in your database

#### AND

The source of truth for the shape of data in your application code
]

---

class: middle, center

_Some graphic to explain how the schema and types are defined by Prisma schema_

---

class: middle, center

## What is in a Prisma schema?

---

layout: true

## What is in a Prisma schema?

---

A Prisma schema is made up of "Blocks" that define the:

- Database schema

--

- Assets Prisma will generate

--

- Database connection details

[//]: # "Add graphic representing PSL -> [schema, assets, connection]"

---

There are different types of "Blocks" used to define different aspects of your schema and Prisma configuration:

--

- <u>**Generator**</u>: Definitions of artifacts that will be generated based off of your schema. The most common is Prisma Client.

--

- <u>**Datasource**</u>: Provides Prisma information about your database connection so it will know how to connect to and interact with the underlying database.

--

- <u>**Model**</u>: Represents the entities or collections of the underlying databases

--

- <u>**Enum**</u>: Represent enumerations in databases that support enums

--

- <u>**Type**</u>: Represent composite types, also called embedded documents in MongoDB

---

layout: false

class: middle, center

## Generators

---

layout: true

## Generators

---

Definitions of artifacts that will be generated when you run the command `prisma generate`.
<br><br>
A common generator you will see is the generator for Prisma Client provided by Prisma:

--

```graphql
generator client {
  provider = "prisma-client-js"
}
```

--

This generator tells Prisma that when `prisma generate` is run, Prisma Client should be created.
<br><br>
By default Prisma Client is generated into `node_modules/@prisma/client`, however there are multiple options you can pass a generator to change its output.
