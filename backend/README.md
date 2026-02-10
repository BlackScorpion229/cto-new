# Backend - FastAPI

FastAPI backend with PostgreSQL, Redis, and JWT authentication.

## Setup

1. Install Poetry:
```bash
pip install poetry
```

2. Install dependencies:
```bash
poetry install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Run database migrations:
```bash
poetry run alembic upgrade head
```

5. Start the development server:
```bash
poetry run uvicorn app.main:app --reload
```

The API will be available at http://localhost:8000

API documentation: http://localhost:8000/docs

## Project Structure

```
app/
├── api/          # API routes
├── core/         # Core configuration (security, settings)
├── db/           # Database configuration
├── models/       # SQLAlchemy models
├── schemas/      # Pydantic schemas
└── services/     # Business logic
```

## Testing

Run tests:
```bash
poetry run pytest
```

Run tests with coverage:
```bash
poetry run pytest --cov
```

## Code Quality

Linting:
```bash
poetry run ruff check .
```

Formatting:
```bash
poetry run black .
```

Type checking:
```bash
poetry run mypy app/
```
