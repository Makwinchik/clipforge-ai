# ClipForge AI

Production-ready SaaS foundation for ClipForge AI, built with a Next.js frontend and FastAPI backend.

## Stack

- Frontend: Next.js 15, TypeScript, Tailwind CSS, shadcn/ui-style primitives
- Backend: FastAPI, Pydantic Settings
- Infrastructure: Docker, Docker Compose

## Project structure

```text
apps/
  api/       FastAPI backend
  web/       Next.js frontend
```

## Prerequisites

- Node.js 20+
- Python 3.12+
- Docker and Docker Compose

## Environment setup

Copy the example environment file and adjust values as needed:

```bash
cp .env.example .env
```

## Run with Docker Compose

```bash
docker compose up --build
```

Services:

- Frontend: <http://localhost:3000>
- Backend API: <http://localhost:8000>
- Health check: <http://localhost:8000/health>

## Local frontend development

```bash
cd apps/web
npm install
npm run dev
```

## Local backend development

```bash
cd apps/api
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

## Notes

This foundation intentionally does not implement AI or video processing. Upload handling is a stub endpoint for future integration.
