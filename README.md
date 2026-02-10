# Full-Stack Application with React & FastAPI

A modern full-stack application with React 18 + TypeScript frontend and FastAPI + Python backend, featuring JWT authentication and RBAC.

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for blazing fast development
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **React Router v6** for routing
- **TanStack Query** for server state management
- **Zustand** for client state management
- **React Hook Form + Zod** for form validation
- **Framer Motion** for animations
- **Sonner** for toast notifications

### Backend
- **FastAPI** with Python 3.11
- **SQLAlchemy 2.0** ORM
- **PostgreSQL** database
- **Redis** for caching and sessions
- **Alembic** for database migrations
- **JWT** authentication
- **RBAC** (Role-Based Access Control)

### DevOps
- **Docker** & **Docker Compose** for containerization
- **GitHub Actions** for CI/CD
- **Pytest** for backend testing
- **Vitest** for frontend testing

## Project Structure

```
.
├── frontend/           # React + TypeScript frontend
│   ├── src/
│   │   ├── components/ # Reusable components
│   │   ├── pages/      # Page components
│   │   ├── lib/        # Utilities and helpers
│   │   ├── services/   # API services
│   │   └── hooks/      # Custom React hooks
│   └── package.json
├── backend/            # FastAPI backend
│   ├── app/
│   │   ├── api/        # API routes
│   │   ├── core/       # Core configuration
│   │   ├── models/     # Database models
│   │   ├── schemas/    # Pydantic schemas
│   │   └── services/   # Business logic
│   └── pyproject.toml
└── docker-compose.yml  # Multi-container setup
```

## Quick Start

### Prerequisites
- Docker & Docker Compose
- Node.js 18+ (for local development)
- Python 3.11+ (for local development)

### Using Docker (Recommended)

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Copy environment files:
```bash
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env
```

3. Start all services:
```bash
docker-compose up -d
```

4. Access the application:
- Frontend: http://localhost:5173
- Backend API: http://localhost:8000
- API Docs: http://localhost:8000/docs

### Local Development (Without Docker)

#### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Create virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install poetry
poetry install
```

4. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

5. Run database migrations:
```bash
alembic upgrade head
```

6. Start the server:
```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

#### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development server:
```bash
npm run dev
```

## Development

### Running Tests

#### Frontend Tests
```bash
cd frontend
npm run test         # Run Vitest unit tests
npm run test:ui      # Run tests with UI
npm run test:e2e     # Run Playwright e2e tests
```

#### Backend Tests
```bash
cd backend
poetry run pytest
poetry run pytest --cov  # With coverage
```

### Code Quality

#### Frontend
```bash
npm run lint         # ESLint
npm run format       # Prettier
npm run type-check   # TypeScript
```

#### Backend
```bash
poetry run ruff check .     # Linting
poetry run black .          # Formatting
poetry run mypy app/        # Type checking
```

### Database Migrations

Create a new migration:
```bash
cd backend
alembic revision --autogenerate -m "description"
```

Apply migrations:
```bash
alembic upgrade head
```

Rollback migration:
```bash
alembic downgrade -1
```

## Authentication

The application uses JWT-based authentication with access and refresh tokens:

- **Access Token**: Short-lived (15 minutes), used for API requests
- **Refresh Token**: Long-lived (7 days), used to obtain new access tokens

### Default Roles
- **admin**: Full system access
- **user**: Standard user access

### API Endpoints
- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/refresh` - Refresh access token
- `POST /api/v1/auth/logout` - User logout
- `GET /api/v1/users/me` - Get current user

## Environment Variables

### Frontend (.env)
```
VITE_API_URL=http://localhost:8000
```

### Backend (.env)
```
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
REDIS_URL=redis://localhost:6379
SECRET_KEY=your-secret-key
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=15
REFRESH_TOKEN_EXPIRE_DAYS=7
```

## Docker Services

- **frontend**: React development server (port 5173)
- **backend**: FastAPI server (port 8000)
- **postgres**: PostgreSQL database (port 5432)
- **redis**: Redis cache (port 6379)

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## License

MIT
