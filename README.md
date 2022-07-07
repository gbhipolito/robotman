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
    "avatar": "https://avatars.dicebear.com/api/bottts/1e0a1c25-79f3-483d-9eaa-cdd1ce35acf7.svg"
  },
  {
    "id": 3,
    "name": "rambotan",
    "purpose": "beng beng beng din",
    "avatar": "https://avatars.dicebear.com/api/bottts/120a1c25-79f3-483d-9eaa-cdd1ce35acf7.svg"
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
    "avatar": "https://avatars.dicebear.com/api/bottts/3e0a1c25-79f3-483d-9eaa-cdd1ce35acf7.svg"
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
    "avatar": "https://avatars.dicebear.com/api/bottts/4e0a1c25-79f3-483d-9eaa-cdd1ce35acf7.svg",
    "id": 4
}
```

### Update
#### Endpoint
`PATCH /robots/:id`

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
