# [Project Name] - Web Application

Modern web application built with Next.js, TypeScript, and modern tooling.

## Development & Getting Started

**For complete project development information, start with `docs/index.md`**

This root README provides quick setup instructions. For comprehensive development information including:
- Current project status and progress
- Development standards and guidelines
- Business requirements and roadmap
- MCP integration setup
- Technical implementation details

**→ Go to `docs/index.md` for the complete picture**

## Tech Stack (Template)

- **Frontend**: [Your Frontend Framework] (e.g., Next.js, Remix, Nuxt) + TypeScript
- **Styling**: [Your Styling Choice] (e.g., TailwindCSS, CSS Modules, Chakra UI)
- **Backend**: [Your Backend Choice] (e.g., Supabase, Firebase, AWS, Node/Express)
- **API**: [Your API Approach] (GraphQL, REST, tRPC)
- **State Management**: [Your Choice] (e.g., React Query, Redux Toolkit, Zustand)
- **Forms**: [Your Choice] (e.g., React Hook Form, Formik) + [Validation] (e.g., Zod, Yup)
- **Testing**: [Unit] + [E2E] (e.g., Jest, Vitest, Playwright)
- **Package Manager**: [Yarn | npm | pnpm]
- **Deployment**: [Your Deployment Choice] (e.g., Vercel, Netlify, AWS)

## Quick Start

### Prerequisites
- Node.js 18+ (or your runtime version)
- [Yarn | npm | pnpm]
- [Your Backend Requirements]

### 1. Clone and Install
```bash
git clone <repository-url>
cd [project-name]
yarn install
```

### 2. Environment Setup
```bash
cp env.example .env.local
```

Fill in your environment variables:
```env
# [Your Configuration Variables]
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=[Project Name]
# Add project-specific variables here
```

### 3. Development
```bash
# Start development server
[yarn|npm|pnpm] dev

# Run tests
[yarn|npm|pnpm] test

# Run E2E tests
[yarn|npm|pnpm] test:e2e

# Type checking
[yarn|npm|pnpm] type-check

# Linting and formatting
[yarn|npm|pnpm] lint
[yarn|npm|pnpm] format
```

## Project Structure

```
[project-name]/
├── .ai/                    # AI-specific configuration
├── docs/                   # Project documentation
│   ├── status/            # Current state only
│   ├── architecture/      # Technical implementation
│   └── guides/            # How-to documentation
├── standards/              # Immutable standards
├── app/                   # Next.js App Router pages
├── components/            # React components
├── lib/                   # Utilities and configurations
├── __tests__/            # Test files
└── public/               # Static assets
```

## Authentication & Authorization

[Describe your authentication system]

## Database Schema

[Describe your data model]

## Design System

[Describe your design system]

## Testing Strategy

[Describe your testing approach]

## Available Scripts

```bash
# Development
yarn dev              # Start development server
yarn build            # Build for production
yarn start            # Start production server

# Testing
yarn test             # Run unit tests
yarn test:ci          # Run tests with coverage
yarn test:e2e         # Run E2E tests

# Code Quality
yarn lint             # Run ESLint
yarn format           # Format with Prettier
yarn type-check       # TypeScript type checking
```

## Deployment

[Describe your deployment strategy]

## Documentation Structure

**Complete documentation is organized in the `/docs` folder**

### Quick Navigation
- `docs/index.md` - Start here
- `docs/status/progress.yaml` - Current status
- `docs/architecture/overview.md` - Architecture
- `docs/guides/setup.md` - Environment setup
- `docs/templates/` - Templates (API docs, tutorials, workflow diagram, terminology)
- `docs/_working/` - Working notes, research findings, review checklist
- `docs/session-management/` - Session notes and resumption checklist

### For AI Assistants & Developers
- `.claude/` - Documentation commands and output style
- `standards/` - Development standards and patterns
- `.ai/` - AI-specific configuration and context

See `advanced_ia_doc_workflow.md` and `development_efficiency_optimization_guide.md` at repo root for the full workflow.

## AI Development Assistance

### MCP Integration
We use Model Context Protocol (MCP) to enhance AI development assistance with 2-server setup (docs + standards).

**→ See `docs/index.md` for complete MCP setup and testing instructions**

## Contributing

1. Follow coding standards in `standards/coding.md`
2. Write tests for new features
3. Use conventional commit messages
4. Create feature branches from `dev`
5. Submit pull requests for review
6. Update documentation when making changes

**→ See `docs/guides/setup.md` for development workflow**

## License

[Your License]

---

**Built with ❤️ by [Your Team]**

---

## Documentation Status

- **Last Updated**: [Current Date]
- **Documentation**: ✅ **CONSOLIDATED** - Single source of truth in `docs/index.md`
- **MCP Integration**: ✅ Ready for implementation
- **Next Review**: Monthly or when major changes occur

**📚 For complete documentation, start with `docs/index.md`**

---

## Quick Start

1. Read this file for project overview and setup
2. Go to `docs/index.md` for complete documentation
3. Check `docs/status/progress.yaml` for current status
4. Follow `docs/guides/setup.md` for development workflow



