# Projetos-Node.js

Repositorio para projeto de uma locadora de filmes

## Ambiente de desenvolvimento
Esse projeto foi desenvolvido utilizando windows, utilizando a porta 27017 para o mongodb e a porta 3000 para o express.

## Como iniciar o projeto

No terminal, para instalar as dependências:
```
npm install
```
Para rodar:
```
npm run start
```
## Dependências instaladas
    -Bcryptjs
    -Body-parser
    -Express
    -Joi
    -Jsonwebtoken
    -Mongodb
    -Nodemon

## Endpoints

### Signup

```
POST /auth/signup
```

**Body**

```json
{
  "name": "Full Name Here",
  "email": "email@sjahdiuas.ciom",
  "password": "sidhaiudhuiasd(ASud98"
}
```

**Response**

Success (200)

```json
{
  "success": true
}
```

Bad Request (400)

```json
{
  "message": "Invalid email."
}
```

### Sign in

```
POST /auth/signin
```

**Body**

```json
{
  "email": "email@sjahdiuas.ciom",
  "password": "sidhaiudhuiasd(ASud98"
}
```

**Response**

Success (200)

```json
{
  "token": "oiasuhdiuhasIOUFHGAIUSDFLIUASEHGIFUAYSDFYASDF7ASD8F7YTAS8D67FCGASYDCVAUYSDVCUYASDVCUYAVD"
}
```

Bad Request (400)

```json
{
  "message": "Invalid email."
}
```

### List Movies

Authenticated

```
GET /movies
```

**Query Params**

```
title: string
available: bool
limit: number
skip: number
```

**Response**

Success (200)

```json
{
  "movies": [ 
    { "_id": "aff2345aabb", "title": "Kill Bill", "director": "Quentin Tarantino", "units": ["aaaff12312321", "aas123123123"] }, 
    { "_id": "aff2345aabb", "title": "Kill Bill", "director": "Quentin Tarantino", "units": ["1213123asasa"] }
  ]
  "pagination": {
	  "total": 10000,
    "skip": 20,
    "limit": 20,
    "isFirstPage": false,
    "isLastPage": false
  }
}
```

Bad Request (400)

```json
{
  "message": "Invalid Limit"
}
```

Unauthorized (401)

```json
{
  "message": "Unauthorized"
}
```

### Rent/Return Movie

Authenticated

```
PATCH /movies_units/:id
```

**Body**

```json
{
   "action": "rent|return"
}
```

**Response**

Success (200)

```json
{
  "success": true
}
```

Bad Request (400)

```json
{
  "message": "Invalid Movie Unit."
}
```

Unauthorized (401)

```json
{
    "message": "Unauthorized"
}
```
