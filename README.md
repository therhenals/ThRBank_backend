## Description

Backend developed with [Nest](https://github.com/nestjs/nest), using as database mongodb.

## Requirements

It is necessary to install nodejs, npm and [nestjs cli](https://docs.nestjs.com/)

## Vercel

For practical purposes display the backend in vercel.com, it can be accessed from [here](https://thrbank-backend.vercel.app/api)


## Environment Variables

In the repository you will find a file called .env.example, copy its content into a new one with the name .env

## Installation

```bash
$ npm install
```

## Running the app

Port = 3000

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# build production
$ npm run build

# production mode
$ npm run start:prod
```

## Firebase

It should be noted that firebase only uses sdk to maintain authentication states. The data and the validations of the users are stored in the backend. With the firebase-admin library, a personalized token is generated which is sent to the client apps when a user authenticates, this is received by the client apps and saves the authentication status with firebase-sdk.
