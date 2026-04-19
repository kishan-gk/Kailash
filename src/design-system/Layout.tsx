import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { colors, spacing, layout, animation } from './tokens';
import { SectionTitle, SectionHeading } from './Typography';

/**
 * Section Layout Components
 * Consistent section wrappers and containers
 */

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: 'primary' | 'secondary' | 'gradient';
}

// Base Section Container
export function Section({ 
  children, 
  id, 
  className = '', 
  background = 'secondary',
}: SectionProps) {
  const backgrounds = {
    primary: colors.background.primary,
    secondary: colors.background.secondary,
    gradient: 'linear-gradient(180deg, #0A0A0A 0%, #0B0815 25%, #0B0815 75%, #0A0A0A 100%)',
  };

  return (
    <section
      id={id}
      className={`py-20 px-6 md:px-12 relative z-0 ${className}`}
      style={{
        background: backgrounds[background],
      }}
    >
      {children}
    </section>
  );
}

// Section Container with max width
export function SectionContainer({ 
  children, 
  className = '',
  maxWidth = 'xl' 
}: { 
  children: ReactNode; 
  className?: string;
  maxWidth?: keyof typeof layout.maxWidth;
}) {
  return (
    <div 
      className={`mx-auto ${className}`}
      style={{ maxWidth: layout.maxWidth[maxWidth] }}
    >
      {children}
    </div>
  );
}

// Section Header with Title and Heading
interface SectionHeaderProps {
  title: string;
  heading: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
  marginBottom?: number;
}

export function SectionHeader({ 
  title, 
  heading, 
  className = '',
  align = 'center',
  marginBottom = 16
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const mbClass = marginBottom === 16 ? 'mb-16' : marginBottom === 20 ? 'mb-20 md:mb-20' : `mb-${marginBottom}`;

  return (
    <div className={`${alignmentClasses[align]} ${mbClass} ${className}`}>
      <SectionTitle>{title}</SectionTitle>
      <SectionHeading>{heading}</SectionHeading>
    </div>
  );
}

// Card Grid - Specialized grid for cards
export function CardGrid({ 
  children, 
  className = '',
  columns = { mobile: 1, tablet: 2, desktop: 3 }
}: {
  children: ReactNode;
  className?: string;
  columns?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
}) {
  return (
    <div className={`grid grid-cols-1 ${columns.tablet === 2 ? 'md:grid-cols-2' : columns.tablet === 3 ? 'md:grid-cols-3' : 'md:grid-cols-1'} ${columns.desktop === 2 ? 'lg:grid-cols-2' : columns.desktop === 3 ? 'lg:grid-cols-3' : columns.desktop === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-1'} gap-6 items-stretch ${className}`}>
      {children}
    </div>
  );
}

// Flex Container
interface FlexContainerProps {
  children: ReactNode;
  className?: string;
  direction?: 'row' | 'column';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  gap?: number;
  wrap?: boolean;
}

export function FlexContainer({
  children,
  className = '',
  direction = 'column',
  align = 'start',
  justify = 'start',
  gap = 6,
  wrap = false,
}: FlexContainerProps) {
  const directionClasses = {
    row: 'flex-row',
    column: 'flex-col',
  };

  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
  };

  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
  };

  const gapClass = gap === 6 ? 'gap-6' : gap === 4 ? 'gap-4' : `gap-${gap}`;

  return (
    <div
      className={`flex ${directionClasses[direction]} ${alignClasses[align]} ${justifyClasses[justify]} ${gapClass} ${wrap ? 'flex-wrap' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

// Animated Item Wrapper - For grid items
interface AnimatedItemProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedItem({ children, className = '', delay = 0 }: AnimatedItemProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: animation.duration.verySlow,
        delay,
        ease: animation.easing.custom,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className={`h-full ${className}`}
    >
      {children}
    </motion.div>
  );
}
