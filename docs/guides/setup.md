# Environment Setup Guide - Creaciones del Mago

> **AI Context**: This is the single source of truth for environment setup.
> For current status: see `../status/progress.yaml`
> For project overview: see `../index.md`

## Prerequisites

Before setting up Creaciones del Mago, ensure you have the following installed:

- **Node.js**: Version 18+ (recommended: LTS)
- **Yarn**: Package manager (required)
- **Git**: Version control
- **[Your Backend Service]**: For backend services
- **[Your Payment Service]**: For payment processing (if applicable)
- **Cursor AI** (optional): For MCP integration

## Quick Setup (5 minutes)

### 1. Clone the Repository
```bash
git clone [your-repository-url]
cd [project-name]
```

### 2. Install Dependencies
```bash
yarn install
```

### 3. Environment Configuration
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

### 4. Start Development Server
```bash
yarn dev
```

Your application should now be running at `http://localhost:3000`

## Detailed Setup

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# [Your Backend] Configuration
[YOUR_BACKEND]_URL=your_backend_url
[YOUR_BACKEND]_KEY=your_backend_key
[YOUR_BACKEND]_SERVICE_ROLE_KEY=your_service_role_key

# Database URLs
DATABASE_URL=your_database_url
DIRECT_URL=your_direct_url

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=[Project Name]

# Security
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# [Your Payment Service] Configuration (if applicable)
[PAYMENT_SERVICE]_SECRET_KEY=your_secret_key
[PAYMENT_SERVICE]_WEBHOOK_SECRET=your_webhook_secret
NEXT_PUBLIC_[PAYMENT_SERVICE]_PUBLISHABLE_KEY=your_publishable_key

# Email Configuration (if applicable)
SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password

# Monitoring (if applicable)
SENTRY_DSN=your_sentry_dsn
ANALYTICS_ID=your_analytics_id
```

### Database Setup

1. **Create [Your Database] Project**: 
   - Go to [your-database-service.com]
   - Create new project
   - Note your project URL and keys

2. **Run Database Migrations**:
   ```bash
   npx prisma migrate dev
   ```

3. **Seed Database** (optional):
   ```bash
   npx prisma db seed
   ```

4. **Verify Connection**:
   ```bash
   npx prisma studio
   ```

### Authentication Setup

1. **Configure [Your Auth Service]**:
   - Enable authentication in your service dashboard
   - Configure authentication methods
   - Set up user policies and roles

2. **Test Authentication**:
   - Try user registration
   - Test login/logout
   - Verify role-based access
   - Test protected routes

## MCP Integration Setup

### 1. Install MCP Package
```bash
yarn add -D @modelcontextprotocol/server-filesystem
```

### 2. Create MCP Configuration
Create `.cursor/mcp.json` in project root:
```json
{
  "mcpServers": {
    "[project-name]-docs": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-filesystem", "./docs"]
    },
    "[project-name]-standards": {
      "command": "npx", 
      "args": ["@modelcontextprotocol/server-filesystem", "./standards"]
    }
  }
}
```

### 3. Session Management (Recommended)
- Use `docs/session-management/session-notes.md` to capture focus and blockers
- Use `docs/session-management/resumption-checklist.md` to resume quickly

### 4. Documentation Workflow
- Use `.claude/commands/` for `/doc-audit`, `/doc-structure`, `/api-docs`, `/review-cycle`
- Follow `.claude/output-style.md` for consistent writing
- Draft in `docs/_working/` and promote to `docs/` when stable

### 5. Resources
Repo-level supporting materials live in `resources/` and are not copied into projects.

## Development Workflow

### Available Scripts

```json
{
  "scripts": {
    "dev": "Next.js development server",
    "build": "Production build",
    "start": "Production server",
    "lint": "Code linting",
    "test": "Run tests",
    "test:ci": "Run tests with coverage",
    "test:e2e": "Run E2E tests",
    "type-check": "TypeScript type checking",
    "db:migrate": "Database migrations",
    "db:seed": "Seed database with sample data",
    "db:studio": "Open database studio",
    "format": "Format code with Prettier",
    "format:check": "Check code formatting",
    "analyze": "Analyze bundle size",
    "clean": "Clean build artifacts"
  }
}
```

### Code Quality Tools

- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting
- **TypeScript**: Type checking
- **Husky**: Git hooks for quality checks
- **Lint-staged**: Pre-commit hooks

## Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Kill process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
yarn dev -- -p 3001
```

#### Database Connection Issues
- Verify environment variables are correct
- Check database service status
- Confirm network connectivity
- Verify database credentials and permissions

#### Build Errors
- Clear node_modules: `rm -rf node_modules && yarn install`
- Clear Next.js cache: `rm -rf .next`
- Clear package manager cache: `yarn cache clean`
- Check for TypeScript errors: `yarn type-check`

#### Authentication Issues
- Verify auth service configuration
- Check environment variables
- Test with different browsers/incognito mode
- Review auth service logs

#### MCP Integration Issues
- Ensure package is installed: `yarn list @modelcontextprotocol/server-filesystem`
- Check JSON syntax in `.cursor/mcp.json`
- Restart Cursor AI completely
- Verify file paths in MCP configuration

#### Performance Issues
- Check bundle size: `yarn analyze`
- Review network tab in browser dev tools
- Monitor memory usage
- Check for memory leaks in components

### Environment-Specific Issues

#### Development Environment
- Hot reload not working: Restart dev server
- Styling issues: Check TailwindCSS configuration
- API calls failing: Verify backend service is running

#### Production Environment
- Build failing: Check environment variables
- Runtime errors: Review error logs
- Performance issues: Enable monitoring

## Security Considerations

### Environment Variables
- Never commit `.env.local` to version control
- Use different secrets for different environments
- Rotate secrets regularly
- Use environment-specific configurations

### Database Security
- Enable SSL connections
- Use connection pooling
- Implement proper access controls
- Regular security audits

### API Security
- Implement rate limiting
- Use HTTPS in production
- Validate all inputs
- Implement proper CORS policies

## Performance Optimization

### Core Web Vitals Setup

Based on real-world implementation experience, implement these optimization patterns:

#### 1. Build Optimization
```json
// next.config.js
module.exports = {
  // Enable experimental optimizations
  experimental: {
    optimizePackageImports: [
      'react-icons',
      '@heroicons/react',
      'lucide-react'
    ]
  },
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128, 256]
  },
  
  // Compression
  compress: true,
  
  // Remove console logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  }
};
```

#### 2. Bundle Analysis
```bash
# Analyze bundle size regularly
yarn analyze

# Expected production metrics (based on real project data):
# - Build Time: ~9.8 seconds
# - First Load JS: ~200 kB (shared vendor chunk + app)
# - Route Sizes: Most routes ~115 B; Complex routes ~1.4 kB
# - Static Generation: All routes prerendered
```

#### 3. Performance Monitoring Setup
```typescript
// lib/performance.ts
export const trackWebVitals = (metric: any) => {
  const { id, name, value } = metric;
  
  // Track to your analytics service
  if (typeof window !== 'undefined') {
    // Example: Google Analytics
    gtag('event', name, {
      event_category: 'Web Vitals',
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      event_label: id,
      non_interaction: true
    });
  }
};
```

#### 4. Image Optimization Patterns
```typescript
// components/OptimizedImage.tsx
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className
}) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    priority={priority}
    className={className}
    // Enable WebP/AVIF formats
    placeholder="blur"
    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
    // Responsive sizes
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  />
);
```

### Expected Performance Metrics

Based on successful production deployment experience:

#### Build Performance
- **Build Time**: ~10 seconds for full application
- **Bundle Size**: 
  - First Load JS: ~200 kB
  - Individual Routes: 100-500 B each
  - Vendor Chunks: Optimized with code splitting

#### Core Web Vitals Targets
- **LCP** (Largest Contentful Paint): < 2.5 seconds
- **FID** (First Input Delay): < 100 milliseconds  
- **CLS** (Cumulative Layout Shift): < 0.1

#### Optimization Features Implemented
- ✅ Code Splitting: Automatic Next.js optimization
- ✅ Image Optimization: WebP/AVIF formats; responsive sizes
- ✅ CSS Purging: Tailwind CSS optimization
- ✅ Static Generation: Pre-rendered pages
- ✅ Package Optimization: optimizePackageImports for icon/UI libs
- ✅ Console Stripping: Remove console logs in production

## Next Steps

After successful setup:

1. **Review Architecture**: See `../architecture/overview.md`
2. **Check Status**: See `../status/progress.yaml`
3. **Start Development**: Begin with current priorities
4. **Run Tests**: Ensure everything is working
5. **Set up MCP**: Configure AI development assistance
6. **Review Standards**: Familiarize yourself with coding standards
7. **Performance Baseline**: Run initial Lighthouse audit
8. **Accessibility Testing**: Implement WCAG 2.1 AA compliance checks

## Related Documentation

- [Project Overview](../index.md)
- [System Architecture](../architecture/overview.md)
- [Current Status](../status/progress.yaml)
- [Coding Standards](../../standards/coding.md)
- [MCP Integration Guide](../../.ai/agent-instructions.md)