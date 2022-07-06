# Robotman
App showcasing NestJS w/ TypeORM.


## API Doc

### Base URL
http://localhost:3000

### Find All
#### Endpoint
`GET /robots`

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
    "avatar": "default"
  },
  {
    "id": 3,
    "name": "rambotan",
    "purpose": "beng beng beng din",
    "avatar": "iba"
  }
]
```

### Find One
`GET /robots/:id`

#### Sample Response
```json
{
    "id": 1,
    "name": "rambot",
    "purpose": "beng beng beng",
    "avatar": "default"
}
```

### Create
#### Endpoint
`POST /robots`

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
    "avatar": "default",
    "id": 4
}
```

### Update
#### Endpoint
`PATCH /robots/:id`

#### Sample Request
```json
{
    "avatar": "iba2"
}
```

#### Sample Response
```json
{
    "avatar": "iba2"
}
```


### Delete
#### Endpoint
`DELETE /robots/:id`

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
