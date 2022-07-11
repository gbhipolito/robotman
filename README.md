# Robotman
App showcasing NestJS w/ TypeORM. Also includes different passport strategies.


## API Doc

### Base URL
http://localhost:3000


### Create User
#### Endpoint
`POST /users`

#### Auth
Public

#### Sample Request
```json
{
    "username": "ako",
    "email": "ako@ito.com",
    "firstName": "ako",
    "lastName": "ito",
    "password": "Akop@d1n"
}
```

#### Sample Response
```json
{
    "username": "ako",
    "email": "ako@ito.com",
    "firstName": "ako",
    "lastName": "ito",
    "id": 1
}
```


### Login
#### Endpoint
`POST /auth/login`

#### Auth
Public

#### Sample Request
```json
{
    "username": "ako",
    "password": "Akop@d1n"
}
```

#### Sample Response
```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFrbzMiLCJzdWIiOjQsImlhdCI6MTY1NzUwNjEyMCwiZXhwIjoxNjU3NTA2MjQwfQ.p2JAl24y-7xJzySYLX5vZY1ZOzVoH9UL4eAr0ri1Gmo"
    // use this as Bearer token on protected endpoints
}
```


### Find All
#### Endpoint
`GET /robots`

#### Auth
Public

#### Query Params
|name| description |
|--|--|
| skip | optional. default 0 |
| limit | optional. default 10 |

#### Sample Response
```json
[
  {
    "id": 1,
    "name": "rambot",
    "purpose": "beng beng beng",
    "avatar": "https://avatars.dicebear.com/api/bottts/1e0a1c25-79f3-483d-9eaa-cdd1ce35acf7.svg",
    "user": {
		  "id": 4,
		  "username": "ako3",
		  "email": "ako3@ito.com",
		  "firstName": "ako",
		  "lastName": "ito",
		  "password": "ssHas7cdWqzhvnpBcaCdqI3QPST8AAW1gkepV1iES6E="
	}
  },
  {
    "id": 3,
    "name": "rambotan",
    "purpose": "beng beng beng din",
    "avatar": "https://avatars.dicebear.com/api/bottts/120a1c25-79f3-483d-9eaa-cdd1ce35acf7.svg",
    "user": {
		  "id": 4,
		  "username": "ako3",
		  "email": "ako3@ito.com",
		  "firstName": "ako",
		  "lastName": "ito",
		  "password": "ssHas7cdWqzhvnpBcaCdqI3QPST8AAW1gkepV1iES6E="
	}
  }
]
```

### Find One
`GET /robots/:id`

#### Auth
Public

#### Sample Response
```json
{
    "id": 1,
    "name": "rambot",
    "purpose": "beng beng beng",
    "avatar": "https://avatars.dicebear.com/api/bottts/3e0a1c25-79f3-483d-9eaa-cdd1ce35acf7.svg"
}
```

### Create
#### Endpoint
`POST /robots`

#### Auth
Must be logged in. Use token from login as Bearer token.

#### Sample Request
```json
{
    "name": "rambot",
    "purpose": "beng beng beng"
}
```

#### Sample Response
```json
{
    "name": "rambotan2",
    "purpose": "beng beng beng din",
    "avatar": "https://avatars.dicebear.com/api/bottts/4e0a1c25-79f3-483d-9eaa-cdd1ce35acf7.svg",
    "id": 4
}
```

### Update
#### Endpoint
`PATCH /robots/:id`

#### Auth
Must be logged in. Use token from login as Bearer token.

#### Sample Request
```json
{
    "avatar": "https://avatars.dicebear.com/api/bottts/5e0a1c25-79f3-483d-9eaa-cdd1ce35acf7.svg"
}
```

#### Sample Response
```json
{
    "avatar": "https://avatars.dicebear.com/api/bottts/6e0a1c25-79f3-483d-9eaa-cdd1ce35acf7.svg"
}
```


### Delete
#### Endpoint
`DELETE /robots/:id`

#### Auth
Must be logged in. Use token from login as Bearer token.

#### Sample Response
```
{
    "id": "3",
    "message": "deleted"
}
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
