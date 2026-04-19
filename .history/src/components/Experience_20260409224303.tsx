import { useState, MouseEvent } from 'react';
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Section, SectionContainer, SectionHeader, FlexContainer } from '../design-system/Layout';
import { ExperienceCard } from '../design-system/Cards';
import { SmallText } from '../design-system/Typography';
import { colors, spacing, radius, animation, transitions } from '../design-system/tokens';
import imgBrainydx from "figma:asset/4057161be6c0a52401f24fbc97dfd2b3481bcfc6.png";
import imgDigital from "figma:asset/d75de1780db5e36ed318b272c147fa565e2b801a.png";
import imgRablo from "figma:asset/45db5e2b164a98a6371aa04ae601322811bd6872.png";

// Data Structure
const companies = [
  {
    id: 'brainydx',
    name: 'BrainyDX',
    logoType: 'image',
    logoSrc: imgBrainydx,
    period: 'May 2025 – Present',
    roles: [
      {
        title: 'Senior UI/UX Designer',
        period: 'May 2025 – Present',
        description: [
          'Leading the design team for enterprise solutions',
          'Spearheading the new design system initiative',
          'Collaborating with stakeholders to define product roadmap'
        ]
      }
    ]
  },
  {
    id: 'digital-innovations',
    name: 'Digital Innovations',
    logoType: 'image',
    logoSrc: imgDigital,
    period: 'Jan 2025 – Apr 2025',
    roles: [
      {
        title: 'Senior UI Designer',
        period: 'Jan 2025 – Apr 2025',
        description: [
          'Designed high-fidelity interfaces for fintech products',
          'Improved user engagement by 25% through UI optimizations',
          'Mentored junior designers on visual design principles'
        ]
      }
    ]
  },
  {
    id: 'rablo',
    name: 'Rablo.in',
    logoType: 'image',
    logoSrc: imgRablo,
    period: 'Aug 2024 – Jan 2025',
    roles: [
      {
        title: 'UI/UX Trainee, Bootcamp',
        period: 'First 15 Days',
        description: [
          'Intensive training on UI/UX fundamentals',
          'Completed capstone project',
          'Learned agile methodologies'
        ]
      },
      {
        title: 'UI/UX Designer',
        period: 'Aug 2024 – Oct 2024',
        description: [
          'Contributed to the core product design',
          'Conducted user research and usability testing',
          'Collaborated with cross-functional teams'
        ]
      },
      {
        title: 'Associate UI/UX Designer',
        period: 'Nov 2024 – Jan 2025',
        description: [
          'Led an internal project end-to-end',
          'Created and maintained the design system',
          'Trained junior designers and guided implementation',
          'Took ownership of UI direction and team coordination'
        ]
      }
    ]
  }
];

export function Experience() {
  return (
    <Section id="experience" background="secondary">
      <SectionContainer maxWidth="xl">
        <SectionHeader 
          title="EXPERIENCE" 
          heading="Professional Journey" 
          align="center"
          marginBottom={20}
        />

        <FlexContainer direction="column" gap={6}>
          {companies.map((company, index) => (
            <CompanyCard key={company.id} company={company} index={index} />
          ))}
        </FlexContainer>
      </SectionContainer>
    </Section>
  );
}

function CompanyCard({ company, index }: { company: typeof companies[0], index: number }) {
  const [expandedRoleIndex, setExpandedRoleIndex] = useState<number>(-1);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <ExperienceCard
      delay={index * animation.delay.short}
      onMouseMove={handleMouseMove}
      className="w-full flex flex-col md:flex-row gap-4 md:gap-6 hover:z-10"
    >
      {/* Glow Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover/card:opacity-100"
        style={{
          borderRadius: radius['2xl'],
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(120, 119, 198, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Left Column: Company Info */}
      <div className="relative z-10 md:w-[250px] shrink-0 flex flex-col gap-3">
        <div 
          className="h-[48px] flex items-center group/logo w-fit relative"
          onMouseEnter={() => setIsLogoHovered(true)}
          onMouseLeave={() => setIsLogoHovered(false)}
        >
          <img 
            src={company.logoSrc} 
            alt={company.name} 
            className="h-full w-auto object-contain max-w-[180px] grayscale group-hover/card:grayscale-0 transition-all"
            style={{ transitionDuration: `${animation.duration.normal}s` }}
          />
        </div>
        <p 
          className="font-semibold text-base leading-snug pl-1"
          style={{
            color: colors.text.primary,
            fontFamily: "'Archivo', sans-serif",
          }}
        >
          {company.period}
        </p>
      </div>

      {/* Right Column: Roles Timeline */}
      <div className="relative z-10 flex-grow flex flex-col">
        {company.roles.map((role, i) => (
          <RoleItem 
            key={i} 
            role={role} 
            isActive={expandedRoleIndex === i}
            isFirst={i === 0}
            isLast={i === company.roles.length - 1}
            onClick={() => setExpandedRoleIndex(expandedRoleIndex === i ? -1 : i)}
          />
        ))}
      </div>

      {/* Floating Tooltip */}
      <AnimatePresence>
        {isLogoHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: animation.duration.instant }}
            className="absolute top-0 left-0 z-50 pointer-events-none"
            style={{
              x: mouseX,
              y: mouseY,
            }}
          >
            <div 
              className="ml-4 mt-4 px-3 py-1.5 shadow-xl whitespace-nowrap"
              style={{
                backgroundColor: '#1A1A1A',
                border: `1px solid ${colors.border.default}`,
                borderRadius: radius.md,
              }}
            >
              <SmallText className="text-xs font-medium tracking-wide" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                {company.name}
              </SmallText>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ExperienceCard>
  );
}

function RoleItem({ 
  role, 
  isActive, 
  isFirst, 
  isLast,
  onClick 
}: { 
  role: typeof companies[0]['roles'][0], 
  isActive: boolean,
  isFirst: boolean,
  isLast: boolean,
  onClick: () => void
}) {
  const isCurrent = role.period.toLowerCase().includes('present');
  const isSingleRole = isFirst && isLast;

  return (
    <div className="flex group relative">
      {/* Timeline Track */}
      <div className="flex flex-col items-center w-6 shrink-0 pt-6">
        {!isSingleRole && (
          <>
            {/* Top Line */}
            {!isFirst && (
              <div 
                className="absolute top-0 h-6 w-[2px] -translate-x-[0.5px]"
                style={{ 
                  backgroundColor: colors.border.default, 
                  left: '11px' 
                }} 
              />
            )}
            
            {/* Dot */}
            <div className="relative z-10 w-2 h-2">
              {isCurrent && (
                <motion.div
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{ scale: 2.2, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: colors.text.primary }}
                />
              )}
              <div 
                className="relative w-full h-full rounded-full transition-all"
                style={{
                  backgroundColor: isActive || isCurrent ? colors.text.primary : 'rgba(255, 255, 255, 0.4)',
                  boxShadow: isCurrent ? '0 0 8px rgba(255, 255, 255, 0.4)' : 'none',
                  transitionDuration: `${animation.duration.normal}s`,
                }}
              />
            </div>
            
            {/* Bottom Line */}
            {!isLast && (
              <div 
                className="absolute top-8 bottom-0 w-[2px] -translate-x-[0.5px]"
                style={{ 
                  backgroundColor: colors.border.default, 
                  left: '11px' 
                }} 
              />
            )}
          </>
        )}
      </div>

      {/* Role Card */}
      <div className="flex-grow">
        <motion.div 
          layout="position"
          onClick={onClick}
          className="relative w-full overflow-hidden cursor-pointer transition-colors border"
          style={{
            borderRadius: radius.md,
            backgroundColor: isActive ? colors.background.glassHover : 'transparent',
            borderColor: isActive ? colors.border.default : 'transparent',
            transitionDuration: `${animation.duration.normal}s`,
          }}
        >
          {/* Header Area */}
          <motion.div 
            layout
            className="p-4 flex flex-col md:flex-row md:items-start justify-between gap-4"
          >
            <motion.div 
              layout
              className={`flex w-full ${isActive ? 'flex-col items-start gap-1' : 'flex-row items-center gap-3'}`}
            >
              <motion.span 
                layout="position"
                className="font-semibold text-lg"
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  color: colors.text.primary,
                }}
              >
                {role.title}
              </motion.span>
              
              <AnimatePresence initial={false} mode="popLayout">
                {!isActive && (
                  <motion.div 
                    initial={{ opacity: 0, width: 0, scale: 0 }}
                    animate={{ opacity: 1, width: 'auto', scale: 1 }}
                    exit={{ opacity: 0, width: 0, scale: 0 }}
                    transition={{ duration: animation.duration.fast }}
                    className="flex items-center justify-center origin-left"
                  >
                    <div 
                      className="w-1 h-1 rounded-full shrink-0"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              
              <motion.span 
                layout="position"
                className={`capitalize origin-left ${isActive ? 'text-xs opacity-80 tracking-wide font-medium' : 'text-sm opacity-100'}`}
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  color: colors.text.tertiary,
                  transitionDuration: `${animation.duration.normal}s`,
                }}
              >
                {role.period}
              </motion.span>
            </motion.div>
            
            <ChevronDown 
              className={`w-5 h-5 shrink-0 mt-1 transition-transform ${isActive ? 'rotate-180' : ''}`}
              style={{ 
                color: 'rgba(255, 255, 255, 0.6)',
                transitionDuration: `${animation.duration.normal}s`,
              }}
            />
          </motion.div>

          {/* Description Content */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ 
                  duration: animation.duration.slow, 
                  ease: animation.easing.spring 
                }}
              >
                <div className="px-8 pb-6 pt-1">
                  <motion.ul 
                    className="space-y-3"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: { transition: { staggerChildren: 0.08 } },
                      hidden: {}
                    }}
                  >
                    {role.description.map((point, i) => (
                      <motion.li 
                        key={i} 
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: { opacity: 1, y: 0, transition: { duration: animation.duration.normal } }
                        }}
                        className="list-disc text-sm leading-relaxed pl-1 marker:text-white/60"
                        style={{
                          color: colors.text.tertiary,
                          fontFamily: "'Archivo', sans-serif",
                        }}
                      >
                        {point}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
