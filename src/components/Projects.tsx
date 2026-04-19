import { useState } from 'react';
import { usePortfolioData } from '../App';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Section, SectionContainer, SectionHeader, CardGrid, AnimatedItem } from '../design-system/Layout';
import { ProjectCardContainer } from '../design-system/Cards';
import { SmallText } from '../design-system/Typography';
import { colors, spacing, radius, animation } from '../design-system/tokens';
import { trackMousePosition, createStaggerContainer, createStaggerItem } from '../design-system/utils';
import { CaseStudyModal } from './CaseStudyModal';
import imgFinanceFlowSaaS from "figma:asset/d71266f3370df5026e290c5af71bdc0cf73aee95.png";

const projects = [
  {
    title: 'Zinigo',
    description: 'A comprehensive financial management platform for small businesses',
    category: 'SaaS Product',
    image: imgFinanceFlowSaaS,
    brandColor: '#F97316',
  },
  {
    title: 'Medicare',
    description: 'Healthcare appointment scheduling and telemedicine platform',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    brandColor: '#3B82F6',
  },
  {
    title: 'Techstart',
    description: 'Modern landing page and marketing website for a tech startup',
    category: 'Website',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    brandColor: '#10B981',
  },
  {
    title: 'Taskpro',
    description: 'Project management tool with intuitive task tracking',
    category: 'SaaS Product',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    brandColor: '#A855F7',
  },
  {
    title: 'Novabank',
    description: 'Next-gen banking interface for digital nomads',
    category: 'Fintech',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    brandColor: '#EC4899',
  },
  {
    title: 'Orbit',
    description: '3D interactive marketing site for space tourism',
    category: 'Web3',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    brandColor: '#06B6D4',
  },
];

const containerVariants = createStaggerContainer();
const itemVariants = createStaggerItem();

export function Projects() {
  const portfolio = usePortfolioData();

  // Merge API projects with local static project (which has a figma asset image)
  const apiProjects = portfolio?.projects ?? [];
  const mergedProjects = apiProjects.map(p => {
    // For the first project (Zinigo), use the local figma asset image
    if (p.title === 'Zinigo') {
      return { ...p, image: imgFinanceFlowSaaS };
    }
    return p;
  });
  const displayProjects = mergedProjects.length > 0 ? mergedProjects : projects;

  const [selectedProject, setSelectedProject] = useState<typeof displayProjects[0] | null>(null);

  return (
    <Section id="projects" background="secondary">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <SectionContainer maxWidth="xl">
          <SectionHeader 
            title="SELECTED PROJECTS" 
            heading="Featured Work" 
            align="center"
          />

          <CardGrid columns={{ mobile: 1, tablet: 2, desktop: 3 }}>
            {displayProjects.map((project) => (
              <AnimatedItem key={project.title}>
                <ProjectCard 
                  project={project} 
                  onClick={() => setSelectedProject(project)}
                />
              </AnimatedItem>
            ))}
          </CardGrid>
        </SectionContainer>
      </motion.div>

      <CaseStudyModal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        project={selectedProject} 
      />
    </Section>
  );
}

function ProjectCard({ 
  project, 
  onClick 
}: { 
  project: { title: string; description: string; category?: string; image: any; brand_color?: string; brandColor?: string; case_study_url?: string | null };
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ProjectCardContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={trackMousePosition}
      className="cursor-pointer"
      onClick={onClick}
    >
      {/* Image Container */}
      <div 
        className="w-full aspect-video relative shrink-0 overflow-hidden" 
        style={{ backgroundColor: colors.background.darkGlass }}
      >
        <motion.div
          className="absolute inset-0 overflow-hidden"
          initial={false}
          animate={{
            top: isHovered ? spacing[1] : spacing[4],
            left: isHovered ? spacing[1] : spacing[4],
            right: isHovered ? spacing[1] : spacing[4],
            bottom: 0,
            borderRadius: isHovered ? radius.xl : radius.lg,
          }}
          transition={{ 
            duration: animation.duration.slow, 
            ease: animation.easing.custom 
          }}
        >
          {project.image.startsWith('figma:') ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}
        </motion.div>
      </div>

      {/* Content Area */}
      <div 
        className="p-5 flex flex-col flex-grow relative z-10" 
        style={{ backgroundColor: colors.background.darkGlass }}
      >
        {/* Logo Placeholder */}
        <div
          className="mb-4 h-8 flex items-center transition-all"
          style={{
            opacity: isHovered ? 1 : 0.6,
            filter: isHovered ? 'none' : 'grayscale(100%)',
            transitionDuration: `${animation.duration.normal}s`,
          }}
        >
          <div className="flex items-center gap-3">
            {/* Monogram Mark */}
            <div
              className="h-8 w-8 rounded-full flex items-center justify-center font-bold text-sm"
              style={{
                backgroundColor: isHovered ? (project.brand_color ?? project.brandColor) : '#262626',
                color: isHovered ? colors.text.primary : '#A3A3A3',
                transition: `all ${animation.duration.normal}s ease`,
              }}
            >
              {project.title.charAt(0)}
            </div>

            {/* Logotype Text */}
            <span
              className="font-bold text-lg tracking-tight"
              style={{
                color: isHovered ? colors.text.primary : '#A3A3A3',
                fontFamily: 'Aeonik, sans-serif',
              }}
            >
              {project.title}
            </span>
          </div>
        </div>

        {/* Description */}
        <p 
          className="text-[14px] leading-[1.6] mb-8 font-light line-clamp-3"
          style={{ color: colors.text.primary }}
        >
          {project.description}
        </p>

        {/* Spacer to push Footer to bottom */}
        <div className="mt-auto">
          {/* Divider */}
          <div 
            className="h-px w-full relative mb-5"
            style={{ backgroundColor: colors.border.default }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          {/* Footer CTA */}
          <div className="flex items-center gap-2 group/cta">
            <SmallText className="font-normal" style={{ color: colors.text.muted }}>
              View full case study
            </SmallText>
            <ArrowRight
              className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1"
              style={{ color: colors.text.primary }}
            />
          </div>
        </div>
      </div>
    </ProjectCardContainer>
  );
}