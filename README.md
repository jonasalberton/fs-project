# Full Stack Assessment Project

This project is structured into two distinct folders:
**server**: Contains the API implementation

# Server

The server is build using Fastfy as main Framework, Typescript, and Prisma as ORM

### Setting up

First we need to install all dependencias from package.json file:
You can use the command:

```console
npm i
```

### Database Configuration

This project leverages PostgreSQL as its database. A `docker-compose.yml` file is provided at the project root to facilitate the execution of the database within a Docker image.

To initiate the database service, execute the following command:

```console
docker-compose up -d
```

After your image is running, you need to configure your database using the command:

```console
npx prisma db push
```

### Database Seeding

Once your Docker image is running, you can seed your database with mock data created in the `seed.ts` file. To do this, navigate to the `/server` directory and run the command:

```console
npm run seed
```

Now you are all settle to run the Server Locally using the command:

```console
npm run dev
```
