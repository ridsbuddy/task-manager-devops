# Task Manager API

A small Node.js + Express + PostgreSQL REST API for DevOps CI/CD practice.

## API
- GET /health
- GET /api/tasks
- GET /api/tasks/:id
- POST /api/tasks
- PUT /api/tasks/:id
- DELETE /api/tasks/:id

## Local run
Requirements: Node.js 20+ and PostgreSQL.

Copy `.env.example` to `.env`, configure PostgreSQL, then:

```bash
npm install
npm test
npm start
```

The API runs on port 3000.

Example:
```bash
curl -X POST http://localhost:3000/api/tasks -H 'Content-Type: application/json' -d '{"title":"Learn GitHub Actions","description":"Deploy Docker app to EC2"}'
curl http://localhost:3000/api/tasks
```

## DevOps exercise
The application layer is complete. Build the DevOps layer yourself: Dockerfile, Docker Compose, GitHub Actions CI, GHCR publishing, EC2 deployment, Nginx, HTTPS, and rollback.
