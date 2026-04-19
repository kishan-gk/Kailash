import { motion } from 'motion/react';
import React, { ReactNode } from 'react';
import { colors, typography, spacing, animation, transitions } from './tokens';

/**
 * Typography Components
 * Consistent text styling across the application
 */

interface TypographyProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  animated?: boolean;
  delay?: number;
}

// Section Title - Animated gradient uppercase label
export function SectionTitle({ children, className = '', style, animated = true, delay = 0 }: TypographyProps) {
  const baseStyles = {
    fontFamily: typography.fontFamily.secondary,
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.semibold,
    textTransform: 'uppercase' as const,
    letterSpacing: typography.letterSpacing.wide,
    lineHeight: typography.lineHeight.tight,
    fontVariationSettings: "'wdth' 100",
  };

  const animatedStyles = {
    background: 'linear-gradient(90deg, #3d1f99, #4d28c2, #6032f2, #8b3dff, #a855f7, #8b3dff, #6032f2, #4d28c2, #3d1f99)',
    backgroundSize: '300% 100%',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent',
    animation: 'shine-gradient 4s linear infinite',
  };

  if (!animated) {
    return (
      <div className={`flex flex-col justify-center relative shrink-0 w-full mb-3 ${className}`} style={{ ...baseStyles, ...style }}>
        <p>{children}</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: transitions.smooth.duration, delay }}
      className={`flex flex-col justify-center relative shrink-0 w-full mb-3 ${className}`}
      style={{ ...baseStyles, ...animatedStyles, ...style }}
    >
      <p>{children}</p>
    </motion.div>
  );
}

// Section Heading - Main heading below section title
export function SectionHeading({ children, className = '', style, animated = true, delay = 0.1 }: TypographyProps) {
  const styles = {
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.fontSize['3xl'],
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.snug,
    color: colors.text.primary,
    ...style,
  };

  if (!animated) {
    return (
      <div className={`flex flex-col justify-center relative shrink-0 w-full ${className}`} style={styles}>
        <h2 className="text-[36px] md:text-[48px]">{children}</h2>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: transitions.smooth.duration, delay }}
      className={`flex flex-col justify-center relative shrink-0 w-full ${className}`}
      style={styles}
    >
      <h2 className="text-[36px] md:text-[48px] tracking-tight">{children}</h2>
    </motion.div>
  );
}

// Card Title
export function CardTitle({ children, className = '', style }: TypographyProps) {
  return (
    <h3
      className={`font-bold text-white ${className}`}
      style={{
        fontFamily: typography.fontFamily.primary,
        fontSize: typography.fontSize.xl,
        lineHeight: typography.lineHeight.normal,
        ...style,
      }}
    >
      {children}
    </h3>
  );
}

// Card Description
export function CardDescription({ children, className = '', style }: TypographyProps) {
  return (
    <p
      className={`text-[${colors.text.secondary}] ${className}`}
      style={{
        fontFamily: typography.fontFamily.secondary,
        fontSize: typography.fontSize.sm,
        lineHeight: typography.lineHeight.normal,
        ...style,
      }}
    >
      {children}
    </p>
  );
}

// Body Text
export function BodyText({ children, className = '', style, animated = false, delay = 0 }: TypographyProps) {
  const styles = {
    fontFamily: typography.fontFamily.secondary,
    fontSize: typography.fontSize.base,
    lineHeight: typography.lineHeight.normal,
    fontVariationSettings: "'wdth' 100",
    ...style,
  };

  if (!animated) {
    return (
      <div className={`flex flex-col justify-center relative shrink-0 w-full ${className}`} style={styles}>
        <p>{children}</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: transitions.smooth.duration, delay }}
      className={`flex flex-col justify-center relative shrink-0 w-full ${className}`}
      style={styles}
    >
      <p>{children}</p>
    </motion.div>
  );
}

// Chip/Tag Text
export function ChipText({ children, className = '', style }: TypographyProps) {
  return (
    <span
      className={className}
      style={{
        fontFamily: typography.fontFamily.secondary,
        fontSize: typography.fontSize.xs,
        fontWeight: typography.fontWeight.medium,
        lineHeight: typography.lineHeight.normal,
        ...style,
      }}
    >
      {children}
    </span>
  );
}

// Small Text
export function SmallText({ children, className = '', style }: TypographyProps) {
  return (
    <span
      className={className}
      style={{
        fontFamily: typography.fontFamily.secondary,
        fontSize: typography.fontSize.sm,
        lineHeight: typography.lineHeight.normal,
        ...style,
      }}
    >
      {children}
    </span>
  );
}

// Stat Number
export function StatNumber({ children, className = '', style }: TypographyProps) {
  return (
    <span
      className={className}
      style={{
        fontFamily: "'Montserrat', sans-serif",
        fontSize: typography.fontSize['3xl'],
        fontWeight: typography.fontWeight.bold,
        lineHeight: typography.lineHeight.snug,
        ...style,
      }}
    >
      {children}
    </span>
  );
}

// Stat Label
export function StatLabel({ children, className = '', style }: TypographyProps) {
  return (
    <p
      className={className}
      style={{
        fontFamily: typography.fontFamily.secondary,
        fontSize: typography.fontSize.base,
        fontWeight: typography.fontWeight.bold,
        lineHeight: typography.lineHeight.normal,
        fontVariationSettings: "'wdth' 100",
        ...style,
      }}
    >
      {children}
    </p>
  );
}
