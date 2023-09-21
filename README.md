# Welcome to Rocket Project Backend

### Technologies

- [Bun](https://bun.sh/)
- Eslint
- Express
- Prettier
- Node Dependecy Injector
- Prisma

### Prerequisites

- Bun
- Environment variables

### Env base

Create the .env file in the root of the project with the following variables:

```bash
NODE_ENV=dev
PORT=3003
DATABASE_URL=mysql://user:password@host:port/database
```

### Installation

To install dependencies:

Install Bun in MacOs

```bash
curl -fsSL https://bun.sh/install | bash
```

Or follow the oficial documentation [Bun](https://bun.sh/docs/installation)

Install project dependencies

```bash
bun install
```

To run:

```bash
bun start
```

### Database migration

The schema of the database is located in prisma/schema.prisma

Run migration

```bash
bun primsa db push
```

### API documentation

Once the server is started, go to http://localhost:3003/api/v1/docs to see the documentation
