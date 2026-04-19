# Design System Documentation

This design system provides a comprehensive, token-based approach to building consistent UI components across the entire application.

## Overview

The design system is built on these core principles:
- **No hardcoded values** - All styling comes from predefined tokens
- **Reusable components** - Shared components eliminate duplication
- **Consistent patterns** - Unified approach to animations, spacing, and colors
- **Type-safe** - Full TypeScript support for all tokens and components

## Structure

```
/design-system/
├── tokens.ts          # All design tokens (colors, spacing, typography, etc.)
├── Typography.tsx     # Text components (SectionTitle, SectionHeading, etc.)
├── Cards.tsx          # Card components (GlassCard, InteractiveCard, etc.)
├── Layout.tsx         # Layout components (Section, SectionContainer, etc.)
├── utils.ts           # Utility functions (trackMousePosition, variants, etc.)
└── index.ts           # Central export point
```

## Core Tokens

### Colors

All colors are centralized in the `colors` object:

```typescript
import { colors } from './design-system/tokens';

// Usage
style={{ backgroundColor: colors.background.primary }}
style={{ color: colors.text.primary }}
style={{ borderColor: colors.border.default }}
```

**Available color categories:**
- `colors.primary` - Primary purple shades (50-900)
- `colors.purple` - Purple variants (darkest, dark, base, bright, light, glow, border, subtle)
- `colors.background` - Background colors (primary, secondary, card, elevated, glass, etc.)
- `colors.text` - Text colors (primary, secondary, tertiary, muted, disabled)
- `colors.border` - Border colors (default, hover, purple, purpleLight)
- `colors.semantic` - Semantic colors (success, warning, error, info)

### Typography

Typography tokens provide consistent text styling:

```typescript
import { typography } from './design-system/tokens';

// Font families
typography.fontFamily.primary    // Poppins
typography.fontFamily.secondary  // Archivo
typography.fontFamily.heading    // Satoshi

// Font sizes
typography.fontSize.xs    // 12px
typography.fontSize.sm    // 14px
typography.fontSize.base  // 16px
typography.fontSize['3xl'] // 36px
typography.fontSize['4xl'] // 48px

// Font weights
typography.fontWeight.light      // 300
typography.fontWeight.normal     // 400
typography.fontWeight.semibold   // 600
typography.fontWeight.bold       // 700
```

### Spacing

Consistent spacing scale from 0-32:

```typescript
import { spacing } from './design-system/tokens';

// Usage
style={{ padding: spacing[6] }}      // 24px
style={{ marginBottom: spacing[10] }} // 40px
style={{ gap: spacing[4] }}          // 16px
```

### Border Radius

```typescript
import { radius } from './design-system/tokens';

radius.sm    // 4px
radius.md    // 8px
radius.lg    // 12px
radius.xl    // 16px
radius['2xl'] // 20px
radius.full  // 9999px
```

### Animation

Consistent animation durations and easing:

```typescript
import { animation, transitions } from './design-system/tokens';

// Durations
animation.duration.fast    // 0.2s
animation.duration.normal  // 0.3s
animation.duration.slow    // 0.4s

// Easing curves
animation.easing.custom    // [0.22, 1, 0.36, 1]
animation.easing.spring    // [0.04, 0.62, 0.23, 0.98]

// Preset transitions
transitions.default  // { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
transitions.smooth   // { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
```

## Typography Components

Pre-built typography components with consistent styling:

### SectionTitle
Animated gradient uppercase label for sections:
```tsx
import { SectionTitle } from './design-system/Typography';

<SectionTitle>SELECTED PROJECTS</SectionTitle>
```

### SectionHeading
Main heading below section title:
```tsx
import { SectionHeading } from './design-system/Typography';

<SectionHeading>Featured Work</SectionHeading>
```

### CardTitle & CardDescription
For card content:
```tsx
import { CardTitle, CardDescription } from './design-system/Typography';

<CardTitle>UI Design</CardTitle>
<CardDescription>Crafting visually refined interfaces...</CardDescription>
```

### Other Components
- `BodyText` - Standard body copy
- `ChipText` - Small text for chips/tags
- `SmallText` - Small supporting text
- `StatNumber` - Large number display
- `StatLabel` - Label for stats

All typography components support:
- `animated` prop - Enable/disable animations
- `delay` prop - Animation delay
- `className` prop - Additional custom classes

## Card Components

### GlassCard
Basic glassmorphism card:
```tsx
import { GlassCard } from './design-system/Cards';

<GlassCard animated delay={0.1}>
  {/* Content */}
</GlassCard>
```

### InteractiveCard
Card with hover glow effects:
```tsx
import { InteractiveCard } from './design-system/Cards';

<InteractiveCard animated delay={0.2} onMouseMove={trackMousePosition}>
  {/* Content */}
</InteractiveCard>
```

### ProjectCardContainer
Specialized card for project displays:
```tsx
import { ProjectCardContainer } from './design-system/Cards';

<ProjectCardContainer onMouseMove={trackMousePosition}>
  {/* Project content */}
</ProjectCardContainer>
```

### StatsCard
Card for displaying metrics:
```tsx
import { StatsCard } from './design-system/Cards';

<StatsCard animated delay={0.4}>
  {/* Stats content */}
</StatsCard>
```

### Chip
Tag/chip component:
```tsx
import { Chip } from './design-system/Cards';

<Chip variant="purple">Responsive design</Chip>
```

## Layout Components

### Section
Main section wrapper with consistent background and padding:
```tsx
import { Section } from './design-system/Layout';

<Section 
  id="projects" 
  background="secondary"  // 'primary' | 'secondary' | 'gradient'
  paddingY={20}
  paddingX={6}
>
  {/* Content */}
</Section>
```

### SectionContainer
Max-width container for section content:
```tsx
import { SectionContainer } from './design-system/Layout';

<SectionContainer maxWidth="xl">
  {/* Content */}
</SectionContainer>
```

### SectionHeader
Combined title + heading component:
```tsx
import { SectionHeader } from './design-system/Layout';

<SectionHeader 
  title="SELECTED PROJECTS" 
  heading="Featured Work" 
  align="center"
  marginBottom={16}
/>
```

### CardGrid
Responsive grid for cards:
```tsx
import { CardGrid } from './design-system/Layout';

<CardGrid columns={{ mobile: 1, tablet: 2, desktop: 3 }}>
  {items.map(item => <Card key={item.id} {...item} />)}
</CardGrid>
```

### FlexContainer
Flexible container with configurable direction and alignment:
```tsx
import { FlexContainer } from './design-system/Layout';

<FlexContainer 
  direction="column"
  align="center"
  justify="between"
  gap={6}
>
  {/* Content */}
</FlexContainer>
```

### AnimatedItem
Wrapper for grid items with stagger animation:
```tsx
import { AnimatedItem } from './design-system/Layout';

<AnimatedItem delay={index * 0.1}>
  {/* Content */}
</AnimatedItem>
```

## Utility Functions

### trackMousePosition
Helper for cursor-following glow effects:
```tsx
import { trackMousePosition } from './design-system/utils';

<div onMouseMove={trackMousePosition}>
  {/* Mouse position tracked as CSS variables --mouse-x and --mouse-y */}
</div>
```

### Animation Variant Helpers
```tsx
import { 
  createFadeInVariant,
  createStaggerContainer,
  createStaggerItem 
} from './design-system/utils';

const fadeIn = createFadeInVariant(0.2, 0.6);
const container = createStaggerContainer(0.1, 0.2);
const item = createStaggerItem(0.8);
```

## Common Patterns

### Section with Header and Cards
```tsx
<Section id="expertise" background="gradient" paddingY={20} paddingX={6}>
  <SectionContainer maxWidth="xl">
    <SectionHeader 
      title="EXPERTISE" 
      heading="My Craft" 
      align="center"
      marginBottom={20}
    />
    
    <CardGrid columns={{ mobile: 1, tablet: 2, desktop: 3 }}>
      {items.map((item, index) => (
        <InteractiveCard key={item.id} delay={index * 0.1}>
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>{item.description}</CardDescription>
        </InteractiveCard>
      ))}
    </CardGrid>
  </SectionContainer>
</Section>
```

### Hover Glow Effect
```tsx
const [isHovered, setIsHovered] = useState(false);

<div 
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  onMouseMove={trackMousePosition}
>
  {/* Glow overlay */}
  <div 
    className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
    style={{
      background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(139, 61, 255, 0.08), transparent 40%)',
    }}
  />
</div>
```

## Best Practices

1. **Always use tokens** - Never hardcode colors, spacing, or other design values
2. **Leverage components** - Use pre-built components instead of recreating patterns
3. **Consistent animations** - Use the animation tokens for all transitions
4. **Responsive design** - Use the breakpoints token for media queries
5. **Accessibility** - All components include proper ARIA labels and semantic HTML

## Extending the System

To add new tokens:
1. Add the token to `/design-system/tokens.ts`
2. Export it from the appropriate category
3. Update this documentation

To add new components:
1. Create the component in the appropriate file (Typography, Cards, Layout)
2. Import and use tokens from `tokens.ts`
3. Export from the component file
4. Add to `/design-system/index.ts`

## Migration Guide

To migrate existing components:

1. **Replace hardcoded colors:**
   ```tsx
   // Before
   style={{ backgroundColor: '#0B0815' }}
   
   // After
   import { colors } from './design-system/tokens';
   style={{ backgroundColor: colors.background.primary }}
   ```

2. **Replace hardcoded spacing:**
   ```tsx
   // Before
   className="mb-16 gap-6 p-5"
   
   // After
   import { spacing } from './design-system/tokens';
   style={{ 
     marginBottom: spacing[16], 
     gap: spacing[6], 
     padding: spacing[5] 
   }}
   ```

3. **Use typography components:**
   ```tsx
   // Before
   <h2 className="text-4xl font-bold">Title</h2>
   
   // After
   import { SectionHeading } from './design-system/Typography';
   <SectionHeading>Title</SectionHeading>
   ```

4. **Use layout components:**
   ```tsx
   // Before
   <section className="py-20 px-6 bg-[#0A0A0A]">
     <div className="max-w-7xl mx-auto">
   
   // After
   import { Section, SectionContainer } from './design-system/Layout';
   <Section background="secondary" paddingY={20} paddingX={6}>
     <SectionContainer maxWidth="xl">
   ```
