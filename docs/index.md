# Creaciones del Mago - Project Overview

> **AI Context**: This is the single source of truth for project overview.
> For current status: see `docs/status/progress.yaml`
> For implementation details: see `docs/architecture/overview.md`

## Project Overview

Creaciones del Mago is a Uruguay‑focused 3D printing e‑commerce and custom order platform. It combines a browsable product catalog with a multi‑step custom order flow (including secure file uploads), SEO‑ready pages, analytics with consent, and WhatsApp handoff for quick contact — built following AI‑friendly, single‑source documentation principles.

### Mission Statement
Hacer accesible la impresión 3D personalizada en Uruguay, con una experiencia clara, rápida y confiable — desde la idea hasta el objeto en tus manos.

### Target Audience
- Personas y negocios en Uruguay que necesitan impresiones 3D personalizadas
- Aficionados y makers que comparan materiales, tiempos y costos
- Clientes que prefieren cotizar por WhatsApp y subir archivos para un presupuesto rápido

## Quick Start

1. **Setup**: See `docs/guides/setup.md` for environment setup
2. **Status**: Check `docs/status/progress.yaml` for current progress
3. **Architecture**: Review `docs/architecture/overview.md` for technical details
4. **Standards**: Follow `standards/coding.md` for development guidelines

## Tech Stack

- **Frontend**: Next.js (App Router) + TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Next.js Route Handlers (Node.js)
- **API**: HTTP API within Next.js (ISR for catalog/blog)
- **Database**: TBD (align with CMS choice)
- **Authentication**: None for MVP (TBD for checkout/accounts)
- **Deployment**: TBD
- **Testing**: Jest + Testing Library; Playwright e2e; axe for a11y
- **Monitoring**: Sentry; Lighthouse CI; basic uptime checks

## Project Structure

```
.
├── app/                    # Next.js App Router source
├── components/             # UI components
├── hooks/                  # React hooks
├── lib/                    # Utilities and helpers
├── docs/                   # Project documentation (single entry point here)
│   ├── index.md            # Project overview (start here)
│   ├── README.md           # Minimal pointer to index.md
│   ├── architecture/       # Technical implementation
│   │   ├── overview.md     # System architecture
│   │   ├── database.md     # Data model
│   │   └── api.md          # API specifications
│   ├── guides/             # How-to documentation
│   │   ├── setup.md        # Environment setup
│   │   └── deployment.md   # Deployment processes
│   ├── status/             # Current state only
│   │   ├── progress.yaml   # Machine-readable status
│   │   └── priorities.md   # Current priorities only
│   ├── design-system/      # Design tokens/components docs
│   ├── session-management/ # AI session notes/checklists
│   ├── templates/          # Doc templates
│   └── _working/           # Scratchpad (non-source-of-truth)
├── standards/              # Immutable standards
│   ├── coding.md           # Code conventions
│   ├── patterns.md         # Architectural patterns
│   ├── business-rules.md   # Domain logic
│   └── documentation.md    # Documentation governance
├── package.json
├── yarn.lock
└── next.config.mjs
```

## Current Status

Status is tracked in a single source of truth:
- Machine‑readable status: `docs/status/progress.yaml`
- Current priorities only: `docs/status/priorities.md`

<!-- Status details live only in docs/status to maintain a single source of truth. -->

## Key Features

### Core Features
- **Catalog with SEO**: Dynamic metadata, Open Graph, JSON‑LD for Product/LocalBusiness
- **Custom Order Flow**: 5‑step form with secure multi‑file uploads and validation
- **Analytics + Consent**: GA4 + Plausible dual setup behind a privacy banner
- **WhatsApp Handoff**: Quick contact from key points in the journey
- **Content**: Blog system with article SEO; policy pages (privacy/terms)
- **i18n + A11y Baseline**: Spanish default (voseo), WCAG‑aligned components

### Planned Features
- **Checkout & Payments**: Prioritize Mercado Pago with local methods
- **Reviews & Subscriptions**: Product reviews, optional recurring offerings
- **Search & Filters**: Better product discovery; faceted navigation rules

### Future Features
- **3D Viewer**: Interactive previews for supported formats
- **Accounts**: Saved quotes/orders, status tracking
- **Edge Caching/PWA**: Faster loads and offline‑friendly patterns

## Architecture Highlights

### Design Principles
- **Single Source of Truth**: Each piece of information exists in exactly one location
- **AI-First Design**: Structure optimized for AI agent consumption
- **Progressive Disclosure**: Information layers from high-level to implementation details
- **Machine-Readable Data**: Status and progress in structured formats

### Key Architectural Decisions
1. **Next.js App Router + ISR**: Modern routing with incremental static regeneration for speed
2. **Secure Uploads**: Pre‑signed URLs (S3/GCS), 200MB cap, MIME validation, virus scan
3. **Analytics with Consent**: GA4 + Plausible gated by privacy banner and UTM hygiene

### Technology Choices
- **Tailwind + shadcn/ui**: Tokenized, accessible components with fast iteration
- **Zustand**: Simple, explicit client state for cart/forms
- **React Hook Form + Zod**: Robust, typed validation for complex multi‑step flows

## Development Workflow

### Getting Started
1. **Clone Repository**: `git clone [repository-url]`
2. **Install Dependencies**: `yarn install`
3. **Environment Setup**: Follow `docs/guides/setup.md`
4. **Start Development**: `yarn dev`

### Development Standards
- **Code Style**: Follow `standards/coding.md`
- **Testing**: Maintain [target]% test coverage
- **Documentation**: Update docs when making changes; follow documentation governance (`../standards/documentation.md`)
- **Code Review**: All changes require review

### Available Scripts
```bash
yarn dev          # Start development server
yarn build        # Build for production
yarn test         # Run tests
yarn lint         # Code linting
yarn type-check   # TypeScript checking
```

## AI Development Assistance

### MCP Integration
This project uses Model Context Protocol (MCP) for enhanced AI development assistance:

- **Documentation Server**: Access to all project documentation
- **Standards Server**: Access to coding standards and patterns
- **Context Loading**: Automatic context injection for AI agents

### AI Context Files
- **Master Context**: `.ai/context.yaml` - Project metadata and status
- **Agent Instructions**: `.ai/agent-instructions.md` - AI behavior guidelines
- **MCP Configuration**: `.ai/mcp-config.json` - Server setup

### AI-Friendly Features
- **Single Source of Truth**: No duplicate information across files
- **Machine-Readable Status**: YAML-based progress tracking
- **Context Injection**: AI instructions embedded in relevant sections
- **Progressive Disclosure**: Information organized by detail level

## Performance & Quality

### Performance Targets
- **LCP**: ≤ 2.5s on 4G/low‑end device
- **CLS**: ≤ 0.1
- **TBT**: ≤ 200ms
- **Response Time**: P95 ≤ 500ms for API routes
- **Uptime**: ≥ 99.9%

### Quality Metrics
- **Test Coverage**: ≥ 70% unit/integration; e2e on core flows
- **Code Quality**: No critical lints; bundle size budgets enforced
- **Security**: Dependabot clean; vulnerability scans pass
- **Accessibility**: WCAG 2.2 AA via APCA tokens; axe clean in CI

## Security Considerations

### Authentication & Authorization
- **MVP**: No auth required; quotes via form + WhatsApp
- **Future**: Customer accounts and RBAC for admin operations

### Data Protection
- **Validation**: Zod schemas for forms; MIME/size checks for uploads
- **Uploads**: Pre‑signed, server‑validated; optional antivirus scanning
- **Transport**: HTTPS everywhere; secure headers

### Compliance
- **Privacy**: Consent banner; data minimization; Spanish policy pages
- **Commerce**: Uruguay‑specific payments/shipping disclosures

## Deployment & Infrastructure

### Environments
- **Development**: [Dev environment setup]
- **Staging**: [Staging environment setup]
- **Production**: [Production environment setup]

### Deployment Strategy
- **CI/CD Pipeline**: [Pipeline description]
- **Rollback Strategy**: [Rollback approach]
- **Monitoring**: [Monitoring setup]

### Infrastructure
- **Hosting**: [Hosting platform]
- **CDN**: [CDN setup]
- **Database**: [Database hosting]
- **Storage**: [Storage solution]

## Monitoring & Observability

### Application Monitoring
- **Performance Metrics**: [Performance monitoring]
- **Error Tracking**: [Error tracking setup]
- **User Analytics**: [Analytics implementation]

### Infrastructure Monitoring
- **System Metrics**: [System monitoring]
- **Database Monitoring**: [Database monitoring]
- **API Monitoring**: [API monitoring]

### Alerting
- **Critical Alerts**: [Critical alerting setup]
- **Performance Alerts**: [Performance alerting]
- **Security Alerts**: [Security alerting]

## Business Context

### Stakeholders
- **[Stakeholder 1]**: [Role and involvement]
- **[Stakeholder 2]**: [Role and involvement]
- **[Stakeholder 3]**: [Role and involvement]

### Success Metrics
- **[Metric 1]**: [Target and measurement]
- **[Metric 2]**: [Target and measurement]
- **[Metric 3]**: [Target and measurement]

### Constraints
- **Timeline**: [Project timeline constraints]
- **Budget**: [Budget considerations]
- **Resources**: [Resource limitations]
- **Technical**: [Technical constraints]

## Related Documentation

### Core Documentation
- [Current Status](status/progress.yaml) - Machine-readable project status
- [System Architecture](architecture/overview.md) - Technical architecture details
- [Setup Guide](guides/setup.md) - Environment setup instructions
- [Coding Standards](../standards/coding.md) - Development guidelines
- [Documentation Governance](../standards/documentation.md) - Documentation standards and workflow

### Additional Resources
- [API Documentation](architecture/api.md) - API specifications
- [Database Schema](architecture/database.md) - Data model details
- [Deployment Guide](guides/deployment.md) - Deployment instructions
- [Business Rules](../standards/business-rules.md) - Domain logic

## Getting Help

### For Developers
- Start with this file for project overview
- Check status files for current progress
- Refer to specific guides for implementation details
- Follow coding standards for development

### For AI Assistants
- Load `.ai/context.yaml` first for project context
- Check `docs/status/progress.yaml` for current status
- Refer to `standards/coding.md` for code generation
- Use context injection patterns for consistency

### For Stakeholders
- Review this overview for project understanding
- Check status files for progress updates
- Refer to business context for project goals
- Contact development team for specific questions

## Contributing

### Development Process
1. **Fork Repository**: Create your own copy
2. **Create Branch**: Use feature branch naming
3. **Follow Standards**: Adhere to coding standards
4. **Write Tests**: Maintain test coverage
5. **Update Documentation**: Keep docs current
6. **Submit PR**: Request code review

### Documentation Updates
- **Single Source of Truth**: Update information in one place only
- **Context Injection**: Add AI instructions where relevant
- **Machine-Readable**: Use structured formats for status data
- **Progressive Disclosure**: Organize by detail level

---

**This documentation follows AI-friendly architecture principles with single source of truth, machine-readable data, and context injection patterns for optimal AI development assistance.**