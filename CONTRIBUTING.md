# Contributing Guide

Thank you for considering contributing to this project!

## Development Setup

### Prerequisites
- Node.js 18+
- Python 3.11+
- Docker & Docker Compose
- Poetry (Python package manager)

### Getting Started

1. Fork the repository
2. Clone your fork:
```bash
git clone https://github.com/your-username/project-name.git
cd project-name
```

3. Set up environment variables:
```bash
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env
```

4. Start development with Docker:
```bash
docker-compose up -d
```

Or set up locally following the README instructions.

## Code Style

### Frontend (React/TypeScript)
- Use functional components with hooks
- Follow the existing component structure
- Use TypeScript strictly (no `any` types unless absolutely necessary)
- Run `npm run lint` before committing
- Format code with Prettier

### Backend (FastAPI/Python)
- Follow PEP 8 style guide
- Use type hints for all functions
- Write docstrings for public functions
- Run `poetry run ruff check .` before committing
- Format code with Black

## Testing

### Frontend
```bash
cd frontend
npm run test
```

### Backend
```bash
cd backend
poetry run pytest
```

Ensure all tests pass before submitting a PR.

## Pull Request Process

1. Create a feature branch:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and commit:
```bash
git add .
git commit -m "feat: add your feature description"
```

Follow [Conventional Commits](https://www.conventionalcommits.org/) format:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

3. Push to your fork:
```bash
git push origin feature/your-feature-name
```

4. Open a Pull Request with:
   - Clear description of changes
   - Reference to any related issues
   - Screenshots (if UI changes)

## Code Review

All PRs require:
- Passing CI/CD checks
- Code review approval
- Up-to-date with main branch

## Questions?

Feel free to open an issue for questions or discussions.
