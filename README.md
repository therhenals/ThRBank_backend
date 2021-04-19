## Description

### English
Backend developed with [Nest](https://github.com/nestjs/nest), using as database mongodb.

### Español
Backend desarrollado con [Nest](https://github.com/nestjs/nest), utilizando como base de datos mongodb.

## Requirements

### English
It is necessary to install nodejs, npm and [nestjs cli](https://docs.nestjs.com/)

### Español
Es necesario instalar nodejs, npm y [nestjs cli](https://docs.nestjs.com/)

## Vercel

### English
For practical purposes I deployed the backend on vercel.com, it can be accessed from [here](https://thrbank-backend.vercel.app/api)

### Español
A efectos prácticos desplegué el backend en vercel.com, se puede acceder desde [aquí](https://thrbank-backend.vercel.app/api)

## Environment Variables

### English
In the repository you will find a file called .env.example, copy its content into a new one with the name .env

### Español
En el repositorio encontrarás un archivo llamado .env.example, copia su contenido en uno nuevo con el nombre .env

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

### English
It should be noted that firebase only uses sdk to maintain authentication states. The data and the validations of the users are stored in the backend. With the firebase-admin library, a personalized token is generated which is sent to the client apps when a user authenticates, this is received by the client apps and saves the authentication status with firebase-sdk.

### Español
Hay que tener en cuenta que firebase sólo utiliza el sdk para mantener los estados de autenticación. Los datos y las validaciones de los usuarios se almacenan en el backend. Con la librería firebase-admin, se genera un token personalizado que se envía a las apps cliente cuando un usuario se autentifica, este es recibido por las apps cliente y guarda el estado de autenticación con firebase-sdk.