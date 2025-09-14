# System Architecture Overview - Creaciones del Mago

> **AI Context**: This is the single source of truth for system architecture.
> For current status: see `../status/progress.yaml`
> For implementation details: see specific architecture files

## Architecture Overview

Creaciones del Mago follows a modern full-stack web application architecture with clear separation of concerns and scalable design patterns.

## High-Level Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │     API Layer   │    │    Backend      │
│   ([Your Frontend]) │◄──►│   ([Your API])  │◄──►│   ([Your DB])   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   UI Components │    │   Data Layer    │    │   Database      │
│   ([Your UI Library]) │    │   ([Your State])│    │   ([Your DB])   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## Technology Stack

### Frontend
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: Zustand
- **Design System**: See `../design-system/components.md`

### Backend
- **Platform**: Next.js Route Handlers (Node.js)
- **API**: HTTP JSON API; ISR for catalog/blog
- **Database**: TBD (align with CMS choice)
- **Authentication**: None for MVP (TBD for checkout/accounts)

### Infrastructure
- **Deployment**: TBD
- **Monitoring**: Sentry; Lighthouse CI
- **CI/CD**: TBD
- **Storage**: Secure uploads with pre‑signed URLs (S3/GCS), virus scan (planned)

## Key Architectural Decisions

### 1. Next.js App Router + ISR
- **Routing**: App Router with file‑system routing
- **Static Generation**: ISR for catalog/blog for speed
- **Benefits**: Performance and simplicity

### 2. Component Architecture
- **Pattern**: Accessible, tokenized components (shadcn/ui)
- **State Management**: Minimal global state with Zustand
- **Performance**: Code splitting and optimized images

### 3. State Management Strategy
- **Local State**: React local state for UI concerns
- **Global State**: Zustand for cart/forms
- **Server State**: Fetched via Route Handlers

### 4. Security Model
- **Authentication**: [Your authentication method]
- **Authorization**: [Your authorization approach]
- **Data Protection**: [Your data protection strategy]
- **API Security**: [Your API security measures]

## Data Flow Architecture

### 1. User Authentication Flow
```
User Login → [Your Auth Service] → [Token Type] → Protected Routes → [Your Auth Policies]
```

### 2. [Your Main Data Flow]
```
[Data Request] → [Your API] → [Your Database] → [Your Cache] → UI
```

### 3. [Your Business Logic Flow]
```
[User Action] → [Your API] → [Business Logic] → [Database] → [Notification]
```

## Performance Considerations

### 1. Frontend Optimization
- **Code Splitting**: [Your code splitting strategy]
- **Image Optimization**: [Your image optimization approach]
- **Bundle Optimization**: [Your bundle optimization techniques]

### 2. Backend Optimization
- **Database Indexing**: [Your indexing strategy]
- **Query Optimization**: [Your query optimization approach]
- **Caching Strategy**: [Your caching implementation]

### 3. Infrastructure Optimization
- **CDN**: [Your CDN solution]
- **Database**: [Your database optimization]
- **API**: [Your API optimization]

## Scalability Strategy

### 1. Horizontal Scaling
- **Frontend**: [Your frontend scaling approach]
- **API**: [Your API scaling strategy]
- **Database**: [Your database scaling plan]

### 2. Vertical Scaling
- **Database**: [Your database scaling approach]
- **API**: [Your API scaling strategy]
- **Storage**: [Your storage scaling plan]

### 3. Future Migration Path
- **Phase 1**: [Your current phase]
- **Phase 2**: [Your next phase]
- **Phase 3**: [Your future phase]

## Development Patterns

### 1. Component Patterns
- **Container/Presenter**: [Your implementation]
- **Custom Hooks**: [Your hook patterns]
- **Error Boundaries**: [Your error handling]

### 2. API Patterns
- **Data Fetching**: [Your data fetching approach]
- **Error Handling**: [Your error handling strategy]
- **Caching**: [Your caching patterns]

### 3. Testing Patterns
- **Unit Testing**: [Your unit testing approach]
- **Integration Testing**: [Your integration testing strategy]
- **E2E Testing**: [Your E2E testing plan]

## Security Architecture

### 1. Authentication & Authorization
- **User Authentication**: [Your auth flow]
- **Role-Based Access**: [Your RBAC implementation]
- **Session Management**: [Your session handling]

### 2. Data Security
- **Input Validation**: [Your validation approach]
- **Data Encryption**: [Your encryption strategy]
- **Secure Communication**: [Your secure communication]

### 3. Infrastructure Security
- **Network Security**: [Your network security measures]
- **Environment Security**: [Your environment protection]
- **Monitoring**: [Your security monitoring]

## Monitoring & Observability

### 1. Application Monitoring
- **Performance Metrics**: [Your performance monitoring]
- **Error Tracking**: [Your error tracking solution]
- **User Analytics**: [Your analytics implementation]

### 2. Infrastructure Monitoring
- **System Metrics**: [Your system monitoring]
- **Database Monitoring**: [Your database monitoring]
- **API Monitoring**: [Your API monitoring]

### 3. Alerting
- **Critical Alerts**: [Your critical alerting]
- **Performance Alerts**: [Your performance alerting]
- **Security Alerts**: [Your security alerting]

## Deployment Architecture

### 1. Environment Strategy
- **Development**: [Your dev environment]
- **Staging**: [Your staging environment]
- **Production**: [Your production environment]

### 2. CI/CD Pipeline
- **Build Process**: [Your build pipeline]
- **Testing**: [Your testing pipeline]
- **Deployment**: [Your deployment strategy]

### 3. Rollback Strategy
- **Database Rollbacks**: [Your database rollback plan]
- **Application Rollbacks**: [Your app rollback strategy]
- **Feature Flags**: [Your feature flag approach]

## Related Documentation

- [Database Architecture](database.md)
- [API Specifications](api.md)
- [Design System](../design-system/components.md)
- [Deployment Guide](../guides/deployment.md)