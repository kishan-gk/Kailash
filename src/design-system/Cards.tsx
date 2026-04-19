import { motion } from 'motion/react';
import React, { ReactNode, MouseEvent } from 'react';
import { colors, radius, shadows, spacing, animation, transitions } from './tokens';

/**
 * Base Card Components
 * Reusable card components with consistent styling
 */

interface BaseCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  animated?: boolean;
  delay?: number;
  onMouseMove?: (e: MouseEvent<HTMLDivElement>) => void;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

// Glass Card - Basic glass morphism card
export function GlassCard({ 
  children, 
  className = '', 
  style,
  animated = true, 
  delay = 0,
  onMouseMove,
  onClick 
}: BaseCardProps) {
  const cardStyles = {
    backgroundColor: colors.background.glass,
    border: `1px solid ${colors.border.default}`,
    borderRadius: radius['2xl'],
    padding: spacing[5],
    ...style,
  };

  if (!animated) {
    return (
      <div 
        className={`relative ${className}`} 
        style={cardStyles}
        onMouseMove={onMouseMove}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: transitions.default.duration,
        delay,
        ease: transitions.default.ease,
      }}
      className={`relative ${className}`}
      style={cardStyles}
      onMouseMove={onMouseMove}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

// Interactive Card - Card with hover effects and glow
export function InteractiveCard({ 
  children, 
  className = '', 
  style,
  animated = true, 
  delay = 0,
  onMouseMove,
  onClick 
}: BaseCardProps) {
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    currentTarget.style.setProperty('--mouse-x', `${x}px`);
    currentTarget.style.setProperty('--mouse-y', `${y}px`);
    onMouseMove?.(e);
  };

  const cardStyles = {
    backgroundColor: colors.background.glass,
    border: `1px solid ${colors.border.default}`,
    borderRadius: radius['2xl'],
    boxShadow: shadows.base,
    ...style,
  };

  const CardContent = (
    <div 
      className={`group relative overflow-hidden cursor-pointer transition-colors duration-300 hover:border-purple-500/20 ${className}`}
      style={cardStyles}
      onMouseMove={handleMouseMove}
      onClick={onClick}
    >
      {/* Hover Glow Effect */}
      <div 
        className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(139, 61, 255, 0.08), transparent 40%)',
        }}
      />
      
      {/* Soft Border Glow */}
      <div className="absolute inset-0 rounded-[20px] border border-white/5 pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col">
        {children}
      </div>
    </div>
  );

  if (!animated) {
    return CardContent;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: transitions.default.duration,
        delay,
        ease: "easeOut",
      }}
      className="h-full"
    >
      {CardContent}
    </motion.div>
  );
}

// Project Card Container - Specialized for project cards
export function ProjectCardContainer({ 
  children, 
  className = '',
  style,
  onMouseMove,
  onClick,
  onMouseEnter,
  onMouseLeave
}: BaseCardProps) {
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    currentTarget.style.setProperty('--mouse-x', `${x}px`);
    currentTarget.style.setProperty('--mouse-y', `${y}px`);
    onMouseMove?.(e);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`group relative flex flex-col h-full rounded-[20px] overflow-hidden transition-all duration-300 cursor-pointer ${className}`}
      style={{
        backgroundColor: colors.background.secondary,
        border: `1px solid ${colors.border.default}`,
        ...style,
      }}
    >
      {/* Hover Glow Effect */}
      <div 
        className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(139, 61, 255, 0.1), transparent 40%)',
        }}
      />
      
      {children}
    </div>
  );
}

// Experience Card - Specialized for experience timeline
export function ExperienceCard({ 
  children, 
  className = '',
  style,
  animated = true, 
  delay = 0,
  onMouseMove 
}: BaseCardProps) {
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    onMouseMove?.(e);
  };

  const cardStyles = {
    backgroundColor: colors.background.glass,
    border: `1px solid ${colors.border.default}`,
    borderRadius: radius['2xl'],
    padding: spacing[6],
    ...style,
  };

  if (!animated) {
    return (
      <div 
        className={`group/card relative ${className}`}
        style={cardStyles}
        onMouseMove={handleMouseMove}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: transitions.default.duration,
        delay,
        ease: "easeOut",
      }}
      onMouseMove={handleMouseMove}
      className={`group/card relative ${className}`}
      style={cardStyles}
    >
      {children}
    </motion.div>
  );
}

// Stats Card - For metrics display
export function StatsCard({ 
  children, 
  className = '',
  style,
  animated = true, 
  delay = 0 
}: BaseCardProps) {
  const cardStyles = {
    backgroundColor: colors.purple.subtle,
    borderRadius: radius['2xl'],
    padding: `${spacing[5]} ${spacing[10]}`,
    ...style,
  };

  if (!animated) {
    return (
      <div className={`content-stretch flex gap-[40px] items-center relative shrink-0 ${className}`} style={cardStyles}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: transitions.smooth.duration, delay }}
      className={`content-stretch flex gap-[40px] items-center relative shrink-0 ${className}`}
      style={cardStyles}
    >
      {children}
    </motion.div>
  );
}

// Chip/Tag Component
interface ChipProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'purple';
}

export function Chip({ children, className = '', variant = 'purple' }: ChipProps) {
  const variants = {
    default: {
      backgroundColor: colors.background.elevated,
      border: `1px solid ${colors.border.default}`,
    },
    purple: {
      backgroundColor: colors.purple.subtle,
      border: `1px solid transparent`,
    },
  };

  return (
    <div
      className={`px-[12px] py-[8px] rounded-full text-[${colors.text.tertiary}] text-[12px] font-medium leading-normal font-['Archivo',sans-serif] whitespace-nowrap transition-colors duration-300 group-hover:bg-[${colors.purple.subtle}] group-hover:border-purple-500/20 ${className}`}
      style={variants[variant]}
    >
      {children}
    </div>
  );
}