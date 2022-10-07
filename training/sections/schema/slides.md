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
By default Prisma Client is generated into `node_modules/.prisma/client`, however there are multiple options you can pass a generator to change its output.

---

| Name                          | Default                       | Description                                      |
| ----------------------------- | ----------------------------- | ------------------------------------------------ |
| provider .required[*required] |                               | Describes which generator to use                 |
| output                        | `node_modules/.prisma/client` | Location to output generated assets              |
| previewFeatures               | none                          | Preview features you would like to enable        |
| engineType                    | `library`                     | Defines the engine type to download              |
| binaryTargets                 | `native`                      | Operating system on which Prisma Client will run |

---

Here's an example using all of the options available:

```graphql
generator client {
  # Generate Prisma Client
  provider = "prisma-client-js"
  # Specifies the output directory
  output = "../generated"
  # Enable the "tracing" preview feature
  previewFeatures = ["tracing"]
  # Specifies you want the executable binary engine
  engineType = "binary"
  # Specifies you will use Prisma Client on Mac OS
  binaryTargets = "darwin"
}
```

---

layout: false

class: middle, center

## Datasources

---

layout: true

## Datasources

---

The definition of your datasource and how to connect to it.

--

```graphql
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}
```

--

The primary purpose for a `datasource` block is to:

1. Tell Prisma what kind of database you are connecting to
2. Provide a connection string for Prisma to use

---

```graphql
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}
```

Some things to keep in mind about `datasource`:

1. Every Prisma Schema must have _exactly one_ datasource block

--

2. You are not limited to the datasource name: `db`. You can name your datasource anything that makes sense to you and your team

---

There are a few extra options you can provide to customize how Prisma Client connects to and interacts with your datasource:

--

<br/>

| Name                 | Required | Type   | Description                                                             |
| -------------------- | -------- | ------ | ----------------------------------------------------------------------- |
| provider             | Yes      | String | Describes which data source connectors to use.                          |
| url                  | Yes      | String | Connection URL including authentication info.                           |
| shadowDatabaseUrl    | No       | String | Connection URL to the shadow database used by Prisma Migrate.           |
| referentialIntegrity | No       | String | Allows setting the referential integrity. _(`prisma` or `foreignKeys`)_ |

---

### Supported Databases

As of this writing, the supported databases are:

- SQLite: `sqlite`
- PostgreSQL: `postgresql`
- MySQL: `mysql`
- SQL Server: `sqlserver`
- MongoBD: `mongodb`
- CockroachDB: `cockroachdb`


_For an up-to-date list, refer to the [docs](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#datasource)_

---

### Environment Variable Helper

Within the `datasource` block, you have the ability to use PSL's `env` function to provide the connection string from your environment rather than 
manually inputting it into the Prisma Schema:

--

```graphql
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}
```

--

This allows you to keep your connection details outside of source control.

---

layout: false

class: middle, center

## Models

---

layout: true

## Models

---

Makes up the bulk of your Prisma Schemas. Models are where you describe your database's tables and collections, as well as the indexes and relations associated with them:

```graphql
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
}
```

---


Every model `model` block must contain a model name:

--

<br />
![:scale 80%](./images/basic-model-name.png)

---

Within each model block, you must provide the set of fields associated with that model:

--

<br />

.center[

![:scale 50%](./images/basic-model-field-name.png)

]

--


.center[

![:scale 50%](./images/basic-model-data-type.png)

]

--

.center[

![:scale 50%](./images/basic-model-additional.png)

]

---

### Model Attributes

Along with its fields, you may provide models different attributes to configure things like indexes and mappings. 
These are typically denoted with a double `@` sign.

<br/>

For example, the snippet below maps the name `User` to an underlying `users` table using the `@@map` attribute:

```graphql
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?

  @@map('users')
}
```
--

_For more information about the attributes available, check out the [API documentation](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#attributes)_

---

### Field Attributes

Similar to the model attributes, each field may be provided attributes to further define how to handle the field and how underlying field in the database should be configured.
These are typically denoted by a single `@` sign.

<br/>

For example, the snippet below defines a `User` model with a field `email`. The `email` field should be unique:

```graphql
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
}
```

--

> Note, the `@id` and `@default` in the snippet above are also field attribues being used.

_For more information about the attributes available, check out the [API documentation](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#attributes)_

---

### Field Data Types

Each field is required to be provided a data type. This type will most often be a scalar type. The following scalar types are supported:

- String
- Boolean
- Int
- BigInt
- Float
- Decimal
- DateTime
- Json
- Bytes

---

### Field Data Types

The snippet below defines a numeric `ID` field using the `Int` data type and a string `email` field using the `String` type:

```graphql
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
}
```

_For more information about the data types available, refer to the [docs](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#model-field-scalar-types)_

---

### Unsupported Data Type

You may run into a data type that Prisma does not support out of the box. There is a helper type named `Unsupported` you may use in this scenario.

--

<br/>
This data type allows you to make use of an underlying database field's data type even if it is not supported by Prisma Client.

--

<br/>

For example, the snippet below defines a field named `circle` that is of the `circle` data type:

```graphql
model Star {
  id       Int                    @id @default(autoincrement())
  circle   Unsupported("circle")? @default(dbgenerated("'<(10,4),11>'::circle"))
}
```