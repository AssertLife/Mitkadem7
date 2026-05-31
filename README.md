# Week 7

Repository: https://github.com/AssertLife/Mitkadem7

## How to run

```
npm install
node app.js
```

Server runs on port 8080.

## REST endpoints

- GET /articles - get all articles
- GET /articles/:id - get article by id
- POST /articles - create new article
- PUT /articles/:id - update article
- DELETE /articles/:id - delete article

## curl examples

```
curl http://localhost:8080/articles
curl http://localhost:8080/articles/1

curl -X POST http://localhost:8080/articles -H "Content-Type: application/json" -d '{"title":"New article","author":"Jane Smith","published":"2024-02-12","content":"Hello world"}'

curl -X PUT http://localhost:8080/articles/1 -H "Content-Type: application/json" -d '{"title":"Updated title"}'

curl -X DELETE http://localhost:8080/articles/2
```
