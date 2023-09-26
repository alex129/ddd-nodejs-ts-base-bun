# Welcome to Rocket Project Backend

### Technologies

- [NodeJs](https://nodejs.org/en)
- Eslint
- Express
- Prettier
- Node Dependecy Injector
- Prisma

### Prerequisites

- Node 18.14.1

### Env base

Create the .env file in the root of the project with the following variables:

```bash
NODE_ENV=dev
PORT=3003
DATABASE_URL=mysql://user:password@host:port/database
```

### Installation

To install dependencies:

Install project dependencies

```bash
npm install
```

To Run:

```bash
npm run start
```

To Watch

```bash
npm run watch
```

### Database migration

The schema of the database is located in prisma/schema.prisma

Run migration

```bash
bun primsa db push
```

### API documentation

Once the server is started, go to http://localhost:3003/api/v1/docs to view the documentation
