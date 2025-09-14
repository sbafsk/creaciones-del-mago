# Design System & UI Component Guidelines

> **AI Context**: Single source of truth for design system and UI standards.
> For project overview: see `../index.md`
> For current status: see `../status/progress.yaml`
> For coding standards: see `../../standards/coding.md`

## Overview

This design system ensures consistent, accessible, and maintainable user interfaces across the application. All components and patterns must follow these guidelines to maintain quality and usability standards.

---

## Accessibility Standards (WCAG 2.1 AA)

### Core Accessibility Principles

#### 1. Perceivable
- **Color Contrast**: Minimum 4.5:1 for normal text, 3:1 for large text
- **Alternative Text**: Provide meaningful alt text for all images and icons
- **Scalable Text**: Support zoom up to 200% without loss of functionality
- **Color Independence**: Don't rely solely on color to convey information

#### 2. Operable
- **Keyboard Navigation**: All interactive elements must be keyboard accessible
- **Touch Targets**: Minimum 44x44px for mobile usability
- **No Seizures**: Avoid content that flashes more than 3 times per second
- **Focus Management**: Clear, visible focus indicators on all interactive elements

#### 3. Understandable
- **Clear Labels**: Use descriptive, consistent labeling
- **Predictable Navigation**: Maintain consistent navigation patterns
- **Error Prevention**: Clear validation and error messages
- **Language Attributes**: Proper language attributes for screen readers

#### 4. Robust
- **Semantic HTML**: Use proper HTML elements and ARIA attributes
- **Screen Reader Support**: Full compatibility with assistive technologies
- **Browser Compatibility**: Support modern browsers and accessibility tools
- **Progressive Enhancement**: Basic functionality without JavaScript

### Implementation Checklist

```typescript
// Example accessible component structure
interface AccessibleComponentProps {
  // Required accessibility props
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-required'?: boolean;
  'aria-expanded'?: boolean;
  
  // Standard props
  id?: string;
  className?: string;
  disabled?: boolean;
  
  // Event handlers
  onClick?: () => void;
  onKeyDown?: (e: KeyboardEvent) => void;
}

const AccessibleComponent: React.FC<AccessibleComponentProps> = ({
  'aria-label': ariaLabel,
  'aria-describedby': describedBy,
  'aria-required': required,
  disabled,
  onClick,
  onKeyDown,
  children
}) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
    onKeyDown?.(e);
  };

  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-label={ariaLabel}
      aria-describedby={describedBy}
      aria-required={required}
      aria-disabled={disabled}
      className={`
        min-h-[44px] min-w-[44px]
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `}
      onClick={disabled ? undefined : onClick}
      onKeyDown={disabled ? undefined : handleKeyDown}
    >
      {children}
    </div>
  );
};
```

---

## Design Tokens

### Color System

#### Primary Colors
```css
/* Primary Brand Colors */
--color-primary-50: #eff6ff;
--color-primary-100: #dbeafe;
--color-primary-500: #3b82f6; /* Main brand color */
--color-primary-600: #2563eb;
--color-primary-700: #1d4ed8;
--color-primary-900: #1e3a8a;

/* Neutral Colors */
--color-gray-50: #f9fafb;
--color-gray-100: #f3f4f6;
--color-gray-200: #e5e7eb;
--color-gray-300: #d1d5db;
--color-gray-500: #6b7280;
--color-gray-700: #374151;
--color-gray-800: #1f2937;
--color-gray-900: #111827;

/* Semantic Colors */
--color-success: #10b981;
--color-warning: #f59e0b;
--color-error: #ef4444;
--color-info: #3b82f6;
```

#### Accessibility Color Requirements
```css
/* High contrast combinations for accessibility */
.text-on-primary { color: white; } /* 4.5:1 contrast ratio */
.text-on-gray-100 { color: var(--color-gray-900); } /* 4.5:1 */
.text-on-gray-900 { color: white; } /* 4.5:1 */

/* Focus ring colors */
.focus-ring-primary {
  box-shadow: 0 0 0 2px var(--color-primary-500);
}

.focus-ring-error {
  box-shadow: 0 0 0 2px var(--color-error);
}
```

### Typography Scale

```css
/* Font Sizes with Line Heights */
--text-xs: 0.75rem;     /* 12px - line-height: 1rem */
--text-sm: 0.875rem;    /* 14px - line-height: 1.25rem */
--text-base: 1rem;      /* 16px - line-height: 1.5rem */
--text-lg: 1.125rem;    /* 18px - line-height: 1.75rem */
--text-xl: 1.25rem;     /* 20px - line-height: 1.75rem */
--text-2xl: 1.5rem;     /* 24px - line-height: 2rem */
--text-3xl: 1.875rem;   /* 30px - line-height: 2.25rem */
--text-4xl: 2.25rem;    /* 36px - line-height: 2.5rem */

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Spacing Scale

```css
/* Consistent spacing scale */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
```

---

## Component Library

### Button Component

#### Standard Implementation
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  type = 'button',
  'aria-label': ariaLabel,
  'aria-describedby': describedBy,
  children,
  onClick
}) => {
  const baseClasses = [
    // Base styles
    'inline-flex items-center justify-center font-medium',
    'rounded-md transition-colors duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    // Minimum touch target size
    'min-h-[44px]'
  ];

  const variantClasses = {
    primary: [
      'bg-blue-600 text-white',
      'hover:bg-blue-700 focus:ring-blue-500',
      'disabled:bg-blue-300'
    ],
    secondary: [
      'bg-gray-100 text-gray-900',
      'hover:bg-gray-200 focus:ring-gray-500',
      'disabled:bg-gray-50'
    ],
    outline: [
      'border-2 border-blue-600 text-blue-600 bg-transparent',
      'hover:bg-blue-50 focus:ring-blue-500',
      'disabled:border-blue-300 disabled:text-blue-300'
    ],
    ghost: [
      'text-gray-700 bg-transparent',
      'hover:bg-gray-100 focus:ring-gray-500',
      'disabled:text-gray-400'
    ],
    danger: [
      'bg-red-600 text-white',
      'hover:bg-red-700 focus:ring-red-500',
      'disabled:bg-red-300'
    ]
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const disabledClasses = disabled || loading
    ? 'cursor-not-allowed opacity-50'
    : 'cursor-pointer';

  const allClasses = [
    ...baseClasses,
    ...variantClasses[variant],
    sizeClasses[size],
    disabledClasses
  ].join(' ');

  return (
    <button
      type={type}
      className={allClasses}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      aria-describedby={describedBy}
      aria-busy={loading}
      onClick={onClick}
    >
      {loading && (
        <span className="mr-2" aria-hidden="true">
          <LoadingSpinner size="sm" />
        </span>
      )}
      {children}
    </button>
  );
};
```

#### Accessibility Features
- ✅ Minimum 44px touch target size
- ✅ Focus ring indicators
- ✅ Keyboard navigation support
- ✅ Screen reader compatibility
- ✅ Loading and disabled states
- ✅ ARIA attributes support

### Form Components

#### Input Component
```typescript
interface InputProps {
  id: string;
  name: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  label: string;
  placeholder?: string;
  value: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  'aria-describedby'?: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  type = 'text',
  label,
  placeholder,
  value,
  error,
  required = false,
  disabled = false,
  'aria-describedby': describedBy,
  onChange,
  onBlur
}) => {
  const inputClasses = [
    // Base styles
    'w-full px-3 py-2 border rounded-md',
    'text-gray-900 placeholder-gray-500',
    'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
    // Minimum touch target
    'min-h-[44px]',
    // State styles
    error 
      ? 'border-red-300 focus:ring-red-500' 
      : 'border-gray-300',
    disabled 
      ? 'bg-gray-50 cursor-not-allowed' 
      : 'bg-white'
  ].join(' ');

  const errorId = error ? `${id}-error` : undefined;
  const descriptionId = describedBy || errorId;

  return (
    <div className="space-y-1">
      <label 
        htmlFor={id}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
        {required && (
          <span className="text-red-500 ml-1" aria-label="required">
            *
          </span>
        )}
      </label>
      
      <input
        id={id}
        name={name}
        type={type}
        className={inputClasses}
        placeholder={placeholder}
        value={value}
        required={required}
        disabled={disabled}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={descriptionId}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
      />
      
      {error && (
        <div 
          id={errorId}
          className="text-sm text-red-600"
          role="alert"
          aria-live="polite"
        >
          {error}
        </div>
      )}
      
      {/* Hidden description for screen readers */}
      {required && (
        <div id={`${id}-required`} className="sr-only">
          This field is required
        </div>
      )}
    </div>
  );
};
```

#### Form Accessibility Checklist
- ✅ Every input has a corresponding label
- ✅ Required fields are clearly marked
- ✅ Error messages are announced to screen readers
- ✅ Field descriptions provided via aria-describedby
- ✅ Proper input types for mobile keyboards
- ✅ Form validation feedback

### Navigation Components

#### Accessible Navigation Menu
```typescript
interface NavigationProps {
  items: NavigationItem[];
  currentPath: string;
  onItemClick: (item: NavigationItem) => void;
}

interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: NavigationItem[];
}

const Navigation: React.FC<NavigationProps> = ({
  items,
  currentPath,
  onItemClick
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <nav role="navigation" aria-label="Main navigation">
      <ul role="menubar" className="space-y-1">
        {items.map((item) => (
          <NavigationItem
            key={item.id}
            item={item}
            currentPath={currentPath}
            expanded={expandedItems.has(item.id)}
            onToggle={() => toggleExpanded(item.id)}
            onItemClick={onItemClick}
          />
        ))}
      </ul>
    </nav>
  );
};

const NavigationItem: React.FC<NavigationItemProps> = ({
  item,
  currentPath,
  expanded,
  onToggle,
  onItemClick
}) => {
  const isCurrent = currentPath === item.href;
  const hasChildren = item.children && item.children.length > 0;

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (hasChildren && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <li role="none">
      <div className="flex items-center">
        <a
          href={item.href}
          role="menuitem"
          aria-current={isCurrent ? 'page' : undefined}
          aria-expanded={hasChildren ? expanded : undefined}
          className={`
            flex items-center px-3 py-2 rounded-md text-sm font-medium
            min-h-[44px] w-full
            focus:outline-none focus:ring-2 focus:ring-blue-500
            ${isCurrent 
              ? 'bg-blue-100 text-blue-700' 
              : 'text-gray-700 hover:bg-gray-100'
            }
          `}
          onClick={(e) => {
            e.preventDefault();
            onItemClick(item);
          }}
          onKeyDown={handleKeyDown}
        >
          {item.icon && (
            <span className="mr-3" aria-hidden="true">
              {item.icon}
            </span>
          )}
          <span className="flex-1">{item.label}</span>
          
          {hasChildren && (
            <button
              type="button"
              className="ml-2 p-1"
              aria-label={`Toggle ${item.label} submenu`}
              onClick={(e) => {
                e.stopPropagation();
                onToggle();
              }}
            >
              <ChevronIcon 
                className={`w-4 h-4 transition-transform ${
                  expanded ? 'rotate-90' : ''
                }`}
              />
            </button>
          )}
        </a>
      </div>
      
      {hasChildren && expanded && (
        <ul role="menu" className="ml-6 mt-1 space-y-1">
          {item.children.map((child) => (
            <NavigationItem
              key={child.id}
              item={child}
              currentPath={currentPath}
              expanded={false}
              onToggle={() => {}}
              onItemClick={onItemClick}
            />
          ))}
        </ul>
      )}
    </li>
  );
};
```

---

## Responsive Design Standards

### Breakpoint System
```css
/* Mobile First Approach */
/* Default: Mobile (0px - 639px) */

/* Small screens (640px+) */
@media (min-width: 640px) { /* sm: */ }

/* Medium screens (768px+) */
@media (min-width: 768px) { /* md: */ }

/* Large screens (1024px+) */
@media (min-width: 1024px) { /* lg: */ }

/* Extra large screens (1280px+) */
@media (min-width: 1280px) { /* xl: */ }
```

### Responsive Component Patterns
```typescript
// Responsive grid system
const ResponsiveGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="
    grid gap-4
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4
  ">
    {children}
  </div>
);

// Responsive navigation
const ResponsiveNav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-4">
        {/* Navigation items */}
      </nav>

      {/* Mobile Navigation Toggle */}
      <button
        className="md:hidden min-h-[44px] min-w-[44px]"
        aria-label="Toggle mobile menu"
        aria-expanded={isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <HamburgerIcon />
      </button>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden mt-2 space-y-2">
          {/* Mobile navigation items */}
        </nav>
      )}
    </>
  );
};
```

---

## Performance Guidelines

### Image Optimization
```typescript
// Responsive image component
interface ResponsiveImageProps {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  sizes,
  className,
  loading = 'lazy'
}) => (
  <img
    src={src}
    alt={alt}
    sizes={sizes}
    loading={loading}
    className={className}
    // Add srcSet for different screen densities
    srcSet={`
      ${src}?w=400 400w,
      ${src}?w=800 800w,
      ${src}?w=1200 1200w,
      ${src}?w=1600 1600w
    `}
  />
);
```

### Animation Performance
```css
/* Use hardware acceleration for animations */
.animate-slide-in {
  transform: translateX(-100%);
  transition: transform 0.3s ease-out;
  will-change: transform;
}

.animate-slide-in.active {
  transform: translateX(0);
}

/* Reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
  .animate-slide-in {
    transition: none;
  }
}
```

---

## Testing Guidelines

### Accessibility Testing
```typescript
// Example accessibility tests
describe('Button Component Accessibility', () => {
  it('should have proper ARIA attributes', () => {
    render(
      <Button aria-label="Save document" disabled>
        Save
      </Button>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Save document');
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  it('should be keyboard navigable', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click me</Button>);

    const button = screen.getByRole('button');
    button.focus();
    
    fireEvent.keyDown(button, { key: 'Enter' });
    expect(onClick).toHaveBeenCalled();
  });

  it('should meet color contrast requirements', () => {
    // Use tools like jest-axe or manual contrast checking
    render(<Button variant="primary">Test</Button>);
    // Test implementation would check contrast ratios
  });
});
```

### Visual Regression Testing
```typescript
// Storybook visual testing configuration
export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    chromatic: { 
      viewports: [320, 768, 1200] // Test multiple viewports
    }
  }
};

// Test all button variants for visual consistency
export const AllVariants = () => (
  <div className="space-y-4">
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="danger">Danger</Button>
  </div>
);
```

---

## Documentation Requirements

### Component Documentation Template
```markdown
# Component Name

Brief description of the component and its purpose.

## Usage

```typescript
import { ComponentName } from './ComponentName';

<ComponentName
  prop1="value"
  prop2={true}
  onAction={handleAction}
>
  Content
</ComponentName>
```

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| prop1 | string | - | Yes | Description |
| prop2 | boolean | false | No | Description |
| onAction | function | - | No | Callback function |

## Accessibility

- List of accessibility features
- ARIA attributes used
- Keyboard navigation support
- Screen reader compatibility

## Examples

### Basic Usage
[Code example]

### With Error State
[Code example]

### Responsive Behavior
[Code example]

## Related Components

- [ComponentA](./ComponentA.md)
- [ComponentB](./ComponentB.md)
```

---

## Related Documentation

- [Project Overview](../index.md)
- [System Architecture](../architecture/overview.md)
- [Coding Standards](../../standards/coding.md)
- [Development Patterns](../../standards/patterns.md)
- [Current Status](../status/progress.yaml)

---

*This design system should be updated whenever new components are added or accessibility improvements are implemented.*

**Last Updated**: [Current Date]
**Next Review**: When adding new components or major design changes